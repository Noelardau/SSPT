import{b as Ne,m as qe,u as je,a as ve}from"./VTextField-693a7bfc.js";import{K as R,L as j,M as ie,N as Z,O as Se,P as se,Q as U,R as G,S as ce,T as g,U as Ie,W as Pe,X as we,Y as x,Z as H,b as u,$ as xe,a0 as J,r as Y,a1 as We,a2 as te,a3 as oe,J as q,a4 as O,a5 as Ae,a6 as Be,a7 as ue,a8 as Je,a9 as fe,aa as Qe,ab as Xe,ac as Te,ad as De,ae as Re,af as Ye,ag as me,ah as Ze,ai as el,aj as ll,ak as al,al as tl,am as nl,an as _e,ao as ol,ap as ul,aq as il,ar as sl,as as cl,at as rl,au as dl,av as vl,aw as fl,ax as X,ay as ml,F as W,az as ye,aA as Fe,aB as yl,aC as Le,aD as hl,aE as he,aF as ne,aG as Ve,aH as Oe,aI as ge,aJ as Me,aK as Vl,aL as gl,aM as kl,aN as ke,aO as Cl,aP as pl,aQ as bl,aR as Sl,aS as ae,o as Il,aT as Pl,aU as wl,aV as xl,aW as Al,q as Bl,y as Ce,m as Tl}from"./index-ea3f8d5d.js";const Ee=Symbol.for("vuetify:selection-control-group"),Ue=R({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:j,trueIcon:j,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:ie},...Z(),...Se(),...se()},"SelectionControlGroup"),Dl=R({...Ue({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");U()({name:"VSelectionControlGroup",props:Dl(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:a}=r;const n=G(e,"modelValue"),o=ce(),v=g(()=>e.id||`v-selection-control-group-${o}`),d=g(()=>e.name||v.value),l=new Set;return Ie(Ee,{modelValue:n,forceUpdate:()=>{l.forEach(t=>t())},onForceUpdate:t=>{l.add(t),Pe(()=>{l.delete(t)})}}),we({[e.defaultsTarget]:{color:x(e,"color"),disabled:x(e,"disabled"),density:x(e,"density"),error:x(e,"error"),inline:x(e,"inline"),modelValue:n,multiple:g(()=>!!e.multiple||e.multiple==null&&Array.isArray(n.value)),name:d,falseIcon:x(e,"falseIcon"),trueIcon:x(e,"trueIcon"),readonly:x(e,"readonly"),ripple:x(e,"ripple"),type:x(e,"type"),valueComparator:x(e,"valueComparator")}}),H(()=>{var t;return u("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(t=a.default)==null?void 0:t.call(a)])}),{}}});const $e=R({label:String,trueValue:null,falseValue:null,value:null,...Z(),...Ue()},"VSelectionControl");function Rl(e){const r=Ae(Ee,void 0),{densityClasses:a}=Be(e),n=G(e,"modelValue"),o=g(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),v=g(()=>e.falseValue!==void 0?e.falseValue:!1),d=g(()=>!!e.multiple||e.multiple==null&&Array.isArray(n.value)),l=g({get(){const f=r?r.modelValue.value:n.value;return d.value?f.some(c=>e.valueComparator(c,o.value)):e.valueComparator(f,o.value)},set(f){if(e.readonly)return;const c=f?o.value:v.value;let V=c;d.value&&(V=f?[...ue(n.value),c]:ue(n.value).filter(y=>!e.valueComparator(y,o.value))),r?r.modelValue.value=V:n.value=V}}),{textColorClasses:t,textColorStyles:p}=Je(g(()=>l.value&&!e.error&&!e.disabled?e.color:void 0)),I=g(()=>l.value?e.trueIcon:e.falseIcon);return{group:r,densityClasses:a,trueValue:o,falseValue:v,model:l,textColorClasses:t,textColorStyles:p,icon:I}}const _l=U()({name:"VSelectionControl",directives:{Ripple:xe},inheritAttrs:!1,props:$e(),emits:{"update:modelValue":e=>!0},setup(e,r){let{attrs:a,slots:n}=r;const{group:o,densityClasses:v,icon:d,model:l,textColorClasses:t,textColorStyles:p,trueValue:I}=Rl(e),f=ce(),c=g(()=>e.id||`input-${f}`),V=J(!1),y=J(!1),h=Y();o==null||o.onForceUpdate(()=>{h.value&&(h.value.checked=l.value)});function i(P){V.value=!0,(!fe||fe&&P.target.matches(":focus-visible"))&&(y.value=!0)}function S(){V.value=!1,y.value=!1}function B(P){e.readonly&&o&&Qe(()=>o.forceUpdate()),l.value=P.target.checked}return H(()=>{var K,m;const P=n.label?n.label({label:e.label,props:{for:c.value}}):e.label,[_,$]=We(a);return u("div",O({class:["v-selection-control",{"v-selection-control--dirty":l.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":V.value,"v-selection-control--focus-visible":y.value,"v-selection-control--inline":e.inline},v.value,e.class]},_,{style:e.style}),[u("div",{class:["v-selection-control__wrapper",t.value],style:p.value},[(K=n.default)==null?void 0:K.call(n),te(u("div",{class:["v-selection-control__input"]},[d.value&&u(q,{key:"icon",icon:d.value},null),u("input",O({ref:h,checked:l.value,disabled:!!(e.readonly||e.disabled),id:c.value,onBlur:S,onFocus:i,onInput:B,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:I.value,name:e.name,"aria-checked":e.type==="checkbox"?l.value:void 0},$),null),(m=n.input)==null?void 0:m.call(n,{model:l,textColorClasses:t,textColorStyles:p,props:{onFocus:i,onBlur:S,id:c.value}})]),[[oe("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),P&&u(Ne,{for:c.value,clickable:!0},{default:()=>[P]})])}),{isFocused:V,input:h}}}),Fl=R({indeterminate:Boolean,indeterminateIcon:{type:j,default:"$checkboxIndeterminate"},...$e({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),Ll=U()({name:"VCheckboxBtn",props:Fl(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,r){let{slots:a}=r;const n=G(e,"indeterminate"),o=G(e,"modelValue");function v(t){n.value&&(n.value=!1)}const d=g(()=>n.value?e.indeterminateIcon:e.falseIcon),l=g(()=>n.value?e.indeterminateIcon:e.trueIcon);return H(()=>u(_l,O(e,{modelValue:o.value,"onUpdate:modelValue":[t=>o.value=t,v],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:d.value,trueIcon:l.value,"aria-checked":n.value?"mixed":void 0}),a)),{}}});const Ke=Symbol.for("vuetify:v-chip-group"),Ol=R({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:ie},...Z(),...Xe({selectedClass:"v-chip--selected"}),...Te(),...se(),...De({variant:"tonal"})},"VChipGroup");U()({name:"VChipGroup",props:Ol(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:a}=r;const{themeClasses:n}=Re(e),{isSelected:o,select:v,next:d,prev:l,selected:t}=Ye(e,Ke);return we({VChip:{color:x(e,"color"),disabled:x(e,"disabled"),filter:x(e,"filter"),variant:x(e,"variant")}}),H(()=>u(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},n.value,e.class],style:e.style},{default:()=>{var p;return[(p=a.default)==null?void 0:p.call(a,{isSelected:o,select:v,next:d,prev:l,selected:t.value})]}})),{}}});const Ml=R({activeClass:String,appendAvatar:String,appendIcon:j,closable:Boolean,closeIcon:{type:j,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:j,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:me(),onClickOnce:me(),...Ze(),...Z(),...Se(),...el(),...ll(),...al(),...tl(),...nl(),...Te({tag:"span"}),...se(),...De({variant:"tonal"})},"VChip"),El=U()({name:"VChip",directives:{Ripple:xe},props:Ml(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,r){let{attrs:a,emit:n,slots:o}=r;const{t:v}=_e(),{borderClasses:d}=ol(e),{colorClasses:l,colorStyles:t,variantClasses:p}=ul(e),{densityClasses:I}=Be(e),{elevationClasses:f}=il(e),{roundedClasses:c}=sl(e),{sizeClasses:V}=cl(e),{themeClasses:y}=Re(e),h=G(e,"modelValue"),i=rl(e,Ke,!1),S=dl(e,a),B=g(()=>e.link!==!1&&S.isLink.value),P=g(()=>!e.disabled&&e.link!==!1&&(!!i||e.link||S.isClickable.value)),_=g(()=>({"aria-label":v(e.closeLabel),onClick(m){h.value=!1,n("click:close",m)}}));function $(m){var k;n("click",m),P.value&&((k=S.navigate)==null||k.call(S,m),i==null||i.toggle())}function K(m){(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),$(m))}return()=>{const m=S.isLink.value?"a":e.tag,k=!!(e.appendIcon||e.appendAvatar),A=!!(k||o.append),T=!!(o.close||e.closable),z=!!(o.filter||e.filter)&&i,N=!!(e.prependIcon||e.prependAvatar),Q=!!(N||o.prepend),s=!i||i.isSelected.value;return h.value&&te(u(m,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":P.value,"v-chip--filter":z,"v-chip--pill":e.pill},y.value,d.value,s?l.value:void 0,I.value,f.value,c.value,V.value,p.value,i==null?void 0:i.selectedClass.value,e.class],style:[s?t.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:S.href.value,tabindex:P.value?0:void 0,onClick:$,onKeydown:P.value&&!B.value&&K},{default:()=>{var b;return[vl(P.value,"v-chip"),z&&u(fl,{key:"filter"},{default:()=>[te(u("div",{class:"v-chip__filter"},[o.filter?te(u(X,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},null),[[oe("slot"),o.filter,"default"]]):u(q,{key:"filter-icon",icon:e.filterIcon},null)]),[[ml,i.isSelected.value]])]}),Q&&u("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?u(X,{key:"prepend-defaults",disabled:!N,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):u(W,null,[e.prependIcon&&u(q,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&u(ye,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),u("div",{class:"v-chip__content"},[((b=o.default)==null?void 0:b.call(o,{isSelected:i==null?void 0:i.isSelected.value,selectedClass:i==null?void 0:i.selectedClass.value,select:i==null?void 0:i.select,toggle:i==null?void 0:i.toggle,value:i==null?void 0:i.value.value,disabled:e.disabled}))??e.text]),A&&u("div",{key:"append",class:"v-chip__append"},[o.append?u(X,{key:"append-defaults",disabled:!k,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):u(W,null,[e.appendIcon&&u(q,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&u(ye,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),T&&u("div",O({key:"close",class:"v-chip__close"},_.value),[o.close?u(X,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):u(q,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[oe("ripple"),P.value&&e.ripple,null]])}}});const Ul=R({id:String,...Fe(yl({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Le}}),["absolute"])},"VMenu"),$l=U()({name:"VMenu",props:Ul(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:a}=r;const n=G(e,"modelValue"),{scopeId:o}=hl(),v=ce(),d=g(()=>e.id||`v-menu-${v}`),l=Y(),t=Ae(he,null),p=J(0);Ie(he,{register(){++p.value},unregister(){--p.value},closeParents(){setTimeout(()=>{p.value||(n.value=!1,t==null||t.closeParents())},40)}}),ne(n,y=>{y?t==null||t.register():t==null||t.unregister()});function I(){t==null||t.closeParents()}function f(y){var h,i;e.disabled||y.key==="Tab"&&(n.value=!1,(i=(h=l.value)==null?void 0:h.activatorEl)==null||i.focus())}function c(y){var i;if(e.disabled)return;const h=(i=l.value)==null?void 0:i.contentEl;h&&n.value?y.key==="ArrowDown"?(y.preventDefault(),ge(h,"next")):y.key==="ArrowUp"&&(y.preventDefault(),ge(h,"prev")):["ArrowDown","ArrowUp"].includes(y.key)&&(n.value=!0,y.preventDefault(),setTimeout(()=>setTimeout(()=>c(y))))}const V=g(()=>O({"aria-haspopup":"menu","aria-expanded":String(n.value),"aria-owns":d.value,onKeydown:c},e.activatorProps));return H(()=>{const[y]=Ve.filterProps(e);return u(Ve,O({ref:l,class:["v-menu",e.class],style:e.style},y,{modelValue:n.value,"onUpdate:modelValue":h=>n.value=h,absolute:!0,activatorProps:V.value,"onClick:outside":I,onKeydown:f},o),{activator:a.activator,default:function(){for(var h=arguments.length,i=new Array(h),S=0;S<h;S++)i[S]=arguments[S];return u(X,{root:"VMenu"},{default:()=>{var B;return[(B=a.default)==null?void 0:B.call(a,...i)]}})}})}),Oe({id:d,ΨopenChildren:p},l)}});const Kl=R({renderless:Boolean,...Z()},"VVirtualScrollItem"),Gl=U()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Kl(),emits:{"update:height":e=>!0},setup(e,r){let{attrs:a,emit:n,slots:o}=r;const{resizeRef:v,contentRect:d}=Me(void 0,"border");ne(()=>{var l;return(l=d.value)==null?void 0:l.height},l=>{l!=null&&n("update:height",l)}),H(()=>{var l,t;return e.renderless?u(W,null,[(l=o.default)==null?void 0:l.call(o,{itemRef:v})]):u("div",O({ref:v,class:["v-virtual-scroll__item",e.class],style:e.style},a),[(t=o.default)==null?void 0:t.call(o)])})}}),pe=-1,be=1,Hl=R({itemHeight:{type:[Number,String],default:48}},"virtual");function zl(e,r,a){const n=J(0),o=J(e.itemHeight),v=g({get:()=>parseInt(o.value??0,10),set(m){o.value=m}}),d=Y(),{resizeRef:l,contentRect:t}=Me();Vl(()=>{l.value=d.value});const p=gl(),I=new Map;let f=Array.from({length:r.value.length});const c=g(()=>{const m=(!t.value||d.value===document.documentElement?p.height.value:t.value.height)-((a==null?void 0:a.value)??0);return Math.ceil(m/v.value*1.7+1)});function V(m,k){v.value=Math.max(v.value,k),f[m]=k,I.set(r.value[m],k)}function y(m){return f.slice(0,m).reduce((k,A)=>k+(A||v.value),0)}function h(m){const k=r.value.length;let A=0,T=0;for(;T<m&&A<k;)T+=f[A++]||v.value;return A-1}let i=0;function S(){if(!d.value||!t.value)return;const m=t.value.height-56,k=d.value.scrollTop,A=k<i?pe:be,T=h(k+m/2),z=Math.round(c.value/3),N=T-z,Q=n.value+z*2-1;A===pe&&T<=Q?n.value=ke(N,0,r.value.length):A===be&&T>=Q&&(n.value=ke(N,0,r.value.length-c.value)),i=k}function B(m){if(!d.value)return;const k=y(m);d.value.scrollTop=k}const P=g(()=>Math.min(r.value.length,n.value+c.value)),_=g(()=>r.value.slice(n.value,P.value).map((m,k)=>({raw:m,index:k+n.value}))),$=g(()=>y(n.value)),K=g(()=>y(r.value.length)-y(P.value));return ne(()=>r.value.length,()=>{f=kl(r.value.length).map(()=>v.value),I.forEach((m,k)=>{const A=r.value.indexOf(k);A===-1?I.delete(k):f[A]=m})}),{containerRef:d,computedItems:_,itemHeight:v,paddingTop:$,paddingBottom:K,scrollToIndex:B,handleScroll:S,handleItemResize:V}}const Nl=R({items:{type:Array,default:()=>[]},renderless:Boolean,...Hl(),...Z(),...Cl()},"VVirtualScroll"),ql=U()({name:"VVirtualScroll",props:Nl(),setup(e,r){let{slots:a}=r;const n=pl("VVirtualScroll"),{dimensionStyles:o}=bl(e),{containerRef:v,handleScroll:d,handleItemResize:l,scrollToIndex:t,paddingTop:p,paddingBottom:I,computedItems:f}=zl(e,x(e,"items"));return Sl(()=>e.renderless,()=>{Il(()=>{var c;v.value=Pl(n.vnode.el,!0),(c=v.value)==null||c.addEventListener("scroll",d)}),Pe(()=>{var c;(c=v.value)==null||c.removeEventListener("scroll",d)})}),H(()=>{const c=f.value.map(V=>u(Gl,{key:V.index,renderless:e.renderless,"onUpdate:height":y=>l(V.index,y)},{default:y=>{var h;return(h=a.default)==null?void 0:h.call(a,{item:V.raw,index:V.index,...y})}}));return e.renderless?u(W,null,[u("div",{class:"v-virtual-scroll__spacer",style:{paddingTop:ae(p.value)}},null),c,u("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:ae(I.value)}},null)]):u("div",{ref:v,class:["v-virtual-scroll",e.class],onScroll:d,style:[o.value,e.style]},[u("div",{class:"v-virtual-scroll__container",style:{paddingTop:ae(p.value),paddingBottom:ae(I.value)}},[c])])}),{scrollToIndex:t}}});function jl(e,r){const a=J(!1);let n;function o(l){cancelAnimationFrame(n),a.value=!0,n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{a.value=!1})})}async function v(){await new Promise(l=>requestAnimationFrame(l)),await new Promise(l=>requestAnimationFrame(l)),await new Promise(l=>requestAnimationFrame(l)),await new Promise(l=>{if(a.value){const t=ne(a,()=>{t(),l()})}else l()})}async function d(l){var I,f;if(l.key==="Tab"&&((I=r.value)==null||I.focus()),!["PageDown","PageUp","Home","End"].includes(l.key))return;const t=(f=e.value)==null?void 0:f.$el;if(!t)return;(l.key==="Home"||l.key==="End")&&t.scrollTo({top:l.key==="Home"?0:t.scrollHeight,behavior:"smooth"}),await v();const p=t.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(l.key==="PageDown"||l.key==="Home"){const c=t.getBoundingClientRect().top;for(const V of p)if(V.getBoundingClientRect().top>=c){V.focus();break}}else{const c=t.getBoundingClientRect().bottom;for(const V of[...p].reverse())if(V.getBoundingClientRect().bottom<=c){V.focus();break}}}return{onListScroll:o,onListKeydown:d}}const Wl=R({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:j,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:ie},...wl({itemChildren:!1})},"Select"),Jl=R({...Wl(),...Fe(qe({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...xl({transition:{component:Le}})},"VSelect"),Yl=U()({name:"VSelect",props:Jl(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,r){let{slots:a}=r;const{t:n}=_e(),o=Y(),v=Y(),d=G(e,"menu"),l=g({get:()=>d.value,set:s=>{var b;d.value&&!s&&((b=v.value)!=null&&b.ΨopenChildren)||(d.value=s)}}),{items:t,transformIn:p,transformOut:I}=Al(e),f=G(e,"modelValue",[],s=>p(s===null?[null]:ue(s)),s=>{const b=I(s);return e.multiple?b:b[0]??null}),c=je(),V=g(()=>f.value.map(s=>t.value.find(b=>e.valueComparator(b.value,s.value))||s)),y=g(()=>V.value.map(s=>s.props.value)),h=J(!1);let i="",S;const B=g(()=>e.hideSelected?t.value.filter(s=>!V.value.some(b=>b===s)):t.value),P=g(()=>e.hideNoData&&!t.value.length||e.readonly||(c==null?void 0:c.isReadonly.value)),_=Y(),{onListScroll:$,onListKeydown:K}=jl(_,o);function m(s){e.openOnClear&&(l.value=!0)}function k(){P.value||(l.value=!l.value)}function A(s){var C,D;if(e.readonly||c!=null&&c.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(s.key)&&s.preventDefault(),["Enter","ArrowDown"," "].includes(s.key)&&(l.value=!0),["Escape","Tab"].includes(s.key)&&(l.value=!1),s.key==="Home"?(C=_.value)==null||C.focus("first"):s.key==="End"&&((D=_.value)==null||D.focus("last"));const b=1e3;function M(w){const E=w.key.length===1,F=!w.ctrlKey&&!w.metaKey&&!w.altKey;return E&&F}if(e.multiple||!M(s))return;const ee=performance.now();ee-S>b&&(i=""),i+=s.key.toLowerCase(),S=ee;const le=t.value.find(w=>w.title.toLowerCase().startsWith(i));le!==void 0&&(f.value=[le])}function T(s){if(e.multiple){const b=y.value.findIndex(M=>e.valueComparator(M,s.value));if(b===-1)f.value=[...f.value,s];else{const M=[...f.value];M.splice(b,1),f.value=M}}else f.value=[s],l.value=!1}function z(s){var b;(b=_.value)!=null&&b.$el.contains(s.relatedTarget)||(l.value=!1)}function N(){var s;h.value&&((s=o.value)==null||s.focus())}function Q(s){h.value=!0}return H(()=>{const s=!!(e.chips||a.chip),b=!!(!e.hideNoData||B.value.length||a["prepend-item"]||a["append-item"]||a["no-data"]),M=f.value.length>0,[ee]=ve.filterProps(e),le=M||!h.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return u(ve,O({ref:o},ee,{modelValue:f.value.map(C=>C.props.value).join(", "),"onUpdate:modelValue":C=>{C==null&&(f.value=[])},focused:h.value,"onUpdate:focused":C=>h.value=C,validationValue:f.externalValue,dirty:M,class:["v-select",{"v-select--active-menu":l.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":f.value.length,"v-select--selection-slot":!!a.selection},e.class],style:e.style,readonly:!0,placeholder:le,"onClick:clear":m,"onMousedown:control":k,onBlur:z,onKeydown:A}),{...a,default:()=>u(W,null,[u($l,O({ref:v,modelValue:l.value,"onUpdate:modelValue":C=>l.value=C,activator:"parent",contentClass:"v-select__content",disabled:P.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:N},e.menuProps),{default:()=>[b&&u(Bl,{ref:_,selected:y.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:C=>C.preventDefault(),onKeydown:K,onFocusin:Q,onScrollPassive:$,tabindex:"-1"},{default:()=>{var C,D,w;return[(C=a["prepend-item"])==null?void 0:C.call(a),!B.value.length&&!e.hideNoData&&(((D=a["no-data"])==null?void 0:D.call(a))??u(Ce,{title:n(e.noDataText)},null)),u(ql,{renderless:!0,items:B.value},{default:E=>{var de;let{item:F,index:L,itemRef:Ge}=E;const re=O(F.props,{ref:Ge,key:L,onClick:()=>T(F)});return((de=a.item)==null?void 0:de.call(a,{item:F,index:L,props:re}))??u(Ce,re,{prepend:He=>{let{isSelected:ze}=He;return u(W,null,[e.multiple&&!e.hideSelected?u(Ll,{key:F.value,modelValue:ze,ripple:!1,tabindex:"-1"},null):void 0,F.props.prependIcon&&u(q,{icon:F.props.prependIcon},null)])}})}}),(w=a["append-item"])==null?void 0:w.call(a)]}})]}),V.value.map((C,D)=>{var F;function w(L){L.stopPropagation(),L.preventDefault(),T(C)}const E={"onClick:close":w,onMousedown(L){L.preventDefault(),L.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return u("div",{key:C.value,class:"v-select__selection"},[s?a.chip?u(X,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:C.title}}},{default:()=>{var L;return[(L=a.chip)==null?void 0:L.call(a,{item:C,index:D,props:E})]}}):u(El,O({key:"chip",closable:e.closableChips,size:"small",text:C.title},E),null):((F=a.selection)==null?void 0:F.call(a,{item:C,index:D}))??u("span",{class:"v-select__selection-text"},[C.title,e.multiple&&D<V.value.length-1&&u("span",{class:"v-select__selection-comma"},[Tl(",")])])])})]),"append-inner":function(){var E;for(var C=arguments.length,D=new Array(C),w=0;w<C;w++)D[w]=arguments[w];return u(W,null,[(E=a["append-inner"])==null?void 0:E.call(a,...D),e.menuIcon?u(q,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Oe({isFocused:h,menu:l,select:T},o)}});export{Yl as V};
