import{a as n}from"./index-dad84dab.js";import{o as p,A as u,r as _,a as l,c as r,b as f,w as h,F as m,e as t,s as x,u as i,t as c}from"./index-ea3f8d5d.js";import{_ as g}from"./Notes-6d8c4b73.js";import{V as P}from"./VTable-56537da8.js";import"./_commonjsHelpers-39b5b250.js";const b=t("h1",{class:"text-h4"},"Liste des performances",-1),y=t("thead",null,[t("tr",null,[t("th",{class:"text-left"}," Pseudo "),t("th",{class:"text-left"}," Durée de la performance "),t("th",{class:"text-left"}," note et penalité "),t("th",{class:"text-left"}," note final ")])],-1),L={class:"text-left"},V={class:"text-left"},k={class:"text-left"},v={class:"text-left"},A={__name:"ListPerformance",setup(B){n.defaults.baseURL="http://localhost:5000",p(()=>{n.get("/api.tournoi/get/"+u().params.idTournoi).then(s=>{d.value=s.data.performances.reverse()}),n.get("/api.tournoi/participants/"+u().params.idTournoi).then(s=>{a.value=s.data})});let d=_([]),a=_([]);return(s,F)=>(l(),r(m,null,[b,f(P,{density:"compact"},{default:h(()=>[y,t("tbody",null,[(l(!0),r(m,null,x(i(d),e=>(l(),r("tr",{key:e._id},[t("td",L,c(i(a).filter(o=>o._id==e.idPoete)[0]!=null?i(a).filter(o=>o._id==e.idPoete)[0].pseudoPoete:""),1),t("td",V,c(e.duree??"00:03:08"),1),t("td",k,[f(g,{notes:e.notes},null,8,["notes"])]),t("td",v,c(e.noteFinal),1)]))),128))])]),_:1})],64))}};export{A as default};
