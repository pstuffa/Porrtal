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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[6269],{36592:(Y,A,h)=>{h.d(A,{Q:()=>D});var P=h(85931),E=h(62208),S=h(77029),O=h(14259);class D{constructor(e=9,o){this._compareMinX=I,this._compareMinY=l,this._toBBox=n=>n,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),o&&("function"==typeof o?this._toBBox=o:this._initFormat(o)),this.clear()}destroy(){this.clear(),j.prune(),W.prune(),x.prune(),U.prune()}all(e){this._all(this._data,e)}search(e,o){let n=this._data;const a=this._toBBox;if(R(e,n))for(j.clear();n;){for(let t=0,s=n.children.length;t<s;t++){const i=n.children[t],r=n.leaf?a(i):i;R(e,r)&&(n.leaf?o(i):C(e,r)?this._all(i,o):j.push(i))}n=j.pop()}}collides(e){let o=this._data;const n=this._toBBox;if(!R(e,o))return!1;for(j.clear();o;){for(let a=0,t=o.children.length;a<t;a++){const s=o.children[a],i=o.leaf?n(s):s;if(R(e,i)){if(o.leaf||C(e,i))return!0;j.push(s)}}o=j.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let n=0,a=e.length;n<a;n++)this.insert(e[n]);return this}let o=this._build(e.slice(0,e.length),0,e.length-1,0);if(this._data.children.length)if(this._data.height===o.height)this._splitRoot(this._data,o);else{if(this._data.height<o.height){const n=this._data;this._data=o,o=n}this._insert(o,this._data.height-o.height-1,!0)}else this._data=o;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new T([]),this}remove(e){if(!e)return this;let o,n=this._data,a=null,t=0,s=!1;const i=this._toBBox(e);for(x.clear(),U.clear();n||x.length>0;){if(n||(n=(0,E.j0)(x.pop()),a=x.data[x.length-1],t=U.pop()??0,s=!0),n.leaf&&(o=(0,P.cq)(n.children,e,n.children.length,n.indexHint),-1!==o))return n.children.splice(o,1),x.push(n),this._condense(x),this;s||n.leaf||!C(n,i)?a?(t++,n=a.children[t],s=!1):n=null:(x.push(n),U.push(t),t=0,a=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_all(e,o){let n=e;for(W.clear();n;){if(!0===n.leaf)for(const a of n.children)o(a);else W.pushArray(n.children);n=W.pop()??null}}_build(e,o,n,a){const t=n-o+1;let s=this._maxEntries;if(t<=s){const c=new T(e.slice(o,n+1));return y(c,this._toBBox),c}a||(a=Math.ceil(Math.log(t)/Math.log(s)),s=Math.ceil(t/s**(a-1)));const i=new b([]);i.height=a;const r=Math.ceil(t/s),u=r*Math.ceil(Math.sqrt(s));X(e,o,n,u,this._compareMinX);for(let c=o;c<=n;c+=u){const g=Math.min(c+u-1,n);X(e,c,g,r,this._compareMinY);for(let M=c;M<=g;M+=r){const L=Math.min(M+r-1,g);i.children.push(this._build(e,M,L,a-1))}}return y(i,this._toBBox),i}_chooseSubtree(e,o,n,a){for(;a.push(o),!0!==o.leaf&&a.length-1!==n;){let t,s=1/0,i=1/0;for(let r=0,u=o.children.length;r<u;r++){const c=o.children[r],g=f(c),M=p(e,c)-g;M<i?(i=M,s=g<s?g:s,t=c):M===i&&g<s&&(s=g,t=c)}o=t||o.children[0]}return o}_insert(e,o,n){const t=n?e:(0,this._toBBox)(e);x.clear();const s=this._chooseSubtree(t,this._data,o,x);for(s.children.push(e),v(s,t);o>=0&&x.data[o].children.length>this._maxEntries;)this._split(x,o),o--;this._adjustParentBBoxes(t,x,o)}_split(e,o){const n=e.data[o],a=n.children.length,t=this._minEntries;this._chooseSplitAxis(n,t,a);const s=this._chooseSplitIndex(n,t,a);if(!s)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const i=n.children.splice(s,n.children.length-s),r=n.leaf?new T(i):new b(i);r.height=n.height,y(n,this._toBBox),y(r,this._toBBox),o?e.data[o-1].children.push(r):this._splitRoot(n,r)}_splitRoot(e,o){this._data=new b([e,o]),this._data.height=e.height+1,y(this._data,this._toBBox)}_chooseSplitIndex(e,o,n){let a,t,s;a=t=1/0;for(let i=o;i<=n-o;i++){const r=m(e,0,i,this._toBBox),u=m(e,i,n,this._toBBox),c=B(r,u),g=f(r)+f(u);c<a?(a=c,s=i,t=g<t?g:t):c===a&&g<t&&(t=g,s=i)}return s}_chooseSplitAxis(e,o,n){const a=e.leaf?this._compareMinX:I,t=e.leaf?this._compareMinY:l;this._allDistMargin(e,o,n,a)<this._allDistMargin(e,o,n,t)&&e.children.sort(a)}_allDistMargin(e,o,n,a){e.children.sort(a);const t=this._toBBox,s=m(e,0,o,t),i=m(e,n-o,n,t);let r=d(s)+d(i);for(let u=o;u<n-o;u++){const c=e.children[u];v(s,e.leaf?t(c):c),r+=d(s)}for(let u=n-o-1;u>=o;u--){const c=e.children[u];v(i,e.leaf?t(c):c),r+=d(i)}return r}_adjustParentBBoxes(e,o,n){for(let a=n;a>=0;a--)v(o.data[a],e)}_condense(e){for(let o=e.length-1;o>=0;o--){const n=e.data[o];if(0===n.children.length)if(o>0){const a=e.data[o-1],t=a.children;t.splice((0,P.cq)(t,n,t.length,a.indexHint),1)}else this.clear();else y(n,this._toBBox)}}_initFormat(e){const o=["return a"," - b",";"];this._compareMinX=new Function("a","b",o.join(e[0])),this._compareMinY=new Function("a","b",o.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function y(_,e){m(_,0,_.children.length,e,_)}function m(_,e,o,n,a){a||(a=new T([])),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(let t,s=e;s<o;s++)t=_.children[s],v(a,_.leaf?n(t):t);return a}function v(_,e){_.minX=Math.min(_.minX,e.minX),_.minY=Math.min(_.minY,e.minY),_.maxX=Math.max(_.maxX,e.maxX),_.maxY=Math.max(_.maxY,e.maxY)}function I(_,e){return _.minX-e.minX}function l(_,e){return _.minY-e.minY}function f(_){return(_.maxX-_.minX)*(_.maxY-_.minY)}function d(_){return _.maxX-_.minX+(_.maxY-_.minY)}function p(_,e){return(Math.max(e.maxX,_.maxX)-Math.min(e.minX,_.minX))*(Math.max(e.maxY,_.maxY)-Math.min(e.minY,_.minY))}function B(_,e){const o=Math.max(_.minX,e.minX),n=Math.max(_.minY,e.minY),a=Math.min(_.maxX,e.maxX),t=Math.min(_.maxY,e.maxY);return Math.max(0,a-o)*Math.max(0,t-n)}function C(_,e){return _.minX<=e.minX&&_.minY<=e.minY&&e.maxX<=_.maxX&&e.maxY<=_.maxY}function R(_,e){return e.minX<=_.maxX&&e.minY<=_.maxY&&e.maxX>=_.minX&&e.maxY>=_.minY}function X(_,e,o,n,a){const t=[e,o];for(;t.length;){const s=(0,E.j0)(t.pop()),i=(0,E.j0)(t.pop());if(s-i<=n)continue;const r=i+Math.ceil((s-i)/n/2)*n;(0,O.q)(_,r,i,s,a),t.push(i,r,r,s)}}const j=new S.Z,W=new S.Z,x=new S.Z,U=new S.Z({deallocator:void 0});class F{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class K extends F{constructor(){super(...arguments),this.height=1,this.indexHint=new P.SO}}class T extends K{constructor(e){super(),this.children=e,this.leaf=!0}}class b extends K{constructor(e){super(),this.children=e,this.leaf=!1}}},61256:(Y,A,h)=>{h.d(A,{H:()=>v});var P=h(8314),E=h(36592),S=h(65401);const D={minX:0,minY:0,maxX:0,maxY:0};class v{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new E.Q(9,(0,P.Z)("esri-csp-restrictions")?l=>({minX:l[0],minY:l[1],maxX:l[2],maxY:l[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const l=new Array(this._idByBounds.size);let f=0;this._idByBounds.forEach((d,p)=>{l[f++]=p}),this._indexInvalid=!1,this._index.clear(),this._index.load(l)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter(l=>this._idByBounds.has(l))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const l=(0,S.cS)();for(const f of this._boundsById.values())f&&(l[0]=Math.min(f[0],l[0]),l[1]=Math.min(f[1],l[1]),l[2]=Math.max(f[2],l[2]),l[3]=Math.max(f[3],l[3]));return l}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(l){const f=this._boundsById.get(l);this._boundsById.delete(l),f&&(this._idByBounds.delete(f),this._indexInvalid||this._index.remove(f))}forEachInBounds(l,f){this._loadIndex(),function m(I,l,f){(function y(I){D.minX=I[0],D.minY=I[1],D.maxX=I[2],D.maxY=I[3]})(l),I.search(D,f)}(this._index,l,d=>f(this._idByBounds.get(d)))}get(l){return this._boundsById.get(l)}has(l){return this._boundsById.has(l)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(l,f){if(!this._indexInvalid){const d=this._boundsById.get(l);d&&(this._index.remove(d),this._idByBounds.delete(d))}this._boundsById.set(l,f),f&&(this._idByBounds.set(f,l),this._indexInvalid||(this._boundsToLoad.push(f),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},3579:(Y,A,h)=>{h.d(A,{Z:()=>l});var P=h(26584),E=h(61885),S=h(63290),O=h(62208),D=h(5548),y=h(65401),m=h(82054),v=h(61256),I=h(92794);class l{constructor(d){this.geometryInfo=d,this._boundsStore=new v.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new E.Z,this.featureAdapter=I.n}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let d=0;return this._featuresById.forEach(p=>{(0,O.pC)(p.geometry)&&p.geometry.coords&&(d+=p.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:d/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(d){this._add(d),this._emitChanged()}addMany(d){for(const p of d)this._add(p);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(d){const p=this._featuresById.get(d);return p?(this._remove(p),this._emitChanged(),p):null}removeManyById(d){this._boundsStore.invalidateIndex();for(const p of d){const B=this._featuresById.get(p);B&&this._remove(B)}this._emitChanged()}forEachBounds(d,p,B){for(const C of d){const R=this._boundsStore.get(C.objectId);R&&p((0,D.JR)(B,R))}}getFeature(d){return this._featuresById.get(d)}has(d){return this._featuresById.has(d)}toArray(){return Array.from(this._featuresById.values())}forEach(d){this._featuresById.forEach(p=>d(p))}forEachInBounds(d,p){this._boundsStore.forEachInBounds(d,B=>{p(this._featuresById.get(B))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let d=!1;this._featuresById.forEach((p,B)=>{this._markedIds.has(B)||(d=!0,this._remove(p))}),this._markedIds.clear(),d&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(d){if(!d)return;const p=d.objectId;if(null==p)return void S.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new P.Z("featurestore:invalid-feature","feature id is missing",{feature:d}));const B=this._featuresById.get(p);let C;if(this._markedIds.add(p),B?(d.displayId=B.displayId,C=this._boundsStore.get(p),this._boundsStore.delete(p)):(0,O.pC)(this.onFeatureAdd)&&this.onFeatureAdd(d),(0,O.Wi)(d.geometry)||!d.geometry.coords||!d.geometry.coords.length)return this._boundsStore.set(p,null),void this._featuresById.set(p,d);C=(0,m.$)((0,O.pC)(C)?C:(0,y.Ue)(),d.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,O.pC)(C)&&this._boundsStore.set(p,C),this._featuresById.set(p,d)}_remove(d){return(0,O.pC)(this.onFeatureRemove)&&this.onFeatureRemove(d),this._markedIds.delete(d.objectId),this._boundsStore.delete(d.objectId),this._featuresById.delete(d.objectId),d}}},92794:(Y,A,h)=>{h.d(A,{n:()=>D});var P=h(62208),E=h(77044),S=h(66385),O=h(88071);const D={getObjectId:y=>y.objectId,getAttributes:y=>y.attributes,getAttribute:(y,m)=>y.attributes[m],cloneWithGeometry:(y,m)=>new S.u_(m,y.attributes,null,y.objectId),getGeometry:y=>y.geometry,getCentroid:(y,m)=>((0,P.Wi)(y.centroid)&&(y.centroid=(0,E.Y)(new O.Z,y.geometry,m.hasZ,m.hasM)),y.centroid)}},66269:(Y,A,h)=>{h.r(A),h.d(A,{GraphicsSnappingSource:()=>n});var P=h(15861),E=h(17626),S=h(14517),O=h(85931),D=h(59213),y=h(80542),m=h(62208),v=h(10699),I=h(32917),l=h(77712),d=(h(90912),h(76898)),p=h(37118),B=h(55915),C=h(65629),R=h(71774),X=h(82054),j=h(66385),W=h(3579),x=h(58175),U=h(60507),F=h(86606),K=h(44725),T=h(4257),b=h(17936),_=h(1520),e=h(83010);const o="graphics-collections";let n=class extends((0,y.p)(S.Z)){constructor(t){super(t),this.availability=1,this._sources={multipoint:null,point:null,polygon:null,polyline:null},this._loadedWkids=new Set,this._loadedWkts=new Set,this._pendingAdds=[],this._extrudedPolygonSymbolsCount=0}get updating(){return this.updatingHandles.updating}get _hasZ(){const t=this.view;return(0,m.pC)(t)&&"3d"===t.type&&"map-notes"!==this.layerSource.layer.type}get _snappingElevationAligner(){const{view:t}=this,{layer:s}=this.layerSource,i=(0,m.pC)(t)&&"3d"===t.type;if(!i||"map-notes"===s.type)return(0,b.p)();const r=function(){var u=(0,P.Z)(function*(c,g){return(yield(0,v.Hl)(t.whenLayerView(s),g)).elevationAlignPointsInFeatures(c,g)});return function(g,M){return u.apply(this,arguments)}}();return(0,b.p)(i,{elevationInfo:s.elevationInfo,alignPointsInFeatures:r,spatialReference:t.spatialReference})}get _snappingElevationFilter(){const{view:t}=this,s=(0,m.pC)(t)&&"3d"===t.type&&"map-notes"!==this.layerSource.layer.type;return(0,_.c)(s)}get _symbologySnappingFetcher(){const{view:t}=this,{layer:s}=this.layerSource,i=(0,m.pC)(t)&&"3d"===t.type,r=this._extrudedPolygonSymbolsCount>0;return i&&"map-notes"!==s.type&&r?(0,e.k)(r,function(){var u=(0,P.Z)(function*(c,g){const M=yield t.whenLayerView(s);return(0,v.k_)(g),M.queryForSymbologySnapping({candidates:c,spatialReference:t.spatialReference},g)});return function(c,g){return u.apply(this,arguments)}}()):(0,e.k)()}destroy(){for(const t of this._pendingAdds)t.task.abort();this._pendingAdds.length=0,this._mapSources(t=>this._destroySource(t))}initialize(){this.updatingHandles.add(()=>this.getGraphicsLayers(),i=>{this.updatingHandles.removeHandles(o);for(const r of i)this._addMany(r.graphics.toArray()),this.handles.add([r.on("graphic-update",u=>this._onGraphicUpdate(u)),this.updatingHandles.addOnCollectionChange(()=>r.graphics,u=>this._onGraphicsChanged(u))],o)},I.nn);const{view:t}=this,{layer:s}=this.layerSource;(0,m.pC)(t)&&"3d"===t.type&&"map-notes"!==s.type&&this.addHandles([t.elevationProvider.on("elevation-change",({context:i})=>{(0,U.W_)(i,s.elevationInfo)&&this._snappingElevationAligner.notifyElevationSourceChange()}),(0,I.YP)(()=>s.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),I.nn)])}fetchCandidates(t,s){var i=this;return(0,P.Z)(function*(){const{point:r,coordinateHelper:u,elevationInfo:c}=t,g=yield(0,v.WW)(i._mapSources(Z=>i._fetchCandidatesForSource(Z,t,s)));(0,v.k_)(s);const M=u.hasZ()?U.jG:c,L=i._getGroundElevation,w=g.flat().map(Z=>(0,T.X)(Z,u,M,L));return(0,K.lQ)(r,w,u),w})()}get _getGroundElevation(){return(0,T.g)(this.view)}_fetchCandidatesForSource(t,s,i){var r=this;return(0,P.Z)(function*(){const u=(0,K.rh)(s),c=yield t.queryEngine.executeQueryForSnapping(u,i);(0,v.k_)(i);const g=yield r._snappingElevationAligner.alignCandidates(c.candidates,i);(0,v.k_)(i);const M=yield r._symbologySnappingFetcher.fetch(g,i);(0,v.k_)(i);const L=0===M.length?g:[...g,...M];return r._snappingElevationFilter.filter(u,L)})()}refresh(){}_onGraphicUpdate(t){if(this.getGraphicsLayers().some(s=>s.graphics.includes(t.graphic)))switch(t.property){case"geometry":case"visible":this._remove(t.graphic),this._addMany([t.graphic])}}_onGraphicsChanged(t){for(const s of t.removed)this._remove(s);this._addMany(t.added)}_addMany(t){const s=[],i=new Map;for(const r of t)(0,m.Wi)(r.geometry)||(this._needsInitializeProjection(r.geometry.spatialReference)?(s.push(r.geometry.spatialReference),i.set(r.uid,r)):this._add(r));this._createPendingAdd(s,i)}_createPendingAdd(t,s){var i=this;if(!t.length)return;const r=(0,D.vr)(function(){var g=(0,P.Z)(function*(M){yield(0,B.iQ)(t.map(L=>({source:L,dest:i.spatialReference})),{signal:M}),i._markLoadedSpatialReferences(t);for(const[,L]of s)i._add(L)});return function(M){return g.apply(this,arguments)}}());this.updatingHandles.addPromise(r.promise);const u={task:r,graphics:s},c=()=>(0,O.e$)(this._pendingAdds,u);r.promise.then(c,c),this._pendingAdds.push(u)}_markLoadedSpatialReferences(t){for(const s of t)null!=s.wkid&&this._loadedWkids.add(s.wkid),null!=s.wkt&&this._loadedWkts.add(s.wkt)}_add(t){if((0,m.Wi)(t.geometry)||!t.visible)return;let s=t.geometry;if("mesh"===s.type)return;"extent"===s.type&&(s=p.Z.fromExtent(s));const i=this._ensureSource(s.type);if((0,m.Wi)(i))return;const r=this._createOptimizedFeature(t.uid,s);(0,m.Wi)(r)||(i.featureStore.add(r),(0,F.QL)(t.symbol)&&this._extrudedPolygonSymbolsCount++)}_needsInitializeProjection(t){return!(null!=t.wkid&&this._loadedWkids.has(t.wkid)||null!=t.wkt&&this._loadedWkts.has(t.wkt)||(0,B.Up)(t,this.spatialReference))}_createOptimizedFeature(t,s){const i=(0,B.iV)((0,C.SR)(s),this.spatialReference);if(!i)return null;const r=this._ensureGeometryHasZ(i),u=(0,X.GH)(r,this._hasZ,!1);return new j.u_(u,{[a]:t},null,t)}_ensureGeometryHasZ(t){if(!this._hasZ)return t;const s=r=>{for(;r.length<3;)r.push(0)},i=t.clone();switch(i.hasZ=!0,i.type){case"point":i.z=i.z??0;break;case"multipoint":i.points.forEach(s);break;case"polyline":i.paths.forEach(r=>r.forEach(s));break;case"polygon":i.rings.forEach(r=>r.forEach(s))}return i}_ensureSource(t){const s=this._sources[t];if((0,m.pC)(s))return s;const i=this._createSource(t);return this._sources[t]=i,i}_createSource(t){const s=R.Mk.toJSON(t),i=this._hasZ,r=new W.Z({geometryType:s,hasZ:i,hasM:!1});return{featureStore:r,queryEngine:new x.q({featureStore:r,fields:[{name:a,type:"esriFieldTypeOID",alias:a}],geometryType:s,hasM:!1,hasZ:i,objectIdField:a,spatialReference:this.spatialReference,scheduler:(0,m.pC)(this.view)&&"3d"===this.view.type?this.view.resourceController.scheduler:null}),type:t}}_remove(t){this._mapSources(s=>this._removeFromSource(s,t));for(const s of this._pendingAdds)s.graphics.delete(t.uid),0===s.graphics.size&&s.task.abort()}_removeFromSource(t,s){t.featureStore.has(s.uid)&&(t.featureStore.removeById(s.uid),(0,F.QL)(s.symbol)&&this._extrudedPolygonSymbolsCount--)}_destroySource(t){t.queryEngine.destroy(),this._sources[t.type]=null}_mapSources(t){const{point:s,polygon:i,polyline:r,multipoint:u}=this._sources,c=[];return(0,m.pC)(s)&&c.push(t(s)),(0,m.pC)(i)&&c.push(t(i)),(0,m.pC)(r)&&c.push(t(r)),(0,m.pC)(u)&&c.push(t(u)),c}};(0,E._)([(0,l.Cb)()],n.prototype,"getGraphicsLayers",void 0),(0,E._)([(0,l.Cb)({constructOnly:!0})],n.prototype,"layerSource",void 0),(0,E._)([(0,l.Cb)({constructOnly:!0})],n.prototype,"spatialReference",void 0),(0,E._)([(0,l.Cb)({constructOnly:!0})],n.prototype,"view",void 0),(0,E._)([(0,l.Cb)({readOnly:!0})],n.prototype,"updating",null),(0,E._)([(0,l.Cb)({readOnly:!0})],n.prototype,"availability",void 0),(0,E._)([(0,l.Cb)()],n.prototype,"_hasZ",null),(0,E._)([(0,l.Cb)()],n.prototype,"_snappingElevationAligner",null),(0,E._)([(0,l.Cb)()],n.prototype,"_snappingElevationFilter",null),(0,E._)([(0,l.Cb)()],n.prototype,"_symbologySnappingFetcher",null),(0,E._)([(0,l.Cb)()],n.prototype,"_extrudedPolygonSymbolsCount",void 0),(0,E._)([(0,l.Cb)()],n.prototype,"_getGroundElevation",null),n=(0,E._)([(0,d.j)("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],n);const a="OBJECTID"}}]);