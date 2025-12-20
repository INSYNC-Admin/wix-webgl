/// <reference lib="dom" />
'use strict';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Fragment-Shader: warmer multi-color Gradient (Orange / Gelb), mehr Varianz
const FRAGMENT_SHADER_MAP = `
uniform sampler2D u_map_tex;

varying float vOpacity;
varying vec2 vUv;

void main() {
    vec3 color = texture2D(u_map_tex, vUv).rgb;

    // Luminanz (Helligkeit) berechnen
    float luminance = dot(color, vec3(0.299, 0.587, 0.114));

    // Drei warme Basisfarben: dunkler orange, goldgelb, soft-gelb
    vec3 c1 = vec3(1.0, 0.518, 0.0); // dunkleres Orange
    vec3 c2 = vec3(1.0, 0.702, 0.0); // Golden
    vec3 c3 = vec3(1.0, 0.827, 0.310); // helles warmes Gelb

    float t = luminance;

    // Zweistufiger Gradient: c1 -> c2 -> c3
    vec3 warm = mix(c1, c2, smoothstep(0.15, 0.6, t));
    warm = mix(warm, c3, smoothstep(0.6, 1.0, t));

    // leichte Variation entlang der Longitude (vUv.x)
    float band = 0.5 + 0.5 * sin(vUv.x * 10.0);
    float strength = mix(0.8, 1.2, band);
    warm *= strength;
    warm = clamp(warm, 0.0, 1.0);

    color = warm;

    // Punkt-Glow wie im Original
    color -= 0.2 * length(gl_PointCoord.xy - vec2(0.5));
    float dotv = 1. - smoothstep(0.38, 0.4, length(gl_PointCoord.xy - vec2(0.5)));
    if (dotv < 0.5) discard;

    gl_FragColor = vec4(color, dotv * vOpacity);
}
`;

const VERTEX_SHADER_MAP = `
uniform sampler2D u_map_tex;
uniform float u_dot_size;
uniform float u_time_since_click;
uniform vec3 u_pointer;

#define PI 3.14159265359

varying float vOpacity;
varying vec2 vUv;

void main() {

    vUv = uv;

    // mask with world map
    float visibility = step(.2, texture2D(u_map_tex, uv).r);
    gl_PointSize = visibility * u_dot_size;

    // make back dots semi-transparent
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vOpacity = (1. / length(mvPosition.xyz) - .7);
    vOpacity = clamp(vOpacity, .03, 1.);

    // add ripple
    float t = u_time_since_click - .1;
    t = max(0., t);
    float max_amp = .15;
    float dist = 1. - .5 * length(position - u_pointer); // 0 .. 1
    float damping = 1. / (1. + 20. * t); // 1 .. 0
    float delta = max_amp * damping * sin(5. * t * (1. + 2. * dist) - PI);
    delta *= 1. - smoothstep(.8, 1., dist);
    vec3 pos = position;
    pos *= (1. + delta);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`;

class GlobePointer extends HTMLElement {
  constructor() {
    super();

    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.rayCaster = null;
    this.controls = null;
    this.globe = null;
    this.globeMesh = null;
    this.mapMaterial = null;
    this.clock = new THREE.Clock();
    this.mouse = new THREE.Vector2(-1, -1);
    this.earthTexture = null;

    this.containerEl = null;
    this.canvas3D = null;

    this.dragged = false;
    this._resizeHandler = () => this.updateSize();
    this._needsRaycast = false;
    this._animationFrame = null;
  }

