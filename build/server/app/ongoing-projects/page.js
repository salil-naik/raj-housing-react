(()=>{var e={};e.id=304,e.ids=[304],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},36329:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>x,tree:()=>c}),r(57846),r(54550),r(35866);var s=r(23191),o=r(88716),n=r(37922),i=r.n(n),a=r(95231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let c=["",{children:["ongoing-projects",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,57846)),"/home/runner/work/raj-housing-react/raj-housing-react/app/ongoing-projects/page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(r.bind(r,4362))).default(e)],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,54550)),"/home/runner/work/raj-housing-react/raj-housing-react/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(r.bind(r,4362))).default(e)],twitter:[],manifest:void 0}}],u=["/home/runner/work/raj-housing-react/raj-housing-react/app/ongoing-projects/page.jsx"],d="/ongoing-projects/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/ongoing-projects/page",pathname:"/ongoing-projects",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},54465:(e,t,r)=>{Promise.resolve().then(r.bind(r,42015)),Promise.resolve().then(r.bind(r,30740))},82271:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(10326),o=r(90434);r(17577),r(22288);let n=({isLink:e=!0,isTargetBlank:t,href:r,twStyles:n,onClick:i,btnHasBorderColor:a=!1,btnBorderColor:l,beforeBgGradient:c="white",initialColor:u="white",size:d,AOSClassname:p="",children:x})=>{let g=s.jsx("button",{"data-aos":p,className:`btn-component ${"sm"==d?"inline-block":"w-full h-full"} ${n} ${a?`border-2 ${l}`:""}`,style:{"--before-bg-gradient":c,"--initial-color":u},onClick:i,children:s.jsx("span",{className:"w-full h-full flex items-center justify-center gap-2",children:x})});return e?s.jsx(o.default,{className:"link-styles ",style:{"--before-bg-gradient":c,"--initial-color":u},href:r,target:t?"_blank":"",children:g}):g}},42015:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var s=r(10326),o=r(90434),n=r(46226),i=r(82271);let a=({image:e,title:t,slug:r,desc:a,location:l,typology:c,hasFooter:u,onClick:d,href:p})=>{let x=void 0!==r,g=(0,s.jsxs)("div",{className:"rounded-[10px] overflow-hidden pb-5 leading-[1.6]",style:{boxShadow:"0px 0px 4px rgba(0, 0, 0, 0.25)"},children:[e&&s.jsx("div",{className:"h-[220px] relative",children:s.jsx(n.default,{src:e,alt:"blog post picture",objectFit:"cover",fill:!0})}),(0,s.jsxs)("main",{style:{padding:"20px 25px 25px 25px"},children:[s.jsx("h4",{className:"font-bold mb-[0.5rem] text-[24px]",style:{lineHeight:1.4},children:t}),s.jsx("p",{className:"text-[16px] text-[#444] ",children:a}),u&&(0,s.jsxs)("footer",{className:"mt-5",children:[(0,s.jsxs)("p",{className:"mb-8 leading-loose font-semibold",children:[s.jsx("span",{children:"Location : "}),l,s.jsx("br",{}),s.jsx("span",{children:"Typology"})," : ",c]}),s.jsx(i.Z,{beforeBgGradient:`linear-gradient(
      90.14deg,
      #c6ab66 1.34%,
      #ffeba2 65.98%,
      #c8a845 98.3%
    )`,twStyles:"",href:`${p}/${r}`,children:"View Details"})]})]})]});return x?s.jsx(o.default,{className:" h-min",onClick:d,href:`${p}/${r}`,children:g}):s.jsx(s.Fragment,{children:g})}},57846:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l,metadata:()=>a});var s=r(19510),o=r(93705),n=r(1623),i=r(29273);r(71159);let a={title:"Ongoing Projects",description:"The list of all upcoming and ongoing projects by Raj Housing Development. Raj Ryle, Raj Harmony, Raj Durga, etc. are the ongoing projects in Mapusa city and Ponda city."},l=()=>s.jsx(n.ZP,{children:(0,s.jsxs)("div",{className:"grid-container",children:[s.jsx("h1",{className:"font-black text-[38px] md:text-[60px] mt-10 md:mt-20",children:"Ongoing Projects"}),s.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8  py-10",children:i.b?.map(e=>s.jsx(o.ZP,{hasFooter:!0,image:e?.img,title:e?.title,desc:e.desc,slug:e.slug,location:e.footer.location,typology:e.footer.typology,href:"/ongoing-projects"},e?.id))})]})})},93705:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>a});var s=r(68570);let o=(0,s.createProxy)(String.raw`/home/runner/work/raj-housing-react/raj-housing-react/components/Card.jsx`),{__esModule:n,$$typeof:i}=o;o.default;let a=(0,s.createProxy)(String.raw`/home/runner/work/raj-housing-react/raj-housing-react/components/Card.jsx#default`)},1623:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>a});var s=r(68570);let o=(0,s.createProxy)(String.raw`/home/runner/work/raj-housing-react/raj-housing-react/components/layout/Layout.jsx`),{__esModule:n,$$typeof:i}=o;o.default;let a=(0,s.createProxy)(String.raw`/home/runner/work/raj-housing-react/raj-housing-react/components/layout/Layout.jsx#default`)},22288:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,236,699,190,273],()=>r(36329));module.exports=s})();