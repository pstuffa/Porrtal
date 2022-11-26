"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[4828],{9088:(Q,z,i)=>{i.d(z,{L:()=>S,b:()=>m});var l=i(28347),a=i(43703),_=i(67831),y=i(99770),U=i(47634),T=i(95285),g=i(65787),A=i(17625),C=i(63123),B=i(22355),M=i(16396);function m(V){const E=new B.kG;E.include(U.j,V);const{vertex:H,fragment:u}=E;return H.uniforms.add([new C.g("modelView",(v,o)=>(0,l.j)(f,o.camera.viewMatrix,v.origin)),new C.g("proj",(v,o)=>o.camera.projectionMatrix),new g.p("glowWidth",(v,o)=>v.glowWidth*o.camera.pixelRatio),new T.A("pixelToNDC",(v,o)=>(0,_.a)(L,2/o.camera.fullViewport[2],2/o.camera.fullViewport[3]))]),E.attributes.add(M.T.START,"vec3"),E.attributes.add(M.T.END,"vec3"),E.attributes.add(M.T.UP,"vec3"),E.attributes.add(M.T.EXTRUDE,"vec2"),E.varyings.add("uv","vec2"),E.varyings.add("vViewStart","vec3"),E.varyings.add("vViewEnd","vec3"),E.varyings.add("vViewPlane","vec4"),H.code.add(A.H`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`),u.uniforms.add(new g.p("perScreenPixelRatio",(v,o)=>o.camera.perScreenPixelRatio)),u.code.add(A.H`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));
gl_FragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`),E}const L=(0,y.a)(),f=(0,a.c)(),S=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}))},66501:(Q,z,i)=>{i.d(z,{L:()=>H,b:()=>S,d:()=>f});var l=i(21286),a=i(62208),_=i(67831),y=i(99770),U=i(47634),T=i(98071),g=i(95285),A=i(39704),C=i(66054),B=i(65787),M=i(84178),m=i(17625),L=i(22355);const f=(0,l.Vl)(6);function S(u){const v=new L.kG;v.extensions.add("GL_OES_standard_derivatives"),v.include(T.k),v.include(U.j,u);const o=v.fragment;return u.heightManifoldEnabled&&o.uniforms.add(new C.y("heightPlane")),u.pointDistanceEnabled&&o.uniforms.add(new C.y("pointDistanceSphere")),u.lineVerticalPlaneEnabled&&(o.uniforms.add(new C.y("lineVerticalPlane")),o.uniforms.add(new A.K("lineVerticalStart")),o.uniforms.add(new A.K("lineVerticalEnd"))),(u.heightManifoldEnabled||u.pointDistanceEnabled||u.lineVerticalPlaneEnabled)&&o.uniforms.add(new M.d("maxPixelDistance")),(u.lineVerticalPlaneEnabled||u.heightManifoldEnabled)&&o.code.add(m.H`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),u.pointDistanceEnabled&&o.code.add(m.H`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),u.intersectsLineEnabled&&(o.uniforms.add(new A.K("intersectsLineStart")),o.uniforms.add(new A.K("intersectsLineEnd")),o.uniforms.add(new A.K("intersectsLineDirection")),o.uniforms.add(new M.d("intersectsLineRadius")),o.uniforms.add(new B.p("perScreenPixelRatio",(x,I)=>I.camera.perScreenPixelRatio)),o.code.add(m.H`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(u.lineVerticalPlaneEnabled||u.intersectsLineEnabled)&&o.code.add(m.H`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),o.code.add(m.H`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),u.heightManifoldEnabled&&(o.uniforms.add(new g.A("angleCutoff",x=>V(x))),o.code.add(m.H`{
float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, heightPlane.xyz)));
vec4 heightManifoldColor = laserlineProfile(planeDistancePixels(heightPlane, pos));
color = max(color, heightManifoldColor * heightManifoldAlpha);
}`)),u.pointDistanceEnabled&&(o.uniforms.add(new g.A("angleCutoff",x=>V(x))),o.code.add(m.H`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),u.lineVerticalPlaneEnabled&&(o.uniforms.add(new g.A("angleCutoff",x=>V(x))),o.code.add(m.H`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),u.intersectsLineEnabled&&(o.uniforms.add(new g.A("angleCutoff",x=>V(x))),o.code.add(m.H`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),o.code.add(m.H`gl_FragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),v}function V(u){const v=(0,a.pC)(u.angleCutoff)?u.angleCutoff:f;return(0,_.a)(E,Math.cos(v),Math.cos(Math.max(0,v-(0,l.Vl)(2))))}const E=(0,y.a)(),H=Object.freeze(Object.defineProperty({__proto__:null,defaultAngleCutoff:f,build:S},Symbol.toStringTag,{value:"Module"}))},23018:(Q,z,i)=>{i.d(z,{W:()=>de});var l=i(62208),a=i(84161),_=i(28093),y=i(13777),U=i(68604),T=i(21286),g=i(993),A=i(4794),C=i(85072),B=i(8834),M=i(90014),m=i(70562),L=i(97126),f=i(4511),S=i(19625),V=i(16396),E=i(651),H=i(91056),u=i(12407),v=i(9088),o=i(67969),x=i(2078);class I extends H.A{initializeProgram(t){const r=I.shader.get().build(this.configuration);return new u.$(t.rctx,r,I.attributeLocations)}initializePipeline(){return(0,x.sm)({blending:(0,x.if)(o.zi.ONE,o.zi.ONE_MINUS_SRC_ALPHA),colorWrite:x.BK})}}I.shader=new E.J(v.L,()=>i.e(9689).then(i.bind(i,79689))),I.attributeLocations=new Map([[V.T.START,0],[V.T.END,1],[V.T.UP,2],[V.T.EXTRUDE,3]]);var N=i(83994),k=i(49353);class Y{constructor(t){this._renderCoordsHelper=t,this._buffers=null,this._origin=(0,_.c)(),this._dirty=!1,this._count=0,this._vao=null}set vertices(t){const r=new Float64Array(3*t.length);let s=0;for(const c of t)r[s++]=c[0],r[s++]=c[1],r[s++]=c[2];this.buffers=[r]}set buffers(t){if(this._buffers=t,this._buffers.length>0){const r=this._buffers[0],s=3*Math.floor(r.length/3/2);(0,a.s)(this._origin,r[s+0],r[s+1],r[s+2])}else(0,a.s)(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(t){const r=this._ensureVAO(t);(0,l.pC)(r)&&(t.bindVAO(r),t.drawArrays(o.MX.TRIANGLES,0,this._count))}dispose(){(0,l.pC)(this._vao)&&this._vao.dispose()}_ensureVAO(t){return(0,l.Wi)(this._buffers)?null:((0,l.Wi)(this._vao)&&(this._vao=this._createVAO(t,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(t,r){const s=this._createDataBuffer(r);return this._dirty=!1,new k.U(t,I.attributeLocations,{data:(0,f.K)(d)},{data:N.f.createVertex(t,o.l1.STATIC_DRAW,s)})}_ensureVertexData(t,r){if(!this._dirty)return;const s=this._createDataBuffer(r);t.vertexBuffers.data.setData(s),this._dirty=!1}_numberOfRenderVertices(t){return 2*(t.length/3-1)*3}_createDataBuffer(t){const r=t.reduce((b,O)=>b+this._numberOfRenderVertices(O),0);this._count=r;const s=d.createBuffer(r),c=this._origin;let D=0,G=0;for(const b of t){for(let O=0;O<b.length;O+=3){const F=(0,a.s)(n,b[O+0],b[O+1],b[O+2]);0===O?G=this._renderCoordsHelper.getAltitude(F):this._renderCoordsHelper.setAltitude(F,G);const w=this._renderCoordsHelper.worldUpAtPosition(F,ee),p=D+2*O,ne=(0,a.b)(n,F,c);if(O<b.length-3){s.up.setVec(p,w),s.up.setVec(p+3,w),s.up.setVec(p+5,w);for(let X=0;X<6;X++)s.start.setVec(p+X,ne);s.extrude.setValues(p+0,0,-1),s.extrude.setValues(p+1,1,-1),s.extrude.setValues(p+2,1,1),s.extrude.setValues(p+3,0,-1),s.extrude.setValues(p+4,1,1),s.extrude.setValues(p+5,0,1)}if(O>0){s.up.setVec(p-2,w),s.up.setVec(p-4,w),s.up.setVec(p-5,w);for(let X=-6;X<0;X++)s.end.setVec(p+X,ne)}}D+=this._numberOfRenderVertices(b)}return s.buffer}}const ee=(0,_.c)(),n=(0,_.c)(),d=(0,S.U$)().vec3f(V.T.START).vec3f(V.T.END).vec3f(V.T.UP).vec2f(V.T.EXTRUDE);var h=i(19597),P=i(5894),R=i(57623),W=i(17626),j=i(87601);class K extends j.m{constructor(){super(...arguments),this.contrastControlEnabled=!1}}(0,W._)([(0,j.o)()],K.prototype,"contrastControlEnabled",void 0),i(17625);var se=i(39114),te=i(66501);class q extends H.A{initializeProgram(t){const r=q.shader.get().build(this.configuration);return new u.$(t.rctx,r,se.i)}initializePipeline(){return(0,x.sm)({blending:(0,x.if)(o.zi.ONE,o.zi.ONE_MINUS_SRC_ALPHA),colorWrite:x.BK})}}q.shader=new E.J(te.L,()=>i.e(7794).then(i.bind(i,17794)));class $ extends K{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1}}(0,W._)([(0,j.o)()],$.prototype,"heightManifoldEnabled",void 0),(0,W._)([(0,j.o)()],$.prototype,"pointDistanceEnabled",void 0),(0,W._)([(0,j.o)()],$.prototype,"lineVerticalPlaneEnabled",void 0),(0,W._)([(0,j.o)()],$.prototype,"intersectsLineEnabled",void 0);const re=(0,_.c)(),ae=(0,A.c)(),oe={glowColor:[1,.5,0],glowWidth:8,glowFalloff:8,innerColor:[1,1,1],innerWidth:1,globalAlpha:.75,angleCutoff:(0,T.Vl)(6),globalAlphaContrastBoost:2,__tagStrict:"NoParameters"};function ie(J,t,r,s){const c=re,D=ae;(0,a.m)(c,t,s),(0,a.c)(D,r),D[3]=0,(0,g.t)(D,D,s),(0,M.Yq)(c,D,J)}class le{constructor(t,r={},s={contrastControlEnabled:!1}){this._renderCoordsHelper=t,this._config=s,this._technique=null,this._heightManifoldEnabled=!1,this._heightManifoldTarget=(0,_.c)(),this._pointDistanceEnabled=!1,this._pointDistanceOrigin=(0,_.c)(),this._pointDistanceTarget=(0,_.c)(),this._lineVerticalPlaneEnabled=!1,this._lineVerticalPlaneSegment=(0,y.Ue)(),this._intersectsLineEnabled=!1,this._intersectsLineSegment=(0,y.Ue)(),this._intersectsLineRadius=3,this._intersectsLineInfinite=!1,this._pathVerticalPlaneEnabled=!1,this._pathVerticalPlaneData=null,this._pathTechnique=null,this.canRender=!0,this._tempNormal=(0,_.c)(),this._tempDir=(0,_.c)(),this._tempUp=(0,_.c)(),this._tempVec3A=(0,_.c)(),this._tempVec3B=(0,_.c)(),this._tempVec4=(0,A.c)(),this._tempPlane=(0,M.Ue)(),this._tempSphere=(0,L.c)(),this._parameters=(0,R.Uf)(r,oe)}get renderSlots(){return[this._config.contrastControlEnabled?P.r.LASERLINES_CONTRAST_CONTROL:P.r.LASERLINES]}get needsLinearDepth(){return!0}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(t){this._heightManifoldEnabled!==t&&(this._heightManifoldEnabled=t,this._requestRender())}get heightManifoldTarget(){return this._heightManifoldTarget}set heightManifoldTarget(t){(0,a.c)(this._heightManifoldTarget,t),this._requestRender()}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(t){t!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=t,this._requestRender())}get pointDistanceTarget(){return this._pointDistanceTarget}set pointDistanceTarget(t){(0,a.c)(this._pointDistanceTarget,t),this._requestRender()}get pointDistanceOrigin(){return this._pointDistanceOrigin}set pointDistanceOrigin(t){(0,a.c)(this._pointDistanceOrigin,t),this._requestRender()}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(t){t!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=t,this._requestRender())}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(t){(0,y.JG)(t,this._lineVerticalPlaneSegment),this._requestRender()}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(t){t!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=t,this._requestRender())}get intersectsLineSegment(){return this._intersectsLineSegment}set intersectsLineSegment(t){(0,y.JG)(t,this._intersectsLineSegment),this._requestRender()}get intersectsLineRadius(){return this._intersectsLineRadius}set intersectsLineRadius(t){t!==this._intersectsLineRadius&&(this._intersectsLineRadius=t,this._requestRender())}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(t){t!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=t,this._requestRender())}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(t){t!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=t,(0,l.pC)(this._pathVerticalPlaneData)&&this._requestRender())}set pathVerticalPlaneVertices(t){(0,l.Wi)(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new Y(this._renderCoordsHelper)),this._pathVerticalPlaneData.vertices=t,this.pathVerticalPlaneEnabled&&this._requestRender()}set pathVerticalPlaneBuffers(t){(0,l.Wi)(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new Y(this._renderCoordsHelper)),this._pathVerticalPlaneData.buffers=t,this.pathVerticalPlaneEnabled&&this._requestRender()}setParameters(t){(0,R.LO)(this._parameters,t)&&this._requestRender()}initializeRenderContext(t){this._context=t,this._quadVAO=(0,h.ow)(t.renderContext.rctx),this._techniqueRepository=t.shaderTechniqueRepository,this._techniqueConfig=new $;const s=new K;s.contrastControlEnabled=this._config.contrastControlEnabled,this._pathTechnique=this._techniqueRepository.acquire(I,s)}uninitializeRenderContext(){this._quadVAO=(0,l.O3)(this._quadVAO),this._technique=(0,l.RY)(this._technique),this._pathVerticalPlaneData=(0,l.O3)(this._pathVerticalPlaneData),this._pathTechnique=(0,l.RY)(this._pathTechnique)}prepareTechnique(){return this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled?(this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled,this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled,this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled,this._techniqueConfig.contrastControlEnabled=this._config.contrastControlEnabled,this._technique=this._techniqueRepository.releaseAndAcquire(q,this._techniqueConfig,this._technique),this._technique):this._pathTechnique}render(t,r){(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(t,r),this.pathVerticalPlaneEnabled&&this._renderPath(t)}_renderUnified(t,r){const s=t.rctx,c=s.bindTechnique(r,this._parameters,t.bindParameters);this._bindGlobalUniforms(t,c),this._bindHeightManifoldUniforms(t,c),this._bindPointDistanceUniforms(t,c),this._bindLineVerticalPlaneUniforms(t,c),this._bindIntersectsLineUniforms(t,c),s.bindVAO(this._quadVAO),s.drawArrays(o.MX.TRIANGLE_STRIP,0,4)}_renderPath(t){if((0,l.Wi)(this._pathVerticalPlaneData)||(0,l.Wi)(this._pathTechnique))return;const c=t.rctx.bindTechnique(this._pathTechnique,{...this._parameters,origin:this._pathVerticalPlaneData.origin},t.bindParameters);this._bindGlobalUniforms(t,c),this._pathVerticalPlaneData.draw(t.rctx)}_bindHeightManifoldUniforms(t,r){if(!this.heightManifoldEnabled)return;const s=this._tempVec3A,c=this._tempPlane,D=t.bindParameters.camera;this._renderCoordsHelper.worldUpAtPosition(this._heightManifoldTarget,s),ie(c,this._heightManifoldTarget,s,D.viewMatrix),r.setUniform4fv("heightPlane",c)}_bindPointDistanceUniforms(t,r){if(!this._pointDistanceEnabled)return;const s=t.bindParameters.camera,c=this._tempSphere;(0,a.c)(c,this._pointDistanceOrigin),(0,a.m)(c,c,s.viewMatrix),c[3]=(0,a.i)(this._pointDistanceOrigin,this._pointDistanceTarget),r.setUniform4f("pointDistanceSphere",c[0],c[1],c[2],c[3])}_bindLineVerticalPlaneUniforms(t,r){if(!this._lineVerticalPlaneEnabled)return;const s=this._renderCoordsHelper,c=t.bindParameters.camera,D=this._tempPlane,G=this._tempVec3A,b=this._tempUp,O=this._tempDir,F=this._tempNormal;(0,y.KU)(this._lineVerticalPlaneSegment,.5,G),s.worldUpAtPosition(G,b),(0,a.n)(O,this._lineVerticalPlaneSegment.vector),(0,a.f)(F,b,O),(0,a.n)(F,F),ie(D,this._lineVerticalPlaneSegment.origin,F,c.viewMatrix),r.setUniform4fv("lineVerticalPlane",D);const w=this._tempVec3A;(0,a.c)(w,this._lineVerticalPlaneSegment.origin),s.setAltitude(w,0),(0,a.m)(w,w,c.viewMatrix),r.setUniform3fv("lineVerticalStart",w);const p=this._tempVec3B;(0,a.a)(p,this._lineVerticalPlaneSegment.origin,this._lineVerticalPlaneSegment.vector),s.setAltitude(p,0),(0,a.m)(p,p,c.viewMatrix),r.setUniform3fv("lineVerticalEnd",p)}_bindIntersectsLineUniforms(t,r){if(!this._intersectsLineEnabled)return;const s=ce,c=he,D=t.bindParameters.camera;if(this._intersectsLineInfinite){if((0,C.iL)((0,m.re)(this._intersectsLineSegment.origin,this._intersectsLineSegment.vector),Z),Z.c0=-Number.MAX_VALUE,!(0,B.zq)(D.frustum,Z))return;(0,C.Ws)(Z,s),(0,C.S$)(Z,c)}else(0,a.c)(s,this._intersectsLineSegment.origin),(0,a.a)(c,this._intersectsLineSegment.origin,this._intersectsLineSegment.vector);const G=this._tempVec3A;(0,a.m)(G,s,D.viewMatrix),r.setUniform3fv("intersectsLineStart",G);const b=this._tempVec4;(0,a.c)(b,this._intersectsLineSegment.vector),this._tempVec4[3]=0,(0,g.t)(this._tempVec4,this._tempVec4,D.viewMatrix),(0,a.m)(c,c,D.viewMatrix),r.setUniform3fv("intersectsLineEnd",c),(0,a.n)(b,b),r.setUniform3f("intersectsLineDirection",b[0],b[1],b[2]),r.setUniform1f("intersectsLineRadius",this._intersectsLineRadius)}_bindGlobalUniforms(t,r){const s=t.bindParameters.camera;this._heightManifoldEnabled?r.setUniform1f("maxPixelDistance",2*s.computeScreenPixelSizeAt(this._heightManifoldTarget)):this._pointDistanceEnabled?r.setUniform1f("maxPixelDistance",2*s.computeScreenPixelSizeAt(this._pointDistanceTarget)):this._lineVerticalPlaneEnabled&&r.setUniform1f("maxPixelDistance",2*s.computeScreenPixelSizeAt(this._lineVerticalPlaneSegment.origin)),r.bindTexture("frameColor",t.offscreenRenderingHelper.mainColorTexture)}_requestRender(){this._context&&this._context.requestRender()}}const Z=(0,C.Ue)(),ce=(0,_.c)(),he=(0,_.c)();class de extends U.l{constructor(t){super(t.view),this._angleCutoff=te.d,this._style={},this._heightManifoldTarget=(0,_.c)(),this._heightManifoldEnabled=!1,this._intersectsLine=(0,y.Ue)(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProps(t)}get testData(){return this.renderer}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(t){this._angleCutoff!==t&&(this._angleCutoff=t,this._syncAngleCutoff())}get style(){return this._style}set style(t){this._style=t,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(t){(0,l.pC)(t)?((0,a.c)(this._heightManifoldTarget,t),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(t){if((0,l.Wi)(t))return void(this.intersectsLine=null);const r=this.view.renderCoordsHelper.worldUpAtPosition(t,ue);this.intersectsLine=(0,y.al)(t,r),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(t){(0,l.pC)(t)?((0,y.JG)(t,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(t){this._intersectsLineInfinite=t,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(t){this._lineVerticalPlaneSegment=(0,l.pC)(t)?(0,y.JG)(t):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(t){this._pathVerticalPlaneBuffers=t,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(t){this._pointDistanceLine=(0,l.pC)(t)?{origin:(0,_.a)(t.origin),target:(0,_.a)(t.target)}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||(0,l.pC)(this._pointDistanceLine)||(0,l.pC)(this._pathVerticalPlaneBuffers))?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){(0,l.pC)(this.renderer)||(this.renderer=new le(this.view.renderCoordsHelper,void 0,{contrastControlEnabled:!0}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this.renderer.renderSlots,this.renderer))}_syncStyle(){(0,l.Wi)(this.renderer)||(this.renderer.setParameters(this._style),null!=this._style.intersectsLineRadius&&(this.renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){(0,l.Wi)(this.renderer)||this.renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){(0,l.Wi)(this.renderer)||(this.renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this.renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){(0,l.Wi)(this.renderer)||(this.renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this.renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){(0,l.Wi)(this.renderer)||(this.renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){(0,l.Wi)(this.renderer)||(this.renderer.pathVerticalPlaneEnabled=(0,l.pC)(this._pathVerticalPlaneBuffers)&&this.visible,(0,l.pC)(this._pathVerticalPlaneBuffers)&&(this.renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){(0,l.Wi)(this.renderer)||(this.renderer.lineVerticalPlaneEnabled=(0,l.pC)(this._lineVerticalPlaneSegment)&&this.visible,(0,l.pC)(this._lineVerticalPlaneSegment)&&(this.renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){(0,l.Wi)(this.renderer)||(this.renderer.pointDistanceEnabled=(0,l.pC)(this._pointDistanceLine)&&this.visible,(0,l.pC)(this._pointDistanceLine)&&(this.renderer.pointDistanceOrigin=this._pointDistanceLine.origin,this.renderer.pointDistanceTarget=this._pointDistanceLine.target))}_disposeRenderer(){(0,l.pC)(this.renderer)&&this.view._stage&&(this.view._stage.removeRenderPlugin(this.renderer),this.renderer=null)}}const ue=(0,_.c)()},21232:(Q,z,i)=>{i.d(z,{L:()=>I});var l=i(21286),a=i(62208),_=i(84161),y=i(28093),U=i(993),T=i(4794),g=i(55915),A=i(5548),C=i(26242),B=i(32917),M=i(42743),m=i(24425),L=i(96867),f=i(81695),S=i(34103);class V{constructor(n){this.resourceFactory=n,this._resources=null,this._visible=!0,this._attached=!1}destroy(){this._destroyResources()}get object(){return(0,a.pC)(this._resources)?this._resources.object:null}get resources(){return(0,a.pC)(this._resources)?this._resources.external:null}get visible(){return this._visible}set visible(n){n!==this._visible&&(this._visible=n,this._syncVisible())}get attached(){return this._attached}set attached(n){n!==this._attached&&(this._attached=n,this._createOrDestroyResources())}recreate(){this.attached&&this._createResources()}recreateGeometry(){if(!this.resourceFactory.recreateGeometry)return void this.recreate();const n=this.resourceFactory.view._stage;if((0,a.Wi)(this._resources)||!n)return;const d=this._resources.object;this._resources.external.forEach(P=>{P.type===m.U.Geometry&&n.remove(P)}),d.removeAllGeometries();const h=this.resourceFactory.recreateGeometry(this._resources.external,d,this._resources.layer);n.addMany(h)}_createOrDestroyResources(){this._attached?this._resources||this._createResources():this._destroyResources()}_createResources(){this._destroyResources();const n=this.resourceFactory,d=n.view,h=d._stage;if(!h)return;const P=new S.F({isPickable:!1,updatePolicy:M.jq.SYNC});h.add(P);const R=new L.T({castShadow:!1}),W=n.createResources(R,P);W.forEach(K=>{h.add(K),K instanceof f.x&&h.loadImmediate(K)}),h.add(R),P.add(R);const j=n.cameraChanged?(0,B.YP)(()=>d.state.camera,K=>n.cameraChanged(K),B.nn):null;this._resources={layer:P,object:R,external:W,cameraHandle:j},this._syncVisible()}_destroyResources(){if((0,a.Wi)(this._resources))return;const n=this.resourceFactory.view._stage;n?.remove(this._resources.object),n?.remove(this._resources.layer),this._resources.external.forEach(d=>{n?.remove(d),"dispose"in d&&d.dispose()}),this._resources.object.dispose(),this._resources.cameraHandle&&this._resources.cameraHandle.remove(),this._resources=null}_syncVisible(){(0,a.Wi)(this._resources)||this._resources.object.setVisible(this._visible)}}var E=i(81468),H=i(79112),u=i(10596),v=i(57521),o=i(16396),x=i(80805);class I{constructor(n){this.view=null,this._geometry=null,this._size=3,this._color=(0,T.f)(1,0,1,1),this._pixelSnappingEnabled=!0,this._primitive="square",this._outlineSize=1,this._outlineColor=(0,T.f)(1,1,1,1),this._elevationInfo=null,this.resources=new V({view:n.view,createResources:h=>this._createResources(h),recreateGeometry:(h,P)=>(h.geometry=this._recreateGeometry(P,h.material),(0,a.pC)(h.geometry)?[h.geometry]:[])});let d=!0;for(const h in n)h in this?"attached"===h?d=n[h]:this[h]=n[h]:console.error("Cannot set unknown property",h);this.attached=d}destroy(){this.resources.destroy()}get visible(){return this.resources.visible}set visible(n){this.resources.visible=n}get attached(){return this.resources.attached}set attached(n){this.resources.attached=n}get geometry(){return this._geometry}set geometry(n){this._geometry=n,this.resources.recreateGeometry()}get size(){return this._size}set size(n){if(n!==this._size){const d=this.preferredTextureSize;this._size=n,d<this.preferredTextureSize?(0,a.pC)(this.resources)&&this.resources.recreate():this._updateSizeAttribute()}}get color(){return this._color}set color(n){(0,U.g)(n,this._color)||((0,U.c)(this._color,n),this._updateMaterial())}get pixelSnappingEnabled(){return this._pixelSnappingEnabled}set pixelSnappingEnabled(n){this._pixelSnappingEnabled!==n&&(this._pixelSnappingEnabled=n,this._updateMaterial())}get primitive(){return this._primitive}set primitive(n){this._primitive!==n&&(this._primitive=n,(0,a.pC)(this.resources)&&this.resources.recreate())}get outlineSize(){return this._outlineSize}set outlineSize(n){n!==this._outlineSize&&(this._outlineSize=n,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(n){(0,U.g)(n,this._outlineColor)||((0,U.c)(this._outlineColor,n),this._updateMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(n){this._elevationInfo=n,this.resources&&this.resources.recreateGeometry()}_updateMaterial(){const n=this.resources.resources;(0,a.Wi)(n)||n.material.setParameters(this._materialParameters(n.texture.id))}_updateSizeAttribute(){const n=this.resources.resources,d=this.resources.object;if((0,a.Wi)(n)||(0,a.Wi)(d))return;const h=n.geometry;if((0,a.Wi)(h))return;const P=h.getMutableAttribute(o.T.SIZE).data,R=this.geometrySize;P[0]=R,P[1]=R,d.geometryVertexAttrsUpdated(d.geometryRecords[0])}_materialParameters(n){return{color:this._color,textureIsSignedDistanceField:!0,distanceFieldBoundingBox:k,occlusionTest:!1,outlineColor:this._outlineColor,outlineSize:this._outlineSize,textureId:n,polygonOffset:!1,shaderPolygonOffset:0,drawInSecondSlot:!0,depthEnabled:!1,pixelSnappingEnabled:this.pixelSnappingEnabled}}get geometrySize(){return this._size/N}_recreateGeometry(n,d){const h=this._createRenderGeometry();return(0,a.pC)(h)&&n.addGeometry(h,d),h}_createResources(n){const d=(0,u.cU)(this._primitive,this.preferredTextureSize),h=new x.A(this._materialParameters(d.id)),P=this._recreateGeometry(n,h);return{material:h,texture:d,geometry:P,forEach(R){R(d),R(h),(0,a.pC)(this.geometry)&&R(this.geometry)}}}get preferredTextureSize(){return(0,l.uZ)((0,l.Sf)(2*this.geometrySize),16,128)}calculateMapBounds(n){if((0,a.Wi)(this.resources.resources)||(0,a.Wi)(this.resources.resources.geometry))return!1;const d=this.resources.resources.geometry.vertexAttributes.get(o.T.POSITION);return(0,g.SH)(d.data,this.view.renderCoordsHelper.spatialReference,Y,this.view.spatialReference),(0,A.G1)(n,Y),!0}_createRenderGeometry(){const n=this.geometry;if((0,a.Wi)(n))return null;const{renderCoordsHelper:d,elevationProvider:h}=this.view,P=(0,E.w7)(n,h,H.o.fromElevationInfo(this.elevationInfo),d),R=(0,_.s)(C.WM.get(),n.x,n.y,P),W=C.WM.get();(0,g.SH)(R,n.spatialReference,W,d.spatialReference);const j=this.geometrySize;return v.Z.createPointGeometry(null,W,null,[j,j],[0,0,0,1])}}const N=u.Ns,k=[N/2,N/2,1-N/2,1-N/2],Y=(0,y.c)()},47634:(Q,z,i)=>{i.d(z,{j:()=>B});var l=i(62208),a=i(47923),_=i(39832),y=i(95285),U=i(97139),T=i(65787),g=i(17625),A=i(35387),C=i(66838);function B(M,m){M.extensions.add("GL_OES_standard_derivatives");const L=M.fragment;L.include(a.S),M.include(_.G),L.uniforms.add([new T.p("globalAlpha",f=>f.globalAlpha),new U.J("glowColor",f=>f.glowColor),new T.p("glowWidth",(f,S)=>f.glowWidth*S.camera.pixelRatio),new T.p("glowFalloff",f=>f.glowFalloff),new U.J("innerColor",f=>f.innerColor),new T.p("innerWidth",(f,S)=>f.innerWidth*S.camera.pixelRatio),new A.A("depthMap",(f,S)=>S.linearDepthTexture),new y.A("nearFar",(f,S)=>S.camera.nearFar),new C.Q("frameColor")]),L.code.add(g.H`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),L.code.add(g.H`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),L.code.add(g.H`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),L.code.add(g.H`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`),m.contrastControlEnabled?(L.uniforms.add(new T.p("globalAlphaContrastBoost",f=>(0,l.pC)(f.globalAlphaContrastBoost)?f.globalAlphaContrastBoost:1)),L.code.add(g.H`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture2D(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):L.code.add(g.H`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}}}]);