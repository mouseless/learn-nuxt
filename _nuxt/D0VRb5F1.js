import{Ct as e,D as t,St as n,Yt as r,Zn as i,_ as a,b as o,bt as s,et as c,mt as l,o as u,v as d,wt as f}from"./B4b-2GOK.js";import{P as p,et as m,t as h,xt as g}from"./E-knF-Z8.js";import{t as _}from"./BLEQZSpC.js";import{t as v}from"./CIQ8XXnq.js";import{t as y}from"./DUoejyo4.js";var b=h.extend({name:`dock`,style:`
    .p-dock {
        position: absolute;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
    }

    .p-dock-list-container {
        display: flex;
        pointer-events: auto;
        background: dt('dock.background');
        border: 1px solid dt('dock.border.color');
        padding: dt('dock.padding');
        border-radius: dt('dock.border.radius');
    }

    .p-dock-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: 0 none;
    }

    .p-dock-item {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
        padding: dt('dock.item.padding');
        border-radius: dt('dock.item.border.radius');
    }

    .p-dock-item.p-focus {
        box-shadow: dt('dock.item.focus.ring.shadow');
        outline: dt('dock.item.focus.ring.width') dt('dock.item.focus.ring.style') dt('dock.item.focus.ring.color');
        outline-offset: dt('dock.item.focus.ring.offset');
    }

    .p-dock-item-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        cursor: default;
        width: dt('dock.item.size');
        height: dt('dock.item.size');
    }

    .p-dock-top {
        left: 0;
        top: 0;
        width: 100%;
    }

    .p-dock-bottom {
        left: 0;
        bottom: 0;
        width: 100%;
    }

    .p-dock-right {
        right: 0;
        top: 0;
        height: 100%;
    }

    .p-dock-right .p-dock-list {
        flex-direction: column;
    }

    .p-dock-left {
        left: 0;
        top: 0;
        height: 100%;
    }

    .p-dock-left .p-dock-list {
        flex-direction: column;
    }

    .p-dock-mobile.p-dock-top .p-dock-list-container,
    .p-dock-mobile.p-dock-bottom .p-dock-list-container {
        overflow-x: auto;
        width: 100%;
    }

    .p-dock-mobile.p-dock-top .p-dock-list-container .p-dock-list,
    .p-dock-mobile.p-dock-bottom .p-dock-list-container .p-dock-list {
        margin: 0 auto;
    }

    .p-dock-mobile.p-dock-left .p-dock-list-container,
    .p-dock-mobile.p-dock-right .p-dock-list-container {
        overflow-y: auto;
        height: 100%;
    }

    .p-dock-mobile.p-dock-left .p-dock-list-container .p-dock-list,
    .p-dock-mobile.p-dock-right .p-dock-list-container .p-dock-list {
        margin: auto 0;
    }

    .p-dock-mobile .p-dock-list .p-dock-item {
        transform: none;
        margin: 0;
    }
`,classes:{root:function(e){var t=e.instance;return[`p-dock p-component`,`p-dock-${e.props.position}`,{"p-dock-mobile":t.queryMatches}]},listContainer:`p-dock-list-container`,list:`p-dock-list`,item:function(e){var t=e.instance,n=e.processedItem,r=e.id;return[`p-dock-item`,{"p-focus":t.isItemActive(r),"p-disabled":t.disabled(n)}]},itemContent:`p-dock-item-content`,itemLink:`p-dock-item-link`,itemIcon:`p-dock-item-icon`}}),x={name:`BaseDock`,extends:_,props:{position:{type:String,default:`bottom`},model:null,class:null,style:null,tooltipOptions:null,menuId:{type:String,default:null},tabindex:{type:Number,default:0},breakpoint:{type:String,default:`960px`},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:b,provide:function(){return{$pcDock:this,$parentInstance:this}}};function S(e){return E(e)||T(e)||w(e)||C()}function C(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(e,t){if(e){if(typeof e==`string`)return D(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}function T(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function E(e){if(Array.isArray(e))return D(e)}function D(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var O={name:`DockSub`,hostName:`Dock`,extends:_,emits:[`focus`,`blur`],props:{position:{type:String,default:`bottom`},model:{type:Array,default:null},templates:{type:null,default:null},tooltipOptions:null,menuId:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},data:function(){return{currentIndex:-3,focused:!1,focusedOptionIndex:-1}},methods:{getItemId:function(e){return`${this.idx}_${e}`},getItemProp:function(e,t){return e&&e.item?g(e.item[t]):void 0},getPTOptions:function(e,t,n){return this.ptm(e,{context:{index:n,item:t,active:this.isItemActive(this.getItemId(n))}})},isSameMenuItem:function(e){return e.currentTarget&&(e.currentTarget.isSameNode(e.target)||e.currentTarget.isSameNode(e.target.closest(`[data-pc-section="item"]`)))},isItemActive:function(e){return e===this.focusedOptionIndex},onListMouseLeave:function(){this.currentIndex=-3},onItemMouseEnter:function(e){this.currentIndex=e},onItemClick:function(e,t){if(this.isSameMenuItem(e)){var n=this.getItemProp(t,`command`);n&&n({originalEvent:e,item:t.item})}},onListFocus:function(e){this.focused=!0,this.changeFocusedOptionIndex(0),this.$emit(`focus`,e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit(`blur`,e)},onListKeyDown:function(e){switch(e.code){case`ArrowDown`:(this.position===`left`||this.position===`right`)&&this.onArrowDownKey(),e.preventDefault();break;case`ArrowUp`:(this.position===`left`||this.position===`right`)&&this.onArrowUpKey(),e.preventDefault();break;case`ArrowRight`:(this.position===`top`||this.position===`bottom`)&&this.onArrowDownKey(),e.preventDefault();break;case`ArrowLeft`:(this.position===`top`||this.position===`bottom`)&&this.onArrowUpKey(),e.preventDefault();break;case`Home`:this.onHomeKey(),e.preventDefault();break;case`End`:this.onEndKey(),e.preventDefault();break;case`Enter`:case`NumpadEnter`:case`Space`:this.onSpaceKey(e),e.preventDefault()}},onArrowDownKey:function(){var e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)},onArrowUpKey:function(){var e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)},onHomeKey:function(){this.changeFocusedOptionIndex(0)},onEndKey:function(){this.changeFocusedOptionIndex(p(this.$refs.list,`li[data-pc-section="item"][data-p-disabled="false"]`).length-1)},onSpaceKey:function(){var e=m(this.$refs.list,`li[id="${`${this.focusedOptionIndex}`}"]`),t=e&&m(e,`[data-pc-section="itemlink"]`);t?t.click():e&&e.click()},findNextOptionIndex:function(e){var t=S(p(this.$refs.list,`li[data-pc-section="item"][data-p-disabled="false"]`)).findIndex(function(t){return t.id===e});return t>-1?t+1:0},findPrevOptionIndex:function(e){var t=S(p(this.$refs.list,`li[data-pc-section="item"][data-p-disabled="false"]`)).findIndex(function(t){return t.id===e});return t>-1?t-1:0},changeFocusedOptionIndex:function(e){var t=p(this.$refs.list,`li[data-pc-section="item"][data-p-disabled="false"]`),n=e>=t.length?t.length-1:e<0?0:e;this.focusedOptionIndex=t[n].getAttribute(`id`)},disabled:function(e){return typeof e.disabled==`function`?e.disabled():e.disabled},getMenuItemProps:function(e,t){return{action:c({tabindex:-1,class:this.cx(`itemLink`)},this.getPTOptions(`itemLink`,e,t)),icon:c({class:[this.cx(`itemIcon`),e.icon]},this.getPTOptions(`itemIcon`,e,t))}}},computed:{focusedOptionId:function(){return this.focusedOptionIndex===-1?null:this.focusedOptionIndex},idx:function(){return this.menuId||this.$id}},directives:{ripple:v,tooltip:y}},k=[`id`,`aria-orientation`,`aria-activedescendant`,`tabindex`,`aria-label`,`aria-labelledby`],A=[`id`,`aria-label`,`aria-disabled`,`onClick`,`onMouseenter`,`data-p-focused`,`data-p-disabled`],j=[`href`,`target`];function M(t,n,p,m,h,g){var _=e(`ripple`),v=e(`tooltip`);return l(),o(`div`,c({class:t.cx(`listContainer`)},t.ptm(`listContainer`)),[a(`ul`,c({ref:`list`,id:g.idx,class:t.cx(`list`),role:`menu`,"aria-orientation":p.position===`bottom`||p.position===`top`?`horizontal`:`vertical`,"aria-activedescendant":h.focused?g.focusedOptionId:void 0,tabindex:p.tabindex,"aria-label":p.ariaLabel,"aria-labelledby":p.ariaLabelledby,onFocus:n[0]||=function(){return g.onListFocus&&g.onListFocus.apply(g,arguments)},onBlur:n[1]||=function(){return g.onListBlur&&g.onListBlur.apply(g,arguments)},onKeydown:n[2]||=function(){return g.onListKeyDown&&g.onListKeyDown.apply(g,arguments)},onMouseleave:n[3]||=function(){return g.onListMouseLeave&&g.onListMouseLeave.apply(g,arguments)}},t.ptm(`list`)),[(l(!0),o(u,null,s(p.model,function(e,n){return l(),o(`li`,c({key:n,id:g.getItemId(n),class:t.cx(`item`,{processedItem:e,id:g.getItemId(n)}),role:`menuitem`,"aria-label":e.label,"aria-disabled":g.disabled(e),onClick:function(t){return g.onItemClick(t,e)},onMouseenter:function(e){return g.onItemMouseEnter(n)}},{ref_for:!0},g.getPTOptions(`item`,e,n),{"data-p-focused":g.isItemActive(g.getItemId(n)),"data-p-disabled":g.disabled(e)||!1}),[a(`div`,c({class:t.cx(`itemContent`)},{ref_for:!0},g.getPTOptions(`itemContent`,e,n)),[p.templates.item?(l(),d(f(p.templates.item),{key:1,item:e,index:n,label:e.label,props:g.getMenuItemProps(e,n)},null,8,[`item`,`index`,`label`,`props`])):r((l(),o(`a`,c({key:0,href:e.url,class:t.cx(`itemLink`),target:e.target,tabindex:`-1`},{ref_for:!0},g.getPTOptions(`itemLink`,e,n)),[!p.templates.icon&&!p.templates.itemicon?r((l(),o(`span`,c({key:0,class:[t.cx(`itemIcon`),e.icon]},{ref_for:!0},g.getPTOptions(`itemIcon`,e,n)),null,16)),[[_]]):(l(),d(f(p.templates.icon||p.templates.itemicon),{key:1,item:e,class:i(t.cx(`itemIcon`))},null,8,[`item`,`class`]))],16,j)),[[v,{value:e.label,disabled:!p.tooltipOptions},p.tooltipOptions]])],16)],16,A)}),128))],16,k)],16)}O.render=M;var N={name:`Dock`,extends:x,inheritAttrs:!1,matchMediaListener:null,data:function(){return{query:null,queryMatches:!1}},mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.unbindMatchMediaListener()},methods:{bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia(`(max-width: ${this.breakpoint})`);this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches,e.mobileActive=!1},this.query.addEventListener(`change`,this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&=(this.query.removeEventListener(`change`,this.matchMediaListener),null)}},computed:{containerClass:function(){return[this.class,this.cx(`root`)]}},components:{DockSub:O}};function P(e,r,i,a,s,u){var d=n(`DockSub`);return l(),o(`div`,c({class:u.containerClass,style:e.style},e.ptmi(`root`)),[t(d,{model:e.model,templates:e.$slots,tooltipOptions:e.tooltipOptions,position:e.position,menuId:e.menuId,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,tabindex:e.tabindex,pt:e.pt,unstyled:e.unstyled},null,8,[`model`,`templates`,`tooltipOptions`,`position`,`menuId`,`aria-label`,`aria-labelledby`,`tabindex`,`pt`,`unstyled`])],16)}N.render=P;export{N as default};