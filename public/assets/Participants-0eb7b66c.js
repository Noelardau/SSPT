import{o as $,z as w,r,a as V,c as C,b as e,u as i,h as u,w as a,l as y,i as k,m as S,F as b,g as G,n as B,V as L,p as T,j as s,s as F,t as R,q as H,f as J,v as K,e as U,x as D}from"./index-af6e56f7.js";import{a as _}from"./index-dad84dab.js";import{V as Q}from"./VSnackbar-1bda3ed8.js";import{V as W}from"./VTextField-87230c4f.js";import{V as X}from"./VSelect-7538b4b1.js";import"./_commonjsHelpers-39b5b250.js";const Y=G("h1",{class:"text-h4"},"Liste des participants ",-1),re={__name:"Participants",setup(Z){_.defaults.baseURL="http://localhost:5000/",$(()=>{_.get("/api.tournoi/participants/"+w().params.idTournoi).then(t=>{m.value=t.data}),_.get("/api.tournoi/get/"+w().params.idTournoi).then(t=>{n.value=t.data,console.log(n.value)}),_.get("/api.poete/findAll/").then(t=>{x.value=t.data.body})});let n=r(),m=r([]),d=r([]),g=r(0),x=r([]),p=r(!1),h=r("Participants enregistrés!!!"),A=t=>{h.value=t,p.value=!p.value};r([{state:"madagasikara",abbr:"mada"},{state:"France",abbr:"frs"}]);let c=r({pseudoPoete:"Poète",_id:0}),v=r(!1),f=r(!1),M=()=>{v.value=!0},N=()=>{m.value=[...d.value,...m.value],n.value.participants=[...d.value.map(t=>t._id),...n.value.participants],console.log(n.value),_.post("/api.tournoi/update/",n.value).then(t=>{j(),A("Participants enregistrés!!")})},E=t=>{g.value=t,f.value=!0},q=()=>{m.value=m.value.filter(t=>t._id!=g.value),n.value.participants=n.value.participants.filter(t=>t!=g.value),_.post("/api.tournoi/update/",n.value).then(t=>{P(),A("Le poète a été retiré du tournoi!!")})},P=()=>{f.value=!1},j=()=>{v.value=!1,d.value=[]},z=()=>{d.value.filter(t=>t._id==c.value._id).length==0&&m.value.filter(t=>t._id==c.value._id).length==0?(d.value=[...d.value,c.value],c.value={pseudoPoete:"poete",_id:0}):alert("participant déjà ajouté")},I=t=>{d.value=d.value.filter(o=>o._id!=t)};return(t,o)=>(V(),C(b,null,[Y,e(u,{icon:"mdi-plus",color:"blue",onClick:i(M)},null,8,["onClick"]),e(y,{lines:"one"},{default:a(()=>[(V(!0),C(b,null,B(i(m),l=>(V(),U(D,{key:l._id,title:`${l.pseudoPoete}`,subtitle:"..."},{append:a(()=>[e(u,{color:"green-lighten-1",variant:"text",to:{name:"performance",params:{idPoete:l._id}}},{default:a(()=>[s(" créer performance ")]),_:2},1032,["to"]),e(u,{color:"red-lighten-1",icon:"mdi-delete",variant:"text",onClick:O=>i(E)(l._id)},null,8,["onClick"])]),_:2},1032,["title"]))),128))]),_:1}),e(S,{modelValue:i(f),"onUpdate:modelValue":o[0]||(o[0]=l=>k(f)?f.value=l:f=l),persistent:!0,"max-width":"500"},{default:a(()=>[e(L,null,{default:a(()=>[e(T,{class:"text-h5"},{default:a(()=>[s(" Supprimer ce poète de la liste ? ")]),_:1}),e(F,null,{default:a(()=>[e(R),e(u,{color:"primary",variant:"text",class:"mt-2",onClick:i(P)},{default:a(()=>[s("Non")]),_:1},8,["onClick"]),e(u,{color:"red",variant:"text",class:"mt-2",onClick:i(q)},{default:a(()=>[s("Oui, supprimer")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(S,{modelValue:i(v),"onUpdate:modelValue":o[3]||(o[3]=l=>k(v)?v.value=l:v=l),persistent:!0,"max-width":"500"},{default:a(()=>[e(L,null,{default:a(()=>[e(T,{class:"text-h5"},{default:a(()=>[s(" Ajouter des participants ")]),_:1}),e(H,null,{default:a(()=>[e(W,{onSubmit:o[2]||(o[2]=J(()=>{},["prevent"]))},{default:a(()=>[e(X,{modelValue:i(c),"onUpdate:modelValue":o[1]||(o[1]=l=>k(c)?c.value=l:c=l),items:i(x),"item-title":"pseudoPoete","item-value":"_id",label:"Select","persistent-hint":"","return-object":"","single-line":""},null,8,["modelValue","items"]),e(u,{color:"primary",onClick:i(z)},{default:a(()=>[s("Ajouter")]),_:1},8,["onClick"])]),_:1}),e(y,{lines:"one"},{default:a(()=>[(V(!0),C(b,null,B(i(d),l=>(V(),U(D,{key:l._id,title:`${l.pseudoPoete}`,subtitle:"..."},{append:a(()=>[e(u,{color:"red-lighten-1",icon:"mdi-delete",variant:"text",onClick:O=>i(I)(l._id)},null,8,["onClick"])]),_:2},1032,["title"]))),128))]),_:1})]),_:1}),e(F,null,{default:a(()=>[e(R),e(u,{type:"submit",class:"mt-2",onClick:i(N)},{default:a(()=>[s("Enregistrer")]),_:1},8,["onClick"]),e(u,{type:"submit",class:"mt-2",onClick:i(j)},{default:a(()=>[s("Annuler")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(Q,{modelValue:i(p),"onUpdate:modelValue":o[5]||(o[5]=l=>k(p)?p.value=l:p=l),timeout:1e3},{actions:a(()=>[e(u,{color:"blue",variant:"text",onClick:o[4]||(o[4]=l=>k(p)?p.value=!1:p=!1)},{default:a(()=>[s(" Close ")]),_:1})]),default:a(()=>[s(K(i(h))+" ",1)]),_:1},8,["modelValue"])],64))}};export{re as default};
