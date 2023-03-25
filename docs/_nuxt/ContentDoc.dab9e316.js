import{u as h,m as g,z as C,A as y,B as w,k as v,e as D,C as S,l as r}from"./entry.863706d1.js";import"./app.config.48dd4df8.js";import{u as _}from"./composables.987958db.js";import k from"./ContentRenderer.cf48180b.js";import q from"./ContentQuery.597c0ea2.js";import"./ContentRendererMarkdown.4e75f942.js";import"./index.a6ef77ff.js";import"./asyncData.471f4f74.js";import"./query.c144e575.js";import"./utils.cdaa075c.js";const a=(u,e=y())=>{const c=h(u),p=g();C(()=>h(u),(t=c)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const m=n.title||(t==null?void 0:t.title);m&&(n.title=m),p.public.content.host;const s=(n==null?void 0:n.description)||(t==null?void 0:t.description);s&&n.meta.filter(i=>i.name==="description").length===0&&n.meta.push({name:"description",content:s}),n!=null&&n.image||(t==null||t.image),w(()=>_(n))},{immediate:!0})},z=v({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(u){const e=D(),{tag:c,excerpt:p,path:f,query:t,head:n}=u,m={...t||{},path:f||(t==null?void 0:t.path)||S(y().path),find:"one"},s=(i,o)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:i,data:o},null,2));return r(q,m,{default:e!=null&&e.default?({data:i,refresh:o,isPartial:d})=>{var l;return n&&a(i),(l=e.default)==null?void 0:l.call(e,{doc:i,refresh:o,isPartial:d,excerpt:p,...this.$attrs})}:({data:i})=>(n&&a(i),r(k,{value:i,excerpt:p,tag:c,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):s("default",i)})),empty:i=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,i))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":i=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,i))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{z as default};
