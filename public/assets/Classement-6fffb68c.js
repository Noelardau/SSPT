import{a as i}from"./index-dad84dab.js";import{A as _,r as m,o as T,T as y,a as d,c,b as F,w as V,F as g,e as r,s as b,u as x,m as I,t as f}from"./index-b7628277.js";import{V as N}from"./VTable-08b7917b.js";import"./_commonjsHelpers-39b5b250.js";const P=r("h1",{class:"text-h4"},"Classement: ",-1),k=r("thead",null,[r("tr",null,[r("th",{class:"text-left"}," Rang "),I(),r("th",{class:"text-left"}," Pseudo "),r("th",{class:"text-left"}," Note total ")])],-1),A={__name:"Classement",setup(B){i.defaults.baseURL="http://192.168.43.143:5000";let p=_().params.idTournoi;_().path;var n=m([]),h=m([]);let s=()=>{i.get("/api.tournoi/get/"+p).then(e=>{n.value=e.data}).catch(e=>clearInterval(l.value))},o=()=>{i.get("/api.tournoi/participants/"+p).then(e=>{h.value=e.data}).catch(e=>clearInterval(l.value))};o(),s(),T(()=>{o(),s()});var l=m(setInterval(()=>{try{o(),s()}catch{clearInterval(l)}},1e3));function C(e){for(var a=0;a<e.length;a++)for(var t=a+1;t<e.length;t++){var u=e[a];parseFloat(u.noteCummule)>parseFloat(e[t].noteCummule)&&(e[a]=e[t],e[t]=u,u=e[t])}return e}var v=y(()=>{var e=[];return h.value.forEach(a=>{a.noteCummule=0,n.value.performances!=null&&n.value.performances.filter(t=>t.idPoete==a._id).forEach(t=>{a.noteCummule+=t.noteFinal}),e=[...e,a]}),C(e).reverse()});return(e,a)=>(d(),c(g,null,[P,F(N,{density:"compact"},{default:V(()=>[k,r("tbody",null,[(d(!0),c(g,null,b(x(v),t=>(d(),c("tr",{key:t._id},[r("td",null,f(x(v).indexOf(t)+1),1),r("td",null,f(t.pseudoPoete),1),r("td",null,f(t.noteCummule),1)]))),128))])]),_:1})],64))}};export{A as default};