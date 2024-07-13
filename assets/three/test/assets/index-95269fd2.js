(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rs="162",Kc=0,ea=1,Zc=2,Lo=1,$c=2,en=3,vn=0,yt=1,tn=2,mn=0,li=1,ta=2,na=3,ia=4,Jc=5,Pn=100,Qc=101,el=102,ra=103,sa=104,tl=200,nl=201,il=202,rl=203,_s=204,gs=205,sl=206,al=207,ol=208,cl=209,ll=210,hl=211,ul=212,dl=213,fl=214,pl=0,ml=1,_l=2,mr=3,gl=4,vl=5,xl=6,Ml=7,Io=0,Sl=1,yl=2,_n=0,El=1,bl=2,Tl=3,Al=4,wl=5,Rl=6,Cl=7,Uo=300,ui=301,di=302,vs=303,xs=304,br=306,Ms=1e3,Ft=1001,Ss=1002,dt=1003,aa=1004,yi=1005,St=1006,Or=1007,Ln=1008,gn=1009,Pl=1010,Dl=1011,Cs=1012,No=1013,fn=1014,Xt=1015,Li=1016,Oo=1017,Fo=1018,Un=1020,Ll=1021,Bt=1023,Il=1024,Ul=1025,Nn=1026,fi=1027,Bo=1028,zo=1029,Nl=1030,Go=1031,Ho=1033,Fr=33776,Br=33777,zr=33778,Gr=33779,oa=35840,ca=35841,la=35842,ha=35843,ko=36196,ua=37492,da=37496,fa=37808,pa=37809,ma=37810,_a=37811,ga=37812,va=37813,xa=37814,Ma=37815,Sa=37816,ya=37817,Ea=37818,ba=37819,Ta=37820,Aa=37821,Hr=36492,wa=36494,Ra=36495,Ol=36283,Ca=36284,Pa=36285,Da=36286,Fl=3200,Bl=3201,Vo=0,zl=1,dn="",Vt="srgb",Mn="srgb-linear",Ps="display-p3",Tr="display-p3-linear",_r="linear",Ke="srgb",gr="rec709",vr="p3",Hn=7680,La=519,Gl=512,Hl=513,kl=514,Wo=515,Vl=516,Wl=517,Xl=518,ql=519,Ia=35044,Yl=35048,Ua="300 es",ys=1035,rn=2e3,xr=2001;class Bn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Na=1234567;const Ci=Math.PI/180,Ii=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function Ds(i,e){return(i%e+e)%e}function jl(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Kl(i,e,t){return i!==e?(t-i)/(e-i):0}function Pi(i,e,t){return(1-t)*i+t*e}function Zl(i,e,t,n){return Pi(i,e,1-Math.exp(-t*n))}function $l(i,e=1){return e-Math.abs(Ds(i,e*2)-e)}function Jl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ql(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function eh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function th(i,e){return i+Math.random()*(e-i)}function nh(i){return i*(.5-Math.random())}function ih(i){i!==void 0&&(Na=i);let e=Na+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rh(i){return i*Ci}function sh(i){return i*Ii}function Es(i){return(i&i-1)===0&&i!==0}function ah(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function oh(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),d=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*h,c*d,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ch={DEG2RAD:Ci,RAD2DEG:Ii,generateUUID:mi,clamp:xt,euclideanModulo:Ds,mapLinear:jl,inverseLerp:Kl,lerp:Pi,damp:Zl,pingpong:$l,smoothstep:Jl,smootherstep:Ql,randInt:eh,randFloat:th,randFloatSpread:nh,seededRandom:ih,degToRad:rh,radToDeg:sh,isPowerOfTwo:Es,ceilPowerOfTwo:ah,floorPowerOfTwo:Mr,setQuaternionFromProperEuler:oh,normalize:gt,denormalize:si};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,n,r,s,o,a,c,l){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],M=r[0],p=r[3],u=r[6],T=r[1],S=r[4],b=r[7],D=r[2],w=r[5],A=r[8];return s[0]=o*M+a*T+c*D,s[3]=o*p+a*S+c*w,s[6]=o*u+a*b+c*A,s[1]=l*M+h*T+d*D,s[4]=l*p+h*S+d*w,s[7]=l*u+h*b+d*A,s[2]=f*M+m*T+g*D,s[5]=f*p+m*S+g*w,s[8]=f*u+m*b+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,f=a*c-h*s,m=l*s-o*c,g=t*d+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=d*M,e[1]=(r*l-h*n)*M,e[2]=(a*n-r*o)*M,e[3]=f*M,e[4]=(h*t-r*c)*M,e[5]=(r*s-a*t)*M,e[6]=m*M,e[7]=(n*c-l*t)*M,e[8]=(o*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kr.makeScale(e,t)),this}rotate(e){return this.premultiply(kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new Ue;function Xo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lh(){const i=Sr("canvas");return i.style.display="block",i}const Oa={};function hh(i){i in Oa||(Oa[i]=!0,console.warn(i))}const Fa=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ba=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zi={[Mn]:{transfer:_r,primaries:gr,toReference:i=>i,fromReference:i=>i},[Vt]:{transfer:Ke,primaries:gr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Tr]:{transfer:_r,primaries:vr,toReference:i=>i.applyMatrix3(Ba),fromReference:i=>i.applyMatrix3(Fa)},[Ps]:{transfer:Ke,primaries:vr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ba),fromReference:i=>i.applyMatrix3(Fa).convertLinearToSRGB()}},uh=new Set([Mn,Tr]),qe={enabled:!0,_workingColorSpace:Mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!uh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=zi[e].toReference,r=zi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return zi[i].primaries},getTransfer:function(i){return i===dn?_r:zi[i].transfer}};function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let kn;class qo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{kn===void 0&&(kn=Sr("canvas")),kn.width=e.width,kn.height=e.height;const n=kn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=kn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dh=0;class Yo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wr(r[o].image)):s.push(Wr(r[o]))}else s=Wr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fh=0;class Mt extends Bn{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=Ft,r=Ft,s=St,o=Ln,a=Bt,c=gn,l=Mt.DEFAULT_ANISOTROPY,h=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=mi(),this.name="",this.source=new Yo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ms:e.x=e.x-Math.floor(e.x);break;case Ft:e.x=e.x<0?0:1;break;case Ss:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ms:e.y=e.y-Math.floor(e.y);break;case Ft:e.y=e.y<0?0:1;break;case Ss:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Uo;Mt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],g=c[9],M=c[2],p=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+M)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,b=(m+1)/2,D=(u+1)/2,w=(h+f)/4,A=(d+M)/4,G=(g+p)/4;return S>b&&S>D?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=w/n,s=A/n):b>D?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=w/r,s=G/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=A/s,r=G/s),this.set(n,r,s,t),this}let T=Math.sqrt((p-g)*(p-g)+(d-M)*(d-M)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(d-M)/T,this.z=(f-h)/T,this.w=Math.acos((l+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ph extends Bn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Mt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends ph{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jo extends Mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=dt,this.minFilter=dt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mh extends Mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=dt,this.minFilter=dt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],d=n[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],M=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=M;return}if(d!==M||c!==f||l!==m||h!==g){let p=1-a;const u=c*f+l*m+h*g+d*M,T=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const D=Math.sqrt(S),w=Math.atan2(D,u*T);p=Math.sin(p*w)/D,a=Math.sin(a*w)/D}const b=a*T;if(c=c*p+f*b,l=l*p+m*b,h=h*p+g*b,d=d*p+M*b,p===1-a){const D=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=D,l*=D,h*=D,d*=D}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],d=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*d+c*m-l*f,e[t+1]=c*g+h*f+l*d-a*m,e[t+2]=l*g+h*m+a*f-c*d,e[t+3]=h*g-a*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),d=a(s/2),f=c(n/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"YZX":this._x=f*h*d+l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d-f*m*g;break;case"XZY":this._x=f*h*d-l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(za.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(za.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),h=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-s*d,this.z=r+c*d+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xr.copy(this).projectOnVector(e),this.sub(Xr)}reflect(e){return this.sub(Xr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xr=new O,za=new _i;class zn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(It.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(It.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=It.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,It):It.fromBufferAttribute(s,o),It.applyMatrix4(e.matrixWorld),this.expandByPoint(It);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(e.matrixWorld),this.union(Gi)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,It),It.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ei),Hi.subVectors(this.max,Ei),Vn.subVectors(e.a,Ei),Wn.subVectors(e.b,Ei),Xn.subVectors(e.c,Ei),sn.subVectors(Wn,Vn),an.subVectors(Xn,Wn),En.subVectors(Vn,Xn);let t=[0,-sn.z,sn.y,0,-an.z,an.y,0,-En.z,En.y,sn.z,0,-sn.x,an.z,0,-an.x,En.z,0,-En.x,-sn.y,sn.x,0,-an.y,an.x,0,-En.y,En.x,0];return!qr(t,Vn,Wn,Xn,Hi)||(t=[1,0,0,0,1,0,0,0,1],!qr(t,Vn,Wn,Xn,Hi))?!1:(ki.crossVectors(sn,an),t=[ki.x,ki.y,ki.z],qr(t,Vn,Wn,Xn,Hi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,It).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(It).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kt=[new O,new O,new O,new O,new O,new O,new O,new O],It=new O,Gi=new zn,Vn=new O,Wn=new O,Xn=new O,sn=new O,an=new O,En=new O,Ei=new O,Hi=new O,ki=new O,bn=new O;function qr(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){bn.fromArray(i,s);const a=r.x*Math.abs(bn.x)+r.y*Math.abs(bn.y)+r.z*Math.abs(bn.z),c=e.dot(bn),l=t.dot(bn),h=n.dot(bn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const _h=new zn,bi=new O,Yr=new O;class Ni{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_h.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bi.subVectors(e,this.center);const t=bi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(bi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bi.copy(e.center).add(Yr)),this.expandByPoint(bi.copy(e.center).sub(Yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zt=new O,jr=new O,Vi=new O,on=new O,Kr=new O,Wi=new O,Zr=new O;class Ko{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zt.copy(this.origin).addScaledVector(this.direction,t),Zt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){jr.copy(e).add(t).multiplyScalar(.5),Vi.copy(t).sub(e).normalize(),on.copy(this.origin).sub(jr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Vi),a=on.dot(this.direction),c=-on.dot(Vi),l=on.lengthSq(),h=Math.abs(1-o*o);let d,f,m,g;if(h>0)if(d=o*c-a,f=o*a-c,g=s*h,d>=0)if(f>=-g)if(f<=g){const M=1/h;d*=M,f*=M,m=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(jr).addScaledVector(Vi,f),m}intersectSphere(e,t){Zt.subVectors(e.center,this.origin);const n=Zt.dot(this.direction),r=Zt.dot(Zt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Zt)!==null}intersectTriangle(e,t,n,r,s){Kr.subVectors(t,e),Wi.subVectors(n,e),Zr.crossVectors(Kr,Wi);let o=this.direction.dot(Zr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;on.subVectors(this.origin,e);const c=a*this.direction.dot(Wi.crossVectors(on,Wi));if(c<0)return null;const l=a*this.direction.dot(Kr.cross(on));if(l<0||c+l>o)return null;const h=-a*on.dot(Zr);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,r,s,o,a,c,l,h,d,f,m,g,M,p){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,h,d,f,m,g,M,p)}set(e,t,n,r,s,o,a,c,l,h,d,f,m,g,M,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=M,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/qn.setFromMatrixColumn(e,0).length(),s=1/qn.setFromMatrixColumn(e,1).length(),o=1/qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,m=o*d,g=a*h,M=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=f-M*l,t[9]=-a*c,t[2]=M-f*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,m=c*d,g=l*h,M=l*d;t[0]=f+M*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=M+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,m=c*d,g=l*h,M=l*d;t[0]=f-M*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=M-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,m=o*d,g=a*h,M=a*d;t[0]=c*h,t[4]=g*l-m,t[8]=f*l+M,t[1]=c*d,t[5]=M*l+f,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,g=a*c,M=a*l;t[0]=c*h,t[4]=M-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*d+g,t[10]=f-M*d}else if(e.order==="XZY"){const f=o*c,m=o*l,g=a*c,M=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+M,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*h,t[10]=M*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gh,e,vh)}lookAt(e,t,n){const r=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),cn.crossVectors(n,Tt),cn.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),cn.crossVectors(n,Tt)),cn.normalize(),Xi.crossVectors(Tt,cn),r[0]=cn.x,r[4]=Xi.x,r[8]=Tt.x,r[1]=cn.y,r[5]=Xi.y,r[9]=Tt.y,r[2]=cn.z,r[6]=Xi.z,r[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],M=n[6],p=n[10],u=n[14],T=n[3],S=n[7],b=n[11],D=n[15],w=r[0],A=r[4],G=r[8],ee=r[12],v=r[1],E=r[5],te=r[9],J=r[13],C=r[2],W=r[6],H=r[10],Y=r[14],k=r[3],q=r[7],j=r[11],re=r[15];return s[0]=o*w+a*v+c*C+l*k,s[4]=o*A+a*E+c*W+l*q,s[8]=o*G+a*te+c*H+l*j,s[12]=o*ee+a*J+c*Y+l*re,s[1]=h*w+d*v+f*C+m*k,s[5]=h*A+d*E+f*W+m*q,s[9]=h*G+d*te+f*H+m*j,s[13]=h*ee+d*J+f*Y+m*re,s[2]=g*w+M*v+p*C+u*k,s[6]=g*A+M*E+p*W+u*q,s[10]=g*G+M*te+p*H+u*j,s[14]=g*ee+M*J+p*Y+u*re,s[3]=T*w+S*v+b*C+D*k,s[7]=T*A+S*E+b*W+D*q,s[11]=T*G+S*te+b*H+D*j,s[15]=T*ee+S*J+b*Y+D*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],M=e[7],p=e[11],u=e[15];return g*(+s*c*d-r*l*d-s*a*f+n*l*f+r*a*m-n*c*m)+M*(+t*c*m-t*l*f+s*o*f-r*o*m+r*l*h-s*c*h)+p*(+t*l*d-t*a*m-s*o*d+n*o*m+s*a*h-n*l*h)+u*(-r*a*h-t*c*d+t*a*f+r*o*d-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],M=e[13],p=e[14],u=e[15],T=d*p*l-M*f*l+M*c*m-a*p*m-d*c*u+a*f*u,S=g*f*l-h*p*l-g*c*m+o*p*m+h*c*u-o*f*u,b=h*M*l-g*d*l+g*a*m-o*M*m-h*a*u+o*d*u,D=g*d*c-h*M*c-g*a*f+o*M*f+h*a*p-o*d*p,w=t*T+n*S+r*b+s*D;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=T*A,e[1]=(M*f*s-d*p*s-M*r*m+n*p*m+d*r*u-n*f*u)*A,e[2]=(a*p*s-M*c*s+M*r*l-n*p*l-a*r*u+n*c*u)*A,e[3]=(d*c*s-a*f*s-d*r*l+n*f*l+a*r*m-n*c*m)*A,e[4]=S*A,e[5]=(h*p*s-g*f*s+g*r*m-t*p*m-h*r*u+t*f*u)*A,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*u-t*c*u)*A,e[7]=(o*f*s-h*c*s+h*r*l-t*f*l-o*r*m+t*c*m)*A,e[8]=b*A,e[9]=(g*d*s-h*M*s-g*n*m+t*M*m+h*n*u-t*d*u)*A,e[10]=(o*M*s-g*a*s+g*n*l-t*M*l-o*n*u+t*a*u)*A,e[11]=(h*a*s-o*d*s-h*n*l+t*d*l+o*n*m-t*a*m)*A,e[12]=D*A,e[13]=(h*M*r-g*d*r+g*n*f-t*M*f-h*n*p+t*d*p)*A,e[14]=(g*a*r-o*M*r-g*n*c+t*M*c+o*n*p-t*a*p)*A,e[15]=(o*d*r-h*a*r+h*n*c-t*d*c-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,d=a+a,f=s*l,m=s*h,g=s*d,M=o*h,p=o*d,u=a*d,T=c*l,S=c*h,b=c*d,D=n.x,w=n.y,A=n.z;return r[0]=(1-(M+u))*D,r[1]=(m+b)*D,r[2]=(g-S)*D,r[3]=0,r[4]=(m-b)*w,r[5]=(1-(f+u))*w,r[6]=(p+T)*w,r[7]=0,r[8]=(g+S)*A,r[9]=(p-T)*A,r[10]=(1-(f+M))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=qn.set(r[0],r[1],r[2]).length();const o=qn.set(r[4],r[5],r[6]).length(),a=qn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ut.copy(this);const l=1/s,h=1/o,d=1/a;return Ut.elements[0]*=l,Ut.elements[1]*=l,Ut.elements[2]*=l,Ut.elements[4]*=h,Ut.elements[5]*=h,Ut.elements[6]*=h,Ut.elements[8]*=d,Ut.elements[9]*=d,Ut.elements[10]*=d,t.setFromRotationMatrix(Ut),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=rn){const c=this.elements,l=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,g;if(a===rn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===xr)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=rn){const c=this.elements,l=1/(t-e),h=1/(n-r),d=1/(o-s),f=(t+e)*l,m=(n+r)*h;let g,M;if(a===rn)g=(o+s)*d,M=-2*d;else if(a===xr)g=s*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=M,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qn=new O,Ut=new Qe,gh=new O(0,0,0),vh=new O(1,1,1),cn=new O,Xi=new O,Tt=new O,Ga=new Qe,Ha=new _i;class Yt{constructor(e=0,t=0,n=0,r=Yt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ga.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ga,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ha.setFromEuler(this),this.setFromQuaternion(Ha,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yt.DEFAULT_ORDER="XYZ";class Ls{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xh=0;const ka=new O,Yn=new _i,$t=new Qe,qi=new O,Ti=new O,Mh=new O,Sh=new _i,Va=new O(1,0,0),Wa=new O(0,1,0),Xa=new O(0,0,1),yh={type:"added"},Eh={type:"removed"},$r={type:"childadded",child:null},Jr={type:"childremoved",child:null};class Et extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new O,t=new Yt,n=new _i,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Ue}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.premultiply(Yn),this}rotateX(e){return this.rotateOnAxis(Va,e)}rotateY(e){return this.rotateOnAxis(Wa,e)}rotateZ(e){return this.rotateOnAxis(Xa,e)}translateOnAxis(e,t){return ka.copy(e).applyQuaternion(this.quaternion),this.position.add(ka.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Va,e)}translateY(e){return this.translateOnAxis(Wa,e)}translateZ(e){return this.translateOnAxis(Xa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qi.copy(e):qi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(Ti,qi,this.up):$t.lookAt(qi,Ti,this.up),this.quaternion.setFromRotationMatrix($t),r&&($t.extractRotation(r.matrixWorld),Yn.setFromRotationMatrix($t),this.quaternion.premultiply(Yn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yh),$r.child=e,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eh),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,e,Mh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,Sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Et.DEFAULT_UP=new O(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nt=new O,Jt=new O,Qr=new O,Qt=new O,jn=new O,Kn=new O,qa=new O,es=new O,ts=new O,ns=new O;class qt{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nt.subVectors(e,t),r.cross(Nt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Nt.subVectors(r,t),Jt.subVectors(n,t),Qr.subVectors(e,t);const o=Nt.dot(Nt),a=Nt.dot(Jt),c=Nt.dot(Qr),l=Jt.dot(Jt),h=Jt.dot(Qr),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(l*c-a*h)*f,g=(o*h-a*c)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Qt)===null?!1:Qt.x>=0&&Qt.y>=0&&Qt.x+Qt.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Qt)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Qt.x),c.addScaledVector(o,Qt.y),c.addScaledVector(a,Qt.z),c)}static isFrontFacing(e,t,n,r){return Nt.subVectors(n,t),Jt.subVectors(e,t),Nt.cross(Jt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nt.subVectors(this.c,this.b),Jt.subVectors(this.a,this.b),Nt.cross(Jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;jn.subVectors(r,n),Kn.subVectors(s,n),es.subVectors(e,n);const c=jn.dot(es),l=Kn.dot(es);if(c<=0&&l<=0)return t.copy(n);ts.subVectors(e,r);const h=jn.dot(ts),d=Kn.dot(ts);if(h>=0&&d<=h)return t.copy(r);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(jn,o);ns.subVectors(e,s);const m=jn.dot(ns),g=Kn.dot(ns);if(g>=0&&m<=g)return t.copy(s);const M=m*l-c*g;if(M<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Kn,a);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return qa.subVectors(s,r),a=(d-h)/(d-h+(m-g)),t.copy(r).addScaledVector(qa,a);const u=1/(p+M+f);return o=M*u,a=f*u,t.copy(n).addScaledVector(jn,o).addScaledVector(Kn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ln={h:0,s:0,l:0},Yi={h:0,s:0,l:0};function is(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=qe.workingColorSpace){if(e=Ds(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=is(o,s,e+1/3),this.g=is(o,s,e),this.b=is(o,s,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Zo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return qe.fromWorkingColorSpace(mt.copy(this),e),Math.round(xt(mt.r*255,0,255))*65536+Math.round(xt(mt.g*255,0,255))*256+Math.round(xt(mt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(mt.copy(this),t);const n=mt.r,r=mt.g,s=mt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=Vt){qe.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,n=mt.g,r=mt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ln),this.setHSL(ln.h+e,ln.s+t,ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ln),e.getHSL(Yi);const n=Pi(ln.h,Yi.h,t),r=Pi(ln.s,Yi.s,t),s=Pi(ln.l,Yi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new Xe;Xe.NAMES=Zo;let bh=0;class gi extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=li,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_s,this.blendDst=gs,this.blendEquation=Pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=La,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hn,this.stencilZFail=Hn,this.stencilZPass=Hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_s&&(n.blendSrc=this.blendSrc),this.blendDst!==gs&&(n.blendDst=this.blendDst),this.blendEquation!==Pn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==La&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Is extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new O,ji=new Ve;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ia,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return hh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ji.fromBufferAttribute(this,t),ji.applyMatrix3(e),this.setXY(t,ji.x,ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ia&&(e.usage=this.usage),e}}class $o extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jo extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class On extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Th=0;const Pt=new Qe,rs=new Et,Zn=new O,At=new zn,Ai=new zn,ct=new O;class Gn extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xo(e)?Jo:$o)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,n){return Pt.makeTranslation(e,t,n),this.applyMatrix4(Pt),this}scale(e,t,n){return Pt.makeScale(e,t,n),this.applyMatrix4(Pt),this}lookAt(e){return rs.lookAt(e),rs.updateMatrix(),this.applyMatrix4(rs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new On(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];At.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,At.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,At.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(At.min),this.boundingBox.expandByPoint(At.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(At.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ai.setFromBufferAttribute(a),this.morphTargetsRelative?(ct.addVectors(At.min,Ai.min),At.expandByPoint(ct),ct.addVectors(At.max,Ai.max),At.expandByPoint(ct)):(At.expandByPoint(Ai.min),At.expandByPoint(Ai.max))}At.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ct.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ct.fromBufferAttribute(a,l),c&&(Zn.fromBufferAttribute(e,l),ct.add(Zn)),r=Math.max(r,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let G=0;G<n.count;G++)a[G]=new O,c[G]=new O;const l=new O,h=new O,d=new O,f=new Ve,m=new Ve,g=new Ve,M=new O,p=new O;function u(G,ee,v){l.fromBufferAttribute(n,G),h.fromBufferAttribute(n,ee),d.fromBufferAttribute(n,v),f.fromBufferAttribute(s,G),m.fromBufferAttribute(s,ee),g.fromBufferAttribute(s,v),h.sub(l),d.sub(l),m.sub(f),g.sub(f);const E=1/(m.x*g.y-g.x*m.y);isFinite(E)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(E),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(E),a[G].add(M),a[ee].add(M),a[v].add(M),c[G].add(p),c[ee].add(p),c[v].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let G=0,ee=T.length;G<ee;++G){const v=T[G],E=v.start,te=v.count;for(let J=E,C=E+te;J<C;J+=3)u(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const S=new O,b=new O,D=new O,w=new O;function A(G){D.fromBufferAttribute(r,G),w.copy(D);const ee=a[G];S.copy(ee),S.sub(D.multiplyScalar(D.dot(ee))).normalize(),b.crossVectors(w,ee);const E=b.dot(c[G])<0?-1:1;o.setXYZW(G,S.x,S.y,S.z,E)}for(let G=0,ee=T.length;G<ee;++G){const v=T[G],E=v.start,te=v.count;for(let J=E,C=E+te;J<C;J+=3)A(e.getX(J+0)),A(e.getX(J+1)),A(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,c=new O,l=new O,h=new O,d=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),M=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,p),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h);let m=0,g=0;for(let M=0,p=c.length;M<p;M++){a.isInterleavedBufferAttribute?m=c[M]*a.data.stride+a.offset:m=c[M]*h;for(let u=0;u<h;u++)f[g++]=l[m++]}return new Gt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gn,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const f=l[h],m=e(f,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ya=new Qe,Tn=new Ko,Ki=new Ni,ja=new O,$n=new O,Jn=new O,Qn=new O,ss=new O,Zi=new O,$i=new Ve,Ji=new Ve,Qi=new Ve,Ka=new O,Za=new O,$a=new O,er=new O,tr=new O;class wt extends Et{constructor(e=new Gn,t=new Is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Zi.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(ss.fromBufferAttribute(d,e),o?Zi.addScaledVector(ss,h):Zi.addScaledVector(ss.sub(t),h))}t.add(Zi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(s),Tn.copy(e.ray).recast(e.near),!(Ki.containsPoint(Tn.origin)===!1&&(Tn.intersectSphere(Ki,ja)===null||Tn.origin.distanceToSquared(ja)>(e.far-e.near)**2))&&(Ya.copy(s).invert(),Tn.copy(e.ray).applyMatrix4(Ya),!(n.boundingBox!==null&&Tn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Tn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){const p=f[g],u=o[p.materialIndex],T=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=T,D=S;b<D;b+=3){const w=a.getX(b),A=a.getX(b+1),G=a.getX(b+2);r=nr(this,u,e,n,l,h,d,w,A,G),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let p=g,u=M;p<u;p+=3){const T=a.getX(p),S=a.getX(p+1),b=a.getX(p+2);r=nr(this,o,e,n,l,h,d,T,S,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){const p=f[g],u=o[p.materialIndex],T=Math.max(p.start,m.start),S=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let b=T,D=S;b<D;b+=3){const w=b,A=b+1,G=b+2;r=nr(this,u,e,n,l,h,d,w,A,G),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let p=g,u=M;p<u;p+=3){const T=p,S=p+1,b=p+2;r=nr(this,o,e,n,l,h,d,T,S,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Ah(i,e,t,n,r,s,o,a){let c;if(e.side===yt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===vn,a),c===null)return null;tr.copy(a),tr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(tr);return l<t.near||l>t.far?null:{distance:l,point:tr.clone(),object:i}}function nr(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,$n),i.getVertexPosition(c,Jn),i.getVertexPosition(l,Qn);const h=Ah(i,e,t,n,$n,Jn,Qn,er);if(h){r&&($i.fromBufferAttribute(r,a),Ji.fromBufferAttribute(r,c),Qi.fromBufferAttribute(r,l),h.uv=qt.getInterpolation(er,$n,Jn,Qn,$i,Ji,Qi,new Ve)),s&&($i.fromBufferAttribute(s,a),Ji.fromBufferAttribute(s,c),Qi.fromBufferAttribute(s,l),h.uv1=qt.getInterpolation(er,$n,Jn,Qn,$i,Ji,Qi,new Ve)),o&&(Ka.fromBufferAttribute(o,a),Za.fromBufferAttribute(o,c),$a.fromBufferAttribute(o,l),h.normal=qt.getInterpolation(er,$n,Jn,Qn,Ka,Za,$a,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new O,materialIndex:0};qt.getNormal($n,Jn,Qn,d.normal),h.face=d}return h}class vi extends Gn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new On(l,3)),this.setAttribute("normal",new On(h,3)),this.setAttribute("uv",new On(d,2));function g(M,p,u,T,S,b,D,w,A,G,ee){const v=b/A,E=D/G,te=b/2,J=D/2,C=w/2,W=A+1,H=G+1;let Y=0,k=0;const q=new O;for(let j=0;j<H;j++){const re=j*E-J;for(let de=0;de<W;de++){const Ce=de*v-te;q[M]=Ce*T,q[p]=re*S,q[u]=C,l.push(q.x,q.y,q.z),q[M]=0,q[p]=0,q[u]=w>0?1:-1,h.push(q.x,q.y,q.z),d.push(de/A),d.push(1-j/G),Y+=1}}for(let j=0;j<G;j++)for(let re=0;re<A;re++){const de=f+re+W*j,Ce=f+re+W*(j+1),B=f+(re+1)+W*(j+1),Z=f+(re+1)+W*j;c.push(de,Ce,Z),c.push(Ce,B,Z),k+=6}a.addGroup(m,k,ee),m+=k,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function vt(i){const e={};for(let t=0;t<i.length;t++){const n=pi(i[t]);for(const r in n)e[r]=n[r]}return e}function wh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qo(i){return i.getRenderTarget()===null?i.outputColorSpace:qe.workingColorSpace}const Rh={clone:pi,merge:vt};var Ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ch,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pi(e.uniforms),this.uniformsGroups=wh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ec extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hn=new O,Ja=new Ve,Qa=new Ve;class Lt extends ec{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ii*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ci*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ii*2*Math.atan(Math.tan(Ci*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hn.x,hn.y).multiplyScalar(-e/hn.z),hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hn.x,hn.y).multiplyScalar(-e/hn.z)}getViewSize(e,t){return this.getViewBounds(e,Ja,Qa),t.subVectors(Qa,Ja)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ci*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ei=-90,ti=1;class Dh extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Lt(ei,ti,e,t);r.layers=this.layers,this.add(r);const s=new Lt(ei,ti,e,t);s.layers=this.layers,this.add(s);const o=new Lt(ei,ti,e,t);o.layers=this.layers,this.add(o);const a=new Lt(ei,ti,e,t);a.layers=this.layers,this.add(a);const c=new Lt(ei,ti,e,t);c.layers=this.layers,this.add(c);const l=new Lt(ei,ti,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class tc extends Mt{constructor(e,t,n,r,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ui,super(e,t,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lh extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new tc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vi(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:mn});s.uniforms.tEquirect.value=t;const o=new wt(r,s),a=t.minFilter;return t.minFilter===Ln&&(t.minFilter=St),new Dh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const as=new O,Ih=new O,Uh=new Ue;class un{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=as.subVectors(n,t).cross(Ih.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(as),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Uh.getNormalMatrix(e),r=this.coplanarPoint(as).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const An=new Ni,ir=new O;class nc{constructor(e=new un,t=new un,n=new un,r=new un,s=new un,o=new un){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],d=r[6],f=r[7],m=r[8],g=r[9],M=r[10],p=r[11],u=r[12],T=r[13],S=r[14],b=r[15];if(n[0].setComponents(c-s,f-l,p-m,b-u).normalize(),n[1].setComponents(c+s,f+l,p+m,b+u).normalize(),n[2].setComponents(c+o,f+h,p+g,b+T).normalize(),n[3].setComponents(c-o,f-h,p-g,b-T).normalize(),n[4].setComponents(c-a,f-d,p-M,b-S).normalize(),t===rn)n[5].setComponents(c+a,f+d,p+M,b+S).normalize();else if(t===xr)n[5].setComponents(a,d,M,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),An.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(An)}intersectsSprite(e){return An.center.set(0,0,0),An.radius=.7071067811865476,An.applyMatrix4(e.matrixWorld),this.intersectsSphere(An)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ir.x=r.normal.x>0?e.max.x:e.min.x,ir.y=r.normal.y>0?e.max.y:e.min.y,ir.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ic(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Nh(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,h){const d=l.array,f=l.usage,m=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,f),l.onUploadCallback();let M;if(d instanceof Float32Array)M=i.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=i.SHORT;else if(d instanceof Uint32Array)M=i.UNSIGNED_INT;else if(d instanceof Int32Array)M=i.INT;else if(d instanceof Int8Array)M=i.BYTE;else if(d instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,h,d){const f=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,l),m.count===-1&&g.length===0&&i.bufferSubData(d,0,f),g.length!==0){for(let M=0,p=g.length;M<p;M++){const u=g[M];t?i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,r(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,h),d.version=l.version}}return{get:o,remove:a,update:c}}class Ar extends Gn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,d=e/a,f=t/c,m=[],g=[],M=[],p=[];for(let u=0;u<h;u++){const T=u*f-o;for(let S=0;S<l;S++){const b=S*d-s;g.push(b,-T,0),M.push(0,0,1),p.push(S/a),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let T=0;T<a;T++){const S=T+l*u,b=T+l*(u+1),D=T+1+l*(u+1),w=T+1+l*u;m.push(S,b,w),m.push(b,D,w)}this.setIndex(m),this.setAttribute("position",new On(g,3)),this.setAttribute("normal",new On(M,3)),this.setAttribute("uv",new On(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.widthSegments,e.heightSegments)}}var Oh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fh=`#ifdef USE_ALPHAHASH
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
#endif`,Bh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kh=`#ifdef USE_AOMAP
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
#endif`,Vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Xh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kh=`#ifdef USE_IRIDESCENCE
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
#endif`,Zh=`#ifdef USE_BUMPMAP
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
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,su=`#define PI 3.141592653589793
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
} // validated`,au=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ou=`vec3 transformedNormal = objectNormal;
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
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,du="gl_FragColor = linearToOutputTexel( gl_FragColor );",fu=`
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
}`,pu=`#ifdef USE_ENVMAP
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
#endif`,mu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_u=`#ifdef USE_ENVMAP
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
#endif`,gu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vu=`#ifdef USE_ENVMAP
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
#endif`,xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Su=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eu=`#ifdef USE_GRADIENTMAP
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
}`,bu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Au=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ru=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Pu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uu=`PhysicalMaterial material;
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
#endif`,Nu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Ou=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ku=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qu=`#if defined( USE_POINTS_UV )
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
#endif`,Yu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ju=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ku=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ju=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Qu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ed=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,td=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sd=`#ifdef USE_NORMALMAP
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
#endif`,ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ld=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ud=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Md=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ed=`#ifdef USE_SKINNING
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
#endif`,bd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Td=`#ifdef USE_SKINNING
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
#endif`,Ad=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cd=`#ifndef saturate
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pd=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dd=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fd=`uniform sampler2D t2D;
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
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`#include <common>
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
}`,Vd=`#if DEPTH_PACKING == 3200
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
}`,Wd=`#define DISTANCE
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
}`,Xd=`#define DISTANCE
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
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`uniform float scale;
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
}`,Kd=`uniform vec3 diffuse;
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
}`,Zd=`#include <common>
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
}`,$d=`uniform vec3 diffuse;
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
}`,Jd=`#define LAMBERT
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
}`,Qd=`#define LAMBERT
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
}`,ef=`#define MATCAP
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
}`,tf=`#define MATCAP
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
}`,nf=`#define NORMAL
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
}`,rf=`#define NORMAL
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
}`,sf=`#define PHONG
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
}`,af=`#define PHONG
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
}`,of=`#define STANDARD
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
}`,cf=`#define STANDARD
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
}`,lf=`#define TOON
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
}`,hf=`#define TOON
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
}`,uf=`uniform float size;
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
}`,df=`uniform vec3 diffuse;
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
}`,ff=`#include <common>
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
}`,pf=`uniform vec3 color;
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
}`,mf=`uniform float rotation;
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
}`,_f=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:Oh,alphahash_pars_fragment:Fh,alphamap_fragment:Bh,alphamap_pars_fragment:zh,alphatest_fragment:Gh,alphatest_pars_fragment:Hh,aomap_fragment:kh,aomap_pars_fragment:Vh,batching_pars_vertex:Wh,batching_vertex:Xh,begin_vertex:qh,beginnormal_vertex:Yh,bsdfs:jh,iridescence_fragment:Kh,bumpmap_pars_fragment:Zh,clipping_planes_fragment:$h,clipping_planes_pars_fragment:Jh,clipping_planes_pars_vertex:Qh,clipping_planes_vertex:eu,color_fragment:tu,color_pars_fragment:nu,color_pars_vertex:iu,color_vertex:ru,common:su,cube_uv_reflection_fragment:au,defaultnormal_vertex:ou,displacementmap_pars_vertex:cu,displacementmap_vertex:lu,emissivemap_fragment:hu,emissivemap_pars_fragment:uu,colorspace_fragment:du,colorspace_pars_fragment:fu,envmap_fragment:pu,envmap_common_pars_fragment:mu,envmap_pars_fragment:_u,envmap_pars_vertex:gu,envmap_physical_pars_fragment:Cu,envmap_vertex:vu,fog_vertex:xu,fog_pars_vertex:Mu,fog_fragment:Su,fog_pars_fragment:yu,gradientmap_pars_fragment:Eu,lightmap_fragment:bu,lightmap_pars_fragment:Tu,lights_lambert_fragment:Au,lights_lambert_pars_fragment:wu,lights_pars_begin:Ru,lights_toon_fragment:Pu,lights_toon_pars_fragment:Du,lights_phong_fragment:Lu,lights_phong_pars_fragment:Iu,lights_physical_fragment:Uu,lights_physical_pars_fragment:Nu,lights_fragment_begin:Ou,lights_fragment_maps:Fu,lights_fragment_end:Bu,logdepthbuf_fragment:zu,logdepthbuf_pars_fragment:Gu,logdepthbuf_pars_vertex:Hu,logdepthbuf_vertex:ku,map_fragment:Vu,map_pars_fragment:Wu,map_particle_fragment:Xu,map_particle_pars_fragment:qu,metalnessmap_fragment:Yu,metalnessmap_pars_fragment:ju,morphinstance_vertex:Ku,morphcolor_vertex:Zu,morphnormal_vertex:$u,morphtarget_pars_vertex:Ju,morphtarget_vertex:Qu,normal_fragment_begin:ed,normal_fragment_maps:td,normal_pars_fragment:nd,normal_pars_vertex:id,normal_vertex:rd,normalmap_pars_fragment:sd,clearcoat_normal_fragment_begin:ad,clearcoat_normal_fragment_maps:od,clearcoat_pars_fragment:cd,iridescence_pars_fragment:ld,opaque_fragment:hd,packing:ud,premultiplied_alpha_fragment:dd,project_vertex:fd,dithering_fragment:pd,dithering_pars_fragment:md,roughnessmap_fragment:_d,roughnessmap_pars_fragment:gd,shadowmap_pars_fragment:vd,shadowmap_pars_vertex:xd,shadowmap_vertex:Md,shadowmask_pars_fragment:Sd,skinbase_vertex:yd,skinning_pars_vertex:Ed,skinning_vertex:bd,skinnormal_vertex:Td,specularmap_fragment:Ad,specularmap_pars_fragment:wd,tonemapping_fragment:Rd,tonemapping_pars_fragment:Cd,transmission_fragment:Pd,transmission_pars_fragment:Dd,uv_pars_fragment:Ld,uv_pars_vertex:Id,uv_vertex:Ud,worldpos_vertex:Nd,background_vert:Od,background_frag:Fd,backgroundCube_vert:Bd,backgroundCube_frag:zd,cube_vert:Gd,cube_frag:Hd,depth_vert:kd,depth_frag:Vd,distanceRGBA_vert:Wd,distanceRGBA_frag:Xd,equirect_vert:qd,equirect_frag:Yd,linedashed_vert:jd,linedashed_frag:Kd,meshbasic_vert:Zd,meshbasic_frag:$d,meshlambert_vert:Jd,meshlambert_frag:Qd,meshmatcap_vert:ef,meshmatcap_frag:tf,meshnormal_vert:nf,meshnormal_frag:rf,meshphong_vert:sf,meshphong_frag:af,meshphysical_vert:of,meshphysical_frag:cf,meshtoon_vert:lf,meshtoon_frag:hf,points_vert:uf,points_frag:df,shadow_vert:ff,shadow_frag:pf,sprite_vert:mf,sprite_frag:_f},ie={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Wt={basic:{uniforms:vt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:vt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:vt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:vt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:vt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:vt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:vt([ie.points,ie.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:vt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:vt([ie.common,ie.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:vt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:vt([ie.sprite,ie.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:vt([ie.common,ie.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:vt([ie.lights,ie.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Wt.physical={uniforms:vt([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const rr={r:0,b:0,g:0},wn=new Yt,gf=new Qe;function vf(i,e,t,n,r,s,o){const a=new Xe(0);let c=s===!0?0:1,l,h,d=null,f=0,m=null;function g(p,u){let T=!1,S=u.isScene===!0?u.background:null;S&&S.isTexture&&(S=(u.backgroundBlurriness>0?t:e).get(S)),S===null?M(a,c):S&&S.isColor&&(M(S,1),T=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===br)?(h===void 0&&(h=new wt(new vi(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:pi(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),wn.copy(u.backgroundRotation),wn.x*=-1,wn.y*=-1,wn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(wn.y*=-1,wn.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gf.makeRotationFromEuler(wn)),h.material.toneMapped=qe.getTransfer(S.colorSpace)!==Ke,(d!==S||f!==S.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=S,f=S.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new wt(new Ar(2,2),new xn({name:"BackgroundMaterial",uniforms:pi(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=qe.getTransfer(S.colorSpace)!==Ke,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=S,f=S.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function M(p,u){p.getRGB(rr,Qo(i)),n.buffers.color.setClear(rr.r,rr.g,rr.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),c=u,M(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,M(a,c)},render:g}}function xf(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=p(null);let l=c,h=!1;function d(C,W,H,Y,k){let q=!1;if(o){const j=M(Y,H,W);l!==j&&(l=j,m(l.object)),q=u(C,Y,H,k),q&&T(C,Y,H,k)}else{const j=W.wireframe===!0;(l.geometry!==Y.id||l.program!==H.id||l.wireframe!==j)&&(l.geometry=Y.id,l.program=H.id,l.wireframe=j,q=!0)}k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,G(C,W,H,Y),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(C){return n.isWebGL2?i.bindVertexArray(C):s.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?i.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function M(C,W,H){const Y=H.wireframe===!0;let k=a[C.id];k===void 0&&(k={},a[C.id]=k);let q=k[W.id];q===void 0&&(q={},k[W.id]=q);let j=q[Y];return j===void 0&&(j=p(f()),q[Y]=j),j}function p(C){const W=[],H=[],Y=[];for(let k=0;k<r;k++)W[k]=0,H[k]=0,Y[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:H,attributeDivisors:Y,object:C,attributes:{},index:null}}function u(C,W,H,Y){const k=l.attributes,q=W.attributes;let j=0;const re=H.getAttributes();for(const de in re)if(re[de].location>=0){const B=k[de];let Z=q[de];if(Z===void 0&&(de==="instanceMatrix"&&C.instanceMatrix&&(Z=C.instanceMatrix),de==="instanceColor"&&C.instanceColor&&(Z=C.instanceColor)),B===void 0||B.attribute!==Z||Z&&B.data!==Z.data)return!0;j++}return l.attributesNum!==j||l.index!==Y}function T(C,W,H,Y){const k={},q=W.attributes;let j=0;const re=H.getAttributes();for(const de in re)if(re[de].location>=0){let B=q[de];B===void 0&&(de==="instanceMatrix"&&C.instanceMatrix&&(B=C.instanceMatrix),de==="instanceColor"&&C.instanceColor&&(B=C.instanceColor));const Z={};Z.attribute=B,B&&B.data&&(Z.data=B.data),k[de]=Z,j++}l.attributes=k,l.attributesNum=j,l.index=Y}function S(){const C=l.newAttributes;for(let W=0,H=C.length;W<H;W++)C[W]=0}function b(C){D(C,0)}function D(C,W){const H=l.newAttributes,Y=l.enabledAttributes,k=l.attributeDivisors;H[C]=1,Y[C]===0&&(i.enableVertexAttribArray(C),Y[C]=1),k[C]!==W&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,W),k[C]=W)}function w(){const C=l.newAttributes,W=l.enabledAttributes;for(let H=0,Y=W.length;H<Y;H++)W[H]!==C[H]&&(i.disableVertexAttribArray(H),W[H]=0)}function A(C,W,H,Y,k,q,j){j===!0?i.vertexAttribIPointer(C,W,H,k,q):i.vertexAttribPointer(C,W,H,Y,k,q)}function G(C,W,H,Y){if(n.isWebGL2===!1&&(C.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const k=Y.attributes,q=H.getAttributes(),j=W.defaultAttributeValues;for(const re in q){const de=q[re];if(de.location>=0){let Ce=k[re];if(Ce===void 0&&(re==="instanceMatrix"&&C.instanceMatrix&&(Ce=C.instanceMatrix),re==="instanceColor"&&C.instanceColor&&(Ce=C.instanceColor)),Ce!==void 0){const B=Ce.normalized,Z=Ce.itemSize,ue=t.get(Ce);if(ue===void 0)continue;const be=ue.buffer,ge=ue.type,fe=ue.bytesPerElement,We=n.isWebGL2===!0&&(ge===i.INT||ge===i.UNSIGNED_INT||Ce.gpuType===No);if(Ce.isInterleavedBufferAttribute){const Te=Ce.data,L=Te.stride,ht=Ce.offset;if(Te.isInstancedInterleavedBuffer){for(let xe=0;xe<de.locationSize;xe++)D(de.location+xe,Te.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let xe=0;xe<de.locationSize;xe++)b(de.location+xe);i.bindBuffer(i.ARRAY_BUFFER,be);for(let xe=0;xe<de.locationSize;xe++)A(de.location+xe,Z/de.locationSize,ge,B,L*fe,(ht+Z/de.locationSize*xe)*fe,We)}else{if(Ce.isInstancedBufferAttribute){for(let Te=0;Te<de.locationSize;Te++)D(de.location+Te,Ce.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let Te=0;Te<de.locationSize;Te++)b(de.location+Te);i.bindBuffer(i.ARRAY_BUFFER,be);for(let Te=0;Te<de.locationSize;Te++)A(de.location+Te,Z/de.locationSize,ge,B,Z*fe,Z/de.locationSize*Te*fe,We)}}else if(j!==void 0){const B=j[re];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(de.location,B);break;case 3:i.vertexAttrib3fv(de.location,B);break;case 4:i.vertexAttrib4fv(de.location,B);break;default:i.vertexAttrib1fv(de.location,B)}}}}w()}function ee(){te();for(const C in a){const W=a[C];for(const H in W){const Y=W[H];for(const k in Y)g(Y[k].object),delete Y[k];delete W[H]}delete a[C]}}function v(C){if(a[C.id]===void 0)return;const W=a[C.id];for(const H in W){const Y=W[H];for(const k in Y)g(Y[k].object),delete Y[k];delete W[H]}delete a[C.id]}function E(C){for(const W in a){const H=a[W];if(H[C.id]===void 0)continue;const Y=H[C.id];for(const k in Y)g(Y[k].object),delete Y[k];delete H[C.id]}}function te(){J(),h=!0,l!==c&&(l=c,m(l.object))}function J(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:te,resetDefaultState:J,dispose:ee,releaseStatesOfGeometry:v,releaseStatesOfProgram:E,initAttributes:S,enableAttribute:b,disableUnusedAttributes:w}}function Mf(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}function a(h,d){i.drawArrays(s,h,d),t.update(d,s,1)}function c(h,d,f){if(f===0)return;let m,g;if(r)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,d,f),t.update(d,s,f)}function l(h,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(s,h,0,d,0,f);let g=0;for(let M=0;M<f;M++)g+=d[M];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Sf(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,b=o||e.has("OES_texture_float"),D=S&&b,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:M,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:T,vertexTextures:S,floatFragmentTextures:b,floatVertexTextures:D,maxSamples:w}}function yf(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new un,a=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,M=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!r||g===null||g.length===0||s&&!p)s?h(null):l();else{const T=s?0:n,S=T*4;let b=u.clippingState||null;c.value=b,b=h(g,f,S,m);for(let D=0;D!==S;++D)b[D]=t[D];u.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,g){const M=d!==null?d.length:0;let p=null;if(M!==0){if(p=c.value,g!==!0||p===null){const u=m+M*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<u)&&(p=new Float32Array(u));for(let S=0,b=m;S!==M;++S,b+=4)o.copy(d[S]).applyMatrix4(T,a),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function Ef(i){let e=new WeakMap;function t(o,a){return a===vs?o.mapping=ui:a===xs&&(o.mapping=di),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===vs||a===xs)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Lh(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class rc extends ec{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ai=4,eo=[.125,.215,.35,.446,.526,.582],Dn=20,os=new rc,to=new Xe;let cs=null,ls=0,hs=0;const Cn=(1+Math.sqrt(5))/2,ni=1/Cn,no=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Cn,ni),new O(0,Cn,-ni),new O(ni,0,Cn),new O(-ni,0,Cn),new O(Cn,ni,0),new O(-Cn,ni,0)];class io{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){cs=this._renderer.getRenderTarget(),ls=this._renderer.getActiveCubeFace(),hs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ao(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=so(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cs,ls,hs),e.scissorTest=!1,sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ui||e.mapping===di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cs=this._renderer.getRenderTarget(),ls=this._renderer.getActiveCubeFace(),hs=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:Li,format:Bt,colorSpace:Mn,depthBuffer:!1},r=ro(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ro(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bf(s)),this._blurMaterial=Tf(s,e,t)}return r}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,os)}_sceneToCubeUV(e,t,n,r){const a=new Lt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(to),h.toneMapping=_n,h.autoClear=!1;const m=new Is({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),g=new wt(new vi,m);let M=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,M=!0):(m.color.copy(to),M=!0);for(let u=0;u<6;u++){const T=u%3;T===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):T===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const S=this._cubeSize;sr(r,T*S,u>2?S:0,S,S),h.setRenderTarget(r),M&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ui||e.mapping===di;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ao()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=so());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;sr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,os)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=no[(r-1)%no.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new wt(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Dn-1),M=s/g,p=isFinite(s)?1+Math.floor(h*M):Dn;p>Dn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Dn}`);const u=[];let T=0;for(let A=0;A<Dn;++A){const G=A/M,ee=Math.exp(-G*G/2);u.push(ee),A===0?T+=ee:A<p&&(T+=2*ee)}for(let A=0;A<u.length;A++)u[A]=u[A]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const b=this._sizeLods[r],D=3*b*(r>S-ai?r-S+ai:0),w=4*(this._cubeSize-b);sr(t,D,w,3*b,2*b),c.setRenderTarget(t),c.render(d,os)}}function bf(i){const e=[],t=[],n=[];let r=i;const s=i-ai+1+eo.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-ai?c=eo[o-i+ai-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,M=3,p=2,u=1,T=new Float32Array(M*g*m),S=new Float32Array(p*g*m),b=new Float32Array(u*g*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,G=w>2?0:-1,ee=[A,G,0,A+2/3,G,0,A+2/3,G+1,0,A,G,0,A+2/3,G+1,0,A,G+1,0];T.set(ee,M*g*w),S.set(f,p*g*w);const v=[w,w,w,w,w,w];b.set(v,u*g*w)}const D=new Gn;D.setAttribute("position",new Gt(T,M)),D.setAttribute("uv",new Gt(S,p)),D.setAttribute("faceIndex",new Gt(b,u)),e.push(D),r>ai&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ro(i,e,t){const n=new Fn(i,e,t);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Tf(i,e,t){const n=new Float32Array(Dn),r=new O(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Dn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Us(),fragmentShader:`

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
		`,blending:mn,depthTest:!1,depthWrite:!1})}function so(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Us(),fragmentShader:`

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
		`,blending:mn,depthTest:!1,depthWrite:!1})}function ao(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Us(){return`

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
	`}function Af(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===vs||c===xs,h=c===ui||c===di;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new io(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new io(i));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function wf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Rf(i,e,t,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const M=f.morphAttributes[g];for(let p=0,u=M.length;p<u;p++)e.remove(M[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const M=m[g];for(let p=0,u=M.length;p<u;p++)e.update(M[p],i.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,g=d.attributes.position;let M=0;if(m!==null){const T=m.array;M=m.version;for(let S=0,b=T.length;S<b;S+=3){const D=T[S+0],w=T[S+1],A=T[S+2];f.push(D,w,w,A,A,D)}}else if(g!==void 0){const T=g.array;M=g.version;for(let S=0,b=T.length/3-1;S<b;S+=3){const D=S+0,w=S+1,A=S+2;f.push(D,w,w,A,A,D)}}else return;const p=new(Xo(f)?Jo:$o)(f,1);p.version=M;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Cf(i,e,t,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,g){i.drawElements(s,g,a,m*c),t.update(g,s,1)}function d(m,g,M){if(M===0)return;let p,u;if(r)p=i,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,g,a,m*c,M),t.update(g,s,M)}function f(m,g,M){if(M===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<M;u++)this.render(m[u]/c,g[u]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,M);let u=0;for(let T=0;T<M;T++)u+=g[T];t.update(u,s,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function Pf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Df(i,e){return i[0]-e[0]}function Lf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function If(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new lt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,M=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==M){let J=function(){E.dispose(),s.delete(h),h.removeEventListener("dispose",J)};var m=J;p!==void 0&&p.texture.dispose();const u=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let A=0;u===!0&&(A=1),T===!0&&(A=2),S===!0&&(A=3);let G=h.attributes.position.count*A,ee=1;G>e.maxTextureSize&&(ee=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const v=new Float32Array(G*ee*4*M),E=new jo(v,G,ee,M);E.type=Xt,E.needsUpdate=!0;const te=A*4;for(let C=0;C<M;C++){const W=b[C],H=D[C],Y=w[C],k=G*ee*4*C;for(let q=0;q<W.count;q++){const j=q*te;u===!0&&(o.fromBufferAttribute(W,q),v[k+j+0]=o.x,v[k+j+1]=o.y,v[k+j+2]=o.z,v[k+j+3]=0),T===!0&&(o.fromBufferAttribute(H,q),v[k+j+4]=o.x,v[k+j+5]=o.y,v[k+j+6]=o.z,v[k+j+7]=0),S===!0&&(o.fromBufferAttribute(Y,q),v[k+j+8]=o.x,v[k+j+9]=o.y,v[k+j+10]=o.z,v[k+j+11]=Y.itemSize===4?o.w:1)}}p={count:M,texture:E,size:new Ve(G,ee)},s.set(h,p),h.addEventListener("dispose",J)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let u=0;for(let S=0;S<f.length;S++)u+=f[S];const T=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(i,"morphTargetBaseInfluence",T),d.getUniforms().setValue(i,"morphTargetInfluences",f)}d.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let M=n[h.id];if(M===void 0||M.length!==g){M=[];for(let b=0;b<g;b++)M[b]=[b,0];n[h.id]=M}for(let b=0;b<g;b++){const D=M[b];D[0]=b,D[1]=f[b]}M.sort(Lf);for(let b=0;b<8;b++)b<g&&M[b][1]?(a[b][0]=M[b][0],a[b][1]=M[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Df);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let T=0;for(let b=0;b<8;b++){const D=a[b],w=D[0],A=D[1];w!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+b)!==p[w]&&h.setAttribute("morphTarget"+b,p[w]),u&&h.getAttribute("morphNormal"+b)!==u[w]&&h.setAttribute("morphNormal"+b,u[w]),r[b]=A,T+=A):(p&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),u&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),r[b]=0)}const S=h.morphTargetsRelative?1:1-T;d.getUniforms().setValue(i,"morphTargetBaseInfluence",S),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function Uf(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class sc extends Mt{constructor(e,t,n,r,s,o,a,c,l,h){if(h=h!==void 0?h:Nn,h!==Nn&&h!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Nn&&(n=fn),n===void 0&&h===fi&&(n=Un),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dt,this.minFilter=c!==void 0?c:dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ac=new Mt,oc=new sc(1,1);oc.compareFunction=Wo;const cc=new jo,lc=new mh,hc=new tc,oo=[],co=[],lo=new Float32Array(16),ho=new Float32Array(9),uo=new Float32Array(4);function xi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=oo[r];if(s===void 0&&(s=new Float32Array(r),oo[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function st(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function at(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wr(i,e){let t=co[e];t===void 0&&(t=new Int32Array(e),co[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2fv(this.addr,e),at(t,e)}}function Ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;i.uniform3fv(this.addr,e),at(t,e)}}function Bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4fv(this.addr,e),at(t,e)}}function zf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;uo.set(n),i.uniformMatrix2fv(this.addr,!1,uo),at(t,n)}}function Gf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;ho.set(n),i.uniformMatrix3fv(this.addr,!1,ho),at(t,n)}}function Hf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;lo.set(n),i.uniformMatrix4fv(this.addr,!1,lo),at(t,n)}}function kf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2iv(this.addr,e),at(t,e)}}function Wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;i.uniform3iv(this.addr,e),at(t,e)}}function Xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4iv(this.addr,e),at(t,e)}}function qf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2uiv(this.addr,e),at(t,e)}}function jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;i.uniform3uiv(this.addr,e),at(t,e)}}function Kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4uiv(this.addr,e),at(t,e)}}function Zf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?oc:ac;t.setTexture2D(e||s,r)}function $f(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||lc,r)}function Jf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||hc,r)}function Qf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||cc,r)}function ep(i){switch(i){case 5126:return Nf;case 35664:return Of;case 35665:return Ff;case 35666:return Bf;case 35674:return zf;case 35675:return Gf;case 35676:return Hf;case 5124:case 35670:return kf;case 35667:case 35671:return Vf;case 35668:case 35672:return Wf;case 35669:case 35673:return Xf;case 5125:return qf;case 36294:return Yf;case 36295:return jf;case 36296:return Kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Zf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return Jf;case 36289:case 36303:case 36311:case 36292:return Qf}}function tp(i,e){i.uniform1fv(this.addr,e)}function np(i,e){const t=xi(e,this.size,2);i.uniform2fv(this.addr,t)}function ip(i,e){const t=xi(e,this.size,3);i.uniform3fv(this.addr,t)}function rp(i,e){const t=xi(e,this.size,4);i.uniform4fv(this.addr,t)}function sp(i,e){const t=xi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ap(i,e){const t=xi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function op(i,e){const t=xi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cp(i,e){i.uniform1iv(this.addr,e)}function lp(i,e){i.uniform2iv(this.addr,e)}function hp(i,e){i.uniform3iv(this.addr,e)}function up(i,e){i.uniform4iv(this.addr,e)}function dp(i,e){i.uniform1uiv(this.addr,e)}function fp(i,e){i.uniform2uiv(this.addr,e)}function pp(i,e){i.uniform3uiv(this.addr,e)}function mp(i,e){i.uniform4uiv(this.addr,e)}function _p(i,e,t){const n=this.cache,r=e.length,s=wr(t,r);st(n,s)||(i.uniform1iv(this.addr,s),at(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ac,s[o])}function gp(i,e,t){const n=this.cache,r=e.length,s=wr(t,r);st(n,s)||(i.uniform1iv(this.addr,s),at(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||lc,s[o])}function vp(i,e,t){const n=this.cache,r=e.length,s=wr(t,r);st(n,s)||(i.uniform1iv(this.addr,s),at(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||hc,s[o])}function xp(i,e,t){const n=this.cache,r=e.length,s=wr(t,r);st(n,s)||(i.uniform1iv(this.addr,s),at(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||cc,s[o])}function Mp(i){switch(i){case 5126:return tp;case 35664:return np;case 35665:return ip;case 35666:return rp;case 35674:return sp;case 35675:return ap;case 35676:return op;case 5124:case 35670:return cp;case 35667:case 35671:return lp;case 35668:case 35672:return hp;case 35669:case 35673:return up;case 5125:return dp;case 36294:return fp;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return gp;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return xp}}class Sp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ep(t.type)}}class yp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mp(t.type)}}class Ep{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const us=/(\w+)(\])?(\[|\.)?/g;function fo(i,e){i.seq.push(e),i.map[e.id]=e}function bp(i,e,t){const n=i.name,r=n.length;for(us.lastIndex=0;;){const s=us.exec(n),o=us.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){fo(t,l===void 0?new Sp(a,i,e):new yp(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Ep(a),fo(t,d)),t=d}}}class hr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);bp(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function po(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Tp=37297;let Ap=0;function wp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Rp(i){const e=qe.getPrimaries(qe.workingColorSpace),t=qe.getPrimaries(i);let n;switch(e===t?n="":e===vr&&t===gr?n="LinearDisplayP3ToLinearSRGB":e===gr&&t===vr&&(n="LinearSRGBToLinearDisplayP3"),i){case Mn:case Tr:return[n,"LinearTransferOETF"];case Vt:case Ps:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function mo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+wp(i.getShaderSource(e),o)}else return r}function Cp(i,e){const t=Rp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Pp(i,e){let t;switch(e){case El:t="Linear";break;case bl:t="Reinhard";break;case Tl:t="OptimizedCineon";break;case Al:t="ACESFilmic";break;case Rl:t="AgX";break;case Cl:t="Neutral";break;case wl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(oi).join(`
`)}function Lp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oi).join(`
`)}function Ip(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Up(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function oi(i){return i!==""}function _o(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function go(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Np=/^[ \t]*#include +<([\w\d./]+)>/gm;function bs(i){return i.replace(Np,Fp)}const Op=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Fp(i,e){let t=Ie[e];if(t===void 0){const n=Op.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bs(t)}const Bp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vo(i){return i.replace(Bp,zp)}function zp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$c?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===en&&(e="SHADOWMAP_TYPE_VSM"),e}function Hp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ui:case di:e="ENVMAP_TYPE_CUBE";break;case br:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case di:e="ENVMAP_MODE_REFRACTION";break}return e}function Vp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Io:e="ENVMAP_BLENDING_MULTIPLY";break;case Sl:e="ENVMAP_BLENDING_MIX";break;case yl:e="ENVMAP_BLENDING_ADD";break}return e}function Wp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Xp(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Gp(t),l=Hp(t),h=kp(t),d=Vp(t),f=Wp(t),m=t.isWebGL2?"":Dp(t),g=Lp(t),M=Ip(s),p=r.createProgram();let u,T,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(oi).join(`
`),u.length>0&&(u+=`
`),T=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(oi).join(`
`),T.length>0&&(T+=`
`)):(u=[xo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oi).join(`
`),T=[m,xo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Ie.tonemapping_pars_fragment:"",t.toneMapping!==_n?Pp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Cp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oi).join(`
`)),o=bs(o),o=_o(o,t),o=go(o,t),a=bs(a),a=_o(a,t),a=go(a,t),o=vo(o),a=vo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const b=S+u+o,D=S+T+a,w=po(r,r.VERTEX_SHADER,b),A=po(r,r.FRAGMENT_SHADER,D);r.attachShader(p,w),r.attachShader(p,A),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function G(te){if(i.debug.checkShaderErrors){const J=r.getProgramInfoLog(p).trim(),C=r.getShaderInfoLog(w).trim(),W=r.getShaderInfoLog(A).trim();let H=!0,Y=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,w,A);else{const k=mo(r,w,"vertex"),q=mo(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+te.name+`
Material Type: `+te.type+`

Program Info Log: `+J+`
`+k+`
`+q)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(C===""||W==="")&&(Y=!1);Y&&(te.diagnostics={runnable:H,programLog:J,vertexShader:{log:C,prefix:u},fragmentShader:{log:W,prefix:T}})}r.deleteShader(w),r.deleteShader(A),ee=new hr(r,p),v=Up(r,p)}let ee;this.getUniforms=function(){return ee===void 0&&G(this),ee};let v;this.getAttributes=function(){return v===void 0&&G(this),v};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(p,Tp)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ap++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=A,this}let qp=0;class Yp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jp(e),t.set(e,n)),n}}class jp{constructor(e){this.id=qp++,this.code=e,this.usedTimes=0}}function Kp(i,e,t,n,r,s,o){const a=new Ls,c=new Yp,l=new Set,h=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function u(v,E,te,J,C){const W=J.fog,H=C.geometry,Y=v.isMeshStandardMaterial?J.environment:null,k=(v.isMeshStandardMaterial?t:e).get(v.envMap||Y),q=k&&k.mapping===br?k.image.height:null,j=M[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const re=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,de=re!==void 0?re.length:0;let Ce=0;H.morphAttributes.position!==void 0&&(Ce=1),H.morphAttributes.normal!==void 0&&(Ce=2),H.morphAttributes.color!==void 0&&(Ce=3);let B,Z,ue,be;if(j){const Ye=Wt[j];B=Ye.vertexShader,Z=Ye.fragmentShader}else B=v.vertexShader,Z=v.fragmentShader,c.update(v),ue=c.getVertexShaderID(v),be=c.getFragmentShaderID(v);const ge=i.getRenderTarget(),fe=C.isInstancedMesh===!0,We=C.isBatchedMesh===!0,Te=!!v.map,L=!!v.matcap,ht=!!k,xe=!!v.aoMap,Fe=!!v.lightMap,Se=!!v.bumpMap,He=!!v.normalMap,Ne=!!v.displacementMap,Be=!!v.emissiveMap,tt=!!v.metalnessMap,y=!!v.roughnessMap,_=v.anisotropy>0,z=v.clearcoat>0,X=v.iridescence>0,$=v.sheen>0,K=v.transmission>0,Pe=_&&!!v.anisotropyMap,ye=z&&!!v.clearcoatMap,se=z&&!!v.clearcoatNormalMap,oe=z&&!!v.clearcoatRoughnessMap,De=X&&!!v.iridescenceMap,Q=X&&!!v.iridescenceThicknessMap,it=$&&!!v.sheenColorMap,ze=$&&!!v.sheenRoughnessMap,ve=!!v.specularMap,pe=!!v.specularColorMap,me=!!v.specularIntensityMap,ke=K&&!!v.transmissionMap,we=K&&!!v.thicknessMap,Ze=!!v.gradientMap,R=!!v.alphaMap,ae=v.alphaTest>0,U=!!v.alphaHash,ne=!!v.extensions;let ce=_n;v.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(ce=i.toneMapping);const Ge={isWebGL2:d,shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:B,fragmentShader:Z,defines:v.defines,customVertexShaderID:ue,customFragmentShaderID:be,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:We,instancing:fe,instancingColor:fe&&C.instanceColor!==null,instancingMorph:fe&&C.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Mn,alphaToCoverage:!!v.alphaToCoverage,map:Te,matcap:L,envMap:ht,envMapMode:ht&&k.mapping,envMapCubeUVHeight:q,aoMap:xe,lightMap:Fe,bumpMap:Se,normalMap:He,displacementMap:m&&Ne,emissiveMap:Be,normalMapObjectSpace:He&&v.normalMapType===zl,normalMapTangentSpace:He&&v.normalMapType===Vo,metalnessMap:tt,roughnessMap:y,anisotropy:_,anisotropyMap:Pe,clearcoat:z,clearcoatMap:ye,clearcoatNormalMap:se,clearcoatRoughnessMap:oe,iridescence:X,iridescenceMap:De,iridescenceThicknessMap:Q,sheen:$,sheenColorMap:it,sheenRoughnessMap:ze,specularMap:ve,specularColorMap:pe,specularIntensityMap:me,transmission:K,transmissionMap:ke,thicknessMap:we,gradientMap:Ze,opaque:v.transparent===!1&&v.blending===li&&v.alphaToCoverage===!1,alphaMap:R,alphaTest:ae,alphaHash:U,combine:v.combine,mapUv:Te&&p(v.map.channel),aoMapUv:xe&&p(v.aoMap.channel),lightMapUv:Fe&&p(v.lightMap.channel),bumpMapUv:Se&&p(v.bumpMap.channel),normalMapUv:He&&p(v.normalMap.channel),displacementMapUv:Ne&&p(v.displacementMap.channel),emissiveMapUv:Be&&p(v.emissiveMap.channel),metalnessMapUv:tt&&p(v.metalnessMap.channel),roughnessMapUv:y&&p(v.roughnessMap.channel),anisotropyMapUv:Pe&&p(v.anisotropyMap.channel),clearcoatMapUv:ye&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:it&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ze&&p(v.sheenRoughnessMap.channel),specularMapUv:ve&&p(v.specularMap.channel),specularColorMapUv:pe&&p(v.specularColorMap.channel),specularIntensityMapUv:me&&p(v.specularIntensityMap.channel),transmissionMapUv:ke&&p(v.transmissionMap.channel),thicknessMapUv:we&&p(v.thicknessMap.channel),alphaMapUv:R&&p(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(He||_),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!H.attributes.uv&&(Te||R),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:C.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ce,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&te.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Te&&v.map.isVideoTexture===!0&&qe.getTransfer(v.map.colorSpace)===Ke,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===tn,flipSided:v.side===yt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ne&&v.extensions.derivatives===!0,extensionFragDepth:ne&&v.extensions.fragDepth===!0,extensionDrawBuffers:ne&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ne&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ne&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ne&&v.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function T(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const te in v.defines)E.push(te),E.push(v.defines[te]);return v.isRawShaderMaterial===!1&&(S(E,v),b(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function S(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function b(v,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.instancingMorph&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.normalMapObjectSpace&&a.enable(7),E.normalMapTangentSpace&&a.enable(8),E.clearcoat&&a.enable(9),E.iridescence&&a.enable(10),E.alphaTest&&a.enable(11),E.vertexColors&&a.enable(12),E.vertexAlphas&&a.enable(13),E.vertexUv1s&&a.enable(14),E.vertexUv2s&&a.enable(15),E.vertexUv3s&&a.enable(16),E.vertexTangents&&a.enable(17),E.anisotropy&&a.enable(18),E.alphaHash&&a.enable(19),E.batching&&a.enable(20),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),v.push(a.mask)}function D(v){const E=M[v.type];let te;if(E){const J=Wt[E];te=Rh.clone(J.uniforms)}else te=v.uniforms;return te}function w(v,E){let te;for(let J=0,C=h.length;J<C;J++){const W=h[J];if(W.cacheKey===E){te=W,++te.usedTimes;break}}return te===void 0&&(te=new Xp(i,E,v,s),h.push(te)),te}function A(v){if(--v.usedTimes===0){const E=h.indexOf(v);h[E]=h[h.length-1],h.pop(),v.destroy()}}function G(v){c.remove(v)}function ee(){c.dispose()}return{getParameters:u,getProgramCacheKey:T,getUniforms:D,acquireProgram:w,releaseProgram:A,releaseShaderCache:G,programs:h,dispose:ee}}function Zp(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function $p(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function So(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,m,g,M,p){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:M,group:p},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=M,u.group=p),e++,u}function a(d,f,m,g,M,p){const u=o(d,f,m,g,M,p);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function c(d,f,m,g,M,p){const u=o(d,f,m,g,M,p);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function l(d,f){t.length>1&&t.sort(d||$p),n.length>1&&n.sort(f||Mo),r.length>1&&r.sort(f||Mo)}function h(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function Jp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new So,i.set(n,[o])):r>=s.length?(o=new So,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Xe};break;case"SpotLight":t={position:new O,direction:new O,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function em(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let tm=0;function nm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function im(i,e){const t=new Qp,n=em(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new O);const s=new O,o=new Qe,a=new Qe;function c(h,d){let f=0,m=0,g=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let M=0,p=0,u=0,T=0,S=0,b=0,D=0,w=0,A=0,G=0,ee=0;h.sort(nm);const v=d===!0?Math.PI:1;for(let te=0,J=h.length;te<J;te++){const C=h[te],W=C.color,H=C.intensity,Y=C.distance,k=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=W.r*H*v,m+=W.g*H*v,g+=W.b*H*v;else if(C.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(C.sh.coefficients[q],H);ee++}else if(C.isDirectionalLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity*v),C.castShadow){const j=C.shadow,re=n.get(C);re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,r.directionalShadow[M]=re,r.directionalShadowMap[M]=k,r.directionalShadowMatrix[M]=C.shadow.matrix,b++}r.directional[M]=q,M++}else if(C.isSpotLight){const q=t.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(W).multiplyScalar(H*v),q.distance=Y,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,r.spot[u]=q;const j=C.shadow;if(C.map&&(r.spotLightMap[A]=C.map,A++,j.updateMatrices(C),C.castShadow&&G++),r.spotLightMatrix[u]=j.matrix,C.castShadow){const re=n.get(C);re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,r.spotShadow[u]=re,r.spotShadowMap[u]=k,w++}u++}else if(C.isRectAreaLight){const q=t.get(C);q.color.copy(W).multiplyScalar(H),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),r.rectArea[T]=q,T++}else if(C.isPointLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity*v),q.distance=C.distance,q.decay=C.decay,C.castShadow){const j=C.shadow,re=n.get(C);re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,re.shadowCameraNear=j.camera.near,re.shadowCameraFar=j.camera.far,r.pointShadow[p]=re,r.pointShadowMap[p]=k,r.pointShadowMatrix[p]=C.shadow.matrix,D++}r.point[p]=q,p++}else if(C.isHemisphereLight){const q=t.get(C);q.skyColor.copy(C.color).multiplyScalar(H*v),q.groundColor.copy(C.groundColor).multiplyScalar(H*v),r.hemi[S]=q,S++}}T>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==M||E.pointLength!==p||E.spotLength!==u||E.rectAreaLength!==T||E.hemiLength!==S||E.numDirectionalShadows!==b||E.numPointShadows!==D||E.numSpotShadows!==w||E.numSpotMaps!==A||E.numLightProbes!==ee)&&(r.directional.length=M,r.spot.length=u,r.rectArea.length=T,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=w+A-G,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=ee,E.directionalLength=M,E.pointLength=p,E.spotLength=u,E.rectAreaLength=T,E.hemiLength=S,E.numDirectionalShadows=b,E.numPointShadows=D,E.numSpotShadows=w,E.numSpotMaps=A,E.numLightProbes=ee,r.version=tm++)}function l(h,d){let f=0,m=0,g=0,M=0,p=0;const u=d.matrixWorldInverse;for(let T=0,S=h.length;T<S;T++){const b=h[T];if(b.isDirectionalLight){const D=r.directional[f];D.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(u),f++}else if(b.isSpotLight){const D=r.spot[g];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(u),D.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(u),g++}else if(b.isRectAreaLight){const D=r.rectArea[M];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(u),a.identity(),o.copy(b.matrixWorld),o.premultiply(u),a.extractRotation(o),D.halfWidth.set(b.width*.5,0,0),D.halfHeight.set(0,b.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),M++}else if(b.isPointLight){const D=r.point[m];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(u),m++}else if(b.isHemisphereLight){const D=r.hemi[p];D.direction.setFromMatrixPosition(b.matrixWorld),D.direction.transformDirection(u),p++}}}return{setup:c,setupView:l,state:r}}function yo(i,e){const t=new im(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(d){n.push(d)}function a(d){r.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function rm(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new yo(i,e),t.set(s,[c])):o>=a.length?(c=new yo(i,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class sm extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class am extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cm=`uniform sampler2D shadow_pass;
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
}`;function lm(i,e,t){let n=new nc;const r=new Ve,s=new Ve,o=new lt,a=new sm({depthPacking:Bl}),c=new am,l={},h=t.maxTextureSize,d={[vn]:yt,[yt]:vn,[tn]:tn},f=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:om,fragmentShader:cm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Gn;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new wt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lo;let u=this.type;this.render=function(w,A,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const ee=i.getRenderTarget(),v=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),te=i.state;te.setBlending(mn),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const J=u!==en&&this.type===en,C=u===en&&this.type!==en;for(let W=0,H=w.length;W<H;W++){const Y=w[W],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const q=k.getFrameExtents();if(r.multiply(q),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/q.x),r.x=s.x*q.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/q.y),r.y=s.y*q.y,k.mapSize.y=s.y)),k.map===null||J===!0||C===!0){const re=this.type!==en?{minFilter:dt,magFilter:dt}:{};k.map!==null&&k.map.dispose(),k.map=new Fn(r.x,r.y,re),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const j=k.getViewportCount();for(let re=0;re<j;re++){const de=k.getViewport(re);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),te.viewport(o),k.updateMatrices(Y,re),n=k.getFrustum(),b(A,G,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===en&&T(k,G),k.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(ee,v,E)};function T(w,A){const G=e.update(M);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Fn(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,G,f,M,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,G,m,M,null)}function S(w,A,G,ee){let v=null;const E=G.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)v=E;else if(v=G.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const te=v.uuid,J=A.uuid;let C=l[te];C===void 0&&(C={},l[te]=C);let W=C[J];W===void 0&&(W=v.clone(),C[J]=W,A.addEventListener("dispose",D)),v=W}if(v.visible=A.visible,v.wireframe=A.wireframe,ee===en?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:d[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,G.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const te=i.properties.get(v);te.light=G}return v}function b(w,A,G,ee,v){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===en)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld);const J=e.update(w),C=w.material;if(Array.isArray(C)){const W=J.groups;for(let H=0,Y=W.length;H<Y;H++){const k=W[H],q=C[k.materialIndex];if(q&&q.visible){const j=S(w,q,ee,v);w.onBeforeShadow(i,w,A,G,J,j,k),i.renderBufferDirect(G,null,J,j,w,k),w.onAfterShadow(i,w,A,G,J,j,k)}}}else if(C.visible){const W=S(w,C,ee,v);w.onBeforeShadow(i,w,A,G,J,W,null),i.renderBufferDirect(G,null,J,W,w,null),w.onAfterShadow(i,w,A,G,J,W,null)}}const te=w.children;for(let J=0,C=te.length;J<C;J++)b(te[J],A,G,ee,v)}function D(w){w.target.removeEventListener("dispose",D);for(const G in l){const ee=l[G],v=w.target.uuid;v in ee&&(ee[v].dispose(),delete ee[v])}}}function hm(i,e,t){const n=t.isWebGL2;function r(){let R=!1;const ae=new lt;let U=null;const ne=new lt(0,0,0,0);return{setMask:function(ce){U!==ce&&!R&&(i.colorMask(ce,ce,ce,ce),U=ce)},setLocked:function(ce){R=ce},setClear:function(ce,Ge,Ye,ut,Rt){Rt===!0&&(ce*=ut,Ge*=ut,Ye*=ut),ae.set(ce,Ge,Ye,ut),ne.equals(ae)===!1&&(i.clearColor(ce,Ge,Ye,ut),ne.copy(ae))},reset:function(){R=!1,U=null,ne.set(-1,0,0,0)}}}function s(){let R=!1,ae=null,U=null,ne=null;return{setTest:function(ce){ce?fe(i.DEPTH_TEST):We(i.DEPTH_TEST)},setMask:function(ce){ae!==ce&&!R&&(i.depthMask(ce),ae=ce)},setFunc:function(ce){if(U!==ce){switch(ce){case pl:i.depthFunc(i.NEVER);break;case ml:i.depthFunc(i.ALWAYS);break;case _l:i.depthFunc(i.LESS);break;case mr:i.depthFunc(i.LEQUAL);break;case gl:i.depthFunc(i.EQUAL);break;case vl:i.depthFunc(i.GEQUAL);break;case xl:i.depthFunc(i.GREATER);break;case Ml:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}U=ce}},setLocked:function(ce){R=ce},setClear:function(ce){ne!==ce&&(i.clearDepth(ce),ne=ce)},reset:function(){R=!1,ae=null,U=null,ne=null}}}function o(){let R=!1,ae=null,U=null,ne=null,ce=null,Ge=null,Ye=null,ut=null,Rt=null;return{setTest:function(je){R||(je?fe(i.STENCIL_TEST):We(i.STENCIL_TEST))},setMask:function(je){ae!==je&&!R&&(i.stencilMask(je),ae=je)},setFunc:function(je,_t,kt){(U!==je||ne!==_t||ce!==kt)&&(i.stencilFunc(je,_t,kt),U=je,ne=_t,ce=kt)},setOp:function(je,_t,kt){(Ge!==je||Ye!==_t||ut!==kt)&&(i.stencilOp(je,_t,kt),Ge=je,Ye=_t,ut=kt)},setLocked:function(je){R=je},setClear:function(je){Rt!==je&&(i.clearStencil(je),Rt=je)},reset:function(){R=!1,ae=null,U=null,ne=null,ce=null,Ge=null,Ye=null,ut=null,Rt=null}}}const a=new r,c=new s,l=new o,h=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,M=[],p=null,u=!1,T=null,S=null,b=null,D=null,w=null,A=null,G=null,ee=new Xe(0,0,0),v=0,E=!1,te=null,J=null,C=null,W=null,H=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,q=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=q>=2);let re=null,de={};const Ce=i.getParameter(i.SCISSOR_BOX),B=i.getParameter(i.VIEWPORT),Z=new lt().fromArray(Ce),ue=new lt().fromArray(B);function be(R,ae,U,ne){const ce=new Uint8Array(4),Ge=i.createTexture();i.bindTexture(R,Ge),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<U;Ye++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(ae,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(ae+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return Ge}const ge={};ge[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ge[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),fe(i.DEPTH_TEST),c.setFunc(mr),Ne(!1),Be(ea),fe(i.CULL_FACE),Se(mn);function fe(R){f[R]!==!0&&(i.enable(R),f[R]=!0)}function We(R){f[R]!==!1&&(i.disable(R),f[R]=!1)}function Te(R,ae){return m[R]!==ae?(i.bindFramebuffer(R,ae),m[R]=ae,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ae),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ae)),!0):!1}function L(R,ae){let U=M,ne=!1;if(R){U=g.get(ae),U===void 0&&(U=[],g.set(ae,U));const ce=R.textures;if(U.length!==ce.length||U[0]!==i.COLOR_ATTACHMENT0){for(let Ge=0,Ye=ce.length;Ge<Ye;Ge++)U[Ge]=i.COLOR_ATTACHMENT0+Ge;U.length=ce.length,ne=!0}}else U[0]!==i.BACK&&(U[0]=i.BACK,ne=!0);if(ne)if(t.isWebGL2)i.drawBuffers(U);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(U);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ht(R){return p!==R?(i.useProgram(R),p=R,!0):!1}const xe={[Pn]:i.FUNC_ADD,[Qc]:i.FUNC_SUBTRACT,[el]:i.FUNC_REVERSE_SUBTRACT};if(n)xe[ra]=i.MIN,xe[sa]=i.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(xe[ra]=R.MIN_EXT,xe[sa]=R.MAX_EXT)}const Fe={[tl]:i.ZERO,[nl]:i.ONE,[il]:i.SRC_COLOR,[_s]:i.SRC_ALPHA,[ll]:i.SRC_ALPHA_SATURATE,[ol]:i.DST_COLOR,[sl]:i.DST_ALPHA,[rl]:i.ONE_MINUS_SRC_COLOR,[gs]:i.ONE_MINUS_SRC_ALPHA,[cl]:i.ONE_MINUS_DST_COLOR,[al]:i.ONE_MINUS_DST_ALPHA,[hl]:i.CONSTANT_COLOR,[ul]:i.ONE_MINUS_CONSTANT_COLOR,[dl]:i.CONSTANT_ALPHA,[fl]:i.ONE_MINUS_CONSTANT_ALPHA};function Se(R,ae,U,ne,ce,Ge,Ye,ut,Rt,je){if(R===mn){u===!0&&(We(i.BLEND),u=!1);return}if(u===!1&&(fe(i.BLEND),u=!0),R!==Jc){if(R!==T||je!==E){if((S!==Pn||w!==Pn)&&(i.blendEquation(i.FUNC_ADD),S=Pn,w=Pn),je)switch(R){case li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ta:i.blendFunc(i.ONE,i.ONE);break;case na:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ia:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ta:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case na:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ia:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,D=null,A=null,G=null,ee.set(0,0,0),v=0,T=R,E=je}return}ce=ce||ae,Ge=Ge||U,Ye=Ye||ne,(ae!==S||ce!==w)&&(i.blendEquationSeparate(xe[ae],xe[ce]),S=ae,w=ce),(U!==b||ne!==D||Ge!==A||Ye!==G)&&(i.blendFuncSeparate(Fe[U],Fe[ne],Fe[Ge],Fe[Ye]),b=U,D=ne,A=Ge,G=Ye),(ut.equals(ee)===!1||Rt!==v)&&(i.blendColor(ut.r,ut.g,ut.b,Rt),ee.copy(ut),v=Rt),T=R,E=!1}function He(R,ae){R.side===tn?We(i.CULL_FACE):fe(i.CULL_FACE);let U=R.side===yt;ae&&(U=!U),Ne(U),R.blending===li&&R.transparent===!1?Se(mn):Se(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),a.setMask(R.colorWrite);const ne=R.stencilWrite;l.setTest(ne),ne&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),y(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):We(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(R){te!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),te=R)}function Be(R){R!==Kc?(fe(i.CULL_FACE),R!==J&&(R===ea?i.cullFace(i.BACK):R===Zc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):We(i.CULL_FACE),J=R}function tt(R){R!==C&&(k&&i.lineWidth(R),C=R)}function y(R,ae,U){R?(fe(i.POLYGON_OFFSET_FILL),(W!==ae||H!==U)&&(i.polygonOffset(ae,U),W=ae,H=U)):We(i.POLYGON_OFFSET_FILL)}function _(R){R?fe(i.SCISSOR_TEST):We(i.SCISSOR_TEST)}function z(R){R===void 0&&(R=i.TEXTURE0+Y-1),re!==R&&(i.activeTexture(R),re=R)}function X(R,ae,U){U===void 0&&(re===null?U=i.TEXTURE0+Y-1:U=re);let ne=de[U];ne===void 0&&(ne={type:void 0,texture:void 0},de[U]=ne),(ne.type!==R||ne.texture!==ae)&&(re!==U&&(i.activeTexture(U),re=U),i.bindTexture(R,ae||ge[R]),ne.type=R,ne.texture=ae)}function $(){const R=de[re];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function De(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ze(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pe(R){Z.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Z.copy(R))}function me(R){ue.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),ue.copy(R))}function ke(R,ae){let U=d.get(ae);U===void 0&&(U=new WeakMap,d.set(ae,U));let ne=U.get(R);ne===void 0&&(ne=i.getUniformBlockIndex(ae,R.name),U.set(R,ne))}function we(R,ae){const ne=d.get(ae).get(R);h.get(ae)!==ne&&(i.uniformBlockBinding(ae,ne,R.__bindingPointIndex),h.set(ae,ne))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},re=null,de={},m={},g=new WeakMap,M=[],p=null,u=!1,T=null,S=null,b=null,D=null,w=null,A=null,G=null,ee=new Xe(0,0,0),v=0,E=!1,te=null,J=null,C=null,W=null,H=null,Z.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:fe,disable:We,bindFramebuffer:Te,drawBuffers:L,useProgram:ht,setBlending:Se,setMaterial:He,setFlipSided:Ne,setCullFace:Be,setLineWidth:tt,setPolygonOffset:y,setScissorTest:_,activeTexture:z,bindTexture:X,unbindTexture:$,compressedTexImage2D:K,compressedTexImage3D:Pe,texImage2D:ze,texImage3D:ve,updateUBOMapping:ke,uniformBlockBinding:we,texStorage2D:Q,texStorage3D:it,texSubImage2D:ye,texSubImage3D:se,compressedTexSubImage2D:oe,compressedTexSubImage3D:De,scissor:pe,viewport:me,reset:Ze}}function um(i,e,t,n,r,s,o){const a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ve,d=new WeakMap;let f;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(y,_){return g?new OffscreenCanvas(y,_):Sr("canvas")}function p(y,_,z,X){let $=1;const K=tt(y);if((K.width>X||K.height>X)&&($=X/Math.max(K.width,K.height)),$<1||_===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Pe=_?Mr:Math.floor,ye=Pe($*K.width),se=Pe($*K.height);f===void 0&&(f=M(ye,se));const oe=z?M(ye,se):f;return oe.width=ye,oe.height=se,oe.getContext("2d").drawImage(y,0,0,ye,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ye+"x"+se+")."),oe}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),y;return y}function u(y){const _=tt(y);return Es(_.width)&&Es(_.height)}function T(y){return a?!1:y.wrapS!==Ft||y.wrapT!==Ft||y.minFilter!==dt&&y.minFilter!==St}function S(y,_){return y.generateMipmaps&&_&&y.minFilter!==dt&&y.minFilter!==St}function b(y){i.generateMipmap(y)}function D(y,_,z,X,$=!1){if(a===!1)return _;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let K=_;if(_===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),_===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RG8UI),z===i.UNSIGNED_SHORT&&(K=i.RG16UI),z===i.UNSIGNED_INT&&(K=i.RG32UI),z===i.BYTE&&(K=i.RG8I),z===i.SHORT&&(K=i.RG16I),z===i.INT&&(K=i.RG32I)),_===i.RGBA){const Pe=$?_r:qe.getTransfer(X);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=Pe===Ke?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function w(y,_,z){return S(y,z)===!0||y.isFramebufferTexture&&y.minFilter!==dt&&y.minFilter!==St?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function A(y){return y===dt||y===aa||y===yi?i.NEAREST:i.LINEAR}function G(y){const _=y.target;_.removeEventListener("dispose",G),v(_),_.isVideoTexture&&d.delete(_)}function ee(y){const _=y.target;_.removeEventListener("dispose",ee),te(_)}function v(y){const _=n.get(y);if(_.__webglInit===void 0)return;const z=y.source,X=m.get(z);if(X){const $=X[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(y),Object.keys(X).length===0&&m.delete(z)}n.remove(y)}function E(y){const _=n.get(y);i.deleteTexture(_.__webglTexture);const z=y.source,X=m.get(z);delete X[_.__cacheKey],o.memory.textures--}function te(y){const _=n.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let $=0;$<_.__webglFramebuffer[X].length;$++)i.deleteFramebuffer(_.__webglFramebuffer[X][$]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=y.textures;for(let X=0,$=z.length;X<$;X++){const K=n.get(z[X]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(z[X])}n.remove(y)}let J=0;function C(){J=0}function W(){const y=J;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),J+=1,y}function H(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function Y(y,_){const z=n.get(y);if(y.isVideoTexture&&Ne(y),y.isRenderTargetTexture===!1&&y.version>0&&z.__version!==y.version){const X=y.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(z,y,_);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function k(y,_){const z=n.get(y);if(y.version>0&&z.__version!==y.version){ue(z,y,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function q(y,_){const z=n.get(y);if(y.version>0&&z.__version!==y.version){ue(z,y,_);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function j(y,_){const z=n.get(y);if(y.version>0&&z.__version!==y.version){be(z,y,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}const re={[Ms]:i.REPEAT,[Ft]:i.CLAMP_TO_EDGE,[Ss]:i.MIRRORED_REPEAT},de={[dt]:i.NEAREST,[aa]:i.NEAREST_MIPMAP_NEAREST,[yi]:i.NEAREST_MIPMAP_LINEAR,[St]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},Ce={[Gl]:i.NEVER,[ql]:i.ALWAYS,[Hl]:i.LESS,[Wo]:i.LEQUAL,[kl]:i.EQUAL,[Xl]:i.GEQUAL,[Vl]:i.GREATER,[Wl]:i.NOTEQUAL};function B(y,_,z){if(_.type===Xt&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===St||_.magFilter===Or||_.magFilter===yi||_.magFilter===Ln||_.minFilter===St||_.minFilter===Or||_.minFilter===yi||_.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),z?(i.texParameteri(y,i.TEXTURE_WRAP_S,re[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,re[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,re[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,de[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,de[_.minFilter])):(i.texParameteri(y,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(y,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==Ft||_.wrapT!==Ft)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,i.TEXTURE_MAG_FILTER,A(_.magFilter)),i.texParameteri(y,i.TEXTURE_MIN_FILTER,A(_.minFilter)),_.minFilter!==dt&&_.minFilter!==St&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Ce[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===dt||_.minFilter!==yi&&_.minFilter!==Ln||_.type===Xt&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===Li&&e.has("OES_texture_half_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Z(y,_){let z=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",G));const X=_.source;let $=m.get(X);$===void 0&&($={},m.set(X,$));const K=H(_);if(K!==y.__cacheKey){$[K]===void 0&&($[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),$[K].usedTimes++;const Pe=$[y.__cacheKey];Pe!==void 0&&($[y.__cacheKey].usedTimes--,Pe.usedTimes===0&&E(_)),y.__cacheKey=K,y.__webglTexture=$[K].texture}return z}function ue(y,_,z){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);const $=Z(y,_),K=_.source;t.bindTexture(X,y.__webglTexture,i.TEXTURE0+z);const Pe=n.get(K);if(K.version!==Pe.__version||$===!0){t.activeTexture(i.TEXTURE0+z);const ye=qe.getPrimaries(qe.workingColorSpace),se=_.colorSpace===dn?null:qe.getPrimaries(_.colorSpace),oe=_.colorSpace===dn||ye===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const De=T(_)&&u(_.image)===!1;let Q=p(_.image,De,!1,r.maxTextureSize);Q=Be(_,Q);const it=u(Q)||a,ze=s.convert(_.format,_.colorSpace);let ve=s.convert(_.type),pe=D(_.internalFormat,ze,ve,_.colorSpace,_.isVideoTexture);B(X,_,it);let me;const ke=_.mipmaps,we=a&&_.isVideoTexture!==!0&&pe!==ko,Ze=Pe.__version===void 0||$===!0,R=K.dataReady,ae=w(_,Q,it);if(_.isDepthTexture)pe=i.DEPTH_COMPONENT,a?_.type===Xt?pe=i.DEPTH_COMPONENT32F:_.type===fn?pe=i.DEPTH_COMPONENT24:_.type===Un?pe=i.DEPTH24_STENCIL8:pe=i.DEPTH_COMPONENT16:_.type===Xt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Nn&&pe===i.DEPTH_COMPONENT&&_.type!==Cs&&_.type!==fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=fn,ve=s.convert(_.type)),_.format===fi&&pe===i.DEPTH_COMPONENT&&(pe=i.DEPTH_STENCIL,_.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Un,ve=s.convert(_.type))),Ze&&(we?t.texStorage2D(i.TEXTURE_2D,1,pe,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,pe,Q.width,Q.height,0,ze,ve,null));else if(_.isDataTexture)if(ke.length>0&&it){we&&Ze&&t.texStorage2D(i.TEXTURE_2D,ae,pe,ke[0].width,ke[0].height);for(let U=0,ne=ke.length;U<ne;U++)me=ke[U],we?R&&t.texSubImage2D(i.TEXTURE_2D,U,0,0,me.width,me.height,ze,ve,me.data):t.texImage2D(i.TEXTURE_2D,U,pe,me.width,me.height,0,ze,ve,me.data);_.generateMipmaps=!1}else we?(Ze&&t.texStorage2D(i.TEXTURE_2D,ae,pe,Q.width,Q.height),R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,ze,ve,Q.data)):t.texImage2D(i.TEXTURE_2D,0,pe,Q.width,Q.height,0,ze,ve,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){we&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,pe,ke[0].width,ke[0].height,Q.depth);for(let U=0,ne=ke.length;U<ne;U++)me=ke[U],_.format!==Bt?ze!==null?we?R&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,U,0,0,0,me.width,me.height,Q.depth,ze,me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,U,pe,me.width,me.height,Q.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?R&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,U,0,0,0,me.width,me.height,Q.depth,ze,ve,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,U,pe,me.width,me.height,Q.depth,0,ze,ve,me.data)}else{we&&Ze&&t.texStorage2D(i.TEXTURE_2D,ae,pe,ke[0].width,ke[0].height);for(let U=0,ne=ke.length;U<ne;U++)me=ke[U],_.format!==Bt?ze!==null?we?R&&t.compressedTexSubImage2D(i.TEXTURE_2D,U,0,0,me.width,me.height,ze,me.data):t.compressedTexImage2D(i.TEXTURE_2D,U,pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?R&&t.texSubImage2D(i.TEXTURE_2D,U,0,0,me.width,me.height,ze,ve,me.data):t.texImage2D(i.TEXTURE_2D,U,pe,me.width,me.height,0,ze,ve,me.data)}else if(_.isDataArrayTexture)we?(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,pe,Q.width,Q.height,Q.depth),R&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ze,ve,Q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,Q.width,Q.height,Q.depth,0,ze,ve,Q.data);else if(_.isData3DTexture)we?(Ze&&t.texStorage3D(i.TEXTURE_3D,ae,pe,Q.width,Q.height,Q.depth),R&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ze,ve,Q.data)):t.texImage3D(i.TEXTURE_3D,0,pe,Q.width,Q.height,Q.depth,0,ze,ve,Q.data);else if(_.isFramebufferTexture){if(Ze)if(we)t.texStorage2D(i.TEXTURE_2D,ae,pe,Q.width,Q.height);else{let U=Q.width,ne=Q.height;for(let ce=0;ce<ae;ce++)t.texImage2D(i.TEXTURE_2D,ce,pe,U,ne,0,ze,ve,null),U>>=1,ne>>=1}}else if(ke.length>0&&it){if(we&&Ze){const U=tt(ke[0]);t.texStorage2D(i.TEXTURE_2D,ae,pe,U.width,U.height)}for(let U=0,ne=ke.length;U<ne;U++)me=ke[U],we?R&&t.texSubImage2D(i.TEXTURE_2D,U,0,0,ze,ve,me):t.texImage2D(i.TEXTURE_2D,U,pe,ze,ve,me);_.generateMipmaps=!1}else if(we){if(Ze){const U=tt(Q);t.texStorage2D(i.TEXTURE_2D,ae,pe,U.width,U.height)}R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,ve,Q)}else t.texImage2D(i.TEXTURE_2D,0,pe,ze,ve,Q);S(_,it)&&b(X),Pe.__version=K.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function be(y,_,z){if(_.image.length!==6)return;const X=Z(y,_),$=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+z);const K=n.get($);if($.version!==K.__version||X===!0){t.activeTexture(i.TEXTURE0+z);const Pe=qe.getPrimaries(qe.workingColorSpace),ye=_.colorSpace===dn?null:qe.getPrimaries(_.colorSpace),se=_.colorSpace===dn||Pe===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const oe=_.isCompressedTexture||_.image[0].isCompressedTexture,De=_.image[0]&&_.image[0].isDataTexture,Q=[];for(let U=0;U<6;U++)!oe&&!De?Q[U]=p(_.image[U],!1,!0,r.maxCubemapSize):Q[U]=De?_.image[U].image:_.image[U],Q[U]=Be(_,Q[U]);const it=Q[0],ze=u(it)||a,ve=s.convert(_.format,_.colorSpace),pe=s.convert(_.type),me=D(_.internalFormat,ve,pe,_.colorSpace),ke=a&&_.isVideoTexture!==!0,we=K.__version===void 0||X===!0,Ze=$.dataReady;let R=w(_,it,ze);B(i.TEXTURE_CUBE_MAP,_,ze);let ae;if(oe){ke&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,R,me,it.width,it.height);for(let U=0;U<6;U++){ae=Q[U].mipmaps;for(let ne=0;ne<ae.length;ne++){const ce=ae[ne];_.format!==Bt?ve!==null?ke?Ze&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ne,0,0,ce.width,ce.height,ve,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ne,me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?Ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ne,0,0,ce.width,ce.height,ve,pe,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ne,me,ce.width,ce.height,0,ve,pe,ce.data)}}}else{if(ae=_.mipmaps,ke&&we){ae.length>0&&R++;const U=tt(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,R,me,U.width,U.height)}for(let U=0;U<6;U++)if(De){ke?Ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,Q[U].width,Q[U].height,ve,pe,Q[U].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,me,Q[U].width,Q[U].height,0,ve,pe,Q[U].data);for(let ne=0;ne<ae.length;ne++){const Ge=ae[ne].image[U].image;ke?Ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ne+1,0,0,Ge.width,Ge.height,ve,pe,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ne+1,me,Ge.width,Ge.height,0,ve,pe,Ge.data)}}else{ke?Ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,ve,pe,Q[U]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,me,ve,pe,Q[U]);for(let ne=0;ne<ae.length;ne++){const ce=ae[ne];ke?Ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ne+1,0,0,ve,pe,ce.image[U]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,ne+1,me,ve,pe,ce.image[U])}}}S(_,ze)&&b(i.TEXTURE_CUBE_MAP),K.__version=$.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function ge(y,_,z,X,$,K){const Pe=s.convert(z.format,z.colorSpace),ye=s.convert(z.type),se=D(z.internalFormat,Pe,ye,z.colorSpace);if(!n.get(_).__hasExternalTextures){const De=Math.max(1,_.width>>K),Q=Math.max(1,_.height>>K);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,K,se,De,Q,_.depth,0,Pe,ye,null):t.texImage2D($,K,se,De,Q,0,Pe,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),He(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,$,n.get(z).__webglTexture,0,Se(_)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,$,n.get(z).__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(y,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer&&!_.stencilBuffer){let X=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||He(_)){const $=_.depthTexture;$&&$.isDepthTexture&&($.type===Xt?X=i.DEPTH_COMPONENT32F:$.type===fn&&(X=i.DEPTH_COMPONENT24));const K=Se(_);He(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,X,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,K,X,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,X,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,y)}else if(_.depthBuffer&&_.stencilBuffer){const X=Se(_);z&&He(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,X,i.DEPTH24_STENCIL8,_.width,_.height):He(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,X,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,y)}else{const X=_.textures;for(let $=0;$<X.length;$++){const K=X[$],Pe=s.convert(K.format,K.colorSpace),ye=s.convert(K.type),se=D(K.internalFormat,Pe,ye,K.colorSpace),oe=Se(_);z&&He(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,se,_.width,_.height):He(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,se,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,se,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);const X=n.get(_.depthTexture).__webglTexture,$=Se(_);if(_.depthTexture.format===Nn)He(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0);else if(_.depthTexture.format===fi)He(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Te(y){const _=n.get(y),z=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");We(_.__webglFramebuffer,y)}else if(z){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]=i.createRenderbuffer(),fe(_.__webglDepthbuffer[X],y,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),fe(_.__webglDepthbuffer,y,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function L(y,_,z){const X=n.get(y);_!==void 0&&ge(X.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Te(y)}function ht(y){const _=y.texture,z=n.get(y),X=n.get(_);y.addEventListener("dispose",ee);const $=y.textures,K=y.isWebGLCubeRenderTarget===!0,Pe=$.length>1,ye=u(y)||a;if(Pe||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[se]=[];for(let oe=0;oe<_.mipmaps.length;oe++)z.__webglFramebuffer[se][oe]=i.createFramebuffer()}else z.__webglFramebuffer[se]=i.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let se=0;se<_.mipmaps.length;se++)z.__webglFramebuffer[se]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Pe)if(r.drawBuffers)for(let se=0,oe=$.length;se<oe;se++){const De=n.get($[se]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&He(y)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let se=0;se<$.length;se++){const oe=$[se];z.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[se]);const De=s.convert(oe.format,oe.colorSpace),Q=s.convert(oe.type),it=D(oe.internalFormat,De,Q,oe.colorSpace,y.isXRRenderTarget===!0),ze=Se(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,it,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,z.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(z.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),B(i.TEXTURE_CUBE_MAP,_,ye);for(let se=0;se<6;se++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)ge(z.__webglFramebuffer[se][oe],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,oe);else ge(z.__webglFramebuffer[se],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);S(_,ye)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let se=0,oe=$.length;se<oe;se++){const De=$[se],Q=n.get(De);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),B(i.TEXTURE_2D,De,ye),ge(z.__webglFramebuffer,y,De,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,0),S(De,ye)&&b(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?se=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,X.__webglTexture),B(se,_,ye),a&&_.mipmaps&&_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)ge(z.__webglFramebuffer[oe],y,_,i.COLOR_ATTACHMENT0,se,oe);else ge(z.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,se,0);S(_,ye)&&b(se),t.unbindTexture()}y.depthBuffer&&Te(y)}function xe(y){const _=u(y)||a,z=y.textures;for(let X=0,$=z.length;X<$;X++){const K=z[X];if(S(K,_)){const Pe=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ye=n.get(K).__webglTexture;t.bindTexture(Pe,ye),b(Pe),t.unbindTexture()}}}function Fe(y){if(a&&y.samples>0&&He(y)===!1){const _=y.textures,z=y.width,X=y.height;let $=i.COLOR_BUFFER_BIT;const K=[],Pe=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(y),se=_.length>1;if(se)for(let oe=0;oe<_.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let oe=0;oe<_.length;oe++){K.push(i.COLOR_ATTACHMENT0+oe),y.depthBuffer&&K.push(Pe);const De=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(De===!1&&(y.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),se&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[oe]),De===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Pe])),se){const Q=n.get(_[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,z,X,0,0,z,X,$,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let oe=0;oe<_.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,ye.__webglColorRenderbuffer[oe]);const De=n.get(_[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function Se(y){return Math.min(r.maxSamples,y.samples)}function He(y){const _=n.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ne(y){const _=o.render.frame;d.get(y)!==_&&(d.set(y,_),y.update())}function Be(y,_){const z=y.colorSpace,X=y.format,$=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===ys||z!==Mn&&z!==dn&&(qe.getTransfer(z)===Ke?a===!1?e.has("EXT_sRGB")===!0&&X===Bt?(y.format=ys,y.minFilter=St,y.generateMipmaps=!1):_=qo.sRGBToLinear(_):(X!==Bt||$!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function tt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(h.width=y.naturalWidth||y.width,h.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(h.width=y.displayWidth,h.height=y.displayHeight):(h.width=y.width,h.height=y.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=C,this.setTexture2D=Y,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=L,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=He}function dm(i,e,t){const n=t.isWebGL2;function r(s,o=dn){let a;const c=qe.getTransfer(o);if(s===gn)return i.UNSIGNED_BYTE;if(s===Oo)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Fo)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Pl)return i.BYTE;if(s===Dl)return i.SHORT;if(s===Cs)return i.UNSIGNED_SHORT;if(s===No)return i.INT;if(s===fn)return i.UNSIGNED_INT;if(s===Xt)return i.FLOAT;if(s===Li)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ll)return i.ALPHA;if(s===Bt)return i.RGBA;if(s===Il)return i.LUMINANCE;if(s===Ul)return i.LUMINANCE_ALPHA;if(s===Nn)return i.DEPTH_COMPONENT;if(s===fi)return i.DEPTH_STENCIL;if(s===ys)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Bo)return i.RED;if(s===zo)return i.RED_INTEGER;if(s===Nl)return i.RG;if(s===Go)return i.RG_INTEGER;if(s===Ho)return i.RGBA_INTEGER;if(s===Fr||s===Br||s===zr||s===Gr)if(c===Ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Fr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Fr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Br)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===oa||s===ca||s===la||s===ha)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===oa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ca)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===la)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ha)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ko)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ua||s===da)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ua)return c===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===da)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fa||s===pa||s===ma||s===_a||s===ga||s===va||s===xa||s===Ma||s===Sa||s===ya||s===Ea||s===ba||s===Ta||s===Aa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===fa)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===pa)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ma)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_a)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ga)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===va)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===xa)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ma)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sa)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ya)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ea)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ba)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ta)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Aa)return c===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hr||s===wa||s===Ra)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Hr)return c===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ra)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ol||s===Ca||s===Pa||s===Da)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Hr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ca)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Pa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Da)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Un?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class fm extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ar extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pm={type:"move"};class ds{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,n),u=this._getHandJoint(l,M);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pm)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ar;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const mm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_m=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Mt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new xn({extensions:{fragDepth:!0},vertexShader:mm,fragmentShader:_m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wt(new Ar(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class vm extends Bn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,g=null;const M=new gm,p=t.getContextAttributes();let u=null,T=null;const S=[],b=[],D=new Ve;let w=null;const A=new Lt;A.layers.enable(1),A.viewport=new lt;const G=new Lt;G.layers.enable(2),G.viewport=new lt;const ee=[A,G],v=new fm;v.layers.enable(1),v.layers.enable(2);let E=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Z=S[B];return Z===void 0&&(Z=new ds,S[B]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(B){let Z=S[B];return Z===void 0&&(Z=new ds,S[B]=Z),Z.getGripSpace()},this.getHand=function(B){let Z=S[B];return Z===void 0&&(Z=new ds,S[B]=Z),Z.getHandSpace()};function J(B){const Z=b.indexOf(B.inputSource);if(Z===-1)return;const ue=S[Z];ue!==void 0&&(ue.update(B.inputSource,B.frame,l||o),ue.dispatchEvent({type:B.type,data:B.inputSource}))}function C(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",C),r.removeEventListener("inputsourceschange",W);for(let B=0;B<S.length;B++){const Z=b[B];Z!==null&&(b[B]=null,S[B].disconnect(Z))}E=null,te=null,M.reset(),e.setRenderTarget(u),m=null,f=null,d=null,r=null,T=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",C),r.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Fn(m.framebufferWidth,m.framebufferHeight,{format:Bt,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Z=null,ue=null,be=null;p.depth&&(be=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=p.stencil?fi:Nn,ue=p.stencil?Un:fn);const ge={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Fn(f.textureWidth,f.textureHeight,{format:Bt,type:gn,depthTexture:new sc(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const fe=e.properties.get(T);fe.__ignoreDepthValues=f.ignoreDepthValues}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Ce.setContext(r),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function W(B){for(let Z=0;Z<B.removed.length;Z++){const ue=B.removed[Z],be=b.indexOf(ue);be>=0&&(b[be]=null,S[be].disconnect(ue))}for(let Z=0;Z<B.added.length;Z++){const ue=B.added[Z];let be=b.indexOf(ue);if(be===-1){for(let fe=0;fe<S.length;fe++)if(fe>=b.length){b.push(ue),be=fe;break}else if(b[fe]===null){b[fe]=ue,be=fe;break}if(be===-1)break}const ge=S[be];ge&&ge.connect(ue)}}const H=new O,Y=new O;function k(B,Z,ue){H.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(ue.matrixWorld);const be=H.distanceTo(Y),ge=Z.projectionMatrix.elements,fe=ue.projectionMatrix.elements,We=ge[14]/(ge[10]-1),Te=ge[14]/(ge[10]+1),L=(ge[9]+1)/ge[5],ht=(ge[9]-1)/ge[5],xe=(ge[8]-1)/ge[0],Fe=(fe[8]+1)/fe[0],Se=We*xe,He=We*Fe,Ne=be/(-xe+Fe),Be=Ne*-xe;Z.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Be),B.translateZ(Ne),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const tt=We+Ne,y=Te+Ne,_=Se-Be,z=He+(be-Be),X=L*Te/y*tt,$=ht*Te/y*tt;B.projectionMatrix.makePerspective(_,z,X,$,tt,y),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function q(B,Z){Z===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Z.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;M.texture!==null&&(B.near=M.depthNear,B.far=M.depthFar),v.near=G.near=A.near=B.near,v.far=G.far=A.far=B.far,(E!==v.near||te!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,te=v.far,A.near=E,A.far=te,G.near=E,G.far=te,A.updateProjectionMatrix(),G.updateProjectionMatrix(),B.updateProjectionMatrix());const Z=B.parent,ue=v.cameras;q(v,Z);for(let be=0;be<ue.length;be++)q(ue[be],Z);ue.length===2?k(v,A,G):v.projectionMatrix.copy(A.projectionMatrix),j(B,v,Z)};function j(B,Z,ue){ue===null?B.matrix.copy(Z.matrixWorld):(B.matrix.copy(ue.matrixWorld),B.matrix.invert(),B.matrix.multiply(Z.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Z.projectionMatrix),B.projectionMatrixInverse.copy(Z.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Ii*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(B){c=B,f!==null&&(f.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return M.texture!==null};let re=null;function de(B,Z){if(h=Z.getViewerPose(l||o),g=Z,h!==null){const ue=h.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let be=!1;ue.length!==v.cameras.length&&(v.cameras.length=0,be=!0);for(let fe=0;fe<ue.length;fe++){const We=ue[fe];let Te=null;if(m!==null)Te=m.getViewport(We);else{const ht=d.getViewSubImage(f,We);Te=ht.viewport,fe===0&&(e.setRenderTargetTextures(T,ht.colorTexture,f.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(T))}let L=ee[fe];L===void 0&&(L=new Lt,L.layers.enable(fe),L.viewport=new lt,ee[fe]=L),L.matrix.fromArray(We.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(We.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Te.x,Te.y,Te.width,Te.height),fe===0&&(v.matrix.copy(L.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),be===!0&&v.cameras.push(L)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const fe=d.getDepthInformation(ue[0]);fe&&fe.isValid&&fe.texture&&M.init(e,fe,r.renderState)}}for(let ue=0;ue<S.length;ue++){const be=b[ue],ge=S[ue];be!==null&&ge!==void 0&&ge.update(be,Z,l||o)}M.render(e,v),re&&re(B,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ce=new ic;Ce.setAnimationLoop(de),this.setAnimationLoop=function(B){re=B},this.dispose=function(){}}}const Rn=new Yt,xm=new Qe;function Mm(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Qo(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,T,S,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,b)):u.isMeshMatcapMaterial?(s(p,u),g(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),M(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?c(p,u,T,S):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===yt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===yt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const T=e.get(u),S=T.envMap,b=T.envMapRotation;if(S&&(p.envMap.value=S,Rn.copy(b),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),p.envMapRotation.value.setFromMatrix4(xm.makeRotationFromEuler(Rn)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const D=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*D,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,T,S){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*T,p.scale.value=S*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,T){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function M(p,u){const T=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Sm(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(T,S){const b=S.program;n.uniformBlockBinding(T,b)}function l(T,S){let b=r[T.id];b===void 0&&(g(T),b=h(T),r[T.id]=b,T.addEventListener("dispose",p));const D=S.program;n.updateUBOMapping(T,D);const w=e.render.frame;s[T.id]!==w&&(f(T),s[T.id]=w)}function h(T){const S=d();T.__bindingPointIndex=S;const b=i.createBuffer(),D=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,D,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const S=r[T.id],b=T.uniforms,D=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,A=b.length;w<A;w++){const G=Array.isArray(b[w])?b[w]:[b[w]];for(let ee=0,v=G.length;ee<v;ee++){const E=G[ee];if(m(E,w,ee,D)===!0){const te=E.__offset,J=Array.isArray(E.value)?E.value:[E.value];let C=0;for(let W=0;W<J.length;W++){const H=J[W],Y=M(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,te+C,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,C),C+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,te,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,S,b,D){const w=T.value,A=S+"_"+b;if(D[A]===void 0)return typeof w=="number"||typeof w=="boolean"?D[A]=w:D[A]=w.clone(),!0;{const G=D[A];if(typeof w=="number"||typeof w=="boolean"){if(G!==w)return D[A]=w,!0}else if(G.equals(w)===!1)return G.copy(w),!0}return!1}function g(T){const S=T.uniforms;let b=0;const D=16;for(let A=0,G=S.length;A<G;A++){const ee=Array.isArray(S[A])?S[A]:[S[A]];for(let v=0,E=ee.length;v<E;v++){const te=ee[v],J=Array.isArray(te.value)?te.value:[te.value];for(let C=0,W=J.length;C<W;C++){const H=J[C],Y=M(H),k=b%D;k!==0&&D-k<Y.boundary&&(b+=D-k),te.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=b,b+=Y.storage}}}const w=b%D;return w>0&&(b+=D-w),T.__size=b,T.__cache={},this}function M(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function p(T){const S=T.target;S.removeEventListener("dispose",p);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function u(){for(const T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:c,update:l,dispose:u}}class uc{constructor(e={}){const{canvas:t=lh(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let M=null,p=null;const u=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=_n,this.toneMappingExposure=1;const S=this;let b=!1,D=0,w=0,A=null,G=-1,ee=null;const v=new lt,E=new lt;let te=null;const J=new Xe(0);let C=0,W=t.width,H=t.height,Y=1,k=null,q=null;const j=new lt(0,0,W,H),re=new lt(0,0,W,H);let de=!1;const Ce=new nc;let B=!1,Z=!1,ue=null;const be=new Qe,ge=new Ve,fe=new O,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return A===null?Y:1}let L=n;function ht(x,P){for(let N=0;N<x.length;N++){const F=x[N],I=t.getContext(F,P);if(I!==null)return I}return null}try{const x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rs}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",ae,!1),L===null){const P=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&P.shift(),L=ht(P,x),L===null)throw ht(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let xe,Fe,Se,He,Ne,Be,tt,y,_,z,X,$,K,Pe,ye,se,oe,De,Q,it,ze,ve,pe,me;function ke(){xe=new wf(L),Fe=new Sf(L,xe,e),xe.init(Fe),ve=new dm(L,xe,Fe),Se=new hm(L,xe,Fe),He=new Pf(L),Ne=new Zp,Be=new um(L,xe,Se,Ne,Fe,ve,He),tt=new Ef(S),y=new Af(S),_=new Nh(L,Fe),pe=new xf(L,xe,_,Fe),z=new Rf(L,_,He,pe),X=new Uf(L,z,_,He),Q=new If(L,Fe,Be),se=new yf(Ne),$=new Kp(S,tt,y,xe,Fe,pe,se),K=new Mm(S,Ne),Pe=new Jp,ye=new rm(xe,Fe),De=new vf(S,tt,y,Se,X,f,c),oe=new lm(S,X,Fe),me=new Sm(L,He,Fe,Se),it=new Mf(L,xe,He,Fe),ze=new Cf(L,xe,He,Fe),He.programs=$.programs,S.capabilities=Fe,S.extensions=xe,S.properties=Ne,S.renderLists=Pe,S.shadowMap=oe,S.state=Se,S.info=He}ke();const we=new vm(S,L);this.xr=we,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const x=xe.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=xe.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(x){x!==void 0&&(Y=x,this.setSize(W,H,!1))},this.getSize=function(x){return x.set(W,H)},this.setSize=function(x,P,N=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=x,H=P,t.width=Math.floor(x*Y),t.height=Math.floor(P*Y),N===!0&&(t.style.width=x+"px",t.style.height=P+"px"),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(W*Y,H*Y).floor()},this.setDrawingBufferSize=function(x,P,N){W=x,H=P,Y=N,t.width=Math.floor(x*N),t.height=Math.floor(P*N),this.setViewport(0,0,x,P)},this.getCurrentViewport=function(x){return x.copy(v)},this.getViewport=function(x){return x.copy(j)},this.setViewport=function(x,P,N,F){x.isVector4?j.set(x.x,x.y,x.z,x.w):j.set(x,P,N,F),Se.viewport(v.copy(j).multiplyScalar(Y).round())},this.getScissor=function(x){return x.copy(re)},this.setScissor=function(x,P,N,F){x.isVector4?re.set(x.x,x.y,x.z,x.w):re.set(x,P,N,F),Se.scissor(E.copy(re).multiplyScalar(Y).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(x){Se.setScissorTest(de=x)},this.setOpaqueSort=function(x){k=x},this.setTransparentSort=function(x){q=x},this.getClearColor=function(x){return x.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(x=!0,P=!0,N=!0){let F=0;if(x){let I=!1;if(A!==null){const le=A.texture.format;I=le===Ho||le===Go||le===zo}if(I){const le=A.texture.type,_e=le===gn||le===fn||le===Cs||le===Un||le===Oo||le===Fo,Me=De.getClearColor(),Ee=De.getClearAlpha(),Oe=Me.r,Ae=Me.g,Re=Me.b;_e?(m[0]=Oe,m[1]=Ae,m[2]=Re,m[3]=Ee,L.clearBufferuiv(L.COLOR,0,m)):(g[0]=Oe,g[1]=Ae,g[2]=Re,g[3]=Ee,L.clearBufferiv(L.COLOR,0,g))}else F|=L.COLOR_BUFFER_BIT}P&&(F|=L.DEPTH_BUFFER_BIT),N&&(F|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Pe.dispose(),ye.dispose(),Ne.dispose(),tt.dispose(),y.dispose(),X.dispose(),pe.dispose(),me.dispose(),$.dispose(),we.dispose(),we.removeEventListener("sessionstart",Rt),we.removeEventListener("sessionend",je),ue&&(ue.dispose(),ue=null),_t.stop()};function Ze(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const x=He.autoReset,P=oe.enabled,N=oe.autoUpdate,F=oe.needsUpdate,I=oe.type;ke(),He.autoReset=x,oe.enabled=P,oe.autoUpdate=N,oe.needsUpdate=F,oe.type=I}function ae(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function U(x){const P=x.target;P.removeEventListener("dispose",U),ne(P)}function ne(x){ce(x),Ne.remove(x)}function ce(x){const P=Ne.get(x).programs;P!==void 0&&(P.forEach(function(N){$.releaseProgram(N)}),x.isShaderMaterial&&$.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,N,F,I,le){P===null&&(P=We);const _e=I.isMesh&&I.matrixWorld.determinant()<0,Me=Xc(x,P,N,F,I);Se.setMaterial(F,_e);let Ee=N.index,Oe=1;if(F.wireframe===!0){if(Ee=z.getWireframeAttribute(N),Ee===void 0)return;Oe=2}const Ae=N.drawRange,Re=N.attributes.position;let nt=Ae.start*Oe,bt=(Ae.start+Ae.count)*Oe;le!==null&&(nt=Math.max(nt,le.start*Oe),bt=Math.min(bt,(le.start+le.count)*Oe)),Ee!==null?(nt=Math.max(nt,0),bt=Math.min(bt,Ee.count)):Re!=null&&(nt=Math.max(nt,0),bt=Math.min(bt,Re.count));const ot=bt-nt;if(ot<0||ot===1/0)return;pe.setup(I,F,Me,N,Ee);let jt,et=it;if(Ee!==null&&(jt=_.get(Ee),et=ze,et.setIndex(jt)),I.isMesh)F.wireframe===!0?(Se.setLineWidth(F.wireframeLinewidth*Te()),et.setMode(L.LINES)):et.setMode(L.TRIANGLES);else if(I.isLine){let Le=F.linewidth;Le===void 0&&(Le=1),Se.setLineWidth(Le*Te()),I.isLineSegments?et.setMode(L.LINES):I.isLineLoop?et.setMode(L.LINE_LOOP):et.setMode(L.LINE_STRIP)}else I.isPoints?et.setMode(L.POINTS):I.isSprite&&et.setMode(L.TRIANGLES);if(I.isBatchedMesh)et.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)et.renderInstances(nt,ot,I.count);else if(N.isInstancedBufferGeometry){const Le=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Lr=Math.min(N.instanceCount,Le);et.renderInstances(nt,ot,Lr)}else et.render(nt,ot)};function Ge(x,P,N){x.transparent===!0&&x.side===tn&&x.forceSinglePass===!1?(x.side=yt,x.needsUpdate=!0,Bi(x,P,N),x.side=vn,x.needsUpdate=!0,Bi(x,P,N),x.side=tn):Bi(x,P,N)}this.compile=function(x,P,N=null){N===null&&(N=x),p=ye.get(N),p.init(),T.push(p),N.traverseVisible(function(I){I.isLight&&I.layers.test(P.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),x!==N&&x.traverseVisible(function(I){I.isLight&&I.layers.test(P.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights(S._useLegacyLights);const F=new Set;return x.traverse(function(I){const le=I.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){const Me=le[_e];Ge(Me,N,I),F.add(Me)}else Ge(le,N,I),F.add(le)}),T.pop(),p=null,F},this.compileAsync=function(x,P,N=null){const F=this.compile(x,P,N);return new Promise(I=>{function le(){if(F.forEach(function(_e){Ne.get(_e).currentProgram.isReady()&&F.delete(_e)}),F.size===0){I(x);return}setTimeout(le,10)}xe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ye=null;function ut(x){Ye&&Ye(x)}function Rt(){_t.stop()}function je(){_t.start()}const _t=new ic;_t.setAnimationLoop(ut),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(x){Ye=x,we.setAnimationLoop(x),x===null?_t.stop():_t.start()},we.addEventListener("sessionstart",Rt),we.addEventListener("sessionend",je),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(P),P=we.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,P,A),p=ye.get(x,T.length),p.init(),T.push(p),be.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Ce.setFromProjectionMatrix(be),Z=this.localClippingEnabled,B=se.init(this.clippingPlanes,Z),M=Pe.get(x,u.length),M.init(),u.push(M),kt(x,P,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(k,q),this.info.render.frame++,B===!0&&se.beginShadows();const N=p.state.shadowsArray;if(oe.render(N,x,P),B===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1)&&De.render(M,x),p.setupLights(S._useLegacyLights),P.isArrayCamera){const F=P.cameras;for(let I=0,le=F.length;I<le;I++){const _e=F[I];js(M,x,_e,_e.viewport)}}else js(M,x,P);A!==null&&(Be.updateMultisampleRenderTarget(A),Be.updateRenderTargetMipmap(A)),x.isScene===!0&&x.onAfterRender(S,x,P),pe.resetDefaultState(),G=-1,ee=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,u.pop(),u.length>0?M=u[u.length-1]:M=null};function kt(x,P,N,F){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)N=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ce.intersectsSprite(x)){F&&fe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(be);const _e=X.update(x),Me=x.material;Me.visible&&M.push(x,_e,Me,N,fe.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ce.intersectsObject(x))){const _e=X.update(x),Me=x.material;if(F&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),fe.copy(x.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),fe.copy(_e.boundingSphere.center)),fe.applyMatrix4(x.matrixWorld).applyMatrix4(be)),Array.isArray(Me)){const Ee=_e.groups;for(let Oe=0,Ae=Ee.length;Oe<Ae;Oe++){const Re=Ee[Oe],nt=Me[Re.materialIndex];nt&&nt.visible&&M.push(x,_e,nt,N,fe.z,Re)}}else Me.visible&&M.push(x,_e,Me,N,fe.z,null)}}const le=x.children;for(let _e=0,Me=le.length;_e<Me;_e++)kt(le[_e],P,N,F)}function js(x,P,N,F){const I=x.opaque,le=x.transmissive,_e=x.transparent;p.setupLightsView(N),B===!0&&se.setGlobalState(S.clippingPlanes,N),le.length>0&&Wc(I,le,P,N),F&&Se.viewport(v.copy(F)),I.length>0&&Fi(I,P,N),le.length>0&&Fi(le,P,N),_e.length>0&&Fi(_e,P,N),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Wc(x,P,N,F){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;const le=Fe.isWebGL2;ue===null&&(ue=new Fn(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Li:gn,minFilter:Ln,samples:le?4:0})),S.getDrawingBufferSize(ge),le?ue.setSize(ge.x,ge.y):ue.setSize(Mr(ge.x),Mr(ge.y));const _e=S.getRenderTarget();S.setRenderTarget(ue),S.getClearColor(J),C=S.getClearAlpha(),C<1&&S.setClearColor(16777215,.5),S.clear();const Me=S.toneMapping;S.toneMapping=_n,Fi(x,N,F),Be.updateMultisampleRenderTarget(ue),Be.updateRenderTargetMipmap(ue);let Ee=!1;for(let Oe=0,Ae=P.length;Oe<Ae;Oe++){const Re=P[Oe],nt=Re.object,bt=Re.geometry,ot=Re.material,jt=Re.group;if(ot.side===tn&&nt.layers.test(F.layers)){const et=ot.side;ot.side=yt,ot.needsUpdate=!0,Ks(nt,N,F,bt,ot,jt),ot.side=et,ot.needsUpdate=!0,Ee=!0}}Ee===!0&&(Be.updateMultisampleRenderTarget(ue),Be.updateRenderTargetMipmap(ue)),S.setRenderTarget(_e),S.setClearColor(J,C),S.toneMapping=Me}function Fi(x,P,N){const F=P.isScene===!0?P.overrideMaterial:null;for(let I=0,le=x.length;I<le;I++){const _e=x[I],Me=_e.object,Ee=_e.geometry,Oe=F===null?_e.material:F,Ae=_e.group;Me.layers.test(N.layers)&&Ks(Me,P,N,Ee,Oe,Ae)}}function Ks(x,P,N,F,I,le){x.onBeforeRender(S,P,N,F,I,le),x.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(S,P,N,F,x,le),I.transparent===!0&&I.side===tn&&I.forceSinglePass===!1?(I.side=yt,I.needsUpdate=!0,S.renderBufferDirect(N,P,F,I,x,le),I.side=vn,I.needsUpdate=!0,S.renderBufferDirect(N,P,F,I,x,le),I.side=tn):S.renderBufferDirect(N,P,F,I,x,le),x.onAfterRender(S,P,N,F,I,le)}function Bi(x,P,N){P.isScene!==!0&&(P=We);const F=Ne.get(x),I=p.state.lights,le=p.state.shadowsArray,_e=I.state.version,Me=$.getParameters(x,I.state,le,P,N),Ee=$.getProgramCacheKey(Me);let Oe=F.programs;F.environment=x.isMeshStandardMaterial?P.environment:null,F.fog=P.fog,F.envMap=(x.isMeshStandardMaterial?y:tt).get(x.envMap||F.environment),F.envMapRotation=F.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,Oe===void 0&&(x.addEventListener("dispose",U),Oe=new Map,F.programs=Oe);let Ae=Oe.get(Ee);if(Ae!==void 0){if(F.currentProgram===Ae&&F.lightsStateVersion===_e)return $s(x,Me),Ae}else Me.uniforms=$.getUniforms(x),x.onBuild(N,Me,S),x.onBeforeCompile(Me,S),Ae=$.acquireProgram(Me,Ee),Oe.set(Ee,Ae),F.uniforms=Me.uniforms;const Re=F.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Re.clippingPlanes=se.uniform),$s(x,Me),F.needsLights=Yc(x),F.lightsStateVersion=_e,F.needsLights&&(Re.ambientLightColor.value=I.state.ambient,Re.lightProbe.value=I.state.probe,Re.directionalLights.value=I.state.directional,Re.directionalLightShadows.value=I.state.directionalShadow,Re.spotLights.value=I.state.spot,Re.spotLightShadows.value=I.state.spotShadow,Re.rectAreaLights.value=I.state.rectArea,Re.ltc_1.value=I.state.rectAreaLTC1,Re.ltc_2.value=I.state.rectAreaLTC2,Re.pointLights.value=I.state.point,Re.pointLightShadows.value=I.state.pointShadow,Re.hemisphereLights.value=I.state.hemi,Re.directionalShadowMap.value=I.state.directionalShadowMap,Re.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Re.spotShadowMap.value=I.state.spotShadowMap,Re.spotLightMatrix.value=I.state.spotLightMatrix,Re.spotLightMap.value=I.state.spotLightMap,Re.pointShadowMap.value=I.state.pointShadowMap,Re.pointShadowMatrix.value=I.state.pointShadowMatrix),F.currentProgram=Ae,F.uniformsList=null,Ae}function Zs(x){if(x.uniformsList===null){const P=x.currentProgram.getUniforms();x.uniformsList=hr.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function $s(x,P){const N=Ne.get(x);N.outputColorSpace=P.outputColorSpace,N.batching=P.batching,N.instancing=P.instancing,N.instancingColor=P.instancingColor,N.instancingMorph=P.instancingMorph,N.skinning=P.skinning,N.morphTargets=P.morphTargets,N.morphNormals=P.morphNormals,N.morphColors=P.morphColors,N.morphTargetsCount=P.morphTargetsCount,N.numClippingPlanes=P.numClippingPlanes,N.numIntersection=P.numClipIntersection,N.vertexAlphas=P.vertexAlphas,N.vertexTangents=P.vertexTangents,N.toneMapping=P.toneMapping}function Xc(x,P,N,F,I){P.isScene!==!0&&(P=We),Be.resetTextureUnits();const le=P.fog,_e=F.isMeshStandardMaterial?P.environment:null,Me=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Mn,Ee=(F.isMeshStandardMaterial?y:tt).get(F.envMap||_e),Oe=F.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Ae=!!N.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Re=!!N.morphAttributes.position,nt=!!N.morphAttributes.normal,bt=!!N.morphAttributes.color;let ot=_n;F.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ot=S.toneMapping);const jt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,et=jt!==void 0?jt.length:0,Le=Ne.get(F),Lr=p.state.lights;if(B===!0&&(Z===!0||x!==ee)){const Ct=x===ee&&F.id===G;se.setState(F,x,Ct)}let $e=!1;F.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Lr.state.version||Le.outputColorSpace!==Me||I.isBatchedMesh&&Le.batching===!1||!I.isBatchedMesh&&Le.batching===!0||I.isInstancedMesh&&Le.instancing===!1||!I.isInstancedMesh&&Le.instancing===!0||I.isSkinnedMesh&&Le.skinning===!1||!I.isSkinnedMesh&&Le.skinning===!0||I.isInstancedMesh&&Le.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Le.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Le.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Le.instancingMorph===!1&&I.morphTexture!==null||Le.envMap!==Ee||F.fog===!0&&Le.fog!==le||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==se.numPlanes||Le.numIntersection!==se.numIntersection)||Le.vertexAlphas!==Oe||Le.vertexTangents!==Ae||Le.morphTargets!==Re||Le.morphNormals!==nt||Le.morphColors!==bt||Le.toneMapping!==ot||Fe.isWebGL2===!0&&Le.morphTargetsCount!==et)&&($e=!0):($e=!0,Le.__version=F.version);let Sn=Le.currentProgram;$e===!0&&(Sn=Bi(F,P,I));let Js=!1,Si=!1,Ir=!1;const ft=Sn.getUniforms(),yn=Le.uniforms;if(Se.useProgram(Sn.program)&&(Js=!0,Si=!0,Ir=!0),F.id!==G&&(G=F.id,Si=!0),Js||ee!==x){ft.setValue(L,"projectionMatrix",x.projectionMatrix),ft.setValue(L,"viewMatrix",x.matrixWorldInverse);const Ct=ft.map.cameraPosition;Ct!==void 0&&Ct.setValue(L,fe.setFromMatrixPosition(x.matrixWorld)),Fe.logarithmicDepthBuffer&&ft.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ft.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),ee!==x&&(ee=x,Si=!0,Ir=!0)}if(I.isSkinnedMesh){ft.setOptional(L,I,"bindMatrix"),ft.setOptional(L,I,"bindMatrixInverse");const Ct=I.skeleton;Ct&&(Fe.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),ft.setValue(L,"boneTexture",Ct.boneTexture,Be)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}I.isBatchedMesh&&(ft.setOptional(L,I,"batchingTexture"),ft.setValue(L,"batchingTexture",I._matricesTexture,Be));const Ur=N.morphAttributes;if((Ur.position!==void 0||Ur.normal!==void 0||Ur.color!==void 0&&Fe.isWebGL2===!0)&&Q.update(I,N,Sn),(Si||Le.receiveShadow!==I.receiveShadow)&&(Le.receiveShadow=I.receiveShadow,ft.setValue(L,"receiveShadow",I.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(yn.envMap.value=Ee,yn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),Si&&(ft.setValue(L,"toneMappingExposure",S.toneMappingExposure),Le.needsLights&&qc(yn,Ir),le&&F.fog===!0&&K.refreshFogUniforms(yn,le),K.refreshMaterialUniforms(yn,F,Y,H,ue),hr.upload(L,Zs(Le),yn,Be)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(hr.upload(L,Zs(Le),yn,Be),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ft.setValue(L,"center",I.center),ft.setValue(L,"modelViewMatrix",I.modelViewMatrix),ft.setValue(L,"normalMatrix",I.normalMatrix),ft.setValue(L,"modelMatrix",I.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Ct=F.uniformsGroups;for(let Nr=0,jc=Ct.length;Nr<jc;Nr++)if(Fe.isWebGL2){const Qs=Ct[Nr];me.update(Qs,Sn),me.bind(Qs,Sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Sn}function qc(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function Yc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(x,P,N){Ne.get(x.texture).__webglTexture=P,Ne.get(x.depthTexture).__webglTexture=N;const F=Ne.get(x);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=N===void 0,F.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,P){const N=Ne.get(x);N.__webglFramebuffer=P,N.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,N=0){A=x,D=P,w=N;let F=!0,I=null,le=!1,_e=!1;if(x){const Ee=Ne.get(x);Ee.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(L.FRAMEBUFFER,null),F=!1):Ee.__webglFramebuffer===void 0?Be.setupRenderTarget(x):Ee.__hasExternalTextures&&Be.rebindTextures(x,Ne.get(x.texture).__webglTexture,Ne.get(x.depthTexture).__webglTexture);const Oe=x.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);const Ae=Ne.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ae[P])?I=Ae[P][N]:I=Ae[P],le=!0):Fe.isWebGL2&&x.samples>0&&Be.useMultisampledRTT(x)===!1?I=Ne.get(x).__webglMultisampledFramebuffer:Array.isArray(Ae)?I=Ae[N]:I=Ae,v.copy(x.viewport),E.copy(x.scissor),te=x.scissorTest}else v.copy(j).multiplyScalar(Y).floor(),E.copy(re).multiplyScalar(Y).floor(),te=de;if(Se.bindFramebuffer(L.FRAMEBUFFER,I)&&Fe.drawBuffers&&F&&Se.drawBuffers(x,I),Se.viewport(v),Se.scissor(E),Se.setScissorTest(te),le){const Ee=Ne.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,Ee.__webglTexture,N)}else if(_e){const Ee=Ne.get(x.texture),Oe=P||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.__webglTexture,N||0,Oe)}G=-1},this.readRenderTargetPixels=function(x,P,N,F,I,le,_e){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ne.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){Se.bindFramebuffer(L.FRAMEBUFFER,Me);try{const Ee=x.texture,Oe=Ee.format,Ae=Ee.type;if(Oe!==Bt&&ve.convert(Oe)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Ae===Li&&(xe.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Ae!==gn&&ve.convert(Ae)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ae===Xt&&(Fe.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-F&&N>=0&&N<=x.height-I&&L.readPixels(P,N,F,I,ve.convert(Oe),ve.convert(Ae),le)}finally{const Ee=A!==null?Ne.get(A).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(x,P,N=0){const F=Math.pow(2,-N),I=Math.floor(P.image.width*F),le=Math.floor(P.image.height*F);Be.setTexture2D(P,0),L.copyTexSubImage2D(L.TEXTURE_2D,N,0,0,x.x,x.y,I,le),Se.unbindTexture()},this.copyTextureToTexture=function(x,P,N,F=0){const I=P.image.width,le=P.image.height,_e=ve.convert(N.format),Me=ve.convert(N.type);Be.setTexture2D(N,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment),P.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,x.x,x.y,I,le,_e,Me,P.image.data):P.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,x.x,x.y,P.mipmaps[0].width,P.mipmaps[0].height,_e,P.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,F,x.x,x.y,_e,Me,P.image),F===0&&N.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(x,P,N,F,I=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=Math.round(x.max.x-x.min.x),_e=Math.round(x.max.y-x.min.y),Me=x.max.z-x.min.z+1,Ee=ve.convert(F.format),Oe=ve.convert(F.type);let Ae;if(F.isData3DTexture)Be.setTexture3D(F,0),Ae=L.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Be.setTexture2DArray(F,0),Ae=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const Re=L.getParameter(L.UNPACK_ROW_LENGTH),nt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),bt=L.getParameter(L.UNPACK_SKIP_PIXELS),ot=L.getParameter(L.UNPACK_SKIP_ROWS),jt=L.getParameter(L.UNPACK_SKIP_IMAGES),et=N.isCompressedTexture?N.mipmaps[I]:N.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,et.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,et.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,x.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,x.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,x.min.z),N.isDataTexture||N.isData3DTexture?L.texSubImage3D(Ae,I,P.x,P.y,P.z,le,_e,Me,Ee,Oe,et.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Ae,I,P.x,P.y,P.z,le,_e,Me,Ee,et.data):L.texSubImage3D(Ae,I,P.x,P.y,P.z,le,_e,Me,Ee,Oe,et),L.pixelStorei(L.UNPACK_ROW_LENGTH,Re),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,nt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,bt),L.pixelStorei(L.UNPACK_SKIP_ROWS,ot),L.pixelStorei(L.UNPACK_SKIP_IMAGES,jt),I===0&&F.generateMipmaps&&L.generateMipmap(Ae),Se.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?Be.setTextureCube(x,0):x.isData3DTexture?Be.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Be.setTexture2DArray(x,0):Be.setTexture2D(x,0),Se.unbindTexture()},this.resetState=function(){D=0,w=0,A=null,Se.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ps?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===Tr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ym extends uc{}ym.prototype.isWebGL1Renderer=!0;let dc=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class Em extends Mt{constructor(e=null,t=1,n=1,r,s,o,a,c,l=dt,h=dt,d,f){super(null,o,a,c,l,h,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eo extends Gt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ii=new Qe,bo=new Qe,or=[],To=new zn,bm=new Qe,wi=new wt,Ri=new Ni;class Tm extends wt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Eo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,bm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ii),To.copy(e.boundingBox).applyMatrix4(ii),this.boundingBox.union(To)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ii),Ri.copy(e.boundingSphere).applyMatrix4(ii),this.boundingSphere.union(Ri)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(wi.geometry=this.geometry,wi.material=this.material,wi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ri.copy(this.boundingSphere),Ri.applyMatrix4(n),e.ray.intersectsSphere(Ri)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ii),bo.multiplyMatrices(n,ii),wi.matrixWorld=bo,wi.raycast(e,or);for(let o=0,a=or.length;o<a;o++){const c=or[o];c.instanceId=s,c.object=this,t.push(c)}or.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Eo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Em(new Float32Array(r*this.count),r,this.count,Bo,Xt));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Am extends gi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class wm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ao(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ao();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ao(){return(typeof performance>"u"?Date:performance).now()}const wo=new Qe;class Rm{constructor(e,t,n=0,r=1/0){this.ray=new Ko(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wo),this}intersectObject(e,t=!0,n=[]){return Ts(e,this,n,t),n.sort(Ro),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ts(e[r],this,n,t);return n.sort(Ro),n}}function Ro(i,e){return i.distance-e.distance}function Ts(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Ts(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rs);var yr={d:(i,e)=>{for(var t in e)yr.o(e,t)&&!yr.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:e[t]})},o:(i,e)=>Object.prototype.hasOwnProperty.call(i,e)},he={};yr.d(he,{t4:()=>bc,PX:()=>Tc,Qg:()=>fr,bn:()=>yc,Pj:()=>dr,fn:()=>Ec,xR:()=>pr,KX:()=>pn,LK:()=>fc,gA:()=>nn,Or:()=>pc,ZB:()=>ci,z2:()=>Cr,H7:()=>Oi,wO:()=>Ht,Ex:()=>As,IW:()=>kc,kX:()=>In,Fs:()=>Gm,s6:()=>Vc,mP:()=>Hm,hP:()=>mc,bx:()=>gc,z_:()=>Vm,l_:()=>Er,or:()=>Rr,gb:()=>Ns,F5:()=>Cm,s_:()=>ur,L6:()=>Pm,DJ:()=>Dt,RR:()=>Fs,$C:()=>_c,zo:()=>Mc,bU:()=>xc,eZ:()=>Ui,jk:()=>Sc,L8:()=>Je,Ps:()=>Mi,Nu:()=>zt,cQ:()=>ws,hY:()=>Di,tL:()=>Os,CP:()=>zc,Vh:()=>Ws,Xp:()=>Lc,DS:()=>Ic,NP:()=>Ys,yY:()=>qs,uF:()=>Uc,E$:()=>Fc,zD:()=>Nc,Lz:()=>vc,R2:()=>Ac,Wb:()=>wc,E9:()=>Xs,qY:()=>Dr,WG:()=>Bc,Wr:()=>zs,i9:()=>Bs,kN:()=>Gs,YD:()=>Hs,eH:()=>Pr,A9:()=>ks,tf:()=>Vs,cY:()=>Lm});class pn{static detectChanges(e,t){if(this.executeAllCallbacks(e),t)for(const n of e.children)this.detectChanges(n,!0)}static bindProperty(e,t,n,r){this.getIndexByKey(t,e)>-1?console.error("Cannot override property already bound."):(this.addToBoundCallbacks(e,t,n.bind(t),r),t.scene&&this.bindToScene(t))}static addToBoundCallbacks(e,t,n,r){const s={key:e,getValue:n,setValue:this.createSetValue(e,t,r)};t.__boundCallbacks.push(s),this.executeCallback(s)}static createSetValue(e,t,n){return n?r=>{r!==t[e]&&(t[e]=r,t.needsRender=!0)}:r=>{r!==t[e]&&(t[e]=r)}}static getIndexByKey(e,t){const n=e.__boundCallbacks;for(let r=0;r<n.length;r++)if(n[r].key===t)return r;return-1}static setManualDetectionMode(e){e.__manualDetection||(e.__boundCallbacks.length>0?console.error("Cannot change detectChangesMode if a binding is already created."):e.__manualDetection=!0)}static bindToScene(e){e.__boundCallbacks.length>0&&e.scene.__boundObjects.add(e)}static unbindFromScene(e){e.scene.__boundObjects.delete(e)}static unbindProperty(e,t){const n=this.getIndexByKey(e,t);n>-1&&(e.__boundCallbacks.splice(n,1),e.scene&&this.unbindFromScene(e))}static executeCallback(e){e.setValue(e.getValue())}static executeAllCallbacks(e){const t=e.__boundCallbacks;for(const n of t)this.executeCallback(n)}static compute(e){const t=e.__boundObjects;for(const n of t)this.executeAllCallbacks(n)}}const V=(Co={Clock:()=>wm,Color:()=>Xe,DynamicDrawUsage:()=>Yl,Euler:()=>Yt,EventDispatcher:()=>Bn,InstancedMesh:()=>Tm,Material:()=>gi,MathUtils:()=>ch,Matrix4:()=>Qe,Mesh:()=>wt,MeshBasicMaterial:()=>Is,Object3D:()=>Et,OrthographicCamera:()=>rc,PerspectiveCamera:()=>Lt,Plane:()=>un,Quaternion:()=>_i,Raycaster:()=>Rm,Scene:()=>dc,Vector2:()=>Ve,Vector3:()=>O,Vector4:()=>lt,WebGLRenderer:()=>uc},fs={},yr.d(fs,Co),fs);var Co,fs;class Cm extends V.OrthographicCamera{get size(){return this._size}set size(e){this._size=e,this.update()}get fixedWidth(){return this._fixedWidth}set fixedWidth(e){this._fixedWidth=e,this.update()}constructor(e=2,t=!0,n,r){super(-1,1,1,-1,n,r),this._width=-1,this._height=-1,this._size=e,this._fixedWidth=t,this.on("viewportresize",s=>{this._width=s.width,this._height=s.height,this.update()})}update(){const e=.5*this._size;if(this._fixedWidth){const t=this._height/this._width;this.left=-e,this.right=e,this.top=e*t,this.bottom=-e*t}else{const t=this._width/this._height;this.left=-e*t,this.right=e*t,this.top=e,this.bottom=-e}this.updateProjectionMatrix()}}class Pm extends V.PerspectiveCamera{constructor(e,t,n){super(e,void 0,t,n),this.on("viewportresize",r=>{this.aspect=r.width/r.height,this.updateProjectionMatrix()})}}const Dm=new Set(["auto","default","none","context-menu","help","pointer","progress","wait","cell","crosshair","text","vertical-text","alias","copy","move","no-drop","not-allowed","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out"]);class fc{constructor(e){this.enabled=!0,this._domElement=e}update(e,t,n){if(!this.enabled||!t)return;const r=this.getCursor(e,t,n);r!==this._cursor&&(this._cursor=r,Dm.has(r)?this._domElement.style.cursor=r:this._domElement.style.cursor=`url(${r}), default`)}getCursor(e,t,n){if(n)return n.cursorDrop??"alias";if(e)return e.cursorDrag??"grabbing";if(t.cursor)return t.cursor;if(t.isInstancedMesh2){if(!t.__enabledStateHovered)return"default"}else if(!t.enabledState)return"default";return t.draggable?"grab":"pointer"}}class Oi{get bubbles(){return this._bubbles}get defaultPrevented(){return this._defaultPrevented}get target(){return this._target}get type(){return this._type}constructor(e=!1){this.timeStamp=performance.now(),this.cancelable=e}preventDefault(){this._defaultPrevented=!0}stopImmediatePropagation(){this._stoppedImmediatePropagation=!0}stopPropagation(){this._bubbles=!1}}class Ns extends Oi{get altKey(){return this.domEvent.altKey}get button(){return this.domEvent.button}get buttons(){return this.domEvent.buttons}get clientX(){return this.domEvent.clientX}get clientY(){return this.domEvent.clientY}get ctrlKey(){return this.domEvent.ctrlKey}get metaKey(){return this.domEvent.metaKey}get movementX(){return this.domEvent.movementX}get movementY(){return this.domEvent.movementY}get offsetX(){return this.domEvent.offsetX}get offsetY(){return this.domEvent.offsetY}get pageX(){return this.domEvent.pageX}get pageY(){return this.domEvent.pageY}get screenX(){return this.domEvent.screenX}get screenY(){return this.domEvent.screenY}get shiftKey(){return this.domEvent.shiftKey}constructor(e,t,n,r){super(r),this.domEvent=e,this.intersection=t,this.relatedTarget=n}getModifierState(e){return this.domEvent.getModifierState(e)}}class Dt extends Ns{get pointerId(){return this.domEvent.pointerId}get width(){return this.domEvent.width}get height(){return this.domEvent.height}get pressure(){return this.domEvent.pressure}get tangentialPressure(){return this.domEvent.tangentialPressure}get tiltX(){return this.domEvent.tiltX}get tiltY(){return this.domEvent.tiltY}get twist(){return this.domEvent.twist}get pointerType(){return this.domEvent.pointerType}get isPrimary(){return this.domEvent.isPrimary}}class ci extends Dt{constructor(e,t,n={},r,s,o){super(e,o,s,t),this.position=r,this.dataTransfer=n}}class Os extends Ns{get deltaMode(){return this.domEvent.deltaMode}get deltaX(){return this.domEvent.deltaX}get deltaY(){return this.domEvent.deltaY}get deltaZ(){return this.domEvent.deltaZ}}class Fs extends Oi{constructor(e){super(),this.intersection=e}}class Er extends Oi{get altKey(){return this.domEvent.altKey}get code(){return this.domEvent.code}get ctrlKey(){return this.domEvent.ctrlKey}get key(){return this.domEvent.key}get location(){return this.domEvent.location}get metaKey(){return this.domEvent.metaKey}get repeat(){return this.domEvent.repeat}get shiftKey(){return this.domEvent.shiftKey}constructor(e,t){super(t),this.domEvent=e}getModifierState(e){return this.domEvent.getModifierState(e)}}class In extends Oi{constructor(e){super(),this.relatedTarget=e}}class pc{get target(){return this._target}get findDropTarget(){return this._target.findDropTarget}constructor(e){this.isDragging=!1,this.dragButtons=[0],this._plane=new V.Plane,this._offset=new V.Vector3,this._intersection=new V.Vector3,this._worldPosition=new V.Vector3,this._inverseMatrix=new V.Matrix4,this._startPosition=new V.Vector3,this._originalIntersection=new V.Vector3,this._targetMatrixWorld=new V.Matrix4,this._raycaster=e}needsDrag(e,t){return!!this.isDragging||!!this._target&&(this.startDragging(e,t),!0)}performDrag(e,t,n){if(!e.isPrimary)return;this._plane.setFromNormalAndCoplanarPoint(t.getWorldDirection(this._plane.normal),this._worldPosition.setFromMatrixPosition(this._targetMatrixWorld)),this._raycaster.ray.intersectPlane(this._plane,this._intersection),this._intersection.sub(this._offset).applyMatrix4(this._inverseMatrix),this._originalIntersection.copy(this._intersection);const r=this.trigger("drag",e,this._target,!0,this._intersection,n==null?void 0:n.object,n);this._targetInstanced?r._defaultPrevented||this._targetInstanced.position.equals(this._intersection)||(this._targetInstanced.position.copy(this._intersection),this._targetInstanced.updateMatrix(),this._offset.add(this._originalIntersection.sub(this._targetInstanced.position))):r._defaultPrevented||this._target.position.equals(this._intersection)||(this._target.position.copy(this._intersection),this._offset.add(this._originalIntersection.sub(this._target.position))),this.dropTargetEvent(e,n)}initDrag(e,t,n,r){this.isDragButton(e)&&(t!=null&&t.draggable)&&(n>=0?t.isInstancedMesh2&&t.__enabledStateHovered&&(this._targetInstanced=t.instances[n],this._target=t,this._startIntersection=r):t.enabledState&&(this._target=t.dragTarget??t,this._startIntersection=r))}startDragging(e,t){const n=this._targetInstanced??this._target;this._target.__dragging=!0,this.isDragging=!0,this._startPosition.copy(n.position),this.trigger("dragstart",e,this._target,!1,void 0,void 0,this._startIntersection);const r=n.matrixWorld;this._plane.setFromNormalAndCoplanarPoint(t.getWorldDirection(this._plane.normal),this._worldPosition.setFromMatrixPosition(r)),this._raycaster.ray.intersectPlane(this._plane,this._intersection),this._targetMatrixWorld.copy(r),this._inverseMatrix.copy(n.parent.matrixWorld).invert(),this._offset.copy(this._intersection).sub(this._worldPosition.setFromMatrixPosition(r)),n.findDropTarget&&(this._dataTransfer={})}cancelDragging(e){if(this._target){if(this.trigger("dragcancel",e,this._target,!0,void 0,this._lastDropTarget)._defaultPrevented)return!1;this._targetInstanced?this._targetInstanced.position.equals(this._startPosition)||(this._targetInstanced.position.copy(this._startPosition),this._targetInstanced.updateMatrix()):this._target.position.equals(this._startPosition)||this._target.position.copy(this._startPosition),this.trigger("dragcancel",e,this._lastDropTarget,!1,void 0,this._target),this.dragEnd(e),this.clear()}return!0}stopDragging(e){return!!e.isPrimary&&(this.isDragging?(this.trigger("drop",e,this._lastDropTarget,!1,void 0,this._target),this.dragEnd(e),this.clear(),!0):(this._target=void 0,this._targetInstanced=void 0,!1))}dragEnd(e){this.trigger("dragend",e,this._target,!1,void 0,this._lastDropTarget)}clear(){this.isDragging=!1,this._target.__dragging=!1,this._target=void 0,this._targetInstanced=void 0,this._dataTransfer=void 0,this._lastDropTarget=void 0}trigger(e,t,n,r,s,o,a){if(n){const c=new ci(t,r,this._dataTransfer,s,o,a);return n.__eventsDispatcher.dispatchDOMAncestor(e,c),c}}dropTargetEvent(e,t){if(this.findDropTarget){const n=t==null?void 0:t.object,r=this._lastDropTarget,s=t==null?void 0:t.point;this._lastDropTarget=n,n!==r&&(this.trigger("dragleave",e,r,!1,s,this._target,t),this.trigger("dragenter",e,n,!1,s,this._target,t)),this.trigger("dragover",e,n,!1,s,this._target,t)}}isDragButton(e){return e.isPrimary&&(e.pointerType==="mouse"&&this.dragButtons.some(t=>t===e.button)||e.pointerType!=="mouse")}}class mc{constructor(){this._items=[]}enqueue(e){(this.multitouch||e.isPrimary!==!1)&&this.isValidEvent(e)&&this._items.push(e)}isValidEvent(e){if(e.type==="pointermove")for(let t=this._items.length-1;t>=0;t--){const n=this._items[t];if(n.pointerId===e.pointerId){const r=n.type;if(r==="pointermove")return this._items[t]=e,!1;if(r==="pointerdown"||r==="pointerout"||r==="pointerover"||r==="pointerup")break}}return!0}dequeue(){const e=this._items;return this._items=[],e}}class _c{constructor(e){this.raycaster=new V.Raycaster,this.raycasterSortComparer=(t,n)=>t.distance-n.distance,this.pointer=new V.Vector2,this.pointerOnCanvas=!1,this._computedPointer=new V.Vector2,this._renderManager=e}getIntersections(e,t,n){const r=[];if(this.pointer.set(e.offsetX,e.offsetY),this.getComputedMousePosition(this.pointer,this._computedPointer,t,e.isPrimary)){const s=this._renderManager.activeScene,o=this._renderManager.activeView.camera;this.raycaster.setFromCamera(this._computedPointer,o),t&&!n||this.raycastObjects(s,r,n),r.sort(this.raycasterSortComparer)}return r}getComputedMousePosition(e,t,n,r){!n&&r&&this._renderManager.updateActiveView(e,this.pointerOnCanvas);const s=this._renderManager.activeView;if(!(s!=null&&s.enabled)||s!==this._renderManager.hoveredView)return!1;const o=s.computedViewport;return t.set((e.x-o.left)/o.width*2-1,(e.y-o.top)/o.height*-2+1),!0}raycastObjects(e,t,n){if(e!==n){if(e.interceptByRaycaster&&e.visible){for(const s of e.children)this.raycastObjects(s,t,n);let r=t.length;if(e.hitboxes)for(const s of e.hitboxes)s.updateMatrix(),s.matrixWorld.multiplyMatrices(e.matrixWorld,s.matrix),this.raycaster.intersectObject(s,!1,t);else this.raycaster.intersectObject(e,!1,t);for(;t.length>r;){const s=t[r];s.hitbox=s.object,s.object=e,r++}}return t}}}class gc{constructor(e){this.queue=new mc,this._intersection={},this._pointerDownTarget={},this._lastPointerDown={},this._lastPointerMove={},this._lastHoveredTarget={},this._mouseDetected=!1,this._isTapping=!1,this._renderManager=e;const t=e.renderer;this.registerRenderer(t),this.cursorManager=new fc(t.domElement),this.raycasterManager=new _c(e),this.dragManager=new pc(this.raycasterManager.raycaster)}registerRenderer(e){e.domElement.addEventListener("pointermove",t=>this._mouseDetected=t.pointerType==="mouse"),e.domElement.addEventListener("pointerdown",t=>this._isTapping=t.pointerType!=="mouse"&&t.isPrimary),e.domElement.addEventListener("pointerup",t=>this._isTapping&&(this._isTapping=!t.isPrimary)),e.domElement.addEventListener("pointercancel",t=>this._isTapping&&(this._isTapping=!t.isPrimary)),this.bindEvents(e)}bindEvents(e){const t=e.domElement;t.addEventListener("pointerenter",this.enqueue.bind(this)),t.addEventListener("pointerleave",this.enqueue.bind(this)),t.addEventListener("pointerdown",this.enqueue.bind(this)),t.addEventListener("pointermove",this.enqueue.bind(this)),document.addEventListener("pointerup",this.enqueue.bind(this)),document.addEventListener("pointercancel",this.enqueue.bind(this)),t.addEventListener("wheel",this.enqueue.bind(this),{passive:!0}),t.tabIndex=-1,t.addEventListener("keydown",this.enqueue.bind(this)),t.addEventListener("keyup",this.enqueue.bind(this))}enqueue(e){this.queue.enqueue(e)}update(){var t,n;this._primaryRaycasted=!1;for(const r of this.queue.dequeue())this.computeQueuedEvent(r);this.pointerIntersection();const e=((t=this._intersection[this._primaryIdentifier])==null?void 0:t.object)??this._renderManager.activeScene;this.cursorManager.update(this.dragManager.target,e,(n=this._intersectionDropTarget)==null?void 0:n.object)}raycastScene(e){if(this.handlePrimaryIdentifier(e),this.dragManager.isDragging){if(!e.isPrimary)return;const t=this.raycasterManager.getIntersections(e,!0,this.dragManager.findDropTarget?this.dragManager.target:void 0);this.setDropTarget(t)}else{const t=this.raycasterManager.getIntersections(e,!1);this._intersection[e.pointerId]=t[0];const n=this._renderManager.activeScene;n&&e.isPrimary&&(n.intersections=t)}}handlePrimaryIdentifier(e){e.isPrimary&&(this._primaryRaycasted=!0,this._primaryIdentifier!==e.pointerId&&(this.clearPointerId(this._primaryIdentifier),this._primaryIdentifier=e.pointerId))}triggerPointer(e,t,n,r){if(n!=null&&n.enabledState){const s=new Dt(t,this._intersection[t.pointerId],r);n.__eventsDispatcher.dispatchDOM(e,s)}}triggerAncestorPointer(e,t,n,r,s){if(n!=null&&n.enabledState){const o=new Dt(t,this._intersection[t.pointerId],r,s);return n.__eventsDispatcher.dispatchDOMAncestor(e,o),o}}triggerAncestorWheel(e,t){const n=(t==null?void 0:t.object)??this._renderManager.activeScene;if(n!=null&&n.enabledState){const r=new Os(e,t);n.__eventsDispatcher.dispatchDOMAncestor("wheel",r)}}triggerAncestorKeyboard(e,t,n){const r=this._renderManager.activeScene,s=r.focusedObject??r;if(s.enabledState){const o=new Er(t,n);return s.__eventsDispatcher.dispatchDOMAncestor(e,o),o}}computeQueuedEvent(e){switch(e.type){case"pointerenter":return this.pointerEnter(e);case"pointerleave":return this.pointerLeave(e);case"pointermove":return this.pointerMove(e);case"pointerdown":return this.pointerDown(e);case"pointerup":case"pointercancel":return this.pointerUp(e);case"wheel":return this.wheel(e);case"keydown":return this.keyDown(e);case"keyup":return this.keyUp(e);default:console.error("Error: computeEvent failed.")}}isMainClick(e){return e.isPrimary&&(e.pointerType==="mouse"&&e.button===0||e.pointerType!=="mouse")}pointerDown(e){e.pointerType!=="mouse"&&this.pointerMove(e);const t=this._intersection[e.pointerId],n=(t==null?void 0:t.object)??this._renderManager.activeScene,r=this.triggerAncestorPointer("pointerdown",e,n,void 0,!0);if(this._lastPointerDown[e.pointerId]=e,this._pointerDownTarget[e.pointerId]=n,this.isMainClick(e)&&(n.__clicking=!0),!(r!=null&&r._defaultPrevented)&&e.isPrimary){const s=this._renderManager.activeScene,o=n==null?void 0:n.firstFocusable;(o||s!=null&&s.blurOnClickOut)&&s.focus(o)}this.dragManager.initDrag(e,n,t==null?void 0:t.instanceId,t)}pointerEnter(e){this.raycasterManager.pointerOnCanvas=!0}pointerLeave(e){this.raycasterManager.pointerOnCanvas=!1,this._lastPointerMove[e.pointerId]=e}pointerMove(e){var n,r;this._lastPointerMove[e.pointerId]=e,this.raycastScene(e);const t=(n=this._renderManager.activeView)==null?void 0:n.camera;if(this.dragManager.needsDrag(e,t))this.dragManager.performDrag(e,t,this._intersectionDropTarget);else{this.pointerOutOver(e);const s=((r=this._intersection[e.pointerId])==null?void 0:r.object)??this._renderManager.activeScene;this.triggerAncestorPointer("pointermove",e,s)}}pointerIntersection(){var e,t;if(this.dragManager.isDragging){if(!this._primaryRaycasted&&this.dragManager.findDropTarget&&((e=this._renderManager.activeScene)!=null&&e.continuousRaycastingDropTarget)){const n=this._lastPointerMove[this._primaryIdentifier]||this._lastPointerDown[this._primaryIdentifier];this.raycastScene(n),this.dragManager.dropTargetEvent(n,this._intersectionDropTarget)}}else if((t=this._renderManager.hoveredScene)!=null&&t.continuousRaycasting&&(this._mouseDetected||this._isTapping)){if(!this._primaryRaycasted){const s=this._lastPointerMove[this._primaryIdentifier]||this._lastPointerDown[this._primaryIdentifier];this.raycastScene(s),this.pointerOutOver(s)}const n=this._intersection[this._primaryIdentifier],r=(n==null?void 0:n.object)??this._renderManager.hoveredScene;r!=null&&r.enabledState&&r.__eventsDispatcher.dispatchDOMAncestor("pointerintersection",new Fs(n))}}wheel(e){this.triggerAncestorWheel(e,this._intersection[this._primaryIdentifier])}pointerOutOver(e){var r;const t=((r=this._intersection[e.pointerId])==null?void 0:r.object)??this._renderManager.activeScene,n=this._lastHoveredTarget[e.pointerId];t!==n&&(e.isPrimary&&(n&&(n.__hovered=!1),t.__hovered=!0),this._lastHoveredTarget[e.pointerId]=t,this.triggerAncestorPointer("pointerout",e,n,t),this.triggerPointer("pointerleave",e,n,t),this.triggerAncestorPointer("pointerover",e,t,n),this.triggerPointer("pointerenter",e,t,n))}pointerUp(e){var r;const t=this._pointerDownTarget[e.pointerId];if(!t&&!this.raycasterManager.pointerOnCanvas)return;const n=((r=this._intersection[e.pointerId])==null?void 0:r.object)??this._renderManager.activeScene;e.pointerType!=="mouse"&&(n.__hovered=!1,this.triggerAncestorPointer("pointerout",e,n),this.triggerPointer("pointerleave",e,n)),this.dragManager.stopDragging(e)?this.setDropTarget([]):(this.triggerAncestorPointer("pointerup",e,n,t),n===t&&this.triggerAncestorPointer("click",e,n)),e.type==="pointerup"&&this.dblClick(e,n),t&&this.isMainClick(e)&&(t.__clicking=!1),e.pointerId!==this._primaryIdentifier&&this.clearPointerId(e.pointerId)}clearPointerId(e){delete this._intersection[e],delete this._pointerDownTarget[e],delete this._lastPointerDown[e],delete this._lastPointerMove[e],delete this._lastHoveredTarget[e]}dblClick(e,t){this.isMainClick(e)&&(t===this._lastClickTarget&&e.timeStamp-this._lastClickTimeStamp<=300?(this.triggerAncestorPointer("dblclick",e,t),this._lastClickTimeStamp=void 0):(this._lastClickTarget=t,this._lastClickTimeStamp=e.timeStamp))}keyDown(e){const t=this.triggerAncestorKeyboard("keydown",e,!0);t!=null&&t._defaultPrevented||e.key!=="Escape"&&e.key!=="Esc"||this.dragManager.cancelDragging(this._lastPointerMove[this._primaryIdentifier])&&this.setDropTarget([])}keyUp(e){this.triggerAncestorKeyboard("keyup",e,!1)}setDropTarget(e){const t=e[0];this._intersectionDropTarget=t!=null&&t.object.__isDropTarget&&t.object.enabledState?t:void 0;const n=this._renderManager.activeScene;n&&(n.intersectionsDropTarget=e)}}class Ht{static push(e,t){const n=t.scene;n&&this._allowedEventsSet.has(e)&&this.pushScene(n,e,t)}static update(e){this.updateEvent(e,"viewportresize"),this.updateEvent(e,"beforeanimate"),this.updateEvent(e,"animate"),this.updateEvent(e,"afteranimate")}static updateEvent(e,t){var n;((n=e.__eventsDispatcher.listeners[t])==null?void 0:n.length)>0&&this.pushScene(e.scene,t,e)}static pushScene(e,t,n){const r=this._events[e.id]??(this._events[e.id]={});(r[t]??(r[t]=new Set)).add(n)}static removeAll(e){var n;const t=this._events[(n=e.scene)==null?void 0:n.id];if(t)for(const r in t)t[r].delete(e)}static remove(e,t){var r,s;const n=this._events[(r=t.scene)==null?void 0:r.id];n&&((s=n[e])==null||s.delete(t))}static dispatchEvent(e,t,n){const r=this._events[e==null?void 0:e.id];if(r!=null&&r[t])for(const s of r[t])s.__eventsDispatcher.dispatch(t,n)}static dispatchEventExcludeCameras(e,t,n){const r=this._events[e==null?void 0:e.id];if(r!=null&&r[t])for(const s of r[t])s.isCamera||s.__eventsDispatcher.dispatch(t,n)}}Ht._allowedEventsSet=new Set(["viewportresize","beforeanimate","animate","afteranimate"]),Ht._events={};const Ot=new V.Vector4,ri={};function vc(i){const e=i.render.bind(i);i.render=function(t,n){this.getViewport(Ot),function(r,s,o){let a;ri[s.id]||(ri[s.id]=new V.Vector4(-1));const c=ri[s.id];c.z===Ot.z&&c.w===Ot.w||(c.copy(Ot),a={renderer:r,camera:o,width:Ot.z,height:Ot.w},Ht.dispatchEventExcludeCameras(s,"viewportresize",a)),ri[o.id]||(ri[o.id]=new V.Vector4(-1));const l=ri[o.id];l.z===Ot.z&&l.w===Ot.w||(l.copy(Ot),o.__eventsDispatcher.dispatch("viewportresize",a??{renderer:r,camera:o,width:Ot.z,height:Ot.w}))}(this,t,n),e(t,n)}}class xc{get visible(){return this._visible}set visible(e){this._visible!==e&&(this._visible=e,this.scene.needsRender=!0)}constructor(e,t){this.computedViewport={left:0,bottom:0,width:0,height:0,top:0},this._rendererSize=t,this.scene=e.scene,this.camera=e.camera,this.viewport=e.viewport,this.tags=e.tags,this._visible=e.visible??!0,this.enabled=e.enabled??!0,this.backgroundAlpha=e.backgroundAlpha,this.backgroundColor=e.backgroundColor!==void 0?new V.Color(e.backgroundColor):void 0,this.composer=e.composer,this._onBeforeRender=e.onBeforeRender,this._onAfterRender=e.onAfterRender,this.scene.add(this.camera),this.update()}update(){var e;this.viewport?(this.computedViewport.left=Math.floor(this._rendererSize.x*this.viewport.left),this.computedViewport.bottom=Math.floor(this._rendererSize.y*this.viewport.bottom),this.computedViewport.width=Math.floor(this._rendererSize.x*this.viewport.width),this.computedViewport.height=Math.floor(this._rendererSize.y*this.viewport.height),this.computedViewport.top=Math.floor(this._rendererSize.y-this.computedViewport.bottom-this.computedViewport.height)):(this.computedViewport.width=this._rendererSize.x,this.computedViewport.height=this._rendererSize.y),(e=this.composer)==null||e.setSize(this.computedViewport.width,this.computedViewport.height),this.scene.needsRender=!0}onBeforeRender(){var e;(e=this._onBeforeRender)==null||e.apply(this)}onAfterRender(){var e;(e=this._onAfterRender)==null||e.apply(this)}}class Mc{get activeScene(){var e;return(e=this.activeView)==null?void 0:e.scene}get hoveredScene(){var e;return(e=this.hoveredView)==null?void 0:e.scene}get fullscreen(){return this._fullscreen}set fullscreen(e){this._fullscreen=e,this.updateRenderSize()}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){this._backgroundColor=new V.Color(e),this.renderer.setClearColor(this._backgroundColor,this._backgroundAlpha)}get backgroundAlpha(){return this._backgroundAlpha}set backgroundAlpha(e){this._backgroundAlpha=e,this.renderer.setClearColor(this._backgroundColor,this._backgroundAlpha)}constructor(e={},t=!0,n=0,r=1){this.views=[],this._visibleScenes=new Set,this._rendererSize=new V.Vector2,this.renderer=new V.WebGLRenderer(e),this.renderer.setPixelRatio(window.devicePixelRatio),vc(this.renderer),this.appendCanvas(e),this._fullscreen=t,this._backgroundAlpha=r,this._backgroundColor=new V.Color(n),window.addEventListener("resize",this.onResize.bind(this)),this.updateRenderSize(),this.renderer.setClearColor(this._backgroundColor,this._backgroundAlpha)}appendCanvas(e){e.canvas||document.body.appendChild(this.renderer.domElement)}create(e){const t=new xc(e,this._rendererSize);return this.views.push(t),t}add(e){this.views.indexOf(e)>-1||this.views.push(e)}getByTag(e){for(const t of this.views)if(t.tags.indexOf(e)>-1)return t}remove(e){const t=this.views.indexOf(e);t>-1&&(this.views.splice(t,1),this.views.length===0&&this.setDefaultRendererParameters())}removeByTag(e){if(this.views.length!==0){for(let t=this.views.length-1;t>=0;t--)this.views[t].tags.indexOf(e)>-1&&this.views.splice(t,1);this.views.length===0&&this.setDefaultRendererParameters()}}clear(){this.views=[],this.setDefaultRendererParameters()}setDefaultRendererParameters(){this.renderer.setScissorTest(!1),this.renderer.setViewport(0,0,this._rendererSize.width,this._rendererSize.height),this.renderer.setScissor(0,0,this._rendererSize.width,this._rendererSize.height),this.renderer.setClearColor(this._backgroundColor,this._backgroundAlpha)}getVisibleScenes(){if(this.views.length!==0){this._visibleScenes.clear();for(const e of this.views)e.visible&&this._visibleScenes.add(e.scene);return this._visibleScenes}}updateActiveView(e,t){this.hoveredView=t?this.getViewByMouse(e):void 0,this.hoveredView&&(this.activeView=this.hoveredView)}getViewByMouse(e){for(let t=this.views.length-1;t>=0;t--){const n=this.views[t],r=n.computedViewport;if(n.visible&&r.left<=e.x&&r.left+r.width>=e.x&&r.top<=e.y&&r.top+r.height>=e.y)return n}}isRenderNecessary(){for(const e of this.views)if(e.visible&&e.scene.needsRender)return!0;return!1}render(){if(!this.isRenderNecessary())return!1;for(const e of this.views)if(e.visible){const t=e.computedViewport;this.renderer.setScissorTest(e.viewport!==void 0),this.renderer.setViewport(t.left,t.bottom,t.width,t.height),this.renderer.setScissor(t.left,t.bottom,t.width,t.height),this.renderer.setClearColor(e.backgroundColor??this._backgroundColor,e.backgroundAlpha??this._backgroundAlpha),e.onBeforeRender(),this.executeRender(e.scene,e.camera,e.composer),e.onAfterRender()}return!0}executeRender(e,t,n){n?n.render():this.renderer.render(e,t)}onResize(){this.updateRenderSize();for(const e of this.views)e.update()}updateRenderSize(){if(this._fullscreen)this.renderer.setSize(window.innerWidth,window.innerHeight);else{const{width:e,height:t}=this.renderer.domElement.getBoundingClientRect();this.renderer.setSize(e,t,!1)}this.renderer.getSize(this._rendererSize)}setActiveViewsByTag(e){for(const t of this.views)t.visible=t.tags.indexOf(e)>-1}}class Ui{get finished(){return this._finished}constructor(e,t){this.actionIndex=-1,this.history=[],this.repetitions={},this._finished=!1,this.paused=!1,this.timeScale=1,this.target=e,this.tween=t}setTimeScale(e){return this.timeScale=e,this}pause(){this.paused=!0}resume(){this.paused=!1}stop(){zt.stop(this)}complete(){zt.complete(this)}revert(){console.error("Revert method not implemented yet.")}getBlock(){var t,n,r,s,o;(r=(n=(t=this.currentBlock)==null?void 0:t.config)==null?void 0:n.onComplete)==null||r.call(this.target,this.target);const e=this.getCurrentBlock();return(o=(s=e==null?void 0:e.config)==null?void 0:s.onStart)==null||o.call(this.target,this.target),this.tween.blockHistory||this.reversed||this.repeat||!e||this.history.push(e),this.currentBlock=e,e}getCurrentBlock(){return this.reversed?this.getPrevBlock():this.repeat?this.getRepeatBlock():this.getNextBlock()}getPrevBlock(){if(this.actionIndex>0){const e=this.history[--this.actionIndex];return e.reversed=!e.originallyReversed,e.elapsedTime=0,e.tweensStarted=!1,e}}getRepeatBlock(){if(this.actionIndex<this.history.length-1){const e=this.history[++this.actionIndex];return e.reversed=e.originallyReversed,e.elapsedTime=0,e.tweensStarted=!1,e}}getNextBlock(){for(;++this.actionIndex<this.tween.actions.length;){const e=this.tween.actions[this.actionIndex];if(e.isRepeat)this.handleRepetition(e.times);else{if(!e.isYoyo)return e.isTween?this.handleTween(e):this.handleMotion();{const t=this.handleYoyo(e.times);if(t)return t}}}}cloneBlock(e){return{elapsedTime:0,totalTime:e.totalTime,reversed:!e.reversed,originallyReversed:!e.reversed,actions:e.actions,tweens:e.tweens,config:e.config,runningTweens:this.cloneRunningTweens(e.runningTweens)}}cloneRunningTweens(e){if(!e)return;const t=[];for(const n of e){const r=new Ui(n.target,n.tween);r.timeScale=n.timeScale,r.root=n.root,r.history=n.history,r.actionIndex=n.reversed?-1:n.history.length,r.originallyReversed=!n.reversed,r.repeat=n.reversed,t.push(r)}return t}handleMotion(){const e=this.tween.actions[this.actionIndex].init(this.target);return{config:e.config,actions:e.actions,elapsedTime:0,totalTime:Math.max(...e.actions.map(t=>t.time))}}handleTween(e){return{tweens:e.tweens,elapsedTime:0,totalTime:0}}handleRepetition(e){var t;const n=this.repetitions;if(n[t=this.actionIndex]??(n[t]=0),n[this.actionIndex]<e){n[this.actionIndex]++;do this.actionIndex--;while(this.actionIndex>-1&&!this.tween.actions[this.actionIndex].hasActions);this.actionIndex--}}handleYoyo(e){var t;const n=this.repetitions;if(n[t=this.actionIndex]??(n[t]=0),n[this.actionIndex]<e){if(n[this.actionIndex]++,n[this.actionIndex--]<3)return this.cloneBlock(this.history[this.history.length-1]);const r=this.history[this.history.length-2];return r.elapsedTime=0,r.tweensStarted=!1,r}}execute(e){if(this.paused)return!0;e*=this.timeScale;do e=Math.min(this.executeBlock(e),this.getTweensDelta(this.currentBlock));while(e>=0&&this.getBlock());return e<0}executeBlock(e){const t=this.currentBlock;return t.elapsedTime+=e,this.executeActions(t),this.executeTweens(t,e),t.elapsedTime-t.totalTime}executeActions(e){var t,n,r,s,o;if(e.actions){for(const a of e.actions){const c=Math.min(1,e.elapsedTime/(a.time+1e-12)),l=e.reversed?1-c:c,h=((t=a.easing)==null?void 0:t.call(this,l))??l;((r=(n=e.config)==null?void 0:n.onProgress)==null?void 0:r.call(this.target,this.target,a.key,a.start,a.end,h))!==!1&&a.callback(a.start,a.end,h)}(o=(s=e.config)==null?void 0:s.onUpdate)==null||o.call(this.target,this.target)}}executeTweens(e,t){if(e.tweens&&!e.tweensStarted){if(e.runningTweens)for(const n of e.runningTweens)n.executeExistingTween(t,this.reversed);else{e.runningTweens=[];for(const n of e.tweens)this.executeTween(e,t,n)}e.tweensStarted=!0}}executeTween(e,t,n){const r=zt.createChildren(this.target,n,this.root??this);e.runningTweens.push(r),r.execute(t)&&zt.addChildren(r)}executeExistingTween(e,t){this.reversed=t?!this.originallyReversed:this.originallyReversed,this.repeat=!this.reversed,this.actionIndex=this.reversed?this.history.length:-1,this.getBlock(),this.execute(e)&&zt.addChildren(this)}getTweensDelta(e){let t=Number.MAX_SAFE_INTEGER;if(e.runningTweens)for(const n of e.runningTweens){const r=n.repeat||n.reversed?n.actionIndex:n.history.length-1,s=n.history[r];t=Math.min(t,s.elapsedTime-s.totalTime,n.getTweensDelta(s))}return t}}class zt{static create(e,t){const n=new Ui(e,t);return n.getBlock(),this._running.push(n),n}static createChildren(e,t,n){const r=new Ui(e,t);return r.root=n,r.getBlock(),r}static addChildren(e){this._runningChildren.push(e)}static update(e){const t=this._runningChildren;for(let r=t.length-1;r>=0;r--){const s=t[r];s.execute(e*s.root.timeScale)||t.splice(r,1)}const n=this._running;for(let r=n.length-1;r>=0;r--)n[r].execute(e)||(n[r]._finished=!0,n.splice(r,1))}static stop(e){const t=this._running.indexOf(e);if(t<0)return;this._running.splice(t,1),e._finished=!0,e.paused=!1;const n=this._runningChildren;for(let r=n.length-1;r>=0;r--)n[r].root===e&&n.splice(r,1)}static complete(e){const t=this._running.indexOf(e);if(t<0)return;e.paused=!1;const n=this._runningChildren;for(let r=n.length-1;r>=0;r--)n[r].root!==e||n[r].execute(1/0)||n.splice(r,1);!e.tween.infiniteLoop&&e.execute(1/0)||(this._running.splice(t,1),e._finished=!0)}static stopById(e){for(let t=this._running.length-1;t>=0;t--)if(this._running[t].tween.id===e)return void this._running[t].stop()}static stopAll(){for(let e=this._running.length-1;e>=0;e--)this._running[e].stop()}static stopAllByTag(e){for(let t=this._running.length-1;t>=0;t--)this._running[t].tween.tags.indexOf(e)>-1&&this._running[t].stop()}static completeAll(){for(let e=this._running.length-1;e>=0;e--)this._running[e].complete()}static completeAllByTag(e){for(let t=this._running.length-1;t>=0;t--)this._running[t].tween.tags.indexOf(e)>-1&&this._running[t].complete()}}zt._running=[],zt._runningChildren=[];class Sc{constructor(){this.dom=document.createElement("div"),this.mode=0,this.frames=0,this.beginTime=(performance||Date).now(),this.prevTime=this.beginTime,this.fpsPanel=this.addPanel(new ur("FPS","#0ff","#002")),this.msPanel=this.addPanel(new ur("MS","#0f0","#020")),this.dom.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",this.dom.addEventListener("click",e=>{e.preventDefault(),this.showPanel(++this.mode%this.dom.children.length)},!1),self.performance&&self.performance.memory&&(this.memPanel=this.addPanel(new ur("MB","#f08","#201"))),this.showPanel(0)}addPanel(e){return this.dom.appendChild(e.dom),e}showPanel(e){for(let t=0;t<this.dom.children.length;t++)this.dom.children[t].style.display=t===e?"block":"none";this.mode=e}begin(){this.beginTime=(performance||Date).now()}end(e){e!==!1&&this.frames++;const t=(performance||Date).now();if(this.msPanel.update(t-this.beginTime,200),t>=this.prevTime+1e3&&(this.fpsPanel.update(1e3*this.frames/(t-this.prevTime),100),this.prevTime=t,this.frames=0,this.memPanel)){const n=performance.memory;this.memPanel.update(n.usedJSHeapSize/1048576,n.jsHeapSizeLimit/1048576)}return t}update(e){this.beginTime=this.end(e)}}class ur{constructor(e,t,n){this.name=e,this.fg=t,this.bg=n,this.min=1/0,this.max=0,this.PR=Math.round(window.devicePixelRatio||1),this.WIDTH=80*this.PR,this.HEIGHT=48*this.PR,this.TEXT_X=3*this.PR,this.TEXT_Y=2*this.PR,this.GRAPH_X=3*this.PR,this.GRAPH_Y=15*this.PR,this.GRAPH_WIDTH=74*this.PR,this.GRAPH_HEIGHT=30*this.PR,this.dom=document.createElement("canvas"),this.dom.width=this.WIDTH,this.dom.height=this.HEIGHT,this.dom.style.cssText="width:80px;height:48px",this.context=this.dom.getContext("2d"),this.context.font="bold "+9*this.PR+"px Helvetica,Arial,sans-serif",this.context.textBaseline="top",this.context.fillStyle=n,this.context.fillRect(0,0,this.WIDTH,this.HEIGHT),this.context.fillStyle=t,this.context.fillText(e,this.TEXT_X,this.TEXT_Y),this.context.fillRect(this.GRAPH_X,this.GRAPH_Y,this.GRAPH_WIDTH,this.GRAPH_HEIGHT),this.context.fillStyle=n,this.context.globalAlpha=.9,this.context.fillRect(this.GRAPH_X,this.GRAPH_Y,this.GRAPH_WIDTH,this.GRAPH_HEIGHT)}update(e,t){this.min=Math.min(this.min,e),this.max=Math.max(this.max,e),this.context.fillStyle=this.bg,this.context.globalAlpha=1,this.context.fillRect(0,0,this.WIDTH,this.GRAPH_Y),this.context.fillStyle=this.fg,this.context.fillText(Math.round(e)+" "+this.name+" ("+Math.round(this.min)+"-"+Math.round(this.max)+")",this.TEXT_X,this.TEXT_Y),this.context.drawImage(this.dom,this.GRAPH_X+this.PR,this.GRAPH_Y,this.GRAPH_WIDTH-this.PR,this.GRAPH_HEIGHT,this.GRAPH_X,this.GRAPH_Y,this.GRAPH_WIDTH-this.PR,this.GRAPH_HEIGHT),this.context.fillRect(this.GRAPH_X+this.GRAPH_WIDTH-this.PR,this.GRAPH_Y,this.PR,this.GRAPH_HEIGHT),this.context.fillStyle=this.bg,this.context.globalAlpha=.9,this.context.fillRect(this.GRAPH_X+this.GRAPH_WIDTH-this.PR,this.GRAPH_Y,this.PR,Math.round((1-e/t)*this.GRAPH_HEIGHT))}}function Lm(){}class Rr{get renderer(){return this._renderManager.renderer}get views(){return this._renderManager.views}get activeView(){return this._renderManager.activeView}get activeScene(){var e;return(e=this._renderManager.activeView)==null?void 0:e.scene}get activeCamera(){var e;return(e=this._renderManager.activeView)==null?void 0:e.camera}get activeComposer(){var e;return(e=this._renderManager.activeView)==null?void 0:e.composer}get showStats(){return this._showStats}set showStats(e){e?(this._stats||(this._stats=new Sc),document.body.appendChild(this._stats.dom)):this._stats&&document.body.removeChild(this._stats.dom),this._showStats=e}get multitouch(){return this._interactionManager.queue.multitouch}set multitouch(e){this._interactionManager.queue.multitouch=e}get dragButtons(){return this._interactionManager.dragManager.dragButtons}set dragButtons(e){this._interactionManager.dragManager.dragButtons=e}get enableCursor(){return this._interactionManager.cursorManager.enabled}set enableCursor(e){this._interactionManager.cursorManager.enabled=e}get raycasterSortComparer(){return this._interactionManager.raycasterManager.raycasterSortComparer}set raycasterSortComparer(e){this._interactionManager.raycasterManager.raycasterSortComparer=e}get raycaster(){return this._interactionManager.raycasterManager.raycaster}get backgroundColor(){return this._renderManager.backgroundColor}set backgroundColor(e){this._renderManager.backgroundColor=e}get backgroundAlpha(){return this._renderManager.backgroundAlpha}set backgroundAlpha(e){this._renderManager.backgroundAlpha=e}get mousePosition(){return this._interactionManager.raycasterManager.pointer}get pointerOnCanvas(){return this._interactionManager.raycasterManager.pointerOnCanvas}constructor(e={}){this._clock=new V.Clock,this._renderManager=new Mc(e.rendererParameters,e.fullscreen,e.backgroundColor,e.backgroundAlpha),this._interactionManager=new gc(this._renderManager),this.multitouch=e.multitouch??!1,this.handleContextMenu(e.disableContextMenu),this.showStats=e.showStats??!0,this.setAnimationLoop(),this.enableCursor=e.enableCursor??!0,this._animate=e.animate}handleContextMenu(e=!0){e&&this.renderer.domElement.addEventListener("contextmenu",t=>t.preventDefault())}setAnimationLoop(){this.renderer.setAnimationLoop((e,t)=>{Rr.ticks++;const n=this._clock.getDelta();this._interactionManager.update(),zt.update(1e3*n),this.animate(n,this._clock.elapsedTime);let r=!1;const s=this._renderManager.getVisibleScenes();if(s){for(const o of s){const a=n*o.timeScale,c=o.totalTime+=a;Ht.dispatchEvent(o,"beforeanimate",{delta:a,total:c}),Ht.dispatchEvent(o,"animate",{delta:a,total:c}),Ht.dispatchEvent(o,"afteranimate",{delta:a,total:c}),pn.compute(o)}r=this._renderManager.render();for(const o of s)o.needsRender=!o.__smartRendering}this._showStats&&this._stats.update(r)})}animate(e,t){this._animate&&this._animate(e,t)}createView(e){return this._renderManager.create(e)}addView(e){this._renderManager.add(e)}getViewByTag(e){return this._renderManager.getByTag(e)}removeView(e){this._renderManager.remove(e)}removeViewByTag(e){this._renderManager.removeByTag(e)}clearViews(){this._renderManager.clear()}getViewByMouse(e){this._renderManager.getViewByMouse(e)}setActiveViewsByTag(e){this._renderManager.setActiveViewsByTag(e)}}Rr.ticks=0;class nn{}nn.focusable=!0,nn.draggable=!1,nn.interceptByRaycaster=!0;class Cr{linear(e){return e}easeInSine(e){return 1-Math.cos(e*Math.PI/2)}easeOutSine(e){return Math.sin(e*Math.PI/2)}easeInOutSine(e){return-(Math.cos(Math.PI*e)-1)/2}easeInQuad(e){return e*e}easeOutQuad(e){return 1-(1-e)*(1-e)}easeInOutQuad(e){return e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2}easeInCubic(e){return e*e*e}easeOutCubic(e){return 1-Math.pow(1-e,3)}easeInOutCubic(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}easeInQuart(e){return e*e*e*e}easeOutQuart(e){return 1-Math.pow(1-e,4)}easeInOutQuart(e){return e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2}easeInQuint(e){return e*e*e*e*e}easeOutQuint(e){return 1-Math.pow(1-e,5)}easeInOutQuint(e){return e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2}easeInExpo(e){return e===0?0:Math.pow(2,10*e-10)}easeOutExpo(e){return e===1?1:1-Math.pow(2,-10*e)}easeInOutExpo(e){return e===0?0:e===1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2}easeInCirc(e){return 1-Math.sqrt(1-Math.pow(e,2))}easeOutCirc(e){return Math.sqrt(1-Math.pow(e-1,2))}easeInOutCirc(e){return e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2}easeInBack(e){return 2.70158*e*e*e-1.70158*e*e}easeOutBack(e){return 1+2.70158*Math.pow(e-1,3)+1.70158*Math.pow(e-1,2)}easeInOutBack(e){const t=2.5949095;return e<.5?Math.pow(2*e,2)*(7.189819*e-t)/2:(Math.pow(2*e-2,2)*((t+1)*(2*e-2)+t)+2)/2}easeInElastic(e){return e===0?0:e===1?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*(2*Math.PI)/3)}easeOutElastic(e){return e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*(2*Math.PI)/3)+1}easeInOutElastic(e){const t=2*Math.PI/4.5;return e===0?0:e===1?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*t)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*t)/2+1}easeInBounce(e){return 1-this.easeOutBounce(1-e)}easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}easeInOutBounce(e){return e<.5?(1-this.easeOutBounce(1-2*e))/2:(1+this.easeOutBounce(2*e-1))/2}}Cr.DEFAULT_EASING="easeInOutExpo";const ps=new Cr;class yc{constructor(e){this.times=e,this.hasActions=!1,this.isRepeat=!0}}class Ec{constructor(e){this.times=e,this.hasActions=!1,this.isYoyo=!0}}class dr{constructor(...e){this.hasActions=!0,this.isTween=!0,this.tweens=[];for(const t of e)this.tweens.push(t.clone())}}class bc{constructor(e){this.callback=e,this.hasActions=!0}init(){return{actions:[{callback:this.callback,time:0}]}}}class Tc{constructor(e){this.time=e,this.hasActions=!0}init(){return{actions:[{callback:()=>{},time:this.time}]}}}class fr{constructor(e,t,n,r){this.time=e,this.motion=t,this.config=n,this.isBy=r,this.hasActions=!0}init(e){const t=[];for(const n in this.motion){if(n==="easing")continue;const r=this.motion[n],s=e[n],o=this.vector(n,r,s)??this.quaternion(n,r,s)??this.euler(n,r,s)??this.color(n,r,s)??this.number(e,n,r);o&&t.push(o)}return{actions:t,config:this.config}}getEasing(){var t;const e=((t=this.config)==null?void 0:t.easing)??Cr.DEFAULT_EASING;return typeof e=="string"?ps[e].bind(ps)??ps.linear:e}vector(e,t,n){if(n&&(n.isVector2||n.isVector3||n.isVector4)){const r=typeof t=="number"?n.clone().setScalar(t):t;return{key:e,time:this.time,easing:this.getEasing(),start:n.clone(),end:this.isBy?r.clone().add(n):r,callback:(s,o,a)=>{n.lerpVectors(s,o,a)}}}}quaternion(e,t,n){if(n!=null&&n.isQuaternion)return{key:e,time:this.time,easing:this.getEasing(),start:n.clone(),end:this.isBy?t.clone().premultiply(n):t,callback:(r,s,o)=>{n.slerpQuaternions(r,s,o)}}}euler(e,t,n){if(n!=null&&n.isEuler)return{key:e,time:this.time,easing:this.getEasing(),start:n.clone(),end:this.isBy?new V.Euler(t.x+n.x,t.y+n.y,t.z+n.z):t,callback:(r,s,o)=>{n.set(V.MathUtils.lerp(r.x,s.x,o),V.MathUtils.lerp(r.y,s.y,o),V.MathUtils.lerp(r.z,s.z,o))}}}color(e,t,n){if(n!=null&&n.isColor)return{key:e,time:this.time,easing:this.getEasing(),start:n.clone(),end:this.isBy?new V.Color(t).add(n):new V.Color(t),callback:(r,s,o)=>{n.lerpColors(r,s,o)}}}number(e,t,n){if(typeof n=="number")return{key:t,time:this.time,easing:this.getEasing(),start:e[t],end:this.isBy?n+e[t]:n,callback:(r,s,o)=>{e[t]=V.MathUtils.lerp(r,s,o)}}}}class Mi{constructor(e){this.actions=[],this.blockHistory=!1,this.infiniteLoop=!1,this.tags=[],this.target=e}setId(e){return this.id=e,this}setTags(...e){return this.tags=e,this}setTarget(e){return this.target=e,this}to(e,t,n){return this.actions.push(new fr(e,t,n,!1)),this}by(e,t,n){return this.actions.push(new fr(e,t,n,!0)),this}set(e){return this.actions.push(new fr(0,e,{},!1)),this}call(e){return this.actions.push(new bc(e)),this}delay(e){return this.actions.push(new Tc(e)),this}repeat(e=1){return e===1/0&&(this.blockHistory=!0,this.infiniteLoop=!0),this.actions[this.actions.length-1].isRepeat?this.actions[this.actions.length-1].times+=e:this.actions.push(new yc(e)),this}repeatForever(){return this.repeat(1/0)}yoyo(e=1){return e===1/0&&(this.infiniteLoop=!0),this.actions[this.actions.length-1].isYoyo?this.actions[this.actions.length-1].times+=e:this.actions.push(new Ec(e)),this}yoyoForever(){return this.yoyo(1/0)}then(e){return this.actions.push(new dr(e)),this.infiniteLoop||(this.infiniteLoop=e.infiniteLoop),this}parallel(...e){return this.actions.push(new dr(...e)),this.infiniteLoop||(this.infiniteLoop=e.some(t=>t.infiniteLoop)),this}sequence(...e){for(const t of e)this.actions.push(new dr(t)),this.infiniteLoop||(this.infiniteLoop=t.infiniteLoop);return this}chain(e){return this.actions.push(...e.actions),this.infiniteLoop||(this.infiniteLoop=e.infiniteLoop),this}clone(){const e=new Mi(this.target);return e.actions=[...this.actions],e.tags=[...this.tags],e.infiniteLoop=this.infiniteLoop,e}start(){return this.id!==void 0&&zt.stopById(this.id),zt.create(this.target,this)}}function Ac(i,e){const t=Dc(e),n=[];for(let r=0;r<t.length;r++)n[r]=[t[r]];return Rc(i,n)}function wc(i,e){const t=[],n=Dc(e),r=[];for(let s=0;s<n.length;s++)r[s]=[n[s]];return Cc(i,r,t),t}function Rc(i,e){const t=[];for(const n of e){const r=[];t.push(r);for(const o of n)if(Pc(i,o,r))return i;const s=r[r.length-1];s!==void 0&&s.prev===s||r.push(n[n.length-1])}for(const n of i.children){const r=Rc(n,t);if(r)return r}}function Cc(i,e,t){const n=[];let r=!1;for(const s of e){const o=[];n.push(o);for(const c of s)if(Pc(i,c,o)&&!r){if(t.push(i),i.children.length===0)return;r=!0}const a=o[o.length-1];a!==void 0&&a.prev===a||o.push(s[s.length-1])}for(const s of i.children)Cc(s,n,t)}function Pc(i,e,t){if(function(n,r){return function(s,o){return!o||s.type===o}(n,r.type)&&function(s,o){for(const a of o)if(!s.tags.has(a))return!1;return!0}(n,r.tags)&&function(s,o){for(const a of o)switch(a.operator){case void 0:if(cr(s,a.key)!==a.value)return!1;break;case"*":if(!cr(s,a.key).includes(a.value))return!1;break;case"$":if(!cr(s,a.key).endsWith(a.value))return!1;break;case"^":if(!cr(s,a.key).startsWith(a.value))return!1}return!0}(n,r.attributes)}(i,e)){if(!e.next)return!0;t.push(e.next)}return!1}function cr(i,e){const t=i[e];return typeof t=="string"?t:t==null?void 0:t.toString()}function Dc(i){const e=[];let t={attributes:[],tags:[]},n=0,r=0;for(e.push(t),t.prev=t,i=i.trim();(r=n)<i.length;){let s=i[r];const o=Im(i,r);if(o){if(o.char===",")t={attributes:[],tags:[]},e.push(t),t.prev=t;else{const a={attributes:[],tags:[],recursive:o.char===" "};t.next=a,a.prev=Um(a,t),t=a}r=o.end,s=i[r]}n=Nm(i,r+1),s==="."?Om(i,r,n,t):s==="["?Bm(i,r,n,t):Fm(i,r,n,t)}return e}function Im(i,e){let t;for(;e<i.length;e++){const n=i[e];if(n!==" "&&n!==">"&&n!==",")break;t?n!==" "&&(t.char=n):t={char:n}}return t&&(t.end=e),t}function Um(i,e){if(i.recursive)return i;for(;e!==e.prev;)e=e.prev;return e}function Nm(i,e){for(;e<i.length;e++){const t=i[e];if(t==="."||t===" "||t===">"||t==="["||t===",")break}return e}function Om(i,e,t,n){n.tags.push(i.substring(e+1,t))}function Fm(i,e,t,n){n.type=i.substring(e,t)}function Bm(i,e,t,n){const r=i.substring(e+1,t-1).split("="),s=r[0][r[0].length-1];s==="*"||s==="$"||s==="^"?n.attributes.push({key:r[0].slice(0,-1),value:r[1],operator:s}):n.attributes.push({key:r[0],value:r[1]})}function Lc(i){var e;i.__onChangeBaseEuler=i.rotation._onChangeCallback,(e=i.scene)!=null&&e.__smartRendering?Bs(i):zs(i)}function Bs(i){i.rotation._onChangeCallback=()=>{i.__onChangeBaseEuler(),i.needsRender=!0,i.__eventsDispatcher.dispatch("rotationchange")}}function zs(i){i.rotation._onChangeCallback=()=>{i.__onChangeBaseEuler(),i.__eventsDispatcher.dispatch("rotationchange")}}function Ic(i){i.matrix.compose=function(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,d=a+a,f=s*l,m=s*h,g=s*d,M=o*h,p=o*d,u=a*d,T=c*l,S=c*h,b=c*d,D=n._x,w=n._y,A=n._z;return r[0]=(1-(M+u))*D,r[1]=(m+b)*D,r[2]=(g-S)*D,r[3]=0,r[4]=(m-b)*w,r[5]=(1-(f+u))*w,r[6]=(p+T)*w,r[7]=0,r[8]=(g+S)*A,r[9]=(p-T)*A,r[10]=(1-(f+M))*A,r[11]=0,r[12]=e._x,r[13]=e._y,r[14]=e._z,r[15]=1,this}}function Uc(i){var e;i.__onChangeBaseQuat=i.quaternion._onChangeCallback,(e=i.scene)!=null&&e.__smartRendering?Hs(i):Gs(i)}function Gs(i){i.quaternion._onChangeCallback=()=>{i.__onChangeBaseQuat(),i.__eventsDispatcher.dispatch("rotationchange")}}function Hs(i){i.quaternion._onChangeCallback=()=>{i.__onChangeBaseQuat(),i.needsRender=!0,i.__eventsDispatcher.dispatch("rotationchange")}}function Nc(i){var e;Po(i.position),Po(i.scale),(e=i.scene)!=null&&e.__smartRendering?Vs(i):ks(i)}function ks(i){i.position._onChangeCallback=()=>i.__eventsDispatcher.dispatch("positionchange"),i.scale._onChangeCallback=()=>i.__eventsDispatcher.dispatch("scalechange")}function Vs(i){i.position._onChangeCallback=()=>{i.needsRender=!0,i.__eventsDispatcher.dispatch("positionchange")},i.scale._onChangeCallback=()=>{i.needsRender=!0,i.__eventsDispatcher.dispatch("scalechange")}}function Po(i){i._x=i.x,i._y=i.y,i._z=i.z,delete i.x,delete i.y,delete i.z,Object.setPrototypeOf(i,Oc.prototype)}class Oc{get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}set(e,t,n){return n===void 0&&(n=this._z),this._x=e,this._y=t,this._z=n,this._onChangeCallback(),this}setScalar(e){return this._x=e,this._y=e,this._z=e,this._onChangeCallback(),this}setX(e){return this._x=e,this._onChangeCallback(),this}setY(e){return this._y=e,this._onChangeCallback(),this}setZ(e){return this._z=e,this._onChangeCallback(),this}setComponent(e,t){switch(e){case 0:this._x=t;break;case 1:this._y=t;break;case 2:this._z=t;break;default:throw new Error("index is out of range: "+e)}return this._onChangeCallback(),this}getComponent(e){switch(e){case 0:return this._x;case 1:return this._y;case 2:return this._z;default:throw new Error("index is out of range: "+e)}}clone(){return new V.Vector3.prototype.constructor(this._x,this._y,this._z)}copy(e,t){return this._x=e.x,this._y=e.y,this._z=e.z,t!==!1&&this._onChangeCallback(),this}add(e){return this._x+=e.x,this._y+=e.y,this._z+=e.z,this._onChangeCallback(),this}addScalar(e){return this._x+=e,this._y+=e,this._z+=e,this._onChangeCallback(),this}addVectors(e,t){return this._x=e.x+t.x,this._y=e.y+t.y,this._z=e.z+t.z,this._onChangeCallback(),this}addScaledVector(e,t){return this._x+=e.x*t,this._y+=e.y*t,this._z+=e.z*t,this._onChangeCallback(),this}sub(e){return this._x-=e.x,this._y-=e.y,this._z-=e.z,this._onChangeCallback(),this}subScalar(e){return this._x-=e,this._y-=e,this._z-=e,this._onChangeCallback(),this}subVectors(e,t){return this._x=e.x-t.x,this._y=e.y-t.y,this._z=e.z-t.z,this._onChangeCallback(),this}multiply(e){return this._x*=e.x,this._y*=e.y,this._z*=e.z,this._onChangeCallback(),this}multiplyScalar(e,t){return this._x*=e,this._y*=e,this._z*=e,t!==!1&&this._onChangeCallback(),this}multiplyVectors(e,t){return this._x=e.x*t.x,this._y=e.y*t.y,this._z=e.z*t.z,this._onChangeCallback(),this}applyEuler(e){return this.applyQuaternion(Do.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Do.setFromAxisAngle(e,t))}applyMatrix3(e,t){const n=this._x,r=this._y,s=this._z,o=e.elements;return this._x=o[0]*n+o[3]*r+o[6]*s,this._y=o[1]*n+o[4]*r+o[7]*s,this._z=o[2]*n+o[5]*r+o[8]*s,t!==!1&&this._onChangeCallback(),this}applyNormalMatrix(e){return this.applyMatrix3(e,!1).normalize()}applyMatrix4(e,t){const n=this._x,r=this._y,s=this._z,o=e.elements,a=1/(o[3]*n+o[7]*r+o[11]*s+o[15]);return this._x=(o[0]*n+o[4]*r+o[8]*s+o[12])*a,this._y=(o[1]*n+o[5]*r+o[9]*s+o[13])*a,this._z=(o[2]*n+o[6]*r+o[10]*s+o[14])*a,t!==!1&&this._onChangeCallback(),this}applyQuaternion(e){const t=this._x,n=this._y,r=this._z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),h=2*(a*t-s*r),d=2*(s*n-o*t);return this._x=t+c*l+o*d-a*h,this._y=n+c*h+a*l-s*d,this._z=r+c*d+s*h-o*l,this._onChangeCallback(),this}project(e){return this.applyMatrix4(e.matrixWorldInverse,!1).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse,!1).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this._x,n=this._y,r=this._z,s=e.elements;return this._x=s[0]*t+s[4]*n+s[8]*r,this._y=s[1]*t+s[5]*n+s[9]*r,this._z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this._x/=e.x,this._y/=e.y,this._z/=e.z,this._onChangeCallback(),this}divideScalar(e,t){return this.multiplyScalar(1/e,t)}min(e){return this._x=Math.min(this._x,e.x),this._y=Math.min(this._y,e.y),this._z=Math.min(this._z,e.z),this._onChangeCallback(),this}max(e){return this._x=Math.max(this._x,e.x),this._y=Math.max(this._y,e.y),this._z=Math.max(this._z,e.z),this._onChangeCallback(),this}clamp(e,t){return this._x=Math.max(e.x,Math.min(t.x,this._x)),this._y=Math.max(e.y,Math.min(t.y,this._y)),this._z=Math.max(e.z,Math.min(t.z,this._z)),this._onChangeCallback(),this}clampScalar(e,t){return this._x=Math.max(e,Math.min(t,this._x)),this._y=Math.max(e,Math.min(t,this._y)),this._z=Math.max(e,Math.min(t,this._z)),this._onChangeCallback(),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1,!1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this._x=Math.floor(this._x),this._y=Math.floor(this._y),this._z=Math.floor(this._z),this._onChangeCallback(),this}ceil(){return this._x=Math.ceil(this._x),this._y=Math.ceil(this._y),this._z=Math.ceil(this._z),this._onChangeCallback(),this}round(){return this._x=Math.round(this._x),this._y=Math.round(this._y),this._z=Math.round(this._z),this._onChangeCallback(),this}roundToZero(){return this._x=Math.trunc(this._x),this._y=Math.trunc(this._y),this._z=Math.trunc(this._z),this._onChangeCallback(),this}negate(){return this._x=-this._x,this._y=-this._y,this._z=-this._z,this._onChangeCallback(),this}dot(e){return this._x*e.x+this._y*e.y+this._z*e.z}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z)}manhattanLength(){return Math.abs(this._x)+Math.abs(this._y)+Math.abs(this._z)}normalize(e){return this.divideScalar(this.length()||1,e)}setLength(e){return this.normalize(!1).multiplyScalar(e)}lerp(e,t){return this._x+=(e.x-this._x)*t,this._y+=(e.y-this._y)*t,this._z+=(e.z-this._z)*t,this._onChangeCallback(),this}lerpVectors(e,t,n){return this._x=e.x+(t.x-e.x)*n,this._y=e.y+(t.y-e.y)*n,this._z=e.z+(t.z-e.z)*n,this._onChangeCallback(),this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this._x=r*c-s*a,this._y=s*o-n*c,this._z=n*a-r*o,this._onChangeCallback(),this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e,!1).multiplyScalar(n)}projectOnPlane(e){return ms.copy(this).projectOnVector(e),this.sub(ms)}reflect(e){return this.sub(ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(V.MathUtils.clamp(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this._x-e.x,n=this._y-e.y,r=this._z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this._x-e.x)+Math.abs(this._y-e.y)+Math.abs(this._z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this._x=r*Math.sin(n),this._y=Math.cos(t)*e,this._z=r*Math.cos(n),this._onChangeCallback(),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this._x=e*Math.sin(t),this._y=n,this._z=e*Math.cos(t),this._onChangeCallback(),this}setFromMatrixPosition(e){const t=e.elements;return this._x=t[12],this._y=t[13],this._z=t[14],this._onChangeCallback(),this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this._x=t,this._y=n,this._z=r,this._onChangeCallback(),this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._onChangeCallback(),this}setFromColor(e){return this._x=e.r,this._y=e.g,this._z=e.b,this._onChangeCallback(),this}equals(e){return e.x===this._x&&e.y===this._y&&e.z===this._z}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._onChangeCallback(),this}random(){return this._x=Math.random(),this._y=Math.random(),this._z=Math.random(),this._onChangeCallback(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this._onChangeCallback(),this}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z}}Oc.prototype.isVector3=!0;const ms=new V.Vector3,Do=new V.Quaternion;function Fc(i){i.scene.__smartRendering&&!i.__smartRenderingPatched&&Hc(i)}function Bc(i){i.__smartRenderingPatched&&(ks(i),Gs(i),zs(i),function(e){const t=e.__baseVisibleDescriptor;t?Object.defineProperty(e,"visible",t):delete e.visible}(i),i.__smartRenderingPatched=!1)}function zc(i){i.__smartRendering=!0,Gc(i)}function Gc(i){i.__smartRenderingPatched||Hc(i);for(const e of i.children)Gc(e)}function Hc(i){qs(i),Ys(i),Vs(i),Hs(i),Bs(i),function(e){e.__baseVisibleDescriptor=Object.getOwnPropertyDescriptor(e,"visible"),Object.defineProperty(e,"visible",{get:function(){return this.__visible},set:function(t){this.__visible!==t&&(t||this.applyBlur(),this.__visible=t,this.needsRender=!0,this.__eventsDispatcher.dispatchDescendant("visiblechange",{value:t,target:this}))},configurable:!0})}(i),i.__smartRenderingPatched=!0}function Pr(i,e){i.scene=e,Ht.update(i),Fc(i),pn.bindToScene(i);for(const t of i.children)Pr(t,e)}function Dr(i){Ht.removeAll(i),Bc(i),pn.unbindFromScene(i),i.scene=void 0;for(const e of i.children)Dr(e)}V.Scene.prototype.continuousRaycasting=!1,V.Scene.prototype.continuousRaycastingDropTarget=!1,V.Scene.prototype.needsRender=!0,V.Scene.prototype.blurOnClickOut=!1,V.Scene.prototype.timeScale=1,V.Scene.prototype.totalTime=0,V.Scene.prototype.__smartRendering=!1,V.Scene.prototype.cursor="default",V.Scene.prototype.activeSmartRendering=function(){return zc(this),this},V.Scene.prototype.focus=function(i){const e=i==null?void 0:i.firstFocusable;if((!i||e!=null&&e.enabledState)&&this.focusedObject!==e){const t=this.focusedObject;this.focusedObject=e,t!=null&&t.enabledState&&(t.__focused=!1,t.__eventsDispatcher.dispatchDOMAncestor("blur",new In(e)),t.__eventsDispatcher.dispatchDOM("focusout",new In(e))),e&&(e.__focused=!0,e.__eventsDispatcher.dispatchDOMAncestor("focus",new In(t)),e.__eventsDispatcher.dispatchDOM("focusin",new In(t))),this.needsRender=!0}},V.Scene.prototype.add=function(i){return Ws.call(this,...arguments),arguments.length===1&&(i!=null&&i.isObject3D)&&i!==this&&(Pr(i,this),this.needsRender=!0),this},V.Scene.prototype.remove=function(i){return arguments.length===1&&this.children.indexOf(i)>-1&&(Dr(i),this.needsRender=!0),Xs.call(this,...arguments),this},Object.defineProperty(V.Scene.prototype,"userData",{set:function(i){this.focusable=!1,this.draggable=nn.draggable,this.interceptByRaycaster=nn.interceptByRaycaster,this.tags=new Set,this.__boundCallbacks=[],this.__eventsDispatcher=new As(this),this.intersections=[],this.intersectionsDropTarget=[],this.scene=this,this.__boundObjects=new Set,Object.defineProperty(this,"userData",{value:i,writable:!0,configurable:!0})},configurable:!0}),V.Object3D.prototype.findDropTarget=!1,V.Object3D.prototype.__manualDetection=!1,V.Object3D.prototype.__focused=!1,V.Object3D.prototype.__clicking=!1,V.Object3D.prototype.__dragging=!1,V.Object3D.prototype.__hovered=!1,V.Object3D.prototype.__visible=!0,Object.defineProperty(V.Object3D.prototype,"visible",{get:function(){return this.__visible},set:function(i){this.__visible!==i&&(this.__visible=i,this.__eventsDispatcher.dispatchDescendant("visiblechange",{value:i,target:this}))},configurable:!0}),V.Object3D.prototype.__enabled=!0,Object.defineProperty(V.Object3D.prototype,"enabled",{get:function(){return this.__enabled},set:function(i){this.__enabled!==i&&(i||this.applyBlur(),this.__enabled=i,this.__eventsDispatcher.dispatchDescendant("enabledchange",{value:i,target:this}))},configurable:!0}),Object.defineProperty(V.Object3D.prototype,"firstFocusable",{get:function(){let i=this;for(;(i==null?void 0:i.focusable)===!1;)i=i.parent;return i}}),Object.defineProperty(V.Object3D.prototype,"enabledState",{get:function(){let i=this;do if(!i.enabled)return!1;while(i=i.parent);return!0}}),Object.defineProperty(V.Object3D.prototype,"visibilityState",{get:function(){let i=this;do if(!i.visible)return!1;while(i=i.parent);return!0}}),Object.defineProperty(V.Object3D.prototype,"needsRender",{get:function(){var i;return(i=this.scene)==null?void 0:i.needsRender},set:function(i){this.scene&&(this.scene.needsRender=i)}}),Object.defineProperty(V.Object3D.prototype,"hovered",{get:function(){return this.__hovered}}),Object.defineProperty(V.Object3D.prototype,"focused",{get:function(){return this.__focused}}),Object.defineProperty(V.Object3D.prototype,"clicking",{get:function(){return this.__clicking}}),Object.defineProperty(V.Object3D.prototype,"dragging",{get:function(){return this.__dragging}}),V.Object3D.prototype.on=function(i,e){if(typeof i=="string")return this.__eventsDispatcher.add(i,e);for(const t of i)this.__eventsDispatcher.add(t,e);return e},V.Object3D.prototype.hasEvent=function(i,e){return this.__eventsDispatcher.has(i,e)},V.Object3D.prototype.off=function(i,e){this.__eventsDispatcher.remove(i,e)},V.Object3D.prototype.trigger=function(i,e){this.__eventsDispatcher.dispatchManual(i,e)},V.Object3D.prototype.triggerAncestor=function(i,e){this.__eventsDispatcher.dispatchAncestorManual(i,e)},Object.defineProperty(V.Object3D.prototype,"userData",{set:function(i){this.focusable=nn.focusable,this.draggable=nn.draggable,this.interceptByRaycaster=nn.interceptByRaycaster,this.tags=new Set,this.__boundCallbacks=[],this.__eventsDispatcher=new As(this),Object.defineProperty(this,"userData",{value:i,writable:!0,configurable:!0})},configurable:!0}),V.Object3D.prototype.applyFocus=function(){var i;(i=this.scene)==null||i.focus(this)},V.Object3D.prototype.applyBlur=function(){var i;this===((i=this.scene)==null?void 0:i.focusedObject)&&this.scene.focus()},V.Object3D.prototype.setManualDetectionMode=function(){pn.setManualDetectionMode(this)},V.Object3D.prototype.detectChanges=function(i=!1){pn.detectChanges(this,i)},V.Object3D.prototype.bindProperty=function(i,e,t){return pn.bindProperty(i,this,e,t),this},V.Object3D.prototype.unbindProperty=function(i){return pn.unbindProperty(this,i),this},V.Object3D.prototype.tween=function(i){return new Mi(this).setId(i)},V.Object3D.prototype.querySelector=function(i){return Ac(this,i)},V.Object3D.prototype.querySelectorAll=function(i){return wc(this,i)};const Ws=V.Object3D.prototype.add;V.Object3D.prototype.add=function(i){return Ws.call(this,...arguments),arguments.length===1&&(i!=null&&i.isObject3D)&&i!==this&&this.scene&&(Pr(i,this.scene),this.scene.needsRender=!0),this};const Xs=V.Object3D.prototype.remove;function qs(i){i.__vec3Patched||(Nc(i),Ic(i),i.__vec3Patched=!0)}function Ys(i){i.__rotationPatched||(Uc(i),Lc(i),i.__rotationPatched=!0)}V.Object3D.prototype.remove=function(i){return arguments.length===1&&this.children.indexOf(i)>-1&&this.scene&&(Dr(i),this.scene.needsRender=!0),Xs.call(this,...arguments),this};class As{constructor(e){this.listeners={},this.parent=e}add(e,t){return this.listeners[e]||(this.listeners[e]=[],e==="positionchange"||e==="scalechange"?qs(this.parent):e==="rotationchange"?Ys(this.parent):e!=="drop"&&e!=="dragenter"&&e!=="dragleave"&&e!=="dragover"||(this.parent.__isDropTarget=!0)),this.listeners[e].indexOf(t)<0&&this.listeners[e].push(t),Ht.push(e,this.parent),t}has(e,t){var n;return((n=this.listeners[e])==null?void 0:n.indexOf(t))>-1}remove(e,t){var r;const n=((r=this.listeners[e])==null?void 0:r.indexOf(t))??-1;n>-1&&(this.listeners[e].splice(n,1),this.listeners[e].length===0&&(Ht.remove(e,this.parent),this.parent.__isDropTarget=this.isDropTarget()))}isDropTarget(){var t,n,r,s;const e=this.listeners;return!this.parent.isInstancedMesh&&(((t=e.drop)==null?void 0:t.length)>0||((n=e.dragenter)==null?void 0:n.length)>0||((r=e.dragleave)==null?void 0:r.length)>0||((s=e.dragover)==null?void 0:s.length)>0)}dispatchDOM(e,t){t._bubbles=!1,t._stoppedImmediatePropagation=!1,t._defaultPrevented=!1,t._type=e,t._target=this.parent,this.executeDOM(e,t)}dispatchDOMAncestor(e,t){let n=this.parent;for(t._bubbles=!0,t._stoppedImmediatePropagation=!1,t._defaultPrevented=!1,t._type=e,t._target=n;n&&t._bubbles;)n.__eventsDispatcher.executeDOM(e,t),n=n.parent}executeDOM(e,t){if(!this.listeners[e])return;const n=t.currentTarget=this.parent;for(const r of this.listeners[e]){if(t._stoppedImmediatePropagation)break;r.call(n,t)}}dispatch(e,t){if(this.listeners[e])for(const n of this.listeners[e])n.call(this.parent,t)}dispatchDescendant(e,t){const n=this.parent;if(n.__eventsDispatcher.dispatch(e,t),n.children)for(const r of n.children)r.__eventsDispatcher.dispatchDescendant(e,t)}dispatchManual(e,t){if((t==null?void 0:t.cancelable)!==void 0)return this.dispatchDOM(e,t);this.dispatch(e,t)}dispatchAncestorManual(e,t){(t==null?void 0:t.cancelable)!==void 0&&this.dispatchDOMAncestor(e,t)}}const zm=new V.MeshBasicMaterial;class Gm extends V.Mesh{constructor(e){super(e,zm)}}class kc{constructor(e){this.listeners={},this.parent=e}add(e,t){return this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].indexOf(t)<0&&this.listeners[e].push(t),t}has(e,t){var n;return((n=this.listeners[e])==null?void 0:n.indexOf(t))>-1}remove(e,t){var r;const n=((r=this.listeners[e])==null?void 0:r.indexOf(t))??-1;n>-1&&this.listeners[e].splice(n,1)}dispatchDOM(e,t){t._bubbles=!1,t._stoppedImmediatePropagation=!1,t._defaultPrevented=!1,t._type=e,t._target=this.parent,this.executeDOM(e,t)}executeDOM(e,t){if(!this.listeners[e])return;const n=t.currentTarget=this.parent;for(const r of this.listeners[e]){if(t._stoppedImmediatePropagation)break;r.call(n,t)}}dispatch(e,t){if(this.listeners[e])for(const n of this.listeners[e])n.call(this.parent,t)}dispatchManual(e,t){if((t==null?void 0:t.cancelable)!==void 0)return this.dispatchDOM(e,t);this.dispatch(e,t)}}class Vc extends V.InstancedMesh{get __enabledStateHovered(){return this._hoveredInstance.enabled&&super.enabledState}get hoveredInstance(){return this._hoveredInstance}get focusedInstance(){return this._focusedInstance}get clickingInstance(){return this._clickingInstance}get draggingInstance(){return this._draggingInstance}constructor(e,t,n,r,s=!1,o){super(e,t,n),this.isInstancedMesh2=!0,this.instances=[],this._tempMatrix=new V.Matrix4,this._tempColor=new V.Color,o=this._tempColor.set(o),this._animate=s,s&&this.instanceMatrix.setUsage(V.DynamicDrawUsage);for(let a=0;a<n;a++)this.instances.push(new r(this,a,o));this.on("animate",this.animate.bind(this)),this.on("pointerintersection",this.pointerIntersection.bind(this)),this.on("pointermove",this.pointerMove.bind(this)),this.on("pointerleave",this.pointerLeave.bind(this)),this.on("focusin",this.focusIn.bind(this)),this.on("focusout",this.focusOut.bind(this)),this.on("click",this.click.bind(this)),this.on("pointerdown",this.pointerDown.bind(this)),this.on("pointerup",this.pointerUp.bind(this)),this.on("keydown",this.keyDown.bind(this)),this.on("keyup",this.keyUp.bind(this)),this.on("wheel",this.wheel.bind(this)),this.on("drag",this.drag.bind(this)),this.on("dragstart",this.dragStart.bind(this)),this.on("dragend",this.dragEnd.bind(this)),this.on("dragcancel",this.dragCancel.bind(this))}focus(e){if(!this.__focused)return;const t=e!=null&&e.focusable?e:void 0;if((!e||t!=null&&t.enabled)&&this._focusedInstance!==t){const n=this._focusedInstance;this._focusedInstance=t,n!=null&&n.enabled&&(n.__focused=!1,n.__eventsDispatcher.dispatchDOM("blur",new In(t))),t&&(t.__focused=!0,t.__eventsDispatcher.dispatchDOM("focus",new In(n))),this.needsRender=!0}}pointerOverOut(e,t){const n=this.instances[e.instanceId];if(this._hoveredInstance!==n){const r=this._hoveredInstance;if(this._hoveredInstance=n,n.enabled&&(n.__hovered=!0),r&&(r.__hovered=!1,r.enabled)){const s=new Dt(t,e,n);r.__eventsDispatcher.dispatchDOM("pointerout",s)}if(n.enabled){const s=new Dt(t,e,r);n.__eventsDispatcher.dispatchDOM("pointerover",s)}}}animate(e){if(this._animate)for(let t=0;t<this.count;t++)this.instances[t].__eventsDispatcher.dispatch("animate",e)}pointerIntersection(e){var t;if(this.pointerOverOut(e.intersection,(t=this._lastPointerMove)==null?void 0:t.domEvent),this._hoveredInstance.enabled){const n=new Fs(e.intersection);this._hoveredInstance.__eventsDispatcher.dispatchDOM("pointerintersection",n)}}pointerMove(e){if(this._lastPointerMove=e,this.pointerOverOut(e.intersection,e.domEvent),this._hoveredInstance.enabled){const t=new Dt(e.domEvent,e.intersection);this._hoveredInstance.__eventsDispatcher.dispatchDOM("pointermove",t)}}pointerLeave(e){const t=this._hoveredInstance;if(t.__hovered=!1,this._hoveredInstance=void 0,t.enabled){const n=new Dt(e.domEvent,e.intersection);t.__eventsDispatcher.dispatchDOM("pointerout",n)}}focusIn(){this.focus(this._hoveredInstance)}focusOut(){this.focus()}click(e){var n;const t=this.instances[e.intersection.instanceId];if(t.enabled){const r=new Dt(e.domEvent,e.intersection);if(t.__eventsDispatcher.dispatchDOM("click",r),e.intersection.instanceId===((n=this._lastClick)==null?void 0:n.intersection.instanceId)&&e.timeStamp-this._lastClick.timeStamp<=300){const s=new Dt(e.domEvent,e.intersection);t.__eventsDispatcher.dispatchDOM("dblclick",s),this._lastClick=void 0}else this._lastClick=e}}pointerDown(e){const t=this.instances[e.intersection.instanceId];if(t.enabled){this._clickingInstance=t,t.__clicking=!0;const n=new Dt(e.domEvent,e.intersection,void 0,!0);t.__eventsDispatcher.dispatchDOM("pointerdown",n),n._defaultPrevented?e.preventDefault():this.focus(t)}}pointerUp(e){const t=this._clickingInstance;if(t){if(t.__clicking=!1,this._clickingInstance.enabled){const n=new Dt(e.domEvent,e.intersection);t.__eventsDispatcher.dispatchDOM("pointerup",n)}this._clickingInstance=void 0}}keyDown(e){if(this._focusedInstance.enabled){const t=new Er(e.domEvent,!0);this._focusedInstance.__eventsDispatcher.dispatchDOM("keydown",t),t._defaultPrevented&&e.preventDefault()}}keyUp(e){if(this._focusedInstance.enabled){const t=new Er(e.domEvent,!1);this._focusedInstance.__eventsDispatcher.dispatchDOM("keyup",t)}}wheel(e){if(this._hoveredInstance.enabled){const t=new Os(e.domEvent,e.intersection);this._hoveredInstance.__eventsDispatcher.dispatchDOM("wheel",t)}}drag(e){const t=new ci(e.domEvent,!0,e.dataTransfer,e.position,e.relatedTarget,e.intersection);this._draggingInstance.__eventsDispatcher.dispatchDOM("drag",t),t._defaultPrevented&&e.preventDefault()}dragStart(e){this._draggingInstance=this.instances[e.intersection.instanceId],this._draggingInstance.__dragging=!0;const t=new ci(e.domEvent,!1,e.dataTransfer,e.position,e.relatedTarget,e.intersection);this._draggingInstance.__eventsDispatcher.dispatchDOM("dragstart",t)}dragEnd(e){const t=this._draggingInstance;t.__dragging=!1,this._draggingInstance=void 0;const n=new ci(e.domEvent,!1,e.dataTransfer,e.position,e.relatedTarget,e.intersection);t.__eventsDispatcher.dispatchDOM("dragend",n),this.computeBoundingSphere()}dragCancel(e){const t=new ci(e.domEvent,e.cancelable,e.dataTransfer,e.position,e.relatedTarget,e.intersection);this._draggingInstance.__eventsDispatcher.dispatchDOM("dragcancel",t),t._defaultPrevented&&e.preventDefault()}}(function(...i){for(const e of i)Object.defineProperty(Vc.prototype,e,{get:function(){return this._hoveredInstance[e]},set:function(){},configurable:!0})})("cursor","cursorDrag","cursorDrop","draggable","findDropTarget");const lr=new V.Quaternion;class Hm extends V.EventDispatcher{get hovered(){return this.__hovered}get focused(){return this.__focused}get clicking(){return this.__clicking}get dragging(){return this.__dragging}get enabledState(){return this.enabled&&this.parent.enabledState}get matrixWorld(){const e=this.parent._tempMatrix;return e.compose(this.position,this.quaternion,this.scale),this.parent.updateWorldMatrix(!0,!1),e.premultiply(this.parent.matrixWorld)}constructor(e,t,n){super(),this.isInstancedMeshEntity=!0,this.position=new V.Vector3,this.scale=new V.Vector3(1,1,1),this.quaternion=new V.Quaternion,this.enabled=!0,this.focusable=!0,this.draggable=!1,this.findDropTarget=!1,this.__hovered=!1,this.__focused=!1,this.__clicking=!1,this.__dragging=!1,this.parent=e,this.instanceId=t,this.__eventsDispatcher=new kc(this),n!==void 0&&this.setColor(n)}setColor(e){const t=this.parent;t.setColorAt(this.instanceId,t._tempColor.set(e)),t.instanceColor.needsUpdate=!0}getColor(e=this.parent._tempColor){return this.parent.getColorAt(this.instanceId,e),e}updateMatrix(){const e=this.parent,t=e._tempMatrix;t.compose(this.position,this.quaternion,this.scale),e.setMatrixAt(this.instanceId,t),e.instanceMatrix.needsUpdate=!0}applyMatrix4(e){const t=this.parent,n=t._tempMatrix;return n.compose(this.position,this.quaternion,this.scale),n.premultiply(e),n.decompose(this.position,this.quaternion,this.scale),t.setMatrixAt(this.instanceId,n),t.instanceMatrix.needsUpdate=!0,this}applyQuaternion(e){return this.quaternion.premultiply(e),this}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}applyFocus(){this.parent.focus(this)}applyBlur(){this.parent.focusedInstance===this&&this.parent.focus()}on(e,t){if(typeof e=="string")return this.__eventsDispatcher.add(e,t);for(const n of e)this.__eventsDispatcher.add(n,t);return t}hasEvent(e,t){return this.__eventsDispatcher.has(e,t)}off(e,t){this.__eventsDispatcher.remove(e,t)}trigger(e,t){this.__eventsDispatcher.dispatchManual(e,t)}tween(){return new Mi(this)}}V.Material.prototype.tween=function(i){return new Mi(this).setId(i)};class pr{static get(e){if(typeof e=="string")return this._results[e];const t=[];for(const n of e)t.push(this._results[n]);return t}static getLoader(e){return this._loaders.has(e)||this._loaders.set(e,new e),this._loaders.get(e)}static load(e,t,n,r){return new Promise(s=>{if(this._results[t])return s(this._results[t]);this.getLoader(e).load(t,o=>{this._results[t]=o,s(o)},n,o=>{r&&r(o),s(void 0)})})}static preload(e,...t){this._pending.push({loader:e,paths:t})}static preloadAllPending(e={}){const t=this.loadAll(e,...this._pending);return this._pending=[],t}static loadAll(e={},...t){const n=[];e.onProgress??(e.onProgress=this.onProgress),e.onError??(e.onError=this.onError),e.total=0,e.progress=0;for(const r of t)this.loadByLoader(r,n,e);return Promise.all(n)}static loadByLoader(e,t,n){if(e!=null&&e.paths){const r=this.getLoader(e.loader);for(const s of e.paths)t.push(this.startLoad(r,s,n))}}static startLoad(e,t,n){return new Promise(r=>{const s=t.path??t;if(this._results[s])return r();const o=t.onLoad;n.total++,e.load(s,a=>{this._results[s]=a,n.onProgress&&n.onProgress(++n.progress/n.total),o&&o(a),r()},void 0,a=>{n.onError&&n.onError(a),n.onProgress&&n.onProgress(++n.progress/n.total),r()})})}}pr._loaders=new Map,pr._results={},pr._pending=[];const Je=[...Array(4)].map(()=>new V.Vector3),km=new V.Vector3;class Di{static getPositionFromObject3D(e){return e.isObject3D?e.position:e}static getPositionsFromObject3D(e){const t=[];for(const n of e)t.push(this.getPositionFromObject3D(n));return t}static computeSign(e,t,n){return Math.sign(Je[0].subVectors(e,t).dot(n))}static haveSameDirection(e,t,n=.01){return Je[0].copy(e).normalize().dot(Je[1].copy(t).normalize())>1-n}static haveOppositeDirection(e,t,n=.01){return Je[0].copy(e).normalize().dot(Je[1].copy(t).normalize())<n-1}static perpendicular(e,t=new V.Vector3,n=this.DEFAULT_NORMAL){return t.crossVectors(e,n)}static perpendicularSigned(e,t,n=new V.Vector3,r=this.DEFAULT_NORMAL){return n.crossVectors(e,r),this.computeSign(t,km,n)!==1?n:n.multiplyScalar(-1)}static perpendicularByPoints(e,t,n=new V.Vector3,r=this.DEFAULT_NORMAL){const[s,o]=this.getPositionsFromObject3D([e,t]);return n.crossVectors(Je[0].subVectors(s,o),r)}static perpendicularSignedByPoints(e,t,n,r=new V.Vector3,s=this.DEFAULT_NORMAL){const[o,a,c]=this.getPositionsFromObject3D([e,t,n]);return r.crossVectors(Je[0].subVectors(o,a),s),this.computeSign(c,o,r)!==1?r:r.multiplyScalar(-1)}static bisector(e,t,n=new V.Vector3){return Je[0].copy(e).normalize(),Je[1].copy(t).normalize(),n.addVectors(Je[0],Je[1]).normalize()}static bisectorByPoints(e,t,n,r=new V.Vector3){const[s,o,a]=this.getPositionsFromObject3D([e,t,n]);return this.bisector(Je[2].subVectors(s,a),Je[3].subVectors(o,a),r)}static arePointsOnSameSide(e,t,n){const[r,...s]=this.getPositionsFromObject3D([e,...n]),o=this.computeSign(s[0],r,t);for(let a=1;a<n.length;a++)if(o!==this.computeSign(s[a],r,t))return!1;return!0}static arePointsOnSameSideByPoints(e,t,n,r=this.DEFAULT_NORMAL){const[s,o,...a]=this.getPositionsFromObject3D([e,t,...n]),c=this.perpendicularByPoints(s,o,Je[0],r),l=this.computeSign(a[0],s,c);for(let h=1;h<n.length;h++)if(l!==this.computeSign(a[h],s,c))return!1;return!0}static angleSignedFromOrigin(e,t,n=this.DEFAULT_NORMAL){return Math.atan2(Je[0].crossVectors(e,t).dot(n),e.dot(t))}static angleSignedByPoints(e,t,n,r=this.DEFAULT_NORMAL){const[s,o,a]=this.getPositionsFromObject3D([e,t,n]),c=Je[0].subVectors(s,a),l=Je[1].subVectors(o,a);return Math.atan2(Je[2].crossVectors(c,l).dot(r),c.dot(l))}static projectOnLine(e,t,n,r=new V.Vector3){const[s,o,a]=this.getPositionsFromObject3D([e,t,n]);return r.subVectors(s,o).projectOnVector(Je[0].subVectors(o,a)).add(o)}}Di.DEFAULT_NORMAL=new V.Vector3(0,0,1);class Vm{static line_line_2D(e,t,n,r,s=new V.Vector3){const[o,a,c,l]=Di.getPositionsFromObject3D([e,t,n,r]),h=(l.y-c.y)*(a.x-o.x)-(l.x-c.x)*(a.y-o.y);if(h===0)return;let d=((l.x-c.x)*(o.y-c.y)-(l.y-c.y)*(o.x-c.x))/h;return s.set(o.x+d*(a.x-o.x),o.y+d*(a.y-o.y),0)}static segment_segment_2D(e,t,n,r,s=new V.Vector3){const[o,a,c,l]=Di.getPositionsFromObject3D([e,t,n,r]),h=(l.y-c.y)*(a.x-o.x)-(l.x-c.x)*(a.y-o.y);if(h===0)return;let d=((l.x-c.x)*(o.y-c.y)-(l.y-c.y)*(o.x-c.x))/h,f=((a.x-o.x)*(o.y-c.y)-(a.y-o.y)*(o.x-c.x))/h;return d<0||d>1||f<0||f>1?void 0:s.set(o.x+d*(a.x-o.x),o.y+d*(a.y-o.y),0)}static line_line_3D(e,t,n,r,s=new V.Vector3,o=10**-6){const[a,c,l,h]=Di.getPositionsFromObject3D([e,t,n,r]),d=Je[0].subVectors(a,l),f=Je[1].subVectors(h,l);if(f.lengthSq()<o)return;const m=Je[2].subVectors(c,a);if(m.lengthSq()<o)return;const g=d.x*f.x+d.y*f.y+d.z*f.z,M=f.x*m.x+f.y*m.y+f.z*m.z,p=d.x*m.x+d.y*m.y+d.z*m.z,u=f.x*f.x+f.y*f.y+f.z*f.z,T=(m.x*m.x+m.y*m.y+m.z*m.z)*u-M*M;if(Math.abs(T)<o)return;const S=(g*M-p*u)/T;return s.set(a.x+S*m.x,a.y+S*m.y,a.z+S*m.z)}static line_boxAABB(e,t,n){const r=1/t.x,s=1/t.y,o=1/t.z;let a,c,l,h,d=0,f=1/0;return r>=0?(a=n.min.x,c=n.max.x):(a=n.max.x,c=n.min.x),l=(a-e.x)*r,h=(c-e.x)*r,d=l>d?l:d,f=h<f?h:f,s>=0?(a=n.min.y,c=n.max.y):(a=n.max.y,c=n.min.y),l=(a-e.y)*s,h=(c-e.y)*s,d=l>d?l:d,f=h<f?h:f,o>=0?(a=n.min.z,c=n.max.z):(a=n.max.z,c=n.min.z),l=(a-e.z)*o,h=(c-e.z)*o,d=l>d?l:d,f=h<f?h:f,d<=f}static segment_boxAABB(e,t,n){const r=Je[0].subVectors(t,e).normalize(),s=e.distanceTo(t),o=1/r.x,a=1/r.y,c=1/r.z;let l,h,d,f,m=0,g=1/0;return o>=0?(l=n.min.x,h=n.max.x):(l=n.max.x,h=n.min.x),d=(l-e.x)*o,f=(h-e.x)*o,m=d>m?d:m,g=f<g?f:g,a>=0?(l=n.min.y,h=n.max.y):(l=n.max.y,h=n.min.y),d=(l-e.y)*a,f=(h-e.y)*a,m=d>m?d:m,g=f<g?f:g,c>=0?(l=n.min.z,h=n.max.z):(l=n.max.z,h=n.min.z),d=(l-e.z)*c,f=(h-e.z)*c,m=d>m?d:m,g=f<g?f:g,m<=g&&s>=m}}class ws{static getSceneIntersection(e,t,n){return this._plane.setFromNormalAndCoplanarPoint(t.getWorldDirection(this._plane.normal),t.getWorldPosition(this._temp)),this._plane.translate(this._temp.copy(this._plane.normal).setLength(n)),e.intersectPlane(this._plane,this._temp)}static setChildrenDragTarget(e,t){e.traverse(n=>{n.draggable=!0,n.dragTarget=t})}static computeBoundingSphereChildren(e){e.traverse(t=>{t.updateMatrixWorld(),t.computeBoundingSphere&&t.computeBoundingSphere()})}static getNodes(e){return this.generateNodesFromObject(e,{},{})}static generateNodesFromObject(e,t,n){t[this.getNodeName(e,n)]=e;for(const r of e.children)this.generateNodesFromObject(r,t,n);return t}static getNodeName(e,t){const n=e.name;return t[n]===void 0?(t[n]=0,n):`${n}_${++t[n]}`}}ws._plane=new V.Plane,ws._temp=new V.Vector3;he.t4;he.PX;he.Qg;he.bn;he.Pj;he.fn;he.xR;he.KX;he.LK;he.gA;he.Or;he.ZB;he.z2;he.H7;he.wO;he.Ex;he.IW;he.kX;he.Fs;he.s6;he.mP;he.hP;he.bx;he.z_;he.l_;var Wm=he.or;he.gb;he.F5;he.s_;var Xm=he.L6;he.DJ;he.RR;he.$C;he.zo;he.bU;he.eZ;he.jk;he.L8;he.Ps;he.Nu;he.cQ;he.hY;he.tL;he.CP;he.Vh;he.Xp;he.DS;he.NP;he.yY;he.uF;he.E$;he.zD;he.Lz;he.R2;he.Wb;he.E9;he.qY;he.WG;he.Wr;he.i9;he.kN;he.YD;he.eH;he.A9;he.tf;he.cY;class qm extends wt{constructor(){super(new vi(.1,.1,.1),new Am),this.draggable=!0,this.on("animate",e=>this.rotateX(e.delta).rotateY(e.delta*2)),this.on(["pointerover","pointerout"],e=>{this.tween("id").to(500,{scale:e.type==="pointerover"?1.5:1},{easing:"easeOutElastic"}).start()})}}class Ym extends dc{constructor(){super(),this.add(new qm)}}class jm extends Wm{constructor(){super(),this.createView({scene:new Ym,camera:new Xm(70).translateZ(1)})}}new jm;
