import{a as _}from"./Axios-26df80cc.js";import{o as y,A as k,r as i,a as c,c as p,b as l,w as r,u as s,i as T,V as B,F as C,e,s as F,d as w,g as N,m as h,k as b,v as L,l as x,t as v,x as S,f as A}from"./index-509092f4.js";import{_ as R}from"./Notes-6276abcb.js";/* empty css                                             */import{V as E}from"./VTable-c21e7382.js";import"./_commonjsHelpers-39b5b250.js";const M=e("h1",{class:"text-h4"},"Liste des performances",-1),O=e("thead",null,[e("tr",null,[e("th",{class:"text-left"}," Pseudo "),e("th",{class:"text-left"}," Durée de la performance "),e("th",{class:"text-left"}," note et penalité "),e("th",{class:"text-left"}," note final "),e("th",{class:"text-left"}," __ ")])],-1),U={class:"text-left"},$={class:"text-left"},j={class:"text-left"},q={class:"text-left"},z=e("td",{class:"text-center"},null,-1),X={__name:"ListPerformance",setup(G){y(()=>{_.get("/api.tournoi/get/"+k().params.idTournoi).then(t=>{n.value=t.data,d.value=n.value.performances.reverse()}),_.get("/api.tournoi/participants/"+k().params.idTournoi).then(t=>{m.value=t.data})});let n=i({performances:[]}),d=i([]),m=i([]),o=i(!1);i({});let f=i(),g=()=>{o.value=!1,n.value.performances=n.value.performances.filter(t=>t._id!=f.value),d.value=n.value.performances.filter(t=>t._id!=f.value),_.post("/api.tournoi/update",n.value).then(t=>{console.log(t)})},D=()=>o.value=!1,P=t=>{f.value=t._id,o.value=!0};return(t,V)=>(c(),p(C,null,[M,l(E,{density:"compact"},{default:r(()=>[O,e("tbody",null,[(c(!0),p(C,null,F(s(d),a=>(c(),p("tr",{key:a._id},[e("td",U,v(s(m).filter(u=>u._id==a.idPoete)[0]!=null?s(m).filter(u=>u._id==a.idPoete)[0].pseudoPoete:""),1),e("td",$,v(a.duree??"00:03:08"),1),e("td",j,[l(R,{notes:a.notes},null,8,["notes"])]),e("td",q,v(a.noteFinal.toFixed(1)),1),z,e("td",null,[s(d).indexOf(a)==0?(c(),S(x,{key:0,icon:"mdi-delete",color:"red",onClick:u=>s(P)(a)},null,8,["onClick"])):A("",!0)])]))),128))])]),_:1}),l(B,{modelValue:s(o),"onUpdate:modelValue":V[0]||(V[0]=a=>T(o)?o.value=a:o=a),persistent:!0,"max-width":"500"},{default:r(()=>[l(w,null,{default:r(()=>[l(N,{class:"text-h5"},{default:r(()=>[h(" Supprimer la performance? ")]),_:1}),l(b,null,{default:r(()=>[l(L),l(x,{class:"mt-2",color:"red",onClick:s(g)},{default:r(()=>[h("oui, supprimer")]),_:1},8,["onClick"]),l(x,{class:"mt-2",color:"primary",onClick:s(D)},{default:r(()=>[h("non")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}};export{X as default};