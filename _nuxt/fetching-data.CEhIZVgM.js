import{j as _,r as b,k as G,l as v,b as h,e as t,d as e,t as n,u as i,F as A,h as C,o as d}from"./entry.0BGra8HZ.js";import{u as F}from"./asyncData.CpkMlCBu.js";function O(){const r="https://api.github.com";async function s(o){return await $fetch(_(r,"repos",o,"stats/contributors"),{method:"GET",headers:{"X-GitHub-Api-Version":"2022-11-28"}})}async function a(o){return await $fetch(_(r,"repos",o),{method:"GET",headers:{"X-GitHub-Api-Version":"2022-11-28"}})}async function l(o){return await $fetch(_(r,"orgs",o),{method:"GET",headers:{"X-GitHub-Api-Version":"2022-11-28"}})}return{getContributorStats:s,getRepository:a,getOrganization:l}}const T={class:"container"},x={class:"organization"},B=t("h2",null,"Fetch Once - Server or Client",-1),S=t("strong",null,"Organization:",-1),V=t("br",null,null,-1),$=t("strong",null,"Public repositories count:",-1),k={class:"repository"},E=t("h2",null,"Fetch Once - Only Client",-1),H=t("strong",null,"Repository:",-1),N=t("br",null,null,-1),R=t("strong",null,"Description:",-1),D=t("h2",null,"Fetch Twice - Server and Client",-1),X={class:"contributors"},j={class:"contributor"},L=["src"],M=t("strong",null,"Total commits:",-1),w="mouseless",I={__name:"fetching-data",async setup(r){let s,a;const{getContributorStats:l,getRepository:o,getOrganization:z}=O(),p=`${w}/learn-nuxt`,u=b([]),g=b(),{data:m}=([s,a]=G(()=>F(()=>z(w),"$p36AzrYbr0")),s=await s,a(),s);return v(async()=>u.value=await o(p)),v(async()=>g.value=await l(p)),(P,U)=>{var y,f;return d(),h("div",T,[t("div",x,[B,t("div",null,[S,e(" "+n(i(m).name)+" ",1),V,$,e(" "+n(i(m).public_repos),1)])]),t("div",k,[E,t("div",null,[H,e(" "+n((y=i(u))==null?void 0:y.name)+" ",1),N,R,e(" "+n((f=i(u))==null?void 0:f.description),1)])]),t("div",null,[D,t("div",X,[(d(!0),h(A,null,C(i(g),c=>(d(),h("div",{key:c.author.login},[t("div",j,[t("img",{class:"profile-image",src:c.author.avatar_url},null,8,L),t("h3",null,n(c.author.login),1),t("p",null,[M,e(" "+n(c.total),1)])])]))),128))])])])}}};export{I as default};
