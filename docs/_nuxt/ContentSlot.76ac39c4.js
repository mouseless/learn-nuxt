import{b as g}from"./utils.9a4534e0.js";import{l as h,s as c,b as m,e as y,m as p}from"./entry.dfce2b68.js";import"./app.config.a5b7670b.js";const b=h({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(e){const{parent:i}=c(),{between:o,default:l}=m(),u=y(()=>typeof e.unwrap=="string"?e.unwrap.split(" "):["*"]);return{fallbackSlot:l,tags:u,between:o,parent:i}},render({use:e,unwrap:i,fallbackSlot:o,between:l,tags:u,parent:n}){var f;try{let s=e;if(typeof e=="string"&&(s=(n==null?void 0:n.slots[e])||((f=n==null?void 0:n.parent)==null?void 0:f.slots[e]),console.warn(`Please set :use="$slots.${e}" in <ContentSlot> component to enable reactivity`)),!s)return o?o():p("div");if(!i)return[s()];const{flatUnwrap:d}=g(),a=d(s(),u);return l?a.flatMap((t,r)=>r===0?[t]:[l(),t]):a.reduce((t,r)=>(typeof r.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=r.children:t.push(r.children):t.push(r),t),[])}catch{return p("div")}}});export{b as default};
