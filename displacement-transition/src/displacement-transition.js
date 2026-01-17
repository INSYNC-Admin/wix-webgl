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
        intensity1: { type: 'f', value: 0.1 },
        intensity2: { type: 'f', value: 0.1 },
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
    console.log('[DisplacementTrigger] setupScrollTrigger called');
    
    if (!this.material) {
      console.error('[DisplacementTrigger] Material not available');
      return;
    }
    
    if (!ScrollTrigger) {
      console.error('[DisplacementTrigger] ScrollTrigger not available');
      return;
    }

    // Suche nach Element mit Klasse "threeTrigger"
    const triggerElement = document.querySelector('.threeTrigger');
    
    if (!triggerElement) {
      console.warn('[DisplacementTrigger] Element with class "threeTrigger" not found, retrying...');
      // Retry nach kurzer Verzögerung (falls DOM noch nicht vollständig geladen)
      setTimeout(() => {
        this.setupScrollTrigger();
      }, 500);
      return;
    }

    console.log('[DisplacementTrigger] Trigger element found:', triggerElement);
    console.log('[DisplacementTrigger] Trigger element bounds:', triggerElement.getBoundingClientRect());

    // Definiere Schritte für die Animation (wie in der HTML-Datei)
    // progress ist in Prozent (0-100), aber wir verwenden 0.0-1.0 für ScrollTrigger
    const steps = [
      {
        progress: 0.0,
        dispFactor1: 0.0,
        dispFactor2: 0.0
      },
      {
        progress: 0.23, // Bild 1 bleibt bis 30%
        dispFactor1: 0.0,
        dispFactor2: 0.0
      },
      {
        progress: 0.36, // Transition Bild 1 → 2 abgeschlossen (30-35%)
        dispFactor1: 1.0,
        dispFactor2: 0.0
      },
      {
        progress: 0.50, // Bild 2 bleibt bis 60%
        dispFactor1: 1.0,
        dispFactor2: 0.0
      },
      {
        progress: 0.66, // Transition Bild 2 → 3 abgeschlossen (60-65%)
        dispFactor1: 1.0,
        dispFactor2: 1.0
      },
      {
        progress: 1.0, // Bild 3 bleibt bis 100%
        dispFactor1: 1.0,
        dispFactor2: 1.0
      }
    ];

    console.log('[DisplacementTrigger] Steps defined:', steps);

    // Interpolationsfunktion (ähnlich wie in der HTML-Datei)
    const interpolateStep = (currentProgress) => {
      let startStep = null;
      let endStep = null;

      // Finde den richtigen Schritt-Bereich
      for (let i = 0; i < steps.length - 1; i++) {
        if (currentProgress >= steps[i].progress && currentProgress <= steps[i + 1].progress) {
          startStep = steps[i];
          endStep = steps[i + 1];
          break;
        }
      }

      if (startStep && endStep) {
        // Berechne Progress innerhalb des Bereichs (0.0 - 1.0)
        const progressInRange = (currentProgress - startStep.progress) / (endStep.progress - startStep.progress);

        // Interpoliere die dispFactor-Werte
        const dispFactor1 = gsap.utils.interpolate(startStep.dispFactor1, endStep.dispFactor1, progressInRange);
        const dispFactor2 = gsap.utils.interpolate(startStep.dispFactor2, endStep.dispFactor2, progressInRange);

        // Setze die Uniform-Werte
        this.material.uniforms.dispFactor1.value = dispFactor1;
        this.material.uniforms.dispFactor2.value = dispFactor2;

        // Debug-Log (nur alle 20 Updates, um Console nicht zu überfluten)
        if (Math.floor(currentProgress * 100) % 5 === 0 || currentProgress === 0 || currentProgress === 1) {
          console.log(`[DisplacementTrigger] Progress: ${(currentProgress * 100).toFixed(2)}% | dispFactor1: ${dispFactor1.toFixed(3)} | dispFactor2: ${dispFactor2.toFixed(3)} | Step: ${startStep.progress} → ${endStep.progress}`);
        }

        this.render();
      } else {
        // Fallback: Verwende den letzten oder ersten Schritt
        const lastStep = steps[steps.length - 1];
        this.material.uniforms.dispFactor1.value = lastStep.dispFactor1;
        this.material.uniforms.dispFactor2.value = lastStep.dispFactor2;
        console.warn(`[DisplacementTrigger] No step found for progress ${currentProgress}, using fallback values`);
        this.render();
      }
    };

    // Initialisiere mit Progress 0.0 (Bild 1)
    console.log('[DisplacementTrigger] Initializing with progress 0.0');
    interpolateStep(0.0);

    // ScrollTrigger erstellen
    console.log('[DisplacementTrigger] Creating ScrollTrigger with:', {
      trigger: triggerElement,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      markers: true
    });

    this.scrollTrigger = ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top top',
      end: 'bottom top',
      scrub: true, // Smooth scrubbing beim Scrollen
      markers: true, // Debug-Marker aktivieren
      onUpdate: (self) => {
        const progress = self.progress; // 0.0 → 1.0
        console.log(`[DisplacementTrigger] Scroll Progress: ${(progress * 100).toFixed(2)}%`);
        interpolateStep(progress);
      },
      onEnter: () => {
        console.log('[DisplacementTrigger] ScrollTrigger entered');
      },
      onLeave: () => {
        console.log('[DisplacementTrigger] ScrollTrigger left');
      },
      onEnterBack: () => {
        console.log('[DisplacementTrigger] ScrollTrigger entered back');
      },
      onLeaveBack: () => {
        console.log('[DisplacementTrigger] ScrollTrigger left back');
      }
    });

    console.log('[DisplacementTrigger] ScrollTrigger created:', this.scrollTrigger);
    console.log('[DisplacementTrigger] ScrollTrigger start:', this.scrollTrigger.start);
    console.log('[DisplacementTrigger] ScrollTrigger end:', this.scrollTrigger.end);
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
