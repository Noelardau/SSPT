import{r as s,o as T,A as r,z as m,a as u,x as p,w as a,B as k,b as e,C as w,u as i,e as B,l as v,D as x,j as C,E as y,G as L,q as R,c as I,s as N,F as h,i as c,H as P,h as b,I as A,y as D,J as M,m as S,t as q}from"./index-b7628277.js";import{a as E}from"./index-dad84dab.js";import"./_commonjsHelpers-39b5b250.js";const G={__name:"TournoiUnique",setup(F){let f=s(localStorage);T(()=>{console.log(r().params.idTournoi),E.get("http://192.168.43.143:5000/api.tournoi/get/"+r().params.idTournoi).then(l=>d.value=l.data)});let d=s({}),t=s(!1),V=s([{to:{name:"listParticipants",params:{idTournoi:r().params.idTournoi}},icon:"mdi-account",title:"Participants"},{to:{name:"listPerformance",params:{idTournoi:r().params.idTournoi}},title:"Performances",icon:"mdi-list"},{to:{name:"classement",params:{idTournoi:r().params.idTournoi}},title:"Classement",icon:"mdi-list"}]);return(l,n)=>{const g=m("RouterLink"),_=m("RouterView");return u(),p(k,null,{default:a(()=>[e(L,{color:"teal-darken-2",title:i(d).nomTournoi},w({image:a(()=>[e(y,{gradient:"to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"})]),_:2},[i(f).connected!=null?{name:"prepend",fn:a(()=>[B("span",{onClick:n[0]||(n[0]=o=>l.t.add())}),e(g,{to:"/tournois"},{default:a(()=>[e(v,{icon:"mdi-arrow-left",color:"white"})]),_:1}),e(x,{onClick:n[1]||(n[1]=C(o=>c(t)?t.value=!i(t):t=!i(t),["stop"]))})]),key:"0"}:void 0]),1032,["title"]),e(P,{modelValue:i(t),"onUpdate:modelValue":n[2]||(n[2]=o=>c(t)?t.value=o:t=o),location:"left",temporary:""},{default:a(()=>[e(R,null,{default:a(()=>[(u(!0),I(h,null,N(i(V),o=>(u(),p(D,{to:o.to},{default:a(()=>[e(M,{icon:o.icon},null,8,["icon"]),S(" "+q(o.title),1)]),_:2},1032,["to"]))),256))]),_:1})]),_:1},8,["modelValue"]),e(A,{style:{"min-height":"600px"}},{default:a(()=>[e(b,null,{default:a(()=>[e(_)]),_:1})]),_:1})]),_:1})}}};export{G as default};