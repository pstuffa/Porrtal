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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[8149],{14259:(L,T,g)=>{g.d(T,{q:()=>C});var w,D,b={exports:{}};w=b,void 0!==(D=function(){function v(a,h,_,u,Y){for(;u>_;){if(u-_>600){var p=u-_+1,B=h-_+1,y=Math.log(p),P=.5*Math.exp(2*y/3),j=.5*Math.sqrt(y*P*(p-P)/p)*(B-p/2<0?-1:1);v(a,h,Math.max(_,Math.floor(h-B*P/p+j)),Math.min(u,Math.floor(h+(p-B)*P/p+j)),Y)}var x=a[h],O=_,E=u;for(m(a,_,h),Y(a[u],x)>0&&m(a,_,u);O<E;){for(m(a,O,E),O++,E--;Y(a[O],x)<0;)O++;for(;Y(a[E],x)>0;)E--}0===Y(a[_],x)?m(a,_,E):m(a,++E,u),E<=h&&(_=E+1),h<=E&&(u=E-1)}}function m(a,h,_){var u=a[h];a[h]=a[_],a[_]=u}function c(a,h){return a<h?-1:a>h?1:0}return function A(a,h,_,u,Y){v(a,h,_||0,u||a.length-1,Y||c)}}())&&(w.exports=D);const C=b.exports},36592:(L,T,g)=>{g.d(T,{Q:()=>C});var w=g(85931),I=g(62208),D=g(77029),b=g(14259);class C{constructor(t=9,n){this.compareMinX=c,this.compareMinY=a,this._toBBox=e=>e,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this._toBBox=n:this._initFormat(n)),this.clear()}destroy(){this.clear(),P.prune(),j.prune(),x.prune(),O.prune()}all(t){this._all(this.data,t)}search(t,n){let e=this.data;const s=this._toBBox;if(B(t,e))for(P.clear();e;){for(let r=0,o=e.children.length;r<o;r++){const l=e.children[r],d=e.leaf?s(l):l;B(t,d)&&(e.leaf?n(l):p(t,d)?this._all(l,n):P.push(l))}e=P.pop()}}collides(t){let n=this.data;const e=this._toBBox;if(!B(t,n))return!1;for(P.clear();n;){for(let s=0,r=n.children.length;s<r;s++){const o=n.children[s],l=n.leaf?e(o):o;if(B(t,l)){if(n.leaf||p(t,l))return!0;P.push(o)}}n=P.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,s=t.length;e<s;e++)this.insert(t[e]);return this}let n=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const e=this.data;this.data=n,n=e}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new S([]),this}remove(t){if(!t)return this;let n,e=this.data,s=null,r=0,o=!1;const l=this._toBBox(t);for(x.clear(),O.clear();e||x.length>0;){if(e||(e=(0,I.j0)(x.pop()),s=x.data[x.length-1],r=O.pop()??0,o=!0),e.leaf&&(n=(0,w.cq)(e.children,t,e.children.length,e.indexHint),-1!==n))return e.children.splice(n,1),x.push(e),this._condense(x),this;o||e.leaf||!p(e,l)?s?(r++,e=s.children[r],o=!1):e=null:(x.push(e),O.push(r),r=0,s=e,e=e.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,n){let e=t;for(j.clear();e;){if(!0===e.leaf)for(const s of e.children)n(s);else j.pushArray(e.children);e=j.pop()??null}}_build(t,n,e,s){const r=e-n+1;let o=this._maxEntries;if(r<=o){const f=new S(t.slice(n,e+1));return A(f,this._toBBox),f}s||(s=Math.ceil(Math.log(r)/Math.log(o)),o=Math.ceil(r/o**(s-1)));const l=new U([]);l.height=s;const d=Math.ceil(r/o),M=d*Math.ceil(Math.sqrt(o));y(t,n,e,M,this.compareMinX);for(let f=n;f<=e;f+=M){const X=Math.min(f+M-1,e);y(t,f,X,d,this.compareMinY);for(let R=f;R<=X;R+=d){const W=Math.min(R+d-1,X);l.children.push(this._build(t,R,W,s-1))}}return A(l,this._toBBox),l}_chooseSubtree(t,n,e,s){for(;s.push(n),!0!==n.leaf&&s.length-1!==e;){let r,o=1/0,l=1/0;for(let d=0,M=n.children.length;d<M;d++){const f=n.children[d],X=h(f),R=u(t,f)-X;R<l?(l=R,o=X<o?X:o,r=f):R===l&&X<o&&(o=X,r=f)}n=r||n.children[0]}return n}_insert(t,n,e){const r=e?t:(0,this._toBBox)(t);x.clear();const o=this._chooseSubtree(r,this.data,n,x);for(o.children.push(t),m(o,r);n>=0&&x.data[n].children.length>this._maxEntries;)this._split(x,n),n--;this._adjustParentBBoxes(r,x,n)}_split(t,n){const e=t.data[n],s=e.children.length,r=this._minEntries;this._chooseSplitAxis(e,r,s);const o=this._chooseSplitIndex(e,r,s);if(!o)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const l=e.children.splice(o,e.children.length-o),d=e.leaf?new S(l):new U(l);d.height=e.height,A(e,this._toBBox),A(d,this._toBBox),n?t.data[n-1].children.push(d):this._splitRoot(e,d)}_splitRoot(t,n){this.data=new U([t,n]),this.data.height=t.height+1,A(this.data,this._toBBox)}_chooseSplitIndex(t,n,e){let s,r,o;s=r=1/0;for(let l=n;l<=e-n;l++){const d=v(t,0,l,this._toBBox),M=v(t,l,e,this._toBBox),f=Y(d,M),X=h(d)+h(M);f<s?(s=f,o=l,r=X<r?X:r):f===s&&X<r&&(r=X,o=l)}return o}_chooseSplitAxis(t,n,e){const s=t.leaf?this.compareMinX:c,r=t.leaf?this.compareMinY:a;this._allDistMargin(t,n,e,s)<this._allDistMargin(t,n,e,r)&&t.children.sort(s)}_allDistMargin(t,n,e,s){t.children.sort(s);const r=this._toBBox,o=v(t,0,n,r),l=v(t,e-n,e,r);let d=_(o)+_(l);for(let M=n;M<e-n;M++){const f=t.children[M];m(o,t.leaf?r(f):f),d+=_(o)}for(let M=e-n-1;M>=n;M--){const f=t.children[M];m(l,t.leaf?r(f):f),d+=_(l)}return d}_adjustParentBBoxes(t,n,e){for(let s=e;s>=0;s--)m(n.data[s],t)}_condense(t){for(let n=t.length-1;n>=0;n--){const e=t.data[n];if(0===e.children.length)if(n>0){const s=t.data[n-1],r=s.children;r.splice((0,w.cq)(r,e,r.length,s.indexHint),1)}else this.clear();else A(e,this._toBBox)}}_initFormat(t){const n=["return a"," - b",";"];this.compareMinX=new Function("a","b",n.join(t[0])),this.compareMinY=new Function("a","b",n.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function A(i,t){v(i,0,i.children.length,t,i)}function v(i,t,n,e,s){s||(s=new S([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=t;o<n;o++)r=i.children[o],m(s,i.leaf?e(r):r);return s}function m(i,t){i.minX=Math.min(i.minX,t.minX),i.minY=Math.min(i.minY,t.minY),i.maxX=Math.max(i.maxX,t.maxX),i.maxY=Math.max(i.maxY,t.maxY)}function c(i,t){return i.minX-t.minX}function a(i,t){return i.minY-t.minY}function h(i){return(i.maxX-i.minX)*(i.maxY-i.minY)}function _(i){return i.maxX-i.minX+(i.maxY-i.minY)}function u(i,t){return(Math.max(t.maxX,i.maxX)-Math.min(t.minX,i.minX))*(Math.max(t.maxY,i.maxY)-Math.min(t.minY,i.minY))}function Y(i,t){const n=Math.max(i.minX,t.minX),e=Math.max(i.minY,t.minY),s=Math.min(i.maxX,t.maxX),r=Math.min(i.maxY,t.maxY);return Math.max(0,s-n)*Math.max(0,r-e)}function p(i,t){return i.minX<=t.minX&&i.minY<=t.minY&&t.maxX<=i.maxX&&t.maxY<=i.maxY}function B(i,t){return t.minX<=i.maxX&&t.minY<=i.maxY&&t.maxX>=i.minX&&t.maxY>=i.minY}function y(i,t,n,e,s){const r=[t,n];for(;r.length;){const o=(0,I.j0)(r.pop()),l=(0,I.j0)(r.pop());if(o-l<=e)continue;const d=l+Math.ceil((o-l)/e/2)*e;(0,b.q)(i,d,l,o,s),r.push(l,d,d,o)}}const P=new D.Z,j=new D.Z,x=new D.Z,O=new D.Z({deallocator:void 0});class E{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class K extends E{constructor(){super(...arguments),this.height=1,this.indexHint=new w.SO}}class S extends K{constructor(t){super(),this.children=t,this.leaf=!0}}class U extends K{constructor(t){super(),this.children=t,this.leaf=!1}}},28149:(L,T,g)=>{g.r(T),g.d(T,{default:()=>A});var w=g(15861),I=g(8314),D=g(62208),b=g(36592),C=g(60853);class A{createIndex(c,a){var h=this;return(0,w.Z)(function*(){const _=new Array;if(!c.vertexAttributes||!c.vertexAttributes.position)return new b.Q;const u=h._createMeshData(c),Y=(0,D.pC)(a)?yield a.invoke("createIndexThread",u,{transferList:_}):h.createIndexThread(u).result;return h._createPooledRBush().fromJSON(Y)})()}createIndexThread(c){const a=new Float64Array(c.position),h=this._createPooledRBush();return c.components?this._createIndexComponentsThread(h,a,c.components.map(_=>new Uint32Array(_))):this._createIndexAllThread(h,a)}_createIndexAllThread(c,a){const h=new Array(a.length/9);let _=0;for(let u=0;u<a.length;u+=9)h[_++]=v(a,u+0,u+3,u+6);return c.load(h),{result:c.toJSON()}}_createIndexComponentsThread(c,a,h){let _=0;for(const p of h)_+=p.length/3;const u=new Array(_);let Y=0;for(const p of h)for(let B=0;B<p.length;B+=3)u[Y++]=v(a,3*p[B+0],3*p[B+1],3*p[B+2]);return c.load(u),{result:c.toJSON()}}_createMeshData(c){const a=(c.transform?(0,C.I5)({position:c.vertexAttributes.position,normal:null,tangent:null},c.transform,c.spatialReference).position:c.vertexAttributes.position).buffer;return!c.components||c.components.some(h=>!h.faces)?{position:a}:{position:a,components:c.components.map(h=>h.faces)}}_createPooledRBush(){return new b.Q(9,(0,I.Z)("esri-csp-restrictions")?c=>c:[".minX",".minY",".maxX",".maxY"])}}function v(m,c,a,h){return{minX:Math.min(m[c+0],m[a+0],m[h+0]),maxX:Math.max(m[c+0],m[a+0],m[h+0]),minY:Math.min(m[c+1],m[a+1],m[h+1]),maxY:Math.max(m[c+1],m[a+1],m[h+1]),p0:[m[c+0],m[c+1],m[c+2]],p1:[m[a+0],m[a+1],m[a+2]],p2:[m[h+0],m[h+1],m[h+2]]}}}}]);