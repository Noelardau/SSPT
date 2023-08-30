import{o as z,A as j,r,a as V,c as C,b as e,u as i,l as u,w as a,q as w,i as k,V as S,F as x,e as G,s as B,d as L,g as T,m as s,k as F,v as R,h as H,j as J,t as K,x as U,y as D}from"./index-46ed4091.js";import{a as _}from"./index-dad84dab.js";import{V as Q}from"./VSnackbar-90b8479b.js";import{V as W}from"./VTextField-c117785d.js";import{V as X}from"./VSelect-a51a3831.js";import"./_commonjsHelpers-39b5b250.js";const Y=G("h1",{class:"text-h4"},"Liste des participants ",-1),re={__name:"Participants",setup(Z){_.defaults.baseURL="http://192.168.43.143:5000/",z(()=>{_.get("/api.tournoi/participants/"+j().params.idTournoi).then(t=>{c.value=t.data}),_.get("/api.tournoi/get/"+j().params.idTournoi).then(t=>{n.value=t.data,console.log(n.value)}),_.get("/api.poete/findAll/").then(t=>{b.value=t.data.body})});let n=r(),c=r([]),d=r([]),g=r(0),b=r([]),p=r(!1),h=r("Participants enregistrés!!!"),A=t=>{h.value=t,p.value=!p.value};r([{state:"madagasikara",abbr:"mada"},{state:"France",abbr:"frs"}]);let m=r({pseudoPoete:"Poète",_id:0}),v=r(!1),f=r(!1),M=()=>{v.value=!0},N=()=>{c.value=[...d.value,...c.value],n.value.participants=[...d.value.map(t=>t._id),...n.value.participants],console.log(n.value),_.post("/api.tournoi/update/",n.value).then(t=>{y(),A("Participants enregistrés!!")})},E=t=>{g.value=t,f.value=!0},q=()=>{c.value=c.value.filter(t=>t._id!=g.value),n.value.participants=n.value.participants.filter(t=>t!=g.value),_.post("/api.tournoi/update/",n.value).then(t=>{P(),A("Le poète a été retiré du tournoi!!")})},P=()=>{f.value=!1},y=()=>{v.value=!1,d.value=[]},I=()=>{d.value.filter(t=>t._id==m.value._id).length==0&&c.value.filter(t=>t._id==m.value._id).length==0?(d.value=[...d.value,m.value],m.value={pseudoPoete:"poete",_id:0}):alert("participant déjà ajouté")},O=t=>{d.value=d.value.filter(o=>o._id!=t)};return(t,o)=>(V(),C(x,null,[Y,e(u,{icon:"mdi-plus",color:"blue",onClick:i(M)},null,8,["onClick"]),e(w,{lines:"one"},{default:a(()=>[(V(!0),C(x,null,B(i(c),l=>(V(),U(D,{key:l._id,title:`${l.pseudoPoete}`,subtitle:"..."},{append:a(()=>[e(u,{color:"green-lighten-1",variant:"text",to:{name:"performance",params:{idPoete:l._id}}},{default:a(()=>[s(" créer performance ")]),_:2},1032,["to"]),e(u,{color:"green-lighten-1",variant:"text",to:{name:"statPerso",params:{idPoete:l._id}}},{default:a(()=>[s(" les stats du poète ")]),_:2},1032,["to"]),e(u,{color:"red-lighten-1",icon:"mdi-delete",variant:"text",onClick:$=>i(E)(l._id)},null,8,["onClick"])]),_:2},1032,["title"]))),128))]),_:1}),e(S,{modelValue:i(f),"onUpdate:modelValue":o[0]||(o[0]=l=>k(f)?f.value=l:f=l),persistent:!0,"max-width":"500"},{default:a(()=>[e(L,null,{default:a(()=>[e(T,{class:"text-h5"},{default:a(()=>[s(" Supprimer ce poète de la liste ? ")]),_:1}),e(F,null,{default:a(()=>[e(R),e(u,{color:"primary",variant:"text",class:"mt-2",onClick:i(P)},{default:a(()=>[s("Non")]),_:1},8,["onClick"]),e(u,{color:"red",variant:"text",class:"mt-2",onClick:i(q)},{default:a(()=>[s("Oui, supprimer")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(S,{modelValue:i(v),"onUpdate:modelValue":o[3]||(o[3]=l=>k(v)?v.value=l:v=l),persistent:!0,"max-width":"500"},{default:a(()=>[e(L,null,{default:a(()=>[e(T,{class:"text-h5"},{default:a(()=>[s(" Ajouter des participants ")]),_:1}),e(H,null,{default:a(()=>[e(W,{onSubmit:o[2]||(o[2]=J(()=>{},["prevent"]))},{default:a(()=>[e(X,{modelValue:i(m),"onUpdate:modelValue":o[1]||(o[1]=l=>k(m)?m.value=l:m=l),items:i(b),"item-title":"pseudoPoete","item-value":"_id",label:"Select","persistent-hint":"","return-object":"","single-line":""},null,8,["modelValue","items"]),e(u,{color:"primary",onClick:i(I)},{default:a(()=>[s("Ajouter")]),_:1},8,["onClick"])]),_:1}),e(w,{lines:"one"},{default:a(()=>[(V(!0),C(x,null,B(i(d),l=>(V(),U(D,{key:l._id,title:`${l.pseudoPoete}`,subtitle:"..."},{append:a(()=>[e(u,{color:"red-lighten-1",icon:"mdi-delete",variant:"text",onClick:$=>i(O)(l._id)},null,8,["onClick"])]),_:2},1032,["title"]))),128))]),_:1})]),_:1}),e(F,null,{default:a(()=>[e(R),e(u,{type:"submit",class:"mt-2",onClick:i(N)},{default:a(()=>[s("Enregistrer")]),_:1},8,["onClick"]),e(u,{type:"submit",class:"mt-2",onClick:i(y)},{default:a(()=>[s("Annuler")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(Q,{modelValue:i(p),"onUpdate:modelValue":o[5]||(o[5]=l=>k(p)?p.value=l:p=l),timeout:1e3},{actions:a(()=>[e(u,{color:"blue",variant:"text",onClick:o[4]||(o[4]=l=>k(p)?p.value=!1:p=!1)},{default:a(()=>[s(" Close ")]),_:1})]),default:a(()=>[s(K(i(h))+" ",1)]),_:1},8,["modelValue"])],64))}};export{re as default};
