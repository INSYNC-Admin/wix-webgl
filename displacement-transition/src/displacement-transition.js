/// <reference lib="dom" />
'use strict';

import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP ScrollTrigger registrieren
gsap.registerPlugin(ScrollTrigger);

// Version
const DISPLACEMENT_VERSION = '1.0.0';

// Vertex Shader
const VERTEX_SHADER = `
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment Shader - erweitert für 3 Bilder
const FRAGMENT_SHADER = `
  varying vec2 vUv;
  uniform float dispFactor1;  // 0.0 → 1.0 für Bild 1 → Bild 2
  uniform float dispFactor2;  // 0.0 → 1.0 für Bild 2 → Bild 3
  uniform sampler2D disp;     // Displacement Map
  uniform sampler2D texture1; // Bild 1
  uniform sampler2D texture2; // Bild 2
  uniform sampler2D texture3; // Bild 3
  uniform float angle1;
  uniform float angle2;
  uniform float intensity1;
  uniform float intensity2;
  uniform vec2 resolution;
  uniform vec2 texture1Size;
  uniform vec2 texture2Size;
  uniform vec2 texture3Size;
  
  mat2 getRotM(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat2(c, -s, s, c);
  }
  
  // Transformiert UV-Koordinaten für "cover"-Verhalten (wie CSS background-size: cover)
  vec2 coverUV(vec2 uv, vec2 canvasSize, vec2 textureSize) {
    float canvasAspect = canvasSize.x / canvasSize.y;
    float textureAspect = textureSize.x / textureSize.y;
    
    vec2 scale = vec2(1.0);
    if (canvasAspect > textureAspect) {
      // Canvas ist breiter als Textur → skaliere entlang Y
      scale.y = textureAspect / canvasAspect;
    } else {
      // Canvas ist höher als Textur → skaliere entlang X
      scale.x = canvasAspect / textureAspect;
    }
    
    // Zentriere und skaliere
    return (uv - 0.5) * scale + 0.5;
  }
  
  void main() {
    vec4 dispTex = texture2D(disp, vUv);
    vec2 dispVec = vec2(dispTex.r, dispTex.b);
    
    vec4 finalColor;
    
    // Vor 38%: Nur Bild 1 anzeigen (keine Transition)
    if (dispFactor1 <= 0.0 && dispFactor2 <= 0.0) {
      vec2 coverUV1 = coverUV(vUv, resolution, texture1Size);
      finalColor = texture2D(texture1, coverUV1);
    }
    // Erster Übergang: Bild 1 → Bild 2 (38% → 48%)
    else if (dispFactor1 > 0.0 && dispFactor1 < 1.0) {
      vec2 coverUV1 = coverUV(vUv, resolution, texture1Size);
      vec2 coverUV2 = coverUV(vUv, resolution, texture2Size);
      vec2 dispPos1 = coverUV1 + getRotM(angle1) * dispVec * intensity1 * dispFactor1;
      vec2 dispPos2 = coverUV2 + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor1);
      vec4 tex1 = texture2D(texture1, dispPos1);
      vec4 tex2 = texture2D(texture2, dispPos2);
      finalColor = mix(tex1, tex2, dispFactor1);
    }
    // Zwischen 48% und 63%: Nur Bild 2 anzeigen (keine Transition)
    else if (dispFactor1 >= 1.0 && dispFactor2 <= 0.0) {
      vec2 coverUV2 = coverUV(vUv, resolution, texture2Size);
      finalColor = texture2D(texture2, coverUV2);
    }
    // Zweiter Übergang: Bild 2 → Bild 3 (63% → 73%)
    else if (dispFactor2 > 0.0 && dispFactor2 < 1.0) {
      vec2 coverUV2 = coverUV(vUv, resolution, texture2Size);
      vec2 coverUV3 = coverUV(vUv, resolution, texture3Size);
      vec2 dispPos2 = coverUV2 + getRotM(angle1) * dispVec * intensity1 * dispFactor2;
      vec2 dispPos3 = coverUV3 + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor2);
      vec4 tex2 = texture2D(texture2, dispPos2);
      vec4 tex3 = texture2D(texture3, dispPos3);
      finalColor = mix(tex2, tex3, dispFactor2);
    }
    // Nach 73%: Nur Bild 3 anzeigen (beide Übergänge abgeschlossen)
    else {
      vec2 coverUV3 = coverUV(vUv, resolution, texture3Size);
      finalColor = texture2D(texture3, coverUV3);
    }
    
    gl_FragColor = finalColor;
  }
