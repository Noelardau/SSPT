import{J as C,aW as p,aX as T,aj as _,ac as g,O as h,az as A,aA as L,P as O,Q as R,aY as x,aZ as B,aC as N,ad as F,ao as G,aq as I,r as M,aE as i,o as Y,Y as j,aG as q,aF as c,b as n,au as z,aw as D,a3 as u}from"./index-af6e56f7.js";const E=C({multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...p({location:"bottom"}),...T(),..._(),...g(),...h(),...A(L({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),Q=O()({name:"VSnackbar",props:E(),emits:{"update:modelValue":a=>!0},setup(a,v){let{slots:t}=v;const e=R(a,"modelValue"),{locationStyles:m}=x(a),{positionClasses:d}=B(a),{scopeId:k}=N(),{themeClasses:f}=F(a),{colorClasses:b,colorStyles:P,variantClasses:V}=G(a),{roundedClasses:y}=I(a),r=M();i(e,o),i(()=>a.timeout,o),Y(()=>{e.value&&o()});let l=-1;function o(){window.clearTimeout(l);const s=Number(a.timeout);!e.value||s===-1||(l=window.setTimeout(()=>{e.value=!1},s))}function S(){window.clearTimeout(l)}return j(()=>{const[s]=c.filterProps(a);return n(c,u({ref:r,class:["v-snackbar",{"v-snackbar--active":e.value,"v-snackbar--multi-line":a.multiLine&&!a.vertical,"v-snackbar--vertical":a.vertical},d.value,a.class],style:a.style},s,{modelValue:e.value,"onUpdate:modelValue":w=>e.value=w,contentProps:u({class:["v-snackbar__wrapper",f.value,b.value,y.value,V.value],style:[m.value,P.value],onPointerenter:S,onPointerleave:o},s.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},k),{default:()=>[z(!1,"v-snackbar"),t.default&&n("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[t.default()]),t.actions&&n(D,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[n("div",{class:"v-snackbar__actions"},[t.actions()])]})],activator:t.activator})}),q({},r)}});export{Q as V};
