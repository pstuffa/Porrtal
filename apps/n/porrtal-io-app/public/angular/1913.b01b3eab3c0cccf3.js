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
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[1913],{81913:(T,F,u)=>{u.r(F),u.d(F,{applyEdits:()=>S});var h=u(15861),v=u(88879),y=u(46160),s=u(26584),I=u(58817),w=u(62208),Z=u(21726),R=u(13924);function O(e){return e&&null!=e.applyEdits}function S(e,t,a){return m.apply(this,arguments)}function m(){return(m=(0,h.Z)(function*(e,t,a,d={}){let n,l;const r={edits:a,result:new Promise((i,o)=>{n=i,l=o})};e.emit("apply-edits",r);try{const{results:i,edits:o}=yield $(e,t,a,d),c=L=>L.filter(B=>!B.error).map(I.d9),p={edits:o,addedFeatures:c(i.addFeatureResults),updatedFeatures:c(i.updateFeatureResults),deletedFeatures:c(i.deleteFeatureResults),addedAttachments:c(i.addAttachmentResults),updatedAttachments:c(i.updateAttachmentResults),deletedAttachments:c(i.deleteAttachmentResults)};return i.editedFeatureResults?.length&&(p.editedFeatures=i.editedFeatureResults),(p.addedFeatures.length||p.updatedFeatures.length||p.deletedFeatures.length||p.addedAttachments.length||p.updatedAttachments.length||p.deletedAttachments.length)&&e.emit("edits",p),n(p),i}catch(i){throw l(i),i}})).apply(this,arguments)}function $(e,t,a,d){return g.apply(this,arguments)}function g(){return(g=(0,h.Z)(function*(e,t,a,d){if(yield e.load(),!O(t))throw new s.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!e.editingEnabled)throw new s.Z(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:n,options:l}=yield U(e,a,d);return n.addFeatures.length||n.updateFeatures.length||n.deleteFeatures.length||n.addAttachments.length||n.updateAttachments.length||n.deleteAttachments.length?{edits:n,results:yield t.applyEdits(n,l)}:{edits:n,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}})).apply(this,arguments)}function U(e,t,a){return f.apply(this,arguments)}function f(){return(f=(0,h.Z)(function*(e,t,a){const n=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments);if(!(t&&(t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures)||n)))throw new s.Z(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&a&&a.gdbVersion)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&a&&a.rollbackOnFailureEnabled)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&a&&a.globalIdUsed)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&n)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!a||!a.globalIdUsed)&&n)throw new s.Z(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const l={...a};if(null!=l.rollbackOnFailureEnabled||e.capabilities.editing.supportsRollbackOnFailure||(l.rollbackOnFailureEnabled=!0),!1===l.rollbackOnFailureEnabled&&"original-and-current-features"===l.returnServiceEditsOption)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!e.capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference&&l.returnServiceEditsInSourceSR)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(l.returnServiceEditsInSourceSR&&"original-and-current-features"!==l.returnServiceEditsOption)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsOption' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const r={...t};if(r.addFeatures=t&&y.Z.isCollection(t.addFeatures)?t.addFeatures.toArray():r.addFeatures||[],r.updateFeatures=t&&y.Z.isCollection(t.updateFeatures)?t.updateFeatures.toArray():r.updateFeatures||[],r.deleteFeatures=t&&y.Z.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():r.deleteFeatures||[],r.addFeatures.length&&!e.capabilities.operations.supportsAdd)throw new s.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(r.updateFeatures.length&&!e.capabilities.operations.supportsUpdate)throw new s.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(r.deleteFeatures.length&&!e.capabilities.operations.supportsDelete)throw new s.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");r.addAttachments=r.addAttachments||[],r.updateAttachments=r.updateAttachments||[],r.deleteAttachments=r.deleteAttachments||[],r.addFeatures=r.addFeatures.map(A),r.updateFeatures=r.updateFeatures.map(A);const i=a&&a.globalIdUsed;return r.addFeatures.forEach(o=>M(o,e,i)),r.updateFeatures.forEach(o=>D(o,e,i)),r.deleteFeatures.forEach(o=>C(o,e,i)),r.addAttachments.forEach(o=>E(o,e)),r.updateAttachments.forEach(o=>E(o,e)),{edits:yield P(r),options:l}})).apply(this,arguments)}function b(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new s.Z(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&(0,w.pC)(e.geometry)){if(e.geometry.hasZ&&!1===t.capabilities.data.supportsZ)throw new s.Z(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities.data.supportsM)throw new s.Z(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function M(e,t,a){b(e,t,a)}function C(e,t,a){b(e,t,a)}function D(e,t,a){if(b(e,t,a),"geometry"in e&&(0,w.pC)(e.geometry)&&!t.capabilities.editing.supportsGeometryUpdate)throw new s.Z(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function E(e,t){const{feature:a,attachment:d}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!d.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!d.data&&!d.uploadId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(d.data instanceof File&&d.data.name||d.name))throw new s.Z(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&d.uploadId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof d.data){const n=(0,Z.sJ)(d.data);if(n&&!n.isBase64)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function P(e){return _.apply(this,arguments)}function _(){return(_=(0,h.Z)(function*(e){const t=e.addFeatures,a=e.updateFeatures,d=t.concat(a).map(i=>i.geometry),n=yield(0,R.aX)(d),l=t.length,r=a.length;return n.slice(0,l).forEach((i,o)=>e.addFeatures[o].geometry=i),n.slice(l,l+r).forEach((i,o)=>e.updateFeatures[o].geometry=i),e})).apply(this,arguments)}function A(e){const t=new v.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}}}]);