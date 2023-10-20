import{f as g,E as _,g as C,l as S,B as b,m as k,D as A}from"./entry.69108db4.js";import{u as N}from"./asyncData.2833c0c7.js";import{h as O,q as m}from"./query.71b4da89.js";import"./preview.7f557b40.js";const Q=g({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(u){const{path:t,only:r,without:o,where:a,sort:f,limit:l,skip:d,locale:s,find:p}=_(u),y=C(()=>{var e;return(e=t.value)==null?void 0:e.includes("/_")}),h=!S().public.content.experimental.advanceQuery;b(()=>u,()=>n(),{deep:!0});const i=e=>h?e!=null&&e.surround?e.surround:e!=null&&e._id||Array.isArray(e)?e:e==null?void 0:e.result:e.result,{data:c,refresh:n}=await N(`content-query-${O(u)}`,()=>{let e;return t.value?e=m(t.value):e=m(),r.value&&(e=e.only(r.value)),o.value&&(e=e.without(o.value)),a.value&&(e=e.where(a.value)),f.value&&(e=e.sort(f.value)),l.value&&(e=e.limit(l.value)),d.value&&(e=e.skip(d.value)),s.value&&(e=e.where({_locale:s.value})),p.value==="one"?e.findOne().then(i):p.value==="surround"?t.value?h?e.findSurround(t.value):e.withSurround(t.value).findOne().then(i):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find().then(i)):e.find().then(i)});return{isPartial:y,data:c,refresh:n}},render(u){var v;const t=k(),{data:r,refresh:o,isPartial:a,path:f,only:l,without:d,where:s,sort:p,limit:y,skip:h,locale:i,find:c}=u,n={path:f,only:l,without:d,where:s,sort:p,limit:y,skip:h,locale:i,find:c};if(n.find==="one"){if(!r&&(t!=null&&t["not-found"]))return t["not-found"]({props:n,...this.$attrs});if(t!=null&&t.empty&&(r==null?void 0:r._type)==="markdown"&&!((v=r==null?void 0:r.body)!=null&&v.children.length))return t.empty({props:n,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:n,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:o,isPartial:a,props:n,...this.$attrs}):((w,q)=>A("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:w,data:q},null,2)))("default",{data:r,props:n,isPartial:a})}}),$=Q,D=$;export{D as default};
