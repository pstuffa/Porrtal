"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[5810],{75810:(R,h,e)=>{e.r(h),e.d(h,{default:()=>j});var d=e(15861),i=e(17626),E=e(84792),v=e(26584),u=e(63290),c=e(62208),D=e(99959),p=e(10699),O=e(21726),l=e(77712),m=(e(85931),e(8314),e(90912),e(68653)),P=e(76898),M=e(79334),C=e(44917),T=e(5143),g=e(65088),I=e(49286),L=e(6647),S=e(13812),U=e(36596);const y=u.Z.getLogger("esri.layers.ElevationLayer");let a=class extends((0,T.Z)((0,g.Y)((0,I.q)((0,L.I)((0,D.R)(C.Z)))))){constructor(...r){super(...r),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=(0,U.w)()}normalizeCtorArgs(r,t){return"string"==typeof r?{url:r,...t}:r}destroy(){this._lercDecoder=(0,c.RY)(this._lercDecoder)}set minScale(r){this.constructed&&y.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`)}get minScale(){}set maxScale(r){this.constructed&&y.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`)}get maxScale(){}readVersion(r,t){let s=t.currentVersion;return s||(s=9.3),s}load(r){const t=(0,c.pC)(r)?r.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:s=>{for(let o=0;o<s.typeKeywords.length;o++)if("elevation 3d layer"===s.typeKeywords[o].toLowerCase())return!0;throw new v.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},r).catch(p.r9).then(()=>this._fetchImageService(t))),Promise.resolve(this)}fetchTile(r,t,s,o){const _=(0,c.pC)((o=o||{signal:null}).signal)?o.signal:o.signal=(new AbortController).signal,A={responseType:"array-buffer",signal:_},f={noDataValue:o.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(r,t,s,o)).then(()=>(0,E.default)(this.getTileUrl(r,t,s),A)).then(n=>this._lercDecoder.decode(n.data,f,_)).then(n=>({values:n.pixelData,width:n.width,height:n.height,maxZError:n.fileInfo.maxZError,noDataValue:n.noDataValue,minValue:n.minValue,maxValue:n.maxValue}))}getTileUrl(r,t,s){const _=(0,O.B7)({...this.parsedUrl.query,blankTile:!(!this.tilemapCache&&this.supportsBlankTile)&&null});return`${this.parsedUrl.path}/tile/${r}/${t}/${s}${_?"?"+_:""}`}queryElevation(r,t){var s=this;return(0,d.Z)(function*(){const{ElevationQuery:o}=yield e.e(2493).then(e.bind(e,42493));return(0,p.k_)(t),(new o).query(s,r,t)})()}createElevationSampler(r,t){var s=this;return(0,d.Z)(function*(){const{ElevationQuery:o}=yield e.e(2493).then(e.bind(e,42493));return(0,p.k_)(t),(new o).createSampler(s,r,t)})()}_fetchTileAvailability(r,t,s,o){return this.tilemapCache?this.tilemapCache.fetchAvailability(r,t,s,o):Promise.resolve("unknown")}_fetchImageService(r){var t=this;return(0,d.Z)(function*(){if(t.sourceJSON)return t.sourceJSON;const s={query:{f:"json",...t.parsedUrl.query},responseType:"json",signal:r},o=yield(0,E.default)(t.parsedUrl.path,s);o.ssl&&(t.url=t.url.replace(/^http:/i,"https:")),t.sourceJSON=o.data,t.read(o.data,{origin:"service",url:t.parsedUrl})})()}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};(0,i._)([(0,l.Cb)({json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0),(0,i._)([(0,l.Cb)({readOnly:!0,type:M.Z})],a.prototype,"heightModelInfo",void 0),(0,i._)([(0,l.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),(0,i._)([(0,l.Cb)({type:["show","hide"]})],a.prototype,"listMode",void 0),(0,i._)([(0,l.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],a.prototype,"minScale",null),(0,i._)([(0,l.Cb)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],a.prototype,"maxScale",null),(0,i._)([(0,l.Cb)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],a.prototype,"opacity",void 0),(0,i._)([(0,l.Cb)({type:["ArcGISTiledElevationServiceLayer"]})],a.prototype,"operationalLayerType",void 0),(0,i._)([(0,l.Cb)()],a.prototype,"sourceJSON",void 0),(0,i._)([(0,l.Cb)({json:{read:!1},value:"elevation",readOnly:!0})],a.prototype,"type",void 0),(0,i._)([(0,l.Cb)(S.HQ)],a.prototype,"url",void 0),(0,i._)([(0,l.Cb)()],a.prototype,"version",void 0),(0,i._)([(0,m.r)("version",["currentVersion"])],a.prototype,"readVersion",null),a=(0,i._)([(0,P.j)("esri.layers.ElevationLayer")],a),a.prototype.fetchTile.__isDefault__=!0;const j=a}}]);