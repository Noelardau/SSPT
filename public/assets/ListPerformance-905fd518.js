import{a as o}from"./index-dad84dab.js";import{o as f,z as c,r as p,b as n,c as l,d as _,w as h,F as m,f as e,s as x,u as i,t as d}from"./index-c0706ffd.js";import{V as g}from"./VTable-ccfd086a.js";import"./_commonjsHelpers-39b5b250.js";const P=e("h1",{class:"text-h4"},"Liste des performances",-1),b=e("thead",null,[e("tr",null,[e("th",{class:"text-left"}," Pseudo "),e("th",{class:"text-left"}," Durée de la performance "),e("th",{class:"text-left"}," note ")])],-1),F={__name:"ListPerformance",setup(y){o.defaults.baseURL="http://localhost:5000",f(()=>{o.get("/api.tournoi/get/"+c().params.idTournoi).then(a=>{u.value=a.data.performances.reverse()}),o.get("/api.tournoi/participants/"+c().params.idTournoi).then(a=>{s.value=a.data})});let u=p([]),s=p([]);return(a,L)=>(n(),l(m,null,[P,_(g,{density:"compact"},{default:h(()=>[b,e("tbody",null,[(n(!0),l(m,null,x(i(u),t=>(n(),l("tr",{key:t._id},[e("td",null,d(i(s).filter(r=>r._id==t.idPoete)[0]!=null?i(s).filter(r=>r._id==t.idPoete)[0].pseudoPoete:""),1),e("td",null,d(t.duree??"00:03:08"),1),e("td",null,d(t.noteFinal),1)]))),128))])]),_:1})],64))}};export{F as default};
