import{b0 as i,b1 as u,J as S,M as m,ab as C,P as k,S as N,b2 as V}from"./index-af6e56f7.js";const j=(()=>i.reduce((t,a)=>(t[a]={type:[Boolean,String,Number],default:!1},t),{}))(),v=(()=>i.reduce((t,a)=>{const e="offset"+u(a);return t[e]={type:[String,Number],default:null},t},{}))(),L=(()=>i.reduce((t,a)=>{const e="order"+u(a);return t[e]={type:[String,Number],default:null},t},{}))(),y={col:Object.keys(j),offset:Object.keys(v),order:Object.keys(L)};function O(t,a,e){let s=t;if(!(e==null||e===!1)){if(a){const n=a.replace(t,"");s+=`-${n}`}return t==="col"&&(s="v-"+s),t==="col"&&(e===""||e===!0)||(s+=`-${e}`),s.toLowerCase()}}const _=["auto","start","end","center","baseline","stretch"],I=S({cols:{type:[Boolean,String,Number],default:!1},...j,offset:{type:[String,Number],default:null},...v,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:t=>_.includes(t)},...m(),...C()},"VCol"),x=k()({name:"VCol",props:I(),setup(t,a){let{slots:e}=a;const s=N(()=>{const n=[];let l;for(l in y)y[l].forEach(o=>{const c=t[o],g=O(l,o,c);g&&n.push(g)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),n});return()=>{var n;return V(t.tag,{class:[s.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}}),f=["start","end","center"],P=["space-between","space-around","space-evenly"];function d(t,a){return i.reduce((e,s)=>{const n=t+u(s);return e[n]=a(),e},{})}const M=[...f,"baseline","stretch"],$=t=>M.includes(t),h=d("align",()=>({type:String,default:null,validator:$})),R=[...f,...P],w=t=>R.includes(t),E=d("justify",()=>({type:String,default:null,validator:w})),T=[...f,...P,"stretch"],A=t=>T.includes(t),G=d("alignContent",()=>({type:String,default:null,validator:A})),b={align:Object.keys(h),justify:Object.keys(E),alignContent:Object.keys(G)},U={align:"align",justify:"justify",alignContent:"align-content"};function B(t,a,e){let s=U[t];if(e!=null){if(a){const n=a.replace(t,"");s+=`-${n}`}return s+=`-${e}`,s.toLowerCase()}}const F=S({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:$},...h,justify:{type:String,default:null,validator:w},...E,alignContent:{type:String,default:null,validator:A},...G,...m(),...C()},"VRow"),J=k()({name:"VRow",props:F(),setup(t,a){let{slots:e}=a;const s=N(()=>{const n=[];let l;for(l in b)b[l].forEach(r=>{const o=t[r],c=B(l,r,o);c&&n.push(c)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return V(t.tag,{class:["v-row",s.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}});export{x as V,J as a};
