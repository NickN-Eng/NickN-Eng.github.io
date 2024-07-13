(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const I="modulepreload",N=function(e,t){return new URL(e,t).href},A={},F=function(t,o,r){if(!o||o.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(o.map(n=>{if(n=N(n,r),n in A)return;A[n]=!0;const a=n.endsWith(".css"),h=a?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const P=s[u];if(P.href===n&&(!a||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${h}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":I,a||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),a)return new Promise((u,P)=>{i.addEventListener("load",u),i.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t()).catch(n=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=n,window.dispatchEvent(a),!a.defaultPrevented)throw n})};function V(e){return e.replace(/([^:]\/)\/+/g,"$1").replace(/^\/+/,"/")}var x=(e=>(e.POLY_PROGRESS="POLYProgress",e.SCENE_CREATED="POLYSceneCreated",e.SCENE_READY="POLYSceneReady",e.SCENE_PLAY="POLYScenePlay",e.SCENE_PAUSE="POLYScenePause",e.VIEWER_MOUNTED="POLYViewerMounted",e.VIEWER_READY="POLYViewerReady",e))(x||{});class k{static dispatchProgressEvent(t,o){const r=s=>new CustomEvent(s,{detail:{progress:t}});document.dispatchEvent(r(x.POLY_PROGRESS)),document.dispatchEvent(r(`${x.POLY_PROGRESS}-${o}`))}}const G={sceneData:{start:0,mult:.25},assets:{start:.25,mult:0},nodes:{start:.25,mult:.75}};var T=(e=>(e.EXPORT_MANIFEST="scene/export_manifest.json",e.CODE_PREFIX="scene/code",e.PROPERTIES="scene/code/properties.json",e.EDITOR="scene/editor.json",e.ASSETS="scene/assets.json",e.POLYGONJS="js/all.js",e.SCENE_DATA_LOADER="js/sceneDataLoader.js",e.POLY_CONFIG="js/polyConfig.js",e.JS_FILES="scene/js_files.json",e.POSTER="images/poster.png",e))(T||{});function W(e){const{urlPrefix:t,nodePath:o,shaderName:r,timestamp:s}=e;return`${t}/root/${o}.${r}.glsl?t=${s}`}function z(e){const{urlPrefix:t,nodePath:o,timestamp:r}=e;return`${t}/root/${o}.txt?t=${r}`}function B(e,t){const o=Object.keys(e.shaders);for(let r of o){const s=e.shaders[r],n=Object.keys(s);for(let a of n){const h=s[a];t({nodePath:r,shaderName:a,timestamp:h})}}}function b(e,t){const o=Object.keys(e.jsFunctionBodies);for(let r of o){const s=e.jsFunctionBodies[r];t({nodePath:r,timestamp:s})}}class X{static async importSceneData(t){t.editorMode==null&&(t.editorMode=!1);const o=t.manifest,r=t.urlPrefix||T.CODE_PREFIX,s=Object.keys(o.nodes),n=[];for(let c of s){const l=o.nodes[c],f=`${r}/root/${c}.json?t=${l}`;n.push(f)}const a=`${r}/root.json?t=${o.root}`,h=`${r}/properties.json?t=${o.properties}`,m=[a,h];if(t.editorMode){const c=Date.now();m.push(`${r}/ui.json?t=${c}`)}for(let c of n)m.push(c);const i=[];B(o,c=>{const l=W({urlPrefix:r,...c});m.push(l),i.push(l)});const u=[];b(o,c=>{const l=z({urlPrefix:r,...c});m.push(l),u.push(l)});let P=0;const g=m.length-(i.length+u.length),D=m.length;function O(){P++;const c=P/D,l=G.sceneData,f=l.start+l.mult*c;t.onProgress&&t.onProgress(f),k.dispatchProgressEvent(f,t.sceneName)}const M=m.map(c=>V(c)).map(c=>fetch(c)),j=await Promise.all(M),E=j.slice(0,g),L=j.slice(g),S=await Promise.all([...E.map(c=>(O(),c.json())),...L.map(c=>(O(),c.text()))]),p=S.slice(0,g),R=S.slice(g);let _=0;const d={};B(o,c=>{const l=R[_],{nodePath:f,shaderName:C}=c;d[f]=d[f]||{},d[f][C]=l,_++});const y={};b(o,c=>{const l=R[_],{nodePath:f}=c;y[f]=l,_++});const $={root:p[0],properties:p[1],shaders:d,jsFunctionBodies:y};let v=2;t.editorMode&&($.ui=p[2],v+=1);const U={},w=Object.keys(o.nodes);for(let c=0;c<w.length;c++){const l=w[c],f=p[c+v];U[l]=f}return this.assemble($,w,U)}static async assemble(t,o,r){const s={root:t.root,properties:t.properties,ui:t.ui,shaders:t.shaders,jsFunctionBodies:t.jsFunctionBodies};for(let n=0;n<o.length;n++){const a=o[n],h=r[a];this._insertChildData(s.root,a,h)}return s}static _insertChildData(t,o,r){const s=o.split("/");if(s.length==1)t.nodes||(t.nodes={}),t.nodes[o]=r;else{const n=s.shift(),a=s.join("/"),h=t.nodes[n];this._insertChildData(h,a,r)}}}const q={properties:"1716594387981",root:"1675552563896",nodes:{geo1:"1716594387981","geo1/MAT":"1675552563896",ground:"1716594387981","ground/MAT":"1675552563896","ground/MAT/meshStandardBuilder1":"1716594387981",COP:"1675552563896",lights:"1716594387981",cameras:"1716594387981","cameras/cameraControls1":"1675552563896"},shaders:{"/ground/MAT/meshStandardBuilder1":{vertex:"1716594387981",fragment:"1716594387981","customDepthMaterial.vertex":"1716594387981","customDepthMaterial.fragment":"1716594387981","customDistanceMaterial.vertex":"1716594387981","customDistanceMaterial.fragment":"1716594387981","customDepthDOFMaterial.vertex":"1716594387981","customDepthDOFMaterial.fragment":"1716594387981"}},jsFunctionBodies:{}},J=async(e={})=>{const t=e.sceneDataRoot||"./polygonjs/scenes";return await X.importSceneData({sceneName:"scene_01",urlPrefix:t+"/scene_01",manifest:q,onProgress:e.onProgress})},K=async function(e={}){const{onProgress:t,domElement:o,configureSceneData:r,autoPlay:s,createViewer:n,printWarnings:a,renderer:h,cameraMaskOverride:m}=e;let i=e.sceneData;const u=e.baseUrl!=null?e.baseUrl:"./",P=e.sceneDataRoot!=null?e.sceneDataRoot:u+"/polygonjs/scenes",g=e.assetsRoot!=null?e.assetsRoot:u,D=e.libsRootPrefix!=null?e.libsRootPrefix:u,O=e.runRegister!=null?e.runRegister:!0,M=(e.loadModules!=null?e.loadModules:!0)?[]:[],j=[F(()=>import("./loadSceneFromSceneData-dd45dcea.js"),[],import.meta.url),i==null?J({onProgress:t,sceneDataRoot:P}):(()=>new Promise(d=>d()))()],E=await Promise.all(j),{Poly:L,loadSceneFromSceneData_scene_01:S}=E[0];i==null&&(i=E[1]),r&&r(i);const p=[];for(let d=2;d<E.length;d++)p.push(E[d]);let R=0;for(let d of M){const y=d+"Module";L.registerModule(p[R][y],a),R++}return await S({onProgress:t,sceneData:i,domElement:o,runRegister:O,autoPlay:s,createViewer:n,assetsRoot:g,libsRootPrefix:D,printWarnings:a,renderer:h,cameraMaskOverride:m})},H=async function(e={}){return e&&e.createViewer==null&&(e.createViewer=!0),K(e)};H({domElement:"app",baseUrl:"./"});export{x as P,k as a,G as b,V as s};
