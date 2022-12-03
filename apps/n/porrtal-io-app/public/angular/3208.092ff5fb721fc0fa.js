"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[3208],{23208:(J,F,c)=>{c.r(F),c.d(F,{default:()=>Z});var P,E,R,V,f,S,s,N=c(84792),L=c(8314),k=c(63290),T=c(62208),O=c(10699),C=c(32917),z=c(93088),x=c(8834);(s=P||(P={}))[s.Binary=0]="Binary",s[s.JSON=1]="JSON",function(s){s[s.TreeIndex=0]="TreeIndex",s[s.TreeStats=1]="TreeStats",s[s.TreeData=2]="TreeData",s[s.BrickBundles=3]="BrickBundles",s[s.Section=4]="Section",s[s.VariableStats=5]="VariableStats"}(E||(E={})),function(s){s[s.None=1]="None",s[s.Front=2]="Front",s[s.Back=3]="Back"}(R||(R={})),function(s){s[s.Low=0]="Low",s[s.Medium=1]="Medium",s[s.High=2]="High"}(V||(V={})),function(s){s[s.None=0]="None",s[s.StaticSections=1]="StaticSections",s[s.Slices=2]="Slices",s[s.DynamicSections=4]="DynamicSections",s[s.GhostShell=8]="GhostShell",s[s.Isosurface=16]="Isosurface",s[s.Quality=32]="Quality",s[s.SunLocation=64]="SunLocation",s[s.StaticSectionSelection=128]="StaticSectionSelection",s[s.ExaggerationAndOffset=256]="ExaggerationAndOffset",s[s.CurrentTime=512]="CurrentTime",s[s.CurrentVariable=1024]="CurrentVariable",s[s.DeleteIsosurface=2048]="DeleteIsosurface",s[s.ContainerVisibility=4096]="ContainerVisibility",s[s.RenderMode=8192]="RenderMode",s[s.Optimization=16384]="Optimization",s[s.VariableStyles=32768]="VariableStyles",s[s.VolumeStyles=65536]="VolumeStyles"}(f||(f={})),function(s){s[s.Isosurfaces=0]="Isosurfaces",s[s.DynamicSections=1]="DynamicSections",s[s.StaticSections=2]="StaticSections"}(S||(S={}));var H=c(54346);function q(s){return(0,H.V)(`esri/libs/vxl/${s}`)}var $=c(59617),Q=c(24805),G=c(13986),j=c(13934),Y=c(5894),K=c(57596),y=c(67969);const w=k.Z.getLogger("esri.layers.VoxelWasmPerSceneView");var o;!function(s){s[s.Lifetime=1]="Lifetime",s[s.RequestResponse=2]="RequestResponse",s[s.Rendering=3]="Rendering",s[s.Error=4]="Error"}(o||(o={}));class Z{constructor(t){this._halfIntTexturesAvailable=!1,this._textureFloatLinearAvailable=!1,this._havePreparedWithAllLayers=!1,this._renderPluginContext=null,this._vxl=null,this._pluginIsActive=!1,this._moreToLoad=!1,this._viewportWidth=-1,this._viewportHeight=-1,this._newLayers=[],this._layers=new Map,this._shaderOutput=j.H.Color,this._renderSlot=Y.r.VOXEL,this._rctx=null,this._renderTargetToRestore=null,this._lastFrameWasStationary=!1,this._wasmMemBlockSizes=[512,1024,2048,4096,8192,16384,32768,65536],this._wasmMemBlocks=new Map,this._dbgFlags=new Set,this._captureFrustum=!1,this._frustum=null,this._frustumRenderableId=-1,this._renderCoordsHelper=null,this._view=t,this._initialize()}get canRender(){return!!this._vxl&&"local"===this._view.viewingMode}_dbg(t,e){this._dbgFlags.has(t)&&(t===o.Error?w.error(e):w.warn(e))}_removeRenderPlugin(){this._pluginIsActive&&this._view._stage&&(this._dbg(o.Lifetime,"--removeRenderPlugin--"),this._view._stage.removeRenderPlugin(this)),this._pluginIsActive=!1}_initialize(){this._dbg(o.Lifetime,"--initialize--");for(const t of this._wasmMemBlockSizes)this._wasmMemBlocks.set(t,0);this._readyWatchHandle=(0,C.YP)(()=>this._view.ready,t=>{t&&"local"===this._view.viewingMode?(this._dbg(o.Lifetime,"view ready status changed to ready on a local view, calling addRenderPlugin"),this._view._stage.addRenderPlugin([this._renderSlot],this),this._pluginIsActive=!0):(this._dbg(o.Lifetime,"view ready status changed, not ready or not a local view!"),this._removeRenderPlugin())},{initial:!0}),this._qualityWatchHandle=(0,C.YP)(()=>this._view?.qualityProfile,t=>{this._dbg(o.Rendering,"qualityProfile changed to "+t),this._vxl&&this._vxl.set_quality(this._toWasmQuality(t))},{initial:!0}),this._timeExtentWatchHandle=(0,C.YP)(()=>this._view?.timeExtent,()=>{if(this._vxl){const t=this._getTimeArgs(this._view?.timeExtent);this._dbg(o.Rendering,"sceneView timeExtent changed to useTime="+t.useTime+" st="+t.startTime+" et="+t.endTime),this._vxl.set_scene_time_extent(t.startTime,t.endTime,t.useTime),this._renderPluginContext.requestRender()}},{initial:!0}),this._stationaryWatchHandle=(0,C.YP)(()=>this._view?.stationary,t=>{this._vxl&&t&&!this._lastFrameWasStationary&&this._renderPluginContext.requestRender()})}initializeRenderContext(t){this._dbg(o.Lifetime,"--initializeRenderContext--");const e=t.renderContext.rctx;e.type===K.zO.WEBGL2?(this._renderPluginContext=t,this._rctx=t.renderContext.rctx,this._halfIntTexturesAvailable=!!this._rctx.capabilities.textureNorm16,this._textureFloatLinearAvailable=this._rctx.capabilities.textureFloatLinear,this._initializeWasm(e.gl)):this._dbg(o.Error,"WebGL 1 context only!")}uninitializeRenderContext(){this._renderPluginContext=null,this._rctx=null,this._dbg(o.Lifetime,"--uninitializeRenderContext--")}_restoreFramebuffer(){if(!this._renderTargetToRestore)return;const t=this._renderTargetToRestore.fbo;if(!this._rctx)return void this._dbg(o.Error,"no context in restoreFramebuffer!");this._rctx.bindFramebuffer(t,!0);const e=this._renderTargetToRestore.viewport;this._rctx.setViewport(e.x,e.y,e.width,e.height)}_bindPreviousDepthToSlot(t,e){if(!this._rctx||!this._renderTargetToRestore)return 0;const a=this._renderTargetToRestore.fbo.depthStencilTexture;return a?(this._rctx.bindTexture(0===e?null:a,t,!0),1):(this._dbg(o.Error,"no depth/stencil texture exists!"),0)}_modifyResourceCount(t,e,i){if(!this._rctx)return void this._dbg(o.Error,"modifyAllocation callback has no rendering context!");const r=t;1===i?this._rctx.instanceCounter.increment(r,e):this._rctx.instanceCounter.decrement(r,e)}_setBlendState(t,e,i,r){this._rctx?(this._rctx.setBlendingEnabled(1===t),this._rctx.setBlendFunction(e,i),this._rctx.setBlendEquation(r)):this._dbg(o.Error,"setBlendState callback has no rendering context!")}_setFrontFace(t){this._rctx?this._rctx.setFrontFace(t):this._dbg(o.Error,"setFrontFace callback has no rendering context!")}_setDepthStencilStateFunction(t,e,i){this._rctx?(this._rctx.setDepthFunction(i),this._rctx.setDepthTestEnabled(1===t),this._rctx.setDepthWriteEnabled(1===e),this._rctx.setStencilTestEnabled(!1),this._rctx.setStencilFunction(y.wb.ALWAYS,0,255),this._rctx.setStencilOpSeparate(y.LR.FRONT,y.xS.KEEP,y.xS.INCR,y.xS.KEEP),this._rctx.setStencilOpSeparate(y.LR.BACK,y.xS.KEEP,y.xS.DECR,y.xS.KEEP)):this._dbg(o.Error,"setDepthStencilStateFunction callback has no rendering context!")}_setRasterizerState(t){if(this._rctx)switch(t){case R.None:this._rctx.setFaceCullingEnabled(!1);break;case R.Back:this._rctx.setCullFace(y.LR.BACK),this._rctx.setFaceCullingEnabled(!0);break;case R.Front:this._rctx.setCullFace(y.LR.FRONT),this._rctx.setFaceCullingEnabled(!0)}else this._dbg(o.Error,"setRasterizerState callback has no rendering context!")}_setViewport(t,e,i,r){this._rctx?this._rctx.setViewport(t,e,i,r):this._dbg(o.Error,"setViewport callback has no rendering context!")}_updateMemoryUsage(){this._layers.forEach((t,e)=>{if(t.needMemoryUsageUpdate){const i=this._vxl.estimate_memory_usage(e);i>=0&&(t.needMemoryUsageUpdate=!1,t.layerView.setUsedMemory(i))}})}_syncRequestsResponses(){this._layers.forEach((t,e)=>{const i=[];t.responses.forEach((l,m)=>{i.push(m),this._dbg(o.RequestResponse,"responding for requestID:"+m+" size:"+l.size),this._vxl.respond(e,m,l),l.requestType!==E.TreeIndex&&l.requestType!==E.Section||(t.needMemoryUsageUpdate=!0)});const r=t.responses;for(const l of i)r.delete(l);const a=this._vxl.get_new_requests(e),n=t.abortController.signal;for(const l in a){t.outstandingRequestCount+=1,1===t.outstandingRequestCount&&t.layerView.updatingFlagChanged();const m=a[l],g={responseType:"array-buffer",signal:n};this._dbg(o.RequestResponse,"making requestID:"+l+" url:"+m.url),(0,N.default)(m.url,g).then(h=>{t.outstandingRequestCount-=1,0===t.outstandingRequestCount&&t.layerView.updatingFlagChanged(),this._dbg(o.RequestResponse,"have response for requestID:"+l);let _=0;if(h.data.byteLength>0){_=this._vxl._malloc(h.data.byteLength);const v=new Uint8Array(this._vxl.HEAPU8.buffer,_,h.data.byteLength),p=new Uint8Array(h.data);for(let b=0;b<h.data.byteLength;++b)v[b]=p[b]}r.set(+l,{responseType:m.responseType,ptr:_,size:h.data.byteLength,success:!0,requestType:m.requestType})}).catch(h=>{t.outstandingRequestCount-=1,0===t.outstandingRequestCount&&t.layerView.updatingFlagChanged(),(0,O.D_)(h)||(this._dbg(o.Error,`requestID:${l} failed, error=${h.toString()}`),r.set(+l,{responseType:m.responseType,ptr:0,size:0,success:!1,requestType:m.requestType}))})}})}updateWasmCamera(t){this._vxl.set_projection_matrix.apply(this._vxl,t.projectionMatrix),this._vxl.set_view_matrix.apply(this._vxl,t.viewMatrix),this._vxl.set_near_far(t.near,t.far)}isUpdating(t){return!(this._vxl||!this._vxlPromise)||!!this._layers.has(t)&&this._layers.get(t).outstandingRequestCount>0}getLayerTimes(t){const e=[];return this._layers.forEach((i,r)=>{if(i.layerView.wasmLayerId===t.wasmLayerId){const a=this._vxl.get_layer_epoch_times(r,t.layer.currentVariableId);for(let n=0;n<a.length;++n)e.push(a[n])}}),e}getCurrentLayerTimeIndex(t){let e=0;return this._layers.forEach((i,r)=>{i.layerView.wasmLayerId===t.wasmLayerId&&(e=this._vxl.get_layer_current_time_id(r))}),e}setEnabled(t,e){this._layers.forEach((i,r)=>{i.layerView.wasmLayerId===t.wasmLayerId&&(this._vxl.set_enabled(r,e),i.needMemoryUsageUpdate=!0,this._renderPluginContext.requestRender())})}setStaticSections(t,e){return this._doMaskedUIUpdate(t,{mask:f.StaticSections,staticSections:e},!0)}setCurrentVariable(t,e){return this._doMaskedUIUpdate(t,{mask:f.CurrentVariable,currentVariable:e},!0)}setRenderMode(t,e){return this._doMaskedUIUpdate(t,{mask:f.RenderMode,renderMode:e},!0)}setVerticalExaggerationAndOffset(t,e,i,r){return this._doMaskedUIUpdate(t,{mask:f.ExaggerationAndOffset,volStyleDesc:{volumeId:e,verticalExaggeration:i,verticalOffset:r}},!0)}setVariableStyles(t,e){return this._doMaskedUIUpdate(t,{mask:f.VariableStyles,variableStyles:e},!0)}setVolumeStyles(t,e){return this._doMaskedUIUpdate(t,{mask:f.VolumeStyles,volumeStyles:e},!0)}setEnableDynamicSections(t,e){return this._doMaskedUIUpdate(t,{mask:f.ContainerVisibility,containerIsVisible:e,container:S.DynamicSections},!0)}setEnableIsosurfaces(t,e){return this._doMaskedUIUpdate(t,{mask:f.ContainerVisibility,containerIsVisible:e,container:S.Isosurfaces},!0)}setEnableSections(t,e){return this._doMaskedUIUpdate(t,{mask:f.ContainerVisibility,containerIsVisible:e,container:S.StaticSections},!0)}_doMaskedUIUpdate(t,e,i){if(!this._vxl)return!1;let r=!1;return this._layers.forEach((a,n)=>{if(a.layerView.wasmLayerId===t.wasmLayerId){const l={str:JSON.stringify(e),byteCount:0,ptr:0,isReusable:!1};this._allocateBlock(l)&&(r=1===this._vxl.handle_masked_ui_update(n,l.ptr,l.byteCount),l.isReusable||this._vxl._free(l.ptr))}}),r&&i&&this._renderPluginContext.requestRender(),r}_addTriangleToWasmBuffer(t,e,i,r,a){return t[3*e+0]=i[0],t[3*e+1]=i[1],t[3*e+2]=i[2],t[3*(e+=1)+0]=r[0],t[3*e+1]=r[1],t[3*e+2]=r[2],t[3*(e+=1)+0]=a[0],t[3*e+1]=a[1],t[3*e+2]=a[2],e+1}_addNormalToWasmBuffer(t,e,i){return t[3*e+0]=i[0],t[3*e+1]=i[1],t[3*e+2]=i[2],e+1}_doCaptureFrustum(){if(!this._vxl)return;const i=this._vxl._malloc(108*Float32Array.BYTES_PER_ELEMENT),r=new Float32Array(this._vxl.HEAPF32.buffer,i,108),a=this._vxl._malloc(36*Float32Array.BYTES_PER_ELEMENT),n=new Float32Array(this._vxl.HEAPF32.buffer,a,36),l=this._frustum.points[x.NQ.NEAR_BOTTOM_LEFT],m=this._frustum.points[x.NQ.NEAR_BOTTOM_RIGHT],g=this._frustum.points[x.NQ.NEAR_TOP_RIGHT],h=this._frustum.points[x.NQ.NEAR_TOP_LEFT],_=this._frustum.points[x.NQ.FAR_BOTTOM_LEFT],v=this._frustum.points[x.NQ.FAR_BOTTOM_RIGHT],p=this._frustum.points[x.NQ.FAR_TOP_RIGHT],b=this._frustum.points[x.NQ.FAR_TOP_LEFT];let d=0,u=0;const B=this._frustum.planes[x.Nu.NEAR];d=this._addTriangleToWasmBuffer(r,d,g,m,l),u=this._addNormalToWasmBuffer(n,u,B),d=this._addTriangleToWasmBuffer(r,d,l,h,g),u=this._addNormalToWasmBuffer(n,u,B);const I=this._frustum.planes[x.Nu.FAR];d=this._addTriangleToWasmBuffer(r,d,_,v,p),u=this._addNormalToWasmBuffer(n,u,I),d=this._addTriangleToWasmBuffer(r,d,p,b,_),u=this._addNormalToWasmBuffer(n,u,I);const W=this._frustum.planes[x.Nu.TOP];d=this._addTriangleToWasmBuffer(r,d,p,g,h),u=this._addNormalToWasmBuffer(n,u,W),d=this._addTriangleToWasmBuffer(r,d,h,b,p),u=this._addNormalToWasmBuffer(n,u,W);const A=this._frustum.planes[x.Nu.BOTTOM];d=this._addTriangleToWasmBuffer(r,d,l,m,v),u=this._addNormalToWasmBuffer(n,u,A),d=this._addTriangleToWasmBuffer(r,d,v,_,l),u=this._addNormalToWasmBuffer(n,u,A);const M=this._frustum.planes[x.Nu.LEFT];d=this._addTriangleToWasmBuffer(r,d,h,l,_),u=this._addNormalToWasmBuffer(n,u,M),d=this._addTriangleToWasmBuffer(r,d,_,b,h),u=this._addNormalToWasmBuffer(n,u,M);const U=this._frustum.planes[x.Nu.RIGHT];d=this._addTriangleToWasmBuffer(r,d,g,p,v),u=this._addNormalToWasmBuffer(n,u,U),d=this._addTriangleToWasmBuffer(r,d,v,m,g),u=this._addNormalToWasmBuffer(n,u,U),-1!==this._frustumRenderableId&&this._vxl.remove_generic_mesh(this._frustumRenderableId),this._frustumRenderableId=this._vxl.add_generic_mesh(i,108,a,36,255,0,0,64),this._vxl._free(i),this._vxl._free(a),this._captureFrustum=!1,this._renderPluginContext.requestRender()}captureFrustum(){null===this._renderCoordsHelper&&(this._renderCoordsHelper=G.Z.create($.JY.Local,(0,z.E2)(!1,this._view.spatialReference))),null===this._frustum&&(this._frustum=new Q.i(this._renderCoordsHelper)),this._captureFrustum=!0,null!==this._renderPluginContext&&this._renderPluginContext.requestRender()}toggleFullVolumeExtentDraw(t){this._vxl&&this._layers.forEach((e,i)=>{e.layerView.wasmLayerId===t.wasmLayerId&&(this._vxl.toggle_full_volume_extent_draw(i),this._renderPluginContext.requestRender())})}addVoxelLayer(t){if(!this._vxl){const i={layerView:t,resolveCallback:null,rejectCallback:null},r=new Promise((a,n)=>{i.resolveCallback=a,i.rejectCallback=n});return this._newLayers.push(i),r}const e=this._addVoxelLayer(t);return e<0?Promise.reject(-1):Promise.resolve(e)}removeVoxelLayer(t){if(!this._vxl){const r=this._newLayers.findIndex(n=>t.uid===n.layerView.uid);r>=0&&(this._newLayers[r].resolveCallback(-1),this._newLayers.splice(r,1));const a=this._newLayers.length;return 0===a&&(this._dbg(o.Lifetime," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),a}let e=-1;this._layers.forEach((r,a)=>{r.layerView.wasmLayerId===t.wasmLayerId&&(e=a,r.abortController.abort(),this._vxl.remove_layer(e))}),e>=0&&this._layers.delete(e);const i=this._layers.size;return 0===i&&(this._dbg(o.Lifetime," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),i}_getBlockSize(t){for(const e of this._wasmMemBlockSizes)if(t<e)return e;return-1}_allocateBlock(t){t.byteCount=this._vxl.lengthBytesUTF8(t.str)+1;const e=this._getBlockSize(t.byteCount);return e<0?(t.isReusable=!1,t.ptr=this._vxl._malloc(t.byteCount)):(t.isReusable=!0,t.ptr=this._wasmMemBlocks.get(e),0===t.ptr&&(t.ptr=this._vxl._malloc(e),this._wasmMemBlocks.set(e,t.ptr))),0!==t.ptr&&(this._vxl.stringToUTF8(t.str,t.ptr,t.byteCount),!0)}_getTimeArgs(t){let e=-Number.MAX_VALUE,i=Number.MAX_VALUE,r=!1;return(0,T.pC)(t)&&(t.isAllTime?r=!0:((0,T.pC)(t.start)&&(r=!0,e=t.start.getTime()/1e3),(0,T.pC)(t.end)&&(r=!0,i=t.end.getTime()/1e3))),{startTime:e,endTime:i,useTime:r}}_addVoxelLayer(t){const e=t.layer;let i=-1;const r=e.getConfiguration();if(r.length<1)return-1;const a={str:r,byteCount:0,ptr:0,isReusable:!1};if(!this._allocateBlock(a))return-1;const n=this._getTimeArgs(this._view?.timeExtent),l=this._view.spatialReference.isWGS84&&e.spatialReference.isWGS84?111319.49079327357:1;if(i=this._vxl.add_layer(e.serviceRoot,a.ptr,a.byteCount,l,l,n.startTime,n.endTime,n.useTime,this._toWasmQuality(this._view.qualityProfile)),a.isReusable||this._vxl._free(a.ptr),i>=0){const m=new AbortController;if(this._layers.set(i,{layerView:t,responses:new Map,outstandingRequestCount:0,abortController:m,needMemoryUsageUpdate:!1}),!this._halfIntTexturesAvailable||(0,L.Z)("mac")){const g=[];let h="";for(const _ of t.layer.variables)"Int16"!==_.renderingFormat.type&&"UInt16"!==_.renderingFormat.type||(g.push(_.name),_.id===t.layer.currentVariableId&&(h=_.name));""!==h&&w.error("#addVoxelLayer_error()",t.layer,`The voxel layer '${t.layer.title}' cannot render the current variable '${h}' in this browser`),g.length>0&&w.warn("#addVoxelLayer_warning()",t.layer,`The voxel layer '${t.layer.title}' cannot render the variables '${g.toString()}' in this browser`)}if(!this._textureFloatLinearAvailable){const g=[];let h="";for(const _ of t.layer.variables)"Float32"===_.renderingFormat.type&&(g.push(_.name),_.id===t.layer.currentVariableId&&(h=_.name));""!==h&&w.error("#addVoxelLayer_error()",t.layer,`The voxel layer '${t.layer.title}' cannot render the current variable '${h}' in this browser`),g.length>0&&w.warn("#addVoxelLayer_warning()",t.layer,`The voxel layer '${t.layer.title}' cannot render the variables '${g.toString()}' in this browser`)}return(0,L.Z)("esri-mobile")&&w.warnOnce("Mobile support differs across devices. Voxel layer might not display as expected."),i}return-1}prepareRender(t){if(!this._vxl)return;const e=t.bindParameters.camera.viewForward,i=t.bindParameters.camera.eye;this._vxl.update_camera_pos_and_direction(i[0],i[1],i[2],e[0],e[1],e[2]);const r=this._vxl.cull();this._dbg(o.RequestResponse,"missingResourceCount="+r),this._moreToLoad=r>0,this._havePreparedWithAllLayers=0===this._newLayers.length,this._updateMemoryUsage()}render(t){if(!this._vxl||t.output!==this._shaderOutput||t.bindParameters.slot!==this._renderSlot)return;for(const i of this._newLayers){const r=this._addVoxelLayer(i.layerView);-1===r?i.rejectCallback(-1):i.resolveCallback(r)}if(this._newLayers=[],0===this._layers.size)return void this._dbg(o.Error,"No voxel layers but RenderPlugin instance is being asked to render!");this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()},this._syncRequestsResponses(),this._lastFrameWasStationary=this._view.stationary,this._rctx.setPolygonOffsetFillEnabled(!1),this._rctx.setScissorTestEnabled(!1),this._rctx.setColorMask(!0,!0,!0,!0),this._vxl.begin_color_frame(!this._view.stationary||this._moreToLoad,t.bindParameters.lighting.mainLight.direction[0],t.bindParameters.lighting.mainLight.direction[1],t.bindParameters.lighting.mainLight.direction[2]);const e=this._renderTargetToRestore.viewport;e.width===this._viewportWidth&&e.height===this._viewportHeight||(this._viewportWidth=e.width,this._viewportHeight=e.height,this._vxl.set_viewport(e.width,e.height),this._layers.forEach(i=>{i.needMemoryUsageUpdate=!0})),0===e.x&&0===e.y||this._dbg(o.Error,"Unsupported viewport parameters detected!"),this.updateWasmCamera(t.bindParameters.camera),this._captureFrustum&&(this._frustum.update(t.bindParameters.camera),this._doCaptureFrustum()),this._vxl.draw(),this._renderTargetToRestore.fbo=null,t.rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),t.rctx.externalVertexArrayObjectUpdate(),t.rctx.externalVertexBufferUpdate(),this._rctx.externalProgramUpdate(),(this._moreToLoad||!this._havePreparedWithAllLayers&&this._layers.size>0)&&this._renderPluginContext.requestRender()}destroy(){this._dbg(o.Lifetime,"--destroy--"),this._removeRenderPlugin(),this._readyWatchHandle=(0,T.hw)(this._readyWatchHandle),this._qualityWatchHandle=(0,T.hw)(this._qualityWatchHandle),this._timeExtentWatchHandle=(0,T.hw)(this._timeExtentWatchHandle),this._stationaryWatchHandle=(0,T.hw)(this._stationaryWatchHandle),this._vxl&&(this._layers.forEach(t=>{t.abortController.abort()}),this._wasmMemBlocks.forEach(t=>{0!==t&&this._vxl._free(t)}),this._vxl.uninitialize_voxel_wasm(),this._vxl=null)}_initializeWasm(t){return this._vxl?Promise.resolve():(this._vxlPromise||(this._vxlPromise=function D(s){return new Promise(t=>c.e(6259).then(c.bind(c,16259)).then(e=>e.v).then(({default:e})=>{const i=e({locateFile:q,preinitializedWebGLContext:s,onRuntimeInitialized:()=>t(i)})})).catch(t=>{throw t})}(t).then(e=>{if(this._vxl=e,this._vxlPromise=null,this._newLayers.length<=0)return this._dbg(o.Lifetime," no voxel layers left after WASM downloaded, removing RenderPlugin and destroying"),void this.destroy();const i=this._getTimeArgs(this._view?.timeExtent),r=this._vxl.addFunction(this._restoreFramebuffer.bind(this),"v"),a=this._vxl.addFunction(this._setBlendState.bind(this),"viiii"),n=this._vxl.addFunction(this._setFrontFace.bind(this),"vi"),l=this._vxl.addFunction(this._setRasterizerState.bind(this),"vi"),m=this._vxl.addFunction(this._setDepthStencilStateFunction.bind(this),"viii"),g=this._vxl.addFunction(this._setViewport.bind(this),"viiii"),h=this._vxl.addFunction(this._bindPreviousDepthToSlot.bind(this),"iii"),_=this._vxl.addFunction(this._modifyResourceCount.bind(this),"viii"),v=this._halfIntTexturesAvailable&&!(0,L.Z)("mac");this._vxl.initialize_voxel_wasm(r,a,n,l,m,g,h,_,i.startTime,i.endTime,i.useTime,v,this._textureFloatLinearAvailable),this._renderPluginContext&&this._renderPluginContext.requestRender()}).catch(()=>{for(const e of this._newLayers)e.rejectCallback(-2);this._dbg(o.Error," WASM failed to download, removing RenderPlugin and destroying"),this.destroy()})),this._vxlPromise)}pickDepth(t,e,i){if(!this._vxl||!this._rctx||0===this._layers.size)return null;const r=i.viewport[3]-e;if(t<0||t>i.viewport[2]||e<0||e>i.viewport[3])return this._dbg(o.Error,`pickDepth: outOfRange, screenXY=[${t}, ${r}], vp=[${i.viewport.toString()}]`),null;this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()};const a=i.viewForward,n=i.eye;this._vxl.update_camera_pos_and_direction(n[0],n[1],n[2],a[0],a[1],a[2]),this.updateWasmCamera(i),this._vxl.begin_frame();const l=this._vxl.pick_depth(t,r);return this._renderTargetToRestore.fbo=null,this._rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),this._rctx.externalVertexArrayObjectUpdate(),this._rctx.externalVertexBufferUpdate(),this._rctx.externalProgramUpdate(),l.success?l.distanceToCamera:null}_toWasmQuality(t){switch(t){case"low":return 0;case"medium":return 1;case"high":return 2}}}}}]);