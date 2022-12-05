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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[3308,5994],{15994:(q,J,p)=>{p.d(J,{N:()=>A});const A={convertToGEGeometry:function w(_,f){return null==f?null:_.convertJSONToGeometry(f)},exportPoint:function L(_,f,z){const g=new j(_.getPointX(f),_.getPointY(f),z),y=_.hasZ(f),v=_.hasM(f);return y&&(g.z=_.getPointZ(f)),v&&(g.m=_.getPointM(f)),g},exportPolygon:function O(_,f,z){return new N(_.exportPaths(f),z,_.hasZ(f),_.hasM(f))},exportPolyline:function P(_,f,z){return new b(_.exportPaths(f),z,_.hasZ(f),_.hasM(f))},exportMultipoint:function B(_,f,z){return new C(_.exportPoints(f),z,_.hasZ(f),_.hasM(f))},exportExtent:function U(_,f,z){const g=_.hasZ(f),y=_.hasM(f),v=new Z(_.getXMin(f),_.getYMin(f),_.getXMax(f),_.getYMax(f),z);if(g){const t=_.getZExtent(f);v.zmin=t.vmin,v.zmax=t.vmax}if(y){const t=_.getMExtent(f);v.mmin=t.vmin,v.mmax=t.vmax}return v}};class j{constructor(f,z,g){this.x=f,this.y=z,this.spatialReference=g,this.z=void 0,this.m=void 0}}class N{constructor(f,z,g,y){this.rings=f,this.spatialReference=z,this.hasZ=void 0,this.hasM=void 0,g&&(this.hasZ=g),y&&(this.hasM=y)}}class b{constructor(f,z,g,y){this.paths=f,this.spatialReference=z,this.hasZ=void 0,this.hasM=void 0,g&&(this.hasZ=g),y&&(this.hasM=y)}}class C{constructor(f,z,g,y){this.points=f,this.spatialReference=z,this.hasZ=void 0,this.hasM=void 0,g&&(this.hasZ=g),y&&(this.hasM=y)}}class Z{constructor(f,z,g,y,v){this.xmin=f,this.ymin=z,this.xmax=g,this.ymax=y,this.spatialReference=v,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},83308:(q,J,p)=>{p.d(J,{y:()=>f,r:()=>y});var A=p(15861),w=p(62208),j=p(27105),L=p(15176),N=p(7848),O=p(37053),b=p(50736),P=p(63930);class C{constructor(t,e,i){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=t.returnDistinctValues,this.fieldsIndex=i,this.featureAdapter=e;const a=t.outFields;if(a&&!a.includes("*")){this.outFields=a;let s=0;for(const n of a){const o=(0,b.hr)(n),u=this.fieldsIndex.get(o),m=u?null:(0,b.Jc)(o,i),M=u?u.name:(0,b.nu)(n)||"FIELD_EXP_"+s++;this._fieldDataCache.set(n,{alias:M,clause:m})}}}countDistinctValues(t){return this.returnDistinctValues?(t.forEach(e=>this.getAttributes(e)),this._returnDistinctMap.size):t.length}getAttributes(t){const e=this._processAttributesForOutFields(t);return this._processAttributesForDistinctValues(e)}getFieldValue(t,e,i){const a=i?i.name:e;let s=null;return this._fieldDataCache.has(a)?s=this._fieldDataCache.get(a).clause:i||(s=(0,b.Jc)(e,this.fieldsIndex),this._fieldDataCache.set(a,{alias:a,clause:s})),i?this.featureAdapter.getAttribute(t,a):s.calculateValue(t,this.featureAdapter)}getNormalizedValue(t,e){const i=e.normalizationType,a=e.normalizationTotal;let s=this.getFieldValue(t,e.field,e.fieldInfo);if(i&&Number.isFinite(s)){const n=this.getFieldValue(t,e.normalizationField,e.normalizationFieldInfo);s=(0,P.fk)(s,i,n,a)}return s}getExpressionValue(t,e,i,a){const s={attributes:this.featureAdapter.getAttributes(t),layer:{fields:this.fieldsIndex.fields}},n=a.createExecContext(s,i);return a.executeFunction(e,n)}getExpressionValues(t,e,i,a){const s={fields:this.fieldsIndex.fields};return t.map(n=>{const o={attributes:this.featureAdapter.getAttributes(n),layer:s},u=a.createExecContext(o,i);return a.executeFunction(e,u)})}validateItem(t,e){return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:(0,b.Jc)(e,this.fieldsIndex)}),this._fieldDataCache.get(e).clause.testFeature(t,this.featureAdapter)}validateItems(t,e){return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:(0,b.Jc)(e,this.fieldsIndex)}),this._fieldDataCache.get(e).clause.testSet(t,this.featureAdapter)}_processAttributesForOutFields(t){const e=this.outFields;if(!e||!e.length)return this.featureAdapter.getAttributes(t);const i={};for(const a of e){const{alias:s,clause:n}=this._fieldDataCache.get(a);i[s]=n?n.calculateValue(t,this.featureAdapter):this.featureAdapter.getAttribute(t,s)}return i}_processAttributesForDistinctValues(t){if((0,w.Wi)(t)||!this.returnDistinctValues)return t;const e=this.outFields,i=[];if(e)for(const n of e){const{alias:o}=this._fieldDataCache.get(n);i.push(t[o])}else for(const n in t)i.push(t[n]);const a=`${(e||["*"]).join(",")}=${i.join(",")}`;let s=this._returnDistinctMap.get(a)||0;return this._returnDistinctMap.set(a,++s),s>1?null:t}}var y,v,B=p(82959),Z=p(6185),U=p(36630),_=p(46679);class f{constructor(t,e,i){this.items=t,this.query=e,this.geometryType=i.geometryType,this.hasM=i.hasM,this.hasZ=i.hasZ,this.fieldsIndex=i.fieldsIndex,this.objectIdField=i.objectIdField,this.spatialReference=i.spatialReference,this.featureAdapter=i.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const t=new C(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return t.countDistinctValues(this.items);const{groupByFieldsForStatistics:e,having:i,outStatistics:a}=this.query;if(!e?.length)return 1;const n=new Map,o=new Map,u=new Set;for(const m of a){const{statisticType:M}=m,V="exceedslimit"!==M?m.onStatisticField:void 0;if(!o.has(V)){const D=[];for(const r of e){const l=this._getAttributeValues(t,r,n);D.push(l)}o.set(V,this._calculateUniqueValues(D,t.returnDistinctValues))}const R=o.get(V);for(const D in R){const{data:r,items:l}=R[D],E=r.join(",");i&&!t.validateItems(l,i)||u.add(E)}}return u.size}createQueryResponse(){var t=this;return(0,A.Z)(function*(){let e;return e=t.query.outStatistics?t.query.outStatistics.some(i=>"exceedslimit"===i.statisticType)?t._createExceedsLimitQueryResponse(t.query):yield t._createStatisticsQueryResponse(t.query):t._createFeatureQueryResponse(t.query),t.query.returnQueryGeometry&&(e.queryGeometry=(0,O.JY)(t.query.outSR)&&!(0,O.fS)(t.query.geometry.spatialReference,t.query.outSR)?(0,Z.S2)({spatialReference:t.query.outSR,...(0,B.iV)(t.query.geometry,t.query.geometry.spatialReference,t.query.outSR)}):(0,Z.S2)({spatialReference:t.query.outSR,...t.query.geometry})),e})()}createSnappingResponse(t,e){const i=this.featureAdapter,a=function g(v,t){return v?t?4:3:t?3:2}(this.hasZ,this.hasM),{x:s,y:n}=t.point,o="number"==typeof t.distance?t.distance:t.distance.x,u="number"==typeof t.distance?t.distance:t.distance.y,m={candidates:[]},M="esriGeometryPolygon"===this.geometryType,V=this._getPointCreator(t.point,this.spatialReference,e);for(const R of this.items){const D=i.getGeometry(R);if((0,w.Wi)(D))continue;const{coords:r,lengths:l}=D;if(t.types&y.EDGE){let E=0;for(let x=0;x<l.length;x++){const I=l[x];for(let T=0;T<I;T++,E+=a){const S=r[E],h=r[E+1];if(T!==I-1){const F=r[E+a],G=r[E+a+1],{x:Q,y:W}=z(s,n,S,h,F,G),k=(s-Q)/o,K=(n-W)/u,Y=k*k+K*K;Y<=1&&m.candidates.push({type:"edge",objectId:i.getObjectId(R),distance:Math.sqrt(Y),target:V(Q,W),start:V(S,h),end:V(F,G)})}}}}if(t.types&y.VERTEX){const E=M?r.length-a:r.length;for(let x=0;x<E;x+=a){const I=r[x],T=r[x+1],S=(s-I)/o,h=(n-T)/u,F=S*S+h*h;F<=1&&m.candidates.push({type:"vertex",objectId:i.getObjectId(R),distance:Math.sqrt(F),target:V(I,T)})}}}return m.candidates.sort((R,D)=>R.distance-D.distance),m}_getPointCreator(t,e,i){const a=(0,w.pC)(i)&&!(0,O.fS)(e,i)?s=>(0,B.iV)(s,e,i):s=>s;return null!=t.z&&null!=t.m?(s,n)=>a({x:s,y:n,z:t.z,m:t.m}):null!=t.z?(s,n)=>a({x:s,y:n,z:t.z}):null!=t.m?(s,n)=>a({x:s,y:n,m:t.m}):(s,n)=>a({x:s,y:n})}createSummaryStatisticsResponse(t){var e=this;return(0,A.Z)(function*(){const{field:i,valueExpression:a,normalizationField:s,normalizationType:n,normalizationTotal:o,minValue:u,maxValue:m,scale:M}=t,V=e.fieldsIndex.isDateField(i),R=yield e._getDataValues({field:i,valueExpression:a,normalizationField:s,normalizationType:n,normalizationTotal:o,scale:M}),D=(0,P.S5)({normalizationType:n,normalizationField:s,minValue:u,maxValue:m}),r=e.fieldsIndex.get(i),l={value:.5,fieldType:r?.type},E=(0,U.qN)(r)?(0,P.H0)({values:R,supportsNullCount:D,percentileParams:l}):(0,P.i5)({values:R,minValue:u,maxValue:m,useSampleStdDev:!n,supportsNullCount:D,percentileParams:l});return(0,P.F_)(E,V)})()}createUniqueValuesResponse(t){var e=this;return(0,A.Z)(function*(){const{field:i,valueExpression:a,domain:s,returnAllCodedValues:n,scale:o}=t,u=yield e._getDataValues({field:i,valueExpression:a,scale:o}),m=(0,P.eT)(u);return(0,P.Qm)(m,s,n)})()}createClassBreaksResponse(t){var e=this;return(0,A.Z)(function*(){const{field:i,valueExpression:a,normalizationField:s,normalizationType:n,normalizationTotal:o,classificationMethod:u,standardDeviationInterval:m,minValue:M,maxValue:V,numClasses:R,scale:D}=t,r=yield e._getDataValues({field:i,valueExpression:a,normalizationField:s,normalizationType:n,normalizationTotal:o,scale:D}),l=(0,P.G2)(r,{field:i,normalizationField:s,normalizationType:n,normalizationTotal:o,classificationMethod:u,standardDeviationInterval:m,minValue:M,maxValue:V,numClasses:R});return(0,P.DL)(l,u)})()}createHistogramResponse(t){var e=this;return(0,A.Z)(function*(){const{field:i,valueExpression:a,normalizationField:s,normalizationType:n,normalizationTotal:o,classificationMethod:u,standardDeviationInterval:m,minValue:M,maxValue:V,numBins:R,scale:D}=t,r=yield e._getDataValues({field:i,valueExpression:a,normalizationField:s,normalizationType:n,normalizationTotal:o,scale:D});return(0,P.oF)(r,{field:i,normalizationField:s,normalizationType:n,normalizationTotal:o,classificationMethod:u,standardDeviationInterval:m,minValue:M,maxValue:V,numBins:R})})()}_sortFeatures(t,e,i){if(t.length>1&&e&&e.length)for(const a of e.reverse()){const s=a.split(" "),n=s[0],o=this.fieldsIndex.get(n),u=s[1]&&"desc"===s[1].toLowerCase(),m=(0,P.Lq)(o?.type,u);t.sort((M,V)=>{const R=i(M,n,o),D=i(V,n,o);return m(R,D)})}}_createFeatureQueryResponse(t){const e=this.items,{geometryType:i,hasM:a,hasZ:s,objectIdField:n,spatialReference:o}=this,{outFields:u,outSR:m,quantizationParameters:M,resultRecordCount:V,resultOffset:R,returnZ:D,returnM:r}=t,l=null!=V&&e.length>(R||0)+V,E=u&&(u.includes("*")?[...this.fieldsIndex.fields]:u.map(x=>this.fieldsIndex.get(x)));return{exceededTransferLimit:l,features:this._createFeatures(t,e),fields:E,geometryType:i,hasM:a&&r,hasZ:s&&D,objectIdFieldName:n,spatialReference:(0,Z.S2)(m||o),transform:M&&(0,N.vY)(M)||null}}_createFeatures(t,e){const i=new C(t,this.featureAdapter,this.fieldsIndex),{hasM:a,hasZ:s}=this,{orderByFields:n,quantizationParameters:o,returnGeometry:u,returnCentroid:m,maxAllowableOffset:M,resultOffset:V,resultRecordCount:R,returnZ:D=!1,returnM:r=!1}=t,l=s&&D,E=a&&r;let x=[],I=0;const T=[...e];if(this._sortFeatures(T,n,(h,F,G)=>i.getFieldValue(h,F,G)),u||m){const h=(0,N.vY)(o);if(u&&!m)for(const F of T)x[I++]={attributes:i.getAttributes(F),geometry:(0,Z.Op)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(F),M,h,l,E)};else if(!u&&m)for(const F of T)x[I++]={attributes:i.getAttributes(F),centroid:(0,Z.EG)(this,this.featureAdapter.getCentroid(F,this),h)};else for(const F of T)x[I++]={attributes:i.getAttributes(F),centroid:(0,Z.EG)(this,this.featureAdapter.getCentroid(F,this),h),geometry:(0,Z.Op)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(F),M,h,l,E)}}else for(const h of T){const F=i.getAttributes(h);F&&(x[I++]={attributes:F})}const S=V||0;return null!=R&&(x=x.slice(S,Math.min(x.length,S+R))),x}_createExceedsLimitQueryResponse(t){let e=!1,i=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY;for(const n of t.outStatistics)if("exceedslimit"===n.statisticType){i=null!=n.maxPointCount?n.maxPointCount:Number.POSITIVE_INFINITY,a=null!=n.maxRecordCount?n.maxRecordCount:Number.POSITIVE_INFINITY,s=null!=n.maxVertexCount?n.maxVertexCount:Number.POSITIVE_INFINITY;break}if("esriGeometryPoint"===this.geometryType)e=this.items.length>i;else if(this.items.length>a)e=!0;else{const n=this.hasZ?this.hasM?4:3:this.hasM?3:2,o=this.featureAdapter;e=this.items.reduce((u,m)=>{const M=o.getGeometry(m);return u+((0,w.pC)(M)&&M.coords.length||0)},0)/n>s}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(e)}}]}}_createStatisticsQueryResponse(t){var e=this;return(0,A.Z)(function*(){const i={attributes:{}},a=[],s=new Map,n=new Map,o=new Map,u=new Map,m=new C(t,e.featureAdapter,e.fieldsIndex),M=t.outStatistics,{groupByFieldsForStatistics:V,having:R,orderByFields:D}=t,r=V&&V.length,l=!!r,E=l&&V[0],x=l&&!e.fieldsIndex.get(E);for(const T of M){const{outStatisticFieldName:S,statisticType:h}=T,F=T,G="exceedslimit"!==h?T.onStatisticField:void 0,Q="percentile_disc"===h||"percentile_cont"===h,W="EnvelopeAggregate"===h||"CentroidAggregate"===h||"ConvexHullAggregate"===h,k=l&&1===r&&(G===E||x)&&"count"===h;if(l){if(!o.has(G)){const Y=[];for(const te of V){const ee=e._getAttributeValues(m,te,s);Y.push(ee)}o.set(G,e._calculateUniqueValues(Y,m.returnDistinctValues))}const K=o.get(G);for(const Y in K){const{count:te,data:ee,items:ie,itemPositions:ae}=K[Y],se=ee.join(",");if(!R||m.validateItems(ie,R)){const H=u.get(se)||{attributes:{}};if(W){H.aggregateGeometries||(H.aggregateGeometries={});const{aggregateGeometries:X,outStatisticFieldName:$}=yield e._getAggregateGeometry(F,ie);H.aggregateGeometries[$]=X}else{let X=null;if(k)X=te;else{const $=e._getAttributeValues(m,G,s),ne=ae.map(re=>$[re]);X=Q&&"statisticParameters"in F?e._getPercentileValue(F,ne):e._getStatisticValue(F,ne,null,m.returnDistinctValues)}H.attributes[S]=X}V.forEach((X,$)=>H.attributes[e.fieldsIndex.get(X)?X:`EXPR_${$+1}`]=ee[$]),u.set(se,H)}}}else if(W){i.aggregateGeometries||(i.aggregateGeometries={});const{aggregateGeometries:K,outStatisticFieldName:Y}=yield e._getAggregateGeometry(F,e.items);i.aggregateGeometries[Y]=K}else{const K=e._getAttributeValues(m,G,s);i.attributes[S]=Q&&"statisticParameters"in F?e._getPercentileValue(F,K):e._getStatisticValue(F,K,n,m.returnDistinctValues)}a.push({name:S,alias:S,type:"esriFieldTypeDouble"})}const I=l?Array.from(u.values()):[i];return e._sortFeatures(I,D,(T,S)=>T.attributes[S]),{fields:a,features:I}})()}_getAggregateGeometry(t,e){var i=this;return(0,A.Z)(function*(){const a=yield Promise.all([p.e(4918),p.e(8592)]).then(p.bind(p,32825)),{statisticType:s,outStatisticFieldName:n}=t,{featureAdapter:o,spatialReference:u,geometryType:m,hasZ:M,hasM:V}=i,R=e.map(l=>(0,Z.Op)(m,M,V,o.getGeometry(l))),D=a.convexHull(u,R,!0)[0],r={aggregateGeometries:null,outStatisticFieldName:null};if("EnvelopeAggregate"===s){const l=D?(0,L._w)(D):(0,L.aO)(a.union(u,R));r.aggregateGeometries={...l,spatialReference:u},r.outStatisticFieldName=n||"extent"}else if("CentroidAggregate"===s){const l=D?(0,j.tO)(D):(0,j.$G)((0,L.aO)(a.union(u,R)));r.aggregateGeometries={x:l[0],y:l[1],spatialReference:u},r.outStatisticFieldName=n||"centroid"}else"ConvexHullAggregate"===s&&(r.aggregateGeometries=D,r.outStatisticFieldName=n||"convexHull");return r})()}_getStatisticValue(t,e,i,a){const{onStatisticField:s,statisticType:n}=t;let o=null;return o=i?.has(s)?i.get(s):(0,U.qN)(this.fieldsIndex.get(s))?(0,P.H0)({values:e,returnDistinct:a}):(0,P.i5)({values:e,minValue:null,maxValue:null,useSampleStdDev:!0}),i&&i.set(s,o),o["var"===n?"variance":n]}_getPercentileValue(t,e){const{onStatisticField:i,statisticParameters:a,statisticType:s}=t,{value:n,orderBy:o}=a,u=this.fieldsIndex.get(i);return(0,P.XL)(e,{value:n,orderBy:o,fieldType:u?.type,isDiscrete:"percentile_disc"===s})}_getAttributeValues(t,e,i){if(i.has(e))return i.get(e);const a=this.fieldsIndex.get(e),s=this.items.map(n=>t.getFieldValue(n,e,a));return i.set(e,s),s}_getAttributeNormalizedValues(t,e){return this.items.map(i=>t.getNormalizedValue(i,{field:e.field,fieldInfo:this.fieldsIndex.get(e.field),normalizationField:e.normalizationField,normalizationFieldInfo:this.fieldsIndex.get(e.normalizationField),normalizationType:e.normalizationType,normalizationTotal:e.normalizationTotal}))}_getAttributeExpressionValues(t,e,i){var a=this;return(0,A.Z)(function*(){const{arcadeUtils:s}=yield(0,_.LC)(),n=s.createFunction(e),o=i&&s.getViewInfo(i);return t.getExpressionValues(a.items,n,o,s)})()}_calculateUniqueValues(t,e){const i={},a=this.items,s=a.length;for(let n=0;n<s;n++){const o=a[n],u=[];for(const M of t)u.push(M[n]);const m=u.join(",");e?null==i[m]&&(i[m]={count:1,data:u,items:[o],itemPositions:[n]}):null==i[m]?i[m]={count:1,data:u,items:[o],itemPositions:[n]}:(i[m].count++,i[m].items.push(o),i[m].itemPositions.push(n))}return i}_getDataValues(t){var e=this;return(0,A.Z)(function*(){const i=new C(e.query,e.featureAdapter,e.fieldsIndex),{valueExpression:a,field:s,normalizationField:n,normalizationType:o,normalizationTotal:u,scale:m}=t;return a?e._getAttributeExpressionValues(i,a,a?{viewingMode:"map",scale:m,spatialReference:e.query.outSR||e.spatialReference}:null):e._getAttributeNormalizedValues(i,{field:s,normalizationField:n,normalizationType:o,normalizationTotal:u})})()}}function z(v,t,e,i,a,s){const n=a-e,o=s-i,M=Math.min(1,Math.max(0,((v-e)*n+(t-i)*o)/(n*n+o*o)));return{x:e+n*M,y:i+o*M}}(v=y||(y={}))[v.NONE=0]="NONE",v[v.EDGE=1]="EDGE",v[v.VERTEX=2]="VERTEX"},50736:(q,J,p)=>{p.d(J,{nu:()=>f,hr:()=>_,Jc:()=>Z,G3:()=>z,Of:()=>U,z4:()=>B,hO:()=>C});var A=p(26584),w=p(78498),j=p(10410);const N=new class L{constructor(y,v){this._cache=new w.Z(y),this._invalidCache=new w.Z(v)}get(y,v){const t=`${v.uid}:${y}`,e=this._cache.get(t);if(e)return e;if(void 0!==this._invalidCache.get(t))return null;try{const i=j.WhereClause.create(y,v);return this._cache.put(t,i),i}catch{return this._invalidCache.put(t,null),null}}}(50,500),O="feature-store:unsupported-query",b=" as ",P=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function C(g,y){if(!y)return!0;const v=N.get(y,g);if(!v)throw new A.Z(O,"invalid SQL expression",{where:y});if(!v.isStandardized)throw new A.Z(O,"where clause is not standard",{where:y});return U(g,v.fieldNames,"where clause contains missing fields"),!0}function B(g,y,v){if(!y)return!0;const t=N.get(y,g);if(!t)throw new A.Z(O,"invalid SQL expression",{having:y});if(!t.isAggregate)throw new A.Z(O,"having does not contain a valid aggregate function",{having:y});if(U(g,t.fieldNames,"having contains missing fields"),!t.getExpressions().every(i=>{const{aggregateType:a,field:s}=i,n=g.has(s)&&g.get(s).name;return v.some(o=>{const{onStatisticField:u,statisticType:m}=o;return(g.has(u)&&g.get(u).name)===n&&m.toLowerCase().trim()===a})}))throw new A.Z(O,"expressions in having should also exist in outStatistics",{having:y});return!0}function Z(g,y){return g?N.get(g,y):null}function U(g,y,v,t=!0){const e=[];for(const i of y)if("*"!==i&&!g.has(i))if(t){const a=_(i);try{const s=Z(a,g);if(!s)throw new A.Z(O,"invalid SQL expression",{where:a});if(!s.isStandardized)throw new A.Z(O,"expression is not standard",{clause:s});U(g,s.fieldNames,"expression contains missing fields")}catch(s){const n=s&&s.details;if(n&&(n.clause||n.where))throw s;n&&n.missingFields?e.push(...n.missingFields):e.push(i)}}else e.push(i);if(e.length)throw new A.Z(O,v,{missingFields:e})}function _(g){return g.split(b)[0]}function f(g){return g.split(b)[1]}function z(g,y){const v=y.get(g);return!!v&&!P.has(v.type)}},82959:(q,J,p)=>{p.d(J,{_W:()=>Z,iV:()=>z,oj:()=>v});var A=p(15861),w=p(62208),j=p(55915),L=p(15994),N=p(37053),O=p(46367);const b=[0,0];function P(t,e){if(!e)return null;if("x"in e){const i={x:0,y:0};return[i.x,i.y]=t(e.x,e.y,b),null!=e.z&&(i.z=e.z),null!=e.m&&(i.m=e.m),i}if("xmin"in e){const i={xmin:0,ymin:0,xmax:0,ymax:0};return[i.xmin,i.ymin]=t(e.xmin,e.ymin,b),[i.xmax,i.ymax]=t(e.xmax,e.ymax,b),e.hasZ&&(i.zmin=e.zmin,i.zmax=e.zmax,i.hasZ=!0),e.hasM&&(i.mmin=e.mmin,i.mmax=e.mmax,i.hasM=!0),i}return"rings"in e?{rings:C(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:C(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:B(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:void 0}function C(t,e){const i=[];for(const a of t)i.push(B(a,e));return i}function B(t,e){const i=[];for(const a of t){const s=e(a[0],a[1],[0,0]);i.push(s),a.length>2&&s.push(a[2]),a.length>3&&s.push(a[3])}return i}function Z(t,e){return U.apply(this,arguments)}function U(){return(U=(0,A.Z)(function*(t,e){if(!e)return;const i=Array.isArray(t)?t.map(a=>(0,w.pC)(a.geometry)&&a.geometry.spatialReference):[t];yield(0,j.iQ)(i.map(a=>({source:a,dest:e})))})).apply(this,arguments)}const _=P.bind(null,O.hG),f=P.bind(null,O.R6);function z(t,e,i,a){if(!t||(i||(i=e,e=t.spatialReference),!(0,N.JY)(e)||!(0,N.JY)(i)||(0,N.fS)(e,i)))return t;if((0,O.Q8)(e,i)){const s=(0,N.sS)(i)?_(t):f(t);return s.spatialReference=i,s}return(0,j.oj)(L.N,[t],e,i,null,a)[0]}const y=new class g{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}push(e,i,a){var s=this;return(0,A.Z)(function*(){if(!e||!e.length||!i||!a||(0,N.fS)(i,a))return e;const n={geometries:e,inSpatialReference:i,outSpatialReference:a,resolve:null};return s._jobs.push(n),new Promise(o=>{n.resolve=o,null===s._timer&&(s._timer=setTimeout(s._process,10))})})()}_process(){this._timer=null;const e=this._jobs.shift();if(!e)return;const{geometries:i,inSpatialReference:a,outSpatialReference:s,resolve:n}=e;(0,O.Q8)(a,s)?(0,N.sS)(s)?n(i.map(_)):n(i.map(f)):n((0,j.oj)(L.N,i,a,s,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function v(t,e,i){return y.push(t,e,i)}},6185:(q,J,p)=>{p.d(J,{EG:()=>v,Op:()=>e,S2:()=>V,Up:()=>i,j6:()=>s,vF:()=>_});var A=p(15861),w=p(2076),j=p(62208),L=p(16730),N=p(15176),O=p(91179),b=p(13924),P=p(37053),C=p(82054),B=p(88071),Z=p(82959);const U=new w.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),_=Object.freeze({}),f=new B.Z,z=new B.Z,g=new B.Z,y={esriGeometryPoint:C.fQ,esriGeometryPolyline:C.J6,esriGeometryPolygon:C.eG,esriGeometryMultipoint:C.Iv};function v(r,l,E,x=r.hasZ,I=r.hasM){if((0,j.Wi)(l))return null;const T=r.hasZ&&x,S=r.hasM&&I;if(E){const h=(0,C.Nh)(g,l,r.hasZ,r.hasM,"esriGeometryPoint",E,x,I);return(0,C.fQ)(h,T,S)}return(0,C.fQ)(l,T,S)}function e(r,l,E,x,I,T,S=l,h=E){const F=l&&S,G=E&&h,Q=(0,j.pC)(x)?"coords"in x?x:x.geometry:null;if((0,j.Wi)(Q))return null;if(I){let W=(0,C.zj)(z,Q,l,E,r,I,S,h);return T&&(W=(0,C.Nh)(g,W,F,G,r,T)),y[r](W,F,G)}if(T){const W=(0,C.Nh)(g,Q,l,E,r,T,S,h);return y[r](W,F,G)}return(0,C.hY)(f,Q,l,E,S,h),y[r](f,F,G)}function i(r,l,E){return a.apply(this,arguments)}function a(){return(a=(0,A.Z)(function*(r,l,E){const{outFields:x,orderByFields:I,groupByFieldsForStatistics:T,outStatistics:S}=r;if(x)for(let h=0;h<x.length;h++)x[h]=x[h].trim();if(I)for(let h=0;h<I.length;h++)I[h]=I[h].trim();if(T)for(let h=0;h<T.length;h++)T[h]=T[h].trim();if(S)for(let h=0;h<S.length;h++)S[h].onStatisticField&&(S[h].onStatisticField=S[h].onStatisticField.trim());return r.geometry&&!r.outSR&&(r.outSR=r.geometry.spatialReference),s(r,l,E)})).apply(this,arguments)}function s(r,l,E){return n.apply(this,arguments)}function n(){return(n=(0,A.Z)(function*(r,l,E){if(!r)return null;let{where:x}=r;if(r.where=x=x&&x.trim(),(!x||/^1 *= *1$/.test(x)||l&&l===x)&&(r.where=null),!r.geometry)return r;let I=yield o(r);if(r.distance=0,r.units=null,"esriSpatialRelEnvelopeIntersects"===r.spatialRel){const{spatialReference:F}=r.geometry;I=(0,N.aO)(I),I.spatialReference=F}r.geometry=I,yield(0,Z._W)(I.spatialReference,E);const T=(yield(0,b.aX)((0,O.im)(I)))[0];if((0,j.Wi)(T))throw _;const S=T.toJSON(),h=yield(0,Z.iV)(S,S.spatialReference,E);if(!h)throw _;return h.spatialReference=E,r.geometry=h,r})).apply(this,arguments)}function o(r){return u.apply(this,arguments)}function u(){return(u=(0,A.Z)(function*(r){const{geometry:l,distance:E,units:x}=r;if(null==E||"vertexAttributes"in l)return l;const I=l.spatialReference,T=x?U.fromJSON(x):(0,L.qE)(I),S=I&&((0,P.sT)(I)||(0,P.sS)(I))?l:yield(0,Z._W)(I,P.Zn).then(()=>(0,Z.iV)(l,P.Zn));return(yield m())(S.spatialReference,S,E,T)})).apply(this,arguments)}function m(){return M.apply(this,arguments)}function M(){return(M=(0,A.Z)(function*(){return(yield Promise.all([p.e(4918),p.e(8592)]).then(p.bind(p,32825))).geodesicBuffer})).apply(this,arguments)}function V(r){return r&&R in r?JSON.parse(JSON.stringify(r,D)):r}const R="_geVersion",D=(r,l)=>r!==R?l:void 0}}]);