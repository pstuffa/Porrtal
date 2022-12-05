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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[6189],{6189:(Te,U,s)=>{s.r(U),s.d(U,{default:()=>we});var m=s(15861),t=s(17626),S=s(46160),ee=s(46882),G=s(26584),u=s(58817),te=s(47877),W=s(63290),X=s(62208),re=s(99959),ie=s(10699),se=s(21726),i=s(77712),H=(s(90912),s(68653)),a=s(76898),oe=s(65234),le=s(44917),z=s(49410),c=s(20925),ne=s(50085),ae=s(65088),de=s(49286),ue=s(6647),ye=s(99555),O=s(10157),y=s(86810),pe=s(35948);s(85931),s(8314);let B=class extends y.wq{constructor(){super(...arguments),this.type=null}};(0,t._)([(0,i.Cb)({type:String,readOnly:!0,json:{write:!0}})],B.prototype,"type",void 0),B=(0,t._)([(0,a.j)("esri.layers.support.BuildingFilterAuthoringInfo")],B);const D=B;var w;let h=w=class extends y.wq{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new w({filterType:this.filterType,filterValues:(0,u.d9)(this.filterValues)})}};var T;(0,t._)([(0,i.Cb)({type:String,json:{write:!0}})],h.prototype,"filterType",void 0),(0,t._)([(0,i.Cb)({type:[String],json:{write:!0}})],h.prototype,"filterValues",void 0),h=w=(0,t._)([(0,a.j)("esri.layers.support.BuildingFilterAuthoringInfoType")],h);const ve=S.Z.ofType(h);let C=T=class extends y.wq{clone(){return new T({filterTypes:(0,u.d9)(this.filterTypes)})}};var A;(0,t._)([(0,i.Cb)({type:ve,json:{write:!0}})],C.prototype,"filterTypes",void 0),C=T=(0,t._)([(0,a.j)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],C);const ge=S.Z.ofType(C);let g=A=class extends D{constructor(){super(...arguments),this.type="checkbox"}clone(){return new A({filterBlocks:(0,u.d9)(this.filterBlocks)})}};(0,t._)([(0,i.Cb)({type:["checkbox"]})],g.prototype,"type",void 0),(0,t._)([(0,i.Cb)({type:ge,json:{write:!0}})],g.prototype,"filterBlocks",void 0),g=A=(0,t._)([(0,a.j)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],g);const Y=g;let F=class extends y.wq{};(0,t._)([(0,i.Cb)({readOnly:!0,json:{read:!1}})],F.prototype,"type",void 0),F=(0,t._)([(0,a.j)("esri.layers.support.BuildingFilterMode")],F);const j=F;var M;let x=M=class extends j{constructor(){super(...arguments),this.type="solid"}clone(){return new M}};(0,t._)([(0,i.Cb)({type:["solid"],readOnly:!0,json:{write:!0}})],x.prototype,"type",void 0),x=M=(0,t._)([(0,a.j)("esri.layers.support.BuildingFilterModeSolid")],x);const Z=x;var L,fe=s(55342),be=s(61261);let f=L=class extends j{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new L({edges:(0,u.d9)(this.edges)})}};(0,t._)([(0,fe.J)({wireFrame:"wire-frame"})],f.prototype,"type",void 0),(0,t._)([(0,i.Cb)(be.Z)],f.prototype,"edges",void 0),f=L=(0,t._)([(0,a.j)("esri.layers.support.BuildingFilterModeWireFrame")],f);const Q=f;var R;let I=R=class extends j{constructor(){super(...arguments),this.type="x-ray"}clone(){return new R}};(0,t._)([(0,i.Cb)({type:["x-ray"],readOnly:!0,json:{write:!0}})],I.prototype,"type",void 0),I=R=(0,t._)([(0,a.j)("esri.layers.support.BuildingFilterModeXRay")],I);const $=I;var E;const me={nonNullable:!0,types:{key:"type",base:j,typeMap:{solid:Z,"wire-frame":Q,"x-ray":$}},json:{read:e=>{switch(e&&e.type){case"solid":return Z.fromJSON(e);case"wireFrame":return Q.fromJSON(e);case"x-ray":return $.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let v=E=class extends y.wq{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Z,this.title=""}clone(){return new E({filterExpression:this.filterExpression,filterMode:(0,u.d9)(this.filterMode),title:this.title})}};var N;(0,t._)([(0,i.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"filterExpression",void 0),(0,t._)([(0,i.Cb)(me)],v.prototype,"filterMode",void 0),(0,t._)([(0,i.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"title",void 0),v=E=(0,t._)([(0,a.j)("esri.layers.support.BuildingFilterBlock")],v);const Be=S.Z.ofType(v);let p=N=class extends y.wq{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,pe.D)(),this.name=null}clone(){return new N({description:this.description,filterBlocks:(0,u.d9)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,u.d9)(this.filterAuthoringInfo)})}};(0,t._)([(0,i.Cb)({type:String,json:{write:!0}})],p.prototype,"description",void 0),(0,t._)([(0,i.Cb)({type:Be,json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"filterBlocks",void 0),(0,t._)([(0,i.Cb)({types:{key:"type",base:D,typeMap:{checkbox:Y}},json:{read:e=>"checkbox"===(e&&e.type)?Y.fromJSON(e):null,write:!0}})],p.prototype,"filterAuthoringInfo",void 0),(0,t._)([(0,i.Cb)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"id",void 0),(0,t._)([(0,i.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"name",void 0),p=N=(0,t._)([(0,a.j)("esri.layers.support.BuildingFilter")],p);const Ce=p;var Fe=s(84792),je=s(47996),xe=s(60330);const Ie=W.Z.getLogger("esri.layers.support.BuildingSummaryStatistics");let d=class extends y.wq{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,t._)([(0,i.Cb)({type:String})],d.prototype,"fieldName",void 0),(0,t._)([(0,i.Cb)({type:String})],d.prototype,"modelName",void 0),(0,t._)([(0,i.Cb)({type:String})],d.prototype,"label",void 0),(0,t._)([(0,i.Cb)({type:Number})],d.prototype,"min",void 0),(0,t._)([(0,i.Cb)({type:Number})],d.prototype,"max",void 0),(0,t._)([(0,i.Cb)({json:{read:e=>Array.isArray(e)&&(e.every(r=>"string"==typeof r)||e.every(r=>"number"==typeof r))?e.slice():null}})],d.prototype,"mostFrequentValues",void 0),(0,t._)([(0,i.Cb)({type:[Number]})],d.prototype,"subLayerIds",void 0),d=(0,t._)([(0,a.j)("esri.layers.support.BuildingFieldStatistics")],d);let b=class extends(je.Z.LoadableMixin((0,xe.v)(y.wq))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(Ie.error("building summary statistics are not loaded"),null)}load(e){const r=(0,X.pC)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}_fetchService(e){var r=this;return(0,m.Z)(function*(){const o=(yield(0,Fe.default)(r.url,{query:{f:"json"},responseType:"json",signal:e})).data;r.read(o,{origin:"service"})})()}};(0,t._)([(0,i.Cb)({constructOnly:!0,type:String})],b.prototype,"url",void 0),(0,t._)([(0,i.Cb)({readOnly:!0,type:[d],json:{read:{source:"summary"}}})],b.prototype,"fields",null),b=(0,t._)([(0,a.j)("esri.layers.support.BuildingSummaryStatistics")],b);const k=b;var P=s(13812),Oe=s(74711);const V=W.Z.getLogger("esri.layers.BuildingSceneLayer"),q=S.Z.ofType(Ce),K=(0,u.d9)(c.Z.sublayersProperty);K.json.origins["web-scene"]={type:[z.Z],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},K.json.origins["portal-item"]={type:[z.Z],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let n=class extends((0,O.Vt)((0,ae.Y)((0,de.q)((0,ue.I)((0,ye.M)((0,re.R)((0,ne.V)(le.Z)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new ee.Z({getCollections:()=>[this.sublayers],getChildrenFunction:r=>"building-group"===r.type?r.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new q,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,r,o){const l=c.Z.readSublayers(e,r,o);return c.Z.forEachSublayer(l,J=>J.layer=this),this.sublayerOverrides&&(this.applySublayerOverrides(l,this.sublayerOverrides),this.sublayerOverrides=null),l}applySublayerOverrides(e,{overrides:r,context:o}){c.Z.forEachSublayer(e,l=>l.read(r.get(l.id),o))}readSublayerOverrides(e,r){const o=new Map;for(const l of e)null!=l&&"object"==typeof l&&"number"==typeof l.id?o.set(l.id,l):r.messages.push(new G.Z("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:l}));return{overrides:o,context:r}}writeSublayerOverrides(e,r,o){const l=[];c.Z.forEachSublayer(this.sublayers,J=>{const _=J.write({},o);Object.keys(_).length>1&&l.push(_)}),l.length>0&&(r.sublayers=l)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(o=>{r.sublayers.push((0,u.d9)(o))})}write(e,r){return e=super.write(e,r),!r||"web-scene"!==r.origin&&"portal-item"!==r.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&("web-scene"===r.origin||"portal-item"===r.origin)&&null!=e&&Array.isArray(e.sublayers)){const o=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,o):this.sublayerOverrides=o}}readSummaryStatistics(e,r){if("string"==typeof r.statisticsHRef){const o=(0,se.v_)(this.parsedUrl.path,r.statisticsHRef);return new k({url:o})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=(0,X.pC)(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(ie.r9).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(o),Promise.resolve(this)}loadAll(){return(0,te.G)(this,e=>{c.Z.forEachSublayer(this.sublayers,r=>{"building-group"!==r.type&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}saveAs(e,r){var o=this;return(0,m.Z)(function*(){return o._debouncedSaveOperations(O.xp.SAVE_AS,{...r,getTypeKeywords:()=>o._getTypeKeywords(),portalItemLayerType:"building-scene"},e)})()}save(){var e=this;return(0,m.Z)(function*(){const r={getTypeKeywords:()=>e._getTypeKeywords(),portalItemLayerType:"building-scene"};return e._debouncedSaveOperations(O.xp.SAVE,r)})()}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new G.Z("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&V.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&V.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}_fetchAssociatedFeatureService(e){var r=this;return(0,m.Z)(function*(){const o=new Oe.W(r.parsedUrl,r.portalItem,r.apiKey,e);try{r.associatedFeatureServiceItem=yield o.fetchPortalItem()}catch(l){V.warn("Associated feature service item could not be loaded",l)}})()}};(0,t._)([(0,i.Cb)({type:["BuildingSceneLayer"]})],n.prototype,"operationalLayerType",void 0),(0,t._)([(0,i.Cb)({readOnly:!0})],n.prototype,"allSublayers",void 0),(0,t._)([(0,i.Cb)(K)],n.prototype,"sublayers",void 0),(0,t._)([(0,H.r)("service","sublayers")],n.prototype,"readSublayers",null),(0,t._)([(0,i.Cb)({type:q,nonNullable:!0,json:{write:!0}})],n.prototype,"filters",void 0),(0,t._)([(0,i.Cb)({type:String,json:{write:!0}})],n.prototype,"activeFilterId",void 0),(0,t._)([(0,i.Cb)({readOnly:!0,type:k})],n.prototype,"summaryStatistics",void 0),(0,t._)([(0,H.r)("summaryStatistics",["statisticsHRef"])],n.prototype,"readSummaryStatistics",null),(0,t._)([(0,i.Cb)({type:[String],json:{read:!1}})],n.prototype,"outFields",void 0),(0,t._)([(0,i.Cb)(P.vg)],n.prototype,"fullExtent",void 0),(0,t._)([(0,i.Cb)({type:["show","hide","hide-children"]})],n.prototype,"listMode",void 0),(0,t._)([(0,i.Cb)((0,P.Lx)(oe.Z))],n.prototype,"spatialReference",void 0),(0,t._)([(0,i.Cb)(P.PV)],n.prototype,"elevationInfo",null),(0,t._)([(0,i.Cb)({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),(0,t._)([(0,i.Cb)()],n.prototype,"associatedFeatureServiceItem",void 0),n=(0,t._)([(0,a.j)("esri.layers.BuildingSceneLayer")],n);const we=n}}]);