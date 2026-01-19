/// <reference lib="dom" />
'use strict';

// Version für Debugging
const UNICORN_STUDIO_VERSION = '1.0.0';

// Hardcodierte Project ID
const PROJECT_ID = 'XN9H16FK5J2LQYg5KVLq';

class UnicornStudioEmbed extends HTMLElement {
  constructor() {
    super();
    this.scene = null;
    this.containerEl = null;
    this._resizeHandler = null;
    this._resizeTimeout = null;
    this._resizeObserver = null;
  }

  connectedCallback() {
    console.log(`[UnicornStudio] Version ${UNICORN_STUDIO_VERSION} - Initializing...`);
    this.setupDOM();
    this.initializeUnicornStudio();
    
    // ResizeObserver für Größenänderungen des Elements
    if (window.ResizeObserver) {
      this._resizeObserver = new ResizeObserver((entries) => {
        if (this._resizeTimeout) {
          clearTimeout(this._resizeTimeout);
        }
        this._resizeTimeout = setTimeout(() => {
          this.updateSize();
        }, 100);
      });
      this._resizeObserver.observe(this);
    }
    
    window.addEventListener('resize', this._resizeHandler = () => {
      if (this._resizeTimeout) {
        clearTimeout(this._resizeTimeout);
      }
      this._resizeTimeout = setTimeout(() => {
        this.updateSize();
      }, 100);
    });
  }

  disconnectedCallback() {
    console.log('[UnicornStudio] Disconnected - cleaning up...');
    
    if (this.scene && typeof this.scene.destroy === 'function') {
      this.scene.destroy();
      this.scene = null;
    }
    
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
    
    if (this._resizeHandler) {
      window.removeEventListener('resize', this._resizeHandler);
      this._resizeHandler = null;
    }
    
    if (this._resizeTimeout) {
      clearTimeout(this._resizeTimeout);
      this._resizeTimeout = null;
    }
  }

  setupDOM() {
    // Wix Custom Element Styling
    this.style.display = 'block';
    this.style.width = '100%';
    this.style.minHeight = '400px';
    this.style.height = '100%';
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.style.boxSizing = 'border-box';

    const wrapper = document.createElement('div');
    wrapper.className = 'unicorn-studio-page';

    wrapper.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          min-height: 400px;
          height: 100%;
          position: relative;
          box-sizing: border-box;
          overflow: hidden;
        }
        
        .unicorn-studio-page {
          width: 100%;
          height: 100%;
          min-height: 400px;
          position: relative;
          box-sizing: border-box;
          overflow: hidden;
        }

