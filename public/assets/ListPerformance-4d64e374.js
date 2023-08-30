import{o as B,A as k,r as u,a as d,c as f,b as a,w as s,u as o,i as E,V as R,F as V,e as l,s as y,d as U,g as D,m as h,h as A,j as K,aX as L,l as P,k as M,v as N,t as x,x as S}from"./index-ecabd237.js";import{a as v}from"./Axios-26df80cc.js";import{_ as j}from"./Notes-cd9113db.js";import{_ as X}from"./Note-da1fb3c3.js";import{V as $}from"./VTable-8fba7eab.js";import{V as q,a as g}from"./VTextField-fffa121a.js";import{V as z,a as G}from"./VRow-221376ff.js";import"./_commonjsHelpers-39b5b250.js";const H=l("h1",{class:"text-h4"},"Liste des performances",-1),I=l("thead",null,[l("tr",null,[l("th",{class:"text-left"}," Pseudo "),l("th",{class:"text-left"}," Durée de la performance "),l("th",{class:"text-left"}," note et penalité "),l("th",{class:"text-left"}," note final "),l("th",{class:"text-left"}," __ ")])],-1),J={class:"text-left"},O={class:"text-left"},Q={class:"text-left"},W={class:"text-left"},Y=l("td",{class:"text-center"},null,-1),Z=l("td",null,null,-1),ee={align:"center"},de={__name:"ListPerformance",setup(te){B(()=>{v.get("/api.tournoi/get/"+k().params.idTournoi).then(n=>{m.value=n.data,C.value=m.value.performances.reverse()}),v.get("/api.tournoi/participants/"+k().params.idTournoi).then(n=>{c.value=n.data})});let m=u({performances:[]}),C=u([]),c=u([]),i=u(!1),r=u({}),F=n=>{let t=0;return n.forEach(e=>{e.retenu&&(e.penalite?t-=parseFloat(e.note):t+=parseFloat(e.note))}),t},T=()=>{r.value.noteFinal=F(r.value.notes),v.post("/api.tournoi/update",m.value).then(n=>{i.value=!1})},w=n=>{r.value.notes.forEach(t=>{t._id==n&&(t.retenu=!t.retenu)})},p=u({note:null,retenu:!0,penalite:!0}),b=()=>{let n={note:p.value.note,retenu:!0,penalite:!0};r.value.notes=[n,...r.value.notes],p.value.note=null};return(n,t)=>(d(),f(V,null,[H,a($,{density:"compact"},{default:s(()=>[I,l("tbody",null,[(d(!0),f(V,null,y(o(C),e=>(d(),f("tr",{key:e._id},[l("td",J,x(o(c).filter(_=>_._id==e.idPoete)[0]!=null?o(c).filter(_=>_._id==e.idPoete)[0].pseudoPoete:""),1),l("td",O,x(e.duree??"00:03:08"),1),l("td",Q,[a(j,{notes:e.notes},null,8,["notes"])]),l("td",W,x(e.noteFinal),1),Y,Z]))),128))])]),_:1}),a(R,{modelValue:o(i),"onUpdate:modelValue":t[3]||(t[3]=e=>E(i)?i.value=e:i=e),persistent:!0,"max-width":"500"},{default:s(()=>[a(U,null,{default:s(()=>[a(D,{class:"text-h5"},{default:s(()=>[h(" Modifier la performance ")]),_:1}),a(A,null,{default:s(()=>[a(q,{onSubmit:t[2]||(t[2]=K(()=>{},["prevent"]))},{default:s(()=>[a(g,{modelValue:o(r).duree,"onUpdate:modelValue":t[0]||(t[0]=e=>o(r).duree=e),label:"Durée"},null,8,["modelValue"]),a(g,{type:"number",modelValue:o(p).note,"onUpdate:modelValue":t[1]||(t[1]=e=>o(p).note=e),onKeyup:L(o(b),["enter"]),label:"penalité"},null,8,["modelValue","onKeyup"]),l("p",ee,[a(P,{color:"red",onClick:o(b)},{default:s(()=>[h("Ajouter")]),_:1},8,["onClick"])])]),_:1}),a(z,null,{default:s(()=>[(d(!0),f(V,null,y(o(r).notes,e=>(d(),S(G,null,{default:s(()=>[a(X,{note:e,annulable:!1,onRetirerPrendre:o(w)},null,8,["note","onRetirerPrendre"])]),_:2},1024))),256))]),_:1})]),_:1}),a(M,null,{default:s(()=>[a(N),a(P,{type:"submit",block:"",class:"mt-2",color:"primary",onClick:o(T)},{default:s(()=>[h("Enregistrer")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}};export{de as default};
