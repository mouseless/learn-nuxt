import{Q as t,r as h,c as i,a as e,b as l,t as s,u as r,F as N,o as d}from"./CY6SFX_I.js";const J={__name:"with-ref",setup(p){let a="John";const u=()=>a=a==="John"?"Richard":"John",c=t(()=>`${a} Doe`),o=h("John"),m=()=>o.value=o.value==="John"?"Richard":"John",f=t(()=>`${o.value} Doe`);return(R,n)=>(d(),i(N,null,[e("div",null,[n[0]||(n[0]=e("h1",null,"No Ref",-1)),e("button",{onClick:u}," Change Name "),l(" "+s(r(c)),1)]),e("div",null,[n[1]||(n[1]=e("h1",null,"Ref",-1)),e("button",{onClick:m}," Change Name "),l(" "+s(r(f)),1)])],64))}};export{J as default};
