import{b as s,x as V,w as r,d as o,I as x,u as t,h as S,a_ as K,n as k,t as F,c as y,g as w,l as B,m as g,e as N,p as M,r as m,f,F as A,o as z,z as P,S as J,a as O,k as q,a$ as G,s as H}from"./index-c0706ffd.js";import{a as $}from"./index-dad84dab.js";import{V as Q,a as W}from"./VRow-2ada35af.js";import{V as I,a as X}from"./VTextField-7ec8710a.js";import"./_commonjsHelpers-39b5b250.js";let Y=C=>C.length==0?1:C[C.length-1]._id+1;const Z={key:0,style:{color:"red"}},j={key:0},ee={__name:"Note",props:{note:Object},emits:["annulerNote","retirerPrendre"],setup(C,{emit:v}){const e=C;let i=_=>v("annulerNote",_),d=_=>{v("retirerPrendre",_)};return(_,p)=>(s(),V(N,{"max-width":"200"},{default:r(()=>[o(x,{icon:"mdi-close",color:"red",onClick:p[0]||(p[0]=c=>t(i)(t(e).note._id))}),t(e).penalite?w("",!0):(s(),V(S,{key:0,class:K(t(e).note.retenu?"pris":"nonPris")},{default:r(()=>[k(F(t(e).note.note)+" ",1),t(e).note.penalite?(s(),y("span",Z,"(Penalité)")):w("",!0)]),_:1},8,["class"])),o(B,{center:""},{default:r(()=>[t(e).note.penalite?w("",!0):(s(),y("div",j,[t(e).note.retenu?(s(),V(g,{key:0,color:"red",onClick:p[1]||(p[1]=c=>t(d)(t(e).note._id))},{default:r(()=>[k("Retirer")]),_:1})):(s(),V(g,{key:1,color:"green",onClick:p[2]||(p[2]=c=>t(d)(t(e).note._id))},{default:r(()=>[k("Prendre")]),_:1}))]))]),_:1})]),_:1}))}},te={class:"text-h4"},ne={__name:"Timer",emits:["updateTime"],setup(C,{emit:v}){let e=M({h:0,min:0,sec:0}),i=()=>{_.value=`${e.h<10?"0"+e.h:e.h}:${e.min<10?"0"+e.min:e.min}:${e.sec<10?"0"+e.sec:e.sec}`},d=m(!1),_=m(`${e.h<10?"0"+e.h:e.h}:${e.min<10?"0"+e.min:e.min}:${e.sec<10?"0"+e.sec:e.sec}`),p=null,c=()=>{d.value=!0,p=setInterval(()=>{e.sec++,e.sec>59&&(e.sec=0,e.min++),i(),v("updateTime",_.value)},1e3)},a=()=>{d.value=!1,clearInterval(p)},T=()=>{a(),e.h=0,e.min=0,e.sec=0,i()};return(R,b)=>(s(),y(A,null,[f("div",te,F(t(_)),1),o(g,{onClick:t(T)},{default:r(()=>[o(x,{icon:"mdi-restart"})]),_:1},8,["onClick"]),t(d)?(s(),V(g,{key:1,onClick:t(a)},{default:r(()=>[o(x,{icon:"mdi-pause"})]),_:1},8,["onClick"])):(s(),V(g,{key:0,onClick:t(c)},{default:r(()=>[o(x,{icon:"mdi-play"})]),_:1},8,["onClick"]))],64))}},le={key:0,align:"center"},oe={class:"text-h4"},ae=f("br",null,null,-1),re={key:0,class:"text-h8 text-red"},se={key:1,class:"text-h8 text-blue"},ie=f("br",null,null,-1),ue=f("br",null,null,-1),de=f("br",null,null,-1),ce=f("br",null,null,-1),pe={key:1},ke={__name:"Performance",setup(C){$.defaults.baseURL="http://localhost:5000",z(()=>{$.get("/api.poete/findOne/"+P().params.idPoete).then(n=>{e.value=n.data.body}),$.get("/api.tournoi/get/"+P().params.idTournoi).then(n=>{i.value=n.data,a.value._id=Y(i.value.performances)})});let v=m(!0);var e=m({}),i=m({});m(0);let d=m(!1),_=()=>d.value=!d.value,p=J(()=>!!d.value),c=m({note:null,retenu:!0,penalite:p}),a=m({notes:[],idPoete:parseInt(P().params.idPoete)});function T(){let n={note:a.value.notes};for(var l=0;l<n.note.length;l++)for(var u=l+1;u<n.note.length;u++){var h=n.note[l];parseFloat(h.note)>parseFloat(n.note[u].note)&&(n.note[l]=n.note[u],n.note[u]=h,h=n.note[u])}return n.note}let R=n=>{a.value.duree=n},b=()=>{if(c.value.note!=null){var n={_id:new Date().getTime()+new Date().getSeconds().toString(),note:c.value.note,retenu:c.value.retenu,penalite:c.value.penalite};n.penalite?a.value.notes=[...a.value.notes,n]:a.value.notes.filter(l=>l.penalite==!1).length<i.value.nbJury&&(a.value.notes=[...a.value.notes,n])}c.value.note=null,console.log(a.value.notes)},E=n=>{a.value.notes=a.value.notes.filter(l=>l._id!=n)},L=n=>{a.value.notes.forEach(l=>{l._id==n&&(l.retenu=!l.retenu)})},U=n=>{let l=0;return n.forEach(u=>{u.retenu&&(u.penalite?l-=parseFloat(u.note):l+=parseFloat(u.note))}),l},D=()=>{a.value.notes.filter(n=>!n.penalite).length==i.value.nbJury?(a.value.noteFinal=U(a.value.notes),console.log(a.value),i.value.performances=[...i.value.performances,a.value],console.log(i.value.performances),v.value=!v.value,$.post("/api.tournoi/update",i.value).then(n=>console.log(n.data))):alert("Metter les notes!!!!")};return(n,l)=>{const u=O("RouterLink");return t(v)?(s(),y("div",le,[f("div",null,[o(N,null,{default:r(()=>[f("h1",oe,F(t(e).pseudoPoete),1),o(I,null,{default:r(()=>[o(ne,{onUpdateTime:t(R)},null,8,["onUpdateTime"])]),_:1})]),_:1}),ae,o(N,{"max-width":"300"},{default:r(()=>[o(I,{onSubmit:l[1]||(l[1]=q(()=>{},["prevent"]))},{default:r(()=>[o(X,{label:t(d)?"Pénalité":"Note",type:"number",modelValue:t(c).note,"onUpdate:modelValue":l[0]||(l[0]=h=>t(c).note=h),onKeypress:G(t(b),["enter"])},null,8,["label","modelValue","onKeypress"]),o(g,{onClick:t(b)},{default:r(()=>[k("Ajouter")]),_:1},8,["onClick"])]),_:1}),f("div",{style:{"margin-top":"20px",cursor:"pointer"},onClick:l[2]||(l[2]=h=>t(_)())},[t(d)?(s(),y("span",se,"Note?")):(s(),y("span",re,"Penalité?"))])]),_:1}),k(),ie,ue,o(Q,null,{default:r(()=>[(s(!0),y(A,null,H(T(t(a).notes),h=>(s(),V(W,null,{default:r(()=>[o(ee,{note:h,onAnnulerNote:t(E),onRetirerPrendre:t(L)},null,8,["note","onAnnulerNote","onRetirerPrendre"])]),_:2},1024))),256))]),_:1}),de,ce,o(g,{color:"primary",onClick:t(D)},{default:r(()=>[k(" Enregistrer")]),_:1},8,["onClick"])])])):(s(),y("div",pe,[o(N,null,{default:r(()=>[o(S,null,{default:r(()=>[k("Performance enregistrée!!!")]),_:1}),o(B,{center:""},{default:r(()=>[o(g,{color:"primary"},{default:r(()=>[o(x,{icon:"mdi-arrow-left"}),o(u,{to:{name:"listParticipants",params:{idTournoi:t(P)().params.idTournoi}}},{default:r(()=>[k(" Revenir à la liste des participants")]),_:1},8,["to"])]),_:1})]),_:1})]),_:1})]))}}};export{ke as default};