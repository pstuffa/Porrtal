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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[342],{10342:(S,P,e)=>{e.r(P),e.d(P,{default:()=>H});var l=e(15861),a=e(17626),v=e(26584),c=e(62208),E=e(32917),h=e(77712),u=(e(85931),e(90912),e(76898)),T=e(19702),m=e(50916),I=e(80382),t=e(88879),n=e(13812),r=e(28594),o=e(10023);const D=i=>{let s=class extends i{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.tileInfo=null}get fullExtent(){return this._getfullExtent()}_getfullExtent(){return this.projectFullExtent(this.view.spatialReference)}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}get datumTransformation(){return(0,r._D)((0,c.Wg)(this.layer.fullExtent),this.view.spatialReference,!0)}supportsSpatialReference(_){return!!this.projectFullExtent(_)}projectFullExtent(_){const y=(0,c.Wg)(this.layer.fullExtent),d=(0,r._D)(y,_,!1);return(0,r.tB)(y,_,d)}fetchPopupFeatures(_,y){var d=this;return(0,l.Z)(function*(){const{layer:g}=d;if(!_)throw new v.Z("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:g});const{popupEnabled:U}=g,W=(0,o.V)(g,y);if(!U||(0,c.Wi)(W))throw new v.Z("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:U,popupTemplate:W});const M=[],{value:O,magdirValue:R}=yield g.identify(_,{timeExtent:d.timeExtent});let B="";if(O&&O.length){B="imagery-tile"===g.type&&g.hasStandardTime()&&null!=O[0]?O.map(K=>g.getStandardTimeValue(K)).join(", "):O.join(", ");const j={ObjectId:0};j["Raster.ServicePixelValue"]=B;const F=g.rasterInfo.attributeTable;if((0,c.pC)(F)){const{fields:K,features:N}=F,G=K.find(({name:C})=>"value"===C.toLowerCase()),A=G?N.find(C=>String(C.attributes[G.name])===B):null;if(A)for(const C in A.attributes)A.attributes.hasOwnProperty(C)&&(j[d._rasterFieldPrefix+C]=A.attributes[C])}const z=g.rasterInfo.dataType;"vector-magdir"!==z&&"vector-uv"!==z||(j["Raster.Magnitude"]=R?.[0],j["Raster.Direction"]=R?.[1]);const x=new t.Z(d.fullExtent.clone(),null,j);x.layer=g,x.sourceLayer=x.layer,M.push(x)}return M})()}};return(0,a._)([(0,h.Cb)()],s.prototype,"layer",void 0),(0,a._)([(0,h.Cb)(n.qG)],s.prototype,"timeExtent",void 0),(0,a._)([(0,h.Cb)()],s.prototype,"view",void 0),(0,a._)([(0,h.Cb)()],s.prototype,"fullExtent",null),(0,a._)([(0,h.Cb)()],s.prototype,"tileInfo",void 0),(0,a._)([(0,h.Cb)({readOnly:!0})],s.prototype,"hasTilingEffects",null),s=(0,a._)([(0,u.j)("esri.views.layers.ImageryTileLayerView")],s),s};var L=e(45611),w=e(94421),V=e(94672),Z=e(31637);let b=class extends(D((0,w.Z)((0,m.r)((0,T.A)(L.Z))))){constructor(){super(...arguments),this.type="imagery-tile-3d",this.isAlignedMapTile=!0}initialize(){this.layer.increaseRasterJobHandlerUsage(),null==this.fullExtent&&this.addResolvingPromise(Promise.reject(new v.Z("layerview:spatial-reference-incompatible","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})));const i=(0,E.N1)(()=>this.view?.basemapTerrain?.tilingSchemeLocked).then(()=>{const s=this.view.basemapTerrain.tilingScheme,{tileInfo:_}=this.layer,y=["png","png24","png32","jpg","mixed"].includes(_.format)&&s.compatibleWith(_);this.isAlignedMapTile=y;const d=y?_:s.toTileInfo();this.tileInfo=d,this.updatingHandles.add(()=>[this.layer.renderer,this.layer.interpolation,this.layer.bandIds,this.layer.multidimensionalDefinition,this.layer.multidimensionalSubset,this.layer.rasterFunction],()=>this.refresh())});this.addResolvingPromise(i)}destroy(){this.layer.decreaseRasterJobHandlerUsage(),this.view=null}get _blankTile(){const i=document.createElement("canvas"),s=i.getContext("2d"),[_,y]=this.tileInfo.size;return i.width=_,i.height=y,s.clearRect(0,0,_,y),s.getImageData(0,0,_,y)}get imageFormatIsOpaque(){return"jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return"mixed"===this.layer.tileInfo.format}get dataLevelRange(){const s=this.layer.tileInfo.lods;return this.levelRangeFromScaleRange(this.tileInfo.lods[0].scale,s[s.length-1].scale)}_getfullExtent(){return this.projectFullExtent(this.view.basemapTerrain&&(0,c.pC)(this.view.basemapTerrain.spatialReference)?this.view.basemapTerrain.spatialReference:this.view.spatialReference)}fetchTile(i,s,_,y){var d=this;return(0,l.Z)(function*(){const g=d.tileInfo,U=d._canSymbolizeInWebGL(),W={tileInfo:g,requestRawData:U,signal:(0,c.Wg)(y.signal),requestAsImageElement:d.isAlignedMapTile},M=yield d.layer.fetchTile(i,s,_,W);if(M instanceof HTMLImageElement)return M;let O=M&&M.pixelBlock;if((0,c.Wi)(O)||!U&&(O=yield d.layer.applyRenderer(M),(0,c.Wi)(O)))return d._blankTile;const R=new I.H([i,s,_],O,g.size[0],g.size[1]);return U?(R.symbolizerRenderer=d.layer.symbolizer.rendererJSON,R.symbolizerParameters=d.layer.symbolizer.generateWebGLParameters(d._getSymbolizerOptions(i)),R.transformGrid=M.transformGrid):R.isRendereredSource=!0,R.interpolation=d.layer.interpolation,R.bandIds=d.layer.bandIds,R})()}_getSymbolizerOptions(i){const s=this.tileInfo.lodAt(i).resolution;return{pixelBlock:null,isGCS:this.view.basemapTerrain&&(0,c.pC)(this.view.basemapTerrain.spatialReference)?this.view.basemapTerrain.spatialReference.isGeographic:this.view.spatialReference.isGeographic,resolution:{x:s,y:s},bandIds:this.layer.bandIds}}ensureSymbolizerParameters(i){this._canSymbolizeInWebGL()&&JSON.stringify(i.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(i.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(i.lij[0])))}createFetchPopupFeaturesQueryGeometry(i,s){return(0,V.K)(i,s,this.view)}refresh(){this.emit("data-changed")}doRefresh(){var i=this;return(0,l.Z)(function*(){i.suspended||i.emit("data-changed")})()}_canSymbolizeInWebGL(){return(0,Z.hc)("3d").supportsTextureFloat&&this.layer.symbolizer.canRenderInWebGL}};(0,a._)([(0,h.Cb)({readOnly:!0})],b.prototype,"_blankTile",null),(0,a._)([(0,h.Cb)({readOnly:!0})],b.prototype,"imageFormatIsOpaque",null),(0,a._)([(0,h.Cb)({readOnly:!0})],b.prototype,"hasMixedImageFormats",null),(0,a._)([(0,h.Cb)({readOnly:!0})],b.prototype,"dataLevelRange",null),b=(0,a._)([(0,u.j)("esri.views.3d.layers.ImageryTileLayerView3D")],b);const H=b},19702:(S,P,e)=>{e.d(P,{A:()=>m});var l=e(15861),a=e(17626),v=e(54024),c=e(10699),E=e(32917),h=e(77712),u=(e(85931),e(90912),e(76898)),T=e(36947);const m=I=>{let t=class extends I{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(n){super.postscript(n),(0,T.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}_validateHeightModelInfo(){var n=this;return(0,l.Z)(function*(){const r=new AbortController,o=r.signal;n.handles.add((0,v.kB)(()=>r.abort())),yield(0,E.N1)(()=>n.view.defaultsFromMap?.heightModelInfoReady,o),(0,c.k_)(o);const D=(0,T.Wt)(n.layer,n.view.heightModelInfo,n.supportsHeightUnitConversion);if(D)throw D})()}canResume(){const n=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!n||!n.minScale||!n.maxScale||n.minScale>=n.maxScale)}getSuspendInfo(){const n=super.getSuspendInfo(),r=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return r&&r.minScale&&r.maxScale&&r.minScale<r.maxScale&&(n.outsideScaleRange=!0),n}};return(0,a._)([(0,h.Cb)()],t.prototype,"view",void 0),(0,a._)([(0,h.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,a._)([(0,u.j)("esri.views.3d.layers.LayerView3D")],t),t}},45611:(S,P,e)=>{e.d(P,{Z:()=>n});var l=e(17626),a=e(14517),v=e(61885),c=e(80542),E=e(61996),h=e(63290),p=e(62208),f=e(60330),u=e(77712),I=(e(85931),e(90912),e(76898));let t=class extends((0,c.p)((0,E.IG)((0,f.v)(v.Z.EventedMixin(a.Z))))){constructor(r){super(r),this.layer=null,this.parent=null}initialize(){this.when().catch(r=>{if("layerview:create-error"!==r.name){const o=this.layer&&this.layer.id||"no id",D=this.layer&&this.layer.title||"no title";h.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${D}', id: '${o}')`,r)}})}get fullOpacity(){return(0,p.Pt)(this.get("layer.opacity"),1)*(0,p.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(r){this._overrideIfSome("visible",r)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const r=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(r.viewNotReady=!0),this.layer&&this.layer.loaded||(r.layerNotLoaded=!0),this.visible||(r.layerInvisible=!0),r}isUpdating(){return!1}};(0,l._)([(0,u.Cb)()],t.prototype,"fullOpacity",null),(0,l._)([(0,u.Cb)()],t.prototype,"layer",void 0),(0,l._)([(0,u.Cb)()],t.prototype,"parent",void 0),(0,l._)([(0,u.Cb)({readOnly:!0})],t.prototype,"suspended",null),(0,l._)([(0,u.Cb)({readOnly:!0})],t.prototype,"suspendInfo",null),(0,l._)([(0,u.Cb)({readOnly:!0})],t.prototype,"legendEnabled",null),(0,l._)([(0,u.Cb)({type:Boolean,readOnly:!0})],t.prototype,"updating",null),(0,l._)([(0,u.Cb)({readOnly:!0})],t.prototype,"updatingProgress",null),(0,l._)([(0,u.Cb)()],t.prototype,"visible",null),(0,l._)([(0,u.Cb)()],t.prototype,"view",void 0),t=(0,l._)([(0,I.j)("esri.views.layers.LayerView")],t);const n=t},94421:(S,P,e)=>{e.d(P,{Z:()=>u});var l=e(17626),a=e(63290),v=e(10699),c=e(32917),E=e(77712),f=(e(85931),e(90912),e(76898));const u=T=>{let m=class extends T{initialize(){this.handles.add((0,c.on)(()=>this.layer,"refresh",I=>{this.doRefresh(I.dataChanged).catch(t=>{(0,v.D_)(t)||a.Z.getLogger(this.declaredClass).error(t)})}),"RefreshableLayerView")}};return(0,l._)([(0,E.Cb)()],m.prototype,"layer",void 0),m=(0,l._)([(0,f.j)("esri.layers.mixins.RefreshableLayerView")],m),m}},10023:(S,P,e)=>{e.d(P,{V:()=>h,e:()=>c});var l=e(15861),a=e(62208),v=e(36630);function c(p){return E.apply(this,arguments)}function E(){return(E=(0,l.Z)(function*(p,f=p.popupTemplate){if((0,a.Wi)(f))return[];const u=yield f.getRequiredFields(p.fieldsIndex),{lastEditInfoEnabled:T}=f,{objectIdField:m,typeIdField:I,globalIdField:t,relationships:n}=p;if(u.includes("*"))return["*"];const r=T?yield(0,v.CH)(p):[],o=(0,v.Q0)(p.fieldsIndex,[...u,...r]);return I&&o.push(I),o&&m&&p.fieldsIndex.has(m)&&!o.includes(m)&&o.push(m),o&&t&&p.fieldsIndex.has(t)&&!o.includes(t)&&o.push(t),n&&n.forEach(D=>{const{keyField:L}=D;o&&L&&p.fieldsIndex.has(L)&&!o.includes(L)&&o.push(L)}),o})).apply(this,arguments)}function h(p,f){return p.popupTemplate?p.popupTemplate:(0,a.pC)(f)&&f.defaultPopupTemplateEnabled&&(0,a.pC)(p.defaultPopupTemplate)?p.defaultPopupTemplate:null}}}]);