  connectedCallback() {
    this.setupDOM();
    this.initScene();
    window.addEventListener('resize', this._resizeHandler);
    
    // Initiale Größe nach kurzer Verzögerung setzen, damit das Element gerendert ist
    setTimeout(() => {
      this.updateSize();
    }, 100);
    
    // ResizeObserver für Größenänderungen des Elements
    if (window.ResizeObserver) {
      this._resizeObserver = new ResizeObserver(() => {
        this.updateSize();
      });
      this._resizeObserver.observe(this);
    }
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._resizeHandler);
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
    if (this._animationFrame) {
      cancelAnimationFrame(this._animationFrame);
      this._animationFrame = null;
    }
    if (this.controls) {
      this.controls.dispose();
      this.controls = null;
    }
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.forceContextLoss?.();
      this.renderer = null;
    }
    if (this.scene) {
      this.scene.clear();
      this.scene = null;
    }
  }

  setupDOM() {
    // Wix Custom Element braucht eine Mindesthöhe
    this.style.display = 'block';
    this.style.width = '100%';
    this.style.minHeight = '400px';
    this.style.height = '100%';

    const wrapper = document.createElement('div');
    wrapper.className = 'globe-page';

    wrapper.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          min-height: 400px;
          height: 100%;
        }
        
        .globe-page {
          width: 100%;
          height: 100%;
          min-height: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .globe-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          max-width: 600px;
          max-height: 600px;
          margin: 0 auto;
        }

        canvas {
          display: block;
          position: absolute;
          inset: 0;
        }
      </style>
      <div class="globe-wrapper">
        <canvas id="globe-3d"></canvas>
      </div>
    `;

    this.appendChild(wrapper);

    this.containerEl = wrapper.querySelector('.globe-wrapper');
    this.canvas3D = wrapper.querySelector('#globe-3d');
  }

  initScene() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas3D,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance'
    });
    // Performance: PixelRatio auf 0.75 deckeln für bessere Performance
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 0.75));

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1.1, 1.1, 1.1, -1.1, 0, 3);
    this.camera.position.z = 1.1;

    this.rayCaster = new THREE.Raycaster();
    this.rayCaster.far = 1.15;

    this.createOrbitControls();

    new THREE.TextureLoader().load(
      'https://static.wixstatic.com/media/914fc7_64899b3b7b2a4a3884d7319839e5e760~mv2.png',
      (mapTex) => {
        this.earthTexture = mapTex;
        this.earthTexture.repeat.set(1, 1);
        this.createGlobe();
        this.addCanvasEvents();
        this.updateSize();
        this.renderLoop();
      },
      undefined,
      (err) => {
        console.error('Error loading texture:', err);
      }
    );
  }

  createOrbitControls() {
    const controls = new OrbitControls(this.camera, this.canvas3D);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minPolarAngle = 0.4 * Math.PI;
    controls.maxPolarAngle = 0.4 * Math.PI;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;

    let timestamp;
    controls.addEventListener('start', () => {
      timestamp = Date.now();
    });
    controls.addEventListener('end', () => {
      this.dragged = (Date.now() - timestamp) > 600;
    });

    this.controls = controls;
  }

  createGlobe() {
    // Performance: Detail 5 statt 6 für weniger Punkte, immer noch smooth
    const globeGeometry = new THREE.IcosahedronGeometry(1, 5);

    this.mapMaterial = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER_MAP,
      fragmentShader: FRAGMENT_SHADER_MAP,
      uniforms: {
        u_map_tex: { value: this.earthTexture },
        u_dot_size: { value: 0 }, // wird in updateSize gesetzt
        u_pointer: { value: new THREE.Vector3(0.0, 0.0, 1.0) },
        u_time_since_click: { value: 0 }
      },
      alphaTest: false,
      transparent: true
    });

    this.globe = new THREE.Points(globeGeometry, this.mapMaterial);
    this.scene.add(this.globe);

    this.globeMesh = new THREE.Mesh(
      globeGeometry,
      new THREE.MeshBasicMaterial({
        color: 0x222222,
        transparent: true,
        opacity: 0.05
      })
    );
    this.scene.add(this.globeMesh);
  }

  addCanvasEvents() {
    this.containerEl.addEventListener('mousemove', (e) => {
      this.updateMousePosition(e.clientX, e.clientY);
      this._needsRaycast = true;
    });

    this.containerEl.addEventListener('click', (e) => {
      if (!this.dragged) {
        const x = e.clientX;
        const y = e.clientY;
        this.updateMousePosition(x, y);

        const res = this.checkIntersects();
        if (res.length) {
          // Nur Wobble-Effekt, kein Pointer/Popup
          const n = res[0].face.normal.clone();
          this.mapMaterial.uniforms.u_pointer.value = n;
          this.clock.start(); // Ripple beginnt
        }
      }
    });
  }

  updateMousePosition(eX, eY) {
    const rect = this.containerEl.getBoundingClientRect();
    this.mouse.x = ((eX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -(((eY - rect.top) / rect.height) * 2 - 1);
  }

  checkIntersects() {
    if (!this.globeMesh) return [];
    this.rayCaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.rayCaster.intersectObject(this.globeMesh);
    if (intersects.length) {
      this.containerEl.style.cursor = 'pointer';
    } else {
      this.containerEl.style.cursor = 'auto';
    }
    return intersects;
  }

  renderLoop() {
    if (this.mapMaterial?.uniforms?.u_time_since_click) {
      this.mapMaterial.uniforms.u_time_since_click.value = this.clock.getElapsedTime();
    }

    // Performance: Raycast nur einmal pro Frame statt bei jedem Mousemove
    if (this._needsRaycast) {
      this.checkIntersects();
      this._needsRaycast = false;
    }

    if (this.controls) this.controls.update();
    this.renderer.render(this.scene, this.camera);

    this._animationFrame = requestAnimationFrame(() => this.renderLoop());
  }

  updateSize() {
    // Größe basierend auf dem tatsächlichen Element, nicht dem Window
    const rect = this.getBoundingClientRect();
    const elementWidth = rect.width || this.offsetWidth || 400;
    const elementHeight = rect.height || this.offsetHeight || 400;
    
    // Verwende die kleinere Dimension für einen quadratischen Globe
    const size = Math.min(elementWidth, elementHeight);
    const finalSize = Math.max(size, 300); // Mindestgröße von 300px
    
    if (this.containerEl) {
      this.containerEl.style.width = `${finalSize}px`;
      this.containerEl.style.height = `${finalSize}px`;
    }
    
    if (this.renderer) {
      this.renderer.setSize(finalSize, finalSize);
    }

    // Kleinere Punkte für bessere Performance: 0.01 statt 0.04
    if (this.mapMaterial?.uniforms?.u_dot_size) {
      this.mapMaterial.uniforms.u_dot_size.value = 0.01 * finalSize;
    }
  }
}

customElements.define('globe-pointer', GlobePointer);

