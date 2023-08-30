import{o as Q,r as p,p as W,z as X,a as g,c as A,b as e,u as t,l as r,w as u,i as T,V as y,e as M,F as Y,s as Z,d as C,g as _,m as n,h as J,j as L,k,v as U,t as w,x as $}from"./index-6a119dec.js";import{a as c}from"./Axios-26df80cc.js";import{V as h,a as ee}from"./VRow-268f7530.js";import{V as le}from"./VSnackbar-51ae4e8d.js";import{V as B,a as V}from"./VTextField-eff10ba3.js";import{V as E}from"./VSelect-420bbce7.js";import"./_commonjsHelpers-39b5b250.js";const te={id:"home"},oe=M("div",{class:"text-h4"},"Les tournois ",-1),ue=M("br",null,null,-1),Ve={__name:"TournoiView",setup(ae){Q(()=>{b()});let b=()=>c.get("/api.tournoi/all").then(a=>N.value=a.data.reverse()),N=p([]),x=0,i=p({}),d=W({nomTournoi:"",description:"",lieuTournoi:"",dateTournoi:"",nbJury:""}),S=p("test"),D=a=>{S.value=a,s.value=!s.value};p(!0);let m=p(!1),f=p(!1),F=()=>m.value=!0,R=()=>{console.log(d),c.post("/api.tournoi/create",d).then(a=>{b(),m.value=!1,D("Tournoi crée!!")})},j=()=>{m.value=!m.value},q=a=>{x=a,console.log(x),f.value=!0},z=()=>{c.get("/api.tournoi/delete/"+x).then(a=>{console.log(a),b(),f.value=!1,D("suppression effectuée!!")})},O=()=>f.value=!1,v=p(!1),P=a=>{console.log(a.nbJury),i.value.nomTournoi=a.nomTournoi??"",i.value.lieuTournoi=a.lieuTournoi??"",i.value.dateTournoi=a.dateTournoi??"",i.value.description=a.description??"",i.value.nbJury=a.nbJury??"",i.value._id=a._id??"",v.value=!0},G=()=>v.value=!1,H=()=>{c.post("/api.tournoi/update/",i.value).then(a=>{v.value=!1,b()})},s=p(!1);return(a,o)=>{const I=X("RouterLink");return g(),A("div",te,[oe,e(r,{icon:"mdi-plus",color:"blue",onClick:t(F)},null,8,["onClick"]),e(h,null,{default:u(()=>[(g(!0),A(Y,null,Z(t(N),l=>(g(),$(ee,null,{default:u(()=>[e(C,{title:l.nomTournoi},{text:u(()=>[n(" Date : "+w(l.dateTournoi)+" ",1),ue,n(" Lieu : "+w(l.lieuTournoi),1)]),default:u(()=>[e(k,null,{default:u(()=>[e(r,{icon:"mdi-pencil",color:"blue",onClick:K=>t(P)(l)},null,8,["onClick"]),e(r,{icon:"mdi-delete",color:"red",onClick:K=>t(q)(l._id)},null,8,["onClick"]),e(r,null,{default:u(()=>[e(I,{to:"/tournoi/"+l._id+"/listParticipants/"+l._id},{default:u(()=>[n("Voir")]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024))),256))]),_:1}),e(y,{modelValue:t(m),"onUpdate:modelValue":o[6]||(o[6]=l=>T(m)?m.value=l:m=l),persistent:!0,"max-width":"500"},{default:u(()=>[e(C,null,{default:u(()=>[e(_,{class:"text-h5"},{default:u(()=>[n(" Nouveau tournoi ")]),_:1}),e(J,null,{default:u(()=>[e(B,{onSubmit:o[5]||(o[5]=L(()=>{},["prevent"]))},{default:u(()=>[e(V,{label:"Nom",modelValue:t(d).nomTournoi,"onUpdate:modelValue":o[0]||(o[0]=l=>t(d).nomTournoi=l),autofocus:!0},null,8,["modelValue"]),e(V,{label:"description",modelValue:t(d).description,"onUpdate:modelValue":o[1]||(o[1]=l=>t(d).description=l)},null,8,["modelValue"]),e(V,{label:"Lieu",modelValue:t(d).lieuTournoi,"onUpdate:modelValue":o[2]||(o[2]=l=>t(d).lieuTournoi=l)},null,8,["modelValue"]),e(V,{type:"date",label:"Date",modelValue:t(d).dateTournoi,"onUpdate:modelValue":o[3]||(o[3]=l=>t(d).dateTournoi=l)},null,8,["modelValue"]),e(E,{label:"Nombre de jury",modelValue:t(d).nbJury,"onUpdate:modelValue":o[4]||(o[4]=l=>t(d).nbJury=l),items:[{title:"Trois",value:3},{title:"Cinq",value:5},{title:"Sept",value:7},{title:"Neuf",value:9}],"item-title":"title","item-value":"value"},null,8,["modelValue"])]),_:1})]),_:1}),e(k,null,{default:u(()=>[e(U),e(r,{type:"submit",class:"mt-2",onClick:t(R)},{default:u(()=>[n("Enregistrer")]),_:1},8,["onClick"]),e(r,{type:"submit",class:"mt-2",onClick:t(j)},{default:u(()=>[n("Annuler")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(y,{modelValue:t(v),"onUpdate:modelValue":o[13]||(o[13]=l=>T(v)?v.value=l:v=l),persistent:!0,"max-width":"500"},{default:u(()=>[e(C,null,{default:u(()=>[e(_,{class:"text-h5"},{default:u(()=>[n(" Modifier tournoi ")]),_:1}),e(J,null,{default:u(()=>[e(B,{onSubmit:o[12]||(o[12]=L(()=>{},["prevent"]))},{default:u(()=>[e(V,{label:"Nom",modelValue:t(i).nomTournoi,"onUpdate:modelValue":o[7]||(o[7]=l=>t(i).nomTournoi=l),autofocus:!0},null,8,["modelValue"]),e(V,{label:"description",modelValue:t(i).description,"onUpdate:modelValue":o[8]||(o[8]=l=>t(i).description=l),autofocus:!0},null,8,["modelValue"]),e(V,{label:"Lieu",modelValue:t(i).lieuTournoi,"onUpdate:modelValue":o[9]||(o[9]=l=>t(i).lieuTournoi=l)},null,8,["modelValue"]),e(V,{type:"date",label:"Date",modelValue:t(i).dateTournoi,"onUpdate:modelValue":o[10]||(o[10]=l=>t(i).dateTournoi=l)},null,8,["modelValue"]),e(E,{modelValue:t(i).nbJury,"onUpdate:modelValue":o[11]||(o[11]=l=>t(i).nbJury=l),items:[{title:"Trois",value:3},{title:"Cinq",value:5},{title:"Sept",value:7},{title:"Neuf",value:9}],"item-title":"title","item-value":"value"},null,8,["modelValue"])]),_:1})]),_:1}),e(k,null,{default:u(()=>[e(U),e(r,{type:"submit",class:"mt-2",onClick:t(H)},{default:u(()=>[n("Enregistrer")]),_:1},8,["onClick"]),e(r,{type:"submit",class:"mt-2",onClick:t(G)},{default:u(()=>[n("Annuler")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(y,{modelValue:t(f),"onUpdate:modelValue":o[14]||(o[14]=l=>T(f)?f.value=l:f=l),persistent:!0,"max-width":"500"},{default:u(()=>[e(C,null,{default:u(()=>[e(_,{class:"text-h5"},{default:u(()=>[n(" Supprimer ce tournoi de la liste ? ")]),_:1}),e(k,null,{default:u(()=>[e(U),e(r,{color:"primary",variant:"text",class:"mt-2",onClick:t(O)},{default:u(()=>[n("Non")]),_:1},8,["onClick"]),e(r,{color:"red",variant:"text",class:"mt-2",onClick:t(z)},{default:u(()=>[n("Oui, supprimer")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(le,{modelValue:t(s),"onUpdate:modelValue":o[16]||(o[16]=l=>T(s)?s.value=l:s=l),timeout:1e3},{actions:u(()=>[e(r,{color:"blue",variant:"text",onClick:o[15]||(o[15]=l=>T(s)?s.value=!1:s=!1)},{default:u(()=>[n(" Close ")]),_:1})]),default:u(()=>[n(w(t(S))+" ",1)]),_:1},8,["modelValue"])])}}};export{Ve as default};
