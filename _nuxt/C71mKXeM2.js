import{D as e,St as t,Zn as n,_ as r,b as i,bt as a,et as o,mt as s,o as c,tr as l,v as u,wt as d,xt as f,y as p}from"./B4b-2GOK.js";import{t as m}from"./E-knF-Z8.js";import{t as h}from"./BLEQZSpC.js";import{t as g}from"./De7QYr8X2.js";var _=m.extend({name:`breadcrumb`,style:`
    .p-breadcrumb {
        background: dt('breadcrumb.background');
        padding: dt('breadcrumb.padding');
        overflow-x: auto;
    }

    .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: dt('breadcrumb.gap');
    }

    .p-breadcrumb-separator {
        display: flex;
        align-items: center;
        color: dt('breadcrumb.separator.color');
    }

    .p-breadcrumb-separator-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }

    .p-breadcrumb-item-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: dt('breadcrumb.item.gap');
        transition:
            background dt('breadcrumb.transition.duration'),
            color dt('breadcrumb.transition.duration'),
            outline-color dt('breadcrumb.transition.duration'),
            box-shadow dt('breadcrumb.transition.duration');
        border-radius: dt('breadcrumb.item.border.radius');
        outline-color: transparent;
        color: dt('breadcrumb.item.color');
    }

    .p-breadcrumb-item-link:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
        color: dt('breadcrumb.item.hover.color');
    }

    .p-breadcrumb-item-label {
        transition: inherit;
    }

    .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.color');
        transition: inherit;
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.hover.color');
    }
`,classes:{root:`p-breadcrumb p-component`,list:`p-breadcrumb-list`,homeItem:`p-breadcrumb-home-item`,separator:`p-breadcrumb-separator`,separatorIcon:`p-breadcrumb-separator-icon`,item:function(e){return[`p-breadcrumb-item`,{"p-disabled":e.instance.disabled()}]},itemLink:`p-breadcrumb-item-link`,itemIcon:`p-breadcrumb-item-icon`,itemLabel:`p-breadcrumb-item-label`}}),v={name:`BaseBreadcrumb`,extends:h,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:_,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},y={name:`BreadcrumbItem`,hostName:`Breadcrumb`,extends:h,props:{item:null,templates:null,index:null},methods:{onClick:function(e){this.item.command&&this.item.command({originalEvent:e,item:this.item})},visible:function(){return typeof this.item.visible==`function`?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled==`function`?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label==`function`?this.item.label():this.item.label},isCurrentUrl:function(){var e=this.item,t=e.to,n=e.url,r=typeof window<`u`?window.location.pathname:``;return t===r||n===r?`page`:void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var e=this;return{action:o({class:this.cx(`itemLink`),"aria-current":this.isCurrentUrl(),onClick:function(t){return e.onClick(t)}},this.ptm(`itemLink`,this.ptmOptions)),icon:o({class:[this.cx(`icon`),this.item.icon]},this.ptm(`icon`,this.ptmOptions)),label:o({class:this.cx(`label`)},this.ptm(`label`,this.ptmOptions))}}}},b=[`href`,`target`,`aria-current`];function x(e,t,r,a,c,f){return f.visible()?(s(),i(`li`,o({key:0,class:[e.cx(`item`),r.item.class]},e.ptm(`item`,f.ptmOptions)),[r.templates.item?(s(),u(d(r.templates.item),{key:1,item:r.item,label:f.label(),props:f.getMenuItemProps},null,8,[`item`,`label`,`props`])):(s(),i(`a`,o({key:0,href:r.item.url||`#`,class:e.cx(`itemLink`),target:r.item.target,"aria-current":f.isCurrentUrl(),onClick:t[0]||=function(){return f.onClick&&f.onClick.apply(f,arguments)}},e.ptm(`itemLink`,f.ptmOptions)),[r.templates&&r.templates.itemicon?(s(),u(d(r.templates.itemicon),{key:0,item:r.item,class:n(e.cx(`itemIcon`,f.ptmOptions))},null,8,[`item`,`class`])):r.item.icon?(s(),i(`span`,o({key:1,class:[e.cx(`itemIcon`),r.item.icon]},e.ptm(`itemIcon`,f.ptmOptions)),null,16)):p(``,!0),r.item.label?(s(),i(`span`,o({key:2,class:e.cx(`itemLabel`)},e.ptm(`itemLabel`,f.ptmOptions)),l(f.label()),17)):p(``,!0)],16,b))],16)):p(``,!0)}y.render=x;var S={name:`Breadcrumb`,extends:v,inheritAttrs:!1,components:{BreadcrumbItem:y,ChevronRightIcon:g}};function C(n,l,d,m,h,g){var _=t(`BreadcrumbItem`),v=t(`ChevronRightIcon`);return s(),i(`nav`,o({class:n.cx(`root`)},n.ptmi(`root`)),[r(`ol`,o({class:n.cx(`list`)},n.ptm(`list`)),[n.home?(s(),u(_,o({key:0,item:n.home,class:n.cx(`homeItem`),templates:n.$slots,pt:n.pt,unstyled:n.unstyled},n.ptm(`homeItem`)),null,16,[`item`,`class`,`templates`,`pt`,`unstyled`])):p(``,!0),(s(!0),i(c,null,a(n.model,function(t,r){return s(),i(c,{key:t.label+`_`+r},[n.home||r!==0?(s(),i(`li`,o({key:0,class:n.cx(`separator`)},{ref_for:!0},n.ptm(`separator`)),[f(n.$slots,`separator`,{},function(){return[e(v,o({"aria-hidden":`true`,class:n.cx(`separatorIcon`)},{ref_for:!0},n.ptm(`separatorIcon`)),null,16,[`class`])]})],16)):p(``,!0),e(_,{item:t,index:r,templates:n.$slots,pt:n.pt,unstyled:n.unstyled},null,8,[`item`,`index`,`templates`,`pt`,`unstyled`])],64)}),128))],16)],16)}S.render=C;export{S as default};