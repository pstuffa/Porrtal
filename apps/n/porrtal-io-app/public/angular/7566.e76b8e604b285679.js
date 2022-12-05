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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[7566],{57566:(P,S,i)=>{i.r(S),i.d(S,{SceneLayerSnappingSource:()=>p});var c=i(15861),s=i(17626),L=i(14517),y=i(62208),C=i(10699),a=i(77712),g=(i(85931),i(90912),i(76898)),w=i(80542),m=i(54024),b=i(14171),k=i(28093),I=i(42930),E=i(97126),H=i(60507),Z=i(75897),O=i(70211);let h=class extends w.r{constructor(e){super(e),this.availability=0,this._ids=new Set,this._tmpP=(0,k.c)()}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new V(this.schedule,{fetchAllEdgeLocations:(e,t)=>this._fetchAllEdgeLocations(e,t)})}fetchCandidates(e,t){var r=this;return(0,c.Z)(function*(){const n=e.coordinateHelper,o=n.toXYZ(e.point);r.renderCoordsHelper.toRenderCoords(o,n.spatialReference,o);const d=e.distance,v="number"==typeof d?d:d.distance,u=yield r._workerHandle.invoke({bounds:(0,E.f)(o[0],o[1],o[2],v),types:e.types},t);return u.candidates.sort((f,j)=>f.distance-j.distance),u.candidates.map(f=>r._convertCandidate(n,f))})()}add(e,t){var r=this;return(0,c.Z)(function*(){r._ids.add(e.id),yield r._workerHandle.invokeMethod("add",e,t)})()}remove(e,t){var r=this;return(0,c.Z)(function*(){r._ids.delete(e.id),yield r._workerHandle.invokeMethod("remove",e,t)})()}_convertCandidate(e,t){switch(t.type){case"edge":return new Z.L({coordinateHelper:e,objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),elevationInfo:H.jG});case"vertex":return new O.x({coordinateHelper:e,objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),elevationInfo:H.jG})}}_convertRenderCoordinate(e,t){return this.renderCoordsHelper.fromRenderCoords(t,this._tmpP,e.spatialReference),e.fromXYZ(this._tmpP)}_fetchAllEdgeLocations(e,t){var r=this;return(0,c.Z)(function*(){const n=[],o=[];for(const{id:d,uid:v}of e.components)r._ids.has(d)&&n.push((0,c.Z)(function*(){const u=yield r.fetchEdgeLocations(d,t.signal);return o.push(u.locations.buffer),{id:d,uid:v,objectIds:u.objectIds,locations:u.locations.buffer,origin:u.origin,type:u.type}})());return{result:{components:(yield Promise.all(n)).filter(({id:d})=>r._ids.has(d))},transferList:o}})()}};(0,s._)([(0,a.Cb)({constructOnly:!0})],h.prototype,"renderCoordsHelper",void 0),(0,s._)([(0,a.Cb)({constructOnly:!0})],h.prototype,"fetchEdgeLocations",void 0),(0,s._)([(0,a.Cb)({constructOnly:!0})],h.prototype,"schedule",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],h.prototype,"availability",void 0),h=(0,s._)([(0,g.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],h);class V extends I.q{constructor(t,r){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated",client:r})}}let l=class extends w.r{constructor(e){super(e),this.availability=1,this._abortController=new AbortController}get updating(){return this.updatingHandles.updating}destroy(){this._tracker=(0,y.hw)(this._tracker),this._abortController=(0,y.IM)(this._abortController)}initialize(){var e=this;const{view:t}=this,r=t.resourceController;var n;this._edgeWorker=new b.D(n=>r.schedule(n)),this._workerHandle=new h({renderCoordsHelper:this.view.renderCoordsHelper,schedule:n=>r.schedule(n),fetchEdgeLocations:(n=(0,c.Z)(function*(o,d){if((0,y.Wi)(e._tracker))throw new Error("tracker-not-initialized");return e._tracker.fetchEdgeLocations(o,e._edgeWorker,d)}),function(d,v){return n.apply(this,arguments)})}),this.updatingHandles.addPromise(this._setupLayerView()),this.handles.add([(0,m.ed)(this._workerHandle),(0,m.ed)(this._edgeWorker)])}fetchCandidates(e,t){var r=this;return(0,c.Z)(function*(){return r._workerHandle.fetchCandidates(e,t)})()}refresh(){}_setupLayerView(){var e=this;return(0,c.Z)(function*(){if(e.destroyed)return;const t=(0,y.yw)(e._abortController,n=>n.signal),r=yield e.getLayerView();(0,y.Wi)(r)||(0,C.Hc)(t)||(e._tracker=r.trackSnappingSources({add:(n,o)=>{e.updatingHandles.addPromise(e._workerHandle.add({id:n,bounds:o},t))},remove:n=>{e.updatingHandles.addPromise(e._workerHandle.remove({id:n},t))}}))})()}};(0,s._)([(0,a.Cb)({constructOnly:!0})],l.prototype,"getLayerView",void 0),(0,s._)([(0,a.Cb)({constructOnly:!0})],l.prototype,"view",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],l.prototype,"updating",null),(0,s._)([(0,a.Cb)({readOnly:!0})],l.prototype,"availability",void 0),l=(0,s._)([(0,g.j)("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],l);let p=class extends L.Z{constructor(e){super(e),this.availability=1,this._i3sSources=[]}get updating(){return this._i3sSources.some(e=>e.updating)}destroy(){this._i3sSources.forEach(e=>e.destroy()),this._i3sSources.length=0}initialize(){const{view:e}=this,t=this.layerSource.layer;this._i3sSources="building-scene"===t.type?this._getBuildingSceneI3SSources(e,t):[this._getSceneLayerI3SSource(e,t)]}fetchCandidates(e,t){var r=this;return(0,c.Z)(function*(){const n=yield Promise.all(r._i3sSources.map(o=>o.fetchCandidates(e,t)));return(0,C.k_)(t),n.flat()})()}refresh(){this._i3sSources.forEach(e=>e.refresh())}_getBuildingSceneI3SSources(e,t){return t.allSublayers.toArray().map(r=>{return"building-component"===r.type?new l({getLayerView:(n=(0,c.Z)(function*(){return(yield e.whenLayerView(t)).whenSublayerView(r)}),function(){return n.apply(this,arguments)}),view:e}):null;var n}).filter(y.pC)}_getSceneLayerI3SSource(e,t){return new l({getLayerView:(r=(0,c.Z)(function*(){const n=yield e.whenLayerView(t);return"scene-layer-graphics-3d"===n.type?void 0:n}),function(){return r.apply(this,arguments)}),view:e});var r}};(0,s._)([(0,a.Cb)({constructOnly:!0})],p.prototype,"layerSource",void 0),(0,s._)([(0,a.Cb)({constructOnly:!0})],p.prototype,"view",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],p.prototype,"updating",null),(0,s._)([(0,a.Cb)({readOnly:!0})],p.prototype,"availability",void 0),p=(0,s._)([(0,g.j)("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],p)}}]);