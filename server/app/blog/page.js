(()=>{var e={};e.id=404,e.ids=[404],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},95743:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d}),s(51333),s(54550),s(35866);var r=s(23191),a=s(88716),i=s(37922),n=s.n(i),l=s(95231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let d=["",{children:["blog",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,51333)),"/home/runner/work/raj-housing-react/raj-housing-react/app/blog/page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(s.bind(s,4362))).default(e)],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,54550)),"/home/runner/work/raj-housing-react/raj-housing-react/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(s.bind(s,4362))).default(e)],twitter:[],manifest:void 0}}],c=["/home/runner/work/raj-housing-react/raj-housing-react/app/blog/page.jsx"],u="/blog/page",x={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/blog/page",pathname:"/blog",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},26470:(e,t,s)=>{Promise.resolve().then(s.bind(s,76359))},82271:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(10326),a=s(90434);s(17577),s(22288);let i=({isLink:e=!0,isTargetBlank:t,href:s,twStyles:i,onClick:n,btnHasBorderColor:l=!1,btnBorderColor:o,beforeBgGradient:d="white",initialColor:c="white",size:u,AOSClassname:x="",children:p})=>{let m=r.jsx("button",{"data-aos":x,className:`btn-component ${"sm"==u?"inline-block":"w-full h-full"} ${i} ${l?`border-2 ${o}`:""}`,style:{"--before-bg-gradient":d,"--initial-color":c},onClick:n,children:r.jsx("span",{className:"w-full h-full flex items-center justify-center gap-2",children:p})});return e?r.jsx(a.default,{className:"link-styles ",style:{"--before-bg-gradient":d,"--initial-color":c},href:s,target:t?"_blank":"",children:m}):m}},42015:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var r=s(10326),a=s(90434),i=s(46226),n=s(82271);let l=({image:e,title:t,slug:s,desc:l,location:o,typology:d,hasFooter:c,onClick:u,href:x})=>{let p=void 0!==s,m=(0,r.jsxs)("div",{className:"rounded-[10px] overflow-hidden pb-5 leading-[1.6]",style:{boxShadow:"0px 0px 4px rgba(0, 0, 0, 0.25)"},children:[e&&r.jsx("div",{className:"h-[220px] relative",children:r.jsx(i.default,{src:e,alt:"blog post picture",objectFit:"cover",fill:!0})}),(0,r.jsxs)("main",{style:{padding:"20px 25px 25px 25px"},children:[r.jsx("h4",{className:"font-bold mb-[0.5rem] text-[24px]",style:{lineHeight:1.4},children:t}),r.jsx("p",{className:"text-[16px] text-[#444] ",children:l}),c&&(0,r.jsxs)("footer",{className:"mt-5",children:[(0,r.jsxs)("p",{className:"mb-8 leading-loose font-semibold",children:[r.jsx("span",{children:"Location : "}),o,r.jsx("br",{}),r.jsx("span",{children:"Typology"})," : ",d]}),r.jsx(n.Z,{beforeBgGradient:`linear-gradient(
      90.14deg,
      #c6ab66 1.34%,
      #ffeba2 65.98%,
      #c8a845 98.3%
    )`,twStyles:"",href:`${x}/${s}`,children:"View Details"})]})]})]});return p?r.jsx(a.default,{className:" h-min",onClick:u,href:`${x}/${s}`,children:m}):r.jsx(r.Fragment,{children:m})}},76359:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var r=s(10326),a=s(42015),i=s(14493),n=s(30740);let l=()=>{let{handleGetPost:e,posts:{loading:t,data:s}}=(0,i.F)();return r.jsx(n.default,{children:(0,r.jsxs)("div",{className:"grid-container",children:[r.jsx("h1",{className:"font-black text-[38px] md:text-[60px] mt-10 md:mt-20",children:"Blog"}),t?(0,r.jsxs)("div",{class:"animate-pulse md:flex justify-between py-10 mb-10 md:mb-20",children:[(0,r.jsxs)("div",{className:"shadow-md md:w-[351px] h-[351px] flex flex-col",children:[r.jsx("div",{className:"rounded-t-[10px] h-[50%] bg-slate-300"}),r.jsx("div",{className:"flex-1 bg-slate-200"})]}),(0,r.jsxs)("div",{className:"shadow-md md:w-[351px] h-[351px]  my-8 md:my-0 flex flex-col",children:[r.jsx("div",{className:"rounded-t-[10px] h-[50%] bg-slate-300"}),r.jsx("div",{className:"flex-1 bg-slate-200"})]}),(0,r.jsxs)("div",{className:"shadow-md md:w-[351px] h-[351px] flex flex-col",children:[r.jsx("div",{className:"rounded-t-[10px] h-[50%] bg-slate-300"}),r.jsx("div",{className:"flex-1 bg-slate-200"})]})]}):r.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8  py-10",children:s?.map(t=>r.jsx(a.default,{image:t?.image,title:t?.title,slug:t?.slug,onClick:()=>e(),href:"/blog"},t?._id))})]})})}},51333:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c,metadata:()=>d});var r=s(19510),a=s(68570);let i=(0,a.createProxy)(String.raw`/home/runner/work/raj-housing-react/raj-housing-react/components/pages/blog/Blog.jsx`),{__esModule:n,$$typeof:l}=i;i.default;let o=(0,a.createProxy)(String.raw`/home/runner/work/raj-housing-react/raj-housing-react/components/pages/blog/Blog.jsx#default`);s(71159);let d={title:"Blog",description:"Want to buy a flat in Ponda Goa or Mapusa Goa? Raj Housing gives the best amenities and services. To know more about the amenities provided by Raj Housing, read our blog."},c=()=>r.jsx(o,{})},22288:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,483,699,190],()=>s(95743));module.exports=r})();