"use strict";(()=>{var e={};e.id=698,e.ids=[698],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},18587:(e,o,t)=>{t.r(o),t.d(o,{originalPathname:()=>j,patchFetch:()=>m,requestAsyncStorage:()=>c,routeModule:()=>p,serverHooks:()=>d,staticGenerationAsyncStorage:()=>l});var r={};t.r(r),t.d(r,{POST:()=>g});var n=t(49303),s=t(88716),a=t(60670),i=t(29273),u=t(87070);let g=async e=>{try{let{slug:o}=await e.json(),t=i.i?.find(e=>e.slug===o);return console.log("slug in SERVER:",o),console.log("ongoing project:",t),u.NextResponse.json({message:"Successfully Retrieved Ongoing Project",project:t},{status:200})}catch(e){return console.log(e.message),u.NextResponse.json({message:"Failed to Retrieve Ongoing Project"},{status:500})}},p=new n.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/ongoingProject/route",pathname:"/api/ongoingProject",filename:"route",bundlePath:"app/api/ongoingProject/route"},resolvedPagePath:"/home/runner/work/raj-housing-react/raj-housing-react/app/api/ongoingProject/route.js",nextConfigOutput:"",userland:r}),{requestAsyncStorage:c,staticGenerationAsyncStorage:l,serverHooks:d}=p,j="/api/ongoingProject/route";function m(){return(0,a.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:l})}}};var o=require("../../../webpack-runtime.js");o.C(e);var t=e=>o(o.s=e),r=o.X(0,[948,972,273],()=>t(18587));module.exports=r})();