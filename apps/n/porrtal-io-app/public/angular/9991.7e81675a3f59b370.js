"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[9991],{19702:(S,E,a)=>{a.d(E,{A:()=>D});var _=a(15861),u=a(17626),M=a(54024),v=a(10699),r=a(32917),d=a(77712),h=(a(85931),a(90912),a(76898)),W=a(36947);const D=b=>{let i=class extends b{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(n){super.postscript(n),(0,W.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}_validateHeightModelInfo(){var n=this;return(0,_.Z)(function*(){const t=new AbortController,c=t.signal;n.handles.add((0,M.kB)(()=>t.abort())),yield(0,r.N1)(()=>n.view.defaultsFromMap?.heightModelInfoReady,c),(0,v.k_)(c);const g=(0,W.Wt)(n.layer,n.view.heightModelInfo,n.supportsHeightUnitConversion);if(g)throw g})()}canResume(){const n=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!n||!n.minScale||!n.maxScale||n.minScale>=n.maxScale)}getSuspendInfo(){const n=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(n.outsideScaleRange=!0),n}};return(0,u._)([(0,d.Cb)()],i.prototype,"view",void 0),(0,u._)([(0,d.Cb)()],i.prototype,"slicePlaneEnabled",void 0),i=(0,u._)([(0,h.j)("esri.views.3d.layers.LayerView3D")],i),i}},19991:(S,E,a)=>{a.r(E),a.d(E,{default:()=>g});var t,e,_=a(17626),u=a(26584),M=a(72392),v=a(63290),r=a(62208),d=a(32917),m=a(77712),W=(a(85931),a(90912),a(76898)),D=a(37053),b=a(19702),i=a(45611),n=a(57596);(e=t||(t={}))[e.API=1]="API",e[e.VerboseAPI=2]="VerboseAPI",e[e.Error=3]="Error";let c=class extends((0,b.A)(i.Z)){constructor(){super(...arguments),this._usedMemory=0,this._futureMemory=0,this.type="voxel-3d",this._wasmLayerId=-1,this._handles=new M.Z,this._dbgFlags=new Set}get baseUrl(){return this.layer.parsedUrl?.path??""}get wasmLayerId(){return this._wasmLayerId}initialize(){if(this._dbgFlags.add(t.Error),"local"!==this.view.viewingMode)throw new u.Z("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",{});if(this.view._stage.renderView.renderingContext.type!==n.zO.WEBGL2)throw new u.Z("voxel:unsupported-context","Voxel layers are supported in WebGL2 rendering contexts only.",{});if(!this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat?.textureFloat)throw new u.Z("voxel:missing-color-buffer-float","Voxel layers require the WebGL2 extension EXT_color_buffer_float",{});if(!(0,D.fS)(this.layer.spatialReference,this.view.spatialReference))throw new u.Z("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const s=this.layer.currentVariableId,o=this.layer.getVolume(s),p=this.layer.getVariable(s);if((0,r.pC)(o)&&(0,r.pC)(p)){const y=o.dimensions[0],l=o.dimensions[1],P=o.zDimension;if(P>1){const O=y.size*l.size*o.dimensions[P].size;let f=1;switch(p.renderingFormat.type){case"Int16":case"UInt16":f=2;break;case"Int32":case"UInt32":case"Float32":f=4}this._futureMemory=f*O}}const I=this.view.addVoxelLayerViewToWasm(this).then(y=>{this._wasmLayerId=y,this._suspendedHandle=(0,d.YP)(()=>this.suspended,l=>{const P=this.view.voxelWasm;(0,r.pC)(P)&&P.setEnabled(this,!l)},d.nn),this._handles.add([(0,d.YP)(()=>this.layer.renderMode,l=>this._pushRenderModeToWasm(l)),(0,d.YP)(()=>this.layer.currentVariableId,l=>this._pushCurrentVariableIdToWasm(l)),(0,d.YP)(()=>this.layer.getSections(),l=>this._pushSectionsToWasm(l)),(0,d.YP)(()=>this.layer.getVariableStyles(),l=>this._pushVariableStylesToWasm(l)),(0,d.YP)(()=>this.layer.getVolumeStyles(),l=>this._pushVolumeStylesToWasm(l)),(0,d.YP)(()=>this.layer.enableDynamicSections,l=>this._pushEnableDynamicSectionsToWasm(l)),(0,d.YP)(()=>this.layer.enableIsosurfaces,l=>this._pushEnableIsosurfacesToWasm(l)),(0,d.YP)(()=>this.layer.enableSections,l=>this._pushEnableSectionsToWasm(l)),(0,d.YP)(()=>this.layer.enableSlices,l=>this._pushEnableSlicesToWasm(l))])}).catch(y=>{if(this.view.removeVoxelLayerViewFromWasm(this),this._wasmLayerId=-1,-1===y)throw new u.Z("voxel:addLayer-failure","The voxel layer description was invalid.",{});if(-2===y)throw new u.Z("voxel:addLayer-failure","The voxel layer web assembly module failed to download.",{})});this.addResolvingPromise(I)}destroy(){this.view.removeVoxelLayerViewFromWasm(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null),this._handles=(0,r.SC)(this._handles)}isUpdating(){const e=this.view.voxelWasm;return!(this._wasmLayerId<0||!(0,r.pC)(e))&&e.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}getUsedMemory(){return this._usedMemory}getUnloadedMemory(){return this._futureMemory}ignoresMemoryFactor(){return!0}get performanceInfo(){return{nodes:0,displayedNumberOfFeatures:0,maximumNumberOfFeatures:0,totalNumberOfFeatures:0,core:null}}setUsedMemory(e){this._usedMemory=e,this._futureMemory=0}captureFrustum(){const e=this.view.voxelWasm;(0,r.pC)(e)&&e.captureFrustum()}toggleFullVolumeExtentDraw(){const e=this.view.voxelWasm;(0,r.pC)(e)&&e.toggleFullVolumeExtentDraw(this)}getLayerTimes(){let e=[];const s=this.view.voxelWasm;return(0,r.pC)(s)&&(e=s.getLayerTimes(this)),e}getCurrentLayerTimeIndex(){let e=0;const s=this.view.voxelWasm;return(0,r.pC)(s)&&(e=s.getCurrentLayerTimeIndex(this)),e}_pushRenderModeToWasm(e){const s=this.view.voxelWasm;this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushRenderModeToWasm() called, "+((0,r.pC)(s)?"have WASM":"don't have WASM!!!")),(0,r.pC)(s)&&s.setRenderMode(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushRenderModeToWasm() failed!")}_pushSectionsToWasm(e){const s=this.view.voxelWasm;this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushSectionsToWasm() called, "+((0,r.pC)(s)?"have WASM":"don't have WASM!!!")),(0,r.pC)(s)&&s.setStaticSections(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushSectionsToWasm() failed!")}_pushCurrentVariableIdToWasm(e){const s=this.view.voxelWasm;this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, "+((0,r.pC)(s)?"have WASM":"don't have WASM!!!")),(0,r.pC)(s)&&s.setCurrentVariable(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!")}_pushVariableStylesToWasm(e){const s=this.view.voxelWasm;this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushVariableStylesToWasm() called, "+((0,r.pC)(s)?"have WASM":"don't have WASM!!!"));let o=!1;(0,r.pC)(s)&&(o=s.setVariableStyles(this,e),o||this._dbg(t.Error,"VoxelLayerView3D._pushVariableStylesToWasm() failed!"))}_accountForEnableSlices(e,s){const o=(0,r.pC)(s)?s:this.layer.enableSlices;for(let p=0;p<e.length;++p){const I=e[p];for(const y of I.slices)y.enabled=y.enabled&&o}}_pushVolumeStylesToWasm(e){const s=this.view.voxelWasm;this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushVolumeStylesToWasm() called, "+((0,r.pC)(s)?"have WASM":"don't have WASM!!!"));let o=!1;(0,r.pC)(s)&&(this._accountForEnableSlices(e,null),o=s.setVolumeStyles(this,e),o||this._dbg(t.Error,"VoxelLayerView3D._pushVolumeStylesToWasm() failed!"))}_pushEnableDynamicSectionsToWasm(e){const s=this.view.voxelWasm;this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() called, "+((0,r.pC)(s)?"have WASM":"don't have WASM!!!"));let o=!1;(0,r.pC)(s)&&(o=s.setEnableDynamicSections(this,e),o||this._dbg(t.Error,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() failed!"))}_pushEnableSlicesToWasm(e){const s=this.view.voxelWasm;this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushEnableSlicesToWasm() called, "+((0,r.pC)(s)?"have WASM":"don't have WASM!!!"));let o=!1;if((0,r.pC)(s)){const p=this.layer.getVolumeStyles();this._accountForEnableSlices(p,e),o=s.setVolumeStyles(this,p),o||this._dbg(t.Error,"VoxelLayerView3D._pushEnableSlicesToWasm() failed!")}}_pushEnableIsosurfacesToWasm(e){const s=this.view.voxelWasm;this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() called, "+((0,r.pC)(s)?"have WASM":"don't have WASM!!!"));let o=!1;(0,r.pC)(s)&&(o=s.setEnableIsosurfaces(this,e),o||this._dbg(t.Error,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() failed!"))}_pushEnableSectionsToWasm(e){const s=this.view.voxelWasm;this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushEnableSectionsToWasm() called, "+((0,r.pC)(s)?"have WASM":"don't have WASM!!!"));let o=!1;(0,r.pC)(s)&&(o=s.setEnableSections(this,e),o||this._dbg(t.Error,"VoxelLayerView3D._pushEnableSectionsToWasm() failed!"))}_dbg(e,s){this._dbgFlags.has(e)&&(e===t.Error?v.Z.getLogger(this.declaredClass).error(s):v.Z.getLogger(this.declaredClass).warn(s))}};(0,_._)([(0,m.Cb)()],c.prototype,"layer",void 0),(0,_._)([(0,m.Cb)()],c.prototype,"baseUrl",null),c=(0,_._)([(0,W.j)("esri.views.3d.layers.VoxelLayerView3D")],c);const g=c},45611:(S,E,a)=>{a.d(E,{Z:()=>n});var _=a(17626),u=a(14517),M=a(61885),v=a(80542),r=a(61996),d=a(63290),m=a(62208),C=a(60330),h=a(77712),b=(a(85931),a(90912),a(76898));let i=class extends((0,v.p)((0,r.IG)((0,C.v)(M.Z.EventedMixin(u.Z))))){constructor(t){super(t),this.layer=null,this.parent=null}initialize(){this.when().catch(t=>{if("layerview:create-error"!==t.name){const c=this.layer&&this.layer.id||"no id",g=this.layer&&this.layer.title||"no title";d.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${g}', id: '${c}')`,t)}})}get fullOpacity(){return(0,m.Pt)(this.get("layer.opacity"),1)*(0,m.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(t){this._overrideIfSome("visible",t)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const t=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(t.viewNotReady=!0),this.layer&&this.layer.loaded||(t.layerNotLoaded=!0),this.visible||(t.layerInvisible=!0),t}isUpdating(){return!1}};(0,_._)([(0,h.Cb)()],i.prototype,"fullOpacity",null),(0,_._)([(0,h.Cb)()],i.prototype,"layer",void 0),(0,_._)([(0,h.Cb)()],i.prototype,"parent",void 0),(0,_._)([(0,h.Cb)({readOnly:!0})],i.prototype,"suspended",null),(0,_._)([(0,h.Cb)({readOnly:!0})],i.prototype,"suspendInfo",null),(0,_._)([(0,h.Cb)({readOnly:!0})],i.prototype,"legendEnabled",null),(0,_._)([(0,h.Cb)({type:Boolean,readOnly:!0})],i.prototype,"updating",null),(0,_._)([(0,h.Cb)({readOnly:!0})],i.prototype,"updatingProgress",null),(0,_._)([(0,h.Cb)()],i.prototype,"visible",null),(0,_._)([(0,h.Cb)()],i.prototype,"view",void 0),i=(0,_._)([(0,b.j)("esri.views.layers.LayerView")],i);const n=i}}]);