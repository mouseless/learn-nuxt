import{aC as c,ap as o,Q as u,c as h,u as l,o as d,aZ as f,aW as g,az as p,aM as m}from"./CY6SFX_I.js";const S=["src","alt","width","height"],b=c({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const a=e,n=o(),r=u(()=>{if(a.src.startsWith("//"))return a.src;const t=f(g(p().app.baseURL)),s=i(n.path);return m(t,s,a.src)});function i(t){return t.endsWith("/")?t:t.replace(/\/[^/]*\/?$/,"")}return(t,s)=>(d(),h("img",{src:l(r),alt:e.alt,width:e.width,height:e.height},null,8,S))}});export{b as default};
