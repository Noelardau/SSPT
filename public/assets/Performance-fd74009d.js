import{p as K,r as m,a as p,c as k,e as f,t as F,u as a,b as n,w as o,J as x,l as g,x as $,F as R,o as M,A as T,T as B,z as O,d as w,m as h,i as A,j as X,aX as q,s as G,g as H,k as Q,n as W}from"./index-6a119dec.js";import{a as N}from"./Axios-26df80cc.js";import{_ as Y}from"./Note-08ff2dcf.js";import{V as Z,a as j}from"./VRow-268f7530.js";import{V as ee}from"./VSnackbar-51ae4e8d.js";import{V as I,a as te}from"./VTextField-eff10ba3.js";import"./_commonjsHelpers-39b5b250.js";let le=C=>C.length==0?1:C[C.length-1]._id+1;const ne={class:"text-h4"},ae={__name:"Timer",emits:["updateTime"],setup(C,{emit:P}){let t=K({h:0,min:2,sec:55}),u=()=>{V.value=`${t.h<10?"0"+t.h:t.h}:${t.min<10?"0"+t.min:t.min}:${t.sec<10?"0"+t.sec:t.sec}`},s=m(!1),V=m(`${t.h<10?"0"+t.h:t.h}:${t.min<10?"0"+t.min:t.min}:${t.sec<10?"0"+t.sec:t.sec}`),v=null,_=()=>{s.value=!0,v=setInterval(()=>{t.sec++,t.sec>59&&(t.sec=0,t.min++),u(),P("updateTime",V.value)},1e3)},y=()=>{s.value=!1,clearInterval(v)},b=()=>{y(),t.h=0,t.min=0,t.sec=0,u()};return(c,r)=>(p(),k(R,null,[f("div",ne,F(a(V)),1),n(g,{onClick:a(b)},{default:o(()=>[n(x,{icon:"mdi-restart"})]),_:1},8,["onClick"]),a(s)?(p(),$(g,{key:1,onClick:a(y)},{default:o(()=>[n(x,{icon:"mdi-pause"})]),_:1},8,["onClick"])):(p(),$(g,{key:0,onClick:a(_)},{default:o(()=>[n(x,{icon:"mdi-play"})]),_:1},8,["onClick"]))],64))}},oe={key:0,align:"center"},re={class:"text-h4"},se=f("br",null,null,-1),ie={key:0,class:"text-h8 text-red"},ue={key:1,class:"text-h8 text-blue"},de=f("br",null,null,-1),me=f("br",null,null,-1),pe=f("br",null,null,-1),ce=f("br",null,null,-1),fe={key:1},ye={__name:"Performance",setup(C){M(()=>{N.get("/api.poete/findOne/"+T().params.idPoete).then(e=>{t.value=e.data.body}),N.get("/api.tournoi/get/"+T().params.idTournoi).then(e=>{u.value=e.data,r.value._id=le(u.value.performances)})});let P=m(!0);var t=m({}),u=m({});let s=m(!1),V=m("Performance enregistré"),v=e=>{V.value=e,s.value=!s.value},_=m(!1),y=()=>_.value=!_.value,b=B(()=>!!_.value),c=m({note:null,retenu:!0,penalite:b}),r=m({notes:[],idPoete:parseInt(T().params.idPoete),duree:"00:03:02"}),E=B(()=>{let e={note:r.value.notes};for(var l=0;l<e.note.length;l++)for(var i=l+1;i<e.note.length;i++){var d=e.note[l];parseFloat(d.note)>parseFloat(e.note[i].note)&&(e.note[l]=e.note[i],e.note[i]=d,d=e.note[i])}return e.note}),L=e=>{r.value.duree=e},S=()=>{if(c.value.note!=null)if(c.value.note<=10){var e={_id:new Date().getTime()+new Date().getSeconds().toString(),note:c.value.note,retenu:c.value.retenu,penalite:c.value.penalite};e.penalite?r.value.notes=[...r.value.notes,e]:r.value.notes.filter(l=>l.penalite==!1).length<u.value.nbJury?r.value.notes=[...r.value.notes,e]:v("Les notes sont déjà complet!!!")}else v("Note incohérent !!");else v("Veuillez mettre la note!!!");c.value.note=null,console.log(r.value.notes)},U=e=>{r.value.notes=r.value.notes.filter(l=>l._id!=e)},z=e=>{r.value.notes.forEach(l=>{l._id==e&&(l.retenu=!l.retenu)})},D=e=>{let l=0;return e.forEach(i=>{i.retenu&&(i.penalite?l-=parseFloat(i.note):l+=parseFloat(i.note))}),l},J=()=>{r.value.notes.filter(e=>!e.penalite).length==u.value.nbJury?(r.value.noteFinal=D(r.value.notes),console.log(r.value),u.value.performances=[...u.value.performances,r.value],console.log(u.value.performances),N.post("/api.tournoi/update",u.value).then(e=>{v("Performance enregistrée!!"),setTimeout(()=>{W.push({name:"listParticipants",params:{idTournoi:u.value._id}})},1500)})):v("Veuillez mettre toute les notes des jurys!!!")};return(e,l)=>{const i=O("RouterLink");return p(),k(R,null,[a(P)?(p(),k("div",oe,[f("div",null,[n(w,null,{default:o(()=>[f("h1",re,F(a(t).pseudoPoete),1),n(I,null,{default:o(()=>[n(ae,{onUpdateTime:a(L)},null,8,["onUpdateTime"])]),_:1})]),_:1}),se,n(w,{"max-width":"300"},{default:o(()=>[n(I,{onSubmit:l[1]||(l[1]=X(()=>{},["prevent"]))},{default:o(()=>[n(te,{label:a(_)?"Pénalité":"Note",type:"number",modelValue:a(c).note,"onUpdate:modelValue":l[0]||(l[0]=d=>a(c).note=d),onKeypress:q(a(S),["enter"])},null,8,["label","modelValue","onKeypress"]),n(g,{onClick:a(S)},{default:o(()=>[h("Ajouter")]),_:1},8,["onClick"])]),_:1}),f("div",{style:{"margin-top":"20px",cursor:"pointer"},onClick:l[2]||(l[2]=d=>a(y)())},[a(_)?(p(),k("span",ue,"Note?")):(p(),k("span",ie,"Penalité?"))])]),_:1}),h(),de,me,n(Z,null,{default:o(()=>[(p(!0),k(R,null,G(a(E),d=>(p(),$(j,null,{default:o(()=>[n(Y,{note:d,onAnnulerNote:a(U),onRetirerPrendre:a(z)},null,8,["note","onAnnulerNote","onRetirerPrendre"])]),_:2},1024))),256))]),_:1}),pe,ce,n(g,{color:"primary",onClick:a(J)},{default:o(()=>[h(" Enregistrer")]),_:1},8,["onClick"])])])):(p(),k("div",fe,[n(w,null,{default:o(()=>[n(H,null,{default:o(()=>[h("Performance enregistrée!!!")]),_:1}),n(Q,{center:""},{default:o(()=>[n(g,{color:"primary"},{default:o(()=>[n(x,{icon:"mdi-arrow-left"}),n(i,{to:{name:"listParticipants",params:{idTournoi:a(T)().params.idTournoi}}},{default:o(()=>[h(" Revenir à la liste des participants")]),_:1},8,["to"])]),_:1})]),_:1})]),_:1})])),n(ee,{modelValue:a(s),"onUpdate:modelValue":l[4]||(l[4]=d=>A(s)?s.value=d:s=d),timeout:1e3},{actions:o(()=>[n(g,{color:"blue",variant:"text",onClick:l[3]||(l[3]=d=>A(s)?s.value=!1:s=!1)},{default:o(()=>[h(" Close ")]),_:1})]),default:o(()=>[h(F(a(V))+" ",1)]),_:1},8,["modelValue"])],64)}}};export{ye as default};
