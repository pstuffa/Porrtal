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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[289],{70289:(le,u,e)=>{e.r(u),e.d(u,{default:()=>re});var f,c=e(15861),r=e(17626),P=(e(29132),e(73281)),T=(e(4832),e(49067),e(96794),e(69747),e(40425),e(69357),e(40342)),j=e(73640),O=e(33474),g=e(32088),Z=e(84792),F=e(20383),y=e(26584),L=e(63290),N=e(62208),D=e(99959),E=e(10699),o=e(77712),S=(e(85931),e(90912)),C=e(68653),I=e(76898),U=e(383),m=e(71774),A=e(44917),J=e(65088),M=e(552),G=e(50107),z=e(35126),Q=e(81380),V=e(49286),Y=e(6647),W=e(30346),B=e(99555),H=e(97941),l=e(13812),X=e(55911),v=e(36630),$=e(170),K=e(62667),w=e(86810);let d=f=class extends w.wq{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new f({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,r._)([(0,o.Cb)({type:Number,json:{write:!0}})],d.prototype,"age",void 0),(0,r._)([(0,o.Cb)({type:Number,json:{write:!0}})],d.prototype,"ageReceived",void 0),(0,r._)([(0,o.Cb)({type:Number,json:{write:!0}})],d.prototype,"displayCount",void 0),(0,r._)([(0,o.Cb)({type:Number,json:{write:!0}})],d.prototype,"maxObservations",void 0),d=f=(0,r._)([(0,I.j)("esri.layers.support.PurgeOptions")],d);const b=d;var k=e(39683),q=e(96854),_=e(49430),ee=e(82706),R=e(65234),te=e(2004);const x=(0,X.v)();let n=class extends((0,Q.M)((0,z.b)((0,M.h)((0,H.n)((0,B.M)((0,W.Q)((0,J.Y)((0,V.q)((0,Y.I)((0,D.R)((0,G.N)(A.Z)))))))))))){constructor(...i){super(...i),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new b,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=R.Z.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(i,t){return"string"==typeof i?{url:i,...t}:i}load(i){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new y.Z("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=(0,N.pC)(i)?i.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},i).catch(E.r9).then(()=>this._fetchService(t))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(i){(0,v.YN)(i,this.fieldsIndex),this._set("renderer",i)}readRenderer(i,t,s){const p=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(p){const a=(0,O.a)(p,t,s)||void 0;return a||L.Z.getLogger(this.declaredClass).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:s}),a}if(t.defaultSymbol)return t.types&&t.types.length?new j.Z({defaultSymbol:h(t.defaultSymbol,t,s),field:t.typeIdField,uniqueValueInfos:t.types.map(a=>({id:a.id,symbol:h(a.symbol,a,s)}))}):new T.Z({symbol:h(t.defaultSymbol,t,s)})}connect(i){var t=this;return(0,c.Z)(function*(){const[{createConnection:s}]=yield Promise.all([e.e(3542).then(e.bind(e,3542)),t.load()]),p=m.Mk.toJSON(t.geometryType),{customParameters:a=null,definitionExpression:oe=null,geometryDefinition:ne=null,maxReconnectionAttempts:ie=0,maxReconnectionInterval:se=20,spatialReference:ae=t.spatialReference}=i||t.createConnectionParameters();return s(t.parsedUrl,t.spatialReference,ae,p,{geometry:ne,where:oe},ie,se,a)})()}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(i){return(0,_.eZ)(this,i)}createQuery(){const i=new q.Z;return i.returnGeometry=!0,i.outFields=["*"],i.where=this.definitionExpression||"1=1",i}getFieldDomain(i,t){if(!this.fields)return null;let s=null;return this.fields.some(p=>(p.name===i&&(s=p.domain),!!s)),s}getField(i){return this.fieldsIndex.get(i)}serviceSupportsSpatialReference(i){return!0}_fetchService(i){var t=this;return(0,c.Z)(function*(){if(t.webSocketUrl){if(!t.timeInfo?.trackIdField)throw new y.Z("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!t.objectIdField)throw new y.Z("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!t.fields)throw new y.Z("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!t.geometryType)throw new y.Z("stream-layer:missing-metadata","The stream layer geometryType must be specified.");t.url=t.webSocketUrl}else if(!t.sourceJSON){const{data:s}=yield(0,Z.default)(t.parsedUrl.path,{query:{f:"json",...t.customParameters,...t.parsedUrl.query},responseType:"json",signal:i});t.sourceJSON=s}return t.sourceJSON={...t.sourceJSON??{},objectIdField:"__esri_stream_id__"},t.read(t.sourceJSON,{origin:"service",url:t.parsedUrl}),(0,v.YN)(t.renderer,t.fieldsIndex),(0,v.UF)(t.timeInfo,t.fieldsIndex),(0,k.y)(t,{origin:"service"})})()}};(0,r._)([(0,o.Cb)({type:String})],n.prototype,"copyright",void 0),(0,r._)([(0,o.Cb)({readOnly:!0})],n.prototype,"defaultPopupTemplate",null),(0,r._)([(0,o.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],n.prototype,"definitionExpression",void 0),(0,r._)([(0,o.Cb)({type:String})],n.prototype,"displayField",void 0),(0,r._)([(0,o.Cb)({type:ee.Z})],n.prototype,"elevationInfo",void 0),(0,r._)([(0,o.Cb)(x.fields)],n.prototype,"fields",void 0),(0,r._)([(0,o.Cb)(x.fieldsIndex)],n.prototype,"fieldsIndex",void 0),(0,r._)([(0,o.Cb)({type:te.Z})],n.prototype,"geometryDefinition",void 0),(0,r._)([(0,o.Cb)({type:m.Mk.apiValues,json:{read:{reader:m.Mk.read}}})],n.prototype,"geometryType",void 0),(0,r._)([(0,o.Cb)(l.iR)],n.prototype,"labelsVisible",void 0),(0,r._)([(0,o.Cb)({type:[$.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:K.r},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],n.prototype,"labelingInfo",void 0),(0,r._)([(0,o.Cb)(l.rn)],n.prototype,"legendEnabled",void 0),(0,r._)([(0,o.Cb)({type:["show","hide"]})],n.prototype,"listMode",void 0),(0,r._)([(0,o.Cb)({type:S.z8})],n.prototype,"maxReconnectionAttempts",void 0),(0,r._)([(0,o.Cb)({type:S.z8})],n.prototype,"maxReconnectionInterval",void 0),(0,r._)([(0,o.Cb)(l.u1)],n.prototype,"maxScale",void 0),(0,r._)([(0,o.Cb)(l.rO)],n.prototype,"minScale",void 0),(0,r._)([(0,o.Cb)({type:String})],n.prototype,"objectIdField",void 0),(0,r._)([(0,o.Cb)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],n.prototype,"operationalLayerType",void 0),(0,r._)([(0,o.Cb)(l.C_)],n.prototype,"popupEnabled",void 0),(0,r._)([(0,o.Cb)({type:P.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],n.prototype,"popupTemplate",void 0),(0,r._)([(0,o.Cb)({type:b})],n.prototype,"purgeOptions",void 0),(0,r._)([(0,o.Cb)({types:g.A,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:g.o,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],n.prototype,"renderer",null),(0,r._)([(0,C.r)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,C.r)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],n.prototype,"readRenderer",null),(0,r._)([(0,o.Cb)(l.YI)],n.prototype,"screenSizePerspectiveEnabled",void 0),(0,r._)([(0,o.Cb)()],n.prototype,"sourceJSON",void 0),(0,r._)([(0,o.Cb)({type:R.Z,json:{origins:{service:{read:{source:"spatialReference"}}}}})],n.prototype,"spatialReference",void 0),(0,r._)([(0,o.Cb)({json:{read:!1}})],n.prototype,"type",void 0),(0,r._)([(0,o.Cb)(l.HQ)],n.prototype,"url",void 0),(0,r._)([(0,o.Cb)({type:Number})],n.prototype,"updateInterval",void 0),(0,r._)([(0,o.Cb)({type:String})],n.prototype,"webSocketUrl",void 0),n=(0,r._)([(0,I.j)("esri.layers.StreamLayer")],n);const h=(0,U.d)({types:F.QT}),re=n}}]);