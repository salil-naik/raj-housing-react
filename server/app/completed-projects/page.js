(()=>{var e={};e.id=563,e.ids=[563],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},67156:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c}),r(98977),r(54550),r(35866);var a=r(23191),i=r(88716),s=r(37922),o=r.n(s),n=r(95231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let c=["",{children:["completed-projects",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,98977)),"/home/runner/work/raj-housing-react/raj-housing-react/app/completed-projects/page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(r.bind(r,4362))).default(e)],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,54550)),"/home/runner/work/raj-housing-react/raj-housing-react/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(r.bind(r,4362))).default(e)],twitter:[],manifest:void 0}}],d=["/home/runner/work/raj-housing-react/raj-housing-react/app/completed-projects/page.jsx"],p="/completed-projects/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/completed-projects/page",pathname:"/completed-projects",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},54465:(e,t,r)=>{Promise.resolve().then(r.bind(r,42015)),Promise.resolve().then(r.bind(r,30740))},82271:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(10326),i=r(90434);r(17577),r(22288);let s=({isLink:e=!0,isTargetBlank:t,href:r,twStyles:s,onClick:o,btnHasBorderColor:n=!1,btnBorderColor:l,beforeBgGradient:c="white",initialColor:d="white",size:p,AOSClassname:u="",children:m})=>{let h=a.jsx("button",{"data-aos":u,className:`btn-component ${"sm"==p?"inline-block":"w-full h-full"} ${s} ${n?`border-2 ${l}`:""}`,style:{"--before-bg-gradient":c,"--initial-color":d},onClick:o,children:a.jsx("span",{className:"w-full h-full flex items-center justify-center gap-2",children:m})});return e?a.jsx(i.default,{className:"link-styles ",style:{"--before-bg-gradient":c,"--initial-color":d},href:r,target:t?"_blank":"",children:h}):h}},42015:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var a=r(10326),i=r(90434),s=r(46226),o=r(82271);let n=({image:e,title:t,slug:r,desc:n,location:l,typology:c,hasFooter:d,onClick:p,href:u})=>{let m=void 0!==r,h=(0,a.jsxs)("div",{className:"rounded-[10px] overflow-hidden pb-5 leading-[1.6]",style:{boxShadow:"0px 0px 4px rgba(0, 0, 0, 0.25)"},children:[e&&a.jsx("div",{className:"h-[220px] relative",children:a.jsx(s.default,{src:e,alt:"blog post picture",objectFit:"cover",fill:!0})}),(0,a.jsxs)("main",{style:{padding:"20px 25px 25px 25px"},children:[a.jsx("h4",{className:"font-bold mb-[0.5rem] text-[24px]",style:{lineHeight:1.4},children:t}),a.jsx("p",{className:"text-[16px] text-[#444] ",children:n}),d&&(0,a.jsxs)("footer",{className:"mt-5",children:[(0,a.jsxs)("p",{className:"mb-8 leading-loose font-semibold",children:[a.jsx("span",{children:"Location : "}),l,a.jsx("br",{}),a.jsx("span",{children:"Typology"})," : ",c]}),a.jsx(o.Z,{beforeBgGradient:`linear-gradient(
      90.14deg,
      #c6ab66 1.34%,
      #ffeba2 65.98%,
      #c8a845 98.3%
    )`,twStyles:"",href:`${u}/${r}`,children:"View Details"})]})]})]});return m?a.jsx(i.default,{className:" h-min",onClick:p,href:`${u}/${r}`,children:h}):a.jsx(a.Fragment,{children:h})}},98977:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,metadata:()=>o});var a=r(19510),i=r(93705),s=r(1623);r(71159);let o={title:"Completed Projects",description:"The list of all the commercial and residential projects by Raj Housing Development. The projects are spread across Goa, mainly in Ponda and Mapusa. The projects are equipped with shops, 1BHK, and 2BHK flats. "},n=()=>a.jsx(s.ZP,{children:(0,a.jsxs)("div",{className:"grid-container",children:[a.jsx("h1",{className:"font-black text-[38px] md:text-[60px] mt-10 md:mt-20",children:"Completed Projects"}),a.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8  py-10",children:[{id:"1",title:"Ganaraj Arcade",desc:"This project is located at Upper Bazaar - Ponda, near the Kamat Nursing home.",img:"/completed-projects/ganaraj.webp"},{id:"2",title:"Raj Aguiar Enclave",desc:"Raj Aguiar Enclace is located in quite & cool location at Dhawali - Ponda. One can experience a peace of mind in the lap of nature with melodies of birds and lush green lawn to relax.",img:"/completed-projects/aguiar2.webp"},{id:"3",title:"Raj Madhurangan",desc:"Scenic exuberance of Goa, divine environs of Mardol - Mangeshi and tryst with a home in your dreams.",img:"/completed-projects/madhurangan2.webp"},{id:"4",title:"Raj Exellency",desc:"Raj Excellency located in a beaufitul hilly regions of Ribandar overlooking the pristine Mandovi River & lively Panjim city.",img:"/completed-projects/excellency.webp"},{id:"5",title:"Rajdeep Galleria",desc:"Experience the immensely energeting business environment where sky is the limit at Rajdeep Galleria located at Sadar Ponda, opposite Municipality.",img:"/completed-projects/rajdeep.webp"},{id:"6",title:"Sairaj Residency",desc:"This building is located at Portvaddo Siolim",img:"/completed-projects/ganaraj.webp"},{id:"7",title:"Raj Braganca Residency",desc:"This building gives a scenic beauty and one may expect the luxurious lifestyle.",img:"/completed-projects/braganza.webp"},{id:"8",title:"Raj Krishna Towers",desc:"This beaufitul project is located at Shantinagar Ponda, opposite Kamat Nursing.",img:"/completed-projects/raj_krishna.webp"},{id:"9",title:"Raj Mudra",desc:"Raj Mudra - Heart of the city, in harmony with nature' is more like a paradise that is completely enveloped with greenery on one side.",img:"/completed-projects/rajmudra.webp"},{id:"10",title:"Raj Vatika",desc:"This Villa is located at Dabolim, Vasco near the airport road.",img:"/completed-projects/vatika.webp"},{id:"11",title:"Sairaj Park",desc:"The Row Houses have taken the form of Rat-Rani. Add a ting of luster to your life in the twin bungalows Jai-Jui. Let the mesmeric fragrance cradle you in the independent bungalows Kevda.",img:"/completed-projects/sairaj_park.webp"}].map(e=>a.jsx(i.ZP,{tw:"text-[24px]",image:e?.img,title:e?.title,desc:e.desc},e?.id))})]})})},93705:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>n});var a=r(68570);let i=(0,a.createProxy)(String.raw`/home/runner/work/raj-housing-react/raj-housing-react/components/Card.jsx`),{__esModule:s,$$typeof:o}=i;i.default;let n=(0,a.createProxy)(String.raw`/home/runner/work/raj-housing-react/raj-housing-react/components/Card.jsx#default`)},1623:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>n});var a=r(68570);let i=(0,a.createProxy)(String.raw`/home/runner/work/raj-housing-react/raj-housing-react/components/layout/Layout.jsx`),{__esModule:s,$$typeof:o}=i;i.default;let n=(0,a.createProxy)(String.raw`/home/runner/work/raj-housing-react/raj-housing-react/components/layout/Layout.jsx#default`)},22288:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,483,699,190],()=>r(67156));module.exports=a})();