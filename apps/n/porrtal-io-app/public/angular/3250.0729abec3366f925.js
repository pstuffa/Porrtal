﻿/*
Copyright 2022 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[3250],{3250:(g,j,f)=>{f.r(j),f.d(j,{createSymbolSchema:()=>S});var i=f(39406),n=f(18716);function u(e){return"line-marker"===e.type?{type:"line-marker",color:e.color?.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function y(e){return(0,n.hF)(e)}function S(e,t,r=!1){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return function b(e,t,r){const a=(0,n.jj)(i.LW.FILL,t),l=r?y(a):a,s=e.clone(),o=s.outline,h=(0,n.jy)(t.symbologyType);h||(s.outline=null);const p={materialKey:l,hash:s.hash(),...u(s)};if(h)return p;const c=[];if(c.push(p),o){const m=(0,n.jj)(i.LW.LINE,{...t,isOutline:!0}),V={materialKey:r?y(m):m,hash:o.hash(),...u(o)};c.push(V)}return{type:"composite-symbol",layers:c,hash:c.reduce((m,V)=>V.hash+m,"")}}(e,t,r);case"simple-marker":case"picture-marker":return function L(e,t,r){const a=(0,n.jj)(i.LW.MARKER,t),l=r?y(a):a,s=u(e);return{materialKey:l,hash:e.hash(),...s,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,r);case"simple-line":return function K(e,t,r){const a=(0,n.jy)(t.symbologyType)?i.mD.DEFAULT:t.symbologyType,l=(0,n.jj)(i.LW.LINE,{...t,symbologyType:a}),s=r?y(l):l,o=e.clone(),h=o.marker;o.marker=null;const p=[];if(p.push({materialKey:s,hash:o.hash(),...u(o)}),h){const c=(0,n.jj)(i.LW.MARKER,t),m=r?y(c):c;h.color=h.color??o.color,p.push({materialKey:m,hash:h.hash(),lineWidth:o.width,...u(h)})}return{type:"composite-symbol",layers:p,hash:p.reduce((c,m)=>m.hash+c,"")}}(e,t,r);case"text":return function d(e,t,r){const a=(0,n.jj)(i.LW.TEXT,t),l=r?y(a):a,s=u(e);return{materialKey:l,hash:e.hash(),...s,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,r);case"label":return function _(e,t,r){const a=e.toJSON(),l=(0,n.jj)(i.LW.LABEL,{...t,placement:a.labelPlacement});return{materialKey:r?y(l):l,hash:e.hash(),...a,labelPlacement:a.labelPlacement}}(e,t,r);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return{...u(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}}}]);