import{a as s,x as C,w as a,b as o,J as x,u as t,g as U,aX as M,m as v,t as F,c as k,f as $,k as E,l as h,d as N,p as z,r as _,e as y,F as w,o as O,A as T,T as X,z as Y,i as B,j as q,aY as G,s as H,n as Q}from"./index-ea3f8d5d.js";import{a as b}from"./index-dad84dab.js";import{V as W,a as Z}from"./VRow-b3e63d02.js";import{V as j}from"./VSnackbar-529eb39e.js";import{V as I,a as ee}from"./VTextField-693a7bfc.js";import"./_commonjsHelpers-39b5b250.js";let te=g=>g.length==0?1:g[g.length-1]._id+1;const ne={key:0,style:{color:"red"}},le={key:0},oe={__name:"Note",props:{note:Object},emits:["annulerNote","retirerPrendre"],setup(g,{emit:V}){const e=g;let u=d=>V("annulerNote",d),i=d=>{V("retirerPrendre",d)};return(d,m)=>(s(),C(N,{"max-width":"200"},{default:a(()=>[o(x,{icon:"mdi-close",color:"red",onClick:m[0]||(m[0]=P=>t(u)(t(e).note._id))}),t(e).penalite?$("",!0):(s(),C(U,{key:0,class:M(t(e).note.retenu?"pris":"nonPris")},{default:a(()=>[v(F(t(e).note.note)+" ",1),t(e).note.penalite?(s(),k("span",ne,"(Penalité)")):$("",!0)]),_:1},8,["class"])),o(E,{center:""},{default:a(()=>[t(e).note.penalite?$("",!0):(s(),k("div",le,[t(e).note.retenu?(s(),C(h,{key:0,color:"red",onClick:m[1]||(m[1]=P=>t(i)(t(e).note._id))},{default:a(()=>[v("Retirer")]),_:1})):(s(),C(h,{key:1,color:"green",onClick:m[2]||(m[2]=P=>t(i)(t(e).note._id))},{default:a(()=>[v("Prendre")]),_:1}))]))]),_:1})]),_:1}))}},ae={class:"text-h4"},re={__name:"Timer",emits:["updateTime"],setup(g,{emit:V}){let e=z({h:0,min:0,sec:0}),u=()=>{d.value=`${e.h<10?"0"+e.h:e.h}:${e.min<10?"0"+e.min:e.min}:${e.sec<10?"0"+e.sec:e.sec}`},i=_(!1),d=_(`${e.h<10?"0"+e.h:e.h}:${e.min<10?"0"+e.min:e.min}:${e.sec<10?"0"+e.sec:e.sec}`),m=null,P=()=>{i.value=!0,m=setInterval(()=>{e.sec++,e.sec>59&&(e.sec=0,e.min++),u(),V("updateTime",d.value)},1e3)},f=()=>{i.value=!1,clearInterval(m)},r=()=>{f(),e.h=0,e.min=0,e.sec=0,u()};return(R,S)=>(s(),k(w,null,[y("div",ae,F(t(d)),1),o(h,{onClick:t(r)},{default:a(()=>[o(x,{icon:"mdi-restart"})]),_:1},8,["onClick"]),t(i)?(s(),C(h,{key:1,onClick:t(f)},{default:a(()=>[o(x,{icon:"mdi-pause"})]),_:1},8,["onClick"])):(s(),C(h,{key:0,onClick:t(P)},{default:a(()=>[o(x,{icon:"mdi-play"})]),_:1},8,["onClick"]))],64))}},se={key:0,align:"center"},ie={class:"text-h4"},ue=y("br",null,null,-1),de={key:0,class:"text-h8 text-red"},pe={key:1,class:"text-h8 text-blue"},ce=y("br",null,null,-1),me=y("br",null,null,-1),fe=y("br",null,null,-1),_e=y("br",null,null,-1),ve={key:1},Pe={__name:"Performance",setup(g){b.defaults.baseURL="http://localhost:5000",O(()=>{b.get("/api.poete/findOne/"+T().params.idPoete).then(n=>{e.value=n.data.body}),b.get("/api.tournoi/get/"+T().params.idTournoi).then(n=>{u.value=n.data,r.value._id=te(u.value.performances)})});let V=_(!0);var e=_({}),u=_({});let i=_(!1);_(0);let d=_(!1),m=()=>d.value=!d.value,P=X(()=>!!d.value),f=_({note:null,retenu:!0,penalite:P}),r=_({notes:[],idPoete:parseInt(T().params.idPoete)});function R(){let n={note:r.value.notes};for(var l=0;l<n.note.length;l++)for(var p=l+1;p<n.note.length;p++){var c=n.note[l];parseFloat(c.note)>parseFloat(n.note[p].note)&&(n.note[l]=n.note[p],n.note[p]=c,c=n.note[p])}return n.note}let S=n=>{r.value.duree=n},A=()=>{if(f.value.note!=null){var n={_id:new Date().getTime()+new Date().getSeconds().toString(),note:f.value.note,retenu:f.value.retenu,penalite:f.value.penalite};n.penalite?r.value.notes=[...r.value.notes,n]:r.value.notes.filter(l=>l.penalite==!1).length<u.value.nbJury&&(r.value.notes=[...r.value.notes,n])}f.value.note=null,console.log(r.value.notes)},L=n=>{r.value.notes=r.value.notes.filter(l=>l._id!=n)},D=n=>{r.value.notes.forEach(l=>{l._id==n&&(l.retenu=!l.retenu)})},J=n=>{let l=0;return n.forEach(p=>{p.retenu&&(p.penalite?l-=parseFloat(p.note):l+=parseFloat(p.note))}),l},K=()=>{r.value.notes.filter(n=>!n.penalite).length==u.value.nbJury?(r.value.noteFinal=J(r.value.notes),console.log(r.value),u.value.performances=[...u.value.performances,r.value],console.log(u.value.performances),b.post("/api.tournoi/update",u.value).then(n=>{i.value=!0,setTimeout(()=>{Q.push({name:"listParticipants",params:{idTournoi:u.value._id}})},1500)})):alert("Metter les notes!!!!")};return(n,l)=>{const p=Y("RouterLink");return s(),k(w,null,[t(V)?(s(),k("div",se,[y("div",null,[o(N,null,{default:a(()=>[y("h1",ie,F(t(e).pseudoPoete),1),o(I,null,{default:a(()=>[o(re,{onUpdateTime:t(S)},null,8,["onUpdateTime"])]),_:1})]),_:1}),ue,o(N,{"max-width":"300"},{default:a(()=>[o(I,{onSubmit:l[1]||(l[1]=q(()=>{},["prevent"]))},{default:a(()=>[o(ee,{label:t(d)?"Pénalité":"Note",type:"number",modelValue:t(f).note,"onUpdate:modelValue":l[0]||(l[0]=c=>t(f).note=c),onKeypress:G(t(A),["enter"])},null,8,["label","modelValue","onKeypress"]),o(h,{onClick:t(A)},{default:a(()=>[v("Ajouter")]),_:1},8,["onClick"])]),_:1}),y("div",{style:{"margin-top":"20px",cursor:"pointer"},onClick:l[2]||(l[2]=c=>t(m)())},[t(d)?(s(),k("span",pe,"Note?")):(s(),k("span",de,"Penalité?"))])]),_:1}),v(),ce,me,o(W,null,{default:a(()=>[(s(!0),k(w,null,H(R(t(r).notes),c=>(s(),C(Z,null,{default:a(()=>[o(oe,{note:c,onAnnulerNote:t(L),onRetirerPrendre:t(D)},null,8,["note","onAnnulerNote","onRetirerPrendre"])]),_:2},1024))),256))]),_:1}),fe,_e,o(h,{color:"primary",onClick:t(K)},{default:a(()=>[v(" Enregistrer")]),_:1},8,["onClick"])])])):(s(),k("div",ve,[o(N,null,{default:a(()=>[o(U,null,{default:a(()=>[v("Performance enregistrée!!!")]),_:1}),o(E,{center:""},{default:a(()=>[o(h,{color:"primary"},{default:a(()=>[o(x,{icon:"mdi-arrow-left"}),o(p,{to:{name:"listParticipants",params:{idTournoi:t(T)().params.idTournoi}}},{default:a(()=>[v(" Revenir à la liste des participants")]),_:1},8,["to"])]),_:1})]),_:1})]),_:1})])),o(j,{modelValue:t(i),"onUpdate:modelValue":l[4]||(l[4]=c=>B(i)?i.value=c:i=c),timeout:1e3},{actions:a(()=>[o(h,{color:"blue",variant:"text",onClick:l[3]||(l[3]=c=>B(i)?i.value=!1:i=!1)},{default:a(()=>[v(" Close ")]),_:1})]),default:a(()=>[v(" Performance enregistrée!!! ")]),_:1},8,["modelValue"])],64)}}};export{Pe as default};
