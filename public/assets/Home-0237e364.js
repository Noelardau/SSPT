import{o as U,r as m,a as _,c as p,u as o,b as e,w as l,i as V,V as A,d as x,e as r,_ as h,f as v,F as D,g as k,h as w,j as R,k as y,l as g,m as c,t as b,n as T}from"./index-6a119dec.js";import{a as j}from"./Axios-26df80cc.js";import{V as E,a as S}from"./VRow-268f7530.js";import{V as H,a as F}from"./VTextField-eff10ba3.js";import"./_commonjsHelpers-39b5b250.js";const I={key:0},O=r("p",{align:"center",class:"text-h4-primary"},"Connexion",-1),q=r("p",{align:"center"},[r("img",{src:h,alt:"logo",width:"200",height:"200",style:{"border-radius":"50%"}})],-1),z={align:"center",class:"mt-8"},G={key:1,align:"center"},J=r("img",{src:h,alt:"logo",width:"400",height:"400",style:{"border-radius":"50%"}},null,-1),K=[J],Z={__name:"Home",setup(L){U(()=>{j.get("/api.tournoi/all").then(d=>{console.log(d.data),d.data.length!=0&&(u.value=d.data[d.data.length-1])})});let u=m({_id:0}),n=m(""),i=m(""),f=m(localStorage),s=m(!1),N=()=>{console.log(n.value),n.value=="admin"&&i.value=="admin"&&(localStorage.setItem("connected",!0),f.value=localStorage,location.reload())},C=()=>{s.value=!0},B=()=>s.value=!1,M=()=>{u.value._id!=0?T.push({name:"classement",params:{idTournoi:u.value._id}}):T.push("/")};return(d,a)=>(_(),p(D,null,[o(f).connected==null?(_(),p("div",I,[e(A,{"max-width":"800",class:"mx-auto mt-9",modelValue:o(s),"onUpdate:modelValue":a[3]||(a[3]=t=>V(s)?s.value=t:s=t)},{default:l(()=>[e(x,null,{default:l(()=>[e(k,null,{default:l(()=>[O]),_:1}),e(w,null,{default:l(()=>[e(E,{class:"ml-2"},{default:l(()=>[e(S,null,{default:l(()=>[e(H,{onSubmit:a[2]||(a[2]=R(()=>{},["prevent"]))},{default:l(()=>[e(F,{label:"Nom d'utilisateur",modelValue:o(n),"onUpdate:modelValue":a[0]||(a[0]=t=>V(n)?n.value=t:n=t),autofocus:""},null,8,["modelValue"]),e(F,{type:"password",label:"Mot de passe",modelValue:o(i),"onUpdate:modelValue":a[1]||(a[1]=t=>V(i)?i.value=t:i=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(S,null,{default:l(()=>[q]),_:1})]),_:1})]),_:1}),e(y,null,{default:l(()=>[e(g,{color:"primary",onClick:o(N)},{default:l(()=>[c("Se connecter")]),_:1},8,["onClick"]),e(g,{color:"red",onClick:o(B)},{default:l(()=>[c("annuler")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(x,null,{default:l(()=>[e(k,null,{default:l(()=>[c(" Tournoi en cours: "+b(o(u).nomTournoi??"Aucun tournoi"),1)]),_:1}),e(w,null,{default:l(()=>[c(b(o(u).description??"On va encore créer un tournoi"),1)]),_:1}),e(y,null,{default:l(()=>[e(g,{color:"primary",onClick:o(M)},{default:l(()=>[c(" Voir le classement ")]),_:1},8,["onClick"])]),_:1})]),_:1}),r("p",z,[r("img",{onClick:a[4]||(a[4]=(...t)=>o(C)&&o(C)(...t)),src:h,alt:"logo",width:"200",height:"200",style:{"border-radius":"50%"}})])])):v("",!0),o(f).connected!=null?(_(),p("p",G,K)):v("",!0)],64))}};export{Z as default};
