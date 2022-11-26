"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[8762],{98762:(w,g,t)=>{t.r(g),t.d(g,{default:()=>Ce});var l=t(15861),s=t(17626),C=(t(29132),t(73281)),b=(t(4832),t(49067),t(96794),t(69747),t(40425),t(69357),t(40342),t(14726),t(33474),t(32088)),m=t(62208),z=t(99959),V=t(94113),K=t(21726),o=t(77712),q=(t(85931),t(8314)),W=t(90912),A=t(76898),k=t(99433),I=t(71774),_=t(44917),ee=t(26584),te=t(80542),re=t(47996),B=t(10699),se=t(59289),Y=t(56554),F=t(83774),oe=t(17253),G=t(2004);let f=class extends((0,te.p)(re.Z)){constructor(){var e;super(...arguments),e=this,this.capabilities=(0,Y.MS)(!1,!1),this.type="wfs",this.refresh=(0,B.Ds)(function(){var r=(0,l.Z)(function*(n){yield e.load();const{extent:a}=yield e._connection.invoke("refresh",n);return e.sourceJSON.extent=a,{dataChanged:!0,updates:{extent:e.sourceJSON.extent}}});return function(n){return r.apply(this,arguments)}}())}load(e){const r=((0,m.pC)(e)&&e.signal)??null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}openPorts(){var e=this;return(0,l.Z)(function*(){return yield e.load(),e._connection.openPorts()})()}queryFeatures(e,r={}){var n=this;return(0,l.Z)(function*(){yield n.load(r);const a=yield n._connection.invoke("queryFeatures",e?e.toJSON():null,r);return oe.default.fromJSON(a)})()}queryFeaturesJSON(e,r={}){var n=this;return(0,l.Z)(function*(){return yield n.load(r),n._connection.invoke("queryFeatures",e?e.toJSON():null,r)})()}queryFeatureCount(e,r={}){var n=this;return(0,l.Z)(function*(){return yield n.load(r),n._connection.invoke("queryFeatureCount",e?e.toJSON():null,r)})()}queryObjectIds(e,r={}){var n=this;return(0,l.Z)(function*(){return yield n.load(r),n._connection.invoke("queryObjectIds",e?e.toJSON():null,r)})()}queryExtent(e,r={}){var n=this;return(0,l.Z)(function*(){yield n.load(r);const a=yield n._connection.invoke("queryExtent",e?e.toJSON():null,r);return{count:a.count,extent:G.Z.fromJSON(a.extent)}})()}querySnapping(e,r={}){var n=this;return(0,l.Z)(function*(){return yield n.load(r),n._connection.invoke("querySnapping",e,r)})()}_createLoadOptions(e){var r=this;return(0,l.Z)(function*(){const{url:n,customParameters:a,name:d,namespaceUri:v,spatialReference:p,fields:S,geometryType:T,swapXY:U}=r.layer;if(!n)throw new ee.Z("wfs-layer:missing-url","WFSLayer must be created with a url");r.wfsCapabilities||(r.wfsCapabilities=yield(0,F.FU)(n,{customParameters:a,...e}));const c=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some(j=>null==r.layer[j])?yield(0,F.be)(r.wfsCapabilities,d,v,{spatialReference:p,customParameters:a,signal:e?.signal}):{...(0,F.eB)(S),geometryType:T,name:d,namespaceUri:v,spatialReference:p,swapXY:U},Fe=(0,m.Wg)((0,F.ft)(r.wfsCapabilities.readFeatureTypes(),c.name,c.namespaceUri)),Oe=I.Mk.toJSON(c.geometryType);return{customParameters:a,featureType:Fe,fields:c.fields.map(j=>j.toJSON()),geometryField:c.geometryField,geometryType:Oe,getFeatureUrl:r.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:r.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:c.objectIdField,spatialReference:c.spatialReference.toJSON(),swapXY:c.swapXY}})()}_startWorker(e){var r=this;return(0,l.Z)(function*(){const[n,a]=yield(0,B.as)([r._createLoadOptions(e),(0,se.bA)("WFSSourceWorker",{...e,strategy:(0,q.Z)("feature-layers-workers")?"dedicated":"local"})]),d=n.error||a.error||null,v=a.value||null;if(d)throw v&&v.close(),d;const p=n.value;r._connection=a.value;const{extent:S}=yield r._connection.invoke("load",p,e);r.sourceJSON={extent:S,fields:p.fields,geometryType:p.geometryType,objectIdField:p.objectIdField,geometryField:p.geometryField,drawingInfo:(0,Y.bU)(p.geometryType),name:p.featureType.title,wfsInfo:{name:p.featureType.name,featureUrl:p.getFeatureUrl,maxFeatures:3e3,swapXY:p.swapXY,supportedSpatialReferences:p.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:p.featureType.namespaceUri}}})()}};(0,s._)([(0,o.Cb)()],f.prototype,"capabilities",void 0),(0,s._)([(0,o.Cb)({constructOnly:!0})],f.prototype,"layer",void 0),(0,s._)([(0,o.Cb)()],f.prototype,"sourceJSON",void 0),(0,s._)([(0,o.Cb)()],f.prototype,"type",void 0),(0,s._)([(0,o.Cb)()],f.prototype,"wfsCapabilities",void 0),f=(0,s._)([(0,A.j)("esri.layers.graphics.sources.WFSSource")],f);var x,ie=t(552),ne=t(50107),ae=t(35126),pe=t(49286),le=t(32629),ue=t(6647),de=t(30346),ye=t(99555),ce=t(97941),h=t(13812),me=t(47717),X=t(36255),fe=t(55911),P=t(36630),he=t(170),ve=t(62667),O=t(84952),ge=t(49430),H=t(65234);const $=(0,fe.v)();let i=x=class extends((0,le.c)((0,ne.N)((0,ae.b)((0,ie.h)((0,ce.n)((0,de.Q)((0,ye.M)((0,pe.q)((0,ue.I)((0,z.R)(_.Z))))))))))){constructor(e){super(e),this.capabilities=null,this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new f({layer:this}),this.spatialReference=H.Z.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}static fromWFSLayerInfo(e){const{customParameters:r,fields:n,geometryField:a,geometryType:d,name:v,namespaceUri:p,objectIdField:S,spatialReference:T,swapXY:U,url:E,wfsCapabilities:c}=e;return new x({customParameters:r,fields:n,geometryField:a,geometryType:d,name:v,namespaceUri:p,objectIdField:S,spatialReference:T,swapXY:U,url:E,wfsCapabilities:c})}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),(0,P.YN)(this.renderer,this.fieldsIndex),(0,P.UF)(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,r,n){const a=e.filter(d=>d.name!==F.M8);this.geometryField&&a.unshift(new X.Z({name:this.geometryField,alias:this.geometryField,type:"geometry"})),(0,V.RB)(n,a.map(d=>d.toJSON()),r)}get parsedUrl(){return this.url?(0,K.mN)(this.url):null}set renderer(e){(0,P.YN)(e,this.fieldsIndex),this._set("renderer",e)}createPopupTemplate(e){return(0,ge.eZ)(this,e)}createQuery(){const e=new O.Z;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:n}=this;return e.timeExtent=null!=r&&null!=n?n.offset(-r.value,r.unit):n||null,e}getFieldDomain(e,r){return this.getField(e)?.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,r){return this.load().then(()=>this.source.queryFeatures(O.Z.from(e)||this.createQuery(),r)).then(n=>{if(n?.features)for(const a of n.features)a.layer=a.sourceLayer=this;return n})}queryObjectIds(e,r){return this.load().then(()=>this.source.queryObjectIds(O.Z.from(e)||this.createQuery(),r))}queryFeatureCount(e,r){return this.load().then(()=>this.source.queryFeatureCount(O.Z.from(e)||this.createQuery(),r))}queryExtent(e,r){return this.load().then(()=>this.source.queryExtent(O.Z.from(e)||this.createQuery(),r))}hasDataChanged(){var e=this;return(0,l.Z)(function*(){try{const{dataChanged:r,updates:n}=yield e.source.refresh(e.customParameters);return(0,m.pC)(n)&&e.read(n,{origin:"service",url:e.parsedUrl,ignoreDefaults:!0}),r}catch{}return!1})()}};(0,s._)([(0,o.Cb)({readOnly:!0,aliasOf:"source.capabilities"})],i.prototype,"capabilities",void 0),(0,s._)([(0,o.Cb)({type:String})],i.prototype,"copyright",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],i.prototype,"createQueryVersion",null),(0,s._)([(0,o.Cb)({json:{name:"wfsInfo.customParameters",write:{ignoreOrigin:!0}}})],i.prototype,"customParameters",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),(0,s._)([(0,o.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),(0,s._)([(0,o.Cb)({type:String})],i.prototype,"displayField",void 0),(0,s._)([(0,o.Cb)(h.PV)],i.prototype,"elevationInfo",void 0),(0,s._)([(0,o.Cb)(me.d)],i.prototype,"featureReduction",void 0),(0,s._)([(0,o.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"featureUrl",void 0),(0,s._)([(0,o.Cb)({type:[X.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],i.prototype,"fields",void 0),(0,s._)([(0,k.c)("fields")],i.prototype,"writeFields",null),(0,s._)([(0,o.Cb)($.fieldsIndex)],i.prototype,"fieldsIndex",void 0),(0,s._)([(0,o.Cb)({type:G.Z,json:{name:"extent"}})],i.prototype,"fullExtent",void 0),(0,s._)([(0,o.Cb)()],i.prototype,"geometryField",void 0),(0,s._)([(0,o.Cb)({type:String,json:{read:{source:"layerDefinition.geometryType",reader:I.Mk.read},write:{target:"layerDefinition.geometryType",writer:I.Mk.write,ignoreOrigin:!0},origins:{service:{read:I.Mk.read}}}})],i.prototype,"geometryType",void 0),(0,s._)([(0,o.Cb)({type:String})],i.prototype,"id",void 0),(0,s._)([(0,o.Cb)(h.iR)],i.prototype,"labelsVisible",void 0),(0,s._)([(0,o.Cb)({type:[he.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ve.r},write:!0}})],i.prototype,"labelingInfo",void 0),(0,s._)([(0,o.Cb)(h.rn)],i.prototype,"legendEnabled",void 0),(0,s._)([(0,o.Cb)({type:["show","hide"]})],i.prototype,"listMode",void 0),(0,s._)([(0,o.Cb)({type:String})],i.prototype,"objectIdField",void 0),(0,s._)([(0,o.Cb)({type:["WFS"]})],i.prototype,"operationalLayerType",void 0),(0,s._)([(0,o.Cb)({type:W.z8,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"maxFeatures",void 0),(0,s._)([(0,o.Cb)({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],i.prototype,"mode",void 0),(0,s._)([(0,o.Cb)({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"name",void 0),(0,s._)([(0,o.Cb)({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"namespaceUri",void 0),(0,s._)([(0,o.Cb)(h.bT)],i.prototype,"opacity",void 0),(0,s._)([(0,o.Cb)($.outFields)],i.prototype,"outFields",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],i.prototype,"parsedUrl",null),(0,s._)([(0,o.Cb)(h.C_)],i.prototype,"popupEnabled",void 0),(0,s._)([(0,o.Cb)({type:C.Z,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),(0,s._)([(0,o.Cb)({types:b.A,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:b.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],i.prototype,"renderer",null),(0,s._)([(0,o.Cb)(h.YI)],i.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],i.prototype,"source",void 0),(0,s._)([(0,o.Cb)({type:H.Z,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],i.prototype,"spatialReference",void 0),(0,s._)([(0,o.Cb)({readOnly:!0,type:[W.z8],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"spatialReferences",void 0),(0,s._)([(0,o.Cb)({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"swapXY",void 0),(0,s._)([(0,o.Cb)({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],i.prototype,"title",void 0),(0,s._)([(0,o.Cb)({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),(0,s._)([(0,o.Cb)(h.HQ)],i.prototype,"url",void 0),(0,s._)([(0,o.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"version",void 0),(0,s._)([(0,o.Cb)({aliasOf:"source.wfsCapabilities"})],i.prototype,"wfsCapabilities",void 0),i=x=(0,s._)([(0,A.j)("esri.layers.WFSLayer")],i);const Ce=i},87757:(w,g,t)=>{t.d(g,{g:()=>l});const l={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},56554:(w,g,t)=>{t.d(g,{Dm:()=>L,Hq:()=>Q,MS:()=>J,bU:()=>D});var l=t(8314),s=t(58817),Z=t(87757),C=t(24837);function D(u){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===u||"esriGeometryMultipoint"===u?C.I4:"esriGeometryPolyline"===u?C.ET:C.lF}}}const M=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let N=1;function L(u,y){if((0,l.Z)("esri-csp-restrictions"))return()=>({[y]:null,...u});try{let R=`this.${y} = null;`;for(const m in u)R+=`this${M.test(m)?`.${m}`:`["${m}"]`} = ${JSON.stringify(u[m])};`;const b=new Function(`\n      return class AttributesClass$${N++} {\n        constructor() {\n          ${R};\n        }\n      }\n    `)();return()=>new b}catch{return()=>({[y]:null,...u})}}function Q(u={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(u)}}]}function J(u,y){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:u},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:y,supportsDelete:y,supportsEditing:y,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:y,supportsExceedsLimitStatistics:!0},query:Z.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:y,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);