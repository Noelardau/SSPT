import{a as v}from"./Axios-26df80cc.js";import{A as _,r as m,o as F,T,a as i,c as d,b as y,w as V,F as C,e as r,s as I,u as x,m as N,t as c}from"./index-ecabd237.js";import{V as P}from"./VTable-8fba7eab.js";import"./_commonjsHelpers-39b5b250.js";const b=r("h1",{class:"text-h4"},"Classement: ",-1),k=r("thead",null,[r("tr",null,[r("th",{class:"text-left"}," Rang "),N(),r("th",{class:"text-left"}," Pseudo "),r("th",{class:"text-left"}," Note total ")])],-1),D={__name:"Classement",setup(B){let f=_().params.idTournoi;_().path;var n=m([]),h=m([]);let o=()=>{v.get("/api.tournoi/get/"+f).then(e=>{n.value=e.data}).catch(e=>clearInterval(l.value))},s=()=>{v.get("/api.tournoi/participants/"+f).then(e=>{h.value=e.data}).catch(e=>clearInterval(l.value))};s(),o(),F(()=>{s(),o()});var l=m(setInterval(()=>{try{s(),o()}catch{clearInterval(l)}},1e3));function g(e){for(var t=0;t<e.length;t++)for(var a=t+1;a<e.length;a++){var u=e[t];parseFloat(u.noteCummule)>parseFloat(e[a].noteCummule)&&(e[t]=e[a],e[a]=u,u=e[a])}return e}var p=T(()=>{var e=[];return h.value.forEach(t=>{t.noteCummule=0,n.value.performances!=null&&(n.value.performances.filter(a=>a.idPoete==t._id).forEach(a=>{t.noteCummule+=a.noteFinal,t.noteCummule=parseFloat(t.noteCummule)}),t.noteCummule=t.noteCummule.toFixed(1)),e=[...e,t]}),g(e).reverse()});return(e,t)=>(i(),d(C,null,[b,y(P,{density:"compact"},{default:V(()=>[k,r("tbody",null,[(i(!0),d(C,null,I(x(p),a=>(i(),d("tr",{key:a._id},[r("td",null,c(x(p).indexOf(a)+1),1),r("td",null,c(a.pseudoPoete),1),r("td",null,c(a.noteCummule),1)]))),128))])]),_:1})],64))}};export{D as default};