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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[9114],{49114:(le,x,r)=>{r.r(x),r.d(x,{default:()=>re});var P=r(15861),o=r(17626),F=(r(29132),r(88879)),O=(r(20383),r(46160)),W=r(26584),N=r(58817),m=r(62208),z=r(99959),B=r(94113),I=r(14889),n=r(77712),h=(r(90912),r(68653)),L=r(76898),A=r(99433),v=r(55915),U=r(13924),$=r(37053),V=r(32258),X=(r(85931),r(8314),r(28705)),Z=r(44917),R=r(552),j=r(99555),E=r(51815),H=r(82706);let u=class extends((0,R.h)((0,j.M)(Z.Z))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new E.J,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};(0,o._)([(0,n.Cb)({type:H.ZP})],u.prototype,"elevationInfo",void 0),(0,o._)([(0,n.Cb)((0,X.z)(E.J,"graphics"))],u.prototype,"graphics",void 0),(0,o._)([(0,n.Cb)({type:["show","hide"]})],u.prototype,"listMode",void 0),(0,o._)([(0,n.Cb)()],u.prototype,"screenSizePerspectiveEnabled",void 0),(0,o._)([(0,n.Cb)({readOnly:!0})],u.prototype,"type",void 0),(0,o._)([(0,n.Cb)({constructOnly:!0})],u.prototype,"internal",void 0),u=(0,o._)([(0,L.j)("esri.layers.GraphicsLayer")],u);const K=u;var Q=r(1476),Y=r(49286),k=r(6647),w=r(36255),q=r(88493),_=r(52068),D=r(57213),ee=r(35540),S=r(65234),J=r(2004);function C(e){return e.layers.some(t=>null!=t.layerDefinition.visibilityField)}const G=new w.Z({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),te=new w.Z({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let g=class extends K{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",e=>{e.item.sourceLayer=this.layer}),this.graphics.on("after-remove",e=>{e.item.sourceLayer=null})}get sublayers(){return this.graphics}};(0,o._)([(0,n.Cb)({readOnly:!0})],g.prototype,"sublayers",null),(0,o._)([(0,n.Cb)()],g.prototype,"layer",void 0),(0,o._)([(0,n.Cb)()],g.prototype,"layerId",void 0),(0,o._)([(0,n.Cb)({readOnly:!0})],g.prototype,"visibilityMode",void 0),g=(0,o._)([(0,L.j)("esri.layers.MapNotesLayer.MapNotesSublayer")],g);const T=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new q.Z).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new _.Z).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new D.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new D.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new ee.Z).toJSON()}];let i=class extends((0,R.h)((0,j.M)((0,Y.q)((0,k.I)((0,z.R)(Z.Z)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=S.Z.WGS84,this.sublayers=new O.Z(T.map(t=>new g({id:t.id,layerId:t.layerId,title:t.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,a){return{operations:{supportsMapNotesEditing:!C(t)&&"portal-item"!==a?.origin}}}readFeatureCollections(e,t,a){if(!C(t))return null;const y=t.layers.map(s=>{const l=new V.default;return l.read(s,a),l});return new O.Z({items:y})}readLegacyfeatureCollectionJSON(e,t){return C(t)?(0,N.d9)(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length||t.layers.every(y=>!y.layerDefinition.extent))return new J.Z({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:S.Z.WGS84});const a=S.Z.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce((y,s)=>{const l=s.layerDefinition.extent;return l?J.Z.fromJSON(l).union(y):y},new J.Z({spatialReference:a}))}readMinScale(e,t){for(const a of t.layers)if(null!=a.layerDefinition.minScale)return a.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const a of t.layers)if(null!=a.layerDefinition.maxScale)return a.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?S.Z.fromJSON(t.layers[0].layerDefinition.spatialReference):S.Z.WGS84}readSublayers(e,t,a){if(C(t))return null;const y=[];let s=t.layers.reduce((l,p)=>Math.max(l,p.layerDefinition.id??-1),-1)+1;for(const{layerDefinition:l,featureSet:p}of t.layers){const d=l.geometryType??p.geometryType,b=l.id??s++,f=T.find(c=>d===c.geometryTypeJSON&&l.drawingInfo?.renderer?.symbol?.type===c.identifyingSymbol.type);if(f){const c=new g({id:f.id,title:l.name,layerId:b,layer:this,graphics:p.features.map(({geometry:M,symbol:oe,attributes:ie,popupInfo:ae})=>F.Z.fromJSON({attributes:ie,geometry:M,symbol:oe,popupTemplate:ae}))});y.push(c)}}return new O.Z(y)}writeSublayers(e,t,a,y){const{minScale:s,maxScale:l}=this;if((0,m.Wi)(e))return;const p=e.some(f=>f.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(p&&y?.messages?.push(new W.Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));const d=[];let b=this.spatialReference.toJSON();e:for(const f of e)for(const c of f.graphics)if((0,m.pC)(c.geometry)){b=c.geometry.spatialReference.toJSON();break e}for(const f of T){const c=e.find(M=>f.id===M.id);this._writeMapNoteSublayer(d,c,f,s,l,b,y)}(0,B.RB)("featureCollection.layers",d,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=(0,N.d9)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}beforeSave(){var e=this;return(0,P.Z)(function*(){if((0,m.Wi)(e.sublayers))return;let t=null;const a=[];for(const s of e.sublayers)for(const l of s.graphics)if((0,m.pC)(l.geometry)){const p=l.geometry;t?(0,$.fS)(p.spatialReference,t)||((0,v.Up)(p.spatialReference,t)||(0,v.kR)()||(yield(0,v.zD)()),l.geometry=(0,v.iV)(p,t)):t=p.spatialReference,a.push(l)}const y=yield(0,U.aX)(a.map(s=>s.geometry));a.forEach((s,l)=>s.geometry=y[l])})()}_findSublayer(e){return(0,m.Wi)(this.sublayers)?null:this.sublayers?.find(t=>t.id===e)??null}_writeMapNoteSublayer(e,t,a,y,s,l,p){const d=[];if(!(0,m.Wi)(t)){for(const b of t.graphics)this._writeMapNote(d,b,a.geometryType,p);this._normalizeObjectIds(d,G),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,N.d9)(a.identifyingSymbol)}},id:t.layerId,geometryType:a.geometryTypeJSON,minScale:y,maxScale:s,objectIdField:"OBJECTID",fields:[G.toJSON(),te.toJSON()],spatialReference:l},featureSet:{features:d,geometryType:a.geometryTypeJSON}})}}_writeMapNote(e,t,a,y){if((0,m.Wi)(t))return;const{geometry:s,symbol:l,popupTemplate:p}=t;if((0,m.Wi)(s))return;if(s.type!==a)return void y?.messages?.push(new I.Z("map-notes-layer:invalid-geometry-type",`Geometry "${s.type}" cannot be saved in "${a}" layer`,{graphic:t}));if((0,m.Wi)(l))return void y?.messages?.push(new I.Z("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t}));const d={attributes:{...t.attributes},geometry:s.toJSON(),symbol:l.toJSON()};(0,m.pC)(p)&&(d.popupInfo=p.toJSON()),e.push(d)}_normalizeObjectIds(e,t){const a=t.name;let y=(0,Q.S)(a,e)+1;const s=new Set;for(const l of e){l.attributes||(l.attributes={});const{attributes:p}=l;(null==p[a]||s.has(p[a]))&&(p[a]=y++),s.add(p[a])}}};(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"capabilities",void 0),(0,o._)([(0,h.r)(["portal-item","web-map"],"capabilities",["layers"])],i.prototype,"readCapabilities",null),(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"featureCollections",void 0),(0,o._)([(0,h.r)(["web-map","portal-item"],"featureCollections",["layers"])],i.prototype,"readFeatureCollections",null),(0,o._)([(0,n.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],i.prototype,"featureCollectionJSON",void 0),(0,o._)([(0,h.r)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],i.prototype,"readLegacyfeatureCollectionJSON",null),(0,o._)([(0,n.Cb)({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],i.prototype,"featureCollectionType",void 0),(0,o._)([(0,n.Cb)({json:{write:!1}})],i.prototype,"fullExtent",void 0),(0,o._)([(0,h.r)(["web-map","portal-item"],"fullExtent",["layers"])],i.prototype,"readFullExtent",null),(0,o._)([(0,n.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],i.prototype,"legendEnabled",void 0),(0,o._)([(0,n.Cb)({type:["show","hide"]})],i.prototype,"listMode",void 0),(0,o._)([(0,n.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],i.prototype,"minScale",void 0),(0,o._)([(0,h.r)(["web-map","portal-item"],"minScale",["layers"])],i.prototype,"readMinScale",null),(0,o._)([(0,n.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],i.prototype,"maxScale",void 0),(0,o._)([(0,h.r)(["web-map","portal-item"],"maxScale",["layers"])],i.prototype,"readMaxScale",null),(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"multipointLayer",null),(0,o._)([(0,n.Cb)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],i.prototype,"operationalLayerType",void 0),(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"pointLayer",null),(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"polygonLayer",null),(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"polylineLayer",null),(0,o._)([(0,n.Cb)({type:S.Z})],i.prototype,"spatialReference",void 0),(0,o._)([(0,h.r)(["web-map","portal-item"],"spatialReference",["layers"])],i.prototype,"readSpatialReference",null),(0,o._)([(0,n.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],i.prototype,"sublayers",void 0),(0,o._)([(0,h.r)("web-map","sublayers",["layers"])],i.prototype,"readSublayers",null),(0,o._)([(0,A.c)("web-map","sublayers")],i.prototype,"writeSublayers",null),(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"textLayer",null),(0,o._)([(0,n.Cb)()],i.prototype,"title",void 0),(0,o._)([(0,n.Cb)({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),i=(0,o._)([(0,L.j)("esri.layers.MapNotesLayer")],i);const re=i}}]);