/*! For license information please see 862.4d051c46.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkvillage_app=globalThis.webpackChunkvillage_app||[]).push([[862],{862:(t,e,n)=>{n.r(e),n.d(e,{MENU_BACK_BUTTON_PRIORITY:()=>o,OVERLAY_BACK_BUTTON_PRIORITY:()=>i,blockHardwareBackButton:()=>r,startHardwareBackButton:()=>a});const r=()=>{document.addEventListener("backbutton",(()=>{}))},a=()=>{const t=document;let e=!1;t.addEventListener("backbutton",(()=>{if(e)return;let n=0,r=[];const a=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){r.push({priority:t,handler:e,id:n++})}}});t.dispatchEvent(a);const i=()=>{if(r.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};r.forEach((e=>{e.priority>=t.priority&&(t=e)})),e=!0,r=r.filter((e=>e.id!==t.id)),(async t=>{try{if(null===t||void 0===t?void 0:t.handler){const e=t.handler(i);null!=e&&await e}}catch(e){console.error(e)}})(t).then((()=>e=!1))}};i()}))},i=100,o=99}}]);
//# sourceMappingURL=862.4d051c46.chunk.js.map