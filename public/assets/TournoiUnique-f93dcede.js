import{r as u,o as k,A as i,z as y,a as n,x as c,w as e,B as T,b as a,C as w,u as r,D as C,j as v,c as d,f,E as x,G as B,q as b,s as I,F as N,i as g,H as A,h as L,I as P,_ as V,y as R,J as D,m as M,t as S}from"./index-509092f4.js";import{a as q}from"./Axios-26df80cc.js";import"./_commonjsHelpers-39b5b250.js";const E={key:0,src:V,alt:"logo",width:"50",height:"50",style:{"border-radius":"50%"}},z={__name:"TournoiUnique",setup(F){let m=u(localStorage);k(()=>{console.log(i().params.idTournoi),q.get("/api.tournoi/get/"+i().params.idTournoi).then(s=>p.value=s.data)});let p=u({}),t=u(!1),_=u([{to:{name:"listParticipants",params:{idTournoi:i().params.idTournoi}},icon:"mdi-account",title:"Participants"},{to:{name:"listPerformance",params:{idTournoi:i().params.idTournoi}},title:"Performances",icon:"mdi-format-list-checks"},{to:{name:"classement",params:{idTournoi:i().params.idTournoi}},title:"Classement",icon:"mdi-format-list-checks"},{to:"/tournois",title:"Autre tournoi...",icon:"mdi-arrow-left"}]);return(s,l)=>{const h=y("RouterView");return n(),c(T,null,{default:e(()=>[a(B,{color:"teal-darken-2",title:r(p).nomTournoi},w({image:e(()=>[a(x,{gradient:"to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"})]),_:2},[r(m).connected!=null?{name:"prepend",fn:e(()=>[a(C,{onClick:l[0]||(l[0]=v(o=>g(t)?t.value=!r(t):t=!r(t),["stop"]))})]),key:"0"}:{name:"prepend",fn:e(()=>[s.$route.path!="/"?(n(),d("img",{key:0,src:V,alt:"logo",width:"50",height:"50",style:{"border-radius":"50%"}})):f("",!0)]),key:"1"},r(m).connected!=null?{name:"append",fn:e(()=>[s.$route.path!="/"?(n(),d("img",E)):f("",!0)]),key:"2"}:void 0]),1032,["title"]),a(A,{modelValue:r(t),"onUpdate:modelValue":l[1]||(l[1]=o=>g(t)?t.value=o:t=o),location:"left",temporary:""},{default:e(()=>[a(b,null,{default:e(()=>[(n(!0),d(N,null,I(r(_),o=>(n(),c(R,{to:o.to},{default:e(()=>[a(D,{icon:o.icon},null,8,["icon"]),M(" "+S(o.title),1)]),_:2},1032,["to"]))),256))]),_:1})]),_:1},8,["modelValue"]),a(P,{style:{"min-height":"600px"}},{default:e(()=>[a(L,null,{default:e(()=>[a(h)]),_:1})]),_:1})]),_:1})}}};export{z as default};
