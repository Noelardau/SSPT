import{r as u,o as T,A as n,z as p,a as i,x as f,w as e,B as w,b as t,C as B,u as r,l as C,D as v,j as x,c as d,f as g,E as L,G as R,q as b,s as I,F as N,i as V,H as P,h as A,I as D,_,y as M,J as S,m as q,t as E}from"./index-6a119dec.js";import{a as F}from"./Axios-26df80cc.js";import"./_commonjsHelpers-39b5b250.js";const U={key:0,src:_,alt:"logo",width:"50",height:"50",style:{"border-radius":"50%"}},H={__name:"TournoiUnique",setup($){let m=u(localStorage);T(()=>{console.log(n().params.idTournoi),F.get("/api.tournoi/get/"+n().params.idTournoi).then(s=>c.value=s.data)});let c=u({}),a=u(!1),h=u([{to:{name:"listParticipants",params:{idTournoi:n().params.idTournoi}},icon:"mdi-account",title:"Participants"},{to:{name:"listPerformance",params:{idTournoi:n().params.idTournoi}},title:"Performances",icon:"mdi-format-list-checks"},{to:{name:"classement",params:{idTournoi:n().params.idTournoi}},title:"Classement",icon:"mdi-format-list-checks"}]);return(s,l)=>{const k=p("RouterLink"),y=p("RouterView");return i(),f(w,null,{default:e(()=>[t(R,{color:"teal-darken-2",title:r(c).nomTournoi},B({image:e(()=>[t(L,{gradient:"to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"})]),_:2},[r(m).connected!=null?{name:"prepend",fn:e(()=>[t(k,{to:"/tournois"},{default:e(()=>[t(C,{icon:"mdi-arrow-left",color:"white"})]),_:1}),t(v,{onClick:l[0]||(l[0]=x(o=>V(a)?a.value=!r(a):a=!r(a),["stop"]))})]),key:"0"}:{name:"prepend",fn:e(()=>[s.$route.path!="/"?(i(),d("img",{key:0,src:_,alt:"logo",width:"50",height:"50",style:{"border-radius":"50%"}})):g("",!0)]),key:"1"},r(m).connected!=null?{name:"append",fn:e(()=>[s.$route.path!="/"?(i(),d("img",U)):g("",!0)]),key:"2"}:void 0]),1032,["title"]),t(P,{modelValue:r(a),"onUpdate:modelValue":l[1]||(l[1]=o=>V(a)?a.value=o:a=o),location:"left",temporary:""},{default:e(()=>[t(b,null,{default:e(()=>[(i(!0),d(N,null,I(r(h),o=>(i(),f(M,{to:o.to},{default:e(()=>[t(S,{icon:o.icon},null,8,["icon"]),q(" "+E(o.title),1)]),_:2},1032,["to"]))),256))]),_:1})]),_:1},8,["modelValue"]),t(D,{style:{"min-height":"600px"}},{default:e(()=>[t(A,null,{default:e(()=>[t(y)]),_:1})]),_:1})]),_:1})}}};export{H as default};