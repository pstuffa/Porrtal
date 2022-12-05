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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[6212],{50978:(Ae,K,n)=>{n.d(K,{M:()=>ae,b:()=>U});var o=n(2166),_=n(69960),l=n(65787),d=n(17625),ve=n(22355),I=n(16396);function U(re){const L=new ve.kG,{vertex:D,fragment:Y}=L;(0,o.Sv)(D,re),D.uniforms.add(new l.p("width",g=>g.width)),L.attributes.add(I.T.POSITION,"vec3"),L.attributes.add(I.T.NORMAL,"vec3"),L.attributes.add(I.T.UV0,"vec2"),L.attributes.add(I.T.AUXPOS1,"float"),L.varyings.add("vtc","vec2"),L.varyings.add("vlength","float"),L.varyings.add("vradius","float"),D.code.add(d.H`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = auxpos1;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`),Y.uniforms.add([new l.p("outlineSize",g=>g.outlineSize),new _.N("outlineColor",g=>g.outlineColor),new l.p("stripeLength",g=>g.stripeLength),new _.N("stripeEvenColor",g=>g.stripeEvenColor),new _.N("stripeOddColor",g=>g.stripeOddColor)]);const M=1/Math.sqrt(2);return Y.code.add(d.H`
    const float INV_SQRT2 = ${d.H.float(M)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      gl_FragColor = color;
    }
  `),L}const ae=Object.freeze(Object.defineProperty({__proto__:null,build:U},Symbol.toStringTag,{value:"Module"}))},96212:(Ae,K,n)=>{n.r(K),n.d(K,{default:()=>gt});var o=n(17626),_=n(14517),l=n(62208),d=n(77712),U=(n(85931),n(90912),n(76898)),ae=n(39691),re=n(1437),L=n(74554),D=n(72392),Y=n(63290),M=n(15572),g=n(32917),w=n(84161),P=n(28093),Ee=n(44766),Oe=n(55214),T=n(55915),oe=n(12080),Q=n(10049),pe=n(54865),Me=n(68);const me="esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController",Ve=Y.Z.getLogger(me);let R=class extends _.Z{constructor(t){super(t),this._unitNormalizer=new Me.D,this._handles=new D.Z,this._tempStartPosition=(0,P.c)(),this._tempEndPosition=(0,P.c)(),this._tempCornerPosition=(0,P.c)()}initialize(){const t=this.view.spatialReference,e=(0,oe.rS)(t),i=e===oe.GG?oe.wY:e;this._sphericalPCPF=i;const s=(0,T.Up)(t,i);this._unitNormalizer.spatialReference=s?i:t,this._handles.add([(0,g.YP)(()=>({viewData:this.viewData,startPoint:this.analysis.startPoint}),({viewData:a,startPoint:r})=>{a.elevationAlignedStartPoint=this._applyProjectionAndElevationAlignment(r)},g.tX),(0,g.YP)(()=>({viewData:this.viewData,endPoint:this.analysis.endPoint}),({viewData:a,endPoint:r})=>{a.elevationAlignedEndPoint=this._applyProjectionAndElevationAlignment(r)},g.tX),(0,g.YP)(()=>({result:this._computedResult,viewData:this.viewData}),({result:a,viewData:r})=>{r.result=a},g.tX)])}destroy(){this._handles=(0,l.SC)(this._handles)}_applyProjectionAndElevationAlignment(t){if((0,l.Wi)(t))return t;const e=(0,pe.G)(t,this.view.spatialReference,this.view.elevationProvider);return(0,l.Wi)(e)?((0,pe.e)(this.analysis,t.spatialReference,Ve),null):e}get _computedResult(){const{elevationAlignedStartPoint:t,elevationAlignedEndPoint:e,measurementMode:i}=this.viewData;if((0,l.Wi)(t)||(0,l.Wi)(e))return null;const s=this._euclideanDistances(t,e),a=this._geodesicDistance(t,e,s.horizontal.value),r=i===L.e.Geodesic||i===L.e.Auto&&s.horizontal.value>1e5?"geodesic":"euclidean";return{mode:r,distance:"euclidean"===r?s.direct:a,directDistance:s.direct,horizontalDistance:s.horizontal,verticalDistance:s.vertical,geodesicDistance:a}}_euclideanDistances(t,e){const i=t.clone();i.z=e.z;const s=this._tempStartPosition,a=this._tempEndPosition,r=this._tempCornerPosition,u=this.view.spatialReference,c=this._sphericalPCPF,h=(0,T.Up)(u,c)?c:u;(0,T.KC)(t,s,h),(0,T.KC)(e,a,h),(0,T.KC)(i,r,h);const v=(0,w.i)(s,a),p=(0,w.i)(r,a),b=Math.abs(e.z-t.z),f=te=>this._unitNormalizer.normalizeDistance(te),S=f(v),H=f(p),ee=f(b);return{direct:(0,M.EV)(S,"meters"),horizontal:(0,M.EV)(H,"meters"),vertical:(0,M.EV)(ee,"meters")}}_geodesicDistance(t,e,i){const s=t.spatialReference,a=new Oe.Z({spatialReference:s});a.addPath([t,e]);const r=s.isGeographic&&(0,Q.Gb)(s)?(0,Q.Jf)([a],"meters")[0]:s.isWebMercator?(0,Ee.geodesicLength)(a,"meters"):null,u=(0,l.pC)(r)?r:this._fallbackGeodesicDistance(t,e,i);return(0,M.EV)(u,"meters")}_fallbackGeodesicDistance(t,e,i){if((0,T.UY)(t,ye)&&(0,T.UY)(e,Ce)){const s=new Q._q;return(0,Q.cA)(s,ye,Ce),s.distance}return i}};(0,o._)([(0,d.Cb)()],R.prototype,"view",void 0),(0,o._)([(0,d.Cb)()],R.prototype,"analysis",void 0),(0,o._)([(0,d.Cb)()],R.prototype,"viewData",void 0),(0,o._)([(0,d.Cb)()],R.prototype,"_computedResult",null),R=(0,o._)([(0,U.j)(me)],R);const ye=(0,P.c)(),Ce=(0,P.c)();var y,O,t,_e=n(15861),j=n(91558),V=(n(52515),n(51819)),W=n(21286),A=n(84600),F=n(23841),be=n(16730),we=n(67831);(t=y||(y={}))[t.None=0]="None",t[t.Direct=1]="Direct",t[t.Triangle=2]="Triangle",t[t.ProjectedGeodesic=3]="ProjectedGeodesic",function(t){t[t.Auto=0]="Auto",t[t.AboveSegment=1]="AboveSegment",t[t.BelowSegment=2]="BelowSegment"}(O||(O={}));var le=n(495),Z=n(68063),J=n(87469),De=n(43703),N=n(4794),$=n(26242),Te=n(53928),Re=n(57521),x=n(40723),xe=n(19625),Ge=n(13934),Ue=n(60881),je=n(5894),z=n(16396),We=n(651),Ne=n(91056),de=n(87601),He=n(39114),Pe=n(88569),Be=n(12407),he=n(44835),Ie=n(41528),Fe=n(50978),Le=n(67969),ce=n(2078);class k extends Ne.A{constructor(e,i,s){super(e,i,s)}initializeProgram(e){return new Be.$(e.rctx,k.shader.get().build(this.configuration),He.i)}_setPipelineState(e){return(0,ce.sm)({blending:this.configuration.transparent?e===he.A.NONE?Pe.wu:(0,Pe.j7)(e):null,polygonOffset:this.configuration.polygonOffsetEnabled&&{factor:0,units:-4},depthTest:{func:Le.wb.LESS},depthWrite:ce.LZ,colorWrite:ce.BK})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return Le.MX.TRIANGLE_STRIP}}k.shader=new We.J(Fe.M,()=>n.e(3368).then(n.bind(n,3368)));class q extends Ie.W{constructor(){super(...arguments),this.polygonOffsetEnabled=!1,this.transparent=!1,this.transparencyPassType=he.A.NONE}}(0,o._)([(0,de.o)()],q.prototype,"polygonOffsetEnabled",void 0),(0,o._)([(0,de.o)()],q.prototype,"transparent",void 0),(0,o._)([(0,de.o)({count:he.A.COUNT})],q.prototype,"transparencyPassType",void 0);class Ze extends x.F5{constructor(e){super(e,new Ke),this._configuration=new q}getConfiguration(e,i){return this._configuration.polygonOffsetEnabled=this.parameters.polygonOffset,this._configuration.transparent=this.parameters.stripeEvenColor[3]<1||this.parameters.stripeOddColor[3]<1||this.parameters.outlineColor[3]<1,this._configuration.transparencyPassType=i.transparencyPassType,this._configuration}dispose(){}intersect(){}requiresSlot(e,i){return i===Ge.H.Color&&e===je.r.OPAQUE_MATERIAL}createGLMaterial(e){return new Xe(e)}createBufferWriter(){return new et}}class Xe extends Ue.Z{beginSlot(e){return this.ensureTechnique(k,e)}}class Ke extends x.Mt{constructor(){super(...arguments),this.width=32,this.outlineSize=.2,this.outlineColor=(0,N.f)(1,.5,0,1),this.stripeEvenColor=(0,N.f)(1,1,1,1),this.stripeOddColor=(0,N.f)(1,.5,0,1),this.stripeLength=1,this.polygonOffset=!1}}const Ye=(0,xe.U$)().vec3f(z.T.POSITION).vec3f(z.T.NORMAL).vec2f(z.T.UV0).f32(z.T.AUXPOS1),Qe=(0,P.c)(),Je=(0,P.c)(),$e=(0,P.c)(),ke=(0,P.c)(),qe=(0,P.c)();class et{constructor(){this.vertexBufferLayout=Ye}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return 2*(e.indices.get(z.T.POSITION).length/2+1)}write(e,i,s,a,r){const u=s.vertexAttributes.get(z.T.POSITION).data,c=s.vertexAttributes.get(z.T.NORMAL).data,h=u.length/3,v=s&&s.indices&&s.indices.get(z.T.POSITION);v&&v.length!==2*(h-1)&&console.warn("MeasurementArrowMaterial does not support indices");const p=Qe,b=Je,f=$e,S=ke,H=qe,ee=a.position,te=a.normal,ie=a.uv0;let se=0;for(let E=0;E<h;++E){const ge=3*E;if((0,w.s)(p,u[ge],u[ge+1],u[ge+2]),E<h-1){const B=3*(E+1);(0,w.s)(b,u[B],u[B+1],u[B+2]),(0,w.s)(H,c[B],c[B+1],c[B+2]),(0,w.n)(H,H),(0,w.b)(f,b,p),(0,w.n)(f,f),(0,w.f)(S,H,f),(0,w.n)(S,S)}const pt=(0,w.i)(p,b);e&&i&&((0,w.m)(p,p,e),(0,w.m)(b,b,e),(0,w.m)(S,S,i));const X=r+2*E,ne=X+1;ee.setVec(X,p),ee.setVec(ne,p),te.setVec(X,S),te.setVec(ne,S),ie.set(X,0,se),ie.set(X,1,-1),ie.set(ne,0,se),ie.set(ne,1,1),E<h-1&&(se+=pt)}const vt=a.auxpos1;for(let E=0;E<2*h;++E)vt.set(r+E,se)}}class tt extends Te._{constructor(e){super(e),this._parameters={arrowWidth:16,arrowOutlineColor:j.Z.toUnitRGBA((0,V.e9)()),arrowStripeEvenColor:j.Z.toUnitRGBA((0,V.RN)()),arrowStripeOddColor:j.Z.toUnitRGBA((0,V.e9)()),arrowSubdivisions:128},this._handles=null,this._origin=(0,P.c)(),this._originTransform=(0,De.c)(),this._arrowCenter=(0,P.c)(),this._renderOccluded=x.yD.OccludeAndTransparent,this._geometry=null,this._stripeLength=1,this._stripesEnabled=!0,this._opacity=1,this.applyProps(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._arrowMaterial&&this._arrowMaterial.setParameters({renderOccluded:e}))}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this._geometryChanged()}get stripeLength(){return this._stripeLength}set stripeLength(e){this._stripeLength=e,this.attached&&this._arrowMaterial.setParameters({stripeLength:this._stripeLength})}get stripesEnabled(){return this._stripesEnabled}set stripesEnabled(e){if(this._stripesEnabled=e,this.attached){const i=this.opacity,{arrowStripeEvenColor:s,arrowStripeOddColor:a}=this._parameters,r=(0,W.H)(Se,this._stripesEnabled?s:a,i);this._arrowMaterial.setParameters({stripeEvenColor:r})}}get opacity(){return this._opacity}set opacity(e){e!==this._opacity&&(this._opacity=e,this._updateArrowOpacity())}createExternalResources(){const{arrowStripeEvenColor:e,arrowStripeOddColor:i,arrowOutlineColor:s}=this._parameters;this._arrowMaterial=new Ze({outlineColor:s,stripeEvenColor:this._stripesEnabled?e:i,stripeOddColor:i,renderOccluded:this.renderOccluded,polygonOffset:!0}),this._handles=new D.Z,this._handles.add((0,g.YP)(()=>this.view.state.camera,()=>{this._viewChanged()}))}destroyExternalResources(){this._arrowMaterial=null,this._handles.destroy(),this._handles=null}forEachExternalMaterial(e){e(this._arrowMaterial)}createGeometries(e){if((0,l.Wi)(this._geometry)||(0,l.Wi)(this._geometry.startRenderSpace)||(0,l.Wi)(this._geometry.endRenderSpace))return;const i=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);e.addGeometry(i,this._arrowMaterial,this._originTransform),this._viewChanged()}_createArrowGeometry(e,i,s,a){const r=this.view.renderCoordsHelper,u=[],c=[],h=(v,p)=>{const b=$.WM.get();(0,w.b)(b,v,s),u.push(b),c.push(p)};if("euclidean"===a.type){a.eval(.5,this._arrowCenter);const v=$.WM.get();r.worldUpAtPosition(this._arrowCenter,v),h(e,v),h(i,v)}else{a.eval(.5,this._arrowCenter);const v=this._parameters.arrowSubdivisions+1&-2;for(let p=0;p<v;++p){const b=p/(v-1),f=$.WM.get(),S=$.WM.get();a.eval(b,f),r.worldUpAtPosition(f,S),h(f,S)}}return(0,Re.rh)(u,c)}_geometryChanged(){this.recreateGeometry()}_viewChanged(){if(this.view.ready&&this.attached&&(0,l.pC)(this._geometry)){const e=this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameters({width:this._parameters.arrowWidth*e})}}_updateArrowOpacity(){const e=this.opacity,{arrowStripeEvenColor:i,arrowStripeOddColor:s,arrowOutlineColor:a}=this._parameters,r=(0,W.H)(Se,this._stripesEnabled?i:s,e),u=(0,W.H)(it,a,e),c=(0,W.H)(st,s,e);this._arrowMaterial.setParameters({stripeEvenColor:r,outlineColor:u,stripeOddColor:c})}}const Se=(0,N.c)(),it=(0,N.c)(),st=(0,N.c)();var nt=n(77603),G=n(64770),ue=n(54889),at=n(56683),rt=n(41840);let C=class extends _.Z{constructor(t){super(t),this._params={triangleColor:new Float32Array(j.Z.toUnitRGBA((0,V.e9)(.75))),triangleLineWidth:3,geodesicProjectionLineWidth:2,geodesicProjectionLineColor:new Float32Array(j.Z.toUnitRGBA((0,V.e9)(.75))),guideLineWidth:2,guideStippleLengthPixels:6,direcLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12},this._handles=new D.Z,this._segmentVisualElement=null,this._triangleVisualElement=null,this._rightAngleQuad=null,this._projectedGeodesicLine=null,this._geodesicStartHint=null,this._geodesicEndHint=null,this._segmentLabel=null,this._verticalLabel=null,this._horizontalLabel=null,this._startPosition=(0,P.c)(),this._endPosition=(0,P.c)(),this._cornerPosition=(0,P.c)(),this._startPositionAtSeaLevel=(0,P.c)(),this._endPositionAtSeaLevel=(0,P.c)(),this._triangleOrientationOverride=null,this.messages=null,this.loadingMessages=!0,this.visualElementOrientation=O.Auto,this.triangleCollapseRatioThreshold=.03}get visible(){return this.analysisView.visible}get viewMode(){const{elevationAlignedStartPoint:t,elevationAlignedEndPoint:e}=this.analysisView;if((0,l.Wi)(t)||(0,l.Wi)(e)||t.equals(e))return y.None;const i=this.analysisView.result;if((0,l.Wi)(i))return y.Direct;if("geodesic"===i.mode)return this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition)?y.ProjectedGeodesic:y.Direct;const{verticalDistance:s,horizontalDistance:a}=i,r=s.value,u=a.value;return Math.min(r/u,u/r)<this.triangleCollapseRatioThreshold?y.Direct:y.Triangle}get actualVisualizedMeasurement(){if((0,l.Wi)(this.analysisView.result))switch(this.analysisView.measurementMode){case L.e.Auto:case L.e.Euclidean:default:return"euclidean";case L.e.Geodesic:return"geodesic"}return this.analysisView.result.mode}get allowVisualElementsOrientationChange(){return(0,l.Wi)(this._triangleOrientationOverride)}set allowVisualElementsOrientationChange(t){(0,l.Wi)(this._triangleOrientationOverride)!==t&&(this._triangleOrientationOverride=(0,l.Wi)(this._triangleOrientationOverride)?this._actualVisualElementsOrientation:null)}get labels(){return{direct:this._segmentLabel,horizontal:"geodesic"===this.actualVisualizedMeasurement?this._segmentLabel:this._horizontalLabel,vertical:this._verticalLabel}}initialize(){var t=this;const e=this._params,i={attached:!0,view:this.view};this._segmentVisualElement=new tt({...i,geometry:null,renderOccluded:x.yD.OccludeAndTransparent}),this._triangleVisualElement=new J.r({...i,width:e.triangleLineWidth,color:e.triangleColor,renderOccluded:x.yD.OccludeAndTransparent}),this._rightAngleQuad=new nt.R({...i,color:new Float32Array(j.Z.toUnitRGBA((0,V.e9)(.75))),renderOccluded:x.yD.OccludeAndTransparent});const s={...i,polygonOffset:!0,renderOccluded:x.yD.OccludeAndTransparent};this._projectedGeodesicLine=new J.r({...s,width:e.geodesicProjectionLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:(0,ue.z5)(e.guideStippleLengthPixels)}),this._geodesicStartHint=new J.r({...s,width:e.guideLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:(0,ue.z5)(e.guideStippleLengthPixels)}),this._geodesicEndHint=new J.r({...s,width:e.guideLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:(0,ue.z5)(e.guideStippleLengthPixels)});const a={...i,backgroundColor:(0,V.hU)(.6),textColor:(0,V.uu)()};this._segmentLabel=new Z.Kc({...a,fontSize:e.direcLabelFontSize}),this._verticalLabel=new Z.Kc({...a,fontSize:e.verticalLabelFontSize}),this._horizontalLabel=new Z.Kc({...a,fontSize:e.horizontalLabelFontSize}),this._handles.add([(0,g.YP)(()=>{const{elevationAlignedStartPoint:r,elevationAlignedEndPoint:u}=this.analysisView,c=this.view;return{view:c,camera:c.state.camera,viewMode:this.viewMode,elevationAlignedStartPoint:r,elevationAlignedEndPoint:u,orientation:this._actualVisualElementsOrientation,visualizedMeasurement:this.actualVisualizedMeasurement,stripeLength:this._measurementArrowStripeLength}},r=>this._updateGeometryAndViewMode(r),g.tX),(0,g.YP)(()=>({visible:this.visible,viewMode:this.viewMode}),r=>this._updateVisualElementVisibility(r),g.tX),(0,g.YP)(()=>({text:this._labelsText,visualizedMeasurement:this.actualVisualizedMeasurement}),r=>this._updateLabelText(r),g.tX),(0,g.YP)(()=>({visible:this.visible,viewMode:this.viewMode}),r=>this._updateLabelVisibility(r),g.tX),(0,g.YP)(()=>this._measurementArrowStripeLength,r=>this._updateSegmentStripeLength(r),g.tX),(0,at.qe)((0,_e.Z)(function*(){return t._updateMessageBundle()}))]),this._updateMessageBundle()}destroy(){this._handles=(0,l.SC)(this._handles),this._segmentVisualElement=(0,l.SC)(this._segmentVisualElement),this._triangleVisualElement=(0,l.SC)(this._triangleVisualElement),this._rightAngleQuad=(0,l.SC)(this._rightAngleQuad),this._projectedGeodesicLine=(0,l.SC)(this._projectedGeodesicLine),this._geodesicStartHint=(0,l.SC)(this._geodesicStartHint),this._geodesicEndHint=(0,l.SC)(this._geodesicEndHint),this._segmentLabel=(0,l.SC)(this._segmentLabel),this._verticalLabel=(0,l.SC)(this._verticalLabel),this._horizontalLabel=(0,l.SC)(this._horizontalLabel),this.set("view",null)}_updateVisualElementVisibility({visible:t,viewMode:e}){if(this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1,t)switch(e){case y.None:break;case y.Direct:this._segmentVisualElement.visible=!0;break;case y.Triangle:this._segmentVisualElement.visible=!0,this._triangleVisualElement.visible=!0,this._rightAngleQuad.visible=!0;break;case y.ProjectedGeodesic:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}}_updateGeometryAndViewMode({view:t,camera:e,viewMode:i,elevationAlignedStartPoint:s,elevationAlignedEndPoint:a,orientation:r,visualizedMeasurement:u,stripeLength:c}){const h=t.renderCoordsHelper;if((0,l.Wi)(h)||(0,l.Wi)(s)||(0,l.Wi)(a)||s.equals(a))return;let v=this._startPosition,p=this._endPosition;h.toRenderCoords(s,v),h.toRenderCoords(a,p);const b=r===O.AboveSegment?1:-1,f=b*(h.getAltitude(p)-h.getAltitude(v));f<0&&(v=this._endPosition,p=this._startPosition);const S="geodesic"===u?new G.u(this._startPosition,this._endPosition,h.spatialReference):new G.y(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=S,this._updateSegmentStripeLength(c),i){case y.Direct:this._updateSegment(S,r);break;case y.Triangle:this._updateSegmentAndTriangle({view:t,camera:e,segment:S,orientation:r,startPosition:v,endPosition:p,deltaSign:b,altitudeDelta:f});break;case y.ProjectedGeodesic:this._updateSegmentAndProjection({view:t,orientation:r,startPosition:v,endPosition:p})}}_updateSegment(t,e){this._segmentLabel.anchor=e===O.AboveSegment?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:t,sampleLocation:"center"}}_updateSegmentAndTriangle({view:{renderCoordsHelper:t},camera:e,segment:i,orientation:s,startPosition:a,endPosition:r,deltaSign:u,altitudeDelta:c}){const h=this._cornerPosition;t.worldUpAtPosition(a,h),(0,w.g)(h,h,u*Math.abs(c)),(0,w.a)(h,h,a),this._triangleVisualElement.geometry=[[[a[0],a[1],a[2]],[h[0],h[1],h[2]],[r[0],r[1],r[2]]]],this._rightAngleQuad.geometry={previous:a,center:h,next:r};const v=new G.y(a,h),p=new G.y(h,r),b=function ot(t,e,i,s,a){const r=lt,u=dt;a.projectToRenderScreen(i,r),a.projectToRenderScreen(e,u);const c={segment:"bottom",horizontal:"top",vertical:r[0]<u[0]?"left":"right"};{const h=ht,v=ct;if((0,le.c)(t,i,h,a),(0,le.c)(t,e,v,a),(0,we.h)(h,v)>=fe){const p=Math.sign(h[1])===Math.sign(v[1]);c.segment=p?(0,Z.jB)(c.vertical):c.vertical}else{const p=ut;(0,le.c)(i,e,p,a),(0,we.h)(p,v)>=fe&&(c.segment=Math.sign(p[0])===Math.sign(v[0])?(0,Z.jB)(c.horizontal):c.horizontal)}}if(s===O.BelowSegment){const h=v=>"top"===v?"bottom":"top";c.segment=h(c.segment),c.horizontal=h(c.horizontal),c.vertical=h(c.vertical)}return c}(a,r,h,s,e);this._segmentLabel.anchor=b.segment,this._segmentLabel.geometry={type:"segment",segment:i,sampleLocation:"center"},this._verticalLabel.geometry={type:"segment",segment:v,sampleLocation:"center"},this._verticalLabel.anchor=b.vertical,this._horizontalLabel.geometry={type:"segment",segment:p,sampleLocation:"center"},this._horizontalLabel.anchor=b.horizontal}_updateSegmentAndProjection({view:{renderCoordsHelper:t},orientation:e,startPosition:i,endPosition:s}){t.setAltitude(this._startPositionAtSeaLevel,0,i),t.setAltitude(this._endPositionAtSeaLevel,0,s);const a=new G.u(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,t.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(a),this._geodesicStartHint.setGeometryFromSegment(new G.y(this._startPositionAtSeaLevel,i)),this._geodesicEndHint.setGeometryFromSegment(new G.y(this._endPositionAtSeaLevel,s)),this._segmentLabel.geometry={type:"segment",segment:a,sampleLocation:"center"},this._segmentLabel.anchor=e===O.AboveSegment?"top":"bottom"}_updateLabelText({text:t,visualizedMeasurement:e}){(0,l.pC)(t)?(this._segmentLabel.text="euclidean"===e?t.euclideanDistance:t.geodesicDistance,this._horizontalLabel.text=t.horizontalDistance,this._verticalLabel.text=t.verticalDistance):(this._segmentLabel.text=null,this._horizontalLabel.text=null,this._verticalLabel.text=null),this.notifyChange("labels")}_updateLabelVisibility({visible:t,viewMode:e}){const i=this._segmentLabel,s=this._horizontalLabel,a=this._verticalLabel;if(i.visible=!1,s.visible=!1,a.visible=!1,t)switch(e){case y.Direct:i.visible=!0;break;case y.Triangle:i.visible=!0,s.visible=!0,a.visible=!0;break;case y.ProjectedGeodesic:i.visible=!0}}get _labelsText(){if(this.destroyed)return null;const t=this.messages,e=this.analysisView.result;if((0,l.Wi)(e)||(0,l.Wi)(t))return null;const{directDistance:i,horizontalDistance:s,verticalDistance:a,geodesicDistance:r}=e,u=this.analysisView.unit,c=h=>({euclideanDistance:"",geodesicDistance:"",horizontalDistance:"",verticalDistance:"",...h});switch(u){case"metric":return c({euclideanDistance:i&&(0,A.Rd)(t,i),geodesicDistance:r&&(0,A.Rd)(t,r),horizontalDistance:s&&(0,A.Rd)(t,s),verticalDistance:a&&(0,A.Wv)(t,a)});case"imperial":return c({euclideanDistance:i&&(0,A.Ud)(t,i),geodesicDistance:r&&(0,A.Ud)(t,r),horizontalDistance:s&&(0,A.Ud)(t,s),verticalDistance:a&&(0,A.Zv)(t,a)});default:return c({euclideanDistance:i&&(0,A.VG)(t,i,u),geodesicDistance:r&&(0,A.VG)(t,r,u),horizontalDistance:s&&(0,A.VG)(t,s,u),verticalDistance:a&&(0,A.VG)(t,a,u)})}}_updateSegmentStripeLength(t){const e=this._segmentVisualElement;(0,l.pC)(t)?(e.stripeLength=t,e.stripesEnabled=!0):e.stripesEnabled=!1}get _actualVisualElementsOrientation(){if((0,l.pC)(this._triangleOrientationOverride))return this._triangleOrientationOverride;const t=this.visualElementOrientation;return t===O.Auto?this.view.state.camera.aboveGround?O.AboveSegment:O.BelowSegment:t}_requiresGeodesicGuideAt(t){const e=this.view;if(!e?.state)return!1;const s=e.renderCoordsHelper,a=e.state.camera.computeScreenPixelSizeAt(t);return s.getAltitude(t)/a>=10}get _measurementArrowStripeLength(){const{result:t,unit:e}=this.analysisView;if((0,l.Wi)(t))return null;let i=null;const s=t.directDistance;switch(e){case"metric":i=s&&(0,M.nn)(s,"meters");break;case"imperial":i=s&&(0,M.nn)(s,(0,be.FN)(s.value,s.unit));break;default:i=s&&(0,M.nn)(s,e)}return(0,l.Wi)(i)?null:(0,W.sk)(i.value/30)*(0,be.En)(1,i.unit,"meters")}_updateMessageBundle(){this.loadingMessages=!0,(0,rt.ME)("esri/core/t9n/Units").then(t=>{this.messages=t}).finally(()=>{this.loadingMessages=!1})}get testData(){return{labels:this.labels,stripeLength:this._segmentVisualElement?.stripeLength}}};(0,o._)([(0,d.Cb)()],C.prototype,"_triangleOrientationOverride",void 0),(0,o._)([(0,d.Cb)()],C.prototype,"messages",void 0),(0,o._)([(0,d.Cb)()],C.prototype,"view",void 0),(0,o._)([(0,d.Cb)()],C.prototype,"analysis",void 0),(0,o._)([(0,d.Cb)()],C.prototype,"analysisView",void 0),(0,o._)([(0,d.Cb)()],C.prototype,"loadingMessages",void 0),(0,o._)([(0,d.Cb)()],C.prototype,"visible",null),(0,o._)([(0,d.Cb)()],C.prototype,"viewMode",null),(0,o._)([(0,d.Cb)()],C.prototype,"actualVisualizedMeasurement",null),(0,o._)([(0,d.Cb)()],C.prototype,"visualElementOrientation",void 0),(0,o._)([(0,d.Cb)()],C.prototype,"triangleCollapseRatioThreshold",void 0),(0,o._)([(0,d.Cb)()],C.prototype,"allowVisualElementsOrientationChange",null),(0,o._)([(0,d.Cb)()],C.prototype,"labels",null),(0,o._)([(0,d.Cb)()],C.prototype,"_labelsText",null),(0,o._)([(0,d.Cb)()],C.prototype,"_actualVisualElementsOrientation",null),(0,o._)([(0,d.Cb)()],C.prototype,"_measurementArrowStripeLength",null),C=(0,o._)([(0,U.j)("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")],C);const fe=Math.cos((0,W.Vl)(12)),lt=(0,F.J$)(),dt=(0,F.J$)(),ht=(0,F.gX)(),ct=(0,F.gX)(),ut=(0,F.gX)();let m=class extends((0,re.p)(_.Z)){constructor(t){super(t),this.type="direct-line-measurement-view-3d",this.analysis=null,this.result=null,this.measurementMode=L.e.Auto,this.elevationAlignedStartPoint=null,this.elevationAlignedEndPoint=null}initialize(){const t=this.view,e=this.analysis;this._analysisVisualization=new C({view:t,analysis:e,analysisView:this}),this._analysisController=new R({view:t,analysis:e,viewData:this})}destroy(){this._analysisController=(0,l.SC)(this._analysisController),this._analysisVisualization=(0,l.SC)(this._analysisVisualization)}get updating(){return!!this._analysisVisualization?.loadingMessages}get viewMode(){return this._analysisVisualization.viewMode}get actualVisualizedMeasurement(){return this._analysisVisualization.actualVisualizedMeasurement}get visualElementOrientation(){return this._analysisVisualization.visualElementOrientation}set visualElementOrientation(t){this._analysisVisualization.visualElementOrientation=t}get allowVisualElementsOrientationChange(){return this._analysisVisualization.allowVisualElementsOrientationChange}set allowVisualElementsOrientationChange(t){this._analysisVisualization.allowVisualElementsOrientationChange=t}get triangleCollapseRatioThreshold(){return this._analysisVisualization.triangleCollapseRatioThreshold}set triangleCollapseRatioThreshold(t){this._analysisVisualization.triangleCollapseRatioThreshold=t}get directLabelText(){return this._analysisVisualization.labels.direct.text}get horizontalLabelText(){return this._analysisVisualization.labels.horizontal.text}get verticalLabelText(){return this._analysisVisualization.labels.vertical.text}get unit(){return(0,l.Pt)(this.analysis.unit,this._defaultUnit)}get testData(){return this.destroyed?{labels:null,stripeLength:null,visualization:null,controller:null}:{...this._analysisVisualization?.testData,visualization:this._analysisVisualization,controller:this._analysisController}}};(0,o._)([(0,d.Cb)()],m.prototype,"updating",null),(0,o._)([(0,d.Cb)({readOnly:!0})],m.prototype,"type",void 0),(0,o._)([(0,d.Cb)({constructOnly:!0,nonNullable:!0})],m.prototype,"analysis",void 0),(0,o._)([(0,d.Cb)()],m.prototype,"result",void 0),(0,o._)([(0,d.Cb)()],m.prototype,"measurementMode",void 0),(0,o._)([(0,d.Cb)()],m.prototype,"elevationAlignedStartPoint",void 0),(0,o._)([(0,d.Cb)()],m.prototype,"elevationAlignedEndPoint",void 0),(0,o._)([(0,d.Cb)({readOnly:!0})],m.prototype,"viewMode",null),(0,o._)([(0,d.Cb)({readOnly:!0})],m.prototype,"actualVisualizedMeasurement",null),(0,o._)([(0,d.Cb)()],m.prototype,"visualElementOrientation",null),(0,o._)([(0,d.Cb)()],m.prototype,"allowVisualElementsOrientationChange",null),(0,o._)([(0,d.Cb)()],m.prototype,"triangleCollapseRatioThreshold",null),(0,o._)([(0,d.Cb)({readOnly:!0})],m.prototype,"directLabelText",null),(0,o._)([(0,d.Cb)({readOnly:!0})],m.prototype,"horizontalLabelText",null),(0,o._)([(0,d.Cb)({readOnly:!0})],m.prototype,"verticalLabelText",null),(0,o._)([(0,d.Cb)()],m.prototype,"_analysisVisualization",void 0),(0,o._)([(0,d.Cb)()],m.prototype,"_analysisController",void 0),(0,o._)([(0,d.Cb)()],m.prototype,"unit",null),(0,o._)([(0,d.Cb)(ae.Y)],m.prototype,"_defaultUnit",void 0),m=(0,o._)([(0,U.j)("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")],m);const gt=m}}]);