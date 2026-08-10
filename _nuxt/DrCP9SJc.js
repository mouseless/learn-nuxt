import{Ct as e,D as t,St as n,Yt as r,Zn as i,_ as a,b as o,bt as s,et as c,mt as l,o as u,qt as d,tr as f,v as p,wt as m,xt as h,y as g}from"./B4b-2GOK.js";import{t as _}from"./C_cSr8y_.js";import{B as v,D as y,F as b,Q as x,Tt as S,bt as C,ct as w,et as T,l as E,st as D,t as O,tt as k,xt as A}from"./E-knF-Z8.js";import{t as j}from"./cO8iUN-n.js";import{t as M}from"./BLEQZSpC.js";import{t as N}from"./CIQ8XXnq.js";import{t as P}from"./Cs-vlDTI2.js";import{t as F}from"./BowMBMYF2.js";import{t as I}from"./DeLe6iDN2.js";import{t as L}from"./C9niURxP.js";var R=O.extend({name:`tieredmenu`,style:`
    .p-tieredmenu {
        background: dt('tieredmenu.background');
        color: dt('tieredmenu.color');
        border: 1px solid dt('tieredmenu.border.color');
        border-radius: dt('tieredmenu.border.radius');
        min-width: 12.5rem;
    }

    .p-tieredmenu-root-list,
    .p-tieredmenu-submenu {
        margin: 0;
        padding: dt('tieredmenu.list.padding');
        list-style: none;
        outline: 0 none;
        display: flex;
        flex-direction: column;
        gap: dt('tieredmenu.list.gap');
    }

    .p-tieredmenu-submenu {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        background: dt('tieredmenu.background');
        color: dt('tieredmenu.color');
        border: 1px solid dt('tieredmenu.border.color');
        border-radius: dt('tieredmenu.border.radius');
        box-shadow: dt('tieredmenu.shadow');
    }

    .p-tieredmenu-item {
        position: relative;
    }

    .p-tieredmenu-item-content {
        transition:
            background dt('tieredmenu.transition.duration'),
            color dt('tieredmenu.transition.duration');
        border-radius: dt('tieredmenu.item.border.radius');
        color: dt('tieredmenu.item.color');
    }

    .p-tieredmenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('tieredmenu.item.padding');
        gap: dt('tieredmenu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-tieredmenu-item-label {
        line-height: 1;
    }

    .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.color');
    }

    .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.color');
        margin-left: auto;
        font-size: dt('tieredmenu.submenu.icon.size');
        width: dt('tieredmenu.submenu.icon.size');
        height: dt('tieredmenu.submenu.icon.size');
    }

    .p-tieredmenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {
        color: dt('tieredmenu.item.focus.color');
        background: dt('tieredmenu.item.focus.background');
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.focus.color');
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.focus.color');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {
        color: dt('tieredmenu.item.focus.color');
        background: dt('tieredmenu.item.focus.background');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.focus.color');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.focus.color');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content {
        color: dt('tieredmenu.item.active.color');
        background: dt('tieredmenu.item.active.background');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.active.color');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.active.color');
    }

    .p-tieredmenu-separator {
        border-block-start: 1px solid dt('tieredmenu.separator.border.color');
    }

    .p-tieredmenu-overlay {
        box-shadow: dt('tieredmenu.shadow');
    }

    .p-tieredmenu-enter-from,
    .p-tieredmenu-leave-active {
        opacity: 0;
    }

    .p-tieredmenu-enter-active {
        transition: opacity 250ms;
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu {
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('tieredmenu.submenu.mobile.indent');
        padding-inline-end: 0;
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu:dir(rtl) {
        padding-inline-start: 0;
        padding-inline-end: dt('tieredmenu.submenu.mobile.indent');
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-tieredmenu-mobile .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        transform: rotate(-90deg);
    }
`,classes:{root:function(e){var t=e.props,n=e.instance;return[`p-tieredmenu p-component`,{"p-tieredmenu-overlay":t.popup,"p-tieredmenu-mobile":n.queryMatches}]},start:`p-tieredmenu-start`,rootList:`p-tieredmenu-root-list`,item:function(e){var t=e.instance,n=e.processedItem;return[`p-tieredmenu-item`,{"p-tieredmenu-item-active":t.isItemActive(n),"p-focus":t.isItemFocused(n),"p-disabled":t.isItemDisabled(n)}]},itemContent:`p-tieredmenu-item-content`,itemLink:`p-tieredmenu-item-link`,itemIcon:`p-tieredmenu-item-icon`,itemLabel:`p-tieredmenu-item-label`,submenuIcon:`p-tieredmenu-submenu-icon`,submenu:`p-tieredmenu-submenu`,separator:`p-tieredmenu-separator`,end:`p-tieredmenu-end`},inlineStyles:{submenu:function(e){var t=e.instance,n=e.processedItem;return{display:t.isItemActive(n)?`flex`:`none`}}}}),z={name:`BaseTieredMenu`,extends:M,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:`body`},breakpoint:{type:String,default:`960px`},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:R,provide:function(){return{$pcTieredMenu:this,$parentInstance:this}}},B={name:`TieredMenuSub`,hostName:`TieredMenu`,extends:M,emits:[`item-click`,`item-mouseenter`,`item-mousemove`],container:null,props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return`${this.menuId}_${e.key}`},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,n){return e&&e.item?A(e.item[t],n):void 0},getItemLabel:function(e){return this.getItemProp(e,`label`)},getItemLabelId:function(e){return`${this.menuId}_${e.key}_label`},getPTOptions:function(e,t,n){return this.ptm(n,{context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,`visible`)!==!1},isItemDisabled:function(e){return this.getItemProp(e,`disabled`)},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return S(e.items)},onEnter:function(){k(this.container,this.level)},onItemClick:function(e,t){this.getItemProp(t,`command`,{originalEvent:e,item:t.item}),this.$emit(`item-click`,{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit(`item-mouseenter`,{originalEvent:e,processedItem:t})},onItemMouseMove:function(e,t){this.$emit(`item-mousemove`,{originalEvent:e,processedItem:t})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,`separator`)}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(e){return t.isItemVisible(e)&&t.getItemProp(e,`separator`)}).length+1},getMenuItemProps:function(e,t){return{action:c({class:this.cx(`itemLink`),tabindex:-1},this.getPTOptions(e,t,`itemLink`)),icon:c({class:[this.cx(`itemIcon`),this.getItemProp(e,`icon`)]},this.getPTOptions(e,t,`itemIcon`)),label:c({class:this.cx(`itemLabel`)},this.getPTOptions(e,t,`itemLabel`)),submenuicon:c({class:this.cx(`submenuIcon`)},this.getPTOptions(e,t,`submenuIcon`))}},containerRef:function(e){this.container=e}},components:{AngleRightIcon:L},directives:{ripple:N}},V=[`tabindex`],H=[`id`,`aria-label`,`aria-disabled`,`aria-expanded`,`aria-haspopup`,`aria-level`,`aria-setsize`,`aria-posinset`,`data-p-active`,`data-p-focused`,`data-p-disabled`],U=[`onClick`,`onMouseenter`,`onMousemove`],W=[`href`,`target`],G=[`id`],K=[`id`];function q(t,h,v,y,b,x){var S=n(`AngleRightIcon`),C=n(`TieredMenuSub`,!0),w=e(`ripple`);return l(),p(_,c({name:`p-tieredmenu`,onEnter:x.onEnter},t.ptm(`menu.transition`)),{default:d(function(){return[v.level===0||v.visible?(l(),o(`ul`,{key:0,ref:x.containerRef,tabindex:v.tabindex},[(l(!0),o(u,null,s(v.items,function(e,n){return l(),o(u,{key:x.getItemKey(e)},[x.isItemVisible(e)&&!x.getItemProp(e,`separator`)?(l(),o(`li`,c({key:0,id:x.getItemId(e),style:x.getItemProp(e,`style`),class:[t.cx(`item`,{processedItem:e}),x.getItemProp(e,`class`)],role:`menuitem`,"aria-label":x.getItemLabel(e),"aria-disabled":x.isItemDisabled(e)||void 0,"aria-expanded":x.isItemGroup(e)?x.isItemActive(e):void 0,"aria-haspopup":x.isItemGroup(e)&&!x.getItemProp(e,`to`)?`menu`:void 0,"aria-level":v.level+1,"aria-setsize":x.getAriaSetSize(),"aria-posinset":x.getAriaPosInset(n)},{ref_for:!0},x.getPTOptions(e,n,`item`),{"data-p-active":x.isItemActive(e),"data-p-focused":x.isItemFocused(e),"data-p-disabled":x.isItemDisabled(e)}),[a(`div`,c({class:t.cx(`itemContent`),onClick:function(t){return x.onItemClick(t,e)},onMouseenter:function(t){return x.onItemMouseEnter(t,e)},onMousemove:function(t){return x.onItemMouseMove(t,e)}},{ref_for:!0},x.getPTOptions(e,n,`itemContent`)),[v.templates.item?(l(),p(m(v.templates.item),{key:1,item:e.item,hasSubmenu:x.getItemProp(e,`items`),label:x.getItemLabel(e),props:x.getMenuItemProps(e,n)},null,8,[`item`,`hasSubmenu`,`label`,`props`])):r((l(),o(`a`,c({key:0,href:x.getItemProp(e,`url`),class:t.cx(`itemLink`),target:x.getItemProp(e,`target`),tabindex:`-1`},{ref_for:!0},x.getPTOptions(e,n,`itemLink`)),[v.templates.itemicon?(l(),p(m(v.templates.itemicon),{key:0,item:e.item,class:i(t.cx(`itemIcon`))},null,8,[`item`,`class`])):x.getItemProp(e,`icon`)?(l(),o(`span`,c({key:1,class:[t.cx(`itemIcon`),x.getItemProp(e,`icon`)]},{ref_for:!0},x.getPTOptions(e,n,`itemIcon`)),null,16)):g(``,!0),a(`span`,c({id:x.getItemLabelId(e),class:t.cx(`itemLabel`)},{ref_for:!0},x.getPTOptions(e,n,`itemLabel`)),f(x.getItemLabel(e)),17,G),x.getItemProp(e,`items`)?(l(),o(u,{key:2},[v.templates.submenuicon?(l(),p(m(v.templates.submenuicon),c({key:0,class:t.cx(`submenuIcon`),active:x.isItemActive(e)},{ref_for:!0},x.getPTOptions(e,n,`submenuIcon`)),null,16,[`class`,`active`])):(l(),p(S,c({key:1,class:t.cx(`submenuIcon`)},{ref_for:!0},x.getPTOptions(e,n,`submenuIcon`)),null,16,[`class`]))],64)):g(``,!0)],16,W)),[[w]])],16,U),x.isItemVisible(e)&&x.isItemGroup(e)?(l(),p(C,c({key:0,id:x.getItemId(e)+`_list`,class:t.cx(`submenu`),style:t.sx(`submenu`,!0,{processedItem:e}),"aria-labelledby":x.getItemLabelId(e),role:`menu`,menuId:v.menuId,focusedItemId:v.focusedItemId,items:e.items,templates:v.templates,activeItemPath:v.activeItemPath,level:v.level+1,visible:x.isItemActive(e)&&x.isItemGroup(e),pt:t.pt,unstyled:t.unstyled,onItemClick:h[0]||=function(e){return t.$emit(`item-click`,e)},onItemMouseenter:h[1]||=function(e){return t.$emit(`item-mouseenter`,e)},onItemMousemove:h[2]||=function(e){return t.$emit(`item-mousemove`,e)}},{ref_for:!0},t.ptm(`submenu`)),null,16,[`id`,`class`,`style`,`aria-labelledby`,`menuId`,`focusedItemId`,`items`,`templates`,`activeItemPath`,`level`,`visible`,`pt`,`unstyled`])):g(``,!0)],16,H)):g(``,!0),x.isItemVisible(e)&&x.getItemProp(e,`separator`)?(l(),o(`li`,c({key:1,id:x.getItemId(e),style:x.getItemProp(e,`style`),class:[t.cx(`separator`),x.getItemProp(e,`class`)],role:`separator`},{ref_for:!0},t.ptm(`separator`)),null,16,K)):g(``,!0)],64)}),128))],8,V)):g(``,!0)]}),_:1},16,[`onEnter`])}B.render=q;var J={name:`TieredMenu`,extends:z,inheritAttrs:!1,emits:[`focus`,`blur`,`before-show`,`before-hide`,`hide`,`show`],outsideClickListener:null,matchMediaListener:null,scrollHandler:null,resizeListener:null,target:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:``},activeItemPath:[],visible:!this.popup,submenuVisible:!1,dirty:!1,query:null,queryMatches:!1}},watch:{activeItemPath:function(e){this.popup||(S(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener()))}},mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.scrollHandler&&=(this.scrollHandler.destroy(),null),this.container&&this.autoZIndex&&j.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,t){return e?A(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,`label`)},isItemDisabled:function(e){return this.getItemProp(e,`disabled`)},isItemVisible:function(e){return this.getItemProp(e,`visible`)!==!1},isItemGroup:function(e){return S(this.getItemProp(e,`items`))},isItemSeparator:function(e){return this.getItemProp(e,`separator`)},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&S(e.items)},toggle:function(e){this.visible?this.hide(e,!0):this.show(e)},show:function(e,t){this.popup&&(this.$emit(`before-show`),this.visible=!0,this.target=this.target||e.currentTarget,this.relatedTarget=e.relatedTarget||null),t&&v(this.menubar)},hide:function(e,t){this.popup&&(this.$emit(`before-hide`),this.visible=!1),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:``},t&&v(this.relatedTarget||this.target||this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.popup||(this.focusedItemInfo=this.focusedItemInfo.index===-1?{index:this.findFirstFocusedItemIndex(),level:0,parentKey:``}:this.focusedItemInfo),this.$emit(`focus`,e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:``},this.searchValue=``,this.dirty=!1,this.$emit(`blur`,e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var t=e.metaKey||e.ctrlKey;switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`ArrowLeft`:this.onArrowLeftKey(e);break;case`ArrowRight`:this.onArrowRightKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Space`:this.onSpaceKey(e);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e);break;case`PageDown`:case`PageUp`:case`Backspace`:case`ShiftLeft`:case`ShiftRight`:break;default:!t&&D(e.key)&&this.searchItems(e,e.key)}},onItemChange:function(e,t){var n=e.processedItem,r=e.isFocus;if(!C(n)){var i=n.index,a=n.key,o=n.level,s=n.parentKey,c=n.items,l=S(c),u=this.activeItemPath.filter(function(e){return e.parentKey!==s&&e.parentKey!==a});l&&(u.push(n),this.submenuVisible=!0),this.focusedItemInfo={index:i,level:o,parentKey:s},l&&(this.dirty=!0),r&&v(this.menubar),!(t===`hover`&&this.queryMatches)&&(this.activeItemPath=u)}},onOverlayClick:function(e){I.emit(`overlay-click`,{originalEvent:e,target:this.target})},onItemClick:function(e){var t=e.originalEvent,n=e.processedItem,r=this.isProccessedItemGroup(n),i=C(n.parent);if(this.isSelected(n)){var a=n.index,o=n.key,s=n.level,c=n.parentKey;this.activeItemPath=this.activeItemPath.filter(function(e){return o!==e.key&&o.startsWith(e.key)}),this.focusedItemInfo={index:a,level:s,parentKey:c},this.dirty=!i,v(this.menubar)}else if(r)this.onItemChange(e);else{var l=i?n:this.activeItemPath.find(function(e){return e.parentKey===``});this.hide(t),this.changeFocusedItemIndex(t,l?l.index:-1),v(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e,`hover`)},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},onArrowDownKey:function(e){var t=this.focusedItemInfo.index===-1?this.findFirstFocusedItemIndex():this.findNextItemIndex(this.focusedItemInfo.index);this.changeFocusedItemIndex(e,t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.popup&&this.hide(e,!0),e.preventDefault()}else{var n=this.focusedItemInfo.index===-1?this.findLastFocusedItemIndex():this.findPrevItemIndex(this.focusedItemInfo.index);this.changeFocusedItemIndex(e,n),e.preventDefault()}},onArrowLeftKey:function(e){var t=this,n=this.visibleItems[this.focusedItemInfo.index],r=this.activeItemPath.find(function(e){return e.key===n.parentKey});C(n.parent)||(this.focusedItemInfo={index:-1,parentKey:r?r.parentKey:``},this.searchValue=``,this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(e){return e.parentKey!==t.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index];this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.searchValue=``,this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=T(this.menubar,`li[id="${`${this.focusedItemId}`}"]`),n=t&&T(t,`[data-pc-section="itemlink"]`);if(n?n.click():t&&t.click(),!this.popup){var r=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(r)&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){if(this.popup||this.focusedItemInfo.level!==0){var t=this.focusedItemInfo;this.hide(e,!1),this.focusedItemInfo={index:Number(t.parentKey.split(`_`)[0]),level:0,parentKey:``},this.popup&&v(this.target)}e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},onEnter:function(e){this.autoZIndex&&j.set(`menu`,e,this.baseZIndex+this.$primevue.config.zIndex.menu),y(e,{position:`absolute`,top:`0`}),this.alignOverlay(),v(this.menubar),this.scrollInView()},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit(`show`)},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit(`hide`),this.container=null,this.dirty=!1},onAfterLeave:function(e){this.autoZIndex&&j.clear(e)},alignOverlay:function(){E(this.container,this.target),x(this.target)>x(this.container)&&(this.container.style.minWidth=x(this.target)+`px`)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var n=e.container&&!e.container.contains(t.target),r=!e.popup||!(e.target&&(e.target===t.target||e.target.contains(t.target)));n&&r&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},bindScrollListener:function(){var e=this;this.scrollHandler||=new F(this.target,function(t){e.hide(t,!0)}),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(t){b()||e.hide(t,!0)},window.addEventListener(`resize`,this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&=(window.removeEventListener(`resize`,this.resizeListener),null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia(`(max-width: ${this.breakpoint})`);this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches},this.query.addEventListener(`change`,this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&=(this.query.removeEventListener(`change`,this.matchMediaListener),null)},isItemMatched:function(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e)?.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return w(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,n=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(e){return t.isValidItem(e)}):-1;return n>-1?n+e+1:e},findPrevItemIndex:function(e){var t=this,n=e>0?w(this.visibleItems.slice(0,e),function(e){return t.isValidItem(e)}):-1;return n>-1?n:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,t){var n=this;this.searchValue=(this.searchValue||``)+t;var r=-1,i=!1;return this.focusedItemInfo.index===-1?r=this.visibleItems.findIndex(function(e){return n.isItemMatched(e)}):(r=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(e){return n.isItemMatched(e)}),r=r===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(e){return n.isItemMatched(e)}):r+this.focusedItemInfo.index),r!==-1&&(i=!0),r===-1&&this.focusedItemInfo.index===-1&&(r=this.findFirstFocusedItemIndex()),r!==-1&&this.changeFocusedItemIndex(e,r),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){n.searchValue=``,n.searchTimeout=null},500),i},changeFocusedItemIndex:function(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e===-1?this.focusedItemId:`${this.$id}_${e}`,n=T(this.menubar,`li[id="${t}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:`nearest`,inline:`start`})},createProcessedItems:function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:``,a=[];return e&&e.forEach(function(e,o){var s=(i===``?``:i+`_`)+o,c={item:e,index:o,level:n,key:s,parent:r,parentKey:i};c.items=t.createProcessedItems(e.items,n+1,c,s),a.push(c)}),a},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,t=this.activeItemPath.find(function(t){return t.key===e.focusedItemInfo.parentKey});return t?t.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index===-1?null:`${this.$id}${S(this.focusedItemInfo.parentKey)?`_`+this.focusedItemInfo.parentKey:``}_${this.focusedItemInfo.index}`}},components:{TieredMenuSub:B,Portal:P}},Y=[`id`];function X(e,r,i,a,s,u){var f=n(`TieredMenuSub`),m=n(`Portal`);return l(),p(m,{appendTo:e.appendTo,disabled:!e.popup},{default:d(function(){return[t(_,c({name:`p-connected-overlay`,onEnter:u.onEnter,onAfterEnter:u.onAfterEnter,onLeave:u.onLeave,onAfterLeave:u.onAfterLeave},e.ptm(`transition`)),{default:d(function(){return[s.visible?(l(),o(`div`,c({key:0,ref:u.containerRef,id:e.$id,class:e.cx(`root`),onClick:r[0]||=function(){return u.onOverlayClick&&u.onOverlayClick.apply(u,arguments)}},e.ptmi(`root`)),[e.$slots.start?(l(),o(`div`,c({key:0,class:e.cx(`start`)},e.ptm(`start`)),[h(e.$slots,`start`)],16)):g(``,!0),t(f,c({ref:u.menubarRef,id:e.$id+`_list`,class:e.cx(`rootList`),tabindex:e.disabled?-1:e.tabindex,role:`menubar`,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-disabled":e.disabled||void 0,"aria-orientation":`vertical`,"aria-activedescendant":s.focused?u.focusedItemId:void 0,menuId:e.$id,focusedItemId:s.focused?u.focusedItemId:void 0,items:u.processedItems,templates:e.$slots,activeItemPath:s.activeItemPath,level:0,visible:s.submenuVisible,pt:e.pt,unstyled:e.unstyled,onFocus:u.onFocus,onBlur:u.onBlur,onKeydown:u.onKeyDown,onItemClick:u.onItemClick,onItemMouseenter:u.onItemMouseEnter,onItemMousemove:u.onItemMouseMove},e.ptm(`rootList`)),null,16,[`id`,`class`,`tabindex`,`aria-label`,`aria-labelledby`,`aria-disabled`,`aria-activedescendant`,`menuId`,`focusedItemId`,`items`,`templates`,`activeItemPath`,`visible`,`pt`,`unstyled`,`onFocus`,`onBlur`,`onKeydown`,`onItemClick`,`onItemMouseenter`,`onItemMousemove`]),e.$slots.end?(l(),o(`div`,c({key:1,class:e.cx(`end`)},e.ptm(`end`)),[h(e.$slots,`end`)],16)):g(``,!0)],16,Y)):g(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onLeave`,`onAfterLeave`])]}),_:3},8,[`appendTo`,`disabled`])}J.render=X;export{J as default};