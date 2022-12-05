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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[3774],{58775:(be,X,y)=>{y.d(X,{O3:()=>pe,lG:()=>re,my:()=>fe,q9:()=>h});var T=y(26584),Y=y(66385),C=y(88071),m=y(36630);const w={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function h(n){return w[n]}function*D(n){switch(n.type){case"Feature":yield n;break;case"FeatureCollection":for(const s of n.features)s&&(yield s)}}function*j(n){if(!n)return null;switch(n.type){case"Point":yield n.coordinates;break;case"LineString":case"MultiPoint":yield*n.coordinates;break;case"MultiLineString":case"Polygon":for(const s of n.coordinates)yield*s;break;case"MultiPolygon":for(const s of n.coordinates)for(const l of s)yield*l}}function k(n){for(const s of n)if(s.length>2)return!0;return!1}function q(n){let s=0;for(let l=0;l<n.length;l++){const p=n[l],d=n[(l+1)%n.length];s+=p[0]*d[1]-d[0]*p[1]}return s<=0}function ee(n){const s=n[0],l=n[n.length-1];return s[0]===l[0]&&s[1]===l[1]&&s[2]===l[2]||n.push(s),n}function ae(n,s,l){switch(s.type){case"LineString":return function ue(n,s,l){return L(n,s.coordinates,l),n}(n,s,l);case"MultiLineString":return function N(n,s,l){for(const p of s.coordinates)L(n,p,l);return n}(n,s,l);case"MultiPoint":return function O(n,s,l){return L(n,s.coordinates,l),n}(n,s,l);case"MultiPolygon":return function te(n,s,l){for(const p of s.coordinates){G(n,p[0],l);for(let d=1;d<p.length;d++)$(n,p[d],l)}return n}(n,s,l);case"Point":return function le(n,s,l){return V(n,s.coordinates,l),n}(n,s,l);case"Polygon":return function _(n,s,l){const p=s.coordinates;G(n,p[0],l);for(let d=1;d<p.length;d++)$(n,p[d],l);return n}(n,s,l)}}function G(n,s,l){const p=ee(s);!function se(n){return!q(n)}(p)?L(n,p,l):ne(n,p,l)}function $(n,s,l){const p=ee(s);!function ie(n){return q(n)}(p)?L(n,p,l):ne(n,p,l)}function L(n,s,l){for(const p of s)V(n,p,l);n.lengths.push(s.length)}function ne(n,s,l){for(let p=s.length-1;p>=0;p--)V(n,s[p],l);n.lengths.push(s.length)}function V(n,s,l){const[p,d,E]=s;n.coords.push(p,d),l.hasZ&&n.coords.push(E||0)}function ce(n){switch(typeof n){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function pe(n){if(!n)throw new T.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==n.type&&"FeatureCollection"!==n.type)throw new T.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:n});const{crs:s}=n;if(!s)return;const l="string"==typeof s?s:"name"===s.type?s.properties.name:"EPSG"===s.type?s.properties.code:null,p=new RegExp(".*(CRS84H?|4326)$","i");if(!l||!p.test(l))throw new T.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:s})}function fe(n,s={}){const l=[],p=new Set,d=new Set;let E,I=!1,b=null,P=!1,{geometryType:Z=null}=s,z=!1;for(const W of D(n)){const{geometry:U,properties:R,id:v}=W;if((!U||(Z||(Z=h(U.type)),h(U.type)===Z))&&(I||(I=k(j(U))),P||(P=null!=v,P&&(E=typeof v,b=Object.keys(R).filter(A=>R[A]===v))),P&&null!=v&&(b.length>1?b=b.filter(A=>R[A]===v):1===b.length&&(b=R[b[0]]===v?b:[])),!z&&R)){let A=!0;for(const F in R){if(p.has(F))continue;const B=R[F];if(null==B){A=!1,d.add(F);continue}const oe=ce(B);"unknown"!==oe?(d.delete(F),p.add(F),l.push({name:F,alias:F,type:oe})):d.add(F)}z=A}}const H=b&&1===b.length&&b[0]||null;if(H)for(const W of l)if(W.name===H&&(0,m.H7)(W)){W.type="esriFieldTypeOID";break}return{fields:l,geometryType:Z,hasZ:I,objectIdFieldName:H,objectIdFieldType:E,unknownFields:Array.from(d)}}function re(n,s){return Array.from(function*Q(n,s={}){const{geometryType:l,objectIdField:p}=s;for(const d of n){const{geometry:E,properties:I,id:b}=d;if(E&&h(E.type)!==l)continue;const P=I||{};let Z=P[p]??null;p&&null!=b&&!P[p]&&(P[p]=Z=b),yield new Y.u_(E?ae(new C.Z,E,s):null,P,null,Z)}}(D(n),s))}},83774:(be,X,y)=>{y.d(X,{M8:()=>$,ft:()=>H,FU:()=>p,Bm:()=>Te,be:()=>W,eB:()=>B});var T=y(15861),C=(y(29132),y(84792)),m=y(26584),w=y(56354),h=y(62208),D=y(10699),j=y(21726),Q=y(55915),k=y(37053),se=y(71774),ie=y(58775);function q(o){return function ae(o){const r=ue.exec(o);if(!r)return null;const t=r.groups,i=+t.year,a=+t.month-1,u=+t.day,c=+(t.hours??"0"),f=+(t.minutes??"0"),g=+(t.seconds??"0");if(c>23||f>59||g>59)return null;const S=t.ms??"0",x=S?+S.padEnd(3,"0").substring(0,3):0;let M;return M=t.isUTC?Date.UTC(i,a,u,c,f,g,x):t.offsetSign?6e4*("+"===t.offsetSign?-1:1)*(60*+t.offsetHours+ +t.offsetMinutes)+Date.UTC(i,a,u,c,f,g,x):new Date(i,a,u,c,f,g,x).getTime(),Number.isNaN(M)?null:M}(o)??function ee(o){const r=new Date(o).getTime();return Number.isNaN(r)?null:r}(o)}const ue=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;var N=y(7255),O=y(36255),te=y(65234),le=y(2004);const _="xlink:href",G="2.0.0",$="__esri_wfs_id__",L="wfs-layer:getWFSLayerTypeInfo-error",ne="wfs-layer:empty-service",V="wfs-layer:feature-type-not-found",fe="wfs-layer:malformed-json",re="wfs-layer:unknown-geometry-type",s="wfs-layer:unsupported-spatial-reference";function p(o,r){return d.apply(this,arguments)}function d(){return(d=(0,T.Z)(function*(o,r){const t=E((yield(0,C.default)(o,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:G,...r?.customParameters},signal:r?.signal})).data);return P(o,t),t})).apply(this,arguments)}function E(o){const r=he(o);(function Ce(o){const r=o.firstElementChild.getAttribute("version");if(r&&r!==G)throw new m.Z("wfs-layer:unsupported-wfs-version",`Unsupported WFS version ${r}. Supported version: ${G}`)})(r),we(r);const t=r.firstElementChild,i=(0,w.Fs)(function Z(o){return(0,N.H)(o,{FeatureTypeList:{FeatureType:r=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},i=new Set([4326]),a=u=>{const c=parseInt(u.textContent.match(/(?<wkid>\d+$)/i)?.groups?.wkid,10);Number.isNaN(c)||i.add(c)};return(0,N.h)(r,{Name:u=>{const{name:c,prefix:f}=J(u.textContent);t.typeName=`${f}:${c}`,t.name=c,t.namespacePrefix=f,t.namespaceUri=u.lookupNamespaceURI(f)},Abstract:u=>{t.description=u.textContent},Title:u=>{t.title=u.textContent},WGS84BoundingBox:u=>{t.extent=function z(o){let r,t,i,a;for(const u of o.children)switch(u.localName){case"LowerCorner":[r,t]=u.textContent.split(" ").map(c=>Number.parseFloat(c));break;case"UpperCorner":[i,a]=u.textContent.split(" ").map(c=>Number.parseFloat(c))}return{xmin:r,ymin:t,xmax:i,ymax:a,spatialReference:k.Zn}}(u)},DefaultSRS:a,DefaultCRS:a,OtherSRS:a,OtherCRS:a}),t.title||(t.title=t.name),t.supportedSpatialReferences.push(...i),t}}})}(t));return{operations:b(t),get featureTypes(){return Array.from(i())},readFeatureTypes:i}}const I=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function b(o){let r=!1;const t={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if((0,N.h)(o,{OperationsMetadata:{Operation:i=>{switch(i.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:a=>{t.GetCapabilities.url=a.getAttribute(_)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:a=>{t.DescribeFeatureType.url=a.getAttribute(_)}}}};case"GetFeature":return{DCP:{HTTP:{Get:a=>{t.GetFeature.url=a.getAttribute(_)}}},Parameter:a=>{if("outputFormat"===a.getAttribute("name"))return{AllowedValues:{Value:u=>{const c=u.textContent;I.has(c.toLowerCase())&&(t.GetFeature.outputFormat=c)}}}}}}},Constraint:i=>{switch(i.getAttribute("name")){case"KVPEncoding":return{DefaultValue:a=>{r="true"===a.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:a=>{t.GetFeature.supportsPagination="true"===a.textContent.toLowerCase()}}}}}}),!r)throw new m.Z("wfs-layer:kvp-encoding-not-supported","WFS service doesn't support key/value pair (KVP) encoding");if((0,h.Wi)(t.GetFeature.outputFormat))throw new m.Z("wfs-layer:geojson-not-supported","WFS service doesn't support GeoJSON output format");return t}function P(o,r){(0,j.$U)(o)&&((0,j.D6)(o,r.operations.DescribeFeatureType.url,!0)&&(r.operations.DescribeFeatureType.url=(0,j.hO)(r.operations.DescribeFeatureType.url)),(0,j.D6)(o,r.operations.GetFeature.url,!0)&&(r.operations.GetFeature.url=(0,j.hO)(r.operations.GetFeature.url)))}function H(o,r,t){return(0,w.sE)(o,i=>t?i.name===r&&i.namespaceUri===t:i.typeName===r||i.name===r)}function W(o,r,t){return U.apply(this,arguments)}function U(){return(U=(0,T.Z)(function*(o,r,t,i={}){const{featureType:a,extent:u}=yield R(o,r,t,i),{fields:c,geometryType:f,swapXY:g,objectIdField:S,geometryField:x}=yield A(o,a.typeName,i);return{url:o.operations.GetCapabilities.url,name:a.name,namespaceUri:a.namespaceUri,fields:c,geometryField:x,geometryType:f,objectIdField:S,spatialReference:i.spatialReference??te.Z.WGS84,extent:u,swapXY:g,wfsCapabilities:o,customParameters:i.customParameters}})).apply(this,arguments)}function R(o,r,t){return v.apply(this,arguments)}function v(){return(v=(0,T.Z)(function*(o,r,t,i={}){const{spatialReference:a=te.Z.WGS84}=i,u=o.readFeatureTypes(),c=r?H(u,r,t):u.next().value;if((0,h.Wi)(c))throw r?new m.Z(V,`The type '${r}' could not be found in the service`):new m.Z(ne,"The service is empty");let f=new le.Z({...c.extent,spatialReference:a});if(!(0,k.fS)(a,k.Zn))try{yield(0,Q.iQ)(k.Zn,a,void 0,i),f=(0,Q.iV)(f,k.Zn)}catch{throw new m.Z(s,"Projection not supported")}return{extent:f,spatialReference:a,featureType:c}})).apply(this,arguments)}function A(o,r){return F.apply(this,arguments)}function F(){return(F=(0,T.Z)(function*(o,r,t={}){const[i,a]=yield(0,D.as)([xe(o.operations.DescribeFeatureType.url,r,t),oe(o,r,t)]);if(i.error||a.error)throw new m.Z(L,`An error occurred while getting info about the feature type '${r}'`,{error:i.error||a.error});const{fields:u,errors:c}=i.value,f=i.value.geometryType||a.value.geometryType,g=a.value.swapXY;if((0,h.Wi)(f))throw new m.Z(re,`The geometry type could not be determined for type '${r}`,{typeName:r,geometryType:f,fields:u,errors:c});return{...B(u),geometryType:f,swapXY:g}})).apply(this,arguments)}function B(o){const r=o.find(i=>"geometry"===i.type);let t=o.find(i=>"oid"===i.type);return o=o.filter(i=>"geometry"!==i.type),t||(t=new O.Z({name:$,type:"oid",alias:$}),o.unshift(t)),{geometryField:r?.name??null,objectIdField:t.name,fields:o}}function oe(o,r){return ye.apply(this,arguments)}function ye(){return(ye=(0,T.Z)(function*(o,r,t={}){let i,a=!1;const[u,c]=yield Promise.all([Te(o.operations.GetFeature.url,r,o.operations.GetFeature.outputFormat,{...t,count:1}),(0,C.default)(o.operations.GetFeature.url,{responseType:"text",query:Se(r,void 0,{...t,count:1}),signal:t?.signal})]),f="FeatureCollection"===u.type&&u.features[0]?.geometry;if(f){let g;switch(i=se.Mk.fromJSON((0,ie.q9)(f.type)),f.type){case"Point":g=f.coordinates;break;case"LineString":case"MultiPoint":g=f.coordinates[0];break;case"MultiLineString":case"Polygon":g=f.coordinates[0][0];break;case"MultiPolygon":g=f.coordinates[0][0][0]}const S=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(c.data);if(S){const x=g[0].toFixed(3),M=g[1].toFixed(3),K=parseFloat(S[1]).toFixed(3);x===parseFloat(S[2]).toFixed(3)&&M===K&&(a=!0)}}return{geometryType:i,swapXY:a}})).apply(this,arguments)}function xe(o,r,t){return de.apply(this,arguments)}function de(){return(de=(0,T.Z)(function*(o,r,t){return Fe(r,(yield(0,C.default)(o,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:G,TYPENAME:r,...t?.customParameters},signal:t?.signal})).data)})).apply(this,arguments)}function Fe(o,r){const{name:t}=J(o),i=he(r);we(i);const a=(0,w.sE)((0,N.H)(i.firstElementChild,{element:u=>({name:u.getAttribute("name"),typeName:J(u.getAttribute("type")).name})}),({name:u})=>u===t);if((0,h.pC)(a)){const u=(0,w.sE)((0,N.H)(i.firstElementChild,{complexType:c=>c}),c=>c.getAttribute("name")===a.typeName);if((0,h.pC)(u))return function Pe(o){const r=[],t=[];let i;const a=(0,N.H)(o,{complexContent:{extension:{sequence:{element:u=>u}}}});for(const u of a){const c=u.getAttribute("name");if(!c)continue;let f,g;if(u.hasAttribute("type")?f=J(u.getAttribute("type")).name:(0,N.h)(u,{simpleType:{restriction:M=>(f=J(M.getAttribute("base")).name,{maxLength:K=>{g=+K.getAttribute("value")}})}}),!f)continue;const S="true"===u.getAttribute("nillable");let x=!1;switch(f.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":t.push(new O.Z({name:c,alias:c,type:"integer",nullable:S}));break;case"float":case"double":case"decimal":t.push(new O.Z({name:c,alias:c,type:"double",nullable:S}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":t.push(new O.Z({name:c,alias:c,type:"string",nullable:S,length:g??255}));break;case"datetime":case"date":t.push(new O.Z({name:c,alias:c,type:"date",nullable:S,length:g??36}));break;case"pointpropertytype":i="point",x=!0;break;case"multipointpropertytype":i="multipoint",x=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":i="polyline",x=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":i="polygon",x=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":x=!0,r.push(new m.Z(re,`geometry type '${f}' is not supported`,{type:(new XMLSerializer).serializeToString(o)}));break;default:r.push(new m.Z("wfs-layer:unknown-field-type",`Unknown field type '${f}'`,{type:(new XMLSerializer).serializeToString(o)}))}x&&t.push(new O.Z({name:c,alias:c,type:"geometry",nullable:S}))}for(const u of t)if("integer"===u.type&&!u.nullable&&Ee.has(u.name.toLowerCase())){u.type="oid";break}return{geometryType:i,fields:t,errors:r}}(u)}throw new m.Z(V,`Type '${o}' not found in document`,{document:(new XMLSerializer).serializeToString(i)})}const Ee=new Set(["objectid","fid"]);function Te(o,r,t,i){return me.apply(this,arguments)}function me(){return(me=(0,T.Z)(function*(o,r,t,i){let{data:a}=yield(0,C.default)(o,{responseType:"text",query:Se(r,t,i),signal:i?.signal});a=a.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{if(i?.dateFields?.length){const u=new Set(i.dateFields);return JSON.parse(a,(c,f)=>u.has(c)?q(f):f)}return JSON.parse(a)}catch(u){throw new m.Z(fe,"Error while parsing the\xa0response",{response:a,error:u})}})).apply(this,arguments)}function Se(o,r,t){return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:G,TYPENAMES:o,OUTPUTFORMAT:r,SRSNAME:"EPSG:4326",STARTINDEX:t?.startIndex,COUNT:t?.count,...t?.customParameters}}function he(o){return(new DOMParser).parseFromString(o.trim(),"text/xml")}function J(o){const[r,t]=o.split(":");return{prefix:t?r:"",name:t??r}}function we(o){let r,t;if((0,N.h)(o.firstElementChild,{Exception:i=>(r=i.getAttribute("exceptionCode"),{ExceptionText:a=>{t=a.textContent}})}),r)throw new m.Z(`wfs-layer:${r}`,t)}},7255:(be,X,y)=>{function T(C,m){for(const w of C.children)if(w.localName in m){const h=m[w.localName];if("function"==typeof h){const D=h(w);D&&T(w,D)}else T(w,h)}}function*Y(C,m){for(const w of C.children)if(w.localName in m){const h=m[w.localName];"function"==typeof h?yield h(w):yield*Y(w,h)}}y.d(X,{H:()=>Y,h:()=>T})}}]);