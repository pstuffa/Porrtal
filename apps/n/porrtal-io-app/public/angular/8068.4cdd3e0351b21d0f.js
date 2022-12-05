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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[8068],{60595:(z,I,i)=>{i.d(I,{T:()=>S});var b=i(15861),n=i(84792),m=i(26584),F=i(62208);function S(g,u,h,y,o,V){return E.apply(this,arguments)}function E(){return(E=(0,b.Z)(function*(g,u,h,y,o,V){let A=null;if((0,F.pC)(h)){const C=`${g}/nodepages/`,w=C+Math.floor(h.rootIndex/h.nodesPerPage);try{return{type:"page",rootPage:(yield(0,n.default)(w,{query:{f:"json",token:y},responseType:"json",signal:V})).data,rootIndex:h.rootIndex,pageSize:h.nodesPerPage,lodMetric:h.lodSelectionMetricType,urlPrefix:C}}catch(M){(0,F.pC)(o)&&o.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",w,M),A=M}}if(!u)return null;const R=`${g}/nodes/`,f=R+(u&&u.split("/").pop());try{return{type:"node",rootNode:(yield(0,n.default)(f,{query:{f:"json",token:y},responseType:"json",signal:V})).data,urlPrefix:R}}catch(C){throw new m.Z("sceneservice:root-node-missing","Root node missing.",{pageError:A,nodeError:C,url:f})}})).apply(this,arguments)}},81736:(z,I,i)=>{i.r(I),i.d(I,{default:()=>fe});var b=i(15861),n=i(17626),m=i(88879),F=i(14517),S=i(46160),E=i(54024),g=i(63290),u=i(62208),h=i(10699),y=i(32917),o=i(77712),f=(i(85931),i(8314),i(90912),i(76898)),w=(i(20925),i(26584)),M=i(10410),X=(i(49410),i(98624)),v=i(36630),G=i(84952),H=i(61885),K=i(80542),$=i(61996),Y=i(60330);const N=(e,t)=>{let r=class extends((0,Y.v)((0,K.p)((0,$.IG)(H.Z.EventedMixin(e))))){constructor(s){super(s),this.sublayer=null,this.parent=null,this.view=null}initialize(){}get suspended(){return!this.canResume()}get updating(){return!this.suspended&&this.isUpdating()}get visible(){return!0===this.get("sublayer.visible")}set visible(s){void 0!==s?this._override("visible",s):this._clearOverride("visible")}get fullOpacity(){const s=l=>l??1;return s(this.get("sublayer.opacity"))*s(this.get("parent.fullOpacity"))}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.visible||!1}isUpdating(){return!1}};return(0,n._)([(0,o.Cb)()],r.prototype,"sublayer",void 0),(0,n._)([(0,o.Cb)()],r.prototype,"parent",void 0),(0,n._)([(0,o.Cb)({readOnly:!0})],r.prototype,"suspended",null),(0,n._)([(0,o.Cb)({type:Boolean,readOnly:!0})],r.prototype,"updating",null),(0,n._)([(0,o.Cb)()],r.prototype,"view",void 0),(0,n._)([(0,o.Cb)()],r.prototype,"visible",null),(0,n._)([(0,o.Cb)()],r.prototype,"fullOpacity",null),r=(0,n._)([(0,f.j)("esri.views.3d.layers.BuildingSublayerView3D")],r),r};var p,e,J=i(14341),U=i(52836),q=i(4794),k=i(2180),_=i(9044);function te(e){switch(e.filterMode.type){case"solid":return{mode:p.Solid};case"wire-frame":return{mode:p.WireFrame,edgeMaterial:(0,k.C8)(e.filterMode.edges,{})};case"x-ray":return{mode:p.XRay}}}function j(e,t){if((0,u.Wi)(t))return e.color[3]=0,e.edgeMaterial=null,void(e.pickable=!1);switch(t.mode){case p.Solid:return;case p.WireFrame:return e.color[3]=0,e.edgeMaterial=t.edgeMaterial,void(e.pickable=!1);case p.XRay:return e.color[0]=1,e.color[1]=1,e.color[2]=1,e.color[3]*=.15,e.colorMixMode=_.a9.Replace,e.castShadows=!1,e.pickable=!1,void(e.edgeMaterial=function re(e){return(0,u.Wi)(e)?null:(L.lastMaterial!==e&&(L.cachedMaterial=function ie(e){const t=(0,q.d)(e.color);return t[3]*=.075,{...e,color:t}}(e),L.lastMaterial=e),L.cachedMaterial)}(e.edgeMaterial))}}(e=p||(p={}))[e.Solid=0]="Solid",e[e.WireFrame=1]="WireFrame",e[e.XRay=2]="XRay";const L={cachedMaterial:null,lastMaterial:null};var se=i(2694),T=i(22498),ne=i(94443),le=i(72537),oe=i(41941),Q=i(42964),ae=i(89476);i(44648),i(36082),i(383),i(23025);class P extends F.Z{constructor(){super(...arguments),this.sublayer=null}get updating(){return!1}get suspended(){return!1}get availableFields(){return[]}get filter(){return null}set filter(t){throw new Error("Not implemented")}queryFeatures(t,r){throw new Error("Not implemented")}queryObjectIds(t,r){throw new Error("Not implemented")}queryFeatureCount(t,r){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(t,r){throw new Error("Not implemented")}highlight(t){throw new Error("Not implemented")}}(0,n._)([(0,o.Cb)()],P.prototype,"sublayer",void 0),(0,n._)([(0,o.Cb)()],P.prototype,"availableFields",null),(0,n._)([(0,o.Cb)()],P.prototype,"filter",null);var B=i(10023),ue=i(87091);const O=g.Z.getLogger("esri.views.3d.layers.BuildingComponentSublayerView3D");let d=class extends((0,ae.l)((0,J.N)(N(P)))){constructor(){super(...arguments),this.type="building-component-sublayer-3d",this.layerView=null,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!1,this.lodFactor=1,this.progressiveLoadFactor=1,this._queryEngine=null}get layerUid(){return this.sublayer.layer.uid}get sublayerUid(){return this.sublayer.uid}initialize(){this.updatingHandles.add(()=>[this.sublayer.renderer,this.definitionExpressionFields,this.filterExpressionFields],()=>this._updateRequiredFields()),this.updatingHandles.add(()=>this.sublayer.renderer,e=>this._rendererChange(e),y.nn),this.updatingHandles.add(()=>[this.parsedDefinitionExpression,this.filter,(0,u.yw)(this._filter,({parsedWhereClause:e,parsedGeometry:t,sortedObjectIds:r})=>[e,t,r])],()=>this._filterChange()),this.updatingHandles.add(()=>this.parsedFilterExpressions,()=>this._updateSymbologyOverride(),y.nn),this.addResolvingPromise(this._updateRequiredFields())}get parsedFilterExpressions(){return"Overview"===this.sublayer.modelName?[]:this.layerView.filterExpressions.map(([e,t])=>{let r;try{r=M.WhereClause.create(e,this.sublayer.fieldsIndex)}catch(a){return O.error("Failed to parse filterExpression: "+a),null}if(!r.isStandardized)return O.error("filterExpression is using non standard function"),null;const s=[];return(0,Q.e8)(r.fieldNames,this.sublayer.fields,{missingFields:s}),s.length>0?(O.error(`filterExpression references unknown fields: ${s.join(", ")}`),null):[r,t]}).filter(e=>null!=e)}get filter(){return(0,u.pC)(this._filter)?this._filter.viewFilter:null}set filter(e){!(0,u.Wi)(e)&&T.z.checkSupport(e)?(0,u.pC)(this._filter)?this._filter.viewFilter=e:this._filter=new T.z({viewFilter:e,layerFieldsIndex:this.sublayer.fieldsIndex,loadAsyncModule:t=>this._loadAsyncModule(t),applyFilters:()=>this._applyFilters(!0),addSqlFilter:(t,r)=>this.addSqlFilter(t,r,this.logError)}):this._filter=null}_updateSymbologyOverride(){const e=this.parsedFilterExpressions;e.length>0?this._setSymbologyOverride((t,r)=>{for(const[s,l]of e)try{if(s.testFeature(t))return j(r,l)}catch(a){this.logError(a)}return j(r,null)},this.filterExpressionFields):this._setSymbologyOverride(null,null)}get filterExpressionFields(){return(0,v.Q0)(this.sublayer.fieldsIndex,this.parsedFilterExpressions.reduce((e,[t])=>e.concat(t.fieldNames),[]))}get availableFields(){const e=this.sublayer,t=e.fieldsIndex;let r=this.requiredFields;if(e.outFields||e.layer.outFields){const s=[...e.outFields||[],...e.layer.outFields||[]];r=[...(0,v.Lk)(t,s),...r]}return(0,v.Q0)(t,r)}_createLayerGraphic(e){const t=new m.Z(null,null,e);return t.layer=this.sublayer.layer,t.sourceLayer=this.sublayer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}fetchPopupFeatures(e,t){var r=this;return(0,b.Z)(function*(){const s=r._validateFetchPopupFeatures(t);if(s)throw s;if((0,u.Wi)(t)||!t.clientGraphics||0===t.clientGraphics.length)return[];const l=[],a=[],ve=(0,u.pC)(r.sublayer.associatedLayer)?yield r.sublayer.associatedLayer.load():r.sublayer,be=(0,v.Lk)(r.sublayer.fieldsIndex,yield(0,B.e)(ve,(0,B.V)(r.sublayer,t))),W=new Set;for(const x of t.clientGraphics)(0,v.Gm)(be,x,W)?a.push(x):l.push(x);return 0===a.length?l:((0,u.pC)(r.sublayer.associatedLayer)&&(yield r.sublayer.associatedLayer.load().catch(()=>O.warn("Failed to load associated feature layer. Displaying popup attributes from cached attributes."))),r.whenGraphicAttributes(a,Array.from(W)).catch(()=>a).then(x=>l.concat(x)))})()}_updateRequiredFields(){var e=this;return(0,b.Z)(function*(){const t=(0,v.Q0)(e.sublayer.fieldsIndex,[...e.sublayer.renderer?yield e.sublayer.renderer.getRequiredFields(e.sublayer.fieldsIndex):[],...e.definitionExpressionFields||[],...e.filterExpressionFields||[]]);e._set("requiredFields",t)})()}_validateFetchPopupFeatures(e){const{sublayer:t}=this,{popupEnabled:r}=t;return r?(0,B.V)(t,e)?void 0:new w.Z("buildingscenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{sublayer:t}):new w.Z("buildingscenelayerview3d:fetchPopupFeatures","Popups are disabled",{sublayer:t})}getFilters(){const e=super.getFilters();return this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),(0,u.pC)(this._filter)&&this._filter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return(0,u.pC)(this.filter)?this.filter.createQuery(e):new G.Z(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),t?.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),t?.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),t?.signal).then(r=>{if(!r?.features)return r;const s=this.sublayer,l=s.layer;for(const a of r.features)a.layer=l,a.sourceLayer=s;return r})}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),t?.signal)}_ensureQueryEngine(){return(0,u.Wi)(this._queryEngine)&&(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=(0,se.gz)(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new ne.u({layerView:this,priority:ue.T8.FEATURE_QUERY_ENGINE,spatialIndex:new oe.I({featureAdapter:new le.u({objectIdField:this.sublayer.objectIdField,attributeStorageInfo:this.sublayer.attributeStorageInfo,getFeatureExtent:e}),toArray:()=>{const t=new Array;return this._forAllFeatures((r,s,l)=>(t.push({id:r,index:s,meta:l}),U.K.CONTINUE),null,U.u.ALL_IN_CLIPPING_AREA),t},forAllFeatures:(t,r)=>this._forAllFeatures((s,l,a)=>t({id:s,index:l,meta:a}),r,U.u.ALL_IN_CLIPPING_AREA),getFeatureExtent:e,sourceSpatialReference:(0,Q.tp)(this.sublayer),viewSpatialReference:this.view.spatialReference})})}_ensureQuery(e){return this._addDefinitionExpressionToQuery((0,u.Wi)(e)?this.createQuery():G.Z.from(e))}};(0,n._)([(0,o.Cb)({aliasOf:"sublayer"})],d.prototype,"i3slayer",void 0),(0,n._)([(0,o.Cb)()],d.prototype,"layerView",void 0),(0,n._)([(0,o.Cb)()],d.prototype,"suspended",void 0),(0,n._)([(0,o.Cb)({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.3dObject.lodFactor"})],d.prototype,"lodFactor",void 0),(0,n._)([(0,o.Cb)({readOnly:!0})],d.prototype,"parsedFilterExpressions",null),(0,n._)([(0,o.Cb)({type:X.Z})],d.prototype,"filter",null),(0,n._)([(0,o.Cb)()],d.prototype,"_filter",void 0),(0,n._)([(0,o.Cb)({type:[String],readOnly:!0})],d.prototype,"filterExpressionFields",null),(0,n._)([(0,o.Cb)({type:[String],readOnly:!0})],d.prototype,"requiredFields",void 0),(0,n._)([(0,o.Cb)({type:[String],readOnly:!0})],d.prototype,"availableFields",null),d=(0,n._)([(0,f.j)("esri.views.3d.layers.BuildingComponentSublayerView3D")],d);const de=d;var ye=i(19702),he=i(41632),pe=i(45611);class D extends pe.Z{constructor(){super(...arguments),this.layer=null,this.sublayerViews=null}highlight(t){throw new Error("Not implemented")}}(0,n._)([(0,o.Cb)()],D.prototype,"layer",void 0),(0,n._)([(0,o.Cb)()],D.prototype,"sublayerViews",void 0);const ce=g.Z.getLogger("esri.views.3d.layers.BuildingSceneLayerView3D"),ge=N(F.Z);let c=class extends((0,ye.A)(D)){constructor(){super(...arguments),this.type="building-scene-3d",this.sublayerViews=new S.Z,this._abortController=new AbortController,this._loadingComponents=0}get filterExpression(){const e=this.layer.activeFilterId,t=null!=e?this.layer.filters.find(s=>s.id===e):null,r=null!=t?t.filterBlocks.find(s=>"solid"===s.filterMode.type):null;return r?r.filterExpression:null}get filterExpressions(){const e=this.layer.activeFilterId,t=null!=e?this.layer.filters.find(r=>r.id===e):null;return t&&t.filterBlocks?t.filterBlocks.toArray().map(r=>[r.filterExpression,te(r)]):[]}get updatingProgressValue(){const e=this.sublayerViews,t=this._loadingComponents+(e?e.length:0);return e.reduce((r,s)=>r+s.updatingProgress,0)/t}isUpdating(){return this._loadingComponents>0||this.sublayerViews&&this.sublayerViews.some(e=>e.updating)}initialize(){(0,Q.Jf)(this.layer.spatialReference,this.view.spatialReference,this.view.viewingMode),this._initializeSubLayerViews(this.layer.sublayers,this)}destroy(){this.sublayerViews&&(this.sublayerViews.forEach(e=>e.destroy()),this.sublayerViews=null),this._abortController.abort(),this._abortController=null}_initializeSubLayerViews(e,t){const r=this,s=this.view;e.forEach(l=>{if(!l.isEmpty)if("building-group"===l.type){const a=new ge({sublayer:l,view:s,parent:t});this._initializeSubLayerViews(l.sublayers,a)}else"mesh"===l.geometryType&&(this._loadingComponents++,l.load({signal:this._abortController.signal}).then(()=>{const a=new de({sublayer:l,layerView:r,view:s,parent:t});this.sublayerViews.push(a),this.handles.add([(0,y.YP)(()=>a.updating,()=>this.notifyChange("updating"),y.tX),(0,y.YP)(()=>a.updatingProgress,()=>this.notifyChange("updatingProgressValue"),y.tX)])}).catch(a=>{(0,h.D_)(a)||ce.error(`Error while creating view for sublayer ${l.id}\nLayer: ${this.layer.url}\n`,a)}).then(()=>{this._loadingComponents--,this.notifyChange("updating"),this.notifyChange("updatingProgressValue")}))})}getGraphicFromIntersectorTarget(e){for(const t of this.sublayerViews.items)if(t.sublayer.uid===e.sublayerUid)return t.getGraphicFromIntersectorTarget(e);return null}fetchPopupFeatures(e,t){var r=this;return(0,b.Z)(function*(){if((0,u.Wi)(t)||!t.clientGraphics||0===t.clientGraphics.length)return;const s=r._findComponent(t.clientGraphics[0].sourceLayer);return(0,u.Wi)(s)?void 0:s.fetchPopupFeatures(e,t)})()}whenGraphicBounds(e){const t=this._findComponent(e.sourceLayer);return(0,u.Wi)(t)?Promise.reject():t.whenGraphicBounds(e)}getAABBFromIntersectorTarget(e){for(const t of this.sublayerViews.items)if(t.sublayer.uid===e.sublayerUid)return t.getAABBFromIntersectorTarget(e);return null}_findComponent(e){return this.sublayerViews.find(t=>e===t.sublayer)}highlight(e){e instanceof m.Z?e=[e]:e instanceof S.Z&&(e=e.toArray());const t=[];if(Array.isArray(e)&&e.length>0&&e[0]instanceof m.Z){const r=e,s=new Map;for(const l of r){let a=s.get(l.sourceLayer);null==a&&(a=[],s.set(l.sourceLayer,a)),a.push(l)}this.sublayerViews.forEach(l=>{const a=s.get(l.sublayer);a&&t.push(l.highlight(a))})}return(0,E.AL)(t)}getUsedMemory(){return this.sublayerViews.reduce((e,t)=>e+t.getUsedMemory(),0)}getUnloadedMemory(){return this.sublayerViews.reduce((e,t)=>e+t.getUnloadedMemory(),0)}ignoresMemoryFactor(){return!1}};(0,n._)([(0,o.Cb)()],c.prototype,"sublayerViews",void 0),(0,n._)([(0,o.Cb)({readOnly:!0})],c.prototype,"filterExpression",null),(0,n._)([(0,o.Cb)({readOnly:!0})],c.prototype,"filterExpressions",null),(0,n._)([(0,o.Cb)(he.q)],c.prototype,"updatingProgress",void 0),(0,n._)([(0,o.Cb)({readOnly:!0,dependsOn:[]})],c.prototype,"updatingProgressValue",null),c=(0,n._)([(0,f.j)("esri.views.3d.layers.BuildingSceneLayerView3D")],c);const fe=c}}]);