import{o as R,r as m,a as _,c as p,u as o,b as e,w as l,i as V,V as A,d as x,e as r,_ as h,f as v,F as D,g as k,h as w,j,k as y,l as g,m as c,t as b,n as T}from"./index-ea3f8d5d.js";import{a as S}from"./index-dad84dab.js";import{V as E,a as F}from"./VRow-b3e63d02.js";import{V as H,a as N}from"./VTextField-693a7bfc.js";import"./_commonjsHelpers-39b5b250.js";const I={key:0},L=r("p",{align:"center",class:"text-h4-primary"},"Connexion",-1),O=r("p",{align:"center"},[r("img",{src:h,alt:"logo",width:"200",height:"200",style:{"border-radius":"50%"}})],-1),q={align:"center",class:"mt-8"},z={key:1,align:"center"},G=r("img",{src:h,alt:"logo",width:"400",height:"400",style:{"border-radius":"50%"}},null,-1),J=[G],Z={__name:"Home",setup(K){S.defaults.baseURL="http://localhost:5000/api.tournoi/",R(()=>{S.get("/all").then(d=>{console.log(d.data),d.data.length!=0&&(u.value=d.data[d.data.length-1])})});let u=m({_id:0}),n=m(""),i=m(""),f=m(localStorage),s=m(!1),B=()=>{console.log(n.value),n.value=="admin"&&i.value=="admin"&&(localStorage.setItem("connected",!0),f.value=localStorage,location.reload())},C=()=>{s.value=!0},M=()=>s.value=!1,U=()=>{u.value._id!=0?T.push({name:"classement",params:{idTournoi:u.value._id}}):T.push("/")};return(d,t)=>(_(),p(D,null,[o(f).connected==null?(_(),p("div",I,[e(A,{"max-width":"800",class:"mx-auto mt-9",modelValue:o(s),"onUpdate:modelValue":t[3]||(t[3]=a=>V(s)?s.value=a:s=a)},{default:l(()=>[e(x,null,{default:l(()=>[e(k,null,{default:l(()=>[L]),_:1}),e(w,null,{default:l(()=>[e(E,{class:"ml-2"},{default:l(()=>[e(F,null,{default:l(()=>[e(H,{onSubmit:t[2]||(t[2]=j(()=>{},["prevent"]))},{default:l(()=>[e(N,{label:"Nom d'utilisateur",modelValue:o(n),"onUpdate:modelValue":t[0]||(t[0]=a=>V(n)?n.value=a:n=a),autofocus:""},null,8,["modelValue"]),e(N,{type:"password",label:"Mot de passe",modelValue:o(i),"onUpdate:modelValue":t[1]||(t[1]=a=>V(i)?i.value=a:i=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(F,null,{default:l(()=>[O]),_:1})]),_:1})]),_:1}),e(y,null,{default:l(()=>[e(g,{color:"primary",onClick:o(B)},{default:l(()=>[c("Se connecter")]),_:1},8,["onClick"]),e(g,{color:"red",onClick:o(M)},{default:l(()=>[c("annuler")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(x,null,{default:l(()=>[e(k,null,{default:l(()=>[c(" Tournoi en cours: "+b(o(u).nomTournoi??"Aucun tournoi"),1)]),_:1}),e(w,null,{default:l(()=>[c(b(o(u).description??"On va encore créer un tournoi"),1)]),_:1}),e(y,null,{default:l(()=>[e(g,{color:"primary",onClick:o(U)},{default:l(()=>[c(" Voir le classement ")]),_:1},8,["onClick"])]),_:1})]),_:1}),r("p",q,[r("img",{onClick:t[4]||(t[4]=(...a)=>o(C)&&o(C)(...a)),src:h,alt:"logo",width:"200",height:"200",style:{"border-radius":"50%"}})])])):v("",!0),o(f).connected!=null?(_(),p("p",z,J)):v("",!0)],64))}};export{Z as default};