`;

class DisplacementTrigger extends HTMLElement {
  constructor() {
    super();

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.mesh = null;
    this.material = null;
    this.geometry = null;
    this.loader = null;
    this.texture1 = null;
    this.texture2 = null;
    this.texture3 = null;
    this.displacement = null;
    this.texture1Size = null;
    this.texture2Size = null;
    this.texture3Size = null;
    this.scrollTrigger = null;
    this._resizeHandler = null;
    this._resizeTimeout = null;
  }

  connectedCallback() {
    // Setze Standard-Styling für das Custom Element
    this.style.display = 'block';
    this.style.width = '100%';
    this.style.height = '100%';
    this.style.minHeight = '600px';
    this.style.position = 'relative';
    this.style.overflow = 'hidden';

    // Bilder direkt hardcoden (wie Globe Pointer)
    // In Wix Custom Elements funktionieren data-Attribute nicht zuverlässig
    const image1 = 'https://cdn.prod.website-files.com/691dda446874d92d72af7d03/696b998ca6fd3a1267e1342b_image%20315.avif';
    const image2 = 'https://cdn.prod.website-files.com/691dda446874d92d72af7d03/696b998c9085c8dc397ba853_image%20321.avif';
    const image3 = 'https://cdn.prod.website-files.com/691dda446874d92d72af7d03/696b998c52fe6011f65559df_image%20322.avif';
    const displacementImage = 'https://static.wixstatic.com/media/914fc7_b081dc87e37041d8a6d47a325f51d521~mv2.jpeg';

    this.init(image1, image2, image3, displacementImage);
  }

  disconnectedCallback() {
    this.cleanup();
  }

  init(image1, image2, image3, displacementImage) {
    // Three.js Scene Setup
    this.scene = new THREE.Scene();
    this.setCamera();
    this.setRenderer();
    this.setLoader();

    // Füge Canvas zum Element hinzu
    this.appendChild(this.renderer.domElement);

    // Lade Texturen
    this.loadTextures(image1, image2, image3, displacementImage);
  }

  setCamera() {
    const width = this.offsetWidth || this.clientWidth || 512;
    const height = this.offsetHeight || this.clientHeight || 512;

    this.camera = new THREE.OrthographicCamera(
      width / -2.0,
      width / 2.0,
      height / 2.0,
      height / -2.0,
      1.0,
      1000
    );
    this.camera.position.z = 1.0;

    return this;
  }

  setRenderer() {
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setClearColor(0x000000, 0.0);
    
    const width = this.offsetWidth || this.clientWidth || 512;
    const height = this.offsetHeight || this.clientHeight || 512;
    this.renderer.setSize(width, height);

    // Canvas-Styling
    this.renderer.domElement.style.display = 'block';
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.renderer.domElement.style.position = 'absolute';
    this.renderer.domElement.style.top = '0';
    this.renderer.domElement.style.left = '0';

    // Resize Handler
    this._resizeHandler = () => {
      if (this._resizeTimeout) {
        clearTimeout(this._resizeTimeout);
      }
      this._resizeTimeout = setTimeout(() => {
        this.updateSize();
      }, 100);
    };

    window.addEventListener('resize', this._resizeHandler);

    // ResizeObserver für Element-Größenänderungen
    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(() => {
        this.updateSize();
      });
      resizeObserver.observe(this);
    }

    return this;
  }

  updateSize() {
    const width = this.offsetWidth || this.clientWidth || 512;
    const height = this.offsetHeight || this.clientHeight || 512;

    if (width === 0 || height === 0) {
      setTimeout(() => this.updateSize(), 50);
      return;
    }

    if (this.renderer) {
      this.renderer.setSize(width, height);
    }

    if (this.camera) {
      this.camera.left = width / -2.0;
      this.camera.right = width / 2.0;
      this.camera.top = height / 2.0;
      this.camera.bottom = height / -2.0;
      this.camera.updateProjectionMatrix();
    }

    if (this.geometry && this.mesh) {
      this.geometry.dispose();
      this.geometry = new THREE.PlaneGeometry(width, height, 1, 1);
      this.mesh.geometry = this.geometry;
    }

    if (this.material) {
      this.material.uniforms.resolution.value.set(width, height);
    }
  }

  setLoader() {
    this.loader = new THREE.TextureLoader();
    this.loader.setCrossOrigin('');

    return this;
  }

  loadTextures(image1, image2, image3, displacementImage) {
    if (!this.loader) return;

    let loadedCount = 0;
    const totalTextures = 4;

    const onTextureLoad = () => {
      loadedCount++;
      if (loadedCount === totalTextures) {
        this.onAllTexturesLoaded();
      }
    };

    // Lade Texturen und speichere ihre Dimensionen
    this.texture1 = this.loader.load(image1, (texture) => {
      if (texture.image) {
        this.texture1Size = new THREE.Vector2(texture.image.width, texture.image.height);
        // Aktualisiere Material, falls es bereits erstellt wurde
        if (this.material && this.material.uniforms.texture1Size) {
          this.material.uniforms.texture1Size.value = this.texture1Size;
        }
      }
      onTextureLoad();
    });
    this.texture1.minFilter = THREE.LinearFilter;

    this.texture2 = this.loader.load(image2, (texture) => {
      if (texture.image) {
        this.texture2Size = new THREE.Vector2(texture.image.width, texture.image.height);
        if (this.material && this.material.uniforms.texture2Size) {
          this.material.uniforms.texture2Size.value = this.texture2Size;
        }
      }
      onTextureLoad();
    });
    this.texture2.minFilter = THREE.LinearFilter;

    this.texture3 = this.loader.load(image3, (texture) => {
      if (texture.image) {
        this.texture3Size = new THREE.Vector2(texture.image.width, texture.image.height);
        if (this.material && this.material.uniforms.texture3Size) {
          this.material.uniforms.texture3Size.value = this.texture3Size;
        }
      }
      onTextureLoad();
    });
    this.texture3.minFilter = THREE.LinearFilter;

    this.displacement = this.loader.load(displacementImage, onTextureLoad);
    this.displacement.wrapS = this.displacement.wrapT = THREE.RepeatWrapping;
  }

  onAllTexturesLoaded() {
    // Initiale Größe setzen (nach kurzer Verzögerung)
    setTimeout(() => {
      this.updateSize();
    }, 100);

    this.setMaterial();
    this.setGeometry();
    this.setMesh();
    this.scene.add(this.mesh);
    this.setupScrollTrigger();
    this.render();
  }

  setMaterial() {
    const width = this.offsetWidth || this.clientWidth || 512;
    const height = this.offsetHeight || this.clientHeight || 512;

    // Fallback-Werte für Textur-Dimensionen (falls noch nicht geladen)
    const defaultTextureSize = new THREE.Vector2(width, height);

    this.material = new THREE.ShaderMaterial({
      fragmentShader: FRAGMENT_SHADER,
      uniforms: {
        intensity1: { type: 'f', value: 0.8 },
        intensity2: { type: 'f', value: 0.8 },
        dispFactor1: { type: 'f', value: 0.0 }, // Bild 1 → Bild 2
        dispFactor2: { type: 'f', value: 0.0 }, // Bild 2 → Bild 3
        angle1: { type: 'f', value: Math.PI / 4 },
        angle2: { type: 'f', value: -Math.PI / 4 * 3.0 },
        texture1: { type: 't', value: this.texture1 },
        texture2: { type: 't', value: this.texture2 },
        texture3: { type: 't', value: this.texture3 },
        disp: { type: 't', value: this.displacement },
        resolution: {
          value: new THREE.Vector2(width, height)
        },
        texture1Size: {
          value: this.texture1Size || defaultTextureSize.clone()
        },
        texture2Size: {
          value: this.texture2Size || defaultTextureSize.clone()
        },
        texture3Size: {
          value: this.texture3Size || defaultTextureSize.clone()
        }
      },
      vertexShader: VERTEX_SHADER
    });

    // Aktualisiere Textur-Dimensionen, falls sie später geladen werden
    if (this.texture1Size) {
      this.material.uniforms.texture1Size.value = this.texture1Size;
    }
    if (this.texture2Size) {
      this.material.uniforms.texture2Size.value = this.texture2Size;
    }
    if (this.texture3Size) {
      this.material.uniforms.texture3Size.value = this.texture3Size;
    }

    return this;
  }

  setGeometry() {
    const width = this.offsetWidth || this.clientWidth || 512;
    const height = this.offsetHeight || this.clientHeight || 512;

    this.geometry = new THREE.PlaneGeometry(width, height, 1, 1);

    return this;
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    return this;
  }

  setupScrollTrigger() {
    if (!this.material || !ScrollTrigger) return;

    // Suche nach Element mit Klasse "threeTrigger"
    const triggerElement = document.querySelector('.threeTrigger');
    
    if (!triggerElement) {
      console.warn('DisplacementTrigger: Element with class "threeTrigger" not found');
      // Retry nach kurzer Verzögerung (falls DOM noch nicht vollständig geladen)
      setTimeout(() => {
        this.setupScrollTrigger();
      }, 500);
      return;
    }

    // ScrollTrigger auf dem threeTrigger Element
    this.scrollTrigger = ScrollTrigger.create({
      trigger: triggerElement, // Nutze das threeTrigger Element als Trigger
      start: 'top top',
      end: 'top bottom',
      scrub: true, // Smooth scrubbing beim Scrollen
      onUpdate: (self) => {
        const progress = self.progress; // 0.0 → 1.0

        // 0% → 38%: Bild 1 (keine Transition)
        if (progress < 0.38) {
          this.material.uniforms.dispFactor1.value = 0.0;
          this.material.uniforms.dispFactor2.value = 0.0;
        }
        // 38% → 48%: Transition Bild 1 → Bild 2
        else if (progress >= 0.38 && progress <= 0.48) {
          const range = 0.48 - 0.38; // 0.10
          const localProgress = (progress - 0.38) / range; // 0.0 → 1.0 innerhalb des Bereichs
          this.material.uniforms.dispFactor1.value = Math.min(localProgress, 1.0);
          this.material.uniforms.dispFactor2.value = 0.0;
        }
        // 48% → 63%: Bild 2 (keine Transition)
        else if (progress > 0.48 && progress < 0.63) {
          this.material.uniforms.dispFactor1.value = 1.0; // Erster Übergang abgeschlossen
          this.material.uniforms.dispFactor2.value = 0.0;
        }
        // 63% → 73%: Transition Bild 2 → Bild 3
        else if (progress >= 0.63 && progress <= 0.73) {
          this.material.uniforms.dispFactor1.value = 1.0;
          const range = 0.73 - 0.63; // 0.10
          const localProgress = (progress - 0.63) / range; // 0.0 → 1.0 innerhalb des Bereichs
          this.material.uniforms.dispFactor2.value = Math.min(localProgress, 1.0);
        }
        // 73% → 100%: Bild 3 (beide Übergänge abgeschlossen)
        else {
          this.material.uniforms.dispFactor1.value = 1.0;
          this.material.uniforms.dispFactor2.value = 1.0;
        }

        this.render();
      }
    });
  }

  render() {
    if (this.scene && this.camera && this.renderer) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  cleanup() {
    if (this.scrollTrigger) {
      this.scrollTrigger.kill();
      this.scrollTrigger = null;
    }

    if (this._resizeHandler) {
      window.removeEventListener('resize', this._resizeHandler);
    }

    if (this._resizeTimeout) {
      clearTimeout(this._resizeTimeout);
      this._resizeTimeout = null;
    }

    if (this.texture1) this.texture1.dispose();
    if (this.texture2) this.texture2.dispose();
    if (this.texture3) this.texture3.dispose();
    if (this.displacement) this.displacement.dispose();

    if (this.material) this.material.dispose();
    if (this.geometry) this.geometry.dispose();
    if (this.mesh) {
      this.scene.remove(this.mesh);
      this.mesh = null;
    }

    if (this.renderer) {
      this.renderer.dispose();
      this.renderer = null;
    }

    if (this.scene) {
      this.scene.clear();
      this.scene = null;
    }
  }
}

// Custom Element registrieren
customElements.define('displacement-trigger', DisplacementTrigger);
