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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[7313],{27313:(T,y,t)=>{t.r(y),t.d(y,{previewCIMSymbol:()=>b});var C=t(15861),g=t(23841),I=t(11369),p=t(56445),O=t(71131),P=t(34057);const U=new I.CIMSymbolRasterizer(null,!0),v=O.b_.maxSize;function b(e){return c.apply(this,arguments)}function c(){return(c=(0,C.Z)(function*(e,l={}){const{size:m,maxSize:d,node:M,opacity:f}=l,w=l.cimOptions||l,{feature:R,fieldMap:S,geometryType:W,style:z}=w,E=(0,p.kW)(e),s=Math.min(("number"==typeof m?m:null)??E,d??(0,g.Wz)(v));s!==E&&(e=e.clone(),(0,p.PI)(e,s,{preserveOutlineWidth:!0}));let o=3;e&&e.data&&e.data.symbol&&"CIMPointSymbol"!==e.data.symbol.type&&(o=1);const h=yield U.rasterizeCIMSymbolAsync(e,R,S,W,{scaleFactor:o,style:z}),a=document.createElement("canvas");a.width=h.imageData.width,a.height=h.imageData.height,a.getContext("2d").putImageData(h.imageData,0,0);let i=a.width/o,_=a.height/o;if(null!=m&&(null==l?.scale||l?.scale)){const n=i/_;i=n<=1?Math.ceil(s*n):s,_=n<=1?s:Math.ceil(s/n)}const r=new Image(i,_);r.src=a.toDataURL(),null!=f&&(r.style.opacity=`${f}`);let u=r;return null!=l.effectView&&(u=(0,P.w)([[{shape:{type:"image",x:0,y:0,width:i,height:_,src:r.src},fill:null,stroke:null,offset:[0,0]}]],[i,_],{effectView:l.effectView})),M&&M.appendChild(u),u})).apply(this,arguments)}}}]);