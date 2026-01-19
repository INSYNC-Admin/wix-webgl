"use strict";(()=>{var r="1.0.0",o="XN9H16FK5J2LQYg5KVLq",s=class extends HTMLElement{constructor(){super(),this.scene=null,this.containerEl=null,this._resizeHandler=null,this._resizeTimeout=null,this._resizeObserver=null}connectedCallback(){console.log(`[UnicornStudio] Version ${r} - Initializing...`),this.setupDOM(),this.initializeUnicornStudio(),window.ResizeObserver&&(this._resizeObserver=new ResizeObserver(i=>{this._resizeTimeout&&clearTimeout(this._resizeTimeout),this._resizeTimeout=setTimeout(()=>{this.updateSize()},100)}),this._resizeObserver.observe(this)),window.addEventListener("resize",this._resizeHandler=()=>{this._resizeTimeout&&clearTimeout(this._resizeTimeout),this._resizeTimeout=setTimeout(()=>{this.updateSize()},100)})}disconnectedCallback(){console.log("[UnicornStudio] Disconnected - cleaning up..."),this.scene&&typeof this.scene.destroy=="function"&&(this.scene.destroy(),this.scene=null),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._resizeHandler&&(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null),this._resizeTimeout&&(clearTimeout(this._resizeTimeout),this._resizeTimeout=null)}setupDOM(){this.style.display="block",this.style.width="100%",this.style.minHeight="400px",this.style.height="100%",this.style.position="relative",this.style.overflow="hidden",this.style.boxSizing="border-box";let i=document.createElement("div");i.className="unicorn-studio-page",i.innerHTML=`
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
    `,this.appendChild(i),this.containerEl=i.querySelector(".unicorn-embed")}loadUnicornStudioScript(){return new Promise((i,e)=>{if(window.UnicornStudio&&window.UnicornStudio.init){console.log("[UnicornStudio] Script already loaded"),i();return}let t=document.querySelector('script[src*="unicornstudio.js"]');if(t)window.UnicornStudio?i():(t.addEventListener("load",i),t.addEventListener("error",e));else{let n=document.createElement("script");n.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.2/dist/unicornStudio.umd.js",n.async=!0,n.onload=()=>{console.log("[UnicornStudio] Script loaded successfully"),window.UnicornStudio&&!window.UnicornStudio.isInitialized?typeof window.UnicornStudio.init=="function"?window.UnicornStudio.init().then(()=>{window.UnicornStudio.isInitialized=!0,i()}).catch(e):(window.UnicornStudio.isInitialized=!0,i()):i()},n.onerror=()=>{console.error("[UnicornStudio] Error loading script"),e(new Error("Failed to load Unicorn Studio script"))},document.head?document.head.appendChild(n):document.addEventListener("DOMContentLoaded",()=>{document.head.appendChild(n)})}})}initializeUnicornStudio(){console.log(`[UnicornStudio] Loading scene with Project ID: ${o}`),this.loadUnicornStudioScript().then(()=>{if(!window.UnicornStudio)throw new Error("UnicornStudio is not available");if(console.log("[UnicornStudio] Adding scene..."),typeof window.UnicornStudio.addScene=="function")window.UnicornStudio.addScene({element:this.containerEl,projectId:o,dpi:1.5,scale:1,lazyLoad:!1,altText:"Unicorn Studio Scene",ariaLabel:"This is a canvas scene"}).then(i=>{console.log("[UnicornStudio] Scene loaded successfully",i),this.scene=i,this.updateSize()}).catch(i=>{console.error("[UnicornStudio] Error loading scene:",i)});else if(window.UnicornStudio.init)console.log("[UnicornStudio] Using data-attributes method"),this.containerEl.setAttribute("data-us-project",o),this.containerEl.setAttribute("data-us-scale","1"),this.containerEl.setAttribute("data-us-dpi","1.5"),this.containerEl.setAttribute("data-us-production","true"),this.containerEl.setAttribute("data-us-alttext","Unicorn Studio Scene"),this.containerEl.setAttribute("data-us-arialabel","This is a canvas scene"),window.UnicornStudio.isInitialized?this.updateSize():window.UnicornStudio.init().then(()=>{console.log("[UnicornStudio] Init completed"),window.UnicornStudio.isInitialized=!0,this.updateSize()}).catch(i=>{console.error("[UnicornStudio] Init error:",i)});else throw new Error("UnicornStudio.addScene is not a function and init is not available")}).catch(i=>{console.error("[UnicornStudio] Error initializing:",i)})}updateSize(){if(!this.containerEl)return;let i=this.getBoundingClientRect(),e=Math.max(i.width||this.clientWidth||this.offsetWidth||0,0),t=Math.max(i.height||this.clientHeight||this.offsetHeight||0,0);if(e===0||t===0){setTimeout(()=>this.updateSize(),50);return}this.containerEl.style.width=`${e}px`,this.containerEl.style.height=`${t}px`,this.scene&&typeof this.scene.resize=="function"&&this.scene.resize(e,t)}};customElements.get("unicorn-studio-embed")?console.warn("[UnicornStudio] Custom element already registered"):(customElements.define("unicorn-studio-embed",s),console.log("[UnicornStudio] Custom element registered: unicorn-studio-embed"));})();
