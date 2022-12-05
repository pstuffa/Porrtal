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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[4223],{64223:(me,$,u)=>{u.r($),u.d($,{default:()=>ze});var O=u(15861),o=u(17626),j=u(84792),E=u(46160),w=u(26584),L=u(72392),Z=u(58817),ye=u(99959),he=u(94113),J=u(10699),G=u(32917),z=u(21726),n=u(77712),A=(u(90912),u(68653)),Y=u(76898),fe=u(99433),U=u(2004),ge=u(44917),ve=u(28678),xe=u(552),Se=u(49286),we=u(6647),Me=u(30346),Ce=u(99555),Q=u(2584);class Ie{constructor(t,r=0,i=t.lods.length-1){this.tileInfo=t,this.minLOD=r,this.maxLOD=i}getAvailability(t,r,i){const s=this.tileInfo.lodAt(t);return!s||t<this.minLOD||t>this.maxLOD?"unavailable":s.cols&&s.rows?i>=s.cols[0]&&i<=s.cols[1]&&r>=s.rows[0]&&r<=s.rows[1]?"available":"unavailable":"available"}fetchAvailability(t,r,i,s){var a=this;return(0,O.Z)(function*(){return yield(0,J.Yn)(s),a.getAvailability(t,r,i)})()}fetchAvailabilityUpsample(t,r,i,s,a){var l=this;return(0,O.Z)(function*(){yield(0,J.Yn)(a),s.level=t,s.row=r,s.col=i;const c=l.tileInfo;for(c.updateTileInfo(s);;){const d=l.getAvailability(s.level,s.row,s.col);if("unavailable"!==d)return d;if(!c.upsampleTile(s))return"unavailable"}})()}}var k,Te=u(91309),X=u(86810);u(85931),u(8314);let N=k=class extends X.wq{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new k;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};(0,o._)([(0,n.Cb)({type:U.Z,json:{read:{source:"fullExtent"}}})],N.prototype,"fullExtent",void 0),(0,o._)([(0,n.Cb)({type:String,json:{read:{source:"id"}}})],N.prototype,"id",void 0),(0,o._)([(0,n.Cb)({type:Q.Z,json:{read:{source:"tileInfo"}}})],N.prototype,"tileInfo",void 0),N=k=(0,o._)([(0,Y.j)("esri.layer.support.TileMatrixSet")],N);const Le=N;var q;let P=q=class extends X.wq{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new q;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,o._)([(0,n.Cb)({json:{read:{source:"id"}}})],P.prototype,"id",void 0),(0,o._)([(0,n.Cb)({json:{read:{source:"title"}}})],P.prototype,"title",void 0),(0,o._)([(0,n.Cb)({json:{read:{source:"abstract"}}})],P.prototype,"description",void 0),(0,o._)([(0,n.Cb)({json:{read:{source:"legendUrl"}}})],P.prototype,"legendUrl",void 0),(0,o._)([(0,n.Cb)({json:{read:{source:"isDefault"}}})],P.prototype,"isDefault",void 0),(0,o._)([(0,n.Cb)({json:{read:{source:"keywords"}}})],P.prototype,"keywords",void 0),P=q=(0,o._)([(0,Y.j)("esri.layer.support.WMTSStyle")],P);const be=P;var _;let S=_=class extends X.wq{constructor(e){super(e),this.fullExtent=null,this.fullExtents=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}get description(){return this._get("description")}set description(e){this._set("description",e)}readFullExtent(e,t){return(e=t.fullExtent)?U.Z.fromJSON(e):null}readFullExtents(e,t){return t.fullExtents?.length?t.fullExtents.map(r=>U.Z.fromJSON(r)):t.tileMatrixSets.map(r=>U.Z.fromJSON(r.fullExtent)).filter(r=>r)}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e}set styleId(e){this._set("styleId",e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find(e=>e.id===this.tileMatrixSetId):null}clone(){const e=new _;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,o._)([(0,n.Cb)()],S.prototype,"description",null),(0,o._)([(0,n.Cb)()],S.prototype,"fullExtent",void 0),(0,o._)([(0,A.r)("fullExtent",["fullExtent"])],S.prototype,"readFullExtent",null),(0,o._)([(0,n.Cb)({readOnly:!0})],S.prototype,"fullExtents",void 0),(0,o._)([(0,A.r)("fullExtents",["fullExtents","tileMatrixSets"])],S.prototype,"readFullExtents",null),(0,o._)([(0,n.Cb)()],S.prototype,"imageFormat",null),(0,o._)([(0,n.Cb)({json:{read:{source:"formats"}}})],S.prototype,"imageFormats",void 0),(0,o._)([(0,n.Cb)()],S.prototype,"id",void 0),(0,o._)([(0,n.Cb)()],S.prototype,"layer",void 0),(0,o._)([(0,n.Cb)()],S.prototype,"styleId",null),(0,o._)([(0,n.Cb)({type:E.Z.ofType(be),json:{read:{source:"styles"}}})],S.prototype,"styles",void 0),(0,o._)([(0,n.Cb)({value:null,json:{write:{ignoreOrigin:!0}}})],S.prototype,"title",null),(0,o._)([(0,n.Cb)()],S.prototype,"tileMatrixSetId",void 0),(0,o._)([(0,n.Cb)({readOnly:!0})],S.prototype,"tileMatrixSet",null),(0,o._)([(0,n.Cb)({type:E.Z.ofType(Le),json:{read:{source:"tileMatrixSets"}}})],S.prototype,"tileMatrixSets",void 0),S=_=(0,o._)([(0,Y.j)("esri.layers.support.WMTSSublayer")],S);const D=S;var Ee=u(62208),Pe=u(49672),Oe=u(12080),ee=u(84029),te=u(22825),le=u(7255);const ae=90.71428571428571;function oe(e){const t=e.replace(/ows:/gi,"");if(!g("Contents",(new DOMParser).parseFromString(t,"text/xml").documentElement))throw new w.Z("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function re(e){return e.nodeType===Node.ELEMENT_NODE}function g(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(re(i)&&i.nodeName===e)return i}return null}function R(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];re(s)&&s.nodeName===e&&r.push(s)}return r}function V(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];re(s)&&s.nodeName===e&&r.push(s)}return r.map(i=>i.textContent)}function h(e,t){return e.split(">").forEach(r=>{t&&(t=g(r,t))}),t&&t.textContent}function B(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some(a=>{if(a.nodeName.includes(e)){const l=g(t,a),c=l&&l.textContent;if(c===r||r.split(":")&&r.split(":")[1]===c)return s=a,!0}return!1}),s}function ne(e,t){const r=[],i=e.layerMap?.get(t);if(!i)return;const s=R("ResourceURL",i),a=R("Dimension",i);let l,c,d,y;return a.length&&(l=h("Identifier",a[0]),c=V("Default",a[0])||V("Value",a[0])),a.length>1&&(d=h("Identifier",a[1]),y=V("Default",a[1])||V("Value",a[1])),e.dimensionMap.set(t,{dimensions:c,dimensions2:y}),s.forEach(f=>{let p=f.getAttribute("template");if("tile"===f.getAttribute("resourceType")){if(l&&c.length)if(p.includes("{"+l+"}"))p=p.replace("{"+l+"}","{dimensionValue}");else{const v=p.toLowerCase().indexOf("{"+l.toLowerCase()+"}");v>-1&&(p=p.substring(0,v)+"{dimensionValue}"+p.substring(v+l.length+2))}if(d&&y.length)if(p.includes("{"+d+"}"))p=p.replace("{"+d+"}","{dimensionValue2}");else{const v=p.toLowerCase().indexOf("{"+d.toLowerCase()+"}");v>-1&&(p=p.substring(0,v)+"{dimensionValue2}"+p.substring(v+d.length+2))}r.push({template:p,format:f.getAttribute("format"),resourceType:"tile"})}}),r}function Ne(e){const t=g("WGS84BoundingBox",e),r=t?h("LowerCorner",t).split(" "):["-180","-90"],i=t?h("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function We(e){const t=[];return(0,le.h)(e,{BoundingBox:r=>{if(!r.getAttribute("crs"))return;const i=r.getAttribute("crs").toLowerCase(),s=ie(i),a=i.includes("epsg")&&(0,te.A)(s.wkid);let l,c,d,y;(0,le.h)(r,{LowerCorner:f=>{[l,c]=f.textContent.split(" ").map(p=>Number.parseFloat(p)),a&&([l,c]=[c,l])},UpperCorner:f=>{[d,y]=f.textContent.split(" ").map(p=>Number.parseFloat(p)),a&&([d,y]=[y,d])}}),t.push({xmin:l,ymin:c,xmax:d,ymax:y,spatialReference:s})}}),t}function Ze(e,t){return R("Style",e).map(r=>{const i=g("LegendURL",r),s=g("Keywords",r),a=s&&V("Keyword",s);let l=i&&i.getAttribute("xlink:href");return t&&(l=l&&l.replace(/^http:/i,"https:")),{abstract:h("Abstract",r),id:h("Identifier",r),isDefault:"true"===r.getAttribute("isDefault"),keywords:a,legendUrl:l,title:h("Title",r)}})}function De(e,t,r){return R("TileMatrixSetLink",t).map(i=>function Be(e,t,r){const i=g("TileMatrixSet",t).textContent,s=V("TileMatrix",t),a=r.find(C=>{const b=g("Identifier",C),F=b&&b.textContent;return!!(F===i||i.split(":")&&i.split(":")[1]===F)}),l=g("TileMatrixSetLimits",t),c=l&&R("TileMatrixLimits",l),d=new Map;if(c?.length)for(const C of c){const b=g("TileMatrix",C).textContent,F=+g("MinTileRow",C).textContent,se=+g("MaxTileRow",C).textContent,I=+g("MinTileCol",C).textContent,T=+g("MaxTileCol",C).textContent;d.set(b,{minCol:I,maxCol:T,minRow:F,maxRow:se})}const y=h("SupportedCRS",a).toLowerCase(),f=function Ke(e,t){return ue(g("TileMatrix",e),t)}(a,y),p=f.spatialReference,v=g("TileMatrix",a),x=[parseInt(h("TileWidth",v),10),parseInt(h("TileHeight",v),10)],M=[];s.length?s.forEach((C,b)=>{const F=B("TileMatrix","Identifier",C,a);M.push(ce(F,y,b,i,d))}):R("TileMatrix",a).forEach((C,b)=>{M.push(ce(C,y,b,i,d))});const H=function He(e,t,r,i,s){const a=g("BoundingBox",t);let l,c,d,y,f,p;if(a&&(l=h("LowerCorner",a).split(" "),c=h("UpperCorner",a).split(" ")),l&&l.length>1&&c&&c.length>1)d=parseFloat(l[0]),f=parseFloat(l[1]),y=parseFloat(c[0]),p=parseFloat(c[1]);else{const v=g("TileMatrix",t),x=parseInt(h("MatrixWidth",v),10),M=parseInt(h("MatrixHeight",v),10);d=r.x,p=r.y,y=d+x*i[0]*s.resolution,f=p-M*i[1]*s.resolution}return function $e(e,t){return"1.0.0"===e&&(0,te.A)(t.wkid)}(e,r.spatialReference)?new U.Z(f,d,p,y,r.spatialReference):new U.Z(d,f,y,p,r.spatialReference)}(e,a,f,x,M[0]).toJSON(),W=new Q.Z({dpi:96,spatialReference:p,size:x,origin:f,lods:M}).toJSON();return{id:i,fullExtent:H,tileInfo:W}}(e,i,r))}function ie(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);const r=function Je(e){return e.includes("crs84")||e.includes("crs:84")?K.CRS84:e.includes("crs83")||e.includes("crs:83")?K.CRS83:e.includes("crs27")||e.includes("crs:27")?K.CRS27:null}(e);return(0,Ee.pC)(r)&&(t=r),{wkid:t}}function ue(e,t){const r=ie(t),[i,s]=h("TopLeftCorner",e).split(" ").map(l=>parseFloat(l)),a=t.includes("epsg")&&(0,te.A)(r.wkid);return new Pe.Z(a?{x:s,y:i,spatialReference:r}:{x:i,y:s,spatialReference:r})}var K,e;function ce(e,t,r,i,s){const a=ie(t),l=h("Identifier",e);let c=parseFloat(h("ScaleDenominator",e));const d=de(a.wkid,c,i);c*=96/ae;const y=+h("MatrixWidth",e),f=+h("MatrixHeight",e),{maxCol:p=y-1,maxRow:v=f-1,minCol:x=0,minRow:M=0}=s.get(l)??{},{x:H,y:W}=ue(e,t);return{cols:[x,p],level:r,levelValue:l,origin:[H,W],scale:c,resolution:d,rows:[M,v]}}function de(e,t,r){let i;return i=ee.Z.hasOwnProperty(""+e)?ee.Z.values[ee.Z[e]]:"default028mm"===r?6370997*Math.PI/180:(0,Oe.e8)(e).metersPerDegree,7*t/25e3/i}(e=K||(K={}))[e.CRS84=4326]="CRS84",e[e.CRS83=4269]="CRS83",e[e.CRS27=4267]="CRS27";const pe={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},Ge=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let m=class extends((0,xe.h)((0,Me.Q)((0,Ce.M)((0,Se.q)((0,we.I)((0,ye.R)(ge.Z))))))){constructor(...e){super(...e),this._sublayersHandles=new L.Z,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.own([(0,G.YP)(()=>this.activeLayer,(t,r)=>{r&&(r.layer=null),t&&(t.layer=this)},G.Z_),(0,G.YP)(()=>this.sublayers,(t,r)=>{r&&(r.forEach(i=>{i.layer=null}),this._sublayersHandles.removeAll(),this._sublayersHandles=null),t&&(t.forEach(i=>{i.layer=this}),this._sublayersHandles||(this._sublayersHandles=new L.Z),this._sublayersHandles.add([t.on("after-add",({item:i})=>{i.layer=this}),t.on("after-remove",({item:i})=>{i.layer=null})]))},G.Z_)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(J.r9).then(()=>this._fetchService(e)).catch(t=>{throw(0,J.r9)(t),new w.Z("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:t})})),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new D);let i=t.layers.find(s=>s.id===this.activeLayer.id);return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,a=i?.layerIdentifier;let l=null;const c=i?.tileMatrixSet;c&&(Array.isArray(c)?c.length&&(l=c[0]):l=c);const d=s?.format,y=s?.style;return new D({id:a,imageFormat:d,styleId:y,tileMatrixSetId:l})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const a=(0,he.hS)("tileMatrixSet.tileInfo",s);t.tileInfo=a?a.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,r){return function Ye(e,t){return e.map(r=>{const i=new D;return i.read(r,t),i})}(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets.map(e=>e.tileInfo.spatialReference).toArray()}get tilemapCache(){const e=this.activeLayer?.tileMatrixSet?.tileInfo;return new Ie(e)}get title(){return this.activeLayer?.title??"Layer"}set title(e){e?this._override("title",e):this._clearOverride("title")}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,s=new Te.B({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(s.customLayerParameters=this.customLayerParameters),this.customParameters&&(s.customParameters=this.customParameters),new ve.default({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:s})}fetchTile(e,t,r){const i=this.getTileUrl(e,t,r);return(0,j.default)(i,{responseType:"image"}).then(s=>s.data)}findSublayerById(e){return this.sublayers.find(t=>t.id===e)}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],s=i?i.levelValue?i.levelValue:`${i.level}`:`${e}`;let a=this.resourceInfo?"":function Ue(e,t,r,i,s,a,l,c){const d=function Ve(e,t,r){const i=ne(e,t),s=i.filter(a=>a.format===r);return s.length?s:i}(e,t,i);if(!(d?.length>0))return"";const{dimensionMap:y}=e,f=y.get(t).dimensions?.[0],p=y.get(t).dimensions2?.[0];return d[l%d.length].template.replace(/\{Style\}/gi,s).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,a).replace(/\{TileRow\}/gi,""+l).replace(/\{TileCol\}/gi,""+c).replace(/\{dimensionValue\}/gi,f).replace(/\{dimensionValue2\}/gi,p)}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,r);return a||(a=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,s).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`)),a=this._appendCustomLayerParameters(a),a}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const s=function je(e,t,r,i){const{dimensionMap:s}=e,a=ne(e,t);let l="";if(a&&a.length>0){const c=s.get(t).dimensions&&s.get(t).dimensions[0],d=s.get(t).dimensions2&&s.get(t).dimensions2[0];l=a[0].template,l.indexOf(".xxx")===l.length-4&&(l=l.slice(0,l.length-4)),l=l.replace(/\{Style\}/gi,i),l=l.replace(/\{TileMatrixSet\}/gi,r),l=l.replace(/\{TileMatrix\}/gi,"{level}"),l=l.replace(/\{TileRow\}/gi,"{row}"),l=l.replace(/\{TileCol\}/gi,"{col}"),l=l.replace(/\{dimensionValue\}/gi,c),l=l.replace(/\{dimensionValue2\}/gi,d)}return l}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(s)return s}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let s="";return pe[r.toLowerCase()]&&(s=pe[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}_fetchService(e){var t=this;return(0,O.Z)(function*(){let r;if(t.resourceInfo)"KVP"===t.resourceInfo.serviceMode&&(t.url+=t.url.includes("?")?"":"?"),r={ssl:!1,data:t.resourceInfo};else try{r=yield t._getCapabilities(t.serviceMode,e),oe(r.data)}catch{const i="KVP"===t.serviceMode?"RESTful":"KVP";try{r=yield t._getCapabilities(i,e),oe(r.data),t.serviceMode=i}catch(s){throw new w.Z("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:s})}}r.data=t.resourceInfo?function Fe(e){return e.layers.forEach(t=>{t.tileMatrixSets.forEach(r=>{const i=r.tileInfo;96!==i.dpi&&(i.lods.forEach(s=>{s.scale=96*s.scale/i.dpi,s.resolution=de(i.spatialReference.wkid,s.scale*ae/96,r.id)}),i.dpi=96)})}),e}(r.data):function Re(e,t){e=e.replace(/ows:/gi,"");const r=(new DOMParser).parseFromString(e,"text/xml").documentElement,i=new Map,s=new Map,a=g("Contents",r);if(!a)throw new w.Z("wmtslayer:wmts-capabilities-xml-is-not-valid");const l=g("OperationsMetadata",r)?.querySelector("[name='GetTile']"),c=l?.getElementsByTagName("Get"),d=c&&Array.prototype.slice.call(c),y=t?.url?.indexOf("https")>-1;let f,p,v=t.serviceMode,x=t&&t.url;if(d&&d.length&&d.some(I=>{const T=g("Constraint",I);return!T||B("AllowedValues","Value",v,T)?(x=I.attributes[0].nodeValue,!0):(!T||B("AllowedValues","Value","RESTful",T)||B("AllowedValues","Value","REST",T)?p=I.attributes[0].nodeValue:T&&!B("AllowedValues","Value","KVP",T)||(f=I.attributes[0].nodeValue),!1)}),!x)if(p)x=p,v="RESTful";else if(f)x=f,v="KVP";else{const I=g("ServiceMetadataURL",r);x=I&&I.getAttribute("xlink:href")}const M=x.indexOf("1.0.0/");-1===M&&"RESTful"===v?x+="/":M>-1&&(x=x.substring(0,M)),"KVP"===v&&(x+=M>-1?"":"?"),y&&(x=x.replace(/^http:/i,"https:"));const H=h("ServiceIdentification>ServiceTypeVersion",r),W=h("ServiceIdentification>AccessConstraints",r),C=/^none$/i.test(W)?null:W,b=R("Layer",a),F=R("TileMatrixSet",a),se=b.map(I=>{const T=h("Identifier",I);return i.set(T,I),function Ae(e,t,r,i,s){const a=h("Abstract",t),l=V("Format",t);return{id:e,fullExtent:Ne(t),fullExtents:We(t),description:a,formats:l,styles:Ze(t,i),title:h("Title",t),tileMatrixSets:De(s,t,r)}}(T,I,F,y,H)});return{copyright:C,dimensionMap:s,layerMap:i,layers:se,serviceMode:v,tileUrl:x}}(r.data,{serviceMode:t.serviceMode,url:t.url}),r.data&&t.read(r.data,{origin:"service"})})()}_getCapabilities(e,t){var r=this;return(0,O.Z)(function*(){const i=r._getCapabilitiesUrl(e);return yield(0,j.default)(i,{...t,responseType:"text"})})()}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find(t=>t.id===e)}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...(0,Z.d9)(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=(0,z.mN)(e),i={...r.query,...t},s=(0,z.B7)(i);return""===s?r.path:`${r.path}?${s}`}_getCapabilitiesUrl(e){return this.url=this.url.split("?")[0],this._appendCustomParameters("KVP"===e?`${this.url}?request=GetCapabilities&service=WMTS&version=${this.version}`:`${this.url}/${this.version}/WMTSCapabilities.xml`)}_getLowerCasedUrlParams(e){if(!e)return null;const t=(0,z.mN)(e).query;if(!t)return null;const r={};return Object.keys(t).forEach(i=>{r[i.toLowerCase()]=t[i]}),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const i=Object.keys(r);i.length&&(e=e?(0,Z.d9)(e):{},i.forEach(s=>{e.hasOwnProperty(s)||Ge.has(s)||(e[s]=r[s])}))}return e}};(0,o._)([(0,n.Cb)()],m.prototype,"dimensionMap",void 0),(0,o._)([(0,n.Cb)()],m.prototype,"layerMap",void 0),(0,o._)([(0,n.Cb)({type:D,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],m.prototype,"activeLayer",null),(0,o._)([(0,A.r)("service","activeLayer",["layers"])],m.prototype,"readActiveLayerFromService",null),(0,o._)([(0,A.r)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],m.prototype,"readActiveLayerFromItemOrWebDoc",null),(0,o._)([(0,fe.c)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:Q.Z},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],m.prototype,"writeActiveLayer",null),(0,o._)([(0,n.Cb)({type:String,value:"",json:{write:!0}})],m.prototype,"copyright",void 0),(0,o._)([(0,n.Cb)({type:["show","hide"]})],m.prototype,"listMode",void 0),(0,o._)([(0,n.Cb)({json:{read:!0,write:!0}})],m.prototype,"blendMode",void 0),(0,o._)([(0,n.Cb)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],m.prototype,"customParameters",void 0),(0,o._)([(0,A.r)(["portal-item","web-document"],"customParameters")],m.prototype,"readCustomParameters",null),(0,o._)([(0,n.Cb)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],m.prototype,"customLayerParameters",void 0),(0,o._)([(0,n.Cb)({type:U.Z,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],m.prototype,"fullExtent",void 0),(0,o._)([(0,n.Cb)({readOnly:!0})],m.prototype,"fullExtents",null),(0,o._)([(0,n.Cb)({type:["WebTiledLayer"]})],m.prototype,"operationalLayerType",void 0),(0,o._)([(0,n.Cb)()],m.prototype,"resourceInfo",void 0),(0,o._)([(0,n.Cb)()],m.prototype,"serviceMode",void 0),(0,o._)([(0,A.r)(["portal-item","web-document"],"serviceMode",["templateUrl"])],m.prototype,"readServiceMode",null),(0,o._)([(0,n.Cb)({type:E.Z.ofType(D)})],m.prototype,"sublayers",void 0),(0,o._)([(0,A.r)("service","sublayers",["layers"])],m.prototype,"readSublayersFromService",null),(0,o._)([(0,n.Cb)({readOnly:!0})],m.prototype,"supportedSpatialReferences",null),(0,o._)([(0,n.Cb)({readOnly:!0})],m.prototype,"tilemapCache",null),(0,o._)([(0,n.Cb)({json:{read:{source:"title"}}})],m.prototype,"title",null),(0,o._)([(0,n.Cb)({json:{read:!1},readOnly:!0,value:"wmts"})],m.prototype,"type",void 0),(0,o._)([(0,n.Cb)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],m.prototype,"url",null),(0,o._)([(0,n.Cb)()],m.prototype,"version",void 0),m=(0,o._)([(0,Y.j)("esri.layers.WMTSLayer")],m);const ze=m},7255:(me,$,u)=>{function O(j,E){for(const w of j.children)if(w.localName in E){const L=E[w.localName];if("function"==typeof L){const Z=L(w);Z&&O(w,Z)}else O(w,L)}}function*o(j,E){for(const w of j.children)if(w.localName in E){const L=E[w.localName];"function"==typeof L?yield L(w):yield*o(w,L)}}u.d($,{H:()=>o,h:()=>O})}}]);