        .unicorn-embed {
          width: 100%;
          height: 100%;
          position: relative;
        }
      </style>
      <div class="unicorn-embed"></div>
    `;

    this.appendChild(wrapper);
    this.containerEl = wrapper.querySelector('.unicorn-embed');
  }

  loadUnicornStudioScript() {
    return new Promise((resolve, reject) => {
      // Prüfe, ob das Script bereits geladen wurde
      if (window.UnicornStudio && window.UnicornStudio.init) {
        console.log('[UnicornStudio] Script already loaded');
        resolve();
        return;
      }

      const existingScript = document.querySelector(
        'script[src*="unicornstudio.js"]'
      );

      if (existingScript) {
        if (window.UnicornStudio) {
          resolve();
        } else {
          existingScript.addEventListener('load', resolve);
          existingScript.addEventListener('error', reject);
        }
      } else {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.2/dist/unicornStudio.umd.js';
        script.async = true;
        script.onload = () => {
          console.log('[UnicornStudio] Script loaded successfully');
          
          // Initialisiere UnicornStudio, falls nötig
          if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
            if (typeof window.UnicornStudio.init === 'function') {
              window.UnicornStudio.init().then(() => {
                window.UnicornStudio.isInitialized = true;
                resolve();
              }).catch(reject);
            } else {
              window.UnicornStudio.isInitialized = true;
              resolve();
            }
          } else {
            resolve();
          }
        };
        script.onerror = () => {
          console.error('[UnicornStudio] Error loading script');
          reject(new Error('Failed to load Unicorn Studio script'));
        };
        
        // Füge Script zum head hinzu
        if (document.head) {
          document.head.appendChild(script);
        } else {
          document.addEventListener('DOMContentLoaded', () => {
            document.head.appendChild(script);
          });
        }
      }
    });
  }

  initializeUnicornStudio() {
    console.log(`[UnicornStudio] Loading scene with Project ID: ${PROJECT_ID}`);
    
    this.loadUnicornStudioScript()
      .then(() => {
        if (!window.UnicornStudio) {
          throw new Error('UnicornStudio is not available');
        }

        console.log('[UnicornStudio] Adding scene...');
        
        // Verwende addScene Methode, falls verfügbar
        if (typeof window.UnicornStudio.addScene === 'function') {
          window.UnicornStudio.addScene({
            element: this.containerEl,
            projectId: PROJECT_ID,
            dpi: 1.5,
            scale: 1,
            lazyLoad: false,
            altText: 'Unicorn Studio Scene',
            ariaLabel: 'This is a canvas scene'
          })
            .then((scene) => {
              console.log('[UnicornStudio] Scene loaded successfully', scene);
              this.scene = scene;
              this.updateSize();
            })
            .catch((err) => {
              console.error('[UnicornStudio] Error loading scene:', err);
            });
        } 
        // Fallback: Verwende data-attributes Methode
        else if (window.UnicornStudio.init) {
          console.log('[UnicornStudio] Using data-attributes method');
          this.containerEl.setAttribute('data-us-project', PROJECT_ID);
          this.containerEl.setAttribute('data-us-scale', '1');
          this.containerEl.setAttribute('data-us-dpi', '1.5');
          this.containerEl.setAttribute('data-us-production', 'true');
          this.containerEl.setAttribute('data-us-alttext', 'Unicorn Studio Scene');
          this.containerEl.setAttribute('data-us-arialabel', 'This is a canvas scene');
          
          // Prüfe, ob init bereits aufgerufen wurde
          if (!window.UnicornStudio.isInitialized) {
            window.UnicornStudio.init().then(() => {
              console.log('[UnicornStudio] Init completed');
              window.UnicornStudio.isInitialized = true;
              this.updateSize();
            }).catch((err) => {
              console.error('[UnicornStudio] Init error:', err);
            });
          } else {
            this.updateSize();
          }
        } else {
          throw new Error('UnicornStudio.addScene is not a function and init is not available');
        }
      })
      .catch((err) => {
        console.error('[UnicornStudio] Error initializing:', err);
      });
  }

  updateSize() {
    if (!this.containerEl) {
      return;
    }

    const rect = this.getBoundingClientRect();
    const elementWidth = Math.max(rect.width || this.clientWidth || this.offsetWidth || 0, 0);
    const elementHeight = Math.max(rect.height || this.clientHeight || this.offsetHeight || 0, 0);
    
    if (elementWidth === 0 || elementHeight === 0) {
      setTimeout(() => this.updateSize(), 50);
      return;
    }
    
    // Stelle sicher, dass der Container die volle Größe hat
    this.containerEl.style.width = `${elementWidth}px`;
    this.containerEl.style.height = `${elementHeight}px`;
    
    // Wenn Scene verfügbar und resize-Methode existiert, rufe sie auf
    if (this.scene && typeof this.scene.resize === 'function') {
      this.scene.resize(elementWidth, elementHeight);
    }
  }
}

// Definiere das Custom Element
if (!customElements.get('unicorn-studio-embed')) {
  customElements.define('unicorn-studio-embed', UnicornStudioEmbed);
  console.log('[UnicornStudio] Custom element registered: unicorn-studio-embed');
} else {
  console.warn('[UnicornStudio] Custom element already registered');
}
