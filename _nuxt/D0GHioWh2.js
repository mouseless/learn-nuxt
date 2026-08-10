import{Ct as e,D as t,E as n,St as r,Yt as i,Zn as a,_ as o,b as s,bt as c,et as l,mt as u,o as d,qt as f,tr as p,v as m,wt as h,xt as g,y as _}from"./B4b-2GOK.js";import{t as v}from"./C_cSr8y_.js";import{B as y,D as b,F as x,P as S,Q as C,et as w,l as T,t as E,xt as D}from"./E-knF-Z8.js";import{t as O}from"./CRHlWn3X.js";import{t as k}from"./cO8iUN-n.js";import{t as A}from"./BLEQZSpC.js";import{t as j}from"./CIQ8XXnq.js";import{t as M}from"./Cs-vlDTI2.js";import{t as N}from"./BowMBMYF2.js";import{t as P}from"./DeLe6iDN2.js";var F=E.extend({name:`menu`,style:`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`,classes:{root:function(e){return[`p-menu p-component`,{"p-menu-overlay":e.props.popup}]},start:`p-menu-start`,list:`p-menu-list`,submenuLabel:`p-menu-submenu-label`,separator:`p-menu-separator`,end:`p-menu-end`,item:function(e){var t=e.instance;return[`p-menu-item`,{"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}]},itemContent:`p-menu-item-content`,itemLink:`p-menu-item-link`,itemIcon:`p-menu-item-icon`,itemLabel:`p-menu-item-label`}}),I={name:`BaseMenu`,extends:A,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:`body`},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:F,provide:function(){return{$pcMenu:this,$parentInstance:this}}},L={name:`Menuitem`,hostName:`Menu`,extends:A,inheritAttrs:!1,emits:[`item-click`,`item-mousemove`],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,t){return e&&e.item?D(e.item[t]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var t=this.getItemProp(this.item,`command`);t&&t({originalEvent:e,item:this.item.item}),this.$emit(`item-click`,{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit(`item-mousemove`,{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible==`function`?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled==`function`?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label==`function`?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:l({class:this.cx(`itemLink`),tabindex:`-1`},this.getPTOptions(`itemLink`)),icon:l({class:[this.cx(`itemIcon`),e.icon]},this.getPTOptions(`itemIcon`)),label:l({class:this.cx(`itemLabel`)},this.getPTOptions(`itemLabel`))}}},computed:{dataP:function(){return O({focus:this.isItemFocused(),disabled:this.disabled()})}},directives:{ripple:j}},R=[`id`,`aria-label`,`aria-disabled`,`data-p-focused`,`data-p-disabled`,`data-p`],z=[`data-p`],B=[`href`,`target`],V=[`data-p`],H=[`data-p`];function U(t,n,r,c,d,f){var g=e(`ripple`);return f.visible()?(u(),s(`li`,l({key:0,id:r.id,class:[t.cx(`item`),r.item.class],role:`menuitem`,style:r.item.style,"aria-label":f.label(),"aria-disabled":f.disabled(),"data-p-focused":f.isItemFocused(),"data-p-disabled":f.disabled()||!1,"data-p":f.dataP},f.getPTOptions(`item`)),[o(`div`,l({class:t.cx(`itemContent`),onClick:n[0]||=function(e){return f.onItemClick(e)},onMousemove:n[1]||=function(e){return f.onItemMouseMove(e)},"data-p":f.dataP},f.getPTOptions(`itemContent`)),[r.templates.item?r.templates.item?(u(),m(h(r.templates.item),{key:1,item:r.item,label:f.label(),props:f.getMenuItemProps(r.item)},null,8,[`item`,`label`,`props`])):_(``,!0):i((u(),s(`a`,l({key:0,href:r.item.url,class:t.cx(`itemLink`),target:r.item.target,tabindex:`-1`},f.getPTOptions(`itemLink`)),[r.templates.itemicon?(u(),m(h(r.templates.itemicon),{key:0,item:r.item,class:a(t.cx(`itemIcon`))},null,8,[`item`,`class`])):r.item.icon?(u(),s(`span`,l({key:1,class:[t.cx(`itemIcon`),r.item.icon],"data-p":f.dataP},f.getPTOptions(`itemIcon`)),null,16,V)):_(``,!0),o(`span`,l({class:t.cx(`itemLabel`),"data-p":f.dataP},f.getPTOptions(`itemLabel`)),p(f.label()),17,H)],16,B)),[[g]])],16,z)],16,R)):_(``,!0)}L.render=U;function W(e){return J(e)||q(e)||K(e)||G()}function G(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(e,t){if(e){if(typeof e==`string`)return Y(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}function q(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function J(e){if(Array.isArray(e))return Y(e)}function Y(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var X={name:`Menu`,extends:I,inheritAttrs:!1,emits:[`show`,`hide`,`focus`,`blur`],data:function(){return{overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&=(this.scrollHandler.destroy(),null),this.target=null,this.container&&this.autoZIndex&&k.clear(this.container),this.container=null},methods:{itemClick:function(e){var t=e.item;this.disabled(t)||(this.overlayVisible&&this.hide(),t.command&&t.command(e),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit(`focus`,e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit(`blur`,e)},onListKeyDown:function(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Space`:this.onSpaceKey(e);break;case`Escape`:this.popup&&(y(this.target),this.hide());case`Tab`:this.overlayVisible&&this.hide()}},onArrowDownKey:function(e){var t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)y(this.target),this.hide(),e.preventDefault();else{var t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(S(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`).length-1),e.preventDefault()},onEnterKey:function(e){var t=w(this.list,`li[id="${`${this.focusedOptionIndex}`}"]`),n=t&&w(t,`a[data-pc-section="itemlink"]`);this.popup&&y(this.target),n?n.click():t&&t.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var t=W(S(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`)).findIndex(function(t){return t.id===e});return t>-1?t+1:0},findPrevOptionIndex:function(e){var t=W(S(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`)).findIndex(function(t){return t.id===e});return t>-1?t-1:0},changeFocusedOptionIndex:function(e){var t=S(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`),n=e>=t.length?t.length-1:e<0?0:e;n>-1&&(this.focusedOptionIndex=t[n].getAttribute(`id`))},toggle:function(e,t){this.overlayVisible?this.hide():this.show(e,t)},show:function(e,t){this.overlayVisible=!0,this.target=t??e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){b(e,{position:`absolute`,top:`0`}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&k.set(`menu`,e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&y(this.list),this.$emit(`show`)},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit(`hide`)},onAfterLeave:function(e){this.autoZIndex&&k.clear(e)},alignOverlay:function(){T(this.container,this.target),C(this.target)>C(this.container)&&(this.container.style.minWidth=C(this.target)+`px`)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var n=e.container&&!e.container.contains(t.target),r=!(e.target&&(e.target===t.target||e.target.contains(t.target)));e.overlayVisible&&n&&r?e.hide():!e.popup&&n&&r&&(e.focusedOptionIndex=-1)},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},bindScrollListener:function(){var e=this;this.scrollHandler||=new N(this.target,function(){e.overlayVisible&&e.hide()}),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!x()&&e.hide()},window.addEventListener(`resize`,this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&=(window.removeEventListener(`resize`,this.resizeListener),null)},visible:function(e){return typeof e.visible==`function`?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled==`function`?e.disabled():e.disabled},label:function(e){return typeof e.label==`function`?e.label():e.label},onOverlayClick:function(e){P.emit(`overlay-click`,{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex===-1?null:this.focusedOptionIndex},dataP:function(){return O({popup:this.popup})}},components:{PVMenuitem:L,Portal:M}},Z=[`id`,`data-p`],Q=[`id`,`tabindex`,`aria-activedescendant`,`aria-label`,`aria-labelledby`],$=[`id`];function ee(e,i,a,h,y,b){var x=r(`PVMenuitem`),S=r(`Portal`);return u(),m(S,{appendTo:e.appendTo,disabled:!e.popup},{default:f(function(){return[t(v,l({name:`p-connected-overlay`,onEnter:b.onEnter,onLeave:b.onLeave,onAfterLeave:b.onAfterLeave},e.ptm(`transition`)),{default:f(function(){return[!e.popup||y.overlayVisible?(u(),s(`div`,l({key:0,ref:b.containerRef,id:e.$id,class:e.cx(`root`),onClick:i[3]||=function(){return b.onOverlayClick&&b.onOverlayClick.apply(b,arguments)},"data-p":b.dataP},e.ptmi(`root`)),[e.$slots.start?(u(),s(`div`,l({key:0,class:e.cx(`start`)},e.ptm(`start`)),[g(e.$slots,`start`)],16)):_(``,!0),o(`ul`,l({ref:b.listRef,id:e.$id+`_list`,class:e.cx(`list`),role:`menu`,tabindex:e.tabindex,"aria-activedescendant":y.focused?b.focusedOptionId:void 0,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,onFocus:i[0]||=function(){return b.onListFocus&&b.onListFocus.apply(b,arguments)},onBlur:i[1]||=function(){return b.onListBlur&&b.onListBlur.apply(b,arguments)},onKeydown:i[2]||=function(){return b.onListKeyDown&&b.onListKeyDown.apply(b,arguments)}},e.ptm(`list`)),[(u(!0),s(d,null,c(e.model,function(t,r){return u(),s(d,{key:b.label(t)+r.toString()},[t.items&&b.visible(t)&&!t.separator?(u(),s(d,{key:0},[t.items?(u(),s(`li`,l({key:0,id:e.$id+`_`+r,class:[e.cx(`submenuLabel`),t.class],role:`none`},{ref_for:!0},e.ptm(`submenuLabel`)),[g(e.$slots,e.$slots.submenulabel?`submenulabel`:`submenuheader`,{item:t},function(){return[n(p(b.label(t)),1)]})],16,$)):_(``,!0),(u(!0),s(d,null,c(t.items,function(n,i){return u(),s(d,{key:n.label+r+`_`+i},[b.visible(n)&&!n.separator?(u(),m(x,{key:0,id:e.$id+`_`+r+`_`+i,item:n,templates:e.$slots,focusedOptionId:b.focusedOptionId,unstyled:e.unstyled,onItemClick:b.itemClick,onItemMousemove:b.itemMouseMove,pt:e.pt},null,8,[`id`,`item`,`templates`,`focusedOptionId`,`unstyled`,`onItemClick`,`onItemMousemove`,`pt`])):b.visible(n)&&n.separator?(u(),s(`li`,l({key:`separator`+r+i,class:[e.cx(`separator`),t.class],style:n.style,role:`separator`},{ref_for:!0},e.ptm(`separator`)),null,16)):_(``,!0)],64)}),128))],64)):b.visible(t)&&t.separator?(u(),s(`li`,l({key:`separator`+r.toString(),class:[e.cx(`separator`),t.class],style:t.style,role:`separator`},{ref_for:!0},e.ptm(`separator`)),null,16)):(u(),m(x,{key:b.label(t)+r.toString(),id:e.$id+`_`+r,item:t,index:r,templates:e.$slots,focusedOptionId:b.focusedOptionId,unstyled:e.unstyled,onItemClick:b.itemClick,onItemMousemove:b.itemMouseMove,pt:e.pt},null,8,[`id`,`item`,`index`,`templates`,`focusedOptionId`,`unstyled`,`onItemClick`,`onItemMousemove`,`pt`]))],64)}),128))],16,Q),e.$slots.end?(u(),s(`div`,l({key:1,class:e.cx(`end`)},e.ptm(`end`)),[g(e.$slots,`end`)],16)):_(``,!0)],16,Z)):_(``,!0)]}),_:3},16,[`onEnter`,`onLeave`,`onAfterLeave`])]}),_:3},8,[`appendTo`,`disabled`])}X.render=ee;export{X as default};