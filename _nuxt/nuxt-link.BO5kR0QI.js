import{a5 as _,f as B,g as b,a6 as q,r as C,a7 as w,a8 as L,a9 as N,K as T,aa as j,G as P,R as U,j as I,ab as O,ac as V,ad as D,q as E,Y as R,ae as F,z,$ as H}from"./entry.0BGra8HZ.js";async function k(t,r=_()){const{path:u,matched:e}=r.resolve(t);if(!e.length||(r._routePreloaded||(r._routePreloaded=new Set),r._routePreloaded.has(u)))return;const n=r._preloadPromises=r._preloadPromises||[];if(n.length>4)return Promise.all(n).then(()=>k(t,r));r._routePreloaded.add(u);const i=e.map(s=>{var a;return(a=s.components)==null?void 0:a.default}).filter(s=>typeof s=="function");for(const s of i){const a=Promise.resolve(s()).catch(()=>{}).finally(()=>n.splice(n.indexOf(a)));n.push(a)}await Promise.all(n)}const $=(...t)=>t.find(r=>r!==void 0);function M(t){const r=t.componentName||"NuxtLink";function u(e,n){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return S(e,t.trailingSlash);const i="path"in e&&e.path!==void 0?e.path:n(e).path,s={...e,path:S(i,t.trailingSlash)};return"name"in s&&delete s.name,s}return B({name:r,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:n}){const i=_(),s=E(),a=b(()=>{const l=e.to||e.href||"";return u(l,i.resolve)}),f=b(()=>typeof a.value=="string"&&q(a.value,{acceptRelative:!0})),g=b(()=>e.target&&e.target!=="_self"),p=b(()=>e.external||g.value?!0:typeof a.value=="object"?!1:a.value===""||f.value),x=C(!1),v=C(null),A=l=>{var d;v.value=e.custom?(d=l==null?void 0:l.$el)==null?void 0:d.nextElementSibling:l==null?void 0:l.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!K()){const d=R();let h,o=null;w(()=>{const y=G();L(()=>{h=N(()=>{var c;(c=v==null?void 0:v.value)!=null&&c.tagName&&(o=y.observe(v.value,async()=>{o==null||o(),o=null;const m=typeof a.value=="string"?a.value:i.resolve(a.value).fullPath;await Promise.all([d.hooks.callHook("link:prefetch",m).catch(()=>{}),!p.value&&k(a.value,i).catch(()=>{})]),x.value=!0}))})})}),T(()=>{h&&j(h),o==null||o(),o=null})}return()=>{var o,y;if(!p.value){const c={ref:A,to:a.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(x.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel||void 0),P(U("RouterLink"),c,n.default)}const l=typeof a.value=="object"?((o=i.resolve(a.value))==null?void 0:o.href)??null:a.value&&!e.external&&!f.value?u(I(s.app.baseURL,a.value),i.resolve):a.value||null,d=e.target||null,h=$(e.noRel?"":e.rel,t.externalRelAttribute,f.value||g.value?"noopener noreferrer":"")||null;if(e.custom){if(!n.default)return null;const c=()=>F(l,{replace:e.replace,external:e.external});return n.default({href:l,navigate:c,get route(){if(!l)return;const m=O(l);return{path:m.pathname,fullPath:m.pathname,get query(){return V(m.search)},hash:m.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l}},rel:h,target:d,isExternal:p.value,isActive:!1,isExactActive:!1})}return P("a",{ref:v,href:l,rel:h,target:d},(y=n.default)==null?void 0:y.call(n))}}})}const W=M(D);function S(t,r){const u=r==="append"?z:H;return q(t)&&!t.startsWith("http")?t:u(t,!0)}function G(){const t=R();if(t._observer)return t._observer;let r=null;const u=new Map,e=(i,s)=>(r||(r=new IntersectionObserver(a=>{for(const f of a){const g=u.get(f.target);(f.isIntersecting||f.intersectionRatio>0)&&g&&g()}})),u.set(i,s),r.observe(i),()=>{u.delete(i),r.unobserve(i),u.size===0&&(r.disconnect(),r=null)});return t._observer={observe:e}}function K(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{W as _};
