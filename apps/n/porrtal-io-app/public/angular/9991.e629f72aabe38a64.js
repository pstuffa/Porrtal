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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[9991],{19702:(I,y,e)=>{e.d(y,{A:()=>O});var l=e(15861),h=e(17626),g=e(54024),m=e(10699),a=e(32917),n=e(77712),f=(e(85931),e(8314),e(90912),e(76898)),M=e(36947);const O=P=>{let o=class extends P{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(i){super.postscript(i),(0,M.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}_validateHeightModelInfo(){var i=this;return(0,l.Z)(function*(){const s=new AbortController,p=s.signal;i.handles.add((0,g.kB)(()=>s.abort())),yield(0,a.N1)(()=>i.view.defaultsFromMap?.heightModelInfoReady,p),(0,m.k_)(p);const u=(0,M.Wt)(i.layer,i.view.heightModelInfo,i.supportsHeightUnitConversion);if(u)throw u})()}canResume(){const i=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!i||!i.minScale||!i.maxScale||i.minScale>=i.maxScale)}getSuspendInfo(){const i=super.getSuspendInfo(),s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return s&&s.minScale&&s.maxScale&&s.minScale<s.maxScale&&(i.outsideScaleRange=!0),i}};return(0,h._)([(0,n.Cb)()],o.prototype,"view",void 0),(0,h._)([(0,n.Cb)()],o.prototype,"slicePlaneEnabled",void 0),o=(0,h._)([(0,f.j)("esri.views.3d.layers.LayerView3D")],o),o}},19991:(I,y,e)=>{e.r(y),e.d(y,{default:()=>L});var s,t,l=e(17626),h=e(26584),g=e(72392),m=e(63290),a=e(62208),n=e(32917),v=e(77712),M=(e(85931),e(8314),e(90912),e(76898)),O=e(37053),P=e(19702),o=e(45611),i=e(57596);(t=s||(s={}))[t.API=1]="API",t[t.VerboseAPI=2]="VerboseAPI",t[t.Error=3]="Error";const p=m.Z.getLogger(" esri.views.3d.layers.VoxelLayerView3D");let u=class extends((0,P.A)(o.Z)){constructor(){super(...arguments),this._usedMemory=0,this._futureMemory=0,this.type="voxel-3d",this._wasmLayerId=-1,this._handles=new g.Z,this._dbgFlags=new Set}get wasmLayerId(){return this._wasmLayerId}initialize(){if("local"!==this.view.viewingMode)throw new h.Z("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",{});if(this.view._stage.renderView.renderingContext.type!==i.zO.WEBGL2)throw new h.Z("voxel:unsupported-context","Voxel layers are supported in WebGL2 rendering contexts only.",{});if(!this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat?.textureFloat)throw new h.Z("voxel:missing-color-buffer-float","Voxel layers require the WebGL2 extension EXT_color_buffer_float",{});if(!(0,O.fS)(this.layer.spatialReference,this.view.spatialReference))throw new h.Z("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const r=this.layer.currentVariableId,d=this.layer.getVolume(r),V=this.layer.getVariable(r);if((0,a.pC)(d)&&(0,a.pC)(V)){const E=d.dimensions[0],_=d.dimensions[1],D=d.getZDimension();if(D>1){const x=E.size*_.size*d.dimensions[D].size;let C=1;switch(V.renderingFormat.type){case"Int16":case"UInt16":C=2;break;case"Int32":case"UInt32":case"Float32":C=4}this._futureMemory=C*x}}const T=this.view.addVoxelLayerViewToWasm(this).then(E=>{this._wasmLayerId=E,this._suspendedHandle=(0,n.YP)(()=>this.suspended,_=>{const D=this.view.voxelWasm;(0,a.pC)(D)&&D.setEnabled(this,!_)},n.nn),this._handles.add([(0,n.YP)(()=>this.layer.renderMode,_=>this._pushRenderModeToWasm(_)),(0,n.YP)(()=>this.layer.currentVariableId,_=>this._pushCurrentVariableIdToWasm(_)),(0,n.YP)(()=>this.layer.getDynamicSections(),_=>this._pushDynamicSectionsToWasm(_)),(0,n.YP)(()=>this.layer.getSlices(),_=>this._pushSlicesToWasm(_)),(0,n.YP)(()=>this.layer.getSections(),_=>this._pushSectionsToWasm(_)),(0,n.YP)(()=>this.layer.getVerticalExaggeration(),_=>this._pushVerticalExaggerationToWasm(_)),(0,n.YP)(()=>this.layer.getVerticalOffset(),_=>this._pushVerticalOffsetToWasm(_))])}).catch(E=>{if(this.view.removeVoxelLayerViewFromWasm(this),this._wasmLayerId=-1,-1===E)throw new h.Z("voxel:addLayer-failure","The voxel layer description was invalid.",{});if(-2===E)throw new h.Z("voxel:addLayer-failure","The voxel layer web assembly module failed to download.",{})});this.addResolvingPromise(T)}destroy(){this.view.removeVoxelLayerViewFromWasm(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null),this._handles=(0,a.SC)(this._handles)}isUpdating(){const t=this.view.voxelWasm;return!(this._wasmLayerId<0||!(0,a.pC)(t))&&t.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}getUsedMemory(){return this._usedMemory}getUnloadedMemory(){return this._futureMemory}ignoresMemoryFactor(){return!0}get performanceInfo(){return{nodes:0,displayedNumberOfFeatures:0,maximumNumberOfFeatures:0,totalNumberOfFeatures:0,core:null}}setUsedMemory(t){this._usedMemory=t,this._futureMemory=0}captureFrustum(){const t=this.view.voxelWasm;(0,a.pC)(t)&&t.captureFrustum()}toggleFullVolumeExtentDraw(){const t=this.view.voxelWasm;(0,a.pC)(t)&&t.toggleFullVolumeExtentDraw(this)}_pushRenderModeToWasm(t){const r=this.view.voxelWasm;this._dbg(s.VerboseAPI,"VoxelLayerView3D._pushRenderModeToWasm() called, "+((0,a.pC)(r)?"have WASM":"don't have WASM!!!")),(0,a.pC)(r)&&r.setRenderMode(this,t)||this._dbg(s.Error,"VoxelLayerView3D._pushRenderModeToWasm() failed!")}_pushSlicesToWasm(t){const r=this.view.voxelWasm;this._dbg(s.VerboseAPI,"VoxelLayerView3D._pushSlicesToWasm() called, "+((0,a.pC)(r)?"have WASM":"don't have WASM!!!")),(0,a.pC)(r)&&r.setSlices(this,t)||this._dbg(s.Error,"VoxelLayerView3D._pushSlicesToWasm() failed!")}_pushSectionsToWasm(t){const r=this.view.voxelWasm;this._dbg(s.VerboseAPI,"VoxelLayerView3D._pushSectionsToWasm() called, "+((0,a.pC)(r)?"have WASM":"don't have WASM!!!")),(0,a.pC)(r)&&r.setStaticSections(this,t)||this._dbg(s.Error,"VoxelLayerView3D._pushSectionsToWasm() failed!")}_pushDynamicSectionsToWasm(t){const r=this.view.voxelWasm;this._dbg(s.VerboseAPI,"VoxelLayerView3D._pushDynamicSectionsToWasm() called, "+((0,a.pC)(r)?"have WASM":"don't have WASM!!!")),(0,a.pC)(r)&&r.setDynamicSections(this,t)||this._dbg(s.Error,"VoxelLayer._updateDynamicSections() failed!")}_pushCurrentVariableIdToWasm(t){const r=this.view.voxelWasm;this._dbg(s.VerboseAPI,"VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, "+((0,a.pC)(r)?"have WASM":"don't have WASM!!!")),(0,a.pC)(r)&&r.setCurrentVariable(this,t)||this._dbg(s.Error,"VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!")}_pushVerticalExaggerationToWasm(t){const r=this.layer.getVolumeStyle(null),d=this.view.voxelWasm;this._dbg(s.VerboseAPI,`VoxelLayerView3D._pushVerticalExaggerationToWasm() called, ${(0,a.pC)(d)?"have WASM":"don't have WASM!!!"}, ${(0,a.pC)(r)?"have style":"don't have style!!!"}`),!(0,a.Wi)(r)&&((0,a.pC)(d)&&d.setVerticalExaggerationAndOffset(this,r.volumeId,t,r.verticalOffset)||this._dbg(s.Error,"VoxelLayerView3D._pushVerticalExaggerationToWasm() failed!"))}_pushVerticalOffsetToWasm(t){const r=this.layer.getVolumeStyle(null),d=this.view.voxelWasm;this._dbg(s.VerboseAPI,`VoxelLayerView3D._pushVerticalOffsetToWasm() called, ${(0,a.pC)(d)?"have WASM":"don't have WASM!!!"}, ${(0,a.pC)(r)?"have style":"don't have style!!!"}`),!(0,a.Wi)(r)&&((0,a.pC)(d)&&d.setVerticalExaggerationAndOffset(this,r.volumeId,r.verticalExaggeration,t)||this._dbg(s.Error,"VoxelLayerView3D._pushVerticalOffsetToWasm() failed!"))}_dbg(t,r){this._dbgFlags.has(t)&&(t===s.Error?p.error(r):p.warn(r))}};(0,l._)([(0,v.Cb)()],u.prototype,"layer",void 0),(0,l._)([(0,v.Cb)({readOnly:!0,aliasOf:"layer.parsedUrl.path"})],u.prototype,"baseUrl",void 0),u=(0,l._)([(0,M.j)("esri.views.3d.layers.VoxelLayerView3D")],u);const L=u},45611:(I,y,e)=>{e.d(y,{Z:()=>i});var l=e(17626),h=e(14517),g=e(61885),m=e(80542),a=e(61996),n=e(63290),v=e(62208),W=e(60330),c=e(77712),P=(e(85931),e(8314),e(90912),e(76898));let o=class extends((0,m.p)((0,a.IG)((0,W.v)(g.Z.EventedMixin(h.Z))))){constructor(s){super(s),this.layer=null,this.parent=null}initialize(){this.when().catch(s=>{if("layerview:create-error"!==s.name){const p=this.layer&&this.layer.id||"no id",u=this.layer&&this.layer.title||"no title";n.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${u}', id: '${p}')`,s)}})}get fullOpacity(){return(0,v.Pt)(this.get("layer.opacity"),1)*(0,v.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(s){void 0!==s?this._override("visible",s):this._clearOverride("visible")}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const s=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(s.viewNotReady=!0),this.layer&&this.layer.loaded||(s.layerNotLoaded=!0),this.visible||(s.layerInvisible=!0),s}isUpdating(){return!1}};(0,l._)([(0,c.Cb)()],o.prototype,"fullOpacity",null),(0,l._)([(0,c.Cb)()],o.prototype,"layer",void 0),(0,l._)([(0,c.Cb)()],o.prototype,"parent",void 0),(0,l._)([(0,c.Cb)({readOnly:!0})],o.prototype,"suspended",null),(0,l._)([(0,c.Cb)({readOnly:!0})],o.prototype,"suspendInfo",null),(0,l._)([(0,c.Cb)({readOnly:!0})],o.prototype,"legendEnabled",null),(0,l._)([(0,c.Cb)({type:Boolean,readOnly:!0})],o.prototype,"updating",null),(0,l._)([(0,c.Cb)({readOnly:!0})],o.prototype,"updatingProgress",null),(0,l._)([(0,c.Cb)()],o.prototype,"visible",null),(0,l._)([(0,c.Cb)()],o.prototype,"view",void 0),o=(0,l._)([(0,P.j)("esri.views.layers.LayerView")],o);const i=o}}]);