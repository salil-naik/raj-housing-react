(()=>{var e={};e.id=409,e.ids=[409],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},76137:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>x,tree:()=>l}),r(7352),r(35866),r(54550);var s=r(23191),n=r(88716),o=r(37922),i=r.n(o),a=r(95231),u={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>a[e]);r.d(t,u);let l=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,54550)),"/home/runner/work/raj-housing-react/raj-housing-react/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],d=[],c="/_not-found/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},68025:(e,t,r)=>{Promise.resolve().then(r.bind(r,14493)),Promise.resolve().then(r.bind(r,85999))},14370:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},14493:(e,t,r)=>{"use strict";r.d(t,{F:()=>a,default:()=>u});var s=r(10326),n=r(1826),o=r(17577);let i=(0,o.createContext)(),a=()=>(0,o.useContext)(i),u=({children:e})=>{let[t,r]=(0,o.useState)({loading:!1,data:[]}),[a,u]=(0,o.useState)({loading:!1,data:[]}),l=async()=>{r({...t,loading:!0});let e=await n.Lp.fetch(n.Jq);r({...t,loading:!1,data:e})},d=async e=>{u({...a,loading:!0});let t=await n.Lp.fetch((0,n.xl)(e));u({...a,loading:!1,data:t})};return(0,o.useEffect)(()=>{l()},[]),s.jsx(i.Provider,{value:{post:a,posts:t,handleGetPost:d},children:e})}},1826:(e,t,r)=>{"use strict";r.d(t,{Jq:()=>o,Lp:()=>n,xl:()=>i});var s=r(52661);let n=(0,r(15020).eI)({projectId:"he81f2dg",dataset:"production",apiVersion:"2024-01-10",useCdn:!1}),o=(0,s.Z)`*[_type=="post"] | order(publishedAt desc){
    _id,
    publishedAt,
    "slug":slug.current,
    "image":image.asset->url,
    title,
    body,
  }`;(0,s.Z)`*[_type=="post"] | order(publishedAt desc){
    publishedAt,
    "slug":slug.current,
  }`;let i=e=>(0,s.Z)`*[_type == "post" && slug.current == "${e}"][0]{
  _id,
    publishedAt,
    "image":image.asset->url,
    title,
    body,
  }`},54550:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x,metadata:()=>p});var s=r(19510),n=r(27164),o=r.n(n);r(67272),r(24823),r(25206);var i=r(68570);let a=(0,i.createProxy)(String.raw`/home/runner/work/raj-housing-react/raj-housing-react/context/blog.context.jsx`),{__esModule:u,$$typeof:l}=a;a.default,(0,i.createProxy)(String.raw`/home/runner/work/raj-housing-react/raj-housing-react/context/blog.context.jsx#useBlogContext`);let d=(0,i.createProxy)(String.raw`/home/runner/work/raj-housing-react/raj-housing-react/context/blog.context.jsx#default`);var c=r(51032);let p={title:{default:"Raj Housing Properties - Real Estate Company in Goa | Buy 1BHK, 2BHK, and 3BHK modern apartments",template:"%s - Raj Housing Properties in Goa"},description:"1BHK, 2BHK, and 3BHK Flats in Goa: Buy Modern and Pocket Friendly Properties in Goa Close to Goa Airport, Beaches, and Local Attractions."};function x({children:e}){return s.jsx("html",{lang:"en",children:s.jsx(d,{children:(0,s.jsxs)("body",{className:`${o().variable} ${o().className}`,children:[s.jsx(c.x7,{}),e]})})})}},16399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return n},notFound:function(){return s}});let r="NEXT_NOT_FOUND";function s(){let e=Error(r);throw e.digest=r,e}function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7352:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PARALLEL_ROUTE_DEFAULT_PATH:function(){return n},default:function(){return o}});let s=r(16399),n="next/dist/client/components/parallel-route-default.js";function o(){(0,s.notFound)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},67272:()=>{},24823:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,236],()=>r(76137));module.exports=s})();