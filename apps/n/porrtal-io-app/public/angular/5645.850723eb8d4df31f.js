"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[5645],{14259:(B,U,t)=>{t.d(U,{q:()=>M});var p,T,A={exports:{}};p=A,void 0!==(T=function(){function d(e,r,_,s,i){for(;s>_;){if(s-_>600){var n=s-_+1,a=r-_+1,h=Math.log(n),u=.5*Math.exp(2*h/3),m=.5*Math.sqrt(h*u*(n-u)/n)*(a-n/2<0?-1:1);d(e,r,Math.max(_,Math.floor(r-a*u/n+m)),Math.min(s,Math.floor(r+(n-a)*u/n+m)),i)}var f=e[r],R=_,O=s;for(P(e,_,r),i(e[s],f)>0&&P(e,_,s);R<O;){for(P(e,R,O),R++,O--;i(e[R],f)<0;)R++;for(;i(e[O],f)>0;)O--}0===i(e[_],f)?P(e,_,O):P(e,++O,s),O<=r&&(_=O+1),r<=O&&(s=O-1)}}function P(e,r,_){var s=e[r];e[r]=e[_],e[_]=s}function I(e,r){return e<r?-1:e>r?1:0}return function c(e,r,_,s,i){d(e,r,_||0,s||e.length-1,i||I)}}())&&(p.exports=T);const M=A.exports},77044:(B,U,t)=>{t.d(U,{Y:()=>T});var p=t(62208);function E(e,r){return e?r?4:3:r?3:2}function T(e,r,_,s,i){if((0,p.Wi)(r)||!r.lengths.length)return null;const n="upperLeft"===i?.originPosition?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const a=e.coords,h=[],u=_?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:m,coords:f}=r,R=E(_,s);let O=0;for(const y of m){const D=A(u,f,O,y,_,s,n);D&&h.push(D),O+=y*R}if(h.sort((y,D)=>{let v=n*y[2]-n*D[2];return 0===v&&_&&(v=y[4]-D[4]),v}),h.length){let y=6*h[0][2];a[0]=h[0][0]/y,a[1]=h[0][1]/y,_&&(y=6*h[0][4],a[2]=0!==y?h[0][3]/y:0),(a[0]<u[0]||a[0]>u[1]||a[1]<u[2]||a[1]>u[3]||_&&(a[2]<u[4]||a[2]>u[5]))&&(a.length=0)}if(!a.length){const y=r.lengths[0]?function M(e,r,_,s,i){const n=E(s,i);let a=r,h=r+n,u=0,m=0,f=0,R=0;for(let O=0,y=_-1;O<y;O++,a+=n,h+=n){const D=e[a],v=e[a+1],L=e[a+2],j=e[h],o=e[h+1],l=e[h+2],g=s?d(D,v,L,j,o,l):c(D,v,j,o);if(g)if(u+=g,s){const C=I(D,v,L,j,o,l);m+=g*C[0],f+=g*C[1],R+=g*C[2]}else{const C=P(D,v,j,o);m+=g*C[0],f+=g*C[1]}}return u>0?s?[m/u,f/u,R/u]:[m/u,f/u]:_>0?s?[e[r],e[r+1],e[r+2]]:[e[r],e[r+1]]:null}(f,0,m[0],_,s):null;if(!y)return null;a[0]=y[0],a[1]=y[1],_&&y.length>2&&(a[2]=y[2])}return e}function A(e,r,_,s,i,n,a=1){const h=E(i,n);let u=_,m=_+h,f=0,R=0,O=0,y=0,D=0;for(let L=0,j=s-1;L<j;L++,u+=h,m+=h){const o=r[u],l=r[u+1],g=r[u+2],C=r[m],W=r[m+1],S=r[m+2];let b=o*W-C*l;y+=b,f+=(o+C)*b,R+=(l+W)*b,i&&(b=o*S-C*g,O+=(g+S)*b,D+=b),o<e[0]&&(e[0]=o),o>e[1]&&(e[1]=o),l<e[2]&&(e[2]=l),l>e[3]&&(e[3]=l),i&&(g<e[4]&&(e[4]=g),g>e[5]&&(e[5]=g))}if(y*a>0&&(y*=-1),D*a>0&&(D*=-1),!y)return null;const v=[f,R,.5*y];return i&&(v[3]=O,v[4]=.5*D),v}function c(e,r,_,s){const i=_-e,n=s-r;return Math.sqrt(i*i+n*n)}function d(e,r,_,s,i,n){const a=s-e,h=i-r,u=n-_;return Math.sqrt(a*a+h*h+u*u)}function P(e,r,_,s){return[e+.5*(_-e),r+.5*(s-r)]}function I(e,r,_,s,i,n){return[e+.5*(s-e),r+.5*(i-r),_+.5*(n-_)]}},19702:(B,U,t)=>{t.d(U,{A:()=>r});var p=t(15861),E=t(17626),T=t(54024),A=t(10699),M=t(32917),c=t(77712),I=(t(85931),t(90912),t(76898)),e=t(36947);const r=_=>{let s=class extends _{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(i){super.postscript(i),(0,e.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}_validateHeightModelInfo(){var i=this;return(0,p.Z)(function*(){const n=new AbortController,a=n.signal;i.handles.add((0,T.kB)(()=>n.abort())),yield(0,M.N1)(()=>i.view.defaultsFromMap?.heightModelInfoReady,a),(0,A.k_)(a);const h=(0,e.Wt)(i.layer,i.view.heightModelInfo,i.supportsHeightUnitConversion);if(h)throw h})()}canResume(){const i=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!i||!i.minScale||!i.maxScale||i.minScale>=i.maxScale)}getSuspendInfo(){const i=super.getSuspendInfo(),n=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return n&&n.minScale&&n.maxScale&&n.minScale<n.maxScale&&(i.outsideScaleRange=!0),i}};return(0,E._)([(0,c.Cb)()],s.prototype,"view",void 0),(0,E._)([(0,c.Cb)()],s.prototype,"slicePlaneEnabled",void 0),s=(0,E._)([(0,I.j)("esri.views.3d.layers.LayerView3D")],s),s}},62124:(B,U,t)=>{t.r(U),t.d(U,{default:()=>j});var p=t(15861),E=t(17626),T=t(46160),A=t(46882),M=t(62208),c=t(32917),d=t(77712),e=(t(85931),t(90912),t(76898)),r=t(99683),_=t(58924),s=t(53753),i=t(719),n=t(17718),a=t(29739),h=t(69583),u=t(19702),m=t(32400),f=t(89765),R=t(36967),O=t(42743),y=t(45611);let v=class extends((0,u.A)(y.Z)){constructor(){super(...arguments),this.type="route-3d",this.loadedGraphics=new R.g,this._byObjectID=new Map,this.slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("processor",new m.D({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.updatingHandles.addOnCollectionChange(()=>this._routeItems,o=>this._routeItemsChanged(o),c.nn),this.addResolvingPromise((0,f.E)(this).then(o=>this.fullExtentInLocalViewSpatialReference=o)),this.handles.add((0,c.gx)(()=>this.view?.basemapTerrain?.ready,()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("processor",(0,M.SC)(this.processor)),this._get("_routeItems")?.destroy()}get _routeItems(){return new A.Z({getCollections:()=>[this.layer.pointBarriers,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.stops,this.layer.directionLines,this.layer.directionPoints,(0,M.pC)(this.layer.routeInfo)?new T.Z([this.layer.routeInfo]):null]})}_routeItemsChanged(o){if(o.removed.length){this.loadedGraphics.removeMany(o.removed.map(l=>{const g=this._byObjectID.get(l);return this._byObjectID.delete(l),g}));for(const l of o.removed)this.handles.remove(l)}if(o.added.length){this.loadedGraphics.addMany(o.added.map(l=>{const g=l.toGraphic();return this._byObjectID.set(l,g),g}));for(const l of o.added)this.handles.add([(0,c.YP)(()=>l.geometry,(g,C)=>{this._updateGraphic(l,"geometry",g,C)}),(0,c.YP)(()=>l.symbol,(g,C)=>{this._updateGraphic(l,"symbol",g,C)})],l)}}get legendEnabled(){return this.canResume()&&!this.processor?.frustumVisibilitySuspended}getSuspendInfo(){const o=super.getSuspendInfo();return o.outsideScaleRange=this.processor?.scaleVisibilitySuspended??!1,o.outsideOfView=this.processor?.frustumVisibilitySuspended??!1,o}fetchPopupFeatures(o,l){return(0,p.Z)(function*(){return(0,M.pC)(l)?l.clientGraphics:null})()}getHit(o){return this.processor.getHit(o)}whenGraphicBounds(o,l){return this.processor.whenGraphicBounds(o,l)}computeAttachmentOrigin(o,l){return this.processor?.computeAttachmentOrigin(o,l)}getSymbolLayerSize(o,l){return this.processor.getSymbolLayerSize(o,l)}queryGraphics(){var o=this;return(0,p.Z)(function*(){return new T.Z(o.loadedGraphics.toArray())})()}maskOccludee(o){return this.processor.maskOccludee(o)}highlight(o){if(function D(o){return o instanceof r.Z||o instanceof _.Z||o instanceof s.Z||o instanceof i.Z||o instanceof n.Z||o instanceof a.Z||o instanceof h.Z}(o)){const l=this._byObjectID.get(o);return this.processor.highlight(l)}return this.processor.highlight(o)}get updatePolicy(){return this.processor?.graphicsCore.effectiveUpdatePolicy||O.jq.SYNC}canResume(){return super.canResume()&&!this.processor?.scaleVisibilitySuspended}isUpdating(){return!(!this.processor?.updating&&this.view?.basemapTerrain?.ready)}get performanceInfo(){return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:this.processor?.elevationAlignment.updating??!1,visibilityFrustum:!this.processor?.frustumVisibilitySuspended}}_updateGraphic(o,l,g,C){const W=this._byObjectID.get(o);W[l]=g,L.graphic=W,L.property=l,L.oldValue=C,L.newValue=g,this.processor?.graphicsCore.graphicUpdateHandler(L)}};(0,E._)([(0,d.Cb)()],v.prototype,"_routeItems",null),(0,E._)([(0,d.Cb)()],v.prototype,"loadedGraphics",void 0),(0,E._)([(0,d.Cb)({readOnly:!0})],v.prototype,"legendEnabled",null),(0,E._)([(0,d.Cb)()],v.prototype,"layer",void 0),(0,E._)([(0,d.Cb)({readOnly:!0})],v.prototype,"processor",void 0),(0,E._)([(0,d.Cb)({type:Boolean})],v.prototype,"slicePlaneEnabled",void 0),v=(0,E._)([(0,e.j)("esri.views.3d.layers.RouteLayerView3D")],v);const L={graphic:null,property:null,oldValue:null,newValue:null},j=v},89765:(B,U,t)=>{t.d(U,{E:()=>A});var p=t(62208),E=t(46367),T=t(35082);function A(M){const c=M.view.spatialReference,d=M.layer.fullExtent,P=(0,p.pC)(d)&&d.spatialReference;if((0,p.Wi)(d)||!P)return Promise.resolve(null);if(P.equals(c))return Promise.resolve(d.clone());const I=(0,E.iV)(d,c);return(0,p.pC)(I)?Promise.resolve(I):M.view.state.isLocal?(0,T.projectGeometry)(d,c,M.layer.portalItem).then(e=>!M.destroyed&&e?e:void 0).catch(()=>null):Promise.resolve(null)}},36967:(B,U,t)=>{t.d(U,{g:()=>A});var p=t(61885),E=t(73234),T=t(28862);class A extends p.Z{constructor(){super(...arguments),this._set=new Set}clear(){if(this._set.size>0){const c=this.toArray();this._set.clear(),this.emit("after-changes",{type:E.y.REMOVE}),this.emit("change",{added:[],removed:c})}}get length(){return this._set.size}addMany(c){if(0!==c.length){for(const d of c)this._set.add(d);this.emit("after-changes",{type:E.y.ADD}),this.emit("change",{added:c,removed:[]})}}remove(c){this._set.delete(c)&&(this.emit("after-changes",{type:E.y.REMOVE}),this.emit("change",{added:[],removed:[c]}))}removeMany(c){const d=[];for(const P of c)this._set.delete(P)&&d.push(P);d.length>0&&(this.emit("after-changes",{type:E.y.REMOVE}),this.emit("change",{added:[],removed:d}))}toArray(){return[...this._set]}find(c){let d;return(0,T.f)(this._set,P=>!!c(P)&&(d=P,!0)),d}forEach(c){this._set.forEach(d=>c(d))}}},45611:(B,U,t)=>{t.d(U,{Z:()=>i});var p=t(17626),E=t(14517),T=t(61885),A=t(80542),M=t(61996),c=t(63290),d=t(62208),P=t(60330),I=t(77712),_=(t(85931),t(90912),t(76898));let s=class extends((0,A.p)((0,M.IG)((0,P.v)(T.Z.EventedMixin(E.Z))))){constructor(n){super(n),this.layer=null,this.parent=null}initialize(){this.when().catch(n=>{if("layerview:create-error"!==n.name){const a=this.layer&&this.layer.id||"no id",h=this.layer&&this.layer.title||"no title";c.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${h}', id: '${a}')`,n)}})}get fullOpacity(){return(0,d.Pt)(this.get("layer.opacity"),1)*(0,d.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(n){this._overrideIfSome("visible",n)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const n=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(n.viewNotReady=!0),this.layer&&this.layer.loaded||(n.layerNotLoaded=!0),this.visible||(n.layerInvisible=!0),n}isUpdating(){return!1}};(0,p._)([(0,I.Cb)()],s.prototype,"fullOpacity",null),(0,p._)([(0,I.Cb)()],s.prototype,"layer",void 0),(0,p._)([(0,I.Cb)()],s.prototype,"parent",void 0),(0,p._)([(0,I.Cb)({readOnly:!0})],s.prototype,"suspended",null),(0,p._)([(0,I.Cb)({readOnly:!0})],s.prototype,"suspendInfo",null),(0,p._)([(0,I.Cb)({readOnly:!0})],s.prototype,"legendEnabled",null),(0,p._)([(0,I.Cb)({type:Boolean,readOnly:!0})],s.prototype,"updating",null),(0,p._)([(0,I.Cb)({readOnly:!0})],s.prototype,"updatingProgress",null),(0,p._)([(0,I.Cb)()],s.prototype,"visible",null),(0,p._)([(0,I.Cb)()],s.prototype,"view",void 0),s=(0,p._)([(0,_.j)("esri.views.layers.LayerView")],s);const i=s}}]);