import{a as d}from"./Axios-26df80cc.js";import{o as p,A as u,r as _,a as n,c as r,b as f,w as h,F as m,e as t,s as x,u as l,t as i}from"./index-c03ad22d.js";import{_ as g}from"./Notes-b06c3fe7.js";import{V as P}from"./VTable-b8da74c1.js";import"./_commonjsHelpers-39b5b250.js";const y=t("h1",{class:"text-h4"},"Liste des performances",-1),V=t("thead",null,[t("tr",null,[t("th",{class:"text-left"}," Pseudo "),t("th",{class:"text-left"}," Durée de la performance "),t("th",{class:"text-left"}," note et penalité "),t("th",{class:"text-left"}," note final ")])],-1),b={class:"text-left"},k={class:"text-left"},v={class:"text-left"},B={class:"text-left"},C={__name:"ListPerformance",setup(F){p(()=>{d.get("/api.tournoi/get/"+u().params.idTournoi).then(s=>{c.value=s.data.performances.reverse()}),d.get("/api.tournoi/participants/"+u().params.idTournoi).then(s=>{a.value=s.data})});let c=_([]),a=_([]);return(s,L)=>(n(),r(m,null,[y,f(P,{density:"compact"},{default:h(()=>[V,t("tbody",null,[(n(!0),r(m,null,x(l(c),e=>(n(),r("tr",{key:e._id},[t("td",b,i(l(a).filter(o=>o._id==e.idPoete)[0]!=null?l(a).filter(o=>o._id==e.idPoete)[0].pseudoPoete:""),1),t("td",k,i(e.duree??"00:03:08"),1),t("td",v,[f(g,{notes:e.notes},null,8,["notes"])]),t("td",B,i(e.noteFinal),1)]))),128))])]),_:1})],64))}};export{C as default};
