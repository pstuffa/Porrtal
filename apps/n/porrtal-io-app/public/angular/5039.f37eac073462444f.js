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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[5039],{35039:(Sn,ye,_)=>{_.r(ye),_.d(ye,{executeScript:()=>Rn,extend:()=>Se,extractFieldLiterals:()=>Tn,findFunctionCalls:()=>Cn,functionHelper:()=>On,referencesFunction:()=>An,referencesMember:()=>Pn,validateScript:()=>Mn});var p=_(15861),be=_(37780),Ze=_(22386),m=_(6729),me=_(42275),R=_(7652),ve=_(5371),Le=_(26685),o=_(47562),f=_(19927),Fe=_(67525),je=_(84228),Be=_(38302),He=_(24499),We=_(53840),Ke=_(97536),Ve=_(31975),Ye=_(2004),we=_(21674),Ge=_(72854),ke=_(49672),ze=_(37118),$e=_(55214),Je=_(65234);function Ie(n){return n&&"function"==typeof n.then}const T=100;function A(n,e){return C.apply(this,arguments)}function C(){return(C=(0,p.Z)(function*(n,e){const r=[];for(let t=0;t<e.arguments.length;t++)r.push(yield l(n,e.arguments[t]));return r})).apply(this,arguments)}function v(n,e,r){return S.apply(this,arguments)}function S(){return(S=(0,p.Z)(function*(n,e,r){return!0===e.preparsed?r(n,null,e.arguments):r(n,e,yield A(n,e))})).apply(this,arguments)}function N(n,e,r){return U.apply(this,arguments)}function U(){return(U=(0,p.Z)(function*(n,e,r){if(!0===e.preparsed){const a=r(n,null,e.arguments);return Ie(a),a}const t=r(n,e,yield A(n,e));return Ie(t),t})).apply(this,arguments)}function l(n,e,r){return D.apply(this,arguments)}function D(){return(D=(0,p.Z)(function*(n,e,r){if(e.breakpoint&&!0!==r)return yield e.breakpoint(),l(n,e,!0);switch(e.type){case"VariableDeclarator":return pn(n,e);case"VariableDeclaration":return Oe(n,e,0);case"BlockStatement":return ln(n,e);case"FunctionDeclaration":return fn(n,e);case"ReturnStatement":return cn(n,e);case"IfStatement":return un(n,e);case"ExpressionStatement":return sn(n,e);case"UpdateExpression":return on(n,e);case"AssignmentExpression":return an(n,e);case"ForStatement":return en(n,e);case"ForInStatement":return tn(n,e);case"BreakStatement":return o.w;case"EmptyStatement":return o.v;case"ContinueStatement":return o.x;case"TemplateElement":return mn(n,e);case"TemplateLiteral":return vn(n,e);case"Identifier":return ae(n,e);case"MemberExpression":return hn(n,e);case"Literal":return e.value;case"CallExpression":return yn(n,e);case"UnaryExpression":return _n(n,e);case"BinaryExpression":return gn(n,e);case"LogicalExpression":return En(n,e);case"ArrayExpression":return dn(n,e);case"ObjectExpression":return Qe(n,e);case"Property":return Xe(n,e);default:throw new Error((0,f.H5)(e,"RUNTIME","UNREOGNISED"))}})).apply(this,arguments)}function Qe(n,e){return b.apply(this,arguments)}function b(){return(b=(0,p.Z)(function*(n,e){const r=[];for(let i=0;i<e.properties.length;i++)r[i]=yield l(n,e.properties[i]);const t={};for(let i=0;i<r.length;i++){const s=r[i];if((0,o.o)(s.value))throw new Error("Illegal Argument");if(!1===(0,o.b)(s.key))throw new Error("Illegal Argument");t[s.key.toString()]=s.value===o.v?null:s.value}const a=new m.Z(t);return a.immutable=!1,a})).apply(this,arguments)}function Xe(n,e){return Z.apply(this,arguments)}function Z(){return(Z=(0,p.Z)(function*(n,e){const r=yield l(n,e.value);return"Identifier"===e.key.type?{key:e.key.name,value:r}:{key:yield l(n,e.key),value:r}})).apply(this,arguments)}function xe(n,e,r){return L.apply(this,arguments)}function L(){return(L=(0,p.Z)(function*(n,e,r){const t=yield l(n,e.body);return r.lastAction=t,r.lastAction===o.w||r.lastAction instanceof o.R?(r.testResult=!1,r):(null!==e.update&&(yield l(n,e.update)),r)})).apply(this,arguments)}function F(){return(F=(0,p.Z)(function*(n,e,r){if(null!==e.test){const t=yield l(n,e.test);if(!0===n.abortSignal.aborted)throw new Error("Cancelled");if(r.testResult=t,!1===r.testResult)return r;if(!0!==r.testResult)throw new Error((0,f.H5)(e,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"));return xe(n,e,r)}return xe(n,e,r)})).apply(this,arguments)}function M(n,e,r,t,a,i){try{(function qe(n,e,r){return F.apply(this,arguments)})(n,e,r).then(()=>{try{!0===r.testResult?++i>T?(i=0,setTimeout(()=>{M(n,e,r,t,a,i)},0)):M(n,e,r,t,a,i):t(r.lastAction instanceof o.R?r.lastAction:o.v)}catch(s){a(s)}},s=>{a(s)})}catch(s){a(s)}}function en(n,e){try{return null!==e.init?l(n,e.init).then(()=>new Promise((r,t)=>{M(n,e,{testResult:!0,lastAction:o.v},a=>{r(a)},a=>{t(a)},0)})):new Promise((r,t)=>{M(n,e,{testResult:!0,lastAction:o.v},a=>{r(a)},a=>{t(a)},0)})}catch(r){return Promise.reject(r)}}function j(n,e,r,t,a,i,s,u,c,h){try{if(t<=i)return void u(o.v);a.value="k"===s?r[i]:i,l(n,e.body).then(d=>{try{d instanceof o.R?u(d):d===o.w?u(o.v):++h>T?(h=0,setTimeout(()=>{j(n,e,r,t,a,i+1,s,u,c,h)},0)):j(n,e,r,t,a,i+1,s,u,c,h)}catch(g){c(g)}},d=>{c(d)})}catch(d){c(d)}}function B(n,e,r,t,a,i,s,u,c){try{if(r.length()<=a)return void s(o.v);t.value="k"===i?r.get(a):a,l(n,e.body).then(h=>{h instanceof o.R?s(h):h===o.w?s(o.v):++c>T?(c=0,setTimeout(()=>{B(n,e,r,t,a+1,i,s,u,c)},0)):B(n,e,r,t,a+1,i,s,u,c)},h=>{u(h)})}catch(h){u(h)}}function H(n,e,r,t,a,i){try{if(void 0===i&&(i="i"),0===r.length)return void t.resolve(o.v);j(n,e,r,r.length,a,0,i,s=>{t.resolve(s)},s=>{t.reject(s)},0)}catch(s){t.reject(s)}}function nn(n,e,r,t,a,i){try{if(void 0===i&&(i="i"),0===r.length)return void t.resolve(o.v);B(n,e,r,a,0,i,s=>{t.resolve(s)},s=>{t.reject(s)},0)}catch(s){t.reject(s)}}function rn(n,e,r,t,a){try{H(n,e,r.keys(),t,a,"k")}catch(i){t.reject(i)}}function W(n,e,r,t,a,i,s,u){try{n.next().then(c=>{try{if(null===c)i(o.v);else{const h=me.Z.createFromGraphicLikeObject(c.geometry,c.attributes,t);h._underlyingGraphic=c,a.value=h,l(e,r.body).then(d=>{try{d===o.w?i(o.v):d instanceof o.R?i(d):++u>T?(u=0,setTimeout(()=>{W(n,e,r,t,a,i,s,u)},0)):W(n,e,r,t,a,i,s,u)}catch(g){s(g)}},d=>{s(d)})}}catch(h){s(h)}},c=>{s(c)})}catch(c){s(c)}}function tn(n,e){return K.apply(this,arguments)}function K(){return(K=(0,p.Z)(function*(n,e){return new Promise((r,t)=>{l(n,e.right).then(a=>{try{let i=null;i="VariableDeclaration"===e.left.type?l(n,e.left):Promise.resolve(),i.then(()=>{try{let s="";if("VariableDeclaration"===e.left.type){const c=e.left.declarations[0].id;"Identifier"===c.type&&(s=c.name)}else"Identifier"===e.left.type&&(s=e.left.name);if(!s)throw new Error((0,f.H5)(e,"RUNTIME","INVALIDVARIABLE"));s=s.toLowerCase();let u=null;if(null!==n.localScope&&void 0!==n.localScope[s]&&(u=n.localScope[s]),null===u&&void 0!==n.globalScope[s]&&(u=n.globalScope[s]),null===u)return void t(new Error((0,f.H5)(e,"RUNTIME","VARIABLENOTDECLARED")));(0,o.l)(a)||(0,o.b)(a)?H(n,e,a,{reject:t,resolve:r},u):(0,o.n)(a)?nn(n,e,a,{reject:t,resolve:r},u):a instanceof m.Z||(0,o.s)(a)?rn(n,e,a,{reject:t,resolve:r},u):(0,o.y)(a)?W(a.iterator(n.abortSignal),n,e,a,u,c=>{r(c)},c=>{t(c)},0):H(n,e,[],{reject:t,resolve:r},u)}catch(s){t(s)}},t)}catch(i){t(i)}},t)})})).apply(this,arguments)}function on(n,e){return V.apply(this,arguments)}function V(){return(V=(0,p.Z)(function*(n,e){const r=e.argument;if("MemberExpression"===r.type){const i={t:null},s=yield l(n,r.object);let u=null;i.t=s,!0===r.computed?u=yield l(n,r.property):"Identifier"===r.property.type&&(u=r.property.name);const c=i.t;let h;if((0,o.l)(c)){if(!(0,o.a)(u))throw new Error("Invalid Parameter");if(u<0&&(u=c.length+u),u<0||u>=c.length)throw new Error("Assignment outside of array bounds");h=(0,o.f)(c[u]),c[u]="++"===e.operator?h+1:h-1}else if(c instanceof m.Z){if(!1===(0,o.b)(u))throw new Error("Dictionary accessor must be a string");if(!0!==c.hasField(u))throw new Error("Invalid Parameter");h=(0,o.f)(c.field(u)),c.setField(u,"++"===e.operator?h+1:h-1)}else{if(!(0,o.s)(c))throw(0,o.n)(c)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===(0,o.b)(u))throw new Error("Feature accessor must be a string");if(!0!==c.hasField(u))throw new Error("Invalid Parameter");h=(0,o.f)(c.field(u)),c.setField(u,"++"===e.operator?h+1:h-1)}return!1===e.prefix?h:"++"===e.operator?h+1:h-1}const t="Identifier"===e.argument.type?e.argument.name.toLowerCase():"";if(!t)throw new Error("Invalid identifier");let a;if(null!==n.localScope&&void 0!==n.localScope[t])return a=(0,o.f)(n.localScope[t].value),n.localScope[t]={value:"++"===e.operator?a+1:a-1,valueset:!0,node:e},!1===e.prefix?a:"++"===e.operator?a+1:a-1;if(void 0!==n.globalScope[t])return a=(0,o.f)(n.globalScope[t].value),n.globalScope[t]={value:"++"===e.operator?a+1:a-1,valueset:!0,node:e},!1===e.prefix?a:"++"===e.operator?a+1:a-1;throw new Error("Variable not recognised")})).apply(this,arguments)}function I(n,e,r,t){switch(e){case"=":return n===o.v?null:n;case"/=":return(0,o.f)(r)/(0,o.f)(n);case"*=":return(0,o.f)(r)*(0,o.f)(n);case"-=":return(0,o.f)(r)-(0,o.f)(n);case"+=":return(0,o.b)(r)||(0,o.b)(n)?(0,o.h)(r)+(0,o.h)(n):(0,o.f)(r)+(0,o.f)(n);case"%=":return(0,o.f)(r)%(0,o.f)(n);default:throw new Error((0,f.H5)(t,"RUNTIME","OPERATORNOTRECOGNISED"))}}function an(n,e){return Y.apply(this,arguments)}function Y(){return(Y=(0,p.Z)(function*(n,e){const r=e.left;if("MemberExpression"===r.type){const a=yield l(n,e.right),i=yield l(n,r.object);let s=null;if(!0===r.computed)s=yield l(n,r.property);else{if("Identifier"!==r.property.type)throw new Error("Expected computed or identifier for assignemnt target");s=r.property.name}if((0,o.l)(i)){if(!(0,o.a)(s))throw new Error("Invalid Parameter");if(s<0&&(s=i.length+s),s<0||s>i.length)throw new Error("Assignment outside of array bounds");if(s===i.length){if("="!==e.operator)throw new Error("Invalid Parameter");i[s]=I(a,e.operator,i[s],e)}else i[s]=I(a,e.operator,i[s],e)}else if(i instanceof m.Z){if(!1===(0,o.b)(s))throw new Error("Dictionary accessor must be a string");if(!0===i.hasField(s))i.setField(s,I(a,e.operator,i.field(s),e));else{if("="!==e.operator)throw new Error("Invalid Parameter");i.setField(s,I(a,e.operator,null,e))}}else{if(!(0,o.s)(i))throw(0,o.n)(i)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===(0,o.b)(s))throw new Error("Feature accessor must be a string");if(!0===i.hasField(s))i.setField(s,I(a,e.operator,i.field(s),e));else{if("="!==e.operator)throw new Error("Invalid Parameter");i.setField(s,I(a,e.operator,null,e))}}return o.v}const t=r.name.toLowerCase();if(null!==n.localScope&&void 0!==n.localScope[t]){const a=yield l(n,e.right);return n.localScope[t]={value:I(a,e.operator,n.localScope[t].value,e),valueset:!0,node:e.right},o.v}if(void 0!==n.globalScope[t]){const a=yield l(n,e.right);return n.globalScope[t]={value:I(a,e.operator,n.globalScope[t].value,e),valueset:!0,node:e.right},o.v}throw new Error("Cannot assign undeclared variable")})).apply(this,arguments)}function sn(n,e){return G.apply(this,arguments)}function G(){return(G=(0,p.Z)(function*(n,e){if("AssignmentExpression"===e.expression.type)return l(n,e.expression);if("CallExpression"===e.expression.type){const t=yield l(n,e.expression);return t===o.v?o.v:new o.I(t)}const r=yield l(n,e.expression);return r===o.v?o.v:new o.I(r)})).apply(this,arguments)}function un(n,e){return k.apply(this,arguments)}function k(){return(k=(0,p.Z)(function*(n,e){if("AssignmentExpression"===e.test.type||"UpdateExpression"===e.test.type)throw new Error((0,f.H5)(e.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));const r=yield l(n,e.test);if(!0===r)return l(n,e.consequent);if(!1===r)return null!==e.alternate?l(n,e.alternate):o.v;throw new Error((0,f.H5)(e.test,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))})).apply(this,arguments)}function ln(n,e){return z.apply(this,arguments)}function z(){return(z=(0,p.Z)(function*(n,e){return Ne(n,e,0)})).apply(this,arguments)}function Ne(n,e,r){return $.apply(this,arguments)}function $(){return($=(0,p.Z)(function*(n,e,r){if(r>=e.body.length)return o.v;const t=yield l(n,e.body[r]);return t instanceof o.R||t===o.w||t===o.x||r===e.body.length-1?t:Ne(n,e,r+1)})).apply(this,arguments)}function cn(n,e){return J.apply(this,arguments)}function J(){return(J=(0,p.Z)(function*(n,e){if(null===e.argument)return new o.R(o.v);const r=yield l(n,e.argument);return new o.R(r)})).apply(this,arguments)}function fn(n,e){return Q.apply(this,arguments)}function Q(){return(Q=(0,p.Z)(function*(n,e){const r=e.id.name.toLowerCase();return n.globalScope[r]={valueset:!0,node:null,value:new R.Z(e,n)},o.v})).apply(this,arguments)}function Oe(n,e,r){return X.apply(this,arguments)}function X(){return(X=(0,p.Z)(function*(n,e,r){return r>=e.declarations.length||(yield l(n,e.declarations[r]),r===e.declarations.length-1||(yield Oe(n,e,r+1))),o.v})).apply(this,arguments)}function pn(n,e){return q.apply(this,arguments)}function q(){return(q=(0,p.Z)(function*(n,e){let r=null;if(r=null===e.init?null:yield l(n,e.init),null!==n.localScope){if(r===o.v&&(r=null),"Identifier"!==e.id.type)throw new Error("Can only assign a regular variable");const a=e.id.name.toLowerCase();return n.localScope[a]={value:r,valueset:!0,node:e.init},o.v}if("Identifier"!==e.id.type)throw new Error("Can only assign a regular variable");const t=e.id.name.toLowerCase();return r===o.v&&(r=null),n.globalScope[t]={value:r,valueset:!0,node:e.init},o.v})).apply(this,arguments)}let w=0;function Re(n,e,r,t){let a;switch(e=e.toLowerCase()){case"hasz":{const i=n.hasZ;return void 0!==i&&i}case"hasm":{const i=n.hasM;return void 0!==i&&i}case"spatialreference":{let i=n.spatialReference._arcadeCacheId;if(void 0===i){let u=!0;Object.freeze&&Object.isFrozen(n.spatialReference)&&(u=!1),u&&(w++,n.spatialReference._arcadeCacheId=w,i=w)}const s=new m.Z({wkt:n.spatialReference.wkt,wkid:n.spatialReference.wkid});return void 0!==i&&(s._arcadeCacheId="SPREF"+i.toString()),s}}switch(n.type){case"extent":switch(e){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":{const i=n[e];return void 0!==i?i:null}case"type":return"Extent"}break;case"polygon":switch(e){case"rings":return a=n.cache._arcadeCacheId,void 0===a&&(w++,a=w,n.cache._arcadeCacheId=a),new ve.Z(n.rings,n.spatialReference,!0===n.hasZ,!0===n.hasM,a);case"type":return"Polygon"}break;case"point":switch(e){case"x":case"y":case"z":case"m":return void 0!==n[e]?n[e]:null;case"type":return"Point"}break;case"polyline":switch(e){case"paths":return a=n.cache._arcadeCacheId,void 0===a&&(w++,a=w,n.cache._arcadeCacheId=a),new ve.Z(n.paths,n.spatialReference,!0===n.hasZ,!0===n.hasM,a);case"type":return"Polyline"}break;case"multipoint":switch(e){case"points":return a=n.cache._arcadeCacheId,void 0===a&&(w++,a=w,n.cache._arcadeCacheId=a),new Le.Z(n.points,n.spatialReference,!0===n.hasZ,!0===n.hasM,a,1);case"type":return"Multipoint"}}throw new Error((0,f.H5)(t,"RUNTIME","PROPERTYNOTFOUND"))}function hn(n,e){return ee.apply(this,arguments)}function ee(){return(ee=(0,p.Z)(function*(n,e){const r=yield l(n,e.object);if(null===r)throw new Error((0,f.H5)(e,"RUNTIME","NOTFOUND"));if(!1===e.computed){if("Identifier"===e.property.type){if(r instanceof m.Z||(0,o.s)(r))return r.field(e.property.name);if(r instanceof we.Z)return Re(r,e.property.name,0,e);throw new Error((0,f.H5)(e,"RUNTIME","INVALIDTYPE"))}throw new Error((0,f.H5)(e,"RUNTIME","INVALIDTYPE"))}let t=yield l(n,e.property);if(r instanceof m.Z||(0,o.s)(r)){if((0,o.b)(t))return r.field(t);throw new Error((0,f.H5)(e,"RUNTIME","INVALIDTYPE"))}if(r instanceof we.Z){if((0,o.b)(t))return Re(r,t,0,e);throw new Error((0,f.H5)(e,"RUNTIME","INVALIDTYPE"))}if((0,o.l)(r)){if((0,o.a)(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=r.length+t),t>=r.length||t<0)throw new Error((0,f.H5)(e,"RUNTIME","OUTOFBOUNDS"));return r[t]}throw new Error((0,f.H5)(e,"RUNTIME","INVALIDTYPE"))}if((0,o.n)(r)){if((0,o.a)(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=r.length()+t),t>=r.length()||t<0)throw new Error((0,f.H5)(e,"RUNTIME","OUTOFBOUNDS"));return r.get(t)}throw new Error((0,f.H5)(e,"RUNTIME","INVALIDTYPE"))}if((0,o.b)(r)){if((0,o.a)(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=r.length+t),t>=r.length||t<0)throw new Error((0,f.H5)(e,"RUNTIME","OUTOFBOUNDS"));return r[t]}throw new Error((0,f.H5)(e,"RUNTIME","INVALIDTYPE"))}throw new Error((0,f.H5)(e,"RUNTIME","INVALIDTYPE"))})).apply(this,arguments)}function _n(n,e){return ne.apply(this,arguments)}function ne(){return(ne=(0,p.Z)(function*(n,e){const r=yield l(n,e.argument);if((0,o.i)(r)){if("!"===e.operator)return!r;if("-"===e.operator)return-1*(0,o.f)(r);if("+"===e.operator)return 1*(0,o.f)(r);if("~"===e.operator)return~(0,o.f)(r);throw new Error((0,f.H5)(e,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"))}if("-"===e.operator)return-1*(0,o.f)(r);if("+"===e.operator)return 1*(0,o.f)(r);if("~"===e.operator)return~(0,o.f)(r);throw new Error((0,f.H5)(e,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"))})).apply(this,arguments)}function dn(n,e){return re.apply(this,arguments)}function re(){return(re=(0,p.Z)(function*(n,e){const r=[];for(let t=0;t<e.elements.length;t++)r.push(yield l(n,e.elements[t]));for(let t=0;t<r.length;t++){if((0,o.o)(r[t]))throw new Error((0,f.H5)(e,"RUNTIME","FUNCTIONCONTEXTILLEGAL"));r[t]===o.v&&(r[t]=null)}return r})).apply(this,arguments)}function gn(n,e){return te.apply(this,arguments)}function te(){return(te=(0,p.Z)(function*(n,e){const r=[];r[0]=yield l(n,e.left),r[1]=yield l(n,e.right);const t=r[0],a=r[1];switch(e.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return(0,o.r)((0,o.f)(t),(0,o.f)(a),e.operator);case"==":return(0,o.m)(t,a);case"!=":return!(0,o.m)(t,a);case"<":case">":case"<=":case">=":return(0,o.q)(t,a,e.operator);case"+":return(0,o.b)(t)||(0,o.b)(a)?(0,o.h)(t)+(0,o.h)(a):(0,o.f)(t)+(0,o.f)(a);case"-":return(0,o.f)(t)-(0,o.f)(a);case"*":return(0,o.f)(t)*(0,o.f)(a);case"/":return(0,o.f)(t)/(0,o.f)(a);case"%":return(0,o.f)(t)%(0,o.f)(a);default:throw new Error((0,f.H5)(e,"RUNTIME","OPERATORNOTRECOGNISED"))}})).apply(this,arguments)}function En(n,e){return oe.apply(this,arguments)}function oe(){return(oe=(0,p.Z)(function*(n,e){if("AssignmentExpression"===e.left.type||"UpdateExpression"===e.left.type)throw new Error((0,f.H5)(e.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("AssignmentExpression"===e.right.type||"UpdateExpression"===e.right.type)throw new Error((0,f.H5)(e.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));const r=yield l(n,e.left);let t=null;if(!(0,o.i)(r))throw new Error((0,f.H5)(e,"RUNTIME","ONLYBOOLEAN"));switch(e.operator){case"||":if(!0===r)return r;if(t=yield l(n,e.right),(0,o.i)(t))return t;throw new Error((0,f.H5)(e,"RUNTIME","ONLYORORAND"));case"&&":if(!1===r)return r;if(t=yield l(n,e.right),(0,o.i)(t))return t;throw new Error((0,f.H5)(e,"RUNTIME","ONLYORORAND"));default:throw new Error((0,f.H5)(e,"RUNTIME","ONLYORORAND"))}})).apply(this,arguments)}function ae(n,e){return ie.apply(this,arguments)}function ie(){return(ie=(0,p.Z)(function*(n,e){const r=e.name.toLowerCase();if(null!==n.localScope&&void 0!==n.localScope[r]){const t=n.localScope[r];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=l(n,t.node);const a=yield t.d;return t.value=a,t.valueset=!0,a}if(void 0!==n.globalScope[r]){const t=n.globalScope[r];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=l(n,t.node);const a=yield t.d;return t.value=a,t.valueset=!0,a}throw new Error((0,f.H5)(e,"RUNTIME","VARIABLENOTFOUND"))})).apply(this,arguments)}function yn(n,e){return se.apply(this,arguments)}function se(){return(se=(0,p.Z)(function*(n,e){if("Identifier"!==e.callee.type)throw new Error((0,f.H5)(e,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==n.localScope&&void 0!==n.localScope[e.callee.name.toLowerCase()]){const r=n.localScope[e.callee.name.toLowerCase()];if(r.value instanceof o.N)return r.value.fn(n,e);if(r.value instanceof R.Z)return Ce(n,e,r.value.definition);throw new Error((0,f.H5)(e,"RUNTIME","NOTAFUNCTION"))}if(void 0!==n.globalScope[e.callee.name.toLowerCase()]){const r=n.globalScope[e.callee.name.toLowerCase()];if(r.value instanceof o.N)return r.value.fn(n,e);if(r.value instanceof R.Z)return Ce(n,e,r.value.definition);throw new Error((0,f.H5)(e,"RUNTIME","NOTAFUNCTION"))}throw new Error((0,f.H5)(e,"RUNTIME","NOTFOUND"))})).apply(this,arguments)}function mn(n,e){return ue.apply(this,arguments)}function ue(){return(ue=(0,p.Z)(function*(n,e){return e.value?e.value.cooked:""})).apply(this,arguments)}function vn(n,e){return le.apply(this,arguments)}function le(){return(le=(0,p.Z)(function*(n,e){const r=[];for(let i=0;i<e.expressions.length;i++){const s=yield l(n,e.expressions[i]);r[i]=(0,o.h)(s)}let t="",a=0;for(const i of e.quasis)t+=i.value?i.value.cooked:"",!1===i.tail&&(t+=r[a]?r[a]:"",a++);return t})).apply(this,arguments)}const E={};function Te(n){return null===n?"":(0,o.l)(n)||(0,o.n)(n)?"Array":(0,o.j)(n)?"Date":(0,o.b)(n)?"String":(0,o.i)(n)?"Boolean":(0,o.a)(n)?"Number":n instanceof Ze.Z?"Attachment":n instanceof be.Z?"Portal":n instanceof m.Z?"Dictionary":(0,o.s)(n)?"Feature":n instanceof ke.Z?"Point":n instanceof ze.Z?"Polygon":n instanceof $e.Z?"Polyline":n instanceof Ge.Z?"Multipoint":n instanceof Ye.Z?"Extent":(0,o.o)(n)?"Function":(0,o.y)(n)?"FeatureSet":(0,o.z)(n)?"FeatureSetCollection":n===o.v?"":"number"==typeof n&&isNaN(n)?"Number":"Unrecognised Type"}function Me(n,e,r,t){return ce.apply(this,arguments)}function ce(){return(ce=(0,p.Z)(function*(n,e,r,t){const a=yield l(n,e.arguments[r]);if((0,o.m)(a,t))return l(n,e.arguments[r+1]);const i=e.arguments.length-r;return 1===i?l(n,e.arguments[r]):2===i?null:3===i?l(n,e.arguments[r+2]):Me(n,e,r+2,t)})).apply(this,arguments)}function Pe(n,e,r,t){return fe.apply(this,arguments)}function fe(){return(fe=(0,p.Z)(function*(n,e,r,t){if(!0===t)return l(n,e.arguments[r+1]);if(e.arguments.length-r==3)return l(n,e.arguments[r+2]);const a=yield l(n,e.arguments[r+2]);if(!1===(0,o.i)(a))throw new Error("WHEN needs boolean test conditions");return Pe(n,e,r+2,a)})).apply(this,arguments)}function pe(n,e){return he.apply(this,arguments)}function he(){return(he=(0,p.Z)(function*(n,e){const r=n.length,t=Math.floor(r/2);if(0===r)return[];if(1===r)return[n[0]];const a=[pe(n.slice(0,t),e),pe(n.slice(t,r),e)],i=yield Promise.all(a);return P(i[0],i[1],e,[])})).apply(this,arguments)}function P(n,e,r,t){return _e.apply(this,arguments)}function _e(){return(_e=(0,p.Z)(function*(n,e,r,t){const a=t;if(!(n.length>0||e.length>0))return t;if(n.length>0&&e.length>0){let i=yield r(n[0],e[0]);return isNaN(i)&&(i=1),i<=0?(a.push(n[0]),n=n.slice(1)):(a.push(e[0]),e=e.slice(1)),P(n,e,r,t)}return n.length>0?(a.push(n[0]),P(n=n.slice(1),e,r,t)):e.length>0?(a.push(e[0]),P(n,e=e.slice(1),r,t)):void 0})).apply(this,arguments)}function x(n,e){const r=n.length,t=Math.floor(r/2);return e||(e=function(a,i){return a<i?-1:a===i?0:1}),0===r?[]:1===r?[n[0]]:function wn(n,e,r){const t=[];for(;n.length>0||e.length>0;)if(n.length>0&&e.length>0){let a=r(n[0],e[0]);isNaN(a)&&(a=1),a<=0?(t.push(n[0]),n=n.slice(1)):(t.push(e[0]),e=e.slice(1))}else n.length>0?(t.push(n[0]),n=n.slice(1)):e.length>0&&(t.push(e[0]),e=e.slice(1));return t}(x(n.slice(0,t),e),x(n.slice(t,r),e),e)}function Ae(n,e,r){return de.apply(this,arguments)}function de(){return(de=(0,p.Z)(function*(n,e,r){const t=n.body;if(r.length!==n.params.length)throw new Error("Invalid Parameter calls to function.");for(let i=0;i<r.length;i++){const s=n.params[i];"Identifier"===s.type&&(e.localScope[s.name.toLowerCase()]={d:null,value:r[i],valueset:!0,node:null})}const a=yield l(e,t);if(a instanceof o.R)return a.value;if(a===o.w)throw new Error("Cannot Break from a Function");if(a===o.x)throw new Error("Cannot Continue from a Function");return a instanceof o.I?a.value:a})).apply(this,arguments)}function Ce(n,e,r){return N(n,e,function(t,a,i){const s={spatialReference:n.spatialReference,services:n.services,console:n.console,lrucache:n.lrucache,interceptor:n.interceptor,localScope:{},abortSignal:n.abortSignal,globalScope:n.globalScope,depthCounter:n.depthCounter+1};if(s.depthCounter>64)throw new Error("Exceeded maximum function depth");return Ae(r,s,i)})}function ge(n){return function(){const r={abortSignal:n.context.abortSignal,spatialReference:n.context.spatialReference,console:n.context.console,lrucache:n.context.lrucache,interceptor:n.context.interceptor,services:n.context.services,localScope:{},globalScope:n.context.globalScope,depthCounter:n.context.depthCounter+1};if(r.depthCounter>64)throw new Error("Exceeded maximum function depth");return Ae(n.definition,r,arguments)}}(0,je.r)(E,v),(0,Ve.r)(E,v),(0,We.r)(E,v),(0,He.r)(E,v),(0,Ke.r)(E,v),(0,Be.registerFunctions)({functions:E,compiled:!1,signatures:null,evaluateIdentifier:null,arcadeCustomFunctionHandler:null,mode:"async",standardFunction:v,standardFunctionAsync:N}),E.typeof=function(n,e){return v(n,e,function(r,t,a){(0,o.p)(a,1,1);const i=Te(a[0]);if("Unrecognised Type"===i)throw new Error("Unrecognised Type");return i})},E.iif=function(){var n=(0,p.Z)(function*(e,r){(0,o.p)(null===r.arguments?[]:r.arguments,3,3);const t=yield l(e,r.arguments[0]);if(!1===(0,o.i)(t))throw new Error("IF Function must have a boolean test condition");const a=[];return a[0]=yield l(e,r.arguments[1]),a[1]=yield l(e,r.arguments[2]),t?a[0]:a[1]});return function(e,r){return n.apply(this,arguments)}}(),E.decode=function(){var n=(0,p.Z)(function*(e,r){if(r.arguments.length<2)throw new Error("Missing Parameters");if(2===r.arguments.length)return l(e,r.arguments[1]);if((r.arguments.length-1)%2==0)throw new Error("Must have a default value result.");return Me(e,r,1,yield l(e,r.arguments[0]))});return function(e,r){return n.apply(this,arguments)}}(),E.when=function(){var n=(0,p.Z)(function*(e,r){if(r.arguments.length<3)throw new Error("Missing Parameters");if(r.arguments.length%2==0)throw new Error("Must have a default value result.");const t=yield l(e,r.arguments[0]);if(!1===(0,o.i)(t))throw new Error("WHEN needs boolean test conditions");return Pe(e,r,0,t)});return function(e,r){return n.apply(this,arguments)}}(),E.sort=function(n,e){return N(n,e,function(){var r=(0,p.Z)(function*(t,a,i){(0,o.p)(i,1,2);let s=i[0];if((0,o.n)(s)&&(s=s.toArray()),!1===(0,o.l)(s))throw new Error("Illegal Argument");if(i.length>1){if(!1===(0,o.o)(i[1]))throw new Error("Illegal Argument");return pe(s,ge(i[1]))}let u=s;if(0===u.length)return[];const c={};for(let g=0;g<u.length;g++){const y=Te(u[g]);""!==y&&(c[y]=!0)}if(!0===c.Array||!0===c.Dictionary||!0===c.Feature||!0===c.Point||!0===c.Polygon||!0===c.Polyline||!0===c.Multipoint||!0===c.Extent||!0===c.Function)return u.slice(0);let h=0,d="";for(const g in c)h++,d=g;return h>1||"String"===d?u=x(u,function(g,y){if(null==g||g===o.v)return null==y||y===o.v?0:1;if(null==y||y===o.v)return-1;const Ue=(0,o.h)(g),De=(0,o.h)(y);return Ue<De?-1:Ue===De?0:1}):"Number"===d?u=x(u,function(g,y){return g-y}):"Boolean"===d?u=x(u,function(g,y){return g===y?0:y?-1:1}):"Date"===d&&(u=x(u,function(g,y){return y-g})),u});return function(t,a,i){return r.apply(this,arguments)}}())};const In={fixSpatialReference:o.A,parseArguments:A,standardFunction:v,standardFunctionAsync:N,evaluateIdentifier:ae,arcadeCustomFunction:ge};for(const n in E)E[n]={value:new o.N(E[n]),valueset:!0,node:null};const O=function(){};function xn(n,e){const r=new O;null==n&&(n={}),null==e&&(e={});const t=new m.Z({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});t.immutable=!1,r.textformatting={value:t,valueset:!0,node:null};for(const a in e)r[a]={value:new o.N(e[a]),native:!0,valueset:!0,node:null};for(const a in n)r[a]=n[a]&&"esri.Graphic"===n[a].declaredClass?{value:me.Z.createFromGraphic(n[a]),valueset:!0,node:null}:{value:n[a],valueset:!0,node:null};return r}function Nn(n){console.log(n)}(O.prototype=E).infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},O.prototype.pi={value:Math.PI,valueset:!0,node:null};const On=In;function Se(n){const e={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:v,standardFunctionAsync:N,evaluateIdentifier:ae,arcadeCustomFunctionHandler:ge};for(let r=0;r<n.length;r++)n[r].registerFunctions(e);for(const r in e.functions)E[r]={value:new o.N(e.functions[r]),valueset:!0,node:null},O.prototype[r]=E[r];for(let r=0;r<e.signatures.length;r++)(0,f.gW)(e.signatures[r],"async")}function Rn(n,e){return Ee.apply(this,arguments)}function Ee(){return(Ee=(0,p.Z)(function*(n,e){let r=e.spatialReference;null==r&&(r=new Je.Z({wkid:102100}));const t=xn(e.vars,e.customfunctions),a={spatialReference:r,services:e.services,abortSignal:e.abortSignal??{aborted:!1},globalScope:t,console:e.console?e.console:Nn,lrucache:e.lrucache,interceptor:e.interceptor,localScope:null,depthCounter:1};let i=yield l(a,n.body[0].body);if(i instanceof o.R&&(i=i.value),i instanceof o.I&&(i=i.value),i===o.v&&(i=null),i===o.w)throw new Error("Cannot return BREAK");if(i===o.x)throw new Error("Cannot return CONTINUE");if(i instanceof o.N)throw new Error("Cannot return FUNCTION");if(i instanceof R.Z)throw new Error("Cannot return FUNCTION");return i})).apply(this,arguments)}function Tn(n,e){return(0,f.mb)(n)}function Mn(n,e){return(0,f.FS)(n,e,"full")}function Pn(n,e){return(0,f.bV)(n,e)}function An(n,e){return(0,f.w8)(n,e)}function Cn(n){return(0,f.Vf)(n)}Se([Fe.A])}}]);