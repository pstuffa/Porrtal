"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[7777],{77777:(Z,c,s)=>{s.r(c),s.d(c,{hydratedAdapter:()=>P});var h=s(2004),_=s(72854),M=s(72642),l=s(37118),x=s(55214);const P={convertToGEGeometry:function p(t,e){if(null==e)return null;let a="cache"in e?e.cache._geVersion:void 0;return null==a&&(a=t.convertJSONToGeometry(e),"cache"in e&&(e.cache._geVersion=a)),a},exportPoint:function g(t,e,a){const n=t.hasZ(e),r=t.hasM(e),o=new M.Z({x:t.getPointX(e),y:t.getPointY(e),spatialReference:a});return n&&(o.z=t.getPointZ(e)),r&&(o.m=t.getPointM(e)),o.cache._geVersion=e,o},exportPolygon:function E(t,e,a){const n=new l.Z({rings:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:a});return n.cache._geVersion=e,n},exportPolyline:function m(t,e,a){const n=new x.Z({paths:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:a});return n.cache._geVersion=e,n},exportMultipoint:function u(t,e,a){const n=new _.Z({hasZ:t.hasZ(e),hasM:t.hasM(e),points:t.exportPoints(e),spatialReference:a});return n.cache._geVersion=e,n},exportExtent:function f(t,e,a){const n=t.hasZ(e),r=t.hasM(e),o=new h.Z({xmin:t.getXMin(e),ymin:t.getYMin(e),xmax:t.getXMax(e),ymax:t.getYMax(e),spatialReference:a});if(n){const i=t.getZExtent(e);o.zmin=i.vmin,o.zmax=i.vmax}if(r){const i=t.getMExtent(e);o.mmin=i.vmin,o.mmax=i.vmax}return o.cache._geVersion=e,o}}}}]);