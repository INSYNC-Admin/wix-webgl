"use strict";(()=>{var uh="166";var om=0,ku=1,lm=2;var kf=1,cm=2,Mi=3,$i=0,Mn=1,bi=2,Zi=0,ms=1,Vu=2,Hu=3,Gu=4,hm=5,vr=100,um=101,fm=102,dm=103,pm=104,mm=200,gm=201,_m=202,xm=203,sc=204,ac=205,vm=206,ym=207,Mm=208,Sm=209,bm=210,wm=211,Tm=212,Em=213,Am=214,Cm=0,Rm=1,Pm=2,_o=3,Im=4,Lm=5,Dm=6,Um=7,Vf=0,Nm=1,Om=2,Ji=0,Fm=1,Bm=2,zm=3,km=4,Vm=5,Hm=6,Gm=7;var Hf=300,vs=301,ys=302,oc=303,lc=304,Bo=306,ta=1e3,Mr=1001,cc=1002,Wn=1003,Wm=1004;var Ha=1005;var hn=1006,Il=1007;var Sr=1008;var Ai=1009,Gf=1010,Wf=1011,ea=1012,fh=1013,br=1014,wi=1015,oa=1016,dh=1017,ph=1018,Ms=1020,Xf=35902,Yf=1021,qf=1022,ii=1023,Zf=1024,Jf=1025,gs=1026,Ss=1027,$f=1028,mh=1029,Kf=1030,gh=1031;var _h=1033,uo=33776,fo=33777,po=33778,mo=33779,hc=35840,uc=35841,fc=35842,dc=35843,pc=36196,mc=37492,gc=37496,_c=37808,xc=37809,vc=37810,yc=37811,Mc=37812,Sc=37813,bc=37814,wc=37815,Tc=37816,Ec=37817,Ac=37818,Cc=37819,Rc=37820,Pc=37821,go=36492,Ic=36494,Lc=36495,Qf=36283,Dc=36284,Uc=36285,Nc=36286;var xo=2300,Oc=2301,Ll=2302,Wu=2400,Xu=2401,Yu=2402;var Xm=3200,Ym=3201,qm=0,Zm=1,qi="",li="srgb",ji="srgb-linear",xh="display-p3",zo="display-p3-linear",vo="linear",be="srgb",yo="rec709",Mo="p3";var Jr=7680;var qu=519,Jm=512,$m=513,Km=514,jf=515,Qm=516,jm=517,tg=518,eg=519,Zu=35044;var Ju="300 es",Ti=2e3,So=2001,Ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Dl=Math.PI/180,Fc=180/Math.PI;function la(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function yn(r,t,e){return Math.max(t,Math.min(e,r))}function ng(r,t){return(r%t+t)%t}function Ul(r,t,e){return(1-e)*r+e*t}function qs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function vn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var ne=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(yn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class r{constructor(t,e,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],p=i[3],m=i[6],w=i[1],y=i[4],S=i[7],A=i[2],E=i[5],T=i[8];return s[0]=a*g+o*w+l*A,s[3]=a*p+o*y+l*E,s[6]=a*m+o*S+l*T,s[1]=c*g+h*w+u*A,s[4]=c*p+h*y+u*E,s[7]=c*m+h*S+u*T,s[2]=d*g+f*w+_*A,s[5]=d*p+f*y+_*E,s[8]=d*m+f*S+_*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Nl.makeScale(t,e)),this}rotate(t){return this.premultiply(Nl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nl=new Zt;function td(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function na(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ig(){let r=na("canvas");return r.style.display="block",r}var $u={};function ed(r){r in $u||($u[r]=!0,console.warn(r))}function rg(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Ku=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qu=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ga={[ji]:{transfer:vo,primaries:yo,toReference:r=>r,fromReference:r=>r},[li]:{transfer:be,primaries:yo,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[zo]:{transfer:vo,primaries:Mo,toReference:r=>r.applyMatrix3(Qu),fromReference:r=>r.applyMatrix3(Ku)},[xh]:{transfer:be,primaries:Mo,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Qu),fromReference:r=>r.applyMatrix3(Ku).convertLinearToSRGB()}},sg=new Set([ji,zo]),de={enabled:!0,_workingColorSpace:ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!sg.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let n=Ga[t].toReference,i=Ga[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Ga[r].primaries},getTransfer:function(r){return r===qi?vo:Ga[r].transfer}};function _s(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ol(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var $r,Bc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$r===void 0&&($r=na("canvas")),$r.width=t.width,$r.height=t.height;let n=$r.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$r}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=na("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=_s(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_s(e[n]/255)*255):e[n]=_s(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ag=0,bo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=la(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Fl(i[a].image)):s.push(Fl(i[a]))}else s=Fl(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Fl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Bc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var og=0,Dn=class r extends Ki{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Mr,i=Mr,s=hn,a=Sr,o=ii,l=Ai,c=r.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=la(),this.name="",this.source=new bo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ta:t.x=t.x-Math.floor(t.x);break;case Mr:t.x=t.x<0?0:1;break;case cc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ta:t.y=t.y-Math.floor(t.y);break;case Mr:t.y=t.y<0?0:1;break;case cc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Hf;Dn.DEFAULT_ANISOTROPY=1;var Xe=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,S=(f+1)/2,A=(m+1)/2,E=(h+d)/4,T=(u+g)/4,L=(_+p)/4;return y>S&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=T/n):S>A?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=E/i,s=L/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=T/s,i=L/s),this.set(n,i,s,e),this}let w=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(p-_)/w,this.y=(u-g)/w,this.z=(d-h)/w,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zc=class extends Ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Xe(0,0,t,e),this.scissorTest=!1,this.viewport=new Xe(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new bo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ci=class extends zc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wo=class extends Dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var kc=class extends Dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let p=1-o,m=l*d+c*f+h*_+u*g,w=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let A=Math.sqrt(y),E=Math.atan2(A,m*w);p=Math.sin(p*E)/A,o=Math.sin(o*E)/A}let S=o*w;if(l=l*p+d*S,c=c*p+f*S,h=h*p+_*S,u=u*p+g*S,p===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],_=s[a+3];return t[e]=o*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-o*f,t[e+2]=c*_+h*f+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(yn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ju.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ju.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bl.copy(this).projectOnVector(t),this.sub(Bl)}reflect(t){return this.sub(Bl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(yn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bl=new X,ju=new Qi,wr=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ti):ti.fromBufferAttribute(s,a),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wa.copy(n.boundingBox)),Wa.applyMatrix4(t.matrixWorld),this.union(Wa)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),Xa.subVectors(this.max,Zs),Kr.subVectors(t.a,Zs),Qr.subVectors(t.b,Zs),jr.subVectors(t.c,Zs),Vi.subVectors(Qr,Kr),Hi.subVectors(jr,Qr),fr.subVectors(Kr,jr);let e=[0,-Vi.z,Vi.y,0,-Hi.z,Hi.y,0,-fr.z,fr.y,Vi.z,0,-Vi.x,Hi.z,0,-Hi.x,fr.z,0,-fr.x,-Vi.y,Vi.x,0,-Hi.y,Hi.x,0,-fr.y,fr.x,0];return!zl(e,Kr,Qr,jr,Xa)||(e=[1,0,0,0,1,0,0,0,1],!zl(e,Kr,Qr,jr,Xa))?!1:(Ya.crossVectors(Vi,Hi),e=[Ya.x,Ya.y,Ya.z],zl(e,Kr,Qr,jr,Xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},gi=[new X,new X,new X,new X,new X,new X,new X,new X],ti=new X,Wa=new wr,Kr=new X,Qr=new X,jr=new X,Vi=new X,Hi=new X,fr=new X,Zs=new X,Xa=new X,Ya=new X,dr=new X;function zl(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){dr.fromArray(r,s);let o=i.x*Math.abs(dr.x)+i.y*Math.abs(dr.y)+i.z*Math.abs(dr.z),l=t.dot(dr),c=e.dot(dr),h=n.dot(dr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var lg=new wr,Js=new X,kl=new X,ia=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):lg.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);let e=Js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Js,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(kl)),this.expandByPoint(Js.copy(t.center).sub(kl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},_i=new X,Vl=new X,qa=new X,Gi=new X,Hl=new X,Za=new X,Gl=new X,Vc=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Vl.copy(t).add(e).multiplyScalar(.5),qa.copy(e).sub(t).normalize(),Gi.copy(this.origin).sub(Vl);let s=t.distanceTo(e)*.5,a=-this.direction.dot(qa),o=Gi.dot(this.direction),l=-Gi.dot(qa),c=Gi.lengthSq(),h=Math.abs(1-a*a),u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=s*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Vl).addScaledVector(qa,d),f}intersectSphere(t,e){_i.subVectors(t.center,this.origin);let n=_i.dot(this.direction),i=_i.dot(_i)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,n,i,s){Hl.subVectors(e,t),Za.subVectors(n,t),Gl.crossVectors(Hl,Za);let a=this.direction.dot(Gl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gi.subVectors(this.origin,t);let l=o*this.direction.dot(Za.crossVectors(Gi,Za));if(l<0)return null;let c=o*this.direction.dot(Hl.cross(Gi));if(c<0||l+c>a)return null;let h=-o*Gi.dot(Gl);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class r{constructor(t,e,n,i,s,a,o,l,c,h,u,d,f,_,g,p){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,d,f,_,g,p)}set(t,e,n,i,s,a,o,l,c,h,u,d,f,_,g,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ts.setFromMatrixColumn(t,0).length(),s=1/ts.setFromMatrixColumn(t,1).length(),a=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){let d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cg,t,hg)}lookAt(t,e,n){let i=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Wi.crossVectors(n,Rn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Wi.crossVectors(n,Rn)),Wi.normalize(),Ja.crossVectors(Rn,Wi),i[0]=Wi.x,i[4]=Ja.x,i[8]=Rn.x,i[1]=Wi.y,i[5]=Ja.y,i[9]=Rn.y,i[2]=Wi.z,i[6]=Ja.z,i[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],w=n[3],y=n[7],S=n[11],A=n[15],E=i[0],T=i[4],L=i[8],v=i[12],x=i[1],P=i[5],N=i[9],F=i[13],G=i[2],Z=i[6],k=i[10],q=i[14],V=i[3],at=i[7],R=i[11],lt=i[15];return s[0]=a*E+o*x+l*G+c*V,s[4]=a*T+o*P+l*Z+c*at,s[8]=a*L+o*N+l*k+c*R,s[12]=a*v+o*F+l*q+c*lt,s[1]=h*E+u*x+d*G+f*V,s[5]=h*T+u*P+d*Z+f*at,s[9]=h*L+u*N+d*k+f*R,s[13]=h*v+u*F+d*q+f*lt,s[2]=_*E+g*x+p*G+m*V,s[6]=_*T+g*P+p*Z+m*at,s[10]=_*L+g*N+p*k+m*R,s[14]=_*v+g*F+p*q+m*lt,s[3]=w*E+y*x+S*G+A*V,s[7]=w*T+y*P+S*Z+A*at,s[11]=w*L+y*N+S*k+A*R,s[15]=w*v+y*F+S*q+A*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*f-n*l*f)+g*(+e*l*f-e*c*d+s*a*d-i*a*f+i*c*h-s*l*h)+p*(+e*c*u-e*o*f-s*a*u+n*a*f+s*o*h-n*c*h)+m*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],p=t[14],m=t[15],w=u*p*c-g*d*c+g*l*f-o*p*f-u*l*m+o*d*m,y=_*d*c-h*p*c-_*l*f+a*p*f+h*l*m-a*d*m,S=h*g*c-_*u*c+_*o*f-a*g*f-h*o*m+a*u*m,A=_*u*l-h*g*l-_*o*d+a*g*d+h*o*p-a*u*p,E=e*w+n*y+i*S+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=w*T,t[1]=(g*d*s-u*p*s-g*i*f+n*p*f+u*i*m-n*d*m)*T,t[2]=(o*p*s-g*l*s+g*i*c-n*p*c-o*i*m+n*l*m)*T,t[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*T,t[4]=y*T,t[5]=(h*p*s-_*d*s+_*i*f-e*p*f-h*i*m+e*d*m)*T,t[6]=(_*l*s-a*p*s-_*i*c+e*p*c+a*i*m-e*l*m)*T,t[7]=(a*d*s-h*l*s+h*i*c-e*d*c-a*i*f+e*l*f)*T,t[8]=S*T,t[9]=(_*u*s-h*g*s-_*n*f+e*g*f+h*n*m-e*u*m)*T,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*m+e*o*m)*T,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*f-e*o*f)*T,t[12]=A*T,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*p+e*u*p)*T,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*p-e*o*p)*T,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,_=s*u,g=a*h,p=a*u,m=o*u,w=l*c,y=l*h,S=l*u,A=n.x,E=n.y,T=n.z;return i[0]=(1-(g+m))*A,i[1]=(f+S)*A,i[2]=(_-y)*A,i[3]=0,i[4]=(f-S)*E,i[5]=(1-(d+m))*E,i[6]=(p+w)*E,i[7]=0,i[8]=(_+y)*T,i[9]=(p-w)*T,i[10]=(1-(d+g))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=ts.set(i[0],i[1],i[2]).length(),a=ts.set(i[4],i[5],i[6]).length(),o=ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ei.copy(this);let c=1/s,h=1/a,u=1/o;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,e.setFromRotationMatrix(ei),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Ti){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,_;if(o===Ti)f=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===So)f=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Ti){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-s),d=(e+t)*c,f=(n+i)*h,_,g;if(o===Ti)_=(a+s)*u,g=-2*u;else if(o===So)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ts=new X,ei=new Ye,cg=new X(0,0,0),hg=new X(1,1,1),Wi=new X,Ja=new X,Rn=new X,tf=new Ye,ef=new Qi,Ri=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(yn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(yn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ef.setFromEuler(this),this.setFromQuaternion(ef,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var To=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ug=0,nf=new X,es=new Qi,xi=new Ye,$a=new X,$s=new X,fg=new X,dg=new Qi,rf=new X(1,0,0),sf=new X(0,1,0),af=new X(0,0,1),of={type:"added"},pg={type:"removed"},ns={type:"childadded",child:null},Wl={type:"childremoved",child:null},ri=class r extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=la(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new X,e=new Ri,n=new Qi,i=new X(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Zt}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(rf,t)}rotateY(t){return this.rotateOnAxis(sf,t)}rotateZ(t){return this.rotateOnAxis(af,t)}translateOnAxis(t,e){return nf.copy(t).applyQuaternion(this.quaternion),this.position.add(nf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rf,t)}translateY(t){return this.translateOnAxis(sf,t)}translateZ(t){return this.translateOnAxis(af,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$a.copy(t):$a.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt($s,$a,this.up):xi.lookAt($a,$s,this.up),this.quaternion.setFromRotationMatrix(xi),i&&(xi.extractRotation(i.matrixWorld),es.setFromRotationMatrix(xi),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(of),ns.child=t,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pg),Wl.child=t,this.dispatchEvent(Wl),Wl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(of),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,fg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,dg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ri.DEFAULT_UP=new X(0,1,0);ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ni=new X,vi=new X,Xl=new X,yi=new X,is=new X,rs=new X,lf=new X,Yl=new X,ql=new X,Zl=new X,fs=class r{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ni.subVectors(t,e),i.cross(ni);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ni.subVectors(i,e),vi.subVectors(n,e),Xl.subVectors(t,e);let a=ni.dot(ni),o=ni.dot(vi),l=ni.dot(Xl),c=vi.dot(vi),h=vi.dot(Xl),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static isFrontFacing(t,e,n,i){return ni.subVectors(n,e),vi.subVectors(t,e),ni.cross(vi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),ni.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;is.subVectors(i,n),rs.subVectors(s,n),Yl.subVectors(t,n);let l=is.dot(Yl),c=rs.dot(Yl);if(l<=0&&c<=0)return e.copy(n);ql.subVectors(t,i);let h=is.dot(ql),u=rs.dot(ql);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(is,a);Zl.subVectors(t,s);let f=is.dot(Zl),_=rs.dot(Zl);if(_>=0&&f<=_)return e.copy(s);let g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(rs,o);let p=h*_-f*u;if(p<=0&&u-h>=0&&f-_>=0)return lf.subVectors(s,i),o=(u-h)/(u-h+(f-_)),e.copy(i).addScaledVector(lf,o);let m=1/(p+g+d);return a=g*m,o=d*m,e.copy(n).addScaledVector(is,a).addScaledVector(rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function Jl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var he=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=de.workingColorSpace){if(t=ng(t,1),e=yn(e,0,1),n=yn(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Jl(a,s,t+1/3),this.g=Jl(a,s,t),this.b=Jl(a,s,t-1/3)}return de.toWorkingColorSpace(this,i),this}setStyle(t,e=li){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=li){let n=nd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}copyLinearToSRGB(t){return this.r=Ol(t.r),this.g=Ol(t.g),this.b=Ol(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return de.fromWorkingColorSpace(en.copy(this),t),Math.round(yn(en.r*255,0,255))*65536+Math.round(yn(en.g*255,0,255))*256+Math.round(yn(en.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(en.copy(this),e);let n=en.r,i=en.g,s=en.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=li){de.fromWorkingColorSpace(en.copy(this),t);let e=en.r,n=en.g,i=en.b;return t!==li?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(Ka);let n=Ul(Xi.h,Ka.h,e),i=Ul(Xi.s,Ka.s,e),s=Ul(Xi.l,Ka.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new he;he.NAMES=nd;var mg=0,bs=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=la(),this.name="",this.type="Material",this.blending=ms,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=ac,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sc&&(n.blendSrc=this.blendSrc),this.blendDst!==ac&&(n.blendDst=this.blendDst),this.blendEquation!==vr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}},Eo=class extends bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Vf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ne=new X,Qa=new ne,Xn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ed("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qa.fromBufferAttribute(this,e),Qa.applyMatrix3(t),this.setXY(e,Qa.x,Qa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=vn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),n=vn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),n=vn(n,this.array),i=vn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),n=vn(n,this.array),i=vn(i,this.array),s=vn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zu&&(t.usage=this.usage),t}};var Ao=class extends Xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Co=class extends Xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ei=class extends Xn{constructor(t,e,n){super(new Float32Array(t),e,n)}},gg=0,Gn=new Ye,$l=new ri,ss=new X,Pn=new wr,Ks=new wr,We=new X,Tr=class r extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=la(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(td(t)?Co:Ao)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,n){return Gn.makeTranslation(t,e,n),this.applyMatrix4(Gn),this}scale(t,e,n){return Gn.makeScale(t,e,n),this.applyMatrix4(Gn),this}lookAt(t){return $l.lookAt(t),$l.updateMatrix(),this.applyMatrix4($l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ei(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ia);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(We.addVectors(Pn.min,Ks.min),Pn.expandByPoint(We),We.addVectors(Pn.max,Ks.max),Pn.expandByPoint(We)):(Pn.expandByPoint(Ks.min),Pn.expandByPoint(Ks.max))}Pn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)We.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(We));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)We.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(t,c),We.add(ss)),i=Math.max(i,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new X,l[L]=new X;let c=new X,h=new X,u=new X,d=new ne,f=new ne,_=new ne,g=new X,p=new X;function m(L,v,x){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,x),d.fromBufferAttribute(s,L),f.fromBufferAttribute(s,v),_.fromBufferAttribute(s,x),h.sub(c),u.sub(c),f.sub(d),_.sub(d);let P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(P),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(P),o[L].add(g),o[v].add(g),o[x].add(g),l[L].add(p),l[v].add(p),l[x].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let L=0,v=w.length;L<v;++L){let x=w[L],P=x.start,N=x.count;for(let F=P,G=P+N;F<G;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let y=new X,S=new X,A=new X,E=new X;function T(L){A.fromBufferAttribute(i,L),E.copy(A);let v=o[L];y.copy(v),y.sub(A.multiplyScalar(A.dot(v))).normalize(),S.crossVectors(E,v);let P=S.dot(l[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,P)}for(let L=0,v=w.length;L<v;++L){let x=w[L],P=x.start,N=x.count;for(let F=P,G=P+N;F<G;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new X,s=new X,a=new X,o=new X,l=new X,c=new X,h=new X,u=new X;if(t)for(let d=0,f=t.count;d<f;d+=3){let _=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let m=0;m<h;m++)d[_++]=c[f++]}return new Xn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cf=new Ye,pr=new Vc,ja=new ia,hf=new X,as=new X,os=new X,ls=new X,Kl=new X,to=new X,eo=new ne,no=new ne,io=new ne,uf=new X,ff=new X,df=new X,ro=new X,so=new X,Ln=class extends ri{constructor(t=new Tr,e=new Eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){to.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Kl.fromBufferAttribute(u,t),a?to.addScaledVector(Kl,h):to.addScaledVector(Kl.sub(e),h))}e.add(to)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(s),pr.copy(t.ray).recast(t.near),!(ja.containsPoint(pr.origin)===!1&&(pr.intersectSphere(ja,hf)===null||pr.origin.distanceToSquared(hf)>(t.far-t.near)**2))&&(cf.copy(s).invert(),pr.copy(t.ray).applyMatrix4(cf),!(n.boundingBox!==null&&pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pr)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let p=d[_],m=a[p.materialIndex],w=Math.max(p.start,f.start),y=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=w,A=y;S<A;S+=3){let E=o.getX(S),T=o.getX(S+1),L=o.getX(S+2);i=ao(this,m,t,n,c,h,u,E,T,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){let w=o.getX(p),y=o.getX(p+1),S=o.getX(p+2);i=ao(this,a,t,n,c,h,u,w,y,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let p=d[_],m=a[p.materialIndex],w=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=w,A=y;S<A;S+=3){let E=S,T=S+1,L=S+2;i=ao(this,m,t,n,c,h,u,E,T,L),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){let w=p,y=p+1,S=p+2;i=ao(this,a,t,n,c,h,u,w,y,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function _g(r,t,e,n,i,s,a,o){let l;if(t.side===Mn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===$i,o),l===null)return null;so.copy(o),so.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(so);return c<e.near||c>e.far?null:{distance:c,point:so.clone(),object:r}}function ao(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,as),r.getVertexPosition(l,os),r.getVertexPosition(c,ls);let h=_g(r,t,e,n,as,os,ls,ro);if(h){i&&(eo.fromBufferAttribute(i,o),no.fromBufferAttribute(i,l),io.fromBufferAttribute(i,c),h.uv=fs.getInterpolation(ro,as,os,ls,eo,no,io,new ne)),s&&(eo.fromBufferAttribute(s,o),no.fromBufferAttribute(s,l),io.fromBufferAttribute(s,c),h.uv1=fs.getInterpolation(ro,as,os,ls,eo,no,io,new ne)),a&&(uf.fromBufferAttribute(a,o),ff.fromBufferAttribute(a,l),df.fromBufferAttribute(a,c),h.normal=fs.getInterpolation(ro,as,os,ls,uf,ff,df,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new X,materialIndex:0};fs.getNormal(as,os,ls,u.normal),h.face=u}return h}var ra=class r extends Tr{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ei(c,3)),this.setAttribute("normal",new Ei(h,3)),this.setAttribute("uv",new Ei(u,2));function _(g,p,m,w,y,S,A,E,T,L,v){let x=S/T,P=A/L,N=S/2,F=A/2,G=E/2,Z=T+1,k=L+1,q=0,V=0,at=new X;for(let R=0;R<k;R++){let lt=R*P-F;for(let Ft=0;Ft<Z;Ft++){let Yt=Ft*x-N;at[g]=Yt*w,at[p]=lt*y,at[m]=G,c.push(at.x,at.y,at.z),at[g]=0,at[p]=0,at[m]=E>0?1:-1,h.push(at.x,at.y,at.z),u.push(Ft/T),u.push(1-R/L),q+=1}}for(let R=0;R<L;R++)for(let lt=0;lt<T;lt++){let Ft=d+lt+Z*R,Yt=d+lt+Z*(R+1),Y=d+(lt+1)+Z*(R+1),tt=d+(lt+1)+Z*R;l.push(Ft,Yt,tt),l.push(Yt,Y,tt),V+=6}o.addGroup(f,V,v),f+=V,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ws(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function cn(r){let t={};for(let e=0;e<r.length;e++){let n=ws(r[e]);for(let i in n)t[i]=n[i]}return t}function xg(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function id(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var vg={clone:ws,merge:cn},yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yg,this.fragmentShader=Mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=xg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ro=class extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yi=new X,pf=new ne,mf=new ne,In=class extends Ro{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Fc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Dl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fc*2*Math.atan(Math.tan(Dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,pf,mf),e.subVectors(mf,pf)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Dl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},cs=-90,hs=1,Hc=class extends ri{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new In(cs,hs,t,e);i.layers=this.layers,this.add(i);let s=new In(cs,hs,t,e);s.layers=this.layers,this.add(s);let a=new In(cs,hs,t,e);a.layers=this.layers,this.add(a);let o=new In(cs,hs,t,e);o.layers=this.layers,this.add(o);let l=new In(cs,hs,t,e);l.layers=this.layers,this.add(l);let c=new In(cs,hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===So)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Po=class extends Dn{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:vs,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gc=class extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Po(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ra(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Zi});s.uniforms.tEquirect.value=e;let a=new Ln(i,s),o=e.minFilter;return e.minFilter===Sr&&(e.minFilter=hn),new Hc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}},Ql=new X,Sg=new X,bg=new Zt,Si=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ql.subVectors(n,e).cross(Sg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ql),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||bg.getNormalMatrix(t),i=this.coplanarPoint(Ql).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},mr=new ia,oo=new X,Io=class{constructor(t=new Si,e=new Si,n=new Si,i=new Si,s=new Si,a=new Si){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ti){let n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],_=i[9],g=i[10],p=i[11],m=i[12],w=i[13],y=i[14],S=i[15];if(n[0].setComponents(l-s,d-c,p-f,S-m).normalize(),n[1].setComponents(l+s,d+c,p+f,S+m).normalize(),n[2].setComponents(l+a,d+h,p+_,S+w).normalize(),n[3].setComponents(l-a,d-h,p-_,S-w).normalize(),n[4].setComponents(l-o,d-u,p-g,S-y).normalize(),e===Ti)n[5].setComponents(l+o,d+u,p+g,S+y).normalize();else if(e===So)n[5].setComponents(o,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(oo.x=i.normal.x>0?t.max.x:t.min.x,oo.y=i.normal.y>0?t.max.y:t.min.y,oo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(oo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rd(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function wg(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l._updateRange,d=l.updateRanges;if(r.bindBuffer(c,o),u.count===-1&&d.length===0&&r.bufferSubData(c,0,h),d.length!==0){for(let f=0,_=d.length;f<_;f++){let g=d[f];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}u.count!==-1&&(r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Er=class r extends Tr{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],_=[],g=[],p=[];for(let m=0;m<h;m++){let w=m*d-a;for(let y=0;y<c;y++){let S=y*u-s;_.push(S,-w,0),g.push(0,0,1),p.push(y/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<o;w++){let y=w+c*m,S=w+c*(m+1),A=w+1+c*(m+1),E=w+1+c*m;f.push(y,S,E),f.push(S,A,E)}this.setIndex(f),this.setAttribute("position",new Ei(_,3)),this.setAttribute("normal",new Ei(g,3)),this.setAttribute("uv",new Ei(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Tg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ag=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ig=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ug=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$g=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e_="gl_FragColor = linearToOutputTexel( gl_FragColor );",n_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,i_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,r_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,s_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,d_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,__=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,x_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,b_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,w_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,T_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,E_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,U_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,V_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,G_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,t0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,l0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,c0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,h0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,f0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,p0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,v0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,b0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,w0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,I0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,L0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,D0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,X0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,J0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ix=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:Tg,alphahash_pars_fragment:Eg,alphamap_fragment:Ag,alphamap_pars_fragment:Cg,alphatest_fragment:Rg,alphatest_pars_fragment:Pg,aomap_fragment:Ig,aomap_pars_fragment:Lg,batching_pars_vertex:Dg,batching_vertex:Ug,begin_vertex:Ng,beginnormal_vertex:Og,bsdfs:Fg,iridescence_fragment:Bg,bumpmap_pars_fragment:zg,clipping_planes_fragment:kg,clipping_planes_pars_fragment:Vg,clipping_planes_pars_vertex:Hg,clipping_planes_vertex:Gg,color_fragment:Wg,color_pars_fragment:Xg,color_pars_vertex:Yg,color_vertex:qg,common:Zg,cube_uv_reflection_fragment:Jg,defaultnormal_vertex:$g,displacementmap_pars_vertex:Kg,displacementmap_vertex:Qg,emissivemap_fragment:jg,emissivemap_pars_fragment:t_,colorspace_fragment:e_,colorspace_pars_fragment:n_,envmap_fragment:i_,envmap_common_pars_fragment:r_,envmap_pars_fragment:s_,envmap_pars_vertex:a_,envmap_physical_pars_fragment:__,envmap_vertex:o_,fog_vertex:l_,fog_pars_vertex:c_,fog_fragment:h_,fog_pars_fragment:u_,gradientmap_pars_fragment:f_,lightmap_pars_fragment:d_,lights_lambert_fragment:p_,lights_lambert_pars_fragment:m_,lights_pars_begin:g_,lights_toon_fragment:x_,lights_toon_pars_fragment:v_,lights_phong_fragment:y_,lights_phong_pars_fragment:M_,lights_physical_fragment:S_,lights_physical_pars_fragment:b_,lights_fragment_begin:w_,lights_fragment_maps:T_,lights_fragment_end:E_,logdepthbuf_fragment:A_,logdepthbuf_pars_fragment:C_,logdepthbuf_pars_vertex:R_,logdepthbuf_vertex:P_,map_fragment:I_,map_pars_fragment:L_,map_particle_fragment:D_,map_particle_pars_fragment:U_,metalnessmap_fragment:N_,metalnessmap_pars_fragment:O_,morphinstance_vertex:F_,morphcolor_vertex:B_,morphnormal_vertex:z_,morphtarget_pars_vertex:k_,morphtarget_vertex:V_,normal_fragment_begin:H_,normal_fragment_maps:G_,normal_pars_fragment:W_,normal_pars_vertex:X_,normal_vertex:Y_,normalmap_pars_fragment:q_,clearcoat_normal_fragment_begin:Z_,clearcoat_normal_fragment_maps:J_,clearcoat_pars_fragment:$_,iridescence_pars_fragment:K_,opaque_fragment:Q_,packing:j_,premultiplied_alpha_fragment:t0,project_vertex:e0,dithering_fragment:n0,dithering_pars_fragment:i0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:s0,shadowmap_pars_fragment:a0,shadowmap_pars_vertex:o0,shadowmap_vertex:l0,shadowmask_pars_fragment:c0,skinbase_vertex:h0,skinning_pars_vertex:u0,skinning_vertex:f0,skinnormal_vertex:d0,specularmap_fragment:p0,specularmap_pars_fragment:m0,tonemapping_fragment:g0,tonemapping_pars_fragment:_0,transmission_fragment:x0,transmission_pars_fragment:v0,uv_pars_fragment:y0,uv_pars_vertex:M0,uv_vertex:S0,worldpos_vertex:b0,background_vert:w0,background_frag:T0,backgroundCube_vert:E0,backgroundCube_frag:A0,cube_vert:C0,cube_frag:R0,depth_vert:P0,depth_frag:I0,distanceRGBA_vert:L0,distanceRGBA_frag:D0,equirect_vert:U0,equirect_frag:N0,linedashed_vert:O0,linedashed_frag:F0,meshbasic_vert:B0,meshbasic_frag:z0,meshlambert_vert:k0,meshlambert_frag:V0,meshmatcap_vert:H0,meshmatcap_frag:G0,meshnormal_vert:W0,meshnormal_frag:X0,meshphong_vert:Y0,meshphong_frag:q0,meshphysical_vert:Z0,meshphysical_frag:J0,meshtoon_vert:$0,meshtoon_frag:K0,points_vert:Q0,points_frag:j0,shadow_vert:tx,shadow_frag:ex,sprite_vert:nx,sprite_frag:ix},pt={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},ci={basic:{uniforms:cn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:cn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new he(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:cn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:cn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:cn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new he(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:cn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:cn([pt.points,pt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:cn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:cn([pt.common,pt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:cn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:cn([pt.sprite,pt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:cn([pt.common,pt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:cn([pt.lights,pt.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};ci.physical={uniforms:cn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var lo={r:0,b:0,g:0},gr=new Ri,rx=new Ye;function sx(r,t,e,n,i,s,a){let o=new he(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function _(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?e:t).get(y)),y}function g(w){let y=!1,S=_(w);S===null?m(o,l):S&&S.isColor&&(m(S,1),y=!0);let A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(w,y){let S=_(y);S&&(S.isCubeTexture||S.mapping===Bo)?(h===void 0&&(h=new Ln(new ra(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:ws(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),gr.copy(y.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rx.makeRotationFromEuler(gr)),h.material.toneMapped=de.getTransfer(S.colorSpace)!==be,(u!==S||d!==S.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=r.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ln(new Er(2,2),new Yn({name:"BackgroundMaterial",uniforms:ws(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=de.getTransfer(S.colorSpace)!==be,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=r.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,y){w.getRGB(lo,id(r)),n.buffers.color.setClear(lo.r,lo.g,lo.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(w,y=1){o.set(w),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(o,l)},render:g,addToRenderList:p}}function ax(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,a=!1;function o(x,P,N,F,G){let Z=!1,k=u(F,N,P);s!==k&&(s=k,c(s.object)),Z=f(x,F,N,G),Z&&_(x,F,N,G),G!==null&&t.update(G,r.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(x,P,N,F),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function h(x){return r.deleteVertexArray(x)}function u(x,P,N){let F=N.wireframe===!0,G=n[x.id];G===void 0&&(G={},n[x.id]=G);let Z=G[P.id];Z===void 0&&(Z={},G[P.id]=Z);let k=Z[F];return k===void 0&&(k=d(l()),Z[F]=k),k}function d(x){let P=[],N=[],F=[];for(let G=0;G<e;G++)P[G]=0,N[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:F,object:x,attributes:{},index:null}}function f(x,P,N,F){let G=s.attributes,Z=P.attributes,k=0,q=N.getAttributes();for(let V in q)if(q[V].location>=0){let R=G[V],lt=Z[V];if(lt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor)),R===void 0||R.attribute!==lt||lt&&R.data!==lt.data)return!0;k++}return s.attributesNum!==k||s.index!==F}function _(x,P,N,F){let G={},Z=P.attributes,k=0,q=N.getAttributes();for(let V in q)if(q[V].location>=0){let R=Z[V];R===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(R=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(R=x.instanceColor));let lt={};lt.attribute=R,R&&R.data&&(lt.data=R.data),G[V]=lt,k++}s.attributes=G,s.attributesNum=k,s.index=F}function g(){let x=s.newAttributes;for(let P=0,N=x.length;P<N;P++)x[P]=0}function p(x){m(x,0)}function m(x,P){let N=s.newAttributes,F=s.enabledAttributes,G=s.attributeDivisors;N[x]=1,F[x]===0&&(r.enableVertexAttribArray(x),F[x]=1),G[x]!==P&&(r.vertexAttribDivisor(x,P),G[x]=P)}function w(){let x=s.newAttributes,P=s.enabledAttributes;for(let N=0,F=P.length;N<F;N++)P[N]!==x[N]&&(r.disableVertexAttribArray(N),P[N]=0)}function y(x,P,N,F,G,Z,k){k===!0?r.vertexAttribIPointer(x,P,N,G,Z):r.vertexAttribPointer(x,P,N,F,G,Z)}function S(x,P,N,F){g();let G=F.attributes,Z=N.getAttributes(),k=P.defaultAttributeValues;for(let q in Z){let V=Z[q];if(V.location>=0){let at=G[q];if(at===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(at=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(at=x.instanceColor)),at!==void 0){let R=at.normalized,lt=at.itemSize,Ft=t.get(at);if(Ft===void 0)continue;let Yt=Ft.buffer,Y=Ft.type,tt=Ft.bytesPerElement,ht=Y===r.INT||Y===r.UNSIGNED_INT||at.gpuType===fh;if(at.isInterleavedBufferAttribute){let ot=at.data,Tt=ot.stride,Ct=at.offset;if(ot.isInstancedInterleavedBuffer){for(let Ht=0;Ht<V.locationSize;Ht++)m(V.location+Ht,ot.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ht=0;Ht<V.locationSize;Ht++)p(V.location+Ht);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let Ht=0;Ht<V.locationSize;Ht++)y(V.location+Ht,lt/V.locationSize,Y,R,Tt*tt,(Ct+lt/V.locationSize*Ht)*tt,ht)}else{if(at.isInstancedBufferAttribute){for(let ot=0;ot<V.locationSize;ot++)m(V.location+ot,at.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ot=0;ot<V.locationSize;ot++)p(V.location+ot);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let ot=0;ot<V.locationSize;ot++)y(V.location+ot,lt/V.locationSize,Y,R,lt*tt,lt/V.locationSize*ot*tt,ht)}}else if(k!==void 0){let R=k[q];if(R!==void 0)switch(R.length){case 2:r.vertexAttrib2fv(V.location,R);break;case 3:r.vertexAttrib3fv(V.location,R);break;case 4:r.vertexAttrib4fv(V.location,R);break;default:r.vertexAttrib1fv(V.location,R)}}}}w()}function A(){L();for(let x in n){let P=n[x];for(let N in P){let F=P[N];for(let G in F)h(F[G].object),delete F[G];delete P[N]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;let P=n[x.id];for(let N in P){let F=P[N];for(let G in F)h(F[G].object),delete F[G];delete P[N]}delete n[x.id]}function T(x){for(let P in n){let N=n[P];if(N[x.id]===void 0)continue;let F=N[x.id];for(let G in F)h(F[G].object),delete F[G];delete N[x.id]}}function L(){v(),a=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:p,disableUnusedAttributes:w}}function ox(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g];for(let g=0;g<d.length;g++)e.update(_,n,d[g])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function lx(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==ii&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let T=E===oa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ai&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==wi&&!T)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:S,maxSamples:A}}function cx(r){let t=this,e=null,n=0,i=!1,s=!1,a=new Si,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!i||_===null||_.length===0||s&&!p)s?h(null):c();else{let w=s?0:n,y=w*4,S=m.clippingState||null;l.value=S,S=h(_,d,y,f);for(let A=0;A!==y;++A)S[A]=e[A];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){let g=u!==null?u.length:0,p=null;if(g!==0){if(p=l.value,_!==!0||p===null){let m=f+g*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,S=f;y!==g;++y,S+=4)a.copy(u[y]).applyMatrix4(w,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function hx(r){let t=new WeakMap;function e(a,o){return o===oc?a.mapping=vs:o===lc&&(a.mapping=ys),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===oc||o===lc)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Gc(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var sa=class extends Ro{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ds=4,gf=[.125,.215,.35,.446,.526,.582],yr=20,jl=new sa,_f=new he,tc=null,ec=0,nc=0,ic=!1,xr=(1+Math.sqrt(5))/2,us=1/xr,xf=[new X(-xr,us,0),new X(xr,us,0),new X(-us,0,xr),new X(us,0,xr),new X(0,xr,-us),new X(0,xr,us),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],Lo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){tc=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tc,ec,nc),this._renderer.xr.enabled=ic,t.scissorTest=!1,co(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vs||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tc=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:oa,format:ii,colorSpace:ji,depthBuffer:!1},i=vf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vf(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ux(s)),this._blurMaterial=fx(s,t,e)}return i}_compileMaterial(t){let e=new Ln(this._lodPlanes[0],t);this._renderer.compile(e,jl)}_sceneToCubeUV(t,e,n,i){let o=new In(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(_f),h.toneMapping=Ji,h.autoClear=!1;let f=new Eo({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),_=new Ln(new ra,f),g=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,g=!0):(f.color.copy(_f),g=!0);for(let m=0;m<6;m++){let w=m%3;w===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):w===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let y=this._cubeSize;co(i,w*y,m>2?y:0,y,y),h.setRenderTarget(i),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===vs||t.mapping===ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yf());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ln(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;co(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,jl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=xf[(i-s-1)%xf.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ln(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*yr-1),g=s/_,p=isFinite(s)?1+Math.floor(h*g):yr;p>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${yr}`);let m=[],w=0;for(let T=0;T<yr;++T){let L=T/g,v=Math.exp(-L*L/2);m.push(v),T===0?w+=v:T<p&&(w+=2*v)}for(let T=0;T<m.length;T++)m[T]=m[T]/w;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;let S=this._sizeLods[i],A=3*S*(i>y-ds?i-y+ds:0),E=4*(this._cubeSize-S);co(e,A,E,3*S,2*S),l.setRenderTarget(e),l.render(u,jl)}};function ux(r){let t=[],e=[],n=[],i=r,s=r-ds+1+gf.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>r-ds?l=gf[a-r+ds-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,p=2,m=1,w=new Float32Array(g*_*f),y=new Float32Array(p*_*f),S=new Float32Array(m*_*f);for(let E=0;E<f;E++){let T=E%3*2/3-1,L=E>2?0:-1,v=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];w.set(v,g*_*E),y.set(d,p*_*E);let x=[E,E,E,E,E,E];S.set(x,m*_*E)}let A=new Tr;A.setAttribute("position",new Xn(w,g)),A.setAttribute("uv",new Xn(y,p)),A.setAttribute("faceIndex",new Xn(S,m)),t.push(A),i>ds&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vf(r,t,e){let n=new Ci(r,t,e);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function fx(r,t,e){let n=new Float32Array(yr),i=new X(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function yf(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Mf(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function vh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dx(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===oc||l===lc,h=l===vs||l===ys;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Lo(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Lo(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function px(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ed("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function mx(r,t,e,n){let i={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);for(let _ in d.morphAttributes){let g=d.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}d.removeEventListener("dispose",a),delete i[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let _ in d)t.update(d[_],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let _ in f){let g=f[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],r.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,_=u.attributes.position,g=0;if(f!==null){let w=f.array;g=f.version;for(let y=0,S=w.length;y<S;y+=3){let A=w[y+0],E=w[y+1],T=w[y+2];d.push(A,E,E,T,T,A)}}else if(_!==void 0){let w=_.array;g=_.version;for(let y=0,S=w.length/3-1;y<S;y+=3){let A=y+0,E=y+1,T=y+2;d.push(A,E,E,T,T,A)}}else return;let p=new(td(d)?Co:Ao)(d,1);p.version=g;let m=s.get(u);m&&t.remove(m),s.set(u,p)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function gx(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),e.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*a,_),e.update(f,n,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];e.update(p,n,1)}function u(d,f,_,g){if(_===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let m=0;for(let w=0;w<_;w++)m+=f[w];for(let w=0;w<g.length;w++)e.update(m,n,g[w])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function _x(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function xx(r,t,e){let n=new WeakMap,i=new Xe;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let v=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],y=0;f===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let S=o.attributes.position.count*y,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let E=new Float32Array(S*A*4*u),T=new wo(E,S,A,u);T.type=wi,T.needsUpdate=!0;let L=y*4;for(let x=0;x<u;x++){let P=p[x],N=m[x],F=w[x],G=S*A*4*x;for(let Z=0;Z<P.count;Z++){let k=Z*L;f===!0&&(i.fromBufferAttribute(P,Z),E[G+k+0]=i.x,E[G+k+1]=i.y,E[G+k+2]=i.z,E[G+k+3]=0),_===!0&&(i.fromBufferAttribute(N,Z),E[G+k+4]=i.x,E[G+k+5]=i.y,E[G+k+6]=i.z,E[G+k+7]=0),g===!0&&(i.fromBufferAttribute(F,Z),E[G+k+8]=i.x,E[G+k+9]=i.y,E[G+k+10]=i.z,E[G+k+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new ne(S,A)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function vx(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var Do=class extends Dn{constructor(t,e,n,i,s,a,o,l,c,h=gs){if(h!==gs&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gs&&(n=br),n===void 0&&h===Ss&&(n=Ms),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Wn,this.minFilter=l!==void 0?l:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},sd=new Dn,Sf=new Do(1,1),ad=new wo,od=new kc,ld=new Po,bf=[],wf=[],Tf=new Float32Array(16),Ef=new Float32Array(9),Af=new Float32Array(4);function Es(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=bf[i];if(s===void 0&&(s=new Float32Array(i),bf[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ke(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ve(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ko(r,t){let e=wf[t];e===void 0&&(e=new Int32Array(t),wf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function yx(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Mx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;r.uniform2fv(this.addr,t),Ve(e,t)}}function Sx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;r.uniform3fv(this.addr,t),Ve(e,t)}}function bx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;r.uniform4fv(this.addr,t),Ve(e,t)}}function wx(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,n))return;Af.set(n),r.uniformMatrix2fv(this.addr,!1,Af),Ve(e,n)}}function Tx(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,n))return;Ef.set(n),r.uniformMatrix3fv(this.addr,!1,Ef),Ve(e,n)}}function Ex(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,n))return;Tf.set(n),r.uniformMatrix4fv(this.addr,!1,Tf),Ve(e,n)}}function Ax(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Cx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;r.uniform2iv(this.addr,t),Ve(e,t)}}function Rx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;r.uniform3iv(this.addr,t),Ve(e,t)}}function Px(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;r.uniform4iv(this.addr,t),Ve(e,t)}}function Ix(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Lx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;r.uniform2uiv(this.addr,t),Ve(e,t)}}function Dx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;r.uniform3uiv(this.addr,t),Ve(e,t)}}function Ux(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;r.uniform4uiv(this.addr,t),Ve(e,t)}}function Nx(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Sf.compareFunction=jf,s=Sf):s=sd,e.setTexture2D(t||s,i)}function Ox(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||od,i)}function Fx(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ld,i)}function Bx(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ad,i)}function zx(r){switch(r){case 5126:return yx;case 35664:return Mx;case 35665:return Sx;case 35666:return bx;case 35674:return wx;case 35675:return Tx;case 35676:return Ex;case 5124:case 35670:return Ax;case 35667:case 35671:return Cx;case 35668:case 35672:return Rx;case 35669:case 35673:return Px;case 5125:return Ix;case 36294:return Lx;case 36295:return Dx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return Bx}}function kx(r,t){r.uniform1fv(this.addr,t)}function Vx(r,t){let e=Es(t,this.size,2);r.uniform2fv(this.addr,e)}function Hx(r,t){let e=Es(t,this.size,3);r.uniform3fv(this.addr,e)}function Gx(r,t){let e=Es(t,this.size,4);r.uniform4fv(this.addr,e)}function Wx(r,t){let e=Es(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Xx(r,t){let e=Es(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Yx(r,t){let e=Es(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function qx(r,t){r.uniform1iv(this.addr,t)}function Zx(r,t){r.uniform2iv(this.addr,t)}function Jx(r,t){r.uniform3iv(this.addr,t)}function $x(r,t){r.uniform4iv(this.addr,t)}function Kx(r,t){r.uniform1uiv(this.addr,t)}function Qx(r,t){r.uniform2uiv(this.addr,t)}function jx(r,t){r.uniform3uiv(this.addr,t)}function tv(r,t){r.uniform4uiv(this.addr,t)}function ev(r,t,e){let n=this.cache,i=t.length,s=ko(e,i);ke(n,s)||(r.uniform1iv(this.addr,s),Ve(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||sd,s[a])}function nv(r,t,e){let n=this.cache,i=t.length,s=ko(e,i);ke(n,s)||(r.uniform1iv(this.addr,s),Ve(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||od,s[a])}function iv(r,t,e){let n=this.cache,i=t.length,s=ko(e,i);ke(n,s)||(r.uniform1iv(this.addr,s),Ve(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||ld,s[a])}function rv(r,t,e){let n=this.cache,i=t.length,s=ko(e,i);ke(n,s)||(r.uniform1iv(this.addr,s),Ve(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ad,s[a])}function sv(r){switch(r){case 5126:return kx;case 35664:return Vx;case 35665:return Hx;case 35666:return Gx;case 35674:return Wx;case 35675:return Xx;case 35676:return Yx;case 5124:case 35670:return qx;case 35667:case 35671:return Zx;case 35668:case 35672:return Jx;case 35669:case 35673:return $x;case 5125:return Kx;case 36294:return Qx;case 36295:return jx;case 36296:return tv;case 35678:case 36198:case 36298:case 36306:case 35682:return ev;case 35679:case 36299:case 36307:return nv;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return rv}}var Wc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zx(e.type)}},Xc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sv(e.type)}},Yc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},rc=/(\w+)(\])?(\[|\.)?/g;function Cf(r,t){r.seq.push(t),r.map[t.id]=t}function av(r,t,e){let n=r.name,i=n.length;for(rc.lastIndex=0;;){let s=rc.exec(n),a=rc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Cf(e,c===void 0?new Wc(o,r,t):new Xc(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Yc(o),Cf(e,u)),e=u}}}var xs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);av(s,a,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Rf(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var ov=37297,lv=0;function cv(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function hv(r){let t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(r),n;switch(t===e?n="":t===Mo&&e===yo?n="LinearDisplayP3ToLinearSRGB":t===yo&&e===Mo&&(n="LinearSRGBToLinearDisplayP3"),r){case ji:case zo:return[n,"LinearTransferOETF"];case li:case xh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Pf(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+cv(r.getShaderSource(t),a)}else return i}function uv(r,t){let e=hv(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function fv(r,t){let e;switch(t){case Fm:e="Linear";break;case Bm:e="Reinhard";break;case zm:e="OptimizedCineon";break;case km:e="ACESFilmic";break;case Hm:e="AgX";break;case Gm:e="Neutral";break;case Vm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function dv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function pv(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function mv(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Qs(r){return r!==""}function If(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gv=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(r){return r.replace(gv,xv)}var _v=new Map;function xv(r,t){let e=qt[t];if(e===void 0){let n=_v.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qc(e)}var vv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Df(r){return r.replace(vv,yv)}function yv(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Uf(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Mv(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===kf?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===cm?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function Sv(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case vs:case ys:t="ENVMAP_TYPE_CUBE";break;case Bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bv(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function wv(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Vf:t="ENVMAP_BLENDING_MULTIPLY";break;case Nm:t="ENVMAP_BLENDING_MIX";break;case Om:t="ENVMAP_BLENDING_ADD";break}return t}function Tv(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ev(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Mv(e),c=Sv(e),h=bv(e),u=wv(e),d=Tv(e),f=dv(e),_=pv(s),g=i.createProgram(),p,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Qs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Qs).join(`
`),m.length>0&&(m+=`
`)):(p=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),m=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ji?"#define TONE_MAPPING":"",e.toneMapping!==Ji?qt.tonemapping_pars_fragment:"",e.toneMapping!==Ji?fv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,uv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),a=qc(a),a=If(a,e),a=Lf(a,e),o=qc(o),o=If(o,e),o=Lf(o,e),a=Df(a),o=Df(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=w+p+a,S=w+m+o,A=Rf(i,i.VERTEX_SHADER,y),E=Rf(i,i.FRAGMENT_SHADER,S);i.attachShader(g,A),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(P){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(A).trim(),G=i.getShaderInfoLog(E).trim(),Z=!0,k=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,A,E);else{let q=Pf(i,A,"vertex"),V=Pf(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+q+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||G==="")&&(k=!1);k&&(P.diagnostics={runnable:Z,programLog:N,vertexShader:{log:F,prefix:p},fragmentShader:{log:G,prefix:m}})}i.deleteShader(A),i.deleteShader(E),L=new xs(i,g),v=mv(i,g)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,ov)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=E,this}var Av=0,Zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Jc(t),e.set(t,n)),n}},Jc=class{constructor(t){this.id=Av++,this.code=t,this.usedTimes=0}};function Cv(r,t,e,n,i,s,a){let o=new To,l=new Zc,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,x,P,N,F){let G=N.fog,Z=F.geometry,k=v.isMeshStandardMaterial?N.environment:null,q=(v.isMeshStandardMaterial?e:t).get(v.envMap||k),V=q&&q.mapping===Bo?q.image.height:null,at=_[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let R=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,lt=R!==void 0?R.length:0,Ft=0;Z.morphAttributes.position!==void 0&&(Ft=1),Z.morphAttributes.normal!==void 0&&(Ft=2),Z.morphAttributes.color!==void 0&&(Ft=3);let Yt,Y,tt,ht;if(at){let ee=ci[at];Yt=ee.vertexShader,Y=ee.fragmentShader}else Yt=v.vertexShader,Y=v.fragmentShader,l.update(v),tt=l.getVertexShaderID(v),ht=l.getFragmentShaderID(v);let ot=r.getRenderTarget(),Tt=F.isInstancedMesh===!0,Ct=F.isBatchedMesh===!0,Ht=!!v.map,Qt=!!v.matcap,I=!!q,It=!!v.aoMap,Nt=!!v.lightMap,Wt=!!v.bumpMap,_t=!!v.normalMap,H=!!v.displacementMap,Et=!!v.emissiveMap,Ot=!!v.metalnessMap,C=!!v.roughnessMap,M=v.anisotropy>0,W=v.clearcoat>0,j=v.dispersion>0,nt=v.iridescence>0,$=v.sheen>0,bt=v.transmission>0,it=M&&!!v.anisotropyMap,dt=W&&!!v.clearcoatMap,Dt=W&&!!v.clearcoatNormalMap,rt=W&&!!v.clearcoatRoughnessMap,gt=nt&&!!v.iridescenceMap,Rt=nt&&!!v.iridescenceThicknessMap,Bt=$&&!!v.sheenColorMap,mt=$&&!!v.sheenRoughnessMap,zt=!!v.specularMap,Gt=!!v.specularColorMap,le=!!v.specularIntensityMap,U=bt&&!!v.transmissionMap,J=bt&&!!v.thicknessMap,K=!!v.gradientMap,Q=!!v.alphaMap,st=v.alphaTest>0,wt=!!v.alphaHash,Xt=!!v.extensions,me=Ji;v.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(me=r.toneMapping);let ge={shaderID:at,shaderType:v.type,shaderName:v.name,vertexShader:Yt,fragmentShader:Y,defines:v.defines,customVertexShaderID:tt,customFragmentShaderID:ht,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ct,batchingColor:Ct&&F._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&F.instanceColor!==null,instancingMorph:Tt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?r.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ji,alphaToCoverage:!!v.alphaToCoverage,map:Ht,matcap:Qt,envMap:I,envMapMode:I&&q.mapping,envMapCubeUVHeight:V,aoMap:It,lightMap:Nt,bumpMap:Wt,normalMap:_t,displacementMap:d&&H,emissiveMap:Et,normalMapObjectSpace:_t&&v.normalMapType===Zm,normalMapTangentSpace:_t&&v.normalMapType===qm,metalnessMap:Ot,roughnessMap:C,anisotropy:M,anisotropyMap:it,clearcoat:W,clearcoatMap:dt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:rt,dispersion:j,iridescence:nt,iridescenceMap:gt,iridescenceThicknessMap:Rt,sheen:$,sheenColorMap:Bt,sheenRoughnessMap:mt,specularMap:zt,specularColorMap:Gt,specularIntensityMap:le,transmission:bt,transmissionMap:U,thicknessMap:J,gradientMap:K,opaque:v.transparent===!1&&v.blending===ms&&v.alphaToCoverage===!1,alphaMap:Q,alphaTest:st,alphaHash:wt,combine:v.combine,mapUv:Ht&&g(v.map.channel),aoMapUv:It&&g(v.aoMap.channel),lightMapUv:Nt&&g(v.lightMap.channel),bumpMapUv:Wt&&g(v.bumpMap.channel),normalMapUv:_t&&g(v.normalMap.channel),displacementMapUv:H&&g(v.displacementMap.channel),emissiveMapUv:Et&&g(v.emissiveMap.channel),metalnessMapUv:Ot&&g(v.metalnessMap.channel),roughnessMapUv:C&&g(v.roughnessMap.channel),anisotropyMapUv:it&&g(v.anisotropyMap.channel),clearcoatMapUv:dt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:mt&&g(v.sheenRoughnessMap.channel),specularMapUv:zt&&g(v.specularMap.channel),specularColorMapUv:Gt&&g(v.specularColorMap.channel),specularIntensityMapUv:le&&g(v.specularIntensityMap.channel),transmissionMapUv:U&&g(v.transmissionMap.channel),thicknessMapUv:J&&g(v.thicknessMap.channel),alphaMapUv:Q&&g(v.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(_t||M),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(Ht||Q),fog:!!G,useFog:v.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Ft,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:me,decodeVideoTexture:Ht&&v.map.isVideoTexture===!0&&de.getTransfer(v.map.colorSpace)===be,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===bi,flipSided:v.side===Mn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Xt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&v.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function m(v){let x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)x.push(P),x.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(w(x,v),y(x,v),x.push(r.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function w(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function y(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.doubleSided&&o.enable(10),x.flipSided&&o.enable(11),x.useDepthPacking&&o.enable(12),x.dithering&&o.enable(13),x.transmission&&o.enable(14),x.sheen&&o.enable(15),x.opaque&&o.enable(16),x.pointsUvs&&o.enable(17),x.decodeVideoTexture&&o.enable(18),x.alphaToCoverage&&o.enable(19),v.push(o.mask)}function S(v){let x=_[v.type],P;if(x){let N=ci[x];P=vg.clone(N.uniforms)}else P=v.uniforms;return P}function A(v,x){let P;for(let N=0,F=h.length;N<F;N++){let G=h[N];if(G.cacheKey===x){P=G,++P.usedTimes;break}}return P===void 0&&(P=new Ev(r,x,v,s),h.push(P)),P}function E(v){if(--v.usedTimes===0){let x=h.indexOf(v);h[x]=h[h.length-1],h.pop(),v.destroy()}}function T(v){l.remove(v)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:A,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:L}}function Rv(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Pv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Nf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Of(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,_,g,p){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},r[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=g,m.group=p),t++,m}function o(u,d,f,_,g,p){let m=a(u,d,f,_,g,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(u,d,f,_,g,p){let m=a(u,d,f,_,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||Pv),n.length>1&&n.sort(d||Nf),i.length>1&&i.sort(d||Nf)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function Iv(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new Of,r.set(n,[a])):i>=s.length?(a=new Of,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Lv(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new he};break;case"SpotLight":e={position:new X,direction:new X,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new X,halfWidth:new X,halfHeight:new X};break}return r[t.id]=e,e}}}function Dv(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Uv=0;function Nv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Ov(r){let t=new Lv,e=Dv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);let i=new X,s=new Ye,a=new Ye;function o(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,_=0,g=0,p=0,m=0,w=0,y=0,S=0,A=0,E=0,T=0;c.sort(Nv);for(let v=0,x=c.length;v<x;v++){let P=c[v],N=P.color,F=P.intensity,G=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*F,u+=N.g*F,d+=N.b*F;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],F);T++}else if(P.isDirectionalLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let q=P.shadow,V=e.get(P);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=P.shadow.matrix,w++}n.directional[f]=k,f++}else if(P.isSpotLight){let k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(N).multiplyScalar(F),k.distance=G,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[g]=k;let q=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,q.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[g]=q.matrix,P.castShadow){let V=e.get(P);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=Z,S++}g++}else if(P.isRectAreaLight){let k=t.get(P);k.color.copy(N).multiplyScalar(F),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=k,p++}else if(P.isPointLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let q=P.shadow,V=e.get(P);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=P.shadow.matrix,y++}n.point[_]=k,_++}else if(P.isHemisphereLight){let k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(F),k.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[m]=k,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==f||L.pointLength!==_||L.spotLength!==g||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==w||L.numPointShadows!==y||L.numSpotShadows!==S||L.numSpotMaps!==A||L.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=S+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,L.directionalLength=f,L.pointLength=_,L.spotLength=g,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=w,L.numPointShadows=y,L.numSpotShadows=S,L.numSpotMaps=A,L.numLightProbes=T,n.version=Uv++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0,p=h.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){let y=c[m];if(y.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),u++}else if(y.isSpotLight){let S=n.spot[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),f++}else if(y.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Ff(r){let t=new Ov(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Fv(r){let t=new WeakMap;function e(i,s=0){let a=t.get(i),o;return a===void 0?(o=new Ff(r),t.set(i,[o])):s>=a.length?(o=new Ff(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var $c=class extends bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Kc=class extends bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kv(r,t,e){let n=new Io,i=new ne,s=new ne,a=new Xe,o=new $c({depthPacking:Ym}),l=new Kc,c={},h=e.maxTextureSize,u={[$i]:Mn,[Mn]:$i,[bi]:bi},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:Bv,fragmentShader:zv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new Tr;_.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ln(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kf;let m=this.type;this.render=function(E,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let v=r.getRenderTarget(),x=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Zi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let F=m!==Mi&&this.type===Mi,G=m===Mi&&this.type!==Mi;for(let Z=0,k=E.length;Z<k;Z++){let q=E[Z],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let at=V.getFrameExtents();if(i.multiply(at),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/at.x),i.x=s.x*at.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/at.y),i.y=s.y*at.y,V.mapSize.y=s.y)),V.map===null||F===!0||G===!0){let lt=this.type!==Mi?{minFilter:Wn,magFilter:Wn}:{};V.map!==null&&V.map.dispose(),V.map=new Ci(i.x,i.y,lt),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();let R=V.getViewportCount();for(let lt=0;lt<R;lt++){let Ft=V.getViewport(lt);a.set(s.x*Ft.x,s.y*Ft.y,s.x*Ft.z,s.y*Ft.w),N.viewport(a),V.updateMatrices(q,lt),n=V.getFrustum(),S(T,L,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===Mi&&w(V,L),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(v,x,P)};function w(E,T){let L=t.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ci(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(T,null,L,d,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(T,null,L,f,g,null)}function y(E,T,L,v){let x=null,P=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)x=P;else if(x=L.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let N=x.uuid,F=T.uuid,G=c[N];G===void 0&&(G={},c[N]=G);let Z=G[F];Z===void 0&&(Z=x.clone(),G[F]=Z,T.addEventListener("dispose",A)),x=Z}if(x.visible=T.visible,x.wireframe=T.wireframe,v===Mi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:u[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let N=r.properties.get(x);N.light=L}return x}function S(E,T,L,v,x){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Mi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);let F=t.update(E),G=E.material;if(Array.isArray(G)){let Z=F.groups;for(let k=0,q=Z.length;k<q;k++){let V=Z[k],at=G[V.materialIndex];if(at&&at.visible){let R=y(E,at,v,x);E.onBeforeShadow(r,E,T,L,F,R,V),r.renderBufferDirect(L,null,F,R,E,V),E.onAfterShadow(r,E,T,L,F,R,V)}}}else if(G.visible){let Z=y(E,G,v,x);E.onBeforeShadow(r,E,T,L,F,Z,null),r.renderBufferDirect(L,null,F,Z,E,null),E.onAfterShadow(r,E,T,L,F,Z,null)}}let N=E.children;for(let F=0,G=N.length;F<G;F++)S(N[F],T,L,v,x)}function A(E){E.target.removeEventListener("dispose",A);for(let L in c){let v=c[L],x=E.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}function Vv(r){function t(){let U=!1,J=new Xe,K=null,Q=new Xe(0,0,0,0);return{setMask:function(st){K!==st&&!U&&(r.colorMask(st,st,st,st),K=st)},setLocked:function(st){U=st},setClear:function(st,wt,Xt,me,ge){ge===!0&&(st*=me,wt*=me,Xt*=me),J.set(st,wt,Xt,me),Q.equals(J)===!1&&(r.clearColor(st,wt,Xt,me),Q.copy(J))},reset:function(){U=!1,K=null,Q.set(-1,0,0,0)}}}function e(){let U=!1,J=null,K=null,Q=null;return{setTest:function(st){st?ht(r.DEPTH_TEST):ot(r.DEPTH_TEST)},setMask:function(st){J!==st&&!U&&(r.depthMask(st),J=st)},setFunc:function(st){if(K!==st){switch(st){case Cm:r.depthFunc(r.NEVER);break;case Rm:r.depthFunc(r.ALWAYS);break;case Pm:r.depthFunc(r.LESS);break;case _o:r.depthFunc(r.LEQUAL);break;case Im:r.depthFunc(r.EQUAL);break;case Lm:r.depthFunc(r.GEQUAL);break;case Dm:r.depthFunc(r.GREATER);break;case Um:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=st}},setLocked:function(st){U=st},setClear:function(st){Q!==st&&(r.clearDepth(st),Q=st)},reset:function(){U=!1,J=null,K=null,Q=null}}}function n(){let U=!1,J=null,K=null,Q=null,st=null,wt=null,Xt=null,me=null,ge=null;return{setTest:function(ee){U||(ee?ht(r.STENCIL_TEST):ot(r.STENCIL_TEST))},setMask:function(ee){J!==ee&&!U&&(r.stencilMask(ee),J=ee)},setFunc:function(ee,Ut,St){(K!==ee||Q!==Ut||st!==St)&&(r.stencilFunc(ee,Ut,St),K=ee,Q=Ut,st=St)},setOp:function(ee,Ut,St){(wt!==ee||Xt!==Ut||me!==St)&&(r.stencilOp(ee,Ut,St),wt=ee,Xt=Ut,me=St)},setLocked:function(ee){U=ee},setClear:function(ee){ge!==ee&&(r.clearStencil(ee),ge=ee)},reset:function(){U=!1,J=null,K=null,Q=null,st=null,wt=null,Xt=null,me=null,ge=null}}}let i=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,_=!1,g=null,p=null,m=null,w=null,y=null,S=null,A=null,E=new he(0,0,0),T=0,L=!1,v=null,x=null,P=null,N=null,F=null,G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,k=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=k>=1):q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=k>=2);let V=null,at={},R=r.getParameter(r.SCISSOR_BOX),lt=r.getParameter(r.VIEWPORT),Ft=new Xe().fromArray(R),Yt=new Xe().fromArray(lt);function Y(U,J,K,Q){let st=new Uint8Array(4),wt=r.createTexture();r.bindTexture(U,wt),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xt=0;Xt<K;Xt++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(J,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,st):r.texImage2D(J+Xt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,st);return wt}let tt={};tt[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),tt[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),tt[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ht(r.DEPTH_TEST),s.setFunc(_o),Wt(!1),_t(ku),ht(r.CULL_FACE),It(Zi);function ht(U){c[U]!==!0&&(r.enable(U),c[U]=!0)}function ot(U){c[U]!==!1&&(r.disable(U),c[U]=!1)}function Tt(U,J){return h[U]!==J?(r.bindFramebuffer(U,J),h[U]=J,U===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=J),U===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=J),!0):!1}function Ct(U,J){let K=d,Q=!1;if(U){K=u.get(J),K===void 0&&(K=[],u.set(J,K));let st=U.textures;if(K.length!==st.length||K[0]!==r.COLOR_ATTACHMENT0){for(let wt=0,Xt=st.length;wt<Xt;wt++)K[wt]=r.COLOR_ATTACHMENT0+wt;K.length=st.length,Q=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,Q=!0);Q&&r.drawBuffers(K)}function Ht(U){return f!==U?(r.useProgram(U),f=U,!0):!1}let Qt={[vr]:r.FUNC_ADD,[um]:r.FUNC_SUBTRACT,[fm]:r.FUNC_REVERSE_SUBTRACT};Qt[dm]=r.MIN,Qt[pm]=r.MAX;let I={[mm]:r.ZERO,[gm]:r.ONE,[_m]:r.SRC_COLOR,[sc]:r.SRC_ALPHA,[bm]:r.SRC_ALPHA_SATURATE,[Mm]:r.DST_COLOR,[vm]:r.DST_ALPHA,[xm]:r.ONE_MINUS_SRC_COLOR,[ac]:r.ONE_MINUS_SRC_ALPHA,[Sm]:r.ONE_MINUS_DST_COLOR,[ym]:r.ONE_MINUS_DST_ALPHA,[wm]:r.CONSTANT_COLOR,[Tm]:r.ONE_MINUS_CONSTANT_COLOR,[Em]:r.CONSTANT_ALPHA,[Am]:r.ONE_MINUS_CONSTANT_ALPHA};function It(U,J,K,Q,st,wt,Xt,me,ge,ee){if(U===Zi){_===!0&&(ot(r.BLEND),_=!1);return}if(_===!1&&(ht(r.BLEND),_=!0),U!==hm){if(U!==g||ee!==L){if((p!==vr||y!==vr)&&(r.blendEquation(r.FUNC_ADD),p=vr,y=vr),ee)switch(U){case ms:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vu:r.blendFunc(r.ONE,r.ONE);break;case Hu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Gu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ms:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vu:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Hu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Gu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,w=null,S=null,A=null,E.set(0,0,0),T=0,g=U,L=ee}return}st=st||J,wt=wt||K,Xt=Xt||Q,(J!==p||st!==y)&&(r.blendEquationSeparate(Qt[J],Qt[st]),p=J,y=st),(K!==m||Q!==w||wt!==S||Xt!==A)&&(r.blendFuncSeparate(I[K],I[Q],I[wt],I[Xt]),m=K,w=Q,S=wt,A=Xt),(me.equals(E)===!1||ge!==T)&&(r.blendColor(me.r,me.g,me.b,ge),E.copy(me),T=ge),g=U,L=!1}function Nt(U,J){U.side===bi?ot(r.CULL_FACE):ht(r.CULL_FACE);let K=U.side===Mn;J&&(K=!K),Wt(K),U.blending===ms&&U.transparent===!1?It(Zi):It(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),i.setMask(U.colorWrite);let Q=U.stencilWrite;a.setTest(Q),Q&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Et(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):ot(r.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(U){v!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),v=U)}function _t(U){U!==om?(ht(r.CULL_FACE),U!==x&&(U===ku?r.cullFace(r.BACK):U===lm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ot(r.CULL_FACE),x=U}function H(U){U!==P&&(Z&&r.lineWidth(U),P=U)}function Et(U,J,K){U?(ht(r.POLYGON_OFFSET_FILL),(N!==J||F!==K)&&(r.polygonOffset(J,K),N=J,F=K)):ot(r.POLYGON_OFFSET_FILL)}function Ot(U){U?ht(r.SCISSOR_TEST):ot(r.SCISSOR_TEST)}function C(U){U===void 0&&(U=r.TEXTURE0+G-1),V!==U&&(r.activeTexture(U),V=U)}function M(U,J,K){K===void 0&&(V===null?K=r.TEXTURE0+G-1:K=V);let Q=at[K];Q===void 0&&(Q={type:void 0,texture:void 0},at[K]=Q),(Q.type!==U||Q.texture!==J)&&(V!==K&&(r.activeTexture(K),V=K),r.bindTexture(U,J||tt[U]),Q.type=U,Q.texture=J)}function W(){let U=at[V];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Bt(U){Ft.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Ft.copy(U))}function mt(U){Yt.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Yt.copy(U))}function zt(U,J){let K=l.get(J);K===void 0&&(K=new WeakMap,l.set(J,K));let Q=K.get(U);Q===void 0&&(Q=r.getUniformBlockIndex(J,U.name),K.set(U,Q))}function Gt(U,J){let Q=l.get(J).get(U);o.get(J)!==Q&&(r.uniformBlockBinding(J,Q,U.__bindingPointIndex),o.set(J,Q))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},V=null,at={},h={},u=new WeakMap,d=[],f=null,_=!1,g=null,p=null,m=null,w=null,y=null,S=null,A=null,E=new he(0,0,0),T=0,L=!1,v=null,x=null,P=null,N=null,F=null,Ft.set(0,0,r.canvas.width,r.canvas.height),Yt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:ht,disable:ot,bindFramebuffer:Tt,drawBuffers:Ct,useProgram:Ht,setBlending:It,setMaterial:Nt,setFlipSided:Wt,setCullFace:_t,setLineWidth:H,setPolygonOffset:Et,setScissorTest:Ot,activeTexture:C,bindTexture:M,unbindTexture:W,compressedTexImage2D:j,compressedTexImage3D:nt,texImage2D:gt,texImage3D:Rt,updateUBOMapping:zt,uniformBlockBinding:Gt,texStorage2D:Dt,texStorage3D:rt,texSubImage2D:$,texSubImage3D:bt,compressedTexSubImage2D:it,compressedTexSubImage3D:dt,scissor:Bt,viewport:mt,reset:le}}function Bf(r,t,e,n){let i=Hv(n);switch(e){case Yf:return r*t;case Zf:return r*t;case Jf:return r*t*2;case $f:return r*t/i.components*i.byteLength;case mh:return r*t/i.components*i.byteLength;case Kf:return r*t*2/i.components*i.byteLength;case gh:return r*t*2/i.components*i.byteLength;case qf:return r*t*3/i.components*i.byteLength;case ii:return r*t*4/i.components*i.byteLength;case _h:return r*t*4/i.components*i.byteLength;case uo:case fo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case uc:case dc:return Math.max(r,16)*Math.max(t,8)/4;case hc:case fc:return Math.max(r,8)*Math.max(t,8)/2;case pc:case mc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case gc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _c:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case vc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case yc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case bc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case wc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Tc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Cc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Rc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Pc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case go:case Ic:case Lc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Qf:case Dc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Uc:case Nc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hv(r){switch(r){case Ai:case Gf:return{byteLength:1,components:1};case ea:case Wf:case oa:return{byteLength:2,components:1};case dh:case ph:return{byteLength:2,components:4};case br:case fh:case wi:return{byteLength:4,components:1};case Xf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Gv(r,t,e,n,i,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return f?new OffscreenCanvas(C,M):na("canvas")}function g(C,M,W){let j=1,nt=Ot(C);if((nt.width>W||nt.height>W)&&(j=W/Math.max(nt.width,nt.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let $=Math.floor(j*nt.width),bt=Math.floor(j*nt.height);u===void 0&&(u=_($,bt));let it=M?_($,bt):u;return it.width=$,it.height=bt,it.getContext("2d").drawImage(C,0,0,$,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+$+"x"+bt+")."),it}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==Wn&&C.minFilter!==hn}function m(C){r.generateMipmap(C)}function w(C,M,W,j,nt=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=M;if(M===r.RED&&(W===r.FLOAT&&($=r.R32F),W===r.HALF_FLOAT&&($=r.R16F),W===r.UNSIGNED_BYTE&&($=r.R8)),M===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&($=r.R8UI),W===r.UNSIGNED_SHORT&&($=r.R16UI),W===r.UNSIGNED_INT&&($=r.R32UI),W===r.BYTE&&($=r.R8I),W===r.SHORT&&($=r.R16I),W===r.INT&&($=r.R32I)),M===r.RG&&(W===r.FLOAT&&($=r.RG32F),W===r.HALF_FLOAT&&($=r.RG16F),W===r.UNSIGNED_BYTE&&($=r.RG8)),M===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&($=r.RG8UI),W===r.UNSIGNED_SHORT&&($=r.RG16UI),W===r.UNSIGNED_INT&&($=r.RG32UI),W===r.BYTE&&($=r.RG8I),W===r.SHORT&&($=r.RG16I),W===r.INT&&($=r.RG32I)),M===r.RGB&&W===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),M===r.RGBA){let bt=nt?vo:de.getTransfer(j);W===r.FLOAT&&($=r.RGBA32F),W===r.HALF_FLOAT&&($=r.RGBA16F),W===r.UNSIGNED_BYTE&&($=bt===be?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(C,M){let W;return C?M===null||M===br||M===Ms?W=r.DEPTH24_STENCIL8:M===wi?W=r.DEPTH32F_STENCIL8:M===ea&&(W=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===br||M===Ms?W=r.DEPTH_COMPONENT24:M===wi?W=r.DEPTH_COMPONENT32F:M===ea&&(W=r.DEPTH_COMPONENT16),W}function S(C,M){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Wn&&C.minFilter!==hn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){let M=C.target;M.removeEventListener("dispose",A),T(M),M.isVideoTexture&&h.delete(M)}function E(C){let M=C.target;M.removeEventListener("dispose",E),v(M)}function T(C){let M=n.get(C);if(M.__webglInit===void 0)return;let W=C.source,j=d.get(W);if(j){let nt=j[M.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&L(C),Object.keys(j).length===0&&d.delete(W)}n.remove(C)}function L(C){let M=n.get(C);r.deleteTexture(M.__webglTexture);let W=C.source,j=d.get(W);delete j[M.__cacheKey],a.memory.textures--}function v(C){let M=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let nt=0;nt<M.__webglFramebuffer[j].length;nt++)r.deleteFramebuffer(M.__webglFramebuffer[j][nt]);else r.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)r.deleteFramebuffer(M.__webglFramebuffer[j]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let W=C.textures;for(let j=0,nt=W.length;j<nt;j++){let $=n.get(W[j]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(W[j])}n.remove(C)}let x=0;function P(){x=0}function N(){let C=x;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),x+=1,C}function F(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function G(C,M){let W=n.get(C);if(C.isVideoTexture&&H(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){let j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(W,C,M);return}}e.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+M)}function Z(C,M){let W=n.get(C);if(C.version>0&&W.__version!==C.version){Yt(W,C,M);return}e.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+M)}function k(C,M){let W=n.get(C);if(C.version>0&&W.__version!==C.version){Yt(W,C,M);return}e.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+M)}function q(C,M){let W=n.get(C);if(C.version>0&&W.__version!==C.version){Y(W,C,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+M)}let V={[ta]:r.REPEAT,[Mr]:r.CLAMP_TO_EDGE,[cc]:r.MIRRORED_REPEAT},at={[Wn]:r.NEAREST,[Wm]:r.NEAREST_MIPMAP_NEAREST,[Ha]:r.NEAREST_MIPMAP_LINEAR,[hn]:r.LINEAR,[Il]:r.LINEAR_MIPMAP_NEAREST,[Sr]:r.LINEAR_MIPMAP_LINEAR},R={[Jm]:r.NEVER,[eg]:r.ALWAYS,[$m]:r.LESS,[jf]:r.LEQUAL,[Km]:r.EQUAL,[tg]:r.GEQUAL,[Qm]:r.GREATER,[jm]:r.NOTEQUAL};function lt(C,M){if(M.type===wi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===hn||M.magFilter===Il||M.magFilter===Ha||M.magFilter===Sr||M.minFilter===hn||M.minFilter===Il||M.minFilter===Ha||M.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,V[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,V[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,V[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,at[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,at[M.minFilter]),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,R[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Wn||M.minFilter!==Ha&&M.minFilter!==Sr||M.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ft(C,M){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));let j=M.source,nt=d.get(j);nt===void 0&&(nt={},d.set(j,nt));let $=F(M);if($!==C.__cacheKey){nt[$]===void 0&&(nt[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,W=!0),nt[$].usedTimes++;let bt=nt[C.__cacheKey];bt!==void 0&&(nt[C.__cacheKey].usedTimes--,bt.usedTimes===0&&L(M)),C.__cacheKey=$,C.__webglTexture=nt[$].texture}return W}function Yt(C,M,W){let j=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=r.TEXTURE_3D);let nt=Ft(C,M),$=M.source;e.bindTexture(j,C.__webglTexture,r.TEXTURE0+W);let bt=n.get($);if($.version!==bt.__version||nt===!0){e.activeTexture(r.TEXTURE0+W);let it=de.getPrimaries(de.workingColorSpace),dt=M.colorSpace===qi?null:de.getPrimaries(M.colorSpace),Dt=M.colorSpace===qi||it===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let rt=g(M.image,!1,i.maxTextureSize);rt=Et(M,rt);let gt=s.convert(M.format,M.colorSpace),Rt=s.convert(M.type),Bt=w(M.internalFormat,gt,Rt,M.colorSpace,M.isVideoTexture);lt(j,M);let mt,zt=M.mipmaps,Gt=M.isVideoTexture!==!0,le=bt.__version===void 0||nt===!0,U=$.dataReady,J=S(M,rt);if(M.isDepthTexture)Bt=y(M.format===Ss,M.type),le&&(Gt?e.texStorage2D(r.TEXTURE_2D,1,Bt,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,Bt,rt.width,rt.height,0,gt,Rt,null));else if(M.isDataTexture)if(zt.length>0){Gt&&le&&e.texStorage2D(r.TEXTURE_2D,J,Bt,zt[0].width,zt[0].height);for(let K=0,Q=zt.length;K<Q;K++)mt=zt[K],Gt?U&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,mt.width,mt.height,gt,Rt,mt.data):e.texImage2D(r.TEXTURE_2D,K,Bt,mt.width,mt.height,0,gt,Rt,mt.data);M.generateMipmaps=!1}else Gt?(le&&e.texStorage2D(r.TEXTURE_2D,J,Bt,rt.width,rt.height),U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt.width,rt.height,gt,Rt,rt.data)):e.texImage2D(r.TEXTURE_2D,0,Bt,rt.width,rt.height,0,gt,Rt,rt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Gt&&le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,J,Bt,zt[0].width,zt[0].height,rt.depth);for(let K=0,Q=zt.length;K<Q;K++)if(mt=zt[K],M.format!==ii)if(gt!==null)if(Gt){if(U)if(M.layerUpdates.size>0){let st=Bf(mt.width,mt.height,M.format,M.type);for(let wt of M.layerUpdates){let Xt=mt.data.subarray(wt*st/mt.data.BYTES_PER_ELEMENT,(wt+1)*st/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,wt,mt.width,mt.height,1,gt,Xt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,mt.width,mt.height,rt.depth,gt,mt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,Bt,mt.width,mt.height,rt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,mt.width,mt.height,rt.depth,gt,Rt,mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,K,Bt,mt.width,mt.height,rt.depth,0,gt,Rt,mt.data)}else{Gt&&le&&e.texStorage2D(r.TEXTURE_2D,J,Bt,zt[0].width,zt[0].height);for(let K=0,Q=zt.length;K<Q;K++)mt=zt[K],M.format!==ii?gt!==null?Gt?U&&e.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,mt.width,mt.height,gt,mt.data):e.compressedTexImage2D(r.TEXTURE_2D,K,Bt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?U&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,mt.width,mt.height,gt,Rt,mt.data):e.texImage2D(r.TEXTURE_2D,K,Bt,mt.width,mt.height,0,gt,Rt,mt.data)}else if(M.isDataArrayTexture)if(Gt){if(le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,J,Bt,rt.width,rt.height,rt.depth),U)if(M.layerUpdates.size>0){let K=Bf(rt.width,rt.height,M.format,M.type);for(let Q of M.layerUpdates){let st=rt.data.subarray(Q*K/rt.data.BYTES_PER_ELEMENT,(Q+1)*K/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,gt,Rt,st)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,gt,Rt,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Bt,rt.width,rt.height,rt.depth,0,gt,Rt,rt.data);else if(M.isData3DTexture)Gt?(le&&e.texStorage3D(r.TEXTURE_3D,J,Bt,rt.width,rt.height,rt.depth),U&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,gt,Rt,rt.data)):e.texImage3D(r.TEXTURE_3D,0,Bt,rt.width,rt.height,rt.depth,0,gt,Rt,rt.data);else if(M.isFramebufferTexture){if(le)if(Gt)e.texStorage2D(r.TEXTURE_2D,J,Bt,rt.width,rt.height);else{let K=rt.width,Q=rt.height;for(let st=0;st<J;st++)e.texImage2D(r.TEXTURE_2D,st,Bt,K,Q,0,gt,Rt,null),K>>=1,Q>>=1}}else if(zt.length>0){if(Gt&&le){let K=Ot(zt[0]);e.texStorage2D(r.TEXTURE_2D,J,Bt,K.width,K.height)}for(let K=0,Q=zt.length;K<Q;K++)mt=zt[K],Gt?U&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,gt,Rt,mt):e.texImage2D(r.TEXTURE_2D,K,Bt,gt,Rt,mt);M.generateMipmaps=!1}else if(Gt){if(le){let K=Ot(rt);e.texStorage2D(r.TEXTURE_2D,J,Bt,K.width,K.height)}U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,gt,Rt,rt)}else e.texImage2D(r.TEXTURE_2D,0,Bt,gt,Rt,rt);p(M)&&m(j),bt.__version=$.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Y(C,M,W){if(M.image.length!==6)return;let j=Ft(C,M),nt=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+W);let $=n.get(nt);if(nt.version!==$.__version||j===!0){e.activeTexture(r.TEXTURE0+W);let bt=de.getPrimaries(de.workingColorSpace),it=M.colorSpace===qi?null:de.getPrimaries(M.colorSpace),dt=M.colorSpace===qi||bt===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Dt=M.isCompressedTexture||M.image[0].isCompressedTexture,rt=M.image[0]&&M.image[0].isDataTexture,gt=[];for(let Q=0;Q<6;Q++)!Dt&&!rt?gt[Q]=g(M.image[Q],!0,i.maxCubemapSize):gt[Q]=rt?M.image[Q].image:M.image[Q],gt[Q]=Et(M,gt[Q]);let Rt=gt[0],Bt=s.convert(M.format,M.colorSpace),mt=s.convert(M.type),zt=w(M.internalFormat,Bt,mt,M.colorSpace),Gt=M.isVideoTexture!==!0,le=$.__version===void 0||j===!0,U=nt.dataReady,J=S(M,Rt);lt(r.TEXTURE_CUBE_MAP,M);let K;if(Dt){Gt&&le&&e.texStorage2D(r.TEXTURE_CUBE_MAP,J,zt,Rt.width,Rt.height);for(let Q=0;Q<6;Q++){K=gt[Q].mipmaps;for(let st=0;st<K.length;st++){let wt=K[st];M.format!==ii?Bt!==null?Gt?U&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,st,0,0,wt.width,wt.height,Bt,wt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,st,zt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,st,0,0,wt.width,wt.height,Bt,mt,wt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,st,zt,wt.width,wt.height,0,Bt,mt,wt.data)}}}else{if(K=M.mipmaps,Gt&&le){K.length>0&&J++;let Q=Ot(gt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,J,zt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){Gt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,gt[Q].width,gt[Q].height,Bt,mt,gt[Q].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,zt,gt[Q].width,gt[Q].height,0,Bt,mt,gt[Q].data);for(let st=0;st<K.length;st++){let Xt=K[st].image[Q].image;Gt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,st+1,0,0,Xt.width,Xt.height,Bt,mt,Xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,st+1,zt,Xt.width,Xt.height,0,Bt,mt,Xt.data)}}else{Gt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Bt,mt,gt[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,zt,Bt,mt,gt[Q]);for(let st=0;st<K.length;st++){let wt=K[st];Gt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,st+1,0,0,Bt,mt,wt.image[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,st+1,zt,Bt,mt,wt.image[Q])}}}p(M)&&m(r.TEXTURE_CUBE_MAP),$.__version=nt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function tt(C,M,W,j,nt,$){let bt=s.convert(W.format,W.colorSpace),it=s.convert(W.type),dt=w(W.internalFormat,bt,it,W.colorSpace);if(!n.get(M).__hasExternalTextures){let rt=Math.max(1,M.width>>$),gt=Math.max(1,M.height>>$);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,$,dt,rt,gt,M.depth,0,bt,it,null):e.texImage2D(nt,$,dt,rt,gt,0,bt,it,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),_t(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,nt,n.get(W).__webglTexture,0,Wt(M)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,nt,n.get(W).__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(C,M,W){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer){let j=M.depthTexture,nt=j&&j.isDepthTexture?j.type:null,$=y(M.stencilBuffer,nt),bt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=Wt(M);_t(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,$,M.width,M.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,it,$,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,$,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,C)}else{let j=M.textures;for(let nt=0;nt<j.length;nt++){let $=j[nt],bt=s.convert($.format,$.colorSpace),it=s.convert($.type),dt=w($.internalFormat,bt,it,$.colorSpace),Dt=Wt(M);W&&_t(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,dt,M.width,M.height):_t(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt,dt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,dt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ot(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);let j=n.get(M.depthTexture).__webglTexture,nt=Wt(M);if(M.depthTexture.format===gs)_t(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(M.depthTexture.format===Ss)_t(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Tt(C){let M=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ot(M.__webglFramebuffer,C)}else if(W){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]=r.createRenderbuffer(),ht(M.__webglDepthbuffer[j],C,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),ht(M.__webglDepthbuffer,C,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(C,M,W){let j=n.get(C);M!==void 0&&tt(j.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Tt(C)}function Ht(C){let M=C.texture,W=n.get(C),j=n.get(M);C.addEventListener("dispose",E);let nt=C.textures,$=C.isWebGLCubeRenderTarget===!0,bt=nt.length>1;if(bt||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=M.version,a.memory.textures++),$){W.__webglFramebuffer=[];for(let it=0;it<6;it++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[it]=[];for(let dt=0;dt<M.mipmaps.length;dt++)W.__webglFramebuffer[it][dt]=r.createFramebuffer()}else W.__webglFramebuffer[it]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let it=0;it<M.mipmaps.length;it++)W.__webglFramebuffer[it]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(bt)for(let it=0,dt=nt.length;it<dt;it++){let Dt=n.get(nt[it]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&_t(C)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let it=0;it<nt.length;it++){let dt=nt[it];W.__webglColorRenderbuffer[it]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[it]);let Dt=s.convert(dt.format,dt.colorSpace),rt=s.convert(dt.type),gt=w(dt.internalFormat,Dt,rt,dt.colorSpace,C.isXRRenderTarget===!0),Rt=Wt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,gt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,W.__webglColorRenderbuffer[it])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),ht(W.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),lt(r.TEXTURE_CUBE_MAP,M);for(let it=0;it<6;it++)if(M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)tt(W.__webglFramebuffer[it][dt],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt);else tt(W.__webglFramebuffer[it],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(M)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let it=0,dt=nt.length;it<dt;it++){let Dt=nt[it],rt=n.get(Dt);e.bindTexture(r.TEXTURE_2D,rt.__webglTexture),lt(r.TEXTURE_2D,Dt),tt(W.__webglFramebuffer,C,Dt,r.COLOR_ATTACHMENT0+it,r.TEXTURE_2D,0),p(Dt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let it=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(it=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(it,j.__webglTexture),lt(it,M),M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)tt(W.__webglFramebuffer[dt],C,M,r.COLOR_ATTACHMENT0,it,dt);else tt(W.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,it,0);p(M)&&m(it),e.unbindTexture()}C.depthBuffer&&Tt(C)}function Qt(C){let M=C.textures;for(let W=0,j=M.length;W<j;W++){let nt=M[W];if(p(nt)){let $=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,bt=n.get(nt).__webglTexture;e.bindTexture($,bt),m($),e.unbindTexture()}}}let I=[],It=[];function Nt(C){if(C.samples>0){if(_t(C)===!1){let M=C.textures,W=C.width,j=C.height,nt=r.COLOR_BUFFER_BIT,$=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=n.get(C),it=M.length>1;if(it)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),it){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,bt.__webglColorRenderbuffer[dt]);let Dt=n.get(M[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Dt,0)}r.blitFramebuffer(0,0,W,j,0,0,W,j,nt,r.NEAREST),l===!0&&(I.length=0,It.length=0,I.push(r.COLOR_ATTACHMENT0+dt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(I.push($),It.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,It)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,I))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),it)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,bt.__webglColorRenderbuffer[dt]);let Dt=n.get(M[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,Dt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Wt(C){return Math.min(i.maxSamples,C.samples)}function _t(C){let M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function H(C){let M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Et(C,M){let W=C.colorSpace,j=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==ji&&W!==qi&&(de.getTransfer(W)===be?(j!==ii||nt!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function Ot(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=P,this.setTexture2D=G,this.setTexture2DArray=Z,this.setTexture3D=k,this.setTextureCube=q,this.rebindTextures=Ct,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=_t}function Wv(r,t){function e(n,i=qi){let s,a=de.getTransfer(i);if(n===Ai)return r.UNSIGNED_BYTE;if(n===dh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ph)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Xf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Gf)return r.BYTE;if(n===Wf)return r.SHORT;if(n===ea)return r.UNSIGNED_SHORT;if(n===fh)return r.INT;if(n===br)return r.UNSIGNED_INT;if(n===wi)return r.FLOAT;if(n===oa)return r.HALF_FLOAT;if(n===Yf)return r.ALPHA;if(n===qf)return r.RGB;if(n===ii)return r.RGBA;if(n===Zf)return r.LUMINANCE;if(n===Jf)return r.LUMINANCE_ALPHA;if(n===gs)return r.DEPTH_COMPONENT;if(n===Ss)return r.DEPTH_STENCIL;if(n===$f)return r.RED;if(n===mh)return r.RED_INTEGER;if(n===Kf)return r.RG;if(n===gh)return r.RG_INTEGER;if(n===_h)return r.RGBA_INTEGER;if(n===uo||n===fo||n===po||n===mo)if(a===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===uo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===uo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hc||n===uc||n===fc||n===dc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===hc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pc||n===mc||n===gc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===pc||n===mc)return a===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===gc)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_c||n===xc||n===vc||n===yc||n===Mc||n===Sc||n===bc||n===wc||n===Tc||n===Ec||n===Ac||n===Cc||n===Rc||n===Pc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===_c)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xc)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vc)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yc)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mc)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sc)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bc)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wc)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tc)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ec)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ac)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cc)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rc)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pc)return a===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===go||n===Ic||n===Lc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===go)return a===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ic)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qf||n===Dc||n===Uc||n===Nc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===go)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Dc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Qc=class extends In{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ps=class extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xv={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ps;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Dn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Yn({vertexShader:Yv,fragmentShader:qv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ln(new Er(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},th=class extends Ki{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null,g=new jc,p=e.getContextAttributes(),m=null,w=null,y=[],S=[],A=new ne,E=null,T=new In;T.layers.enable(1),T.viewport=new Xe;let L=new In;L.layers.enable(2),L.viewport=new Xe;let v=[T,L],x=new Qc;x.layers.enable(1),x.layers.enable(2);let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=y[Y];return tt===void 0&&(tt=new js,y[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=y[Y];return tt===void 0&&(tt=new js,y[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=y[Y];return tt===void 0&&(tt=new js,y[Y]=tt),tt.getHandSpace()};function F(Y){let tt=S.indexOf(Y.inputSource);if(tt===-1)return;let ht=y[tt];ht!==void 0&&(ht.update(Y.inputSource,Y.frame,c||a),ht.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<y.length;Y++){let tt=S[Y];tt!==null&&(S[Y]=null,y[Y].disconnect(tt))}P=null,N=null,g.reset(),t.setRenderTarget(m),f=null,d=null,u=null,i=null,w=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",G),i.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){let tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Ci(f.framebufferWidth,f.framebufferHeight,{format:ii,type:Ai,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,ht=null,ot=null;p.depth&&(ot=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?Ss:gs,ht=p.stencil?Ms:br);let Tt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Tt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Ci(d.textureWidth,d.textureHeight,{format:ii,type:Ai,depthTexture:new Do(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(Y){for(let tt=0;tt<Y.removed.length;tt++){let ht=Y.removed[tt],ot=S.indexOf(ht);ot>=0&&(S[ot]=null,y[ot].disconnect(ht))}for(let tt=0;tt<Y.added.length;tt++){let ht=Y.added[tt],ot=S.indexOf(ht);if(ot===-1){for(let Ct=0;Ct<y.length;Ct++)if(Ct>=S.length){S.push(ht),ot=Ct;break}else if(S[Ct]===null){S[Ct]=ht,ot=Ct;break}if(ot===-1)break}let Tt=y[ot];Tt&&Tt.connect(ht)}}let k=new X,q=new X;function V(Y,tt,ht){k.setFromMatrixPosition(tt.matrixWorld),q.setFromMatrixPosition(ht.matrixWorld);let ot=k.distanceTo(q),Tt=tt.projectionMatrix.elements,Ct=ht.projectionMatrix.elements,Ht=Tt[14]/(Tt[10]-1),Qt=Tt[14]/(Tt[10]+1),I=(Tt[9]+1)/Tt[5],It=(Tt[9]-1)/Tt[5],Nt=(Tt[8]-1)/Tt[0],Wt=(Ct[8]+1)/Ct[0],_t=Ht*Nt,H=Ht*Wt,Et=ot/(-Nt+Wt),Ot=Et*-Nt;tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ot),Y.translateZ(Et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();let C=Ht+Et,M=Qt+Et,W=_t-Ot,j=H+(ot-Ot),nt=I*Qt/M*C,$=It*Qt/M*C;Y.projectionMatrix.makePerspective(W,j,nt,$,C,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function at(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;g.texture!==null&&(Y.near=g.depthNear,Y.far=g.depthFar),x.near=L.near=T.near=Y.near,x.far=L.far=T.far=Y.far,(P!==x.near||N!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,N=x.far,T.near=P,T.far=N,L.near=P,L.far=N,T.updateProjectionMatrix(),L.updateProjectionMatrix(),Y.updateProjectionMatrix());let tt=Y.parent,ht=x.cameras;at(x,tt);for(let ot=0;ot<ht.length;ot++)at(ht[ot],tt);ht.length===2?V(x,T,L):x.projectionMatrix.copy(T.projectionMatrix),R(Y,x,tt)};function R(Y,tt,ht){ht===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(ht.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Fc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let lt=null;function Ft(Y,tt){if(h=tt.getViewerPose(c||a),_=tt,h!==null){let ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let ot=!1;ht.length!==x.cameras.length&&(x.cameras.length=0,ot=!0);for(let Ct=0;Ct<ht.length;Ct++){let Ht=ht[Ct],Qt=null;if(f!==null)Qt=f.getViewport(Ht);else{let It=u.getViewSubImage(d,Ht);Qt=It.viewport,Ct===0&&(t.setRenderTargetTextures(w,It.colorTexture,d.ignoreDepthValues?void 0:It.depthStencilTexture),t.setRenderTarget(w))}let I=v[Ct];I===void 0&&(I=new In,I.layers.enable(Ct),I.viewport=new Xe,v[Ct]=I),I.matrix.fromArray(Ht.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(Ht.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Ct===0&&(x.matrix.copy(I.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ot===!0&&x.cameras.push(I)}let Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let Ct=u.getDepthInformation(ht[0]);Ct&&Ct.isValid&&Ct.texture&&g.init(t,Ct,i.renderState)}}for(let ht=0;ht<y.length;ht++){let ot=S[ht],Tt=y[ht];ot!==null&&Tt!==void 0&&Tt.update(ot,tt,c||a)}lt&&lt(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),_=null}let Yt=new rd;Yt.setAnimationLoop(Ft),this.setAnimationLoop=function(Y){lt=Y},this.dispose=function(){}}},_r=new Ri,Zv=new Ye;function Jv(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,id(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,w,y,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,w,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Mn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Mn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let w=t.get(m),y=w.envMap,S=w.envMapRotation;y&&(p.envMap.value=y,_r.copy(S),_r.x*=-1,_r.y*=-1,_r.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),p.envMapRotation.value.setFromMatrix4(Zv.makeRotationFromEuler(_r)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,w,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*w,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,w){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){let w=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $v(r,t,e,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,y){let S=y.program;n.uniformBlockBinding(w,S)}function c(w,y){let S=i[w.id];S===void 0&&(_(w),S=h(w),i[w.id]=S,w.addEventListener("dispose",p));let A=y.program;n.updateUBOMapping(w,A);let E=t.render.frame;s[w.id]!==E&&(d(w),s[w.id]=E)}function h(w){let y=u();w.__bindingPointIndex=y;let S=r.createBuffer(),A=w.__size,E=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,A,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,S),S}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let y=i[w.id],S=w.uniforms,A=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let E=0,T=S.length;E<T;E++){let L=Array.isArray(S[E])?S[E]:[S[E]];for(let v=0,x=L.length;v<x;v++){let P=L[v];if(f(P,E,v,A)===!0){let N=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],G=0;for(let Z=0;Z<F.length;Z++){let k=F[Z],q=g(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,N+G,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,G),G+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(w,y,S,A){let E=w.value,T=y+"_"+S;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{let L=A[T];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return A[T]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function _(w){let y=w.uniforms,S=0,A=16;for(let T=0,L=y.length;T<L;T++){let v=Array.isArray(y[T])?y[T]:[y[T]];for(let x=0,P=v.length;x<P;x++){let N=v[x],F=Array.isArray(N.value)?N.value:[N.value];for(let G=0,Z=F.length;G<Z;G++){let k=F[G],q=g(k),V=S%A;V!==0&&A-V<q.boundary&&(S+=A-V),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=q.storage}}}let E=S%A;return E>0&&(S+=A-E),w.__size=S,w.__cache={},this}function g(w){let y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function p(w){let y=w.target;y.removeEventListener("dispose",p);let S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function m(){for(let w in i)r.deleteBuffer(i[w]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}var Uo=class{constructor(t={}){let{canvas:e=ig(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,m=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=li,this.toneMapping=Ji,this.toneMappingExposure=1;let y=this,S=!1,A=0,E=0,T=null,L=-1,v=null,x=new Xe,P=new Xe,N=null,F=new he(0),G=0,Z=e.width,k=e.height,q=1,V=null,at=null,R=new Xe(0,0,Z,k),lt=new Xe(0,0,Z,k),Ft=!1,Yt=new Io,Y=!1,tt=!1,ht=new Ye,ot=new X,Tt=new Xe,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function Qt(){return T===null?q:1}let I=n;function It(b,D){return e.getContext(b,D)}try{let b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uh}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",Q,!1),e.addEventListener("webglcontextcreationerror",st,!1),I===null){let D="webgl2";if(I=It(D,b),I===null)throw It(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Nt,Wt,_t,H,Et,Ot,C,M,W,j,nt,$,bt,it,dt,Dt,rt,gt,Rt,Bt,mt,zt,Gt,le;function U(){Nt=new px(I),Nt.init(),zt=new Wv(I,Nt),Wt=new lx(I,Nt,t,zt),_t=new Vv(I),H=new _x(I),Et=new Rv,Ot=new Gv(I,Nt,_t,Et,Wt,zt,H),C=new hx(y),M=new dx(y),W=new wg(I),Gt=new ax(I,W),j=new mx(I,W,H,Gt),nt=new vx(I,j,W,H),Rt=new xx(I,Wt,Ot),Dt=new cx(Et),$=new Cv(y,C,M,Nt,Wt,Gt,Dt),bt=new Jv(y,Et),it=new Iv,dt=new Fv(Nt),gt=new sx(y,C,M,_t,nt,d,l),rt=new kv(y,nt,Wt),le=new $v(I,H,Wt,_t),Bt=new ox(I,Nt,H),mt=new gx(I,Nt,H),H.programs=$.programs,y.capabilities=Wt,y.extensions=Nt,y.properties=Et,y.renderLists=it,y.shadowMap=rt,y.state=_t,y.info=H}U();let J=new th(y,I);this.xr=J,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let b=Nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(Z,k,!1))},this.getSize=function(b){return b.set(Z,k)},this.setSize=function(b,D,z=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,k=D,e.width=Math.floor(b*q),e.height=Math.floor(D*q),z===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(Z*q,k*q).floor()},this.setDrawingBufferSize=function(b,D,z){Z=b,k=D,q=z,e.width=Math.floor(b*z),e.height=Math.floor(D*z),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(x)},this.getViewport=function(b){return b.copy(R)},this.setViewport=function(b,D,z,B){b.isVector4?R.set(b.x,b.y,b.z,b.w):R.set(b,D,z,B),_t.viewport(x.copy(R).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(lt)},this.setScissor=function(b,D,z,B){b.isVector4?lt.set(b.x,b.y,b.z,b.w):lt.set(b,D,z,B),_t.scissor(P.copy(lt).multiplyScalar(q).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(b){_t.setScissorTest(Ft=b)},this.setOpaqueSort=function(b){V=b},this.setTransparentSort=function(b){at=b},this.getClearColor=function(b){return b.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(b=!0,D=!0,z=!0){let B=0;if(b){let O=!1;if(T!==null){let et=T.texture.format;O=et===_h||et===gh||et===mh}if(O){let et=T.texture.type,ut=et===Ai||et===br||et===ea||et===Ms||et===dh||et===ph,vt=gt.getClearColor(),ft=gt.getClearAlpha(),xt=vt.r,At=vt.g,Lt=vt.b;ut?(f[0]=xt,f[1]=At,f[2]=Lt,f[3]=ft,I.clearBufferuiv(I.COLOR,0,f)):(_[0]=xt,_[1]=At,_[2]=Lt,_[3]=ft,I.clearBufferiv(I.COLOR,0,_))}else B|=I.COLOR_BUFFER_BIT}D&&(B|=I.DEPTH_BUFFER_BIT),z&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",Q,!1),e.removeEventListener("webglcontextcreationerror",st,!1),it.dispose(),dt.dispose(),Et.dispose(),C.dispose(),M.dispose(),nt.dispose(),Gt.dispose(),le.dispose(),$.dispose(),J.dispose(),J.removeEventListener("sessionstart",St),J.removeEventListener("sessionend",se),ct.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let b=H.autoReset,D=rt.enabled,z=rt.autoUpdate,B=rt.needsUpdate,O=rt.type;U(),H.autoReset=b,rt.enabled=D,rt.autoUpdate=z,rt.needsUpdate=B,rt.type=O}function st(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function wt(b){let D=b.target;D.removeEventListener("dispose",wt),Xt(D)}function Xt(b){me(b),Et.remove(b)}function me(b){let D=Et.get(b).programs;D!==void 0&&(D.forEach(function(z){$.releaseProgram(z)}),b.isShaderMaterial&&$.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,z,B,O,et){D===null&&(D=Ct);let ut=O.isMesh&&O.matrixWorld.determinant()<0,vt=ye(b,D,z,B,O);_t.setMaterial(B,ut);let ft=z.index,xt=1;if(B.wireframe===!0){if(ft=j.getWireframeAttribute(z),ft===void 0)return;xt=2}let At=z.drawRange,Lt=z.attributes.position,ae=At.start*xt,pe=(At.start+At.count)*xt;et!==null&&(ae=Math.max(ae,et.start*xt),pe=Math.min(pe,(et.start+et.count)*xt)),ft!==null?(ae=Math.max(ae,0),pe=Math.min(pe,ft.count)):Lt!=null&&(ae=Math.max(ae,0),pe=Math.min(pe,Lt.count));let oe=pe-ae;if(oe<0||oe===1/0)return;Gt.setup(O,B,vt,z,ft);let ze,ie=Bt;if(ft!==null&&(ze=W.get(ft),ie=mt,ie.setIndex(ze)),O.isMesh)B.wireframe===!0?(_t.setLineWidth(B.wireframeLinewidth*Qt()),ie.setMode(I.LINES)):ie.setMode(I.TRIANGLES);else if(O.isLine){let Mt=B.linewidth;Mt===void 0&&(Mt=1),_t.setLineWidth(Mt*Qt()),O.isLineSegments?ie.setMode(I.LINES):O.isLineLoop?ie.setMode(I.LINE_LOOP):ie.setMode(I.LINE_STRIP)}else O.isPoints?ie.setMode(I.POINTS):O.isSprite&&ie.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ie.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))ie.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Mt=O._multiDrawStarts,Je=O._multiDrawCounts,ce=O._multiDrawCount,jn=ft?W.get(ft).bytesPerElement:1,Zr=Et.get(B).currentProgram.getUniforms();for(let Cn=0;Cn<ce;Cn++)Zr.setValue(I,"_gl_DrawID",Cn),ie.render(Mt[Cn]/jn,Je[Cn])}else if(O.isInstancedMesh)ie.renderInstances(ae,oe,O.count);else if(z.isInstancedBufferGeometry){let Mt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Je=Math.min(z.instanceCount,Mt);ie.renderInstances(ae,oe,Je)}else ie.render(ae,oe)};function ge(b,D,z){b.transparent===!0&&b.side===bi&&b.forceSinglePass===!1?(b.side=Mn,b.needsUpdate=!0,ve(b,D,z),b.side=$i,b.needsUpdate=!0,ve(b,D,z),b.side=bi):ve(b,D,z)}this.compile=function(b,D,z=null){z===null&&(z=b),p=dt.get(z),p.init(D),w.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),b!==z&&b.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let B=new Set;return b.traverse(function(O){let et=O.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){let vt=et[ut];ge(vt,z,O),B.add(vt)}else ge(et,z,O),B.add(et)}),w.pop(),p=null,B},this.compileAsync=function(b,D,z=null){let B=this.compile(b,D,z);return new Promise(O=>{function et(){if(B.forEach(function(ut){Et.get(ut).currentProgram.isReady()&&B.delete(ut)}),B.size===0){O(b);return}setTimeout(et,10)}Nt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ee=null;function Ut(b){ee&&ee(b)}function St(){ct.stop()}function se(){ct.start()}let ct=new rd;ct.setAnimationLoop(Ut),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(b){ee=b,J.setAnimationLoop(b),b===null?ct.stop():ct.start()},J.addEventListener("sessionstart",St),J.addEventListener("sessionend",se),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(D),D=J.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,D,T),p=dt.get(b,w.length),p.init(D),w.push(p),ht.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Yt.setFromProjectionMatrix(ht),tt=this.localClippingEnabled,Y=Dt.init(this.clippingPlanes,tt),g=it.get(b,m.length),g.init(),m.push(g),J.enabled===!0&&J.isPresenting===!0){let et=y.xr.getDepthSensingMesh();et!==null&&kt(et,D,-1/0,y.sortObjects)}kt(b,D,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(V,at),Ht=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Ht&&gt.addToRenderList(g,b),this.info.render.frame++,Y===!0&&Dt.beginShadows();let z=p.state.shadowsArray;rt.render(z,b,D),Y===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=g.opaque,O=g.transmissive;if(p.setupLights(),D.isArrayCamera){let et=D.cameras;if(O.length>0)for(let ut=0,vt=et.length;ut<vt;ut++){let ft=et[ut];Vt(B,O,b,ft)}Ht&&gt.render(b);for(let ut=0,vt=et.length;ut<vt;ut++){let ft=et[ut];Pt(g,b,ft,ft.viewport)}}else O.length>0&&Vt(B,O,b,D),Ht&&gt.render(b),Pt(g,b,D);T!==null&&(Ot.updateMultisampleRenderTarget(T),Ot.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(y,b,D),Gt.resetDefaultState(),L=-1,v=null,w.pop(),w.length>0?(p=w[w.length-1],Y===!0&&Dt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function kt(b,D,z,B){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Yt.intersectsSprite(b)){B&&Tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ht);let ut=nt.update(b),vt=b.material;vt.visible&&g.push(b,ut,vt,z,Tt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Yt.intersectsObject(b))){let ut=nt.update(b),vt=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Tt.copy(b.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Tt.copy(ut.boundingSphere.center)),Tt.applyMatrix4(b.matrixWorld).applyMatrix4(ht)),Array.isArray(vt)){let ft=ut.groups;for(let xt=0,At=ft.length;xt<At;xt++){let Lt=ft[xt],ae=vt[Lt.materialIndex];ae&&ae.visible&&g.push(b,ut,ae,z,Tt.z,Lt)}}else vt.visible&&g.push(b,ut,vt,z,Tt.z,null)}}let et=b.children;for(let ut=0,vt=et.length;ut<vt;ut++)kt(et[ut],D,z,B)}function Pt(b,D,z,B){let O=b.opaque,et=b.transmissive,ut=b.transparent;p.setupLightsView(z),Y===!0&&Dt.setGlobalState(y.clippingPlanes,z),B&&_t.viewport(x.copy(B)),O.length>0&&Ee(O,D,z),et.length>0&&Ee(et,D,z),ut.length>0&&Ee(ut,D,z),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Vt(b,D,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new Ci(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?oa:Ai,minFilter:Sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));let et=p.state.transmissionRenderTarget[B.id],ut=B.viewport||x;et.setSize(ut.z,ut.w);let vt=y.getRenderTarget();y.setRenderTarget(et),y.getClearColor(F),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),Ht?gt.render(z):y.clear();let ft=y.toneMapping;y.toneMapping=Ji;let xt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),Y===!0&&Dt.setGlobalState(y.clippingPlanes,B),Ee(b,z,B),Ot.updateMultisampleRenderTarget(et),Ot.updateRenderTargetMipmap(et),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let Lt=0,ae=D.length;Lt<ae;Lt++){let pe=D[Lt],oe=pe.object,ze=pe.geometry,ie=pe.material,Mt=pe.group;if(ie.side===bi&&oe.layers.test(B.layers)){let Je=ie.side;ie.side=Mn,ie.needsUpdate=!0,jt(oe,z,B,ze,ie,Mt),ie.side=Je,ie.needsUpdate=!0,At=!0}}At===!0&&(Ot.updateMultisampleRenderTarget(et),Ot.updateRenderTargetMipmap(et))}y.setRenderTarget(vt),y.setClearColor(F,G),xt!==void 0&&(B.viewport=xt),y.toneMapping=ft}function Ee(b,D,z){let B=D.isScene===!0?D.overrideMaterial:null;for(let O=0,et=b.length;O<et;O++){let ut=b[O],vt=ut.object,ft=ut.geometry,xt=B===null?ut.material:B,At=ut.group;vt.layers.test(z.layers)&&jt(vt,D,z,ft,xt,At)}}function jt(b,D,z,B,O,et){b.onBeforeRender(y,D,z,B,O,et),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.transparent===!0&&O.side===bi&&O.forceSinglePass===!1?(O.side=Mn,O.needsUpdate=!0,y.renderBufferDirect(z,D,B,O,b,et),O.side=$i,O.needsUpdate=!0,y.renderBufferDirect(z,D,B,O,b,et),O.side=bi):y.renderBufferDirect(z,D,B,O,b,et),b.onAfterRender(y,D,z,B,O,et)}function ve(b,D,z){D.isScene!==!0&&(D=Ct);let B=Et.get(b),O=p.state.lights,et=p.state.shadowsArray,ut=O.state.version,vt=$.getParameters(b,O.state,et,D,z),ft=$.getProgramCacheKey(vt),xt=B.programs;B.environment=b.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(b.isMeshStandardMaterial?M:C).get(b.envMap||B.environment),B.envMapRotation=B.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,xt===void 0&&(b.addEventListener("dispose",wt),xt=new Map,B.programs=xt);let At=xt.get(ft);if(At!==void 0){if(B.currentProgram===At&&B.lightsStateVersion===ut)return Se(b,vt),At}else vt.uniforms=$.getUniforms(b),b.onBeforeCompile(vt,y),At=$.acquireProgram(vt,ft),xt.set(ft,At),B.uniforms=vt.uniforms;let Lt=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=Dt.uniform),Se(b,vt),B.needsLights=An(b),B.lightsStateVersion=ut,B.needsLights&&(Lt.ambientLightColor.value=O.state.ambient,Lt.lightProbe.value=O.state.probe,Lt.directionalLights.value=O.state.directional,Lt.directionalLightShadows.value=O.state.directionalShadow,Lt.spotLights.value=O.state.spot,Lt.spotLightShadows.value=O.state.spotShadow,Lt.rectAreaLights.value=O.state.rectArea,Lt.ltc_1.value=O.state.rectAreaLTC1,Lt.ltc_2.value=O.state.rectAreaLTC2,Lt.pointLights.value=O.state.point,Lt.pointLightShadows.value=O.state.pointShadow,Lt.hemisphereLights.value=O.state.hemi,Lt.directionalShadowMap.value=O.state.directionalShadowMap,Lt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Lt.spotShadowMap.value=O.state.spotShadowMap,Lt.spotLightMatrix.value=O.state.spotLightMatrix,Lt.spotLightMap.value=O.state.spotLightMap,Lt.pointShadowMap.value=O.state.pointShadowMap,Lt.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=At,B.uniformsList=null,At}function Be(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=xs.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Se(b,D){let z=Et.get(b);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function ye(b,D,z,B,O){D.isScene!==!0&&(D=Ct),Ot.resetTextureUnits();let et=D.fog,ut=B.isMeshStandardMaterial?D.environment:null,vt=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ji,ft=(B.isMeshStandardMaterial?M:C).get(B.envMap||ut),xt=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,At=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Lt=!!z.morphAttributes.position,ae=!!z.morphAttributes.normal,pe=!!z.morphAttributes.color,oe=Ji;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(oe=y.toneMapping);let ze=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ie=ze!==void 0?ze.length:0,Mt=Et.get(B),Je=p.state.lights;if(Y===!0&&(tt===!0||b!==v)){let Hn=b===v&&B.id===L;Dt.setState(B,b,Hn)}let ce=!1;B.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Je.state.version||Mt.outputColorSpace!==vt||O.isBatchedMesh&&Mt.batching===!1||!O.isBatchedMesh&&Mt.batching===!0||O.isBatchedMesh&&Mt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Mt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Mt.instancing===!1||!O.isInstancedMesh&&Mt.instancing===!0||O.isSkinnedMesh&&Mt.skinning===!1||!O.isSkinnedMesh&&Mt.skinning===!0||O.isInstancedMesh&&Mt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Mt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Mt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Mt.instancingMorph===!1&&O.morphTexture!==null||Mt.envMap!==ft||B.fog===!0&&Mt.fog!==et||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Dt.numPlanes||Mt.numIntersection!==Dt.numIntersection)||Mt.vertexAlphas!==xt||Mt.vertexTangents!==At||Mt.morphTargets!==Lt||Mt.morphNormals!==ae||Mt.morphColors!==pe||Mt.toneMapping!==oe||Mt.morphTargetsCount!==ie)&&(ce=!0):(ce=!0,Mt.__version=B.version);let jn=Mt.currentProgram;ce===!0&&(jn=ve(B,D,O));let Zr=!1,Cn=!1,Cl=!1,Ue=jn.getUniforms(),ki=Mt.uniforms;if(_t.useProgram(jn.program)&&(Zr=!0,Cn=!0,Cl=!0),B.id!==L&&(L=B.id,Cn=!0),Zr||v!==b){Ue.setValue(I,"projectionMatrix",b.projectionMatrix),Ue.setValue(I,"viewMatrix",b.matrixWorldInverse);let Hn=Ue.map.cameraPosition;Hn!==void 0&&Hn.setValue(I,ot.setFromMatrixPosition(b.matrixWorld)),Wt.logarithmicDepthBuffer&&Ue.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ue.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,Cn=!0,Cl=!0)}if(O.isSkinnedMesh){Ue.setOptional(I,O,"bindMatrix"),Ue.setOptional(I,O,"bindMatrixInverse");let Hn=O.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),Ue.setValue(I,"boneTexture",Hn.boneTexture,Ot))}O.isBatchedMesh&&(Ue.setOptional(I,O,"batchingTexture"),Ue.setValue(I,"batchingTexture",O._matricesTexture,Ot),Ue.setOptional(I,O,"batchingIdTexture"),Ue.setValue(I,"batchingIdTexture",O._indirectTexture,Ot),Ue.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&Ue.setValue(I,"batchingColorTexture",O._colorsTexture,Ot));let Rl=z.morphAttributes;if((Rl.position!==void 0||Rl.normal!==void 0||Rl.color!==void 0)&&Rt.update(O,z,jn),(Cn||Mt.receiveShadow!==O.receiveShadow)&&(Mt.receiveShadow=O.receiveShadow,Ue.setValue(I,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ki.envMap.value=ft,ki.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(ki.envMapIntensity.value=D.environmentIntensity),Cn&&(Ue.setValue(I,"toneMappingExposure",y.toneMappingExposure),Mt.needsLights&&fe(ki,Cl),et&&B.fog===!0&&bt.refreshFogUniforms(ki,et),bt.refreshMaterialUniforms(ki,B,q,k,p.state.transmissionRenderTarget[b.id]),xs.upload(I,Be(Mt),ki,Ot)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(xs.upload(I,Be(Mt),ki,Ot),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ue.setValue(I,"center",O.center),Ue.setValue(I,"modelViewMatrix",O.modelViewMatrix),Ue.setValue(I,"normalMatrix",O.normalMatrix),Ue.setValue(I,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Hn=B.uniformsGroups;for(let Pl=0,am=Hn.length;Pl<am;Pl++){let zu=Hn[Pl];le.update(zu,jn),le.bind(zu,jn)}}return jn}function fe(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function An(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,D,z){Et.get(b.texture).__webglTexture=D,Et.get(b.depthTexture).__webglTexture=z;let B=Et.get(b);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,D){let z=Et.get(b);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,z=0){T=b,A=D,E=z;let B=!0,O=null,et=!1,ut=!1;if(b){let ft=Et.get(b);ft.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(I.FRAMEBUFFER,null),B=!1):ft.__webglFramebuffer===void 0?Ot.setupRenderTarget(b):ft.__hasExternalTextures&&Ot.rebindTextures(b,Et.get(b.texture).__webglTexture,Et.get(b.depthTexture).__webglTexture);let xt=b.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(ut=!0);let At=Et.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(At[D])?O=At[D][z]:O=At[D],et=!0):b.samples>0&&Ot.useMultisampledRTT(b)===!1?O=Et.get(b).__webglMultisampledFramebuffer:Array.isArray(At)?O=At[z]:O=At,x.copy(b.viewport),P.copy(b.scissor),N=b.scissorTest}else x.copy(R).multiplyScalar(q).floor(),P.copy(lt).multiplyScalar(q).floor(),N=Ft;if(_t.bindFramebuffer(I.FRAMEBUFFER,O)&&B&&_t.drawBuffers(b,O),_t.viewport(x),_t.scissor(P),_t.setScissorTest(N),et){let ft=Et.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,ft.__webglTexture,z)}else if(ut){let ft=Et.get(b.texture),xt=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ft.__webglTexture,z||0,xt)}L=-1},this.readRenderTargetPixels=function(b,D,z,B,O,et,ut){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){_t.bindFramebuffer(I.FRAMEBUFFER,vt);try{let ft=b.texture,xt=ft.format,At=ft.type;if(!Wt.textureFormatReadable(xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-B&&z>=0&&z<=b.height-O&&I.readPixels(D,z,B,O,zt.convert(xt),zt.convert(At),et)}finally{let ft=T!==null?Et.get(T).__webglFramebuffer:null;_t.bindFramebuffer(I.FRAMEBUFFER,ft)}}},this.readRenderTargetPixelsAsync=async function(b,D,z,B,O,et,ut){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){_t.bindFramebuffer(I.FRAMEBUFFER,vt);try{let ft=b.texture,xt=ft.format,At=ft.type;if(!Wt.textureFormatReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=b.width-B&&z>=0&&z<=b.height-O){let Lt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Lt),I.bufferData(I.PIXEL_PACK_BUFFER,et.byteLength,I.STREAM_READ),I.readPixels(D,z,B,O,zt.convert(xt),zt.convert(At),0),I.flush();let ae=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await rg(I,ae,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Lt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,et)}finally{I.deleteBuffer(Lt),I.deleteSync(ae)}return et}}finally{let ft=T!==null?Et.get(T).__webglFramebuffer:null;_t.bindFramebuffer(I.FRAMEBUFFER,ft)}}},this.copyFramebufferToTexture=function(b,D=null,z=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,b=arguments[1]);let B=Math.pow(2,-z),O=Math.floor(b.image.width*B),et=Math.floor(b.image.height*B),ut=D!==null?D.x:0,vt=D!==null?D.y:0;Ot.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,ut,vt,O,et),_t.unbindTexture()},this.copyTextureToTexture=function(b,D,z=null,B=null,O=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1],D=arguments[2],O=arguments[3]||0,z=null);let et,ut,vt,ft,xt,At;z!==null?(et=z.max.x-z.min.x,ut=z.max.y-z.min.y,vt=z.min.x,ft=z.min.y):(et=b.image.width,ut=b.image.height,vt=0,ft=0),B!==null?(xt=B.x,At=B.y):(xt=0,At=0);let Lt=zt.convert(D.format),ae=zt.convert(D.type);Ot.setTexture2D(D,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let pe=I.getParameter(I.UNPACK_ROW_LENGTH),oe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ze=I.getParameter(I.UNPACK_SKIP_PIXELS),ie=I.getParameter(I.UNPACK_SKIP_ROWS),Mt=I.getParameter(I.UNPACK_SKIP_IMAGES),Je=b.isCompressedTexture?b.mipmaps[O]:b.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Je.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Je.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,vt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ft),b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,xt,At,et,ut,Lt,ae,Je.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,xt,At,Je.width,Je.height,Lt,Je.data):I.texSubImage2D(I.TEXTURE_2D,O,xt,At,et,ut,Lt,ae,Je),I.pixelStorei(I.UNPACK_ROW_LENGTH,pe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,oe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ze),I.pixelStorei(I.UNPACK_SKIP_ROWS,ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Mt),O===0&&D.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(b,D,z=null,B=null,O=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,B=arguments[1]||null,b=arguments[2],D=arguments[3],O=arguments[4]||0);let et,ut,vt,ft,xt,At,Lt,ae,pe,oe=b.isCompressedTexture?b.mipmaps[O]:b.image;z!==null?(et=z.max.x-z.min.x,ut=z.max.y-z.min.y,vt=z.max.z-z.min.z,ft=z.min.x,xt=z.min.y,At=z.min.z):(et=oe.width,ut=oe.height,vt=oe.depth,ft=0,xt=0,At=0),B!==null?(Lt=B.x,ae=B.y,pe=B.z):(Lt=0,ae=0,pe=0);let ze=zt.convert(D.format),ie=zt.convert(D.type),Mt;if(D.isData3DTexture)Ot.setTexture3D(D,0),Mt=I.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)Ot.setTexture2DArray(D,0),Mt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let Je=I.getParameter(I.UNPACK_ROW_LENGTH),ce=I.getParameter(I.UNPACK_IMAGE_HEIGHT),jn=I.getParameter(I.UNPACK_SKIP_PIXELS),Zr=I.getParameter(I.UNPACK_SKIP_ROWS),Cn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,oe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,oe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ft),I.pixelStorei(I.UNPACK_SKIP_ROWS,xt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,At),b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Mt,O,Lt,ae,pe,et,ut,vt,ze,ie,oe.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(Mt,O,Lt,ae,pe,et,ut,vt,ze,oe.data):I.texSubImage3D(Mt,O,Lt,ae,pe,et,ut,vt,ze,ie,oe),I.pixelStorei(I.UNPACK_ROW_LENGTH,Je),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ce),I.pixelStorei(I.UNPACK_SKIP_PIXELS,jn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Zr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Cn),O===0&&D.generateMipmaps&&I.generateMipmap(Mt),_t.unbindTexture()},this.initRenderTarget=function(b){Et.get(b).__webglFramebuffer===void 0&&Ot.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ot.setTextureCube(b,0):b.isData3DTexture?Ot.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ot.setTexture2DArray(b,0):Ot.setTexture2D(b,0),_t.unbindTexture()},this.resetState=function(){A=0,E=0,T=null,_t.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===xh?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===zo?"display-p3":"srgb"}};var No=class extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};function ho(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Kv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Ts=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},eh=class extends Ts{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wu,endingEnd:Wu}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xu:s=t,o=2*e-n;break;case Yu:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xu:a=t,l=2*n-e;break;case Yu:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-e)/(i-e),g=_*_,p=g*_,m=-d*p+2*d*g-d*_,w=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*_+1,y=(-1-f)*p+(1.5+f)*g+.5*_,S=f*p-f*g;for(let A=0;A!==o;++A)s[A]=m*a[h+A]+w*a[c+A]+y*a[l+A]+S*a[u+A];return s}},nh=class extends Ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},ih=class extends Ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},si=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ho(e,this.TimeBufferType),this.values=ho(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ho(t.times,Array),values:ho(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ih(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new eh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case xo:e=this.InterpolantFactoryMethodDiscrete;break;case Oc:e=this.InterpolantFactoryMethodLinear;break;case Ll:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xo;case this.InterpolantFactoryMethodLinear:return Oc;case this.InterpolantFactoryMethodSmooth:return Ll}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Kv(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ll,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[d+_]||g!==e[f+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Oc;var Ar=class extends si{constructor(t,e,n){super(t,e,n)}};Ar.prototype.ValueTypeName="bool";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=xo;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;var rh=class extends si{};rh.prototype.ValueTypeName="color";var sh=class extends si{};sh.prototype.ValueTypeName="number";var ah=class extends Ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Qi.slerpFlat(s,0,a,c-o,a,c,l);return s}},Oo=class extends si{InterpolantFactoryMethodLinear(t){return new ah(this.times,this.values,this.getValueSize(),t)}};Oo.prototype.ValueTypeName="quaternion";Oo.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends si{constructor(t,e,n){super(t,e,n)}};Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=xo;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var oh=class extends si{};oh.prototype.ValueTypeName="vector";var zf={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},lh=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}},Qv=new lh,aa=class{constructor(t){this.manager=t!==void 0?t:Qv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};aa.DEFAULT_MATERIAL_NAME="__DEFAULT";var ch=class extends aa{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=zf.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;let o=na("img");function l(){h(),zf.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}};var Fo=class extends aa{constructor(t){super(t)}load(t,e,n,i){let s=new Dn,a=new ch(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}};var yh="\\[\\]\\.:\\/",jv=new RegExp("["+yh+"]","g"),Mh="[^"+yh+"]",ty="[^"+yh.replace("\\.","")+"]",ey=/((?:WC+[\/:])*)/.source.replace("WC",Mh),ny=/(WCOD+)?/.source.replace("WCOD",ty),iy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mh),ry=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mh),sy=new RegExp("^"+ey+ny+iy+ry+"$"),ay=["material","materials","bones","map"],hh=class{constructor(t,e,n){let i=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jv,"")}static parseTrackName(t){let e=sy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);ay.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=hh;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fS=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uh);function Pi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function _d(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Cs={duration:.5,overwrite:!1,delay:0},zh,Ke,Te,Zn=1e8,xe=1/Zn,Rh=Math.PI*2,ly=Rh/4,cy=0,xd=Math.sqrt,hy=Math.cos,uy=Math.sin,He=function(t){return typeof t=="string"},Pe=function(t){return typeof t=="function"},Li=function(t){return typeof t=="number"},$o=function(t){return typeof t>"u"},fi=function(t){return typeof t=="object"},wn=function(t){return t!==!1},kh=function(){return typeof window<"u"},Vo=function(t){return Pe(t)||He(t)},vd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},nn=Array.isArray,fy=/random\([^)]+\)/g,dy=/,\s*/g,cd=/(?:-?\.?\d|\.)+/gi,Vh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Lr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Sh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Hh=/[+-]=-?[.\d]+/,py=/[^,'"\[\]\s]+/gi,my=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ce,hi,Ph,Gh,Nn={},Xo={},yd,Md=function(t){return(Xo=Rs(t,Nn))&&rn},Ko=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},pa=function(t,e){return!e&&console.warn(t)},Sd=function(t,e){return t&&(Nn[t]=e)&&Xo&&(Xo[t]=e)||Nn},ma=function(){return 0},gy={suppressEvents:!0,isStart:!0,kill:!1},Ho={suppressEvents:!0,kill:!1},_y={suppressEvents:!0},Wh={},er=[],Ih={},bd,Sn={},bh={},hd=30,Go=[],Xh="",Yh=function(t){var e=t[0],n,i;if(fi(e)||Pe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Go.length;i--&&!Go[i].targetTest(e););n=Go[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new $h(t[i],n)))||t.splice(i,1);return t},nr=function(t){return t._gsap||Yh(Jn(t))[0]._gsap},qh=function(t,e,n){return(n=t[e])&&Pe(n)?t[e]():$o(n)&&t.getAttribute&&t.getAttribute(e)||n},un=function(t,e){return(t=t.split(",")).forEach(e)||t},Ie=function(t){return Math.round(t*1e5)/1e5||0},Ae=function(t){return Math.round(t*1e7)/1e7||0},Dr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},xy=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Yo=function(){var t=er.length,e=er.slice(0),n,i;for(Ih={},er.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Zh=function(t){return!!(t._initted||t._startAt||t.add)},wd=function(t,e,n,i){er.length&&!Ke&&Yo(),t.render(e,n,i||!!(Ke&&e<0&&Zh(t))),er.length&&!Ke&&Yo()},Td=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(py).length<2?e:He(t)?t.trim():t},Ed=function(t){return t},On=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},vy=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Rs=function(t,e){for(var n in e)t[n]=e[n];return t},ud=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=fi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},qo=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ua=function(t){var e=t.parent||Ce,n=t.keyframes?vy(nn(t.keyframes)):On;if(wn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},yy=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Ad=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Qo=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ir=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Rr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},My=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Lh=function(t,e,n,i){return t._startAt&&(Ke?t._startAt.revert(Ho):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Sy=function r(t){return!t||t._ts&&r(t.parent)},fd=function(t){return t._repeat?Ps(t._tTime,t=t.duration()+t._rDelay)*t:0},Ps=function(t,e){var n=Math.floor(t=Ae(t/e));return t&&n===t?n-1:n},Zo=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},jo=function(t){return t._end=Ae(t._start+(t._tDur/Math.abs(t._ts||t._rts||xe)||0))},tl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ae(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),jo(t),n._dirty||Rr(n,t)),t},Cd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Zo(t.rawTime(),e),(!e._dur||xa(0,e.totalDuration(),n)-e._tTime>xe)&&e.render(n,!0)),Rr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-xe}},ui=function(t,e,n,i){return e.parent&&ir(e),e._start=Ae((Li(n)?n:n||t!==Ce?qn(t,n,e):t._time)+e._delay),e._end=Ae(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Ad(t,e,"_first","_last",t._sort?"_start":0),Dh(e)||(t._recent=e),i||Cd(t,e),t._ts<0&&tl(t,t._tTime),t},Rd=function(t,e){return(Nn.ScrollTrigger||Ko("scrollTrigger",e))&&Nn.ScrollTrigger.create(e,t)},Pd=function(t,e,n,i,s){if(jh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ke&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&bd!==bn.frame)return er.push(t),t._lazy=[s,i],1},by=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Dh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},wy=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&by(t)&&!(!t._initted&&Dh(t))||(t._ts<0||t._dp._ts<0)&&!Dh(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=xa(0,t._tDur,e),h=Ps(l,o),t._yoyo&&h&1&&(a=1-a),h!==Ps(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ke||i||t._zTime===xe||!e&&t._zTime){if(!t._initted&&Pd(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?xe:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Lh(t,e,n,!0),t._onUpdate&&!n&&Un(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Un(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&ir(t,1),!n&&!Ke&&(Un(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Ty=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Is=function(t,e,n,i){var s=t._repeat,a=Ae(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Ae(a*(s+1)+t._rDelay*s):a,o>0&&!i&&tl(t,t._tTime=t._tDur*o),t.parent&&jo(t),n||Rr(t.parent,t),t},dd=function(t){return t instanceof $e?Rr(t):Is(t,t._dur)},Ey={_start:0,endTime:ma,totalDuration:ma},qn=function r(t,e,n){var i=t.labels,s=t._recent||Ey,a=t.duration()>=Zn?s.endTime(!1):t._dur,o,l,c;return He(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(nn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},fa=function(t,e,n){var i=Li(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=wn(l.vars.inherit)&&l.parent;a.immediateRender=wn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new De(e[0],a,e[s+1])},rr=function(t,e){return t||t===0?e(t):e},xa=function(t,e,n){return n<t?t:n>e?e:n},Qe=function(t,e){return!He(t)||!(e=my.exec(t))?"":e[1]},Ay=function(t,e,n){return rr(n,function(i){return xa(t,e,i)})},Uh=[].slice,Id=function(t,e){return t&&fi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&fi(t[0]))&&!t.nodeType&&t!==hi},Cy=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return He(i)&&!e||Id(i,1)?(s=n).push.apply(s,Jn(i)):n.push(i)})||n},Jn=function(t,e,n){return Te&&!e&&Te.selector?Te.selector(t):He(t)&&!n&&(Ph||!Ls())?Uh.call((e||Gh).querySelectorAll(t),0):nn(t)?Cy(t,n):Id(t)?Uh.call(t,0):t?[t]:[]},Nh=function(t){return t=Jn(t)[0]||pa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Jn(e,n.querySelectorAll?n:n===t?pa("Invalid scope")||Gh.createElement("div"):t)}},Ld=function(t){return t.sort(function(){return .5-Math.random()})},Dd=function(t){if(Pe(t))return t;var e=fi(t)?t:{each:t},n=Pr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return He(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||e).length,p=a[g],m,w,y,S,A,E,T,L,v;if(!p){if(v=e.grid==="auto"?0:(e.grid||[1,Zn])[1],!v){for(T=-Zn;T<(T=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(p=a[g]=[],m=l?Math.min(v,g)*h-.5:i%v,w=v===Zn?0:l?g*u/v-.5:i/v|0,T=0,L=Zn,E=0;E<g;E++)y=E%v-m,S=w-(E/v|0),p[E]=A=c?Math.abs(c==="y"?S:y):xd(y*y+S*S),A>T&&(T=A),A<L&&(L=A);i==="random"&&Ld(p),p.max=T-L,p.min=L,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Qe(e.amount||e.each)||0,n=n&&g<0?Hd(n):n}return g=(p[d]-p.min)/p.max||0,Ae(p.b+(n?n(g):g)*p.v)+p.u}},Oh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ae(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Li(n)?0:Qe(n))}},Ud=function(t,e){var n=nn(t),i,s;return!n&&fi(t)&&(i=n=t.radius||Zn,t.values?(t=Jn(t.values),(s=!Li(t[0]))&&(i*=i)):t=Oh(t.increment)),rr(e,n?Pe(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Zn,h=0,u=t.length,d,f;u--;)s?(d=t[u].x-o,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:a,s||h===a||Li(a)?h:h+Qe(a)}:Oh(t))},Nd=function(t,e,n,i){return rr(nn(t)?!e:n===!0?!!(n=0):!i,function(){return nn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Ry=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Py=function(t,e){return function(n){return t(parseFloat(n))+(e||Qe(n))}},Iy=function(t,e,n){return Fd(t,e,0,1,n)},Od=function(t,e,n){return rr(n,function(i){return t[~~e(i)]})},Ly=function r(t,e,n){var i=e-t;return nn(t)?Od(t,r(0,t.length),e):rr(n,function(s){return(i+(s-t)%i)%i+t})},Dy=function r(t,e,n){var i=e-t,s=i*2;return nn(t)?Od(t,r(0,t.length-1),e):rr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Ds=function(t){return t.replace(fy,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(dy);return Nd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Fd=function(t,e,n,i,s){var a=e-t,o=i-n;return rr(s,function(l){return n+((l-t)/a*o||0)})},Uy=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=He(t),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(nn(t)&&!nn(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=Rs(nn(t)?[]:{},t));if(!h){for(l in e)Kh.call(o,t,l,"get",e[l]);s=function(_){return nu(_,o)||(a?t.p:t)}}}return rr(n,s)},pd=function(t,e,n){var i=t.labels,s=Zn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Un=function(t,e,n){var i=t.vars,s=i[e],a=Te,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&er.length&&Yo(),o&&(Te=o),h=l?s.apply(c,l):s.call(c),Te=a,h},ca=function(t){return ir(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ke),t.progress()<1&&Un(t,"onInterrupt"),t},As,Bd=[],zd=function(t){if(t)if(t=!t.name&&t.default||t,kh()||t.headless){var e=t.name,n=Pe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ma,render:nu,add:Kh,kill:$y,modifier:Jy,rawVars:0},a={targetTest:0,get:0,getSetter:el,aliases:{},register:0};if(Ls(),t!==i){if(Sn[e])return;On(i,On(qo(t,s),a)),Rs(i.prototype,Rs(s,qo(t,a))),Sn[i.prop=e]=i,t.targetTest&&(Go.push(i),Wh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Sd(e,i),t.register&&t.register(rn,i,fn)}else Bd.push(t)},_e=255,ha={aqua:[0,_e,_e],lime:[0,_e,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_e],navy:[0,0,128],white:[_e,_e,_e],olive:[128,128,0],yellow:[_e,_e,0],orange:[_e,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_e,0,0],pink:[_e,192,203],cyan:[0,_e,_e],transparent:[_e,_e,_e,0]},wh=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*_e+.5|0},kd=function(t,e,n){var i=t?Li(t)?[t>>16,t>>8&_e,t&_e]:0:ha.black,s,a,o,l,c,h,u,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ha[t])i=ha[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&_e,i&_e,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&_e,t&_e]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(cd),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=wh(l+1/3,s,a),i[1]=wh(l,s,a),i[2]=wh(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Vh),n&&i.length<4&&(i[3]=1),i}else i=t.match(cd)||ha.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/_e,a=i[1]/_e,o=i[2]/_e,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(a-o)/f+(a<o?6:0):u===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Vd=function(t){var e=[],n=[],i=-1;return t.split(Ii).forEach(function(s){var a=s.match(Lr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},md=function(t,e,n){var i="",s=(t+i).match(Ii),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=kd(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Vd(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Ii,"1").split(Lr),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Ii),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},Ii=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ha)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),Ny=/hsl[a]?\(/,Jh=function(t){var e=t.join(" "),n;if(Ii.lastIndex=0,Ii.test(e))return n=Ny.test(e),t[1]=md(t[1],n),t[0]=md(t[0],n,Vd(t[1])),!0},ga,bn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,d,f,_=function g(p){var m=r()-i,w=p===!0,y,S,A,E;if((m>t||m<0)&&(n+=m-e),i+=m,A=i-n,y=A-a,(y>0||w)&&(E=++u.frame,d=A-u.time*1e3,u.time=A=A/1e3,a+=y+(y>=s?4:s-y),S=1),w||(l=c(g)),S)for(f=0;f<o.length;f++)o[f](A,d,E,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){yd&&(!Ph&&kh()&&(hi=Ph=window,Gh=hi.document||{},Nn.gsap=rn,(hi.gsapVersions||(hi.gsapVersions=[])).push(rn.version),Md(Xo||hi.GreenSockGlobals||!hi.gsap&&hi||{}),Bd.forEach(zd)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,a-u.time*1e3+1|0)},ga=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ga=0,c=ma},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=u.time*1e3+s},add:function(p,m,w){var y=m?function(S,A,E,T){p(S,A,E,T),u.remove(y)}:p;return u.remove(p),o[w?"unshift":"push"](y),Ls(),y},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},u}(),Ls=function(){return!ga&&bn.wake()},re={},Oy=/^[\d.\-M][\d.\-,\s]/,Fy=/["']/g,By=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Fy,"").trim():+c,i=l.substr(o+1).trim();return e},zy=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},ky=function(t){var e=(t+"").split("("),n=re[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[By(e[1])]:zy(t).split(",").map(Td)):re._CE&&Oy.test(t)?re._CE("",t):n},Hd=function(t){return function(e){return 1-t(1-e)}},Gd=function r(t,e){for(var n=t._first,i;n;)n instanceof $e?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Pr=function(t,e){return t&&(Pe(t)?t:re[t]||ky(t))||e},Ur=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return un(t,function(o){re[o]=Nn[o]=s,re[a=o.toLowerCase()]=n;for(var l in s)re[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=re[o+"."+l]=s[l]}),s},Wd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Th=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Rh*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*uy((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Wd(o);return s=Rh/s,l.config=function(c,h){return r(t,c,h)},l},Eh=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Wd(n);return i.config=function(s){return r(t,s)},i};un("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Ur(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});re.Linear.easeNone=re.none=re.Linear.easeIn;Ur("Elastic",Th("in"),Th("out"),Th());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Ur("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ur("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ur("Circ",function(r){return-(xd(1-r*r)-1)});Ur("Sine",function(r){return r===1?1:-hy(r*ly)+1});Ur("Back",Eh("in"),Eh("out"),Eh());re.SteppedEase=re.steps=Nn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-xe;return function(o){return((i*xa(0,a,o)|0)+s)*n}}};Cs.ease=re["quad.out"];un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Xh+=r+","+r+"Params,"});var $h=function(t,e){this.id=cy++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:qh,this.set=e?e.getSetter:el},_a=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Is(this,+e.duration,1,1),this.data=e.data,Te&&(this._ctx=Te,Te.data.push(this)),ga||bn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Is(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ls(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(tl(this,n),!s._dp||s.parent||Cd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ui(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===xe||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),wd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+fd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+fd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ps(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-xe?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Zo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-xe?0:this._rts,this.totalTime(xa(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),jo(this),My(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ls(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xe&&(this._tTime-=xe)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ae(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ui(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(wn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Zo(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=_y);var i=Ke;return Ke=n,Zh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ke=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,dd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,dd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(qn(this,n),wn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,wn(i)),this._dur||(this._zTime=-xe),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-xe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-xe,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-xe)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Pe(n)?n:Ed,l=function(){var h=i.then;i.then=null,s&&s(),Pe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){ca(this)},r}();On(_a.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xe,_prom:0,_ps:!1,_rts:1});var $e=function(r){_d(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=wn(n.sortChildren),Ce&&ui(n.parent||Ce,Pi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Rd(Pi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return fa(0,arguments,this),this},e.from=function(i,s,a){return fa(1,arguments,this),this},e.fromTo=function(i,s,a,o){return fa(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,ua(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new De(i,s,qn(this,a),1),this},e.call=function(i,s,a){return ui(this,De.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new De(i,a,qn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,ua(a).immediateRender=wn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,ua(o).immediateRender=wn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ae(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,p,m,w,y,S,A,E,T;if(this!==Ce&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,S=this._start,y=this._ts,m=!y,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(d=Ae(h%p),h===l?(g=this._repeat,d=c):(A=Ae(h/p),g=~~A,g&&g===A&&(d=c,g--),d>c&&(d=c)),A=Ps(this._tTime,p),!o&&this._tTime&&A!==g&&this._tTime-A*p-this._dur<=0&&(A=g),E&&g&1&&(d=c-d,T=1),g!==A&&!this._lock){var L=E&&A&1,v=L===(E&&g&1);if(g<A&&(L=!L),o=L?0:h%c?c:h,this._lock=1,this.render(o||(T?0:Ae(g*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Un(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,A=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=L?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Gd(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=Ty(this,Ae(o),Ae(d)),w&&(h-=d-(d=w._start))),this._tTime=h,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!A&&(Un(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&w!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!m){w=0,_&&(h+=this._zTime=-xe);break}}f=_}else{f=this._last;for(var x=i<0?i:d;f;){if(_=f._prev,(f._act||x<=f._end)&&f._ts&&w!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,s,a||Ke&&Zh(f)),d!==this._time||!this._ts&&!m){w=0,_&&(h+=this._zTime=x?-xe:xe);break}}f=_}}if(w&&!s&&(this.pause(),w.render(d>=o?0:-xe)._zTime=d>=o?1:-1,this._ts))return this._start=S,jo(this),this.render(i,s,a);this._onUpdate&&!s&&Un(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(S===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ir(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(Un(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Li(s)||(s=qn(this,s,i)),!(i instanceof _a)){if(nn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(He(i))return this.addLabel(i,s);if(Pe(i))i=De.delayedCall(0,i);else return this}return this!==i?ui(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Zn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof De?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return He(i)?this.removeLabel(i):Pe(i)?this.killTweensOf(i):(i.parent===this&&Qo(this,i),i===this._recent&&(this._recent=this._last),Rr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ae(bn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=qn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=De.delayedCall(0,s||ma,a);return o.data="isPause",this._hasPause=1,ui(this,o,qn(this,i))},e.removePause=function(i){var s=this._first;for(i=qn(this,i);s;)s._start===i&&s.data==="isPause"&&ir(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)tr!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Jn(i),l=this._first,c=Li(s),h;l;)l instanceof De?xy(l._targets,o)&&(c?(!tr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=qn(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=De.to(a,On({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||xe,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&Is(_,p,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,On({startAt:{time:qn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),pd(this,qn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),pd(this,qn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+xe)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ae(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Rr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Rr(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=Zn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ui(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=Ae(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Is(a,a===Ce&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Ce._ts&&(wd(Ce,Zo(i,Ce)),bd=bn.frame),bn.frame>=hd){hd+=Tn.autoSleep||120;var s=Ce._first;if((!s||!s._ts)&&Tn.autoSleep&&bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||bn.sleep()}}},t}(_a);On($e.prototype,{_lock:0,_hasPause:0,_forcing:0});var Vy=function(t,e,n,i,s,a,o){var l=new fn(this._pt,t,e,0,1,eu,null,s),c=0,h=0,u,d,f,_,g,p,m,w;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ds(i)),a&&(w=[n,i],a(w,t,e),n=w[0],i=w[1]),d=n.match(Sh)||[];u=Sh.exec(i);)_=u[0],g=i.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?Dr(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},c=Sh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Hh.test(i)||m)&&(l.e=0),this._pt=l,l},Kh=function(t,e,n,i,s,a,o,l,c,h){Pe(i)&&(i=i(s||0,t,a));var u=t[e],d=n!=="get"?n:Pe(u)?c?t[e.indexOf("set")||!Pe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=Pe(u)?c?Yy:qd:tu,_;if(He(i)&&(~i.indexOf("random(")&&(i=Ds(i)),i.charAt(1)==="="&&(_=Dr(d,i)+(Qe(d)||0),(_||_===0)&&(i=_))),!h||d!==i||Fh)return!isNaN(d*i)&&i!==""?(_=new fn(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?Zy:Zd,0,f),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&Ko(e,i),Vy.call(this,t,e,d,i,f,l||Tn.stringFilter,c))},Hy=function(t,e,n,i,s){if(Pe(t)&&(t=da(t,s,e,n,i)),!fi(t)||t.style&&t.nodeType||nn(t)||vd(t))return He(t)?da(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=da(t[o],s,e,n,i);return a},Qh=function(t,e,n,i,s,a){var o,l,c,h;if(Sn[t]&&(o=new Sn[t]).init(s,o.rawVars?e[t]:Hy(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new fn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==As))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},tr,Fh,jh=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,w=m&&m.data==="nested"?m.vars.targets:p,y=t._overwrite==="auto"&&!zh,S=t.timeline,A,E,T,L,v,x,P,N,F,G,Z,k,q;if(S&&(!d||!s)&&(s="none"),t._ease=Pr(s,Cs.ease),t._yEase=u?Hd(Pr(u===!0?s:u,Cs.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!S&&!!i.runBackwards,!S||d&&!i.stagger){if(N=p[0]?nr(p[0]).harness:0,k=N&&i[N.prop],A=qo(i,Wh),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?Ho:gy),g._lazy=0),a){if(ir(t._startAt=De.set(p,On({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&wn(l),startAt:null,delay:0,onUpdate:c&&function(){return Un(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ke||!o&&!f)&&t._startAt.revert(Ho),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),T=On({overwrite:!1,data:"isFromStart",lazy:o&&!g&&wn(l),immediateRender:o,stagger:0,parent:m},A),k&&(T[N.prop]=k),ir(t._startAt=De.set(p,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ke?t._startAt.revert(Ho):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,xe,xe);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&wn(l)||l&&!_,E=0;E<p.length;E++){if(v=p[E],P=v._gsap||Yh(p)[E]._gsap,t._ptLookup[E]=G={},Ih[P.id]&&er.length&&Yo(),Z=w===p?E:w.indexOf(v),N&&(F=new N).init(v,k||A,t,Z,w)!==!1&&(t._pt=L=new fn(t._pt,v,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(V){G[V]=L}),F.priority&&(x=1)),!N||k)for(T in A)Sn[T]&&(F=Qh(T,A,t,Z,v,w))?F.priority&&(x=1):G[T]=L=Kh.call(t,v,T,"get",A[T],Z,w,0,i.stringFilter);t._op&&t._op[E]&&t.kill(v,t._op[E]),y&&t._pt&&(tr=t,Ce.killTweensOf(v,G,t.globalTime(e)),q=!t.parent,tr=0),t._pt&&l&&(Ih[P.id]=1)}x&&iu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!q,d&&e<=0&&S.render(Zn,!0,!0)},Gy=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Fh=1,t.vars[e]="+=0",jh(t,o),Fh=0,l?pa(e+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Ie(n)+Qe(u.e)),u.b&&(u.b=h.s+Qe(u.b))},Wy=function(t,e){var n=t[0]?nr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Rs({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Xy=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(nn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},da=function(t,e,n,i,s){return Pe(t)?t.call(e,n,i,s):He(t)&&~t.indexOf("random(")?Ds(t):t},Xd=Xh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Yd={};un(Xd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Yd[r]=1});var De=function(r){_d(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ua(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,w=i.parent||Ce,y=(nn(n)||vd(n)?Li(n[0]):"length"in i)?[n]:Jn(n),S,A,E,T,L,v,x,P;if(o._targets=y.length?Yh(y):pa("GSAP target "+n+" not found. https://gsap.com",!Tn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||Vo(c)||Vo(h)){if(i=o.vars,S=o.timeline=new $e({data:"nested",defaults:g||{},targets:w&&w.data==="nested"?w.vars.targets:y}),S.kill(),S.parent=S._dp=Pi(o),S._start=0,d||Vo(c)||Vo(h)){if(T=y.length,x=d&&Dd(d),fi(d))for(L in d)~Xd.indexOf(L)&&(P||(P={}),P[L]=d[L]);for(A=0;A<T;A++)E=qo(i,Yd),E.stagger=0,m&&(E.yoyoEase=m),P&&Rs(E,P),v=y[A],E.duration=+da(c,Pi(o),A,v,y),E.delay=(+da(h,Pi(o),A,v,y)||0)-o._delay,!d&&T===1&&E.delay&&(o._delay=h=E.delay,o._start+=h,E.delay=0),S.to(v,E,x?x(A,v,y):0),S._ease=re.none;S.duration()?c=h=0:o.timeline=0}else if(_){ua(On(S.vars.defaults,{ease:"none"})),S._ease=Pr(_.ease||i.ease||"none");var N=0,F,G,Z;if(nn(_))_.forEach(function(k){return S.to(y,k,">")}),S.duration();else{E={};for(L in _)L==="ease"||L==="easeEach"||Xy(L,_[L],E,_.easeEach);for(L in E)for(F=E[L].sort(function(k,q){return k.t-q.t}),N=0,A=0;A<F.length;A++)G=F[A],Z={ease:G.e,duration:(G.t-(A?F[A-1].t:0))/100*c},Z[L]=G.v,S.to(y,Z,N),N+=Z.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return f===!0&&!zh&&(tr=Pi(o),Ce.killTweensOf(y),tr=0),ui(w,Pi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===Ae(w._time)&&wn(u)&&Sy(Pi(o))&&w.data!=="nested")&&(o._tTime=-xe,o.render(Math.max(0,-h)||0)),p&&Rd(Pi(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-xe&&!h?l:i<xe?0:i,d,f,_,g,p,m,w,y,S;if(!c)wy(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,a);if(d=Ae(u%g),u===l?(_=this._repeat,d=c):(p=Ae(u/g),_=~~p,_&&_===p?(d=c,_--):d>c&&(d=c)),m=this._yoyo&&_&1,m&&(S=this._yEase,d=c-d),p=Ps(this._tTime,g),d===o&&!a&&this._initted&&_===p)return this._tTime=u,this;_!==p&&(y&&this._yEase&&Gd(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(Ae(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Pd(this,h?i:d,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=w=(S||this._ease)(d/c),this._from&&(this.ratio=w=1-w),!o&&u&&!s&&!p&&(Un(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(w,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Lh(this,i,s,a),Un(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&Un(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Lh(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ir(this,1),!s&&!(h&&!o)&&(u||o||m)&&(Un(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){ga||bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||jh(this,c),h=this._ease(c/this._dur),Gy(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(tl(this,0),this.parent||Ad(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ca(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ke),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,tr&&tr.vars.overwrite!==!0)._first||ca(this),this.parent&&a!==this.timeline.totalDuration()&&Is(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Jn(i):o,c=this._ptLookup,h=this._pt,u,d,f,_,g,p,m;if((!s||s==="all")&&yy(o,l))return s==="all"&&(this._pt=0),ca(this);for(u=this._op=this._op||[],s!=="all"&&(He(s)&&(g={},un(s,function(w){return g[w]=1}),s=g),s=Wy(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){d=c[m],s==="all"?(u[m]=s,_=d,f={}):(f=u[m]=u[m]||{},_=s);for(g in _)p=d&&d[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Qo(this,p,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&ca(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return fa(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return fa(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Ce.killTweensOf(i,s,a)},t}(_a);On(De.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});un("staggerTo,staggerFrom,staggerFromTo",function(r){De[r]=function(){var t=new $e,e=Uh.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var tu=function(t,e,n){return t[e]=n},qd=function(t,e,n){return t[e](n)},Yy=function(t,e,n,i){return t[e](i.fp,n)},qy=function(t,e,n){return t.setAttribute(e,n)},el=function(t,e){return Pe(t[e])?qd:$o(t[e])&&t.setAttribute?qy:tu},Zd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Zy=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},eu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},nu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Jy=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},$y=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Qo(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Ky=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},iu=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},fn=function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Zd,this.d=l||this,this.set=c||tu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Ky,this.m=n,this.mt=s,this.tween=i},r}();un(Xh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Wh[r]=1});Nn.TweenMax=Nn.TweenLite=De;Nn.TimelineLite=Nn.TimelineMax=$e;Ce=new $e({sortChildren:!1,defaults:Cs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Tn.stringFilter=Jh;var Ir=[],Wo={},Qy=[],gd=0,jy=0,Ah=function(t){return(Wo[t]||Qy).map(function(e){return e()})},Bh=function(){var t=Date.now(),e=[];t-gd>2&&(Ah("matchMediaInit"),Ir.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=hi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Ah("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),gd=t,Ah("matchMedia"))},Jd=function(){function r(e,n){this.selector=n&&Nh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=jy++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Pe(n)&&(s=i,i=n,n=Pe);var a=this,o=function(){var c=Te,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=Nh(s)),Te=a,u=i.apply(a,arguments),Pe(u)&&a._r.push(u),Te=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Pe?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Te;Te=null,n(this),Te=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof De&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof $e?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof De)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ir.length;a--;)Ir[a].id===this.id&&Ir.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),tM=function(){function r(e){this.contexts=[],this.scope=e,Te&&Te.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){fi(n)||(n={matches:n});var a=new Jd(0,s||this.scope),o=a.conditions={},l,c,h;Te&&!a.selector&&(a.selector=Te.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=hi.matchMedia(n[c]),l&&(Ir.indexOf(a)<0&&Ir.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Bh):l.addEventListener("change",Bh)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Jo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return zd(i)})},timeline:function(t){return new $e(t)},getTweensOf:function(t,e){return Ce.getTweensOf(t,e)},getProperty:function(t,e,n,i){He(t)&&(t=Jn(t)[0]);var s=nr(t||{}).get,a=n?Ed:Td;return n==="native"&&(n=""),t&&(e?a((Sn[e]&&Sn[e].get||s)(t,e,n,i)):function(o,l,c){return a((Sn[o]&&Sn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Jn(t),t.length>1){var i=t.map(function(h){return rn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=Sn[e],o=nr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;As._pt=0,u.init(t,n?h+n:h,As,0,[t]),u.render(1,u),As._pt&&nu(1,As)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=rn.to(t,On((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return Ce.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Pr(t.ease,Cs.ease)),ud(Cs,t||{})},config:function(t){return ud(Tn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Sn[o]&&!Nn[o]&&pa(e+" effect requires "+o+" plugin.")}),bh[e]=function(o,l,c){return n(Jn(o),On(l||{},s),c)},a&&($e.prototype[e]=function(o,l,c){return this.add(bh[e](o,fi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){re[t]=Pr(e)},parseEase:function(t,e){return arguments.length?Pr(t,e):re},getById:function(t){return Ce.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new $e(t),i,s;for(n.smoothChildTiming=wn(t.smoothChildTiming),Ce.remove(n),n._dp=0,n._time=n._tTime=Ce._time,i=Ce._first;i;)s=i._next,(e||!(!i._dur&&i instanceof De&&i.vars.onComplete===i._targets[0]))&&ui(n,i,i._start-i._delay),i=s;return ui(Ce,n,0),n},context:function(t,e){return t?new Jd(t,e):Te},matchMedia:function(t){return new tM(t)},matchMediaRefresh:function(){return Ir.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Bh()},addEventListener:function(t,e){var n=Wo[t]||(Wo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Wo[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Ly,wrapYoyo:Dy,distribute:Dd,random:Nd,snap:Ud,normalize:Iy,getUnit:Qe,clamp:Ay,splitColor:kd,toArray:Jn,selector:Nh,mapRange:Fd,pipe:Ry,unitize:Py,interpolate:Uy,shuffle:Ld},install:Md,effects:bh,ticker:bn,updateRoot:$e.updateRoot,plugins:Sn,globalTimeline:Ce,core:{PropTween:fn,globals:Sd,Tween:De,Timeline:$e,Animation:_a,getCache:nr,_removeLinkedListItem:Qo,reverting:function(){return Ke},context:function(t){return t&&Te&&(Te.data.push(t),t._ctx=Te),Te},suppressOverwrites:function(t){return zh=t}}};un("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Jo[r]=De[r]});bn.add($e.updateRoot);As=Jo.to({},{duration:0});var eM=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},nM=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=eM(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Ch=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(He(s)&&(l={},un(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}nM(o,s)}}}},rn=Jo.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ke?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ch("roundProps",Oh),Ch("modifiers"),Ch("snap",Ud))||Jo;De.version=$e.version=rn.version="3.14.2";yd=1;kh()&&Ls();var iM=re.Power0,rM=re.Power1,sM=re.Power2,aM=re.Power3,oM=re.Power4,lM=re.Linear,cM=re.Quad,hM=re.Cubic,uM=re.Quart,fM=re.Quint,dM=re.Strong,pM=re.Elastic,mM=re.Back,gM=re.SteppedEase,_M=re.Bounce,xM=re.Sine,vM=re.Expo,yM=re.Circ;var $d,sr,Ns,cu,Br,MM,Kd,hu,SM=function(){return typeof window<"u"},Ui={},Fr=180/Math.PI,Os=Math.PI/180,Us=Math.atan2,Qd=1e8,uu=/([A-Z])/g,bM=/(left|right|width|margin|padding|x)/i,wM=/[\s,\(]\S/,di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},su=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},TM=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},EM=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},AM=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},CM=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},ap=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},op=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},RM=function(t,e,n){return t.style[e]=n},PM=function(t,e,n){return t.style.setProperty(e,n)},IM=function(t,e,n){return t._gsap[e]=n},LM=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},DM=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},UM=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Re="transform",En=Re+"Origin",NM=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Ui&&s){if(this.tfm=this.tfm||{},t!=="transform")t=di[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Di(i,o)}):this.tfm[t]=a.x?a[t]:Di(i,t),t===En&&(this.tfm.zOrigin=a.zOrigin);else return di.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Re)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(En,e,"")),t=Re}(s||e)&&this.props.push(t,e,s[t])},lp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},OM=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(uu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=hu(),(!s||!s.isStart)&&!n[Re]&&(lp(n),i.zOrigin&&n[En]&&(n[En]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},cp=function(t,e){var n={target:t,props:[],revert:OM,save:NM};return t._gsap||rn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},hp,au=function(t,e){var n=sr.createElementNS?sr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):sr.createElement(t);return n&&n.style?n:sr.createElement(t)},Fn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(uu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Fs(e)||e,1)||""},jd="O,Moz,ms,Ms,Webkit".split(","),Fs=function(t,e,n){var i=e||Br,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(jd[a]+t in s););return a<0?null:(a===3?"ms":a>=0?jd[a]:"")+t},ou=function(){SM()&&window.document&&($d=window,sr=$d.document,Ns=sr.documentElement,Br=au("div")||{style:{}},MM=au("div"),Re=Fs(Re),En=Re+"Origin",Br.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",hp=!!Fs("perspective"),hu=rn.core.reverting,cu=1)},tp=function(t){var e=t.ownerSVGElement,n=au("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ns.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ns.removeChild(n),s},ep=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},up=function(t){var e,n;try{e=t.getBBox()}catch{e=tp(t),n=1}return e&&(e.width||e.height)||n||(e=tp(t)),e&&!e.width&&!e.x&&!e.y?{x:+ep(t,["x","cx","x1"])||0,y:+ep(t,["y","cy","y1"])||0,width:0,height:0}:e},fp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&up(t))},or=function(t,e){if(e){var n=t.style,i;e in Ui&&e!==En&&(e=Re),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(uu,"-$1").toLowerCase())):n.removeAttribute(e)}},ar=function(t,e,n,i,s,a){var o=new fn(t._pt,e,n,0,1,a?op:ap);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},np={deg:1,rad:1,turn:1},FM={grid:1,flex:1},lr=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Br.style,l=bM.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,p,m;if(i===a||!s||np[i]||np[a])return s;if(a!=="px"&&!d&&(s=r(t,e,n,"px")),m=t.getCTM&&fp(t),(f||a==="%")&&(Ui[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[h],Ie(f?s/_*u:s/100*_);if(o[l?"width":"height"]=u+(d?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===sr||!g.appendChild)&&(g=sr.body),p=g._gsap,p&&f&&p.width&&l&&p.time===bn.time&&!p.uncache)return Ie(s/p.width*u);if(f&&(e==="height"||e==="width")){var w=t.style[e];t.style[e]=u+i,_=t[h],w?t.style[e]=w:or(t,e)}else(f||a==="%")&&!FM[Fn(g,"display")]&&(o.position=Fn(t,"position")),g===t&&(o.position="static"),g.appendChild(Br),_=Br[h],g.removeChild(Br),o.position="absolute";return l&&f&&(p=nr(g),p.time=bn.time,p.width=g[h]),Ie(d?_*s/u:_&&s?u/_*s:0)},Di=function(t,e,n,i){var s;return cu||ou(),e in di&&e!=="transform"&&(e=di[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ui[e]&&e!=="transform"?(s=Ma(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:il(Fn(t,En))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=nl[e]&&nl[e](t,e,n)||Fn(t,e)||qh(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?lr(t,e,s,n)+n:s},BM=function(t,e,n,i){if(!n||n==="none"){var s=Fs(e,t,1),a=s&&Fn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Fn(t,"borderTopColor"))}var o=new fn(this._pt,t.style,e,0,1,eu),l=0,c=0,h,u,d,f,_,g,p,m,w,y,S,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Fn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Fn(t,e)||i,g?t.style[e]=g:or(t,e)),h=[n,i],Jh(h),n=h[0],i=h[1],d=n.match(Lr)||[],A=i.match(Lr)||[],A.length){for(;u=Lr.exec(i);)p=u[0],w=i.substring(l,u.index),_?_=(_+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(_=1),p!==(g=d[c++]||"")&&(f=parseFloat(g)||0,S=g.substr((f+"").length),p.charAt(1)==="="&&(p=Dr(f,p)+S),m=parseFloat(p),y=p.substr((m+"").length),l=Lr.lastIndex-y.length,y||(y=y||Tn.units[e]||S,l===i.length&&(i+=y,o.e+=y)),S!==y&&(f=lr(t,e,g,y)||0),o._pt={_next:o._pt,p:w||c===1?w:",",s:f,c:m-f,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?op:ap;return Hh.test(i)&&(o.e=0),this._pt=o,o},ip={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},zM=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=ip[n]||n,e[1]=ip[i]||i,e.join(" ")},kM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ui[o]&&(l=1,o=o==="transformOrigin"?En:Re),or(n,o);l&&(or(n,Re),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ma(n,1),a.uncache=1,lp(i)))}},nl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new fn(t._pt,e,n,0,0,kM);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},ya=[1,0,0,1,0,0],dp={},pp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},rp=function(t){var e=Fn(t,Re);return pp(e)?ya:e.substr(7).match(Vh).map(Ie)},fu=function(t,e){var n=t._gsap||nr(t),i=t.style,s=rp(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ya:s):(s===ya&&!t.offsetParent&&t!==Ns&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Ns.appendChild(t)),s=rp(t),l?i.display=l:or(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Ns.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},lu=function(t,e,n,i,s,a){var o=t._gsap,l=s||fu(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],p=l[3],m=l[4],w=l[5],y=e.split(" "),S=parseFloat(y[0])||0,A=parseFloat(y[1])||0,E,T,L,v;n?l!==ya&&(T=f*p-_*g)&&(L=S*(p/T)+A*(-g/T)+(g*w-p*m)/T,v=S*(-_/T)+A*(f/T)-(f*w-_*m)/T,S=L,A=v):(E=up(t),S=E.x+(~y[0].indexOf("%")?S/100*E.width:S),A=E.y+(~(y[1]||y[0]).indexOf("%")?A/100*E.height:A)),i||i!==!1&&o.smooth?(m=S-c,w=A-h,o.xOffset=u+(m*f+w*g)-m,o.yOffset=d+(m*_+w*p)-w):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=A,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[En]="0px 0px",a&&(ar(a,o,"xOrigin",c,S),ar(a,o,"yOrigin",h,A),ar(a,o,"xOffset",u,o.xOffset),ar(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",S+" "+A)},Ma=function(t,e){var n=t._gsap||new $h(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Fn(t,En)||"0",h,u,d,f,_,g,p,m,w,y,S,A,E,T,L,v,x,P,N,F,G,Z,k,q,V,at,R,lt,Ft,Yt,Y,tt;return h=u=d=g=p=m=w=y=S=0,f=_=1,n.svg=!!(t.getCTM&&fp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Re]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Re]!=="none"?l[Re]:"")),i.scale=i.rotate=i.translate="none"),T=fu(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",q=""):q=!e&&t.getAttribute("data-svg-origin"),lu(t,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,T)),A=n.xOrigin||0,E=n.yOrigin||0,T!==ya&&(P=T[0],N=T[1],F=T[2],G=T[3],h=Z=T[4],u=k=T[5],T.length===6?(f=Math.sqrt(P*P+N*N),_=Math.sqrt(G*G+F*F),g=P||N?Us(N,P)*Fr:0,w=F||G?Us(F,G)*Fr+g:0,w&&(_*=Math.abs(Math.cos(w*Os))),n.svg&&(h-=A-(A*P+E*F),u-=E-(A*N+E*G))):(tt=T[6],Yt=T[7],R=T[8],lt=T[9],Ft=T[10],Y=T[11],h=T[12],u=T[13],d=T[14],L=Us(tt,Ft),p=L*Fr,L&&(v=Math.cos(-L),x=Math.sin(-L),q=Z*v+R*x,V=k*v+lt*x,at=tt*v+Ft*x,R=Z*-x+R*v,lt=k*-x+lt*v,Ft=tt*-x+Ft*v,Y=Yt*-x+Y*v,Z=q,k=V,tt=at),L=Us(-F,Ft),m=L*Fr,L&&(v=Math.cos(-L),x=Math.sin(-L),q=P*v-R*x,V=N*v-lt*x,at=F*v-Ft*x,Y=G*x+Y*v,P=q,N=V,F=at),L=Us(N,P),g=L*Fr,L&&(v=Math.cos(L),x=Math.sin(L),q=P*v+N*x,V=Z*v+k*x,N=N*v-P*x,k=k*v-Z*x,P=q,Z=V),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=Ie(Math.sqrt(P*P+N*N+F*F)),_=Ie(Math.sqrt(k*k+tt*tt)),L=Us(Z,k),w=Math.abs(L)>2e-4?L*Fr:0,S=Y?1/(Y<0?-Y:Y):0),n.svg&&(q=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!pp(Fn(t,Re)),q&&t.setAttribute("transform",q))),Math.abs(w)>90&&Math.abs(w)<270&&(s?(f*=-1,w+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,w+=w<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Ie(f),n.scaleY=Ie(_),n.rotation=Ie(g)+o,n.rotationX=Ie(p)+o,n.rotationY=Ie(m)+o,n.skewX=w+o,n.skewY=y+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[En]=il(c)),n.xOffset=n.yOffset=0,n.force3D=Tn.force3D,n.renderTransform=n.svg?HM:hp?mp:VM,n.uncache=0,n},il=function(t){return(t=t.split(" "))[0]+" "+t[1]},ru=function(t,e,n){var i=Qe(e);return Ie(parseFloat(e)+parseFloat(lr(t,"x",n+"px",i)))+i},VM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,mp(t,e)},Nr="0deg",va="0px",Or=") ",mp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,w=n.target,y=n.zOrigin,S="",A=m==="auto"&&t&&t!==1||m===!0;if(y&&(u!==Nr||h!==Nr)){var E=parseFloat(h)*Os,T=Math.sin(E),L=Math.cos(E),v;E=parseFloat(u)*Os,v=Math.cos(E),a=ru(w,a,T*v*-y),o=ru(w,o,-Math.sin(E)*-y),l=ru(w,l,L*v*-y+y)}p!==va&&(S+="perspective("+p+Or),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(A||a!==va||o!==va||l!==va)&&(S+=l!==va||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Or),c!==Nr&&(S+="rotate("+c+Or),h!==Nr&&(S+="rotateY("+h+Or),u!==Nr&&(S+="rotateX("+u+Or),(d!==Nr||f!==Nr)&&(S+="skew("+d+", "+f+Or),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Or),w.style[Re]=S||"translate(0, 0)"},HM=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,w=n.forceCSS,y=parseFloat(a),S=parseFloat(o),A,E,T,L,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Os,c*=Os,A=Math.cos(l)*u,E=Math.sin(l)*u,T=Math.sin(l-c)*-d,L=Math.cos(l-c)*d,c&&(h*=Os,v=Math.tan(c-h),v=Math.sqrt(1+v*v),T*=v,L*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),A*=v,E*=v)),A=Ie(A),E=Ie(E),T=Ie(T),L=Ie(L)):(A=u,L=d,E=T=0),(y&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(y=lr(f,"x",a,"px"),S=lr(f,"y",o,"px")),(_||g||p||m)&&(y=Ie(y+_-(_*A+g*T)+p),S=Ie(S+g-(_*E+g*L)+m)),(i||s)&&(v=f.getBBox(),y=Ie(y+i/100*v.width),S=Ie(S+s/100*v.height)),v="matrix("+A+","+E+","+T+","+L+","+y+","+S+")",f.setAttribute("transform",v),w&&(f.style[Re]=v)},GM=function(t,e,n,i,s){var a=360,o=He(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Fr:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Qd)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Qd)%a-~~(c/a)*a)),t._pt=d=new fn(t._pt,e,n,i,c,TM),d.e=h,d.u="deg",t._props.push(n),d},sp=function(t,e){for(var n in e)t[n]=e[n];return t},WM=function(t,e,n){var i=sp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Re]=e,o=Ma(n,1),or(n,Re),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Re],a[Re]=e,o=Ma(n,1),a[Re]=c);for(l in Ui)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=Qe(c),_=Qe(h),u=f!==_?lr(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new fn(t._pt,o,l,u,d-u,su),t._pt.u=_||0,t._props.push(l));sp(o,i)};un("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});nl[t>1?"border"+r:r]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(_){return Di(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,u)}});var du={name:"css",register:ou,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,d,f,_,g,p,m,w,y,S,A,E,T,L,v;cu||ou(),this.styles=this.styles||cp(t),L=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Sn[g]&&Qh(g,e,n,i,t,s)))){if(f=typeof h,_=nl[g],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Ds(h)),_)_(this,t,g,h,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Ii.lastIndex=0,Ii.test(c)||(p=Qe(c),m=Qe(h),m?p!==m&&(c=lr(t,g,c,m)+m):p&&(h+=p)),this.add(o,"setProperty",c,h,i,s,0,0,g),a.push(g),L.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],He(c)&&~c.indexOf("random(")&&(c=Ds(c)),Qe(c+"")||c==="auto"||(c+=Tn.units[g]||Qe(Di(t,g))||""),(c+"").charAt(1)==="="&&(c=Di(t,g))):c=Di(t,g),d=parseFloat(c),w=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),w&&(h=h.substr(2)),u=parseFloat(h),g in di&&(g==="autoAlpha"&&(d===1&&Di(t,"visibility")==="hidden"&&u&&(d=0),L.push("visibility",0,o.visibility),ar(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=di[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Ui,y){if(this.styles.save(g),v=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=Fn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var x=t.style.perspective;t.style.perspective=h,h=Fn(t,"perspective"),x?t.style.perspective=x:or(t,"perspective")}u=parseFloat(h)}if(S||(A=t._gsap,A.renderTransform&&!e.parseTransform||Ma(t,e.parseTransform),E=e.smoothOrigin!==!1&&A.smooth,S=this._pt=new fn(this._pt,o,Re,0,1,A.renderTransform,A,0,-1),S.dep=1),g==="scale")this._pt=new fn(this._pt,A,"scaleY",A.scaleY,(w?Dr(A.scaleY,w+u):u)-A.scaleY||0,su),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(En,0,o[En]),h=zM(h),A.svg?lu(t,h,0,E,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==A.zOrigin&&ar(this,A,"zOrigin",A.zOrigin,m),ar(this,o,g,il(c),il(h)));continue}else if(g==="svgOrigin"){lu(t,h,1,E,0,this);continue}else if(g in dp){GM(this,A,g,d,w?Dr(d,w+h):h);continue}else if(g==="smoothOrigin"){ar(this,A,"smooth",A.smooth,h);continue}else if(g==="force3D"){A[g]=h;continue}else if(g==="transform"){WM(this,h,t);continue}}else g in o||(g=Fs(g)||g);if(y||(u||u===0)&&(d||d===0)&&!wM.test(h)&&g in o)p=(c+"").substr((d+"").length),u||(u=0),m=Qe(h)||(g in Tn.units?Tn.units[g]:p),p!==m&&(d=lr(t,g,c,m)),this._pt=new fn(this._pt,y?A:o,g,d,(w?Dr(d,w+u):u)-d,!y&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?CM:su),this._pt.u=m||0,y&&v!==h?(this._pt.b=c,this._pt.e=v,this._pt.r=AM):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=EM);else if(g in o)BM.call(this,t,g,c,w?w+h:h);else if(g in t)this.add(t,g,c||t[g],w?w+h:h,i,s);else if(g!=="parseTransform"){Ko(g,h);continue}y||(g in o?L.push(g,0,o[g]):typeof t[g]=="function"?L.push(g,2,t[g]()):L.push(g,1,c||t[g])),a.push(g)}}T&&iu(this)},render:function(t,e){if(e.tween._time||!hu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Di,aliases:di,getSetter:function(t,e,n){var i=di[e];return i&&i.indexOf(",")<0&&(e=i),e in Ui&&e!==En&&(t._gsap.x||Di(t,"x"))?n&&Kd===n?e==="scale"?LM:IM:(Kd=n||{})&&(e==="scale"?DM:UM):t.style&&!$o(t.style[e])?RM:~e.indexOf("-")?PM:el(t,e)},core:{_removeProperty:or,_getMatrix:fu}};rn.utils.checkPrefix=Fs;rn.core.getStyleSaver=cp;(function(r,t,e,n){var i=un(r+","+t+","+e,function(s){Ui[s]=1});un(t,function(s){Tn.units[s]="deg",dp[s]=1}),di[i[13]]=r+","+t,un(n,function(s){var a=s.split(":");di[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Tn.units[r]="px"});rn.registerPlugin(du);var Sa=rn.registerPlugin(du)||rn,yS=Sa.core.Tween;function gp(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function XM(r,t,e){return t&&gp(r.prototype,t),e&&gp(r,e),r}var je,al,YM,Bn,cr,hr,zs,xp,zr,wa,vp,Ni,ai,yp,Mp=function(){return je||typeof window<"u"&&(je=window.gsap)&&je.registerPlugin&&je},Sp=1,Bs=[],$t=[],oi=[],Ta=Date.now,pu=function(t,e){return e},qM=function(){var t=wa.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,$t),i.push.apply(i,oi),$t=n,oi=i,pu=function(a,o){return e[a](o)}},Fi=function(t,e){return~oi.indexOf(t)&&oi[oi.indexOf(t)+1][e]},Ea=function(t){return!!~vp.indexOf(t)},pn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},dn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},rl="scrollLeft",sl="scrollTop",mu=function(){return Ni&&Ni.isPressed||$t.cache++},ol=function(t,e){var n=function i(s){if(s||s===0){Sp&&(Bn.history.scrollRestoration="manual");var a=Ni&&Ni.isPressed;s=i.v=Math.round(s)||(Ni&&Ni.iOS?1:0),t(s),i.cacheID=$t.cache,a&&pu("ss",s)}else(e||$t.cache!==i.cacheID||pu("ref"))&&(i.cacheID=$t.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},sn={s:rl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ol(function(r){return arguments.length?Bn.scrollTo(r,Oe.sc()):Bn.pageXOffset||cr[rl]||hr[rl]||zs[rl]||0})},Oe={s:sl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:sn,sc:ol(function(r){return arguments.length?Bn.scrollTo(sn.sc(),r):Bn.pageYOffset||cr[sl]||hr[sl]||zs[sl]||0})},mn=function(t,e){return(e&&e._ctx&&e._ctx.selector||je.utils.toArray)(t)[0]||(typeof t=="string"&&je.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},ZM=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Oi=function(t,e){var n=e.s,i=e.sc;Ea(t)&&(t=cr.scrollingElement||hr);var s=$t.indexOf(t),a=i===Oe.sc?1:2;!~s&&(s=$t.push(t)-1),$t[s+a]||pn(t,"scroll",mu);var o=$t[s+a],l=o||($t[s+a]=ol(Fi(t,n),!0)||(Ea(t)?i:ol(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=je.getProperty(t,"scrollBehavior")==="smooth"),l},ll=function(t,e,n){var i=t,s=t,a=Ta(),o=a,l=e||50,c=Math.max(500,l*3),h=function(_,g){var p=Ta();g||p-a>l?(s=i,i=_,o=a,a=p):n?i+=_:i=s+(_-s)/(p-o)*(a-o)},u=function(){s=i=n?0:i,o=a=0},d=function(_){var g=o,p=s,m=Ta();return(_||_===0)&&_!==i&&h(_),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-g)*1e3};return{update:h,reset:u,getVelocity:d}},ba=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},_p=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},bp=function(){wa=je.core.globals().ScrollTrigger,wa&&wa.core&&qM()},wp=function(t){return je=t||Mp(),!al&&je&&typeof document<"u"&&document.body&&(Bn=window,cr=document,hr=cr.documentElement,zs=cr.body,vp=[Bn,cr,hr,zs],YM=je.utils.clamp,yp=je.core.context||function(){},zr="onpointerenter"in zs?"pointer":"mouse",xp=Le.isTouch=Bn.matchMedia&&Bn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Bn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ai=Le.eventTypes=("ontouchstart"in hr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in hr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Sp=0},500),bp(),al=1),al};sn.op=Oe;$t.cache=0;var Le=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){al||wp(je)||console.warn("Please gsap.registerPlugin(Observer)"),wa||bp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,d=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,w=n.onDrag,y=n.onPress,S=n.onRelease,A=n.onRight,E=n.onLeft,T=n.onUp,L=n.onDown,v=n.onChangeX,x=n.onChangeY,P=n.onChange,N=n.onToggleX,F=n.onToggleY,G=n.onHover,Z=n.onHoverEnd,k=n.onMove,q=n.ignoreCheck,V=n.isNormalizer,at=n.onGestureStart,R=n.onGestureEnd,lt=n.onWheel,Ft=n.onEnable,Yt=n.onDisable,Y=n.onClick,tt=n.scrollSpeed,ht=n.capture,ot=n.allowClicks,Tt=n.lockAxis,Ct=n.onLockAxis;this.target=o=mn(o)||hr,this.vars=n,f&&(f=je.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,tt=tt||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Bn.getComputedStyle(zs).lineHeight)||22);var Ht,Qt,I,It,Nt,Wt,_t,H=this,Et=0,Ot=0,C=n.passive||!h&&n.passive!==!1,M=Oi(o,sn),W=Oi(o,Oe),j=M(),nt=W(),$=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ai[0]==="pointerdown",bt=Ea(o),it=o.ownerDocument||cr,dt=[0,0,0],Dt=[0,0,0],rt=0,gt=function(){return rt=Ta()},Rt=function(St,se){return(H.event=St)&&f&&ZM(St.target,f)||se&&$&&St.pointerType!=="touch"||q&&q(St,se)},Bt=function(){H._vx.reset(),H._vy.reset(),Qt.pause(),u&&u(H)},mt=function(){var St=H.deltaX=_p(dt),se=H.deltaY=_p(Dt),ct=Math.abs(St)>=i,kt=Math.abs(se)>=i;P&&(ct||kt)&&P(H,St,se,dt,Dt),ct&&(A&&H.deltaX>0&&A(H),E&&H.deltaX<0&&E(H),v&&v(H),N&&H.deltaX<0!=Et<0&&N(H),Et=H.deltaX,dt[0]=dt[1]=dt[2]=0),kt&&(L&&H.deltaY>0&&L(H),T&&H.deltaY<0&&T(H),x&&x(H),F&&H.deltaY<0!=Ot<0&&F(H),Ot=H.deltaY,Dt[0]=Dt[1]=Dt[2]=0),(It||I)&&(k&&k(H),I&&(p&&I===1&&p(H),w&&w(H),I=0),It=!1),Wt&&!(Wt=!1)&&Ct&&Ct(H),Nt&&(lt(H),Nt=!1),Ht=0},zt=function(St,se,ct){dt[ct]+=St,Dt[ct]+=se,H._vx.update(St),H._vy.update(se),c?Ht||(Ht=requestAnimationFrame(mt)):mt()},Gt=function(St,se){Tt&&!_t&&(H.axis=_t=Math.abs(St)>Math.abs(se)?"x":"y",Wt=!0),_t!=="y"&&(dt[2]+=St,H._vx.update(St,!0)),_t!=="x"&&(Dt[2]+=se,H._vy.update(se,!0)),c?Ht||(Ht=requestAnimationFrame(mt)):mt()},le=function(St){if(!Rt(St,1)){St=ba(St,h);var se=St.clientX,ct=St.clientY,kt=se-H.x,Pt=ct-H.y,Vt=H.isDragging;H.x=se,H.y=ct,(Vt||(kt||Pt)&&(Math.abs(H.startX-se)>=s||Math.abs(H.startY-ct)>=s))&&(I||(I=Vt?2:1),Vt||(H.isDragging=!0),Gt(kt,Pt))}},U=H.onPress=function(Ut){Rt(Ut,1)||Ut&&Ut.button||(H.axis=_t=null,Qt.pause(),H.isPressed=!0,Ut=ba(Ut),Et=Ot=0,H.startX=H.x=Ut.clientX,H.startY=H.y=Ut.clientY,H._vx.reset(),H._vy.reset(),pn(V?o:it,ai[1],le,C,!0),H.deltaX=H.deltaY=0,y&&y(H))},J=H.onRelease=function(Ut){if(!Rt(Ut,1)){dn(V?o:it,ai[1],le,!0);var St=!isNaN(H.y-H.startY),se=H.isDragging,ct=se&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),kt=ba(Ut);!ct&&St&&(H._vx.reset(),H._vy.reset(),h&&ot&&je.delayedCall(.08,function(){if(Ta()-rt>300&&!Ut.defaultPrevented){if(Ut.target.click)Ut.target.click();else if(it.createEvent){var Pt=it.createEvent("MouseEvents");Pt.initMouseEvent("click",!0,!0,Bn,1,kt.screenX,kt.screenY,kt.clientX,kt.clientY,!1,!1,!1,!1,0,null),Ut.target.dispatchEvent(Pt)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,u&&se&&!V&&Qt.restart(!0),I&&mt(),m&&se&&m(H),S&&S(H,ct)}},K=function(St){return St.touches&&St.touches.length>1&&(H.isGesturing=!0)&&at(St,H.isDragging)},Q=function(){return(H.isGesturing=!1)||R(H)},st=function(St){if(!Rt(St)){var se=M(),ct=W();zt((se-j)*tt,(ct-nt)*tt,1),j=se,nt=ct,u&&Qt.restart(!0)}},wt=function(St){if(!Rt(St)){St=ba(St,h),lt&&(Nt=!0);var se=(St.deltaMode===1?l:St.deltaMode===2?Bn.innerHeight:1)*_;zt(St.deltaX*se,St.deltaY*se,0),u&&!V&&Qt.restart(!0)}},Xt=function(St){if(!Rt(St)){var se=St.clientX,ct=St.clientY,kt=se-H.x,Pt=ct-H.y;H.x=se,H.y=ct,It=!0,u&&Qt.restart(!0),(kt||Pt)&&Gt(kt,Pt)}},me=function(St){H.event=St,G(H)},ge=function(St){H.event=St,Z(H)},ee=function(St){return Rt(St)||ba(St,h)&&Y(H)};Qt=H._dc=je.delayedCall(d||.25,Bt).pause(),H.deltaX=H.deltaY=0,H._vx=ll(0,50,!0),H._vy=ll(0,50,!0),H.scrollX=M,H.scrollY=W,H.isDragging=H.isGesturing=H.isPressed=!1,yp(this),H.enable=function(Ut){return H.isEnabled||(pn(bt?it:o,"scroll",mu),a.indexOf("scroll")>=0&&pn(bt?it:o,"scroll",st,C,ht),a.indexOf("wheel")>=0&&pn(o,"wheel",wt,C,ht),(a.indexOf("touch")>=0&&xp||a.indexOf("pointer")>=0)&&(pn(o,ai[0],U,C,ht),pn(it,ai[2],J),pn(it,ai[3],J),ot&&pn(o,"click",gt,!0,!0),Y&&pn(o,"click",ee),at&&pn(it,"gesturestart",K),R&&pn(it,"gestureend",Q),G&&pn(o,zr+"enter",me),Z&&pn(o,zr+"leave",ge),k&&pn(o,zr+"move",Xt)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=It=I=!1,H._vx.reset(),H._vy.reset(),j=M(),nt=W(),Ut&&Ut.type&&U(Ut),Ft&&Ft(H)),H},H.disable=function(){H.isEnabled&&(Bs.filter(function(Ut){return Ut!==H&&Ea(Ut.target)}).length||dn(bt?it:o,"scroll",mu),H.isPressed&&(H._vx.reset(),H._vy.reset(),dn(V?o:it,ai[1],le,!0)),dn(bt?it:o,"scroll",st,ht),dn(o,"wheel",wt,ht),dn(o,ai[0],U,ht),dn(it,ai[2],J),dn(it,ai[3],J),dn(o,"click",gt,!0),dn(o,"click",ee),dn(it,"gesturestart",K),dn(it,"gestureend",Q),dn(o,zr+"enter",me),dn(o,zr+"leave",ge),dn(o,zr+"move",Xt),H.isEnabled=H.isPressed=H.isDragging=!1,Yt&&Yt(H))},H.kill=H.revert=function(){H.disable();var Ut=Bs.indexOf(H);Ut>=0&&Bs.splice(Ut,1),Ni===H&&(Ni=0)},Bs.push(H),V&&Ea(o)&&(Ni=H),H.enable(g)},XM(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Le.version="3.14.2";Le.create=function(r){return new Le(r)};Le.register=wp;Le.getAll=function(){return Bs.slice()};Le.getById=function(r){return Bs.filter(function(t){return t.vars.id===r})[0]};Mp()&&je.registerPlugin(Le);var yt,Hs,te,Me,Vn,ue,Pu,wl,ka,Da,Ca,cl,an,Al,bu,_n,Tp,Ep,Gs,Hp,gu,Gp,gn,wu,Wp,Xp,ur,Tu,Iu,Ws,Lu,Ua,Eu,_u,hl=1,on=Date.now,xu=on(),Qn=0,Ra=0,Ap=function(t,e,n){var i=kn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Cp=function(t,e){return e&&(!kn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},JM=function r(){return Ra&&requestAnimationFrame(r)},Rp=function(){return Al=1},Pp=function(){return Al=0},pi=function(t){return t},Pa=function(t){return Math.round(t*1e5)/1e5||0},Yp=function(){return typeof window<"u"},qp=function(){return yt||Yp()&&(yt=window.gsap)&&yt.registerPlugin&&yt},Xr=function(t){return!!~Pu.indexOf(t)},Zp=function(t){return(t==="Height"?Lu:te["inner"+t])||Vn["client"+t]||ue["client"+t]},Jp=function(t){return Fi(t,"getBoundingClientRect")||(Xr(t)?function(){return bl.width=te.innerWidth,bl.height=Lu,bl}:function(){return Bi(t)})},$M=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=Fi(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?Zp(s):t["client"+s])||0}},KM=function(t,e){return!e||~oi.indexOf(t)?Jp(t):function(){return bl}},mi=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=Fi(t,n))?a()-Jp(t)()[s]:Xr(t)?(Vn[n]||ue[n])-Zp(i):t[n]-t["offset"+i])},ul=function(t,e){for(var n=0;n<Gs.length;n+=3)(!e||~e.indexOf(Gs[n+1]))&&t(Gs[n],Gs[n+1],Gs[n+2])},kn=function(t){return typeof t=="string"},ln=function(t){return typeof t=="function"},Ia=function(t){return typeof t=="number"},kr=function(t){return typeof t=="object"},Aa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},vu=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},ks=Math.abs,$p="left",Kp="top",Du="right",Uu="bottom",Hr="width",Gr="height",Na="Right",Oa="Left",Fa="Top",Ba="Bottom",Fe="padding",$n="margin",Ys="Width",Nu="Height",Ge="px",Kn=function(t){return te.getComputedStyle(t)},QM=function(t){var e=Kn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Ip=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Bi=function(t,e){var n=e&&Kn(t)[bu]!=="matrix(1, 0, 0, 1, 0, 0)"&&yt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Tl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Qp=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},jM=function(t){return function(e){return yt.utils.snap(Qp(t),e)}},Ou=function(t){var e=yt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},tS=function(t){return function(e,n){return Ou(Qp(t))(e,n.direction)}},fl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Ze=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},qe=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},dl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Lp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},pl={toggleActions:"play",anticipatePin:0},El={top:0,left:0,center:.5,bottom:1,right:1},vl=function(t,e){if(kn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in El?El[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ml=function(t,e,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,u=s.fontSize,d=s.indent,f=s.fontWeight,_=Me.createElement("div"),g=Xr(n)||Fi(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=g?ue:n,w=t.indexOf("start")!==-1,y=w?c:h,S="border-color:"+y+";font-size:"+u+";color:"+y+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(S+=(i===Oe?Du:Uu)+":"+(a+parseFloat(d))+"px;"),o&&(S+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=w,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=S,_.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],yl(_,0,i,w),_},yl=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ys]=1,s["border"+o+Ys]=0,s[n.p]=e+"px",yt.set(t,s)},Kt=[],Au={},Va,Dp=function(){return on()-Qn>34&&(Va||(Va=requestAnimationFrame(zi)))},Vs=function(){(!gn||!gn.isPressed||gn.startX>ue.clientWidth)&&($t.cache++,gn?Va||(Va=requestAnimationFrame(zi)):zi(),Qn||qr("scrollStart"),Qn=on())},yu=function(){Xp=te.innerWidth,Wp=te.innerHeight},La=function(t){$t.cache++,(t===!0||!an&&!Gp&&!Me.fullscreenElement&&!Me.webkitFullscreenElement&&(!wu||Xp!==te.innerWidth||Math.abs(te.innerHeight-Wp)>te.innerHeight*.25))&&wl.restart(!0)},Yr={},eS=[],jp=function r(){return qe(Jt,"scrollEnd",r)||Vr(!0)},qr=function(t){return Yr[t]&&Yr[t].map(function(e){return e()})||eS},zn=[],tm=function(t){for(var e=0;e<zn.length;e+=5)(!t||zn[e+4]&&zn[e+4].query===t)&&(zn[e].style.cssText=zn[e+1],zn[e].getBBox&&zn[e].setAttribute("transform",zn[e+2]||""),zn[e+3].uncache=1)},em=function(){return $t.forEach(function(t){return ln(t)&&++t.cacheID&&(t.rec=t())})},Fu=function(t,e){var n;for(_n=0;_n<Kt.length;_n++)n=Kt[_n],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Ua=!0,e&&tm(e),e||qr("revert")},nm=function(t,e){$t.cache++,(e||!xn)&&$t.forEach(function(n){return ln(n)&&n.cacheID++&&(n.rec=0)}),kn(t)&&(te.history.scrollRestoration=Iu=t)},xn,Wr=0,Up,nS=function(){if(Up!==Wr){var t=Up=Wr;requestAnimationFrame(function(){return t===Wr&&Vr(!0)})}},im=function(){ue.appendChild(Ws),Lu=!gn&&Ws.offsetHeight||te.innerHeight,ue.removeChild(Ws)},Np=function(t){return ka(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Vr=function(t,e){if(Vn=Me.documentElement,ue=Me.body,Pu=[te,Me,Vn,ue],Qn&&!t&&!Ua){Ze(Jt,"scrollEnd",jp);return}im(),xn=Jt.isRefreshing=!0,Ua||em();var n=qr("refreshInit");Hp&&Jt.sort(),e||Fu(),$t.forEach(function(i){ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Kt.slice(0).forEach(function(i){return i.refresh()}),Ua=!1,Kt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Eu=1,Np(!0),Kt.forEach(function(i){var s=mi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Np(!1),Eu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),$t.forEach(function(i){ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),nm(Iu,1),wl.pause(),Wr++,xn=2,zi(2),Kt.forEach(function(i){return ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),xn=Jt.isRefreshing=!1,qr("refresh")},Cu=0,Ml=1,za,zi=function(t){if(t===2||!xn&&!Ua){Jt.isUpdating=!0,za&&za.update(0);var e=Kt.length,n=on(),i=n-xu>=50,s=e&&Kt[0].scroll();if(Ml=Cu>s?-1:1,xn||(Cu=s),i&&(Qn&&!Al&&n-Qn>200&&(Qn=0,qr("scrollEnd")),Ca=xu,xu=n),Ml<0){for(_n=e;_n-- >0;)Kt[_n]&&Kt[_n].update(0,i);Ml=1}else for(_n=0;_n<e;_n++)Kt[_n]&&Kt[_n].update(0,i);Jt.isUpdating=!1}Va=0},Ru=[$p,Kp,Uu,Du,$n+Ba,$n+Na,$n+Fa,$n+Oa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Sl=Ru.concat([Hr,Gr,"boxSizing","max"+Ys,"max"+Nu,"position",$n,Fe,Fe+Fa,Fe+Na,Fe+Ba,Fe+Oa]),iS=function(t,e,n){Xs(n);var i=t._gsap;if(i.spacerIsNative)Xs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Mu=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Ru.length,a=e.style,o=t.style,l;s--;)l=Ru[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Uu]=o[Du]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Hr]=Tl(t,sn)+Ge,a[Gr]=Tl(t,Oe)+Ge,a[Fe]=o[$n]=o[Kp]=o[$p]="0",Xs(i),o[Hr]=o["max"+Ys]=n[Hr],o[Gr]=o["max"+Nu]=n[Gr],o[Fe]=n[Fe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},rS=/([A-Z])/g,Xs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||yt.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(rS,"-$1").toLowerCase())}},gl=function(t){for(var e=Sl.length,n=t.style,i=[],s=0;s<e;s++)i.push(Sl[s],n[Sl[s]]);return i.t=t,i},sS=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},bl={left:0,top:0},Op=function(t,e,n,i,s,a,o,l,c,h,u,d,f,_){ln(t)&&(t=t(l)),kn(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?vl("0"+t.substr(3),n):0));var g=f?f.time():0,p,m,w;if(f&&f.seek(0),isNaN(t)||(t=+t),Ia(t))f&&(t=yt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,t)),o&&yl(o,n,i,!0);else{ln(e)&&(e=e(l));var y=(t||"0").split(" "),S,A,E,T;w=mn(e,l)||ue,S=Bi(w)||{},(!S||!S.left&&!S.top)&&Kn(w).display==="none"&&(T=w.style.display,w.style.display="block",S=Bi(w),T?w.style.display=T:w.style.removeProperty("display")),A=vl(y[0],S[i.d]),E=vl(y[1]||"0",n),t=S[i.p]-c[i.p]-h+A+s-E,o&&yl(o,E,i,n-E<20||o._isStart&&E>20),n-=n-E}if(_&&(l[_]=t||-.001,t<0&&(t=0)),a){var L=t+n,v=a._isStart;p="scroll"+i.d2,yl(a,L,i,v&&L>20||!v&&(u?Math.max(ue[p],Vn[p]):a.parentNode[p])<=L+1),u&&(c=Bi(o),u&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Ge))}return f&&w&&(p=Bi(w),f.seek(d),m=Bi(w),f._caScrollDist=p[i.p]-m[i.p],t=t/f._caScrollDist*d),f&&f.seek(g),f?t:Math.round(t)},aS=/(webkit|moz|length|cssText|inset)/i,Fp=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===ue){t._stOrig=s.cssText,o=Kn(t);for(a in o)!+a&&!aS.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;yt.core.getCache(t).uncache=1,e.appendChild(t)}},rm=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},_l=function(t,e,n){var i={};i[e.p]="+="+n,yt.set(t,i)},Bp=function(t,e){var n=Oi(t,e),i="_scroll"+e.p2,s=function a(o,l,c,h,u){var d=a.tween,f=l.onComplete,_={};c=c||n();var g=rm(n,c,function(){d.kill(),a.tween=0});return u=h&&u||0,h=h||o-c,d&&d.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+h*d.ratio+u*d.ratio*d.ratio)},l.onUpdate=function(){$t.cache++,a.tween&&zi()},l.onComplete=function(){a.tween=0,f&&f.call(d)},d=a.tween=yt.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ze(t,"wheel",n.wheelHandler),Jt.isTouch&&Ze(t,"touchmove",n.wheelHandler),s},Jt=function(){function r(e,n){Hs||r.register(yt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Tu(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ra){this.update=this.refresh=this.kill=pi;return}n=Ip(kn(n)||Ia(n)||n.nodeType?{trigger:n}:n,pl);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,d=s.trigger,f=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,w=s.onSnapComplete,y=s.once,S=s.snap,A=s.pinReparent,E=s.pinSpacer,T=s.containerAnimation,L=s.fastScrollEnd,v=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?sn:Oe,P=!u&&u!==0,N=mn(n.scroller||te),F=yt.core.getCache(N),G=Xr(N),Z=("pinType"in n?n.pinType:Fi(N,"pinType")||G&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],q=P&&n.toggleActions.split(" "),V="markers"in n?n.markers:pl.markers,at=G?0:parseFloat(Kn(N)["border"+x.p2+Ys])||0,R=this,lt=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Ft=$M(N,G,x),Yt=KM(N,G),Y=0,tt=0,ht=0,ot=Oi(N,x),Tt,Ct,Ht,Qt,I,It,Nt,Wt,_t,H,Et,Ot,C,M,W,j,nt,$,bt,it,dt,Dt,rt,gt,Rt,Bt,mt,zt,Gt,le,U,J,K,Q,st,wt,Xt,me,ge;if(R._startClamp=R._endClamp=!1,R._dir=x,p*=45,R.scroller=N,R.scroll=T?T.time.bind(T):ot,Qt=ot(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Hp=1,n.refreshPriority===-9999&&(za=R)),F.tweenScroll=F.tweenScroll||{top:Bp(N,Oe),left:Bp(N,sn)},R.tweenTo=Tt=F.tweenScroll[x.p],R.scrubDuration=function(ct){K=Ia(ct)&&ct,K?J?J.duration(ct):J=yt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return m&&m(R)}}):(J&&J.progress(1).kill(),J=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(u),le=0,l||(l=i.vars.id)),S&&((!kr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in ue.style&&yt.set(G?[ue,Vn]:N,{scrollBehavior:"auto"}),$t.forEach(function(ct){return ln(ct)&&ct.target===(G?Me.scrollingElement||Vn:N)&&(ct.smooth=!1)}),Ht=ln(S.snapTo)?S.snapTo:S.snapTo==="labels"?jM(i):S.snapTo==="labelsDirectional"?tS(i):S.directional!==!1?function(ct,kt){return Ou(S.snapTo)(ct,on()-tt<500?0:kt.direction)}:yt.utils.snap(S.snapTo),Q=S.duration||{min:.1,max:2},Q=kr(Q)?Da(Q.min,Q.max):Da(Q,Q),st=yt.delayedCall(S.delay||K/2||.1,function(){var ct=ot(),kt=on()-tt<500,Pt=Tt.tween;if((kt||Math.abs(R.getVelocity())<10)&&!Pt&&!Al&&Y!==ct){var Vt=(ct-It)/M,Ee=i&&!P?i.totalProgress():Vt,jt=kt?0:(Ee-U)/(on()-Ca)*1e3||0,ve=yt.utils.clamp(-Vt,1-Vt,ks(jt/2)*jt/.185),Be=Vt+(S.inertia===!1?0:ve),Se,ye,fe=S,An=fe.onStart,b=fe.onInterrupt,D=fe.onComplete;if(Se=Ht(Be,R),Ia(Se)||(Se=Be),ye=Math.max(0,Math.round(It+Se*M)),ct<=Nt&&ct>=It&&ye!==ct){if(Pt&&!Pt._initted&&Pt.data<=ks(ye-ct))return;S.inertia===!1&&(ve=Se-Vt),Tt(ye,{duration:Q(ks(Math.max(ks(Be-Ee),ks(Se-Ee))*.185/jt/.05||0)),ease:S.ease||"power3",data:ks(ye-ct),onInterrupt:function(){return st.restart(!0)&&b&&b(R)},onComplete:function(){R.update(),Y=ot(),i&&!P&&(J?J.resetTo("totalProgress",Se,i._tTime/i._tDur):i.progress(Se)),le=U=i&&!P?i.totalProgress():R.progress,w&&w(R),D&&D(R)}},ct,ve*M,ye-ct-ve*M),An&&An(R,Tt.tween)}}else R.isActive&&Y!==ct&&st.restart(!0)}).pause()),l&&(Au[l]=R),d=R.trigger=mn(d||f!==!0&&f),ge=d&&d._gsap&&d._gsap.stRevert,ge&&(ge=ge(R)),f=f===!0?d:mn(f),kn(o)&&(o={targets:d,className:o}),f&&(_===!1||_===$n||(_=!_&&f.parentNode&&f.parentNode.style&&Kn(f.parentNode).display==="flex"?!1:Fe),R.pin=f,Ct=yt.core.getCache(f),Ct.spacer?W=Ct.pinState:(E&&(E=mn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ct.spacerIsNative=!!E,E&&(Ct.spacerState=gl(E))),Ct.spacer=$=E||Me.createElement("div"),$.classList.add("pin-spacer"),l&&$.classList.add("pin-spacer-"+l),Ct.pinState=W=gl(f)),n.force3D!==!1&&yt.set(f,{force3D:!0}),R.spacer=$=Ct.spacer,Gt=Kn(f),gt=Gt[_+x.os2],it=yt.getProperty(f),dt=yt.quickSetter(f,x.a,Ge),Mu(f,$,Gt),nt=gl(f)),V){Ot=kr(V)?Ip(V,Lp):Lp,H=ml("scroller-start",l,N,x,Ot,0),Et=ml("scroller-end",l,N,x,Ot,0,H),bt=H["offset"+x.op.d2];var ee=mn(Fi(N,"content")||N);Wt=this.markerStart=ml("start",l,ee,x,Ot,bt,0,T),_t=this.markerEnd=ml("end",l,ee,x,Ot,bt,0,T),T&&(me=yt.quickSetter([Wt,_t],x.a,Ge)),!Z&&!(oi.length&&Fi(N,"fixedMarkers")===!0)&&(QM(G?ue:N),yt.set([H,Et],{force3D:!0}),Bt=yt.quickSetter(H,x.a,Ge),zt=yt.quickSetter(Et,x.a,Ge))}if(T){var Ut=T.vars.onUpdate,St=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){R.update(0,0,1),Ut&&Ut.apply(T,St||[])})}if(R.previous=function(){return Kt[Kt.indexOf(R)-1]},R.next=function(){return Kt[Kt.indexOf(R)+1]},R.revert=function(ct,kt){if(!kt)return R.kill(!0);var Pt=ct!==!1||!R.enabled,Vt=an;Pt!==R.isReverted&&(Pt&&(wt=Math.max(ot(),R.scroll.rec||0),ht=R.progress,Xt=i&&i.progress()),Wt&&[Wt,_t,H,Et].forEach(function(Ee){return Ee.style.display=Pt?"none":"block"}),Pt&&(an=R,R.update(Pt)),f&&(!A||!R.isActive)&&(Pt?iS(f,$,W):Mu(f,$,Kn(f),Rt)),Pt||R.update(Pt),an=Vt,R.isReverted=Pt)},R.refresh=function(ct,kt,Pt,Vt){if(!((an||!R.enabled)&&!kt)){if(f&&ct&&Qn){Ze(r,"scrollEnd",jp);return}!xn&&lt&&lt(R),an=R,Tt.tween&&!Pt&&(Tt.tween.kill(),Tt.tween=0),J&&J.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Mt){return Mt.vars.immediateRender&&Mt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ee=Ft(),jt=Yt(),ve=T?T.duration():mi(N,x),Be=M<=.01||!M,Se=0,ye=Vt||0,fe=kr(Pt)?Pt.end:n.end,An=n.endTrigger||d,b=kr(Pt)?Pt.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),D=R.pinnedContainer=n.pinnedContainer&&mn(n.pinnedContainer,R),z=d&&Math.max(0,Kt.indexOf(R))||0,B=z,O,et,ut,vt,ft,xt,At,Lt,ae,pe,oe,ze,ie;for(V&&kr(Pt)&&(ze=yt.getProperty(H,x.p),ie=yt.getProperty(Et,x.p));B-- >0;)xt=Kt[B],xt.end||xt.refresh(0,1)||(an=R),At=xt.pin,At&&(At===d||At===f||At===D)&&!xt.isReverted&&(pe||(pe=[]),pe.unshift(xt),xt.revert(!0,!0)),xt!==Kt[B]&&(z--,B--);for(ln(b)&&(b=b(R)),b=Ap(b,"start",R),It=Op(b,d,Ee,x,ot(),Wt,H,R,jt,at,Z,ve,T,R._startClamp&&"_startClamp")||(f?-.001:0),ln(fe)&&(fe=fe(R)),kn(fe)&&!fe.indexOf("+=")&&(~fe.indexOf(" ")?fe=(kn(b)?b.split(" ")[0]:"")+fe:(Se=vl(fe.substr(2),Ee),fe=kn(b)?b:(T?yt.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,It):It)+Se,An=d)),fe=Ap(fe,"end",R),Nt=Math.max(It,Op(fe||(An?"100% 0":ve),An,Ee,x,ot()+Se,_t,Et,R,jt,at,Z,ve,T,R._endClamp&&"_endClamp"))||-.001,Se=0,B=z;B--;)xt=Kt[B]||{},At=xt.pin,At&&xt.start-xt._pinPush<=It&&!T&&xt.end>0&&(O=xt.end-(R._startClamp?Math.max(0,xt.start):xt.start),(At===d&&xt.start-xt._pinPush<It||At===D)&&isNaN(b)&&(Se+=O*(1-xt.progress)),At===f&&(ye+=O));if(It+=Se,Nt+=Se,R._startClamp&&(R._startClamp+=Se),R._endClamp&&!xn&&(R._endClamp=Nt||-.001,Nt=Math.min(Nt,mi(N,x))),M=Nt-It||(It-=.01)&&.001,Be&&(ht=yt.utils.clamp(0,1,yt.utils.normalize(It,Nt,wt))),R._pinPush=ye,Wt&&Se&&(O={},O[x.a]="+="+Se,D&&(O[x.p]="-="+ot()),yt.set([Wt,_t],O)),f&&!(Eu&&R.end>=mi(N,x)))O=Kn(f),vt=x===Oe,ut=ot(),Dt=parseFloat(it(x.a))+ye,!ve&&Nt>1&&(oe=(G?Me.scrollingElement||Vn:N).style,oe={style:oe,value:oe["overflow"+x.a.toUpperCase()]},G&&Kn(ue)["overflow"+x.a.toUpperCase()]!=="scroll"&&(oe.style["overflow"+x.a.toUpperCase()]="scroll")),Mu(f,$,O),nt=gl(f),et=Bi(f,!0),Lt=Z&&Oi(N,vt?sn:Oe)(),_?(Rt=[_+x.os2,M+ye+Ge],Rt.t=$,B=_===Fe?Tl(f,x)+M+ye:0,B&&(Rt.push(x.d,B+Ge),$.style.flexBasis!=="auto"&&($.style.flexBasis=B+Ge)),Xs(Rt),D&&Kt.forEach(function(Mt){Mt.pin===D&&Mt.vars.pinSpacing!==!1&&(Mt._subPinOffset=!0)}),Z&&ot(wt)):(B=Tl(f,x),B&&$.style.flexBasis!=="auto"&&($.style.flexBasis=B+Ge)),Z&&(ft={top:et.top+(vt?ut-It:Lt)+Ge,left:et.left+(vt?Lt:ut-It)+Ge,boxSizing:"border-box",position:"fixed"},ft[Hr]=ft["max"+Ys]=Math.ceil(et.width)+Ge,ft[Gr]=ft["max"+Nu]=Math.ceil(et.height)+Ge,ft[$n]=ft[$n+Fa]=ft[$n+Na]=ft[$n+Ba]=ft[$n+Oa]="0",ft[Fe]=O[Fe],ft[Fe+Fa]=O[Fe+Fa],ft[Fe+Na]=O[Fe+Na],ft[Fe+Ba]=O[Fe+Ba],ft[Fe+Oa]=O[Fe+Oa],j=sS(W,ft,A),xn&&ot(0)),i?(ae=i._initted,gu(1),i.render(i.duration(),!0,!0),rt=it(x.a)-Dt+M+ye,mt=Math.abs(M-rt)>1,Z&&mt&&j.splice(j.length-2,2),i.render(0,!0,!0),ae||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),gu(0)):rt=M,oe&&(oe.value?oe.style["overflow"+x.a.toUpperCase()]=oe.value:oe.style.removeProperty("overflow-"+x.a));else if(d&&ot()&&!T)for(et=d.parentNode;et&&et!==ue;)et._pinOffset&&(It-=et._pinOffset,Nt-=et._pinOffset),et=et.parentNode;pe&&pe.forEach(function(Mt){return Mt.revert(!1,!0)}),R.start=It,R.end=Nt,Qt=I=xn?wt:ot(),!T&&!xn&&(Qt<wt&&ot(wt),R.scroll.rec=0),R.revert(!1,!0),tt=on(),st&&(Y=-1,st.restart(!0)),an=0,i&&P&&(i._initted||Xt)&&i.progress()!==Xt&&i.progress(Xt||0,!0).render(i.time(),!0,!0),(Be||ht!==R.progress||T||g||i&&!i._initted)&&(i&&!P&&(i._initted||ht||i.vars.immediateRender!==!1)&&i.totalProgress(T&&It<-.001&&!ht?yt.utils.normalize(It,Nt,0):ht,!0),R.progress=Be||(Qt-It)/M===ht?0:ht),f&&_&&($._pinOffset=Math.round(R.progress*rt)),J&&J.invalidate(),isNaN(ze)||(ze-=yt.getProperty(H,x.p),ie-=yt.getProperty(Et,x.p),_l(H,x,ze),_l(Wt,x,ze-(Vt||0)),_l(Et,x,ie),_l(_t,x,ie-(Vt||0))),Be&&!xn&&R.update(),h&&!xn&&!C&&(C=!0,h(R),C=!1)}},R.getVelocity=function(){return(ot()-I)/(on()-Ca)*1e3||0},R.endAnimation=function(){Aa(R.callbackAnimation),i&&(J?J.progress(1):i.paused()?P||Aa(i,R.direction<0,1):Aa(i,i.reversed()))},R.labelToScroll=function(ct){return i&&i.labels&&(It||R.refresh()||It)+i.labels[ct]/i.duration()*M||0},R.getTrailing=function(ct){var kt=Kt.indexOf(R),Pt=R.direction>0?Kt.slice(0,kt).reverse():Kt.slice(kt+1);return(kn(ct)?Pt.filter(function(Vt){return Vt.vars.preventOverlaps===ct}):Pt).filter(function(Vt){return R.direction>0?Vt.end<=It:Vt.start>=Nt})},R.update=function(ct,kt,Pt){if(!(T&&!Pt&&!ct)){var Vt=xn===!0?wt:R.scroll(),Ee=ct?0:(Vt-It)/M,jt=Ee<0?0:Ee>1?1:Ee||0,ve=R.progress,Be,Se,ye,fe,An,b,D,z;if(kt&&(I=Qt,Qt=T?ot():Vt,S&&(U=le,le=i&&!P?i.totalProgress():jt)),p&&f&&!an&&!hl&&Qn&&(!jt&&It<Vt+(Vt-I)/(on()-Ca)*p?jt=1e-4:jt===1&&Nt>Vt+(Vt-I)/(on()-Ca)*p&&(jt=.9999)),jt!==ve&&R.enabled){if(Be=R.isActive=!!jt&&jt<1,Se=!!ve&&ve<1,b=Be!==Se,An=b||!!jt!=!!ve,R.direction=jt>ve?1:-1,R.progress=jt,An&&!an&&(ye=jt&&!ve?0:jt===1?1:ve===1?2:3,P&&(fe=!b&&q[ye+1]!=="none"&&q[ye+1]||q[ye],z=i&&(fe==="complete"||fe==="reset"||fe in i))),v&&(b||z)&&(z||u||!i)&&(ln(v)?v(R):R.getTrailing(v).forEach(function(ut){return ut.endAnimation()})),P||(J&&!an&&!hl?(J._dp._time-J._start!==J._time&&J.render(J._dp._time-J._start),J.resetTo?J.resetTo("totalProgress",jt,i._tTime/i._tDur):(J.vars.totalProgress=jt,J.invalidate().restart())):i&&i.totalProgress(jt,!!(an&&(tt||ct)))),f){if(ct&&_&&($.style[_+x.os2]=gt),!Z)dt(Pa(Dt+rt*jt));else if(An){if(D=!ct&&jt>ve&&Nt+1>Vt&&Vt+1>=mi(N,x),A)if(!ct&&(Be||D)){var B=Bi(f,!0),O=Vt-It;Fp(f,ue,B.top+(x===Oe?O:0)+Ge,B.left+(x===Oe?0:O)+Ge)}else Fp(f,$);Xs(Be||D?j:nt),mt&&jt<1&&Be||dt(Dt+(jt===1&&!D?rt:0))}}S&&!Tt.tween&&!an&&!hl&&st.restart(!0),o&&(b||y&&jt&&(jt<1||!_u))&&ka(o.targets).forEach(function(ut){return ut.classList[Be||y?"add":"remove"](o.className)}),a&&!P&&!ct&&a(R),An&&!an?(P&&(z&&(fe==="complete"?i.pause().totalProgress(1):fe==="reset"?i.restart(!0).pause():fe==="restart"?i.restart(!0):i[fe]()),a&&a(R)),(b||!_u)&&(c&&b&&vu(R,c),k[ye]&&vu(R,k[ye]),y&&(jt===1?R.kill(!1,1):k[ye]=0),b||(ye=jt===1?1:3,k[ye]&&vu(R,k[ye]))),L&&!Be&&Math.abs(R.getVelocity())>(Ia(L)?L:2500)&&(Aa(R.callbackAnimation),J?J.progress(1):Aa(i,fe==="reverse"?1:!jt,1))):P&&a&&!an&&a(R)}if(zt){var et=T?Vt/T.duration()*(T._caScrollDist||0):Vt;Bt(et+(H._isFlipped?1:0)),zt(et)}me&&me(-Vt/T.duration()*(T._caScrollDist||0))}},R.enable=function(ct,kt){R.enabled||(R.enabled=!0,Ze(N,"resize",La),G||Ze(N,"scroll",Vs),lt&&Ze(r,"refreshInit",lt),ct!==!1&&(R.progress=ht=0,Qt=I=Y=ot()),kt!==!1&&R.refresh())},R.getTween=function(ct){return ct&&Tt?Tt.tween:J},R.setPositions=function(ct,kt,Pt,Vt){if(T){var Ee=T.scrollTrigger,jt=T.duration(),ve=Ee.end-Ee.start;ct=Ee.start+ve*ct/jt,kt=Ee.start+ve*kt/jt}R.refresh(!1,!1,{start:Cp(ct,Pt&&!!R._startClamp),end:Cp(kt,Pt&&!!R._endClamp)},Vt),R.update()},R.adjustPinSpacing=function(ct){if(Rt&&ct){var kt=Rt.indexOf(x.d)+1;Rt[kt]=parseFloat(Rt[kt])+ct+Ge,Rt[1]=parseFloat(Rt[1])+ct+Ge,Xs(Rt)}},R.disable=function(ct,kt){if(ct!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,kt||J&&J.pause(),wt=0,Ct&&(Ct.uncache=1),lt&&qe(r,"refreshInit",lt),st&&(st.pause(),Tt.tween&&Tt.tween.kill()&&(Tt.tween=0)),!G)){for(var Pt=Kt.length;Pt--;)if(Kt[Pt].scroller===N&&Kt[Pt]!==R)return;qe(N,"resize",La),G||qe(N,"scroll",Vs)}},R.kill=function(ct,kt){R.disable(ct,kt),J&&!kt&&J.kill(),l&&delete Au[l];var Pt=Kt.indexOf(R);Pt>=0&&Kt.splice(Pt,1),Pt===_n&&Ml>0&&_n--,Pt=0,Kt.forEach(function(Vt){return Vt.scroller===R.scroller&&(Pt=1)}),Pt||xn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,ct&&i.revert({kill:!1}),kt||i.kill()),Wt&&[Wt,_t,H,Et].forEach(function(Vt){return Vt.parentNode&&Vt.parentNode.removeChild(Vt)}),za===R&&(za=0),f&&(Ct&&(Ct.uncache=1),Pt=0,Kt.forEach(function(Vt){return Vt.pin===f&&Pt++}),Pt||(Ct.spacer=0)),n.onKill&&n.onKill(R)},Kt.push(R),R.enable(!1,!1),ge&&ge(R),i&&i.add&&!M){var se=R.update;R.update=function(){R.update=se,$t.cache++,It||Nt||R.refresh()},yt.delayedCall(.01,R.update),M=.01,It=Nt=0}else R.refresh();f&&nS()},r.register=function(n){return Hs||(yt=n||qp(),Yp()&&window.document&&r.enable(),Hs=Ra),Hs},r.defaults=function(n){if(n)for(var i in n)pl[i]=n[i];return pl},r.disable=function(n,i){Ra=0,Kt.forEach(function(a){return a[i?"kill":"disable"](n)}),qe(te,"wheel",Vs),qe(Me,"scroll",Vs),clearInterval(cl),qe(Me,"touchcancel",pi),qe(ue,"touchstart",pi),fl(qe,Me,"pointerdown,touchstart,mousedown",Rp),fl(qe,Me,"pointerup,touchend,mouseup",Pp),wl.kill(),ul(qe);for(var s=0;s<$t.length;s+=3)dl(qe,$t[s],$t[s+1]),dl(qe,$t[s],$t[s+2])},r.enable=function(){if(te=window,Me=document,Vn=Me.documentElement,ue=Me.body,yt&&(ka=yt.utils.toArray,Da=yt.utils.clamp,Tu=yt.core.context||pi,gu=yt.core.suppressOverwrites||pi,Iu=te.history.scrollRestoration||"auto",Cu=te.pageYOffset||0,yt.core.globals("ScrollTrigger",r),ue)){Ra=1,Ws=document.createElement("div"),Ws.style.height="100vh",Ws.style.position="absolute",im(),JM(),Le.register(yt),r.isTouch=Le.isTouch,ur=Le.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),wu=Le.isTouch===1,Ze(te,"wheel",Vs),Pu=[te,Me,Vn,ue],yt.matchMedia?(r.matchMedia=function(c){var h=yt.matchMedia(),u;for(u in c)h.add(u,c[u]);return h},yt.addEventListener("matchMediaInit",function(){em(),Fu()}),yt.addEventListener("matchMediaRevert",function(){return tm()}),yt.addEventListener("matchMedia",function(){Vr(0,1),qr("matchMedia")}),yt.matchMedia().add("(orientation: portrait)",function(){return yu(),yu})):console.warn("Requires GSAP 3.11.0 or later"),yu(),Ze(Me,"scroll",Vs);var n=ue.hasAttribute("style"),i=ue.style,s=i.borderTopStyle,a=yt.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Bi(ue),Oe.m=Math.round(o.top+Oe.sc())||0,sn.m=Math.round(o.left+sn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ue.setAttribute("style",""),ue.removeAttribute("style")),cl=setInterval(Dp,250),yt.delayedCall(.5,function(){return hl=0}),Ze(Me,"touchcancel",pi),Ze(ue,"touchstart",pi),fl(Ze,Me,"pointerdown,touchstart,mousedown",Rp),fl(Ze,Me,"pointerup,touchend,mouseup",Pp),bu=yt.utils.checkPrefix("transform"),Sl.push(bu),Hs=on(),wl=yt.delayedCall(.2,Vr).pause(),Gs=[Me,"visibilitychange",function(){var c=te.innerWidth,h=te.innerHeight;Me.hidden?(Tp=c,Ep=h):(Tp!==c||Ep!==h)&&La()},Me,"DOMContentLoaded",Vr,te,"load",Vr,te,"resize",La],ul(Ze),Kt.forEach(function(c){return c.enable(0,1)}),l=0;l<$t.length;l+=3)dl(qe,$t[l],$t[l+1]),dl(qe,$t[l],$t[l+2])}},r.config=function(n){"limitCallbacks"in n&&(_u=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(cl)||(cl=i)&&setInterval(Dp,i),"ignoreMobileResize"in n&&(wu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ul(qe)||ul(Ze,n.autoRefreshEvents||"none"),Gp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=mn(n),a=$t.indexOf(s),o=Xr(s);~a&&$t.splice(a,o?6:2),i&&(o?oi.unshift(te,i,ue,i,Vn,i):oi.unshift(s,i))},r.clearMatchMedia=function(n){Kt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(kn(n)?mn(n):n).getBoundingClientRect(),o=a[s?Hr:Gr]*i||0;return s?a.right-o>0&&a.left+o<te.innerWidth:a.bottom-o>0&&a.top+o<te.innerHeight},r.positionInViewport=function(n,i,s){kn(n)&&(n=mn(n));var a=n.getBoundingClientRect(),o=a[s?Hr:Gr],l=i==null?o/2:i in El?El[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/te.innerWidth:(a.top+l)/te.innerHeight},r.killAll=function(n){if(Kt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Yr.killAll||[];Yr={},i.forEach(function(s){return s()})}},r}();Jt.version="3.14.2";Jt.saveStyles=function(r){return r?ka(r).forEach(function(t){if(t&&t.style){var e=zn.indexOf(t);e>=0&&zn.splice(e,5),zn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),yt.core.getCache(t),Tu())}}):zn};Jt.revert=function(r,t){return Fu(!r,t)};Jt.create=function(r,t){return new Jt(r,t)};Jt.refresh=function(r){return r?La(!0):(Hs||Jt.register())&&Vr(!0)};Jt.update=function(r){return++$t.cache&&zi(r===!0?2:0)};Jt.clearScrollMemory=nm;Jt.maxScroll=function(r,t){return mi(r,t?sn:Oe)};Jt.getScrollFunc=function(r,t){return Oi(mn(r),t?sn:Oe)};Jt.getById=function(r){return Au[r]};Jt.getAll=function(){return Kt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Jt.isScrolling=function(){return!!Qn};Jt.snapDirectional=Ou;Jt.addEventListener=function(r,t){var e=Yr[r]||(Yr[r]=[]);~e.indexOf(t)||e.push(t)};Jt.removeEventListener=function(r,t){var e=Yr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Jt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,h){var u=[],d=[],f=yt.delayedCall(i,function(){h(u,d),u=[],d=[]}).pause();return function(_){u.length||f.restart(!0),u.push(_.trigger),d.push(_),s<=u.length&&f.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&ln(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return ln(s)&&(s=s(),Ze(Jt,"refresh",function(){return s=t.batchMax()})),ka(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(Jt.create(c))}),e};var zp=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Su=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Le.isTouch?" pinch-zoom":""):"none",t===Vn&&r(ue,e)},xl={auto:1,scroll:1},oS=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||yt.core.getCache(s),o=on(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==ue&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(xl[(l=Kn(s)).overflowY]||xl[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Xr(s)&&(xl[(l=Kn(s)).overflowY]||xl[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},sm=function(t,e,n,i){return Le.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&oS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ze(Me,Le.eventTypes[0],Vp,!1,!0)},onDisable:function(){return qe(Me,Le.eventTypes[0],Vp,!0)}})},lS=/(input|label|select|textarea)/i,kp,Vp=function(t){var e=lS.test(t.target.tagName);(e||kp)&&(t._gsapAllow=!0,kp=e)},cS=function(t){kr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=mn(t.target)||Vn,h=yt.core.globals().ScrollSmoother,u=h&&h.get(),d=ur&&(t.content&&mn(t.content)||u&&t.content!==!1&&!u.smooth()&&u.content()),f=Oi(c,Oe),_=Oi(c,sn),g=1,p=(Le.isTouch&&te.visualViewport?te.visualViewport.scale*te.visualViewport.width:te.outerWidth)/te.innerWidth,m=0,w=ln(i)?function(){return i(o)}:function(){return i||2.8},y,S,A=sm(c,t.type,!0,s),E=function(){return S=!1},T=pi,L=pi,v=function(){l=mi(c,Oe),L=Da(ur?1:0,l),n&&(T=Da(0,mi(c,sn))),y=Wr},x=function(){d._gsap.y=Pa(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(S){requestAnimationFrame(E);var V=Pa(o.deltaY/2),at=L(f.v-V);if(d&&at!==f.v+f.offset){f.offset=at-f.v;var R=Pa((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",d._gsap.y=R+"px",f.cacheID=$t.cache,zi()}return!0}f.offset&&x(),S=!0},N,F,G,Z,k=function(){v(),N.isActive()&&N.vars.scrollY>l&&(f()>l?N.progress(1)&&f(l):N.resetTo("scrollY",l))};return d&&yt.set(d,{y:"+=0"}),t.ignoreCheck=function(q){return ur&&q.type==="touchmove"&&P(q)||g>1.05&&q.type!=="touchstart"||o.isGesturing||q.touches&&q.touches.length>1},t.onPress=function(){S=!1;var q=g;g=Pa((te.visualViewport&&te.visualViewport.scale||1)/p),N.pause(),q!==g&&Su(c,g>1.01?!0:n?!1:"x"),F=_(),G=f(),v(),y=Wr},t.onRelease=t.onGestureStart=function(q,V){if(f.offset&&x(),!V)Z.restart(!0);else{$t.cache++;var at=w(),R,lt;n&&(R=_(),lt=R+at*.05*-q.velocityX/.227,at*=zp(_,R,lt,mi(c,sn)),N.vars.scrollX=T(lt)),R=f(),lt=R+at*.05*-q.velocityY/.227,at*=zp(f,R,lt,mi(c,Oe)),N.vars.scrollY=L(lt),N.invalidate().duration(at).play(.01),(ur&&N.vars.scrollY>=l||R>=l-1)&&yt.to({},{onUpdate:k,duration:at})}a&&a(q)},t.onWheel=function(){N._ts&&N.pause(),on()-m>1e3&&(y=0,m=on())},t.onChange=function(q,V,at,R,lt){if(Wr!==y&&v(),V&&n&&_(T(R[2]===V?F+(q.startX-q.x):_()+V-R[1])),at){f.offset&&x();var Ft=lt[2]===at,Yt=Ft?G+q.startY-q.y:f()+at-lt[1],Y=L(Yt);Ft&&Yt!==Y&&(G+=Y-Yt),f(Y)}(at||V)&&zi()},t.onEnable=function(){Su(c,n?!1:"x"),Jt.addEventListener("refresh",k),Ze(te,"resize",k),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),A.enable()},t.onDisable=function(){Su(c,!0),qe(te,"resize",k),Jt.removeEventListener("refresh",k),A.kill()},t.lockAxis=t.lockAxis!==!1,o=new Le(t),o.iOS=ur,ur&&!f()&&f(1),ur&&yt.ticker.add(pi),Z=o._dc,N=yt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:rm(f,f(),function(){return N.pause()})},onUpdate:zi,onComplete:Z.vars.onComplete}),o};Jt.sort=function(r){if(ln(r))return Kt.sort(r);var t=te.pageYOffset||0;return Jt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+te.innerHeight}),Kt.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Jt.observe=function(r){return new Le(r)};Jt.normalizeScroll=function(r){if(typeof r>"u")return gn;if(r===!0&&gn)return gn.enable();if(r===!1){gn&&gn.kill(),gn=r;return}var t=r instanceof Le?r:cS(r);return gn&&gn.target===t.target&&gn.kill(),Xr(t.target)&&(gn=t),t};Jt.core={_getVelocityProp:ll,_inputObserver:sm,_scrollers:$t,_proxies:oi,bridge:{ss:function(){Qn||qr("scrollStart"),Qn=on()},ref:function(){return an}}};qp()&&yt.registerPlugin(Jt);Sa.registerPlugin(Jt);var hS=`
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,uS=`
  varying vec2 vUv;
  uniform float dispFactor1;  // 0.0 \u2192 1.0 f\xFCr Bild 1 \u2192 Bild 2
  uniform float dispFactor2;  // 0.0 \u2192 1.0 f\xFCr Bild 2 \u2192 Bild 3
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
  
  // Transformiert UV-Koordinaten f\xFCr "cover"-Verhalten (wie CSS background-size: cover)
  vec2 coverUV(vec2 uv, vec2 canvasSize, vec2 textureSize) {
    float canvasAspect = canvasSize.x / canvasSize.y;
    float textureAspect = textureSize.x / textureSize.y;
    
    vec2 scale = vec2(1.0);
    if (canvasAspect > textureAspect) {
      // Canvas ist breiter als Textur \u2192 skaliere entlang Y
      scale.y = textureAspect / canvasAspect;
    } else {
      // Canvas ist h\xF6her als Textur \u2192 skaliere entlang X
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
    // Erster \xDCbergang: Bild 1 \u2192 Bild 2 (38% \u2192 48%)
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
    // Zweiter \xDCbergang: Bild 2 \u2192 Bild 3 (63% \u2192 73%)
    else if (dispFactor2 > 0.0 && dispFactor2 < 1.0) {
      vec2 coverUV2 = coverUV(vUv, resolution, texture2Size);
      vec2 coverUV3 = coverUV(vUv, resolution, texture3Size);
      vec2 dispPos2 = coverUV2 + getRotM(angle1) * dispVec * intensity1 * dispFactor2;
      vec2 dispPos3 = coverUV3 + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor2);
      vec4 tex2 = texture2D(texture2, dispPos2);
      vec4 tex3 = texture2D(texture3, dispPos3);
      finalColor = mix(tex2, tex3, dispFactor2);
    }
    // Nach 73%: Nur Bild 3 anzeigen (beide \xDCberg\xE4nge abgeschlossen)
    else {
      vec2 coverUV3 = coverUV(vUv, resolution, texture3Size);
      finalColor = texture2D(texture3, coverUV3);
    }
    
    gl_FragColor = finalColor;
  }
`,Bu=class extends HTMLElement{constructor(){super(),this.scene=null,this.camera=null,this.renderer=null,this.mesh=null,this.material=null,this.geometry=null,this.loader=null,this.texture1=null,this.texture2=null,this.texture3=null,this.displacement=null,this.texture1Size=null,this.texture2Size=null,this.texture3Size=null,this.scrollTrigger=null,this._resizeHandler=null,this._resizeTimeout=null}connectedCallback(){this.style.display="block",this.style.width="100%",this.style.height="100%",this.style.minHeight="600px",this.style.position="relative",this.style.overflow="hidden",this.init("https://cdn.prod.website-files.com/691dda446874d92d72af7d03/696b998ca6fd3a1267e1342b_image%20315.avif","https://cdn.prod.website-files.com/691dda446874d92d72af7d03/696b998c9085c8dc397ba853_image%20321.avif","https://cdn.prod.website-files.com/691dda446874d92d72af7d03/696b998c52fe6011f65559df_image%20322.avif","https://static.wixstatic.com/media/914fc7_b081dc87e37041d8a6d47a325f51d521~mv2.jpeg")}disconnectedCallback(){this.cleanup()}init(t,e,n,i){this.scene=new No,this.setCamera(),this.setRenderer(),this.setLoader(),this.appendChild(this.renderer.domElement),this.loadTextures(t,e,n,i)}setCamera(){let t=this.offsetWidth||this.clientWidth||512,e=this.offsetHeight||this.clientHeight||512;return this.camera=new sa(t/-2,t/2,e/2,e/-2,1,1e3),this.camera.position.z=1,this}setRenderer(){this.renderer=new Uo({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setClearColor(0,0);let t=this.offsetWidth||this.clientWidth||512,e=this.offsetHeight||this.clientHeight||512;return this.renderer.setSize(t,e),this.renderer.domElement.style.display="block",this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.position="absolute",this.renderer.domElement.style.top="0",this.renderer.domElement.style.left="0",this._resizeHandler=()=>{this._resizeTimeout&&clearTimeout(this._resizeTimeout),this._resizeTimeout=setTimeout(()=>{this.updateSize()},100)},window.addEventListener("resize",this._resizeHandler),window.ResizeObserver&&new ResizeObserver(()=>{this.updateSize()}).observe(this),this}updateSize(){let t=this.offsetWidth||this.clientWidth||512,e=this.offsetHeight||this.clientHeight||512;if(t===0||e===0){setTimeout(()=>this.updateSize(),50);return}this.renderer&&this.renderer.setSize(t,e),this.camera&&(this.camera.left=t/-2,this.camera.right=t/2,this.camera.top=e/2,this.camera.bottom=e/-2,this.camera.updateProjectionMatrix()),this.geometry&&this.mesh&&(this.geometry.dispose(),this.geometry=new Er(t,e,1,1),this.mesh.geometry=this.geometry),this.material&&this.material.uniforms.resolution.value.set(t,e)}setLoader(){return this.loader=new Fo,this.loader.setCrossOrigin(""),this}loadTextures(t,e,n,i){if(!this.loader)return;let s=0,a=4,o=()=>{s++,s===a&&this.onAllTexturesLoaded()};this.texture1=this.loader.load(t,l=>{l.image&&(this.texture1Size=new ne(l.image.width,l.image.height),this.material&&this.material.uniforms.texture1Size&&(this.material.uniforms.texture1Size.value=this.texture1Size)),o()}),this.texture1.minFilter=hn,this.texture2=this.loader.load(e,l=>{l.image&&(this.texture2Size=new ne(l.image.width,l.image.height),this.material&&this.material.uniforms.texture2Size&&(this.material.uniforms.texture2Size.value=this.texture2Size)),o()}),this.texture2.minFilter=hn,this.texture3=this.loader.load(n,l=>{l.image&&(this.texture3Size=new ne(l.image.width,l.image.height),this.material&&this.material.uniforms.texture3Size&&(this.material.uniforms.texture3Size.value=this.texture3Size)),o()}),this.texture3.minFilter=hn,this.displacement=this.loader.load(i,o),this.displacement.wrapS=this.displacement.wrapT=ta}onAllTexturesLoaded(){setTimeout(()=>{this.updateSize()},100),this.setMaterial(),this.setGeometry(),this.setMesh(),this.scene.add(this.mesh),this.setupScrollTrigger(),this.render()}setMaterial(){let t=this.offsetWidth||this.clientWidth||512,e=this.offsetHeight||this.clientHeight||512,n=new ne(t,e);return this.material=new Yn({fragmentShader:uS,uniforms:{intensity1:{type:"f",value:.25},intensity2:{type:"f",value:.25},dispFactor1:{type:"f",value:0},dispFactor2:{type:"f",value:0},angle1:{type:"f",value:Math.PI/4},angle2:{type:"f",value:-Math.PI/4*3},texture1:{type:"t",value:this.texture1},texture2:{type:"t",value:this.texture2},texture3:{type:"t",value:this.texture3},disp:{type:"t",value:this.displacement},resolution:{value:new ne(t,e)},texture1Size:{value:this.texture1Size||n.clone()},texture2Size:{value:this.texture2Size||n.clone()},texture3Size:{value:this.texture3Size||n.clone()}},vertexShader:hS}),this.texture1Size&&(this.material.uniforms.texture1Size.value=this.texture1Size),this.texture2Size&&(this.material.uniforms.texture2Size.value=this.texture2Size),this.texture3Size&&(this.material.uniforms.texture3Size.value=this.texture3Size),this}setGeometry(){let t=this.offsetWidth||this.clientWidth||512,e=this.offsetHeight||this.clientHeight||512;return this.geometry=new Er(t,e,1,1),this}setMesh(){return this.mesh=new Ln(this.geometry,this.material),this}setupScrollTrigger(){if(console.log("[DisplacementTrigger] setupScrollTrigger called"),!this.material){console.error("[DisplacementTrigger] Material not available");return}if(!Jt){console.error("[DisplacementTrigger] ScrollTrigger not available");return}let t=document.querySelector(".threeTrigger");if(!t){console.warn('[DisplacementTrigger] Element with class "threeTrigger" not found, retrying...'),setTimeout(()=>{this.setupScrollTrigger()},500);return}console.log("[DisplacementTrigger] Trigger element found:",t),console.log("[DisplacementTrigger] Trigger element bounds:",t.getBoundingClientRect());let e=[{progress:0,dispFactor1:0,dispFactor2:0},{progress:.3,dispFactor1:0,dispFactor2:0},{progress:.35,dispFactor1:1,dispFactor2:0},{progress:.6,dispFactor1:1,dispFactor2:0},{progress:.65,dispFactor1:1,dispFactor2:1},{progress:1,dispFactor1:1,dispFactor2:1}];console.log("[DisplacementTrigger] Steps defined:",e);let n=i=>{let s=null,a=null;for(let o=0;o<e.length-1;o++)if(i>=e[o].progress&&i<=e[o+1].progress){s=e[o],a=e[o+1];break}if(s&&a){let o=(i-s.progress)/(a.progress-s.progress),l=Sa.utils.interpolate(s.dispFactor1,a.dispFactor1,o),c=Sa.utils.interpolate(s.dispFactor2,a.dispFactor2,o);this.material.uniforms.dispFactor1.value=l,this.material.uniforms.dispFactor2.value=c,(Math.floor(i*100)%5===0||i===0||i===1)&&console.log(`[DisplacementTrigger] Progress: ${(i*100).toFixed(2)}% | dispFactor1: ${l.toFixed(3)} | dispFactor2: ${c.toFixed(3)} | Step: ${s.progress} \u2192 ${a.progress}`),this.render()}else{let o=e[e.length-1];this.material.uniforms.dispFactor1.value=o.dispFactor1,this.material.uniforms.dispFactor2.value=o.dispFactor2,console.warn(`[DisplacementTrigger] No step found for progress ${i}, using fallback values`),this.render()}};console.log("[DisplacementTrigger] Initializing with progress 0.0"),n(0),console.log("[DisplacementTrigger] Creating ScrollTrigger with:",{trigger:t,start:"top top",end:"bottom top",scrub:!0,markers:!0}),this.scrollTrigger=Jt.create({trigger:t,start:"top top",end:"bottom top",scrub:!0,markers:!0,onUpdate:i=>{let s=i.progress;n(s)},onEnter:()=>{console.log("[DisplacementTrigger] ScrollTrigger entered")},onLeave:()=>{console.log("[DisplacementTrigger] ScrollTrigger left")},onEnterBack:()=>{console.log("[DisplacementTrigger] ScrollTrigger entered back")},onLeaveBack:()=>{console.log("[DisplacementTrigger] ScrollTrigger left back")}}),console.log("[DisplacementTrigger] ScrollTrigger created:",this.scrollTrigger),console.log("[DisplacementTrigger] ScrollTrigger start:",this.scrollTrigger.start),console.log("[DisplacementTrigger] ScrollTrigger end:",this.scrollTrigger.end)}render(){this.scene&&this.camera&&this.renderer&&this.renderer.render(this.scene,this.camera)}cleanup(){this.scrollTrigger&&(this.scrollTrigger.kill(),this.scrollTrigger=null),this._resizeHandler&&window.removeEventListener("resize",this._resizeHandler),this._resizeTimeout&&(clearTimeout(this._resizeTimeout),this._resizeTimeout=null),this.texture1&&this.texture1.dispose(),this.texture2&&this.texture2.dispose(),this.texture3&&this.texture3.dispose(),this.displacement&&this.displacement.dispose(),this.material&&this.material.dispose(),this.geometry&&this.geometry.dispose(),this.mesh&&(this.scene.remove(this.mesh),this.mesh=null),this.renderer&&(this.renderer.dispose(),this.renderer=null),this.scene&&(this.scene.clear(),this.scene=null)}};customElements.define("displacement-trigger",Bu);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.14.2
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.14.2
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.14.2
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.14.2
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
