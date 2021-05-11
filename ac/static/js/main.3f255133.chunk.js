(this["webpackJsonpair-conditioner"]=this["webpackJsonpair-conditioner"]||[]).push([[0],{104:function(e,t,r){},105:function(e,t,r){},111:function(e,t,r){},114:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(34),c=r.n(o),i=(r(104),r(105),r(139)),s=r(116),l=r(93),d=r(2);function u(e){var t=e.children,r=Object(i.a)("(prefers-color-scheme: dark)")?"dark":"light",a=Object(n.useMemo)((function(){return Object(l.a)({palette:{mode:r}})}),[r]);return Object(d.jsx)(s.a,{theme:a,children:t})}var j=r(150),b=r(92),h=r(14),m=r(152),p=r(151),g=r(142),f=r(145),x=r(86),O=r.n(x),v=Object(f.a)((function(e){return{root:{margin:e.spacing(3,0),display:"flex",justifyContent:"center",alignItems:"center"}}}));function y(){var e=v();return Object(d.jsxs)(p.a,{align:"center",className:e.root,color:"textSecondary",children:[Object(d.jsx)(O.a,{}),"Tip: \u4e3a\u4f60\u7684\u590f\u65e5\u5e26\u53bb\u6e05\u51c9\uff01"]})}var w=r(33),k=r(143),C=r(153),S=r(90),N=r.n(S),E=r(91),L=r.n(E),I=r(88),B=r.n(I),T=r(87),R=r.n(T),A=r(89),W=r.n(A),Y=r(60),F=r(52),D=function(){return Object(F.b)()},J=F.c,M=r(45),P=Object(M.b)({name:"toast",initialState:{open:!1,message:""},reducers:{setMessage:function(e,t){e.message=t.payload},setOpen:function(e,t){e.open=t.payload}}}),U=P.actions,V=U.setMessage,_=U.setOpen,q=P.reducer,z={status:"ac-status",mode:"ac-mode",temperature:"ac-temperature"},G={status:!1,mode:localStorage.getItem(z.mode)||"cold",temperature:parseInt(localStorage.getItem(z.temperature)||"")||20},H=Object(M.b)({name:"ac",initialState:G,reducers:{setStatus:function(e,t){e.status=t.payload},setTemperature:function(e,t){e.temperature=t.payload},increment:function(e){e.temperature+=1,localStorage.setItem(z.temperature,e.temperature.toString())},decrement:function(e){e.temperature-=1,localStorage.setItem(z.temperature,e.temperature.toString())},setMode:function(e,t){e.mode=t.payload,localStorage.setItem(z.mode,e.mode)},toggleStatus:function(e){e.status=!e.status,localStorage.setItem(z.status,e.status.toString())}}}),$=function(e){return e.ac.temperature},K=H.actions,Q=K.setTemperature,X=K.increment,Z=K.decrement,ee=K.setMode,te=K.toggleStatus,re=K.setStatus,ne=H.reducer;function ae(e){return"https://cdn.jsdelivr.net/gh/YunYouJun/air-conditioner/public"+e}var oe,ce,ie=Object(f.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}}));function se(e){return Object(d.jsx)(C.a,Object(w.a)(Object(w.a)({},e),{},{onClick:function(){!function(){var e=document.getElementById("di");e&&e.play()}(),e.onClick()}}))}function le(){var e=document.getElementById("ac-work");e.load(),e.play(),setTimeout((function(){!function(){var e=document.getElementById("air-extractor-fan");e.load(),e.play(),oe=setTimeout((function(){ce=setInterval((function(){e.currentTime=2}),56e3)}),2e3)}()}),8e3)}var de=Object(l.a)({palette:{primary:Y.a}}),ue=ae("/assets/audio/di.mp3"),je=ae("/assets/audio/ac-work.mp3"),be=ae("/assets/audio/air-extractor-fan.mp3");function he(){var e=ie(),t=J((function(e){return e.ac})),r=D();return Object(d.jsxs)(g.a,{my:4,display:"flex",flexDirection:"column",alignItems:"center",children:[Object(d.jsx)("audio",{id:"di",src:ue,preload:"auto"}),Object(d.jsx)("audio",{id:"ac-work",src:je,preload:"auto"}),Object(d.jsx)("audio",{id:"air-extractor-fan",src:be,preload:"auto"}),Object(d.jsxs)("div",{children:[" ",Object(d.jsx)(se,{color:"primary","aria-label":"cold",className:e.margin,onClick:function(){r(ee("cold"))},children:Object(d.jsx)(R.a,{})}),Object(d.jsx)(k.a,{theme:de,children:Object(d.jsx)(se,{color:t.status?"secondary":"primary","aria-label":"add",className:e.margin,onClick:function(){!function(e,t){if(e){document.getElementById("ac-work").load();var r=document.getElementById("air-extractor-fan");oe&&clearTimeout(oe),ce&&clearInterval(ce),r.currentTime=58}else le();t(te())}(t.status,r)},style:{color:"white"},children:Object(d.jsx)(B.a,{})})}),Object(d.jsx)(se,{"aria-label":"hot",className:e.margin,style:{backgroundColor:"orange",color:"white"},onClick:function(){r(ee("hot"))},children:Object(d.jsx)(W.a,{})})]}),Object(d.jsx)(se,{"aria-label":"add",className:e.margin,onClick:function(){r((function(e,t){$(t())<31?e(X()):(e(V("\u5df2\u7ecf\u662f\u6700\u5927\u6e29\u5ea6\u5566\uff01")),e(_(!0)))}))},children:Object(d.jsx)(N.a,{})}),Object(d.jsx)(se,{"aria-label":"reduce",className:e.margin,onClick:function(){r((function(e,t){$(t())>16?e(Z()):(e(V("\u5df2\u7ecf\u662f\u6700\u5c0f\u6e29\u5ea6\u5566\uff01")),e(_(!0)))}))},children:Object(d.jsx)(L.a,{})})]})}var me=r(16),pe=r(149),ge=r(144),fe=r.p+"static/media/logo.4cbbb3c8.svg",xe=r(32),Oe=(r(111),"#e0e0e0"),ve="#cccccc",ye="#bbbbbb",we=Object(f.a)((function(e){return{acBorder:{borderRadius:10,borderBottomLeftRadius:20,borderBottomRightRadius:20},acDisplay:{textShadow:"0px 0px 2px rgba(0, 0, 0, 0.3)"},acLogo:{width:12},acStatus:{backgroundColor:function(e){return e.backgroundColor||"transparent"}},energyLabel:{backgroundColor:"#4ea5f5"}}}));function ke(e){return Object(d.jsx)(g.a,Object(w.a)({bgcolor:"background.paper",height:150,border:1,borderColor:Oe,borderRadius:10,boxShadow:3,position:"relative"},e))}function Ce(){var e=J($);return Object(d.jsxs)(p.a,{variant:"h4",align:"center",children:[Object(d.jsx)("span",{className:"font-digit ac-temperature",children:e}),Object(d.jsx)("small",{className:"font-digit",children:"\xb0C"})]})}var Se=a.a.forwardRef((function(e,t){return Object(d.jsxs)(g.a,Object(w.a)(Object(w.a)({},e),{},{ref:t,position:"absolute",top:25,right:30,color:ve,children:[Object(d.jsxs)(p.a,{align:"left",variant:"subtitle2",children:[Object(d.jsx)("span",{children:"cold"===e.mode?"\u2744":"\u2600\ufe0f"}),"\ufe0f\ufe0f"]}),Object(d.jsx)(Ce,{})]}))}));function Ne(e){return Object(d.jsx)(g.a,{textAlign:"center",mt:12,children:Object(d.jsx)("a",{href:xe.repository.url,title:xe.description,target:"_blank",rel:"noreferrer noopener",children:Object(d.jsx)("img",{className:e.className,src:fe,alt:"logo"})})})}function Ee(){return Object(d.jsx)(g.a,{mt:1,border:1,borderColor:Oe})}function Le(e){var t={backgroundColor:e.status?"#38F709":Oe},r=we(t);return Object(d.jsx)(g.a,{className:r.acStatus,position:"absolute",height:4,width:4,borderRadius:"50%",top:130,right:10})}function Ie(e,t,r,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=Object(me.a)(new Array(e).keys()),c=o.map((function(e){return Object(d.jsx)(g.a,{mx:n,my:a,width:r,height:r,borderRadius:"50%",bgcolor:t},e)}));return Object(d.jsx)(g.a,{display:"flex",justifyContent:"center",children:c})}function Be(e){return Object(d.jsxs)(g.a,{className:e.className,position:"absolute",top:10,left:10,height:70,width:50,borderRadius:2,p:.5,children:[Ie(6,"white",4,.25),Object(d.jsxs)(g.a,{my:.5,px:1,py:.25,height:28,width:"100%",bgcolor:"background.paper",children:[Object(d.jsxs)(pe.a,{container:!0,children:[Object(d.jsx)(g.a,{bgcolor:"green",height:3,width:"40%"}),Object(d.jsx)(g.a,{height:3,marginLeft:"40%",style:{borderTop:1.5,borderRight:2,borderBottom:1.5,borderLeft:0,borderTopColor:"transparent",borderRightColor:"green",borderBottomColor:"transparent",borderLeftColor:"transparent",borderStyle:"solid"}}),Object(d.jsx)(g.a,{bgcolor:"green",height:3,width:"10%"})]}),Object(d.jsx)(g.a,{mt:.25,bgcolor:"lightGreen",height:3,width:"50%"}),Object(d.jsx)(g.a,{mt:.25,bgcolor:"#ffc107",height:3,width:"60%"}),Object(d.jsx)(g.a,{mt:.25,bgcolor:"orange",height:3,width:"70%"}),Object(d.jsx)(g.a,{mt:.25,bgcolor:"red",height:3,width:"80%"})]}),Object(d.jsxs)(g.a,{mb:.25,pt:.1,height:20,width:"100%",bgcolor:"background.paper",children:[Ie(11,"black",2,.1,.25),Object(d.jsx)(g.a,{my:.1,borderTop:1,height:0,width:"100%"}),Ie(9,"black",1.5,.1,.25),Ie(10,"black",1.2,.1,0)]}),Ie(8,"white",2,.1)]})}var Te=a.a.forwardRef((function(e,t){return Object(d.jsxs)(g.a,Object(w.a)(Object(w.a)({},e),{},{ref:t,mt:3,display:"flex",justifyContent:"center",children:[Object(d.jsx)(g.a,{style:{transform:"rotate(10deg)"},bgcolor:ye,width:5,height:40}),Object(d.jsx)(g.a,{mx:10,bgcolor:ye,width:5,height:40}),Object(d.jsx)(g.a,{style:{transform:"rotate(-10deg)"},bgcolor:ye,width:5,height:40})]}))}));function Re(e){var t=we(e);return Object(d.jsxs)(g.a,{children:[Object(d.jsxs)(ke,{className:t.acBorder,children:[Object(d.jsx)(ge.a,{in:e.status,children:Object(d.jsx)(Se,{mode:e.mode})}),Object(d.jsx)(Ne,{className:t.acLogo}),Object(d.jsx)(Ee,{}),Object(d.jsx)(Le,{status:e.status}),Object(d.jsx)(Be,{className:t.energyLabel,titleLength:6})]}),Object(d.jsx)(ge.a,{in:e.status,timeout:{enter:2500,exit:1500},children:Object(d.jsx)(Te,{})})]})}var Ae=r(148),We=r(146);function Ye(){var e=J((function(e){return e.toast})),t=D(),r=function(e,r){t(_(!1))};return Object(d.jsx)(Ae.a,{open:e.open,autoHideDuration:5e3,onClose:r,children:Object(d.jsx)(We.a,{onClose:r,severity:"error",style:{width:"100%"},children:e.message})})}var Fe=r(155);var De=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(g.a,{children:Object(d.jsxs)(p.a,{variant:"body2",color:"textSecondary",align:"center",children:["\xa9 ",Object(d.jsx)(Fe.a,{color:"inherit",href:xe.repository.url,children:"Yun Air Conditioner"})," - ",Object(d.jsx)(Fe.a,{color:"inherit",href:xe.author.url,children:xe.author.name})," - ",Object(d.jsx)(Fe.a,{color:"inherit",href:"https://shiraha.cn/",children:"Nanami"})]})}),Object(d.jsx)(p.a,{variant:"body2",color:"textSecondary",align:"center",children:" 2019 - "+(new Date).getFullYear()})]})};var Je=function(){var e=J((function(e){return e.ac})),t=D();return Object(n.useEffect)((function(){function e(e){switch(e.key){case z.status:t(re("true"===e.newValue));break;case z.temperature:t(Q(parseInt(e.newValue||"20")));break;case z.mode:t(ee(e.newValue||"cold"))}}return window.addEventListener("storage",e),function(){window.removeEventListener("storage",e)}}),[t]),Object(d.jsx)(u,{children:Object(d.jsxs)(j.a,{maxWidth:"sm",className:e.status?"hot"===e.mode?"hot-color":"cold-color":"",children:[Object(d.jsxs)(g.a,{sx:{pt:4},bgcolor:"transparent",children:[Object(d.jsx)(p.a,{color:"textPrimary",align:"center",variant:"h4",component:"h1",gutterBottom:!0,children:"\u4fbf\u643a\u5c0f\u7a7a\u8c03"}),Object(d.jsx)(y,{}),Object(d.jsx)(Re,{status:e.status,temperature:e.temperature,mode:e.mode}),Object(d.jsx)("div",{className:"text-center",children:Object(d.jsx)(g.a,{sx:{mt:2},children:Object(d.jsx)(m.a,{variant:"outlined",onClick:function(){window.open(xe.homepage+"/rc","_blank","width=300, height=400")},children:"\u72ec\u7acb\u9065\u63a7\u5668"})})}),Object(d.jsx)(he,{}),Object(d.jsx)(De,{})]}),Object(d.jsx)(Ye,{})]})})};function Me(){return Object(d.jsx)(he,{})}var Pe=r(15);var Ue=function(e){var t=Object(n.useState)(e?"loading":"idle"),r=Object(Pe.a)(t,2),a=r[0],o=r[1];return Object(n.useEffect)((function(){if(e){var t=document.querySelector('script[src="'.concat(e,'"]'));if(t)o(t.getAttribute("data-status"));else{(t=document.createElement("script")).src=e,t.async=!0,t.setAttribute("data-status","loading"),document.body.appendChild(t);var r=function(e){var r;null===(r=t)||void 0===r||r.setAttribute("data-status","load"===e.type?"ready":"error")};t.addEventListener("load",r),t.addEventListener("error",r)}var n=function(e){o("load"===e.type?"ready":"error")};return t.addEventListener("load",n),t.addEventListener("error",n),function(){t&&(t.removeEventListener("load",n),t.removeEventListener("error",n))}}o("idle")}),[e]),a};var Ve=function(){Object(n.useEffect)((function(){var e=document.createElement("canvas");e.className="fireworks",document.body.appendChild(e)}),[]);var e=Ue("https://cdn.jsdelivr.net/npm/animejs@latest"),t=Ue("js/firework.js");return Object(n.useEffect)((function(){console.log("Firework.js: ".concat(t,", Anime.js: ").concat(e))}),[t,e]),Object(d.jsx)(u,{children:Object(d.jsx)(j.a,{maxWidth:"sm",children:Object(d.jsx)(b.a,{children:Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{path:"/rc",children:Object(d.jsx)(Me,{})}),Object(d.jsx)(h.a,{path:"/",children:Object(d.jsx)(Je,{})})]})})})})},_e=Object(M.a)({reducer:{ac:ne,toast:q}}),qe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ze(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var r=e.installing;null!=r&&(r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Ge=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,156)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),o(e),c(e)}))},He=r(74);He.a.initialize("UA-121354150-10"),He.a.pageview(window.location.pathname+window.location.search),c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(F.a,{store:_e,children:Object(d.jsx)(Ve,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ac",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ac","/service-worker.js");qe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(r){var n=r.headers.get("content-type");404===r.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ze(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ze(t,e)}))}}(),Ge()},32:function(e){e.exports=JSON.parse('{"name":"air-conditioner","description":"\u4e91\u7a7a\u8c03\uff0c\u4fbf\u643a\u5c0f\u7a7a\u8c03","version":"0.1.2","private":true,"author":{"url":"https://www.yunyoujun.cn","email":"me@yunyoujun.cn","name":"YunYouJun"},"scripts":{"dev":"yarn start","start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"repository":{"type":"git","url":"https://github.com/YunYouJun/air-conditioner"},"homepage":"https://pages.shiraha.cn/ac","dependencies":{"@emotion/react":"^11.4.0","@emotion/styled":"^11.3.0","@material-ui/core":"^5.0.0-alpha.33","@material-ui/icons":"^4.11.2","@reduxjs/toolkit":"^1.5.1","@testing-library/jest-dom":"^5.12.0","@testing-library/react":"^11.2.6","@testing-library/user-event":"^13.1.8","@types/jest":"^26.0.23","@types/node":"^15.0.2","@types/react":"^17.0.5","@types/react-dom":"^17.0.4","@types/react-redux":"^7.1.16","react":"^17.0.2","react-dom":"^17.0.2","react-ga":"^3.3.0","react-redux":"^7.2.4","react-router-dom":"^5.2.0","react-scripts":"^4.0.3","sass":"^1.32.12","typescript":"^4.2.4","web-vitals":"^1.1.2"},"devDependencies":{"@types/react-router-dom":"^5.1.7"}}')}},[[114,1,2]]]);
//# sourceMappingURL=main.3f255133.chunk.js.map