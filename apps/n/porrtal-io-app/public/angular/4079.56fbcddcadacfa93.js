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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[4079],{36592:(Q,A,c)=>{c.d(A,{Q:()=>C});var O=c(85931),S=c(62208),b=c(77029),v=c(14259);class C{constructor(t=9,i){this.compareMinX=D,this.compareMinY=f,this._toBBox=r=>r,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this._toBBox=i:this._initFormat(i)),this.clear()}destroy(){this.clear(),Z.prune(),w.prune(),R.prune(),X.prune()}all(t){this._all(this.data,t)}search(t,i){let r=this.data;const u=this._toBBox;if(L(t,r))for(Z.clear();r;){for(let e=0,n=r.children.length;e<n;e++){const s=r.children[e],a=r.leaf?u(s):s;L(t,a)&&(r.leaf?i(s):M(t,a)?this._all(s,i):Z.push(s))}r=Z.pop()}}collides(t){let i=this.data;const r=this._toBBox;if(!L(t,i))return!1;for(Z.clear();i;){for(let u=0,e=i.children.length;u<e;u++){const n=i.children[u],s=i.leaf?r(n):n;if(L(t,s)){if(i.leaf||M(t,s))return!0;Z.push(n)}}i=Z.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let r=0,u=t.length;r<u;r++)this.insert(t[r]);return this}let i=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){const r=this.data;this.data=i,i=r}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new l([]),this}remove(t){if(!t)return this;let i,r=this.data,u=null,e=0,n=!1;const s=this._toBBox(t);for(R.clear(),X.clear();r||R.length>0;){if(r||(r=(0,S.j0)(R.pop()),u=R.data[R.length-1],e=X.pop()??0,n=!0),r.leaf&&(i=(0,O.cq)(r.children,t,r.children.length,r.indexHint),-1!==i))return r.children.splice(i,1),R.push(r),this._condense(R),this;n||r.leaf||!M(r,s)?u?(e++,r=u.children[e],n=!1):r=null:(R.push(r),X.push(e),e=0,u=r,r=r.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,i){let r=t;for(w.clear();r;){if(!0===r.leaf)for(const u of r.children)i(u);else w.pushArray(r.children);r=w.pop()??null}}_build(t,i,r,u){const e=r-i+1;let n=this._maxEntries;if(e<=n){const I=new l(t.slice(i,r+1));return E(I,this._toBBox),I}u||(u=Math.ceil(Math.log(e)/Math.log(n)),n=Math.ceil(e/n**(u-1)));const s=new m([]);s.height=u;const a=Math.ceil(e/n),y=a*Math.ceil(Math.sqrt(n));z(t,i,r,y,this.compareMinX);for(let I=i;I<=r;I+=y){const T=Math.min(I+y-1,r);z(t,I,T,a,this.compareMinY);for(let x=I;x<=T;x+=a){const U=Math.min(x+a-1,T);s.children.push(this._build(t,x,U,u-1))}}return E(s,this._toBBox),s}_chooseSubtree(t,i,r,u){for(;u.push(i),!0!==i.leaf&&u.length-1!==r;){let e,n=1/0,s=1/0;for(let a=0,y=i.children.length;a<y;a++){const I=i.children[a],T=p(I),x=g(t,I)-T;x<s?(s=x,n=T<n?T:n,e=I):x===s&&T<n&&(n=T,e=I)}i=e||i.children[0]}return i}_insert(t,i,r){const e=r?t:(0,this._toBBox)(t);R.clear();const n=this._chooseSubtree(e,this.data,i,R);for(n.children.push(t),F(n,e);i>=0&&R.data[i].children.length>this._maxEntries;)this._split(R,i),i--;this._adjustParentBBoxes(e,R,i)}_split(t,i){const r=t.data[i],u=r.children.length,e=this._minEntries;this._chooseSplitAxis(r,e,u);const n=this._chooseSplitIndex(r,e,u);if(!n)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const s=r.children.splice(n,r.children.length-n),a=r.leaf?new l(s):new m(s);a.height=r.height,E(r,this._toBBox),E(a,this._toBBox),i?t.data[i-1].children.push(a):this._splitRoot(r,a)}_splitRoot(t,i){this.data=new m([t,i]),this.data.height=t.height+1,E(this.data,this._toBBox)}_chooseSplitIndex(t,i,r){let u,e,n;u=e=1/0;for(let s=i;s<=r-i;s++){const a=P(t,0,s,this._toBBox),y=P(t,s,r,this._toBBox),I=j(a,y),T=p(a)+p(y);I<u?(u=I,n=s,e=T<e?T:e):I===u&&T<e&&(e=T,n=s)}return n}_chooseSplitAxis(t,i,r){const u=t.leaf?this.compareMinX:D,e=t.leaf?this.compareMinY:f;this._allDistMargin(t,i,r,u)<this._allDistMargin(t,i,r,e)&&t.children.sort(u)}_allDistMargin(t,i,r,u){t.children.sort(u);const e=this._toBBox,n=P(t,0,i,e),s=P(t,r-i,r,e);let a=d(n)+d(s);for(let y=i;y<r-i;y++){const I=t.children[y];F(n,t.leaf?e(I):I),a+=d(n)}for(let y=r-i-1;y>=i;y--){const I=t.children[y];F(s,t.leaf?e(I):I),a+=d(s)}return a}_adjustParentBBoxes(t,i,r){for(let u=r;u>=0;u--)F(i.data[u],t)}_condense(t){for(let i=t.length-1;i>=0;i--){const r=t.data[i];if(0===r.children.length)if(i>0){const u=t.data[i-1],e=u.children;e.splice((0,O.cq)(e,r,e.length,u.indexHint),1)}else this.clear();else E(r,this._toBBox)}}_initFormat(t){const i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function E(o,t){P(o,0,o.children.length,t,o)}function P(o,t,i,r,u){u||(u=new l([])),u.minX=1/0,u.minY=1/0,u.maxX=-1/0,u.maxY=-1/0;for(let e,n=t;n<i;n++)e=o.children[n],F(u,o.leaf?r(e):e);return u}function F(o,t){o.minX=Math.min(o.minX,t.minX),o.minY=Math.min(o.minY,t.minY),o.maxX=Math.max(o.maxX,t.maxX),o.maxY=Math.max(o.maxY,t.maxY)}function D(o,t){return o.minX-t.minX}function f(o,t){return o.minY-t.minY}function p(o){return(o.maxX-o.minX)*(o.maxY-o.minY)}function d(o){return o.maxX-o.minX+(o.maxY-o.minY)}function g(o,t){return(Math.max(t.maxX,o.maxX)-Math.min(t.minX,o.minX))*(Math.max(t.maxY,o.maxY)-Math.min(t.minY,o.minY))}function j(o,t){const i=Math.max(o.minX,t.minX),r=Math.max(o.minY,t.minY),u=Math.min(o.maxX,t.maxX),e=Math.min(o.maxY,t.maxY);return Math.max(0,u-i)*Math.max(0,e-r)}function M(o,t){return o.minX<=t.minX&&o.minY<=t.minY&&t.maxX<=o.maxX&&t.maxY<=o.maxY}function L(o,t){return t.minX<=o.maxX&&t.minY<=o.maxY&&t.maxX>=o.minX&&t.maxY>=o.minY}function z(o,t,i,r,u){const e=[t,i];for(;e.length;){const n=(0,S.j0)(e.pop()),s=(0,S.j0)(e.pop());if(n-s<=r)continue;const a=s+Math.ceil((n-s)/r/2)*r;(0,v.q)(o,a,s,n,u),e.push(s,a,a,n)}}const Z=new b.Z,w=new b.Z,R=new b.Z,X=new b.Z({deallocator:void 0});class h{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class _ extends h{constructor(){super(...arguments),this.height=1,this.indexHint=new O.SO}}class l extends _{constructor(t){super(),this.children=t,this.leaf=!0}}class m extends _{constructor(t){super(),this.children=t,this.leaf=!1}}},61256:(Q,A,c)=>{c.d(A,{H:()=>F});var O=c(8314),S=c(36592),b=c(65401);const C={minX:0,minY:0,maxX:0,maxY:0};class F{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new S.Q(9,(0,O.Z)("esri-csp-restrictions")?f=>({minX:f[0],minY:f[1],maxX:f[2],maxY:f[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const f=new Array(this._idByBounds.size);let p=0;this._idByBounds.forEach((d,g)=>{f[p++]=g}),this._indexInvalid=!1,this._index.clear(),this._index.load(f)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter(f=>this._idByBounds.has(f))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const f=(0,b.cS)();for(const p of this._boundsById.values())p&&(f[0]=Math.min(p[0],f[0]),f[1]=Math.min(p[1],f[1]),f[2]=Math.max(p[2],f[2]),f[3]=Math.max(p[3],f[3]));return f}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(f){const p=this._boundsById.get(f);this._boundsById.delete(f),p&&(this._idByBounds.delete(p),this._indexInvalid||this._index.remove(p))}forEachInBounds(f,p){this._loadIndex(),function P(D,f,p){(function E(D){C.minX=D[0],C.minY=D[1],C.maxX=D[2],C.maxY=D[3]})(f),D.search(C,p)}(this._index,f,d=>p(this._idByBounds.get(d)))}get(f){return this._boundsById.get(f)}has(f){return this._boundsById.has(f)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(f,p){if(!this._indexInvalid){const d=this._boundsById.get(f);d&&(this._index.remove(d),this._idByBounds.delete(d))}this._boundsById.set(f,p),p&&(this._idByBounds.set(p,f),this._indexInvalid||(this._boundsToLoad.push(p),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},3579:(Q,A,c)=>{c.d(A,{Z:()=>f});var O=c(26584),S=c(61885),b=c(63290),v=c(62208),C=c(5548),E=c(65401),P=c(82054),F=c(61256),D=c(92794);class f{constructor(d){this.geometryInfo=d,this._boundsStore=new F.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new S.Z,this.featureAdapter=D.n}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let d=0;return this._featuresById.forEach(g=>{(0,v.pC)(g.geometry)&&g.geometry.coords&&(d+=g.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:d/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(d){this._add(d),this._emitChanged()}addMany(d){for(const g of d)this._add(g);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(d){const g=this._featuresById.get(d);return g?(this._remove(g),this._emitChanged(),g):null}removeManyById(d){this._boundsStore.invalidateIndex();for(const g of d){const j=this._featuresById.get(g);j&&this._remove(j)}this._emitChanged()}forEachBounds(d,g,j){for(const M of d){const L=this._boundsStore.get(M.objectId);L&&g((0,C.JR)(j,L))}}getFeature(d){return this._featuresById.get(d)}has(d){return this._featuresById.has(d)}toArray(){return Array.from(this._featuresById.values())}forEach(d){this._featuresById.forEach(g=>d(g))}forEachInBounds(d,g){this._boundsStore.forEachInBounds(d,j=>{g(this._featuresById.get(j))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let d=!1;this._featuresById.forEach((g,j)=>{this._markedIds.has(j)||(d=!0,this._remove(g))}),this._markedIds.clear(),d&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(d){if(!d)return;const g=d.objectId;if(null==g)return void b.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new O.Z("featurestore:invalid-feature","feature id is missing",{feature:d}));const j=this._featuresById.get(g);let M;if(this._markedIds.add(g),j?(d.displayId=j.displayId,M=this._boundsStore.get(g),this._boundsStore.delete(g)):(0,v.pC)(this.onFeatureAdd)&&this.onFeatureAdd(d),(0,v.Wi)(d.geometry)||!d.geometry.coords||!d.geometry.coords.length)return this._boundsStore.set(g,null),void this._featuresById.set(g,d);M=(0,P.$)((0,v.pC)(M)?M:(0,E.Ue)(),d.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,v.pC)(M)&&this._boundsStore.set(g,M),this._featuresById.set(g,d)}_remove(d){return(0,v.pC)(this.onFeatureRemove)&&this.onFeatureRemove(d),this._markedIds.delete(d.objectId),this._boundsStore.delete(d.objectId),this._featuresById.delete(d.objectId),d}}},92794:(Q,A,c)=>{c.d(A,{n:()=>C});var O=c(62208),S=c(77044),b=c(66385),v=c(88071);const C={getObjectId:E=>E.objectId,getAttributes:E=>E.attributes,getAttribute:(E,P)=>E.attributes[P],cloneWithGeometry:(E,P)=>new b.u_(P,E.attributes,null,E.objectId),getGeometry:E=>E.geometry,getCentroid:(E,P)=>((0,O.Wi)(E.centroid)&&(E.centroid=(0,S.Y)(new v.Z,E.geometry,P.hasZ,P.hasM)),E.centroid)}},84079:(Q,A,c)=>{c.r(A),c.d(A,{default:()=>R});var O=c(15861),S=c(84792),b=c(26584),v=c(63290),C=c(62208),E=c(10699),P=c(91179),F=c(37053),D=c(82054),f=c(3579),p=c(82959),d=c(58175),g=c(58775),j=c(56554),M=c(35775),L=c(60466),z=c(85),Z=c(36630);const w={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class R{constructor(){var h=this;this._queryEngine=null,this._snapshotFeatures=function(){var _=(0,O.Z)(function*(l){const m=yield h._fetch(l);return h._createFeatures(m)});return function(l){return _.apply(this,arguments)}}()}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}load(h,_={}){var l=this;return(0,O.Z)(function*(){l.loadOptions={url:h.url,customParameters:h.customParameters};const m=[];yield l._checkProjection(h.spatialReference);let o=null;h.url&&(o=yield l._fetch(_?.signal));const t=(0,g.my)(o,{geometryType:h.geometryType}),i=h.fields||t.fields||[],r=null!=h.hasZ?h.hasZ:t.hasZ,u=t.geometryType,e=h.objectIdField||t.objectIdFieldName||"__OBJECTID",n=h.spatialReference||F.Zn;let s=h.timeInfo;i===t.fields&&t.unknownFields.length>0&&m.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:t.unknownFields}});let a=i.find(B=>B.name===e);a?("esriFieldTypeString"!==a.type&&(a.type="esriFieldTypeOID"),a.editable=!1,a.nullable=!1):(a={alias:e,name:e,type:"string"===t.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},i.unshift(a));const y={};for(const B of i){if(null==B.name&&(B.name=B.alias),null==B.alias&&(B.alias=B.name),!B.name)throw new b.Z("geojson-layer:invalid-field-name","field name is missing",{field:B});if(!z.v.jsonValues.includes(B.type))throw new b.Z("geojson-layer:invalid-field-type",`invalid type for field "${B.name}"`,{field:B});if(B.name!==a.name){const Y=(0,Z.os)(B);void 0!==Y&&(y[B.name]=Y)}}l._fieldsIndex=new L.Z(i);const I=l._fieldsIndex.requiredFields.indexOf(a);if(I>-1&&l._fieldsIndex.requiredFields.splice(I,1),s){if(s.startTimeField){const B=l._fieldsIndex.get(s.startTimeField);B?(s.startTimeField=B.name,B.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const B=l._fieldsIndex.get(s.endTimeField);B?(s.endTimeField=B.name,B.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const B=l._fieldsIndex.get(s.trackIdField);B?s.trackIdField=B.name:(s.trackIdField=null,m.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:s}}))}s.startTimeField||s.endTimeField||(m.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:s}}),s=null)}const T=u?(0,j.bU)(u):null,x={warnings:m,featureErrors:[],layerDefinition:{...w,drawingInfo:T,templates:(0,j.Hq)(y),extent:null,geometryType:u,objectIdField:e,fields:i,hasZ:!!r,timeInfo:s}};l._queryEngine=new d.q({fields:i,geometryType:u,hasM:!1,hasZ:r,objectIdField:e,spatialReference:n,timeInfo:s,featureStore:new f.Z({geometryType:u,hasM:!1,hasZ:r}),cacheSpatialQueries:!0}),l._createDefaultAttributes=(0,j.Dm)(y,e);const U=yield l._createFeatures(o);l._objectIdGenerator=l._createObjectIdGenerator(l._queryEngine,U);const W=l._normalizeFeatures(U,x.warnings,x.featureErrors);if(l._queryEngine.featureStore.addMany(W),x.layerDefinition.extent=l._queryEngine.fullExtent,x.layerDefinition.timeInfo){const{start:B,end:Y}=l._queryEngine.timeExtent;x.layerDefinition.timeInfo.timeExtent=[B,Y]}return x})()}applyEdits(h){var _=this;return(0,O.Z)(function*(){const{spatialReference:l,geometryType:m}=_._queryEngine;return yield Promise.all([(0,M.b)(l,m),(0,p._W)(h.adds,l),(0,p._W)(h.updates,l)]),yield _._waitSnapshotComplete(),_._applyEdits(h)})()}queryFeatures(h={},_={}){var l=this;return(0,O.Z)(function*(){return yield l._waitSnapshotComplete(),l._queryEngine.executeQuery(h,_.signal)})()}queryFeatureCount(h={},_={}){var l=this;return(0,O.Z)(function*(){return yield l._waitSnapshotComplete(),l._queryEngine.executeQueryForCount(h,_.signal)})()}queryObjectIds(h={},_={}){var l=this;return(0,O.Z)(function*(){return yield l._waitSnapshotComplete(),l._queryEngine.executeQueryForIds(h,_.signal)})()}queryExtent(h={},_={}){var l=this;return(0,O.Z)(function*(){return yield l._waitSnapshotComplete(),l._queryEngine.executeQueryForExtent(h,_.signal)})()}querySnapping(h,_={}){var l=this;return(0,O.Z)(function*(){return yield l._waitSnapshotComplete(),l._queryEngine.executeQueryForSnapping(h,_.signal)})()}refresh(h){var _=this;return(0,O.Z)(function*(){return _.loadOptions.customParameters=h,_._snapshotTask?.abort(),_._snapshotTask=(0,E.vr)(_._snapshotFeatures),_._snapshotTask.promise.then(l=>{_._queryEngine.featureStore.clear(),_._objectIdGenerator=_._createObjectIdGenerator(_._queryEngine,l);const m=_._normalizeFeatures(l);m&&_._queryEngine.featureStore.addMany(m)},l=>{_._queryEngine.featureStore.clear(),(0,E.D_)(l)||v.Z.getLogger("esri.layers.GeoJSONLayer").error(new b.Z("geojson-layer:refresh","An error occurred during refresh",{error:l}))}),yield _._waitSnapshotComplete(),{extent:_._queryEngine.fullExtent,timeExtent:_._queryEngine.timeExtent}})()}_createFeatures(h){var _=this;return(0,O.Z)(function*(){const{geometryType:l,hasZ:m,objectIdField:o}=_._queryEngine,t=(0,g.lG)(h,{geometryType:l,hasZ:m,objectIdField:o});if(!(0,F.fS)(_._queryEngine.spatialReference,F.Zn))for(const i of t)(0,C.pC)(i.geometry)&&(i.geometry=(0,D.GH)((0,p.iV)((0,D.di)(i.geometry,_._queryEngine.geometryType,_._queryEngine.hasZ,!1),F.Zn,_._queryEngine.spatialReference)));return t})()}_waitSnapshotComplete(){var h=this;return(0,O.Z)(function*(){if(h._snapshotTask&&!h._snapshotTask.finished){try{yield h._snapshotTask.promise}catch{}return h._waitSnapshotComplete()}})()}_fetch(h){var _=this;return(0,O.Z)(function*(){const{url:l,customParameters:m}=_.loadOptions,o=(yield(0,S.default)(l,{responseType:"json",query:{...m},signal:h})).data;return yield(0,g.O3)(o),o})()}_normalizeFeatures(h,_,l){const{objectIdField:m}=this._queryEngine,o=[];for(const t of h){const i=this._createDefaultAttributes(),r=(0,M.O0)(this._fieldsIndex,i,t.attributes,!0,_);r?l?.push(r):(this._assignObjectId(i,t.attributes,!0),t.attributes=i,t.objectId=i[m],o.push(t))}return o}_applyEdits(h){const{adds:_,updates:l,deletes:m}=h,o={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(_&&_.length&&this._applyAddEdits(o,_),l&&l.length&&this._applyUpdateEdits(o,l),m&&m.length){for(const t of m)o.deleteResults.push((0,M.d1)(t));this._queryEngine.featureStore.removeManyById(m)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:o}}_applyAddEdits(h,_){const{addResults:l}=h,{geometryType:m,hasM:o,hasZ:t,objectIdField:i,spatialReference:r,featureStore:u}=this._queryEngine,e=[];for(const n of _){if(n.geometry&&m!==(0,P.Ji)(n.geometry)){l.push((0,M.av)("Incorrect geometry type."));continue}const s=this._createDefaultAttributes(),a=(0,M.O0)(this._fieldsIndex,s,n.attributes);a?l.push(a):(this._assignObjectId(s,n.attributes),n.attributes=s,null!=n.uid&&(h.uidToObjectId[n.uid]=n.attributes[i]),(0,C.pC)(n.geometry)&&(n.geometry=(0,p.iV)((0,M.og)(n.geometry,r),n.geometry.spatialReference,r)),e.push(n),l.push((0,M.d1)(n.attributes[i])))}u.addMany((0,D.Yn)([],e,m,t,o,i))}_applyUpdateEdits({updateResults:h},_){const{geometryType:l,hasM:m,hasZ:o,objectIdField:t,spatialReference:i,featureStore:r}=this._queryEngine;for(const u of _){const{attributes:e,geometry:n}=u,s=e&&e[t];if(null==s){h.push((0,M.av)(`Identifier field ${t} missing`));continue}if(!r.has(s)){h.push((0,M.av)(`Feature with object id ${s} missing`));continue}const a=(0,D.EI)(r.getFeature(s),l,o,m);if((0,C.pC)(n)){if(l!==(0,P.Ji)(n)){h.push((0,M.av)("Incorrect geometry type."));continue}a.geometry=(0,p.iV)((0,M.og)(n,i),n.spatialReference,i)}if(e){const y=(0,M.O0)(this._fieldsIndex,a.attributes,e);if(y){h.push(y);continue}}r.add((0,D.XA)(a,l,o,m,t)),h.push((0,M.d1)(s))}}_createObjectIdGenerator(h,_){const l=h.fieldsIndex.get(h.objectIdField);if("esriFieldTypeString"===l.type)return()=>l.name+"-"+Date.now().toString(16);let m=Number.NEGATIVE_INFINITY;for(const o of _)o.objectId&&(m=Math.max(m,o.objectId));return m=Math.max(0,m)+1,()=>m++}_assignObjectId(h,_,l=!1){const m=this._queryEngine.objectIdField;h[m]=l&&m in _?_[m]:this._objectIdGenerator()}_checkProjection(h){return(0,O.Z)(function*(){try{yield(0,p._W)(F.Zn,h)}catch{throw new b.Z("geojson-layer","Projection not supported")}})()}}},58775:(Q,A,c)=>{c.d(A,{O3:()=>i,lG:()=>u,my:()=>r,q9:()=>E});var O=c(26584),S=c(66385),b=c(88071),v=c(36630);const C={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function E(e){return C[e]}function*P(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const n of e.features)n&&(yield n)}}function*F(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const n of e.coordinates)yield*n;break;case"MultiPolygon":for(const n of e.coordinates)for(const s of n)yield*s}}function f(e){for(const n of e)if(n.length>2)return!0;return!1}function g(e){let n=0;for(let s=0;s<e.length;s++){const a=e[s],y=e[(s+1)%e.length];n+=a[0]*y[1]-y[0]*a[1]}return n<=0}function j(e){const n=e[0],s=e[e.length-1];return n[0]===s[0]&&n[1]===s[1]&&n[2]===s[2]||e.push(n),e}function M(e,n,s){switch(n.type){case"LineString":return function L(e,n,s){return l(e,n.coordinates,s),e}(e,n,s);case"MultiLineString":return function z(e,n,s){for(const a of n.coordinates)l(e,a,s);return e}(e,n,s);case"MultiPoint":return function Z(e,n,s){return l(e,n.coordinates,s),e}(e,n,s);case"MultiPolygon":return function w(e,n,s){for(const a of n.coordinates){h(e,a[0],s);for(let y=1;y<a.length;y++)_(e,a[y],s)}return e}(e,n,s);case"Point":return function R(e,n,s){return o(e,n.coordinates,s),e}(e,n,s);case"Polygon":return function X(e,n,s){const a=n.coordinates;h(e,a[0],s);for(let y=1;y<a.length;y++)_(e,a[y],s);return e}(e,n,s)}}function h(e,n,s){const a=j(n);!function p(e){return!g(e)}(a)?l(e,a,s):m(e,a,s)}function _(e,n,s){const a=j(n);!function d(e){return g(e)}(a)?l(e,a,s):m(e,a,s)}function l(e,n,s){for(const a of n)o(e,a,s);e.lengths.push(n.length)}function m(e,n,s){for(let a=n.length-1;a>=0;a--)o(e,n[a],s);e.lengths.push(n.length)}function o(e,n,s){const[a,y,I]=n;e.coords.push(a,y),s.hasZ&&e.coords.push(I||0)}function t(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function i(e){if(!e)throw new O.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new O.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const s="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,a=new RegExp(".*(CRS84H?|4326)$","i");if(!s||!a.test(s))throw new O.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function r(e,n={}){const s=[],a=new Set,y=new Set;let I,T=!1,x=null,U=!1,{geometryType:W=null}=n,B=!1;for(const H of P(e)){const{geometry:J,properties:G,id:$}=H;if((!J||(W||(W=E(J.type)),E(J.type)===W))&&(T||(T=f(F(J))),U||(U=null!=$,U&&(I=typeof $,x=Object.keys(G).filter(N=>G[N]===$))),U&&null!=$&&(x.length>1?x=x.filter(N=>G[N]===$):1===x.length&&(x=G[x[0]]===$?x:[])),!B&&G)){let N=!0;for(const K in G){if(a.has(K))continue;const k=G[K];if(null==k){N=!1,y.add(K);continue}const q=t(k);"unknown"!==q?(y.delete(K),a.add(K),s.push({name:K,alias:K,type:q})):y.add(K)}B=N}}const Y=x&&1===x.length&&x[0]||null;if(Y)for(const H of s)if(H.name===Y&&(0,v.H7)(H)){H.type="esriFieldTypeOID";break}return{fields:s,geometryType:W,hasZ:T,objectIdFieldName:Y,objectIdFieldType:I,unknownFields:Array.from(y)}}function u(e,n){return Array.from(function*D(e,n={}){const{geometryType:s,objectIdField:a}=n;for(const y of e){const{geometry:I,properties:T,id:x}=y;if(I&&E(I.type)!==s)continue;const U=T||{};let W=U[a]??null;a&&null!=x&&!U[a]&&(U[a]=W=x),yield new S.u_(I?M(new b.Z,I,n):null,U,null,W)}}(P(e),n))}},56554:(Q,A,c)=>{c.d(A,{Dm:()=>F,Hq:()=>D,MS:()=>f,bU:()=>C});var O=c(8314),S=c(58817),b=c(87757),v=c(24837);function C(p){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===p||"esriGeometryMultipoint"===p?v.I4:"esriGeometryPolyline"===p?v.ET:v.lF}}}const E=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let P=1;function F(p,d){if((0,O.Z)("esri-csp-restrictions"))return()=>({[d]:null,...p});try{let g=`this.${d} = null;`;for(const M in p)g+=`this${E.test(M)?`.${M}`:`["${M}"]`} = ${JSON.stringify(p[M])};`;const j=new Function(`\n      return class AttributesClass$${P++} {\n        constructor() {\n          ${g};\n        }\n      }\n    `)();return()=>new j}catch{return()=>({[d]:null,...p})}}function D(p={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,S.d9)(p)}}]}function f(p,d){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:p},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:d,supportsDelete:d,supportsEditing:d,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:d,supportsExceedsLimitStatistics:!0},query:b.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:d,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);