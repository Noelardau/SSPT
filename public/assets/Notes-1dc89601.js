import{V as _}from"./VTable-38fa72c1.js";import{a as r,x as c,w as u,e as i,c as a,F as f,s as m,b0 as x,t as d}from"./index-6a119dec.js";const h={__name:"Notes",props:{notes:Array},setup(s){const l=s;function p(){let e={note:l.notes};for(var n=0;n<e.note.length;n++)for(var t=n+1;t<e.note.length;t++){var o=e.note[n];parseFloat(o.note)>parseFloat(e.note[t].note)&&(e.note[n]=e.note[t],e.note[t]=o,o=e.note[t])}return e.note}return(e,n)=>(r(),c(_,null,{default:u(()=>[i("tr",null,[(r(!0),a(f,null,m(p(),t=>(r(),a("td",{class:x(["text-left",t.retenu?t.penalite?"penalite":"retenu":"nonRetenu"])},d(t.note)+" | ",3))),256))])]),_:1}))}};export{h as _};
