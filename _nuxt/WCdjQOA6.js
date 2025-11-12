import{C as v,y as o,bP as h,bM as g,c,o as p,a as m,F as u,r as I,k as y,j as k,t as b,by as w}from"#entry";import{s as T}from"./CQxiXJjr.js";var S=`
    .p-steps {
        position: relative;
    }

    .p-steps-list {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
    }

    .p-steps-item {
        position: relative;
        display: flex;
        justify-content: center;
        flex: 1 1 auto;
    }

    .p-steps-item.p-disabled,
    .p-steps-item.p-disabled * {
        opacity: 1;
        pointer-events: auto;
        user-select: auto;
        cursor: auto;
    }

    .p-steps-item:before {
        content: ' ';
        border-top: 2px solid dt('steps.separator.background');
        width: 100%;
        top: 50%;
        left: 0;
        display: block;
        position: absolute;
        margin-top: calc(-1rem + 1px);
    }

    .p-steps-item:first-child::before {
        width: calc(50% + 1rem);
        transform: translateX(100%);
    }

    .p-steps-item:last-child::before {
        width: 50%;
    }

    .p-steps-item-link {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        text-decoration: none;
        transition:
            outline-color dt('steps.transition.duration'),
            box-shadow dt('steps.transition.duration');
        border-radius: dt('steps.item.link.border.radius');
        outline-color: transparent;
        gap: dt('steps.item.link.gap');
    }

    .p-steps-item-link:not(.p-disabled):focus-visible {
        box-shadow: dt('steps.item.link.focus.ring.shadow');
        outline: dt('steps.item.link.focus.ring.width') dt('steps.item.link.focus.ring.style') dt('steps.item.link.focus.ring.color');
        outline-offset: dt('steps.item.link.focus.ring.offset');
    }

    .p-steps-item-label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        color: dt('steps.item.label.color');
        display: block;
        font-weight: dt('steps.item.label.font.weight');
    }

    .p-steps-item-number {
        display: flex;
        align-items: center;
        justify-content: center;
        color: dt('steps.item.number.color');
        border: 2px solid dt('steps.item.number.border.color');
        background: dt('steps.item.number.background');
        min-width: dt('steps.item.number.size');
        height: dt('steps.item.number.size');
        line-height: dt('steps.item.number.size');
        font-size: dt('steps.item.number.font.size');
        z-index: 1;
        border-radius: dt('steps.item.number.border.radius');
        position: relative;
        font-weight: dt('steps.item.number.font.weight');
    }

    .p-steps-item-number::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('steps.item.number.border.radius');
        box-shadow: dt('steps.item.number.shadow');
    }

    .p-steps:not(.p-readonly) .p-steps-item {
        cursor: pointer;
    }

    .p-steps-item-active .p-steps-item-number {
        background: dt('steps.item.number.active.background');
        border-color: dt('steps.item.number.active.border.color');
        color: dt('steps.item.number.active.color');
    }

    .p-steps-item-active .p-steps-item-label {
        color: dt('steps.item.label.active.color');
    }
`,P={root:function(e){var t=e.props;return["p-steps p-component",{"p-readonly":t.readonly}]},list:"p-steps-list",item:function(e){var t=e.instance,a=e.item,l=e.index;return["p-steps-item",{"p-steps-item-active":t.isActive(l),"p-disabled":t.isItemDisabled(a,l)}]},itemLink:"p-steps-item-link",itemNumber:"p-steps-item-number",itemLabel:"p-steps-item-label"},x=v.extend({name:"steps",style:S,classes:P}),L={name:"BaseSteps",extends:T,props:{id:{type:String},model:{type:Array,default:null},readonly:{type:Boolean,default:!0},activeStep:{type:Number,default:0}},style:x,provide:function(){return{$pcSteps:this,$parentInstance:this}}},D={name:"Steps",extends:L,inheritAttrs:!1,emits:["update:activeStep","step-change"],data:function(){return{d_activeStep:this.activeStep}},watch:{activeStep:function(e){this.d_activeStep=e}},mounted:function(){var e=this.findFirstItem();e&&(e.tabIndex="0")},methods:{getPTOptions:function(e,t,a){return this.ptm(e,{context:{item:t,index:a,active:this.isActive(a),disabled:this.isItemDisabled(t,a)}})},onItemClick:function(e,t,a){if(this.disabled(t)||this.readonly){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),a!==this.d_activeStep&&(this.d_activeStep=a,this.$emit("update:activeStep",this.d_activeStep)),this.$emit("step-change",{originalEvent:e,index:a})},onItemKeydown:function(e,t){switch(e.code){case"ArrowRight":{this.navigateToNextItem(e.target),e.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(e.target),e.preventDefault();break}case"Home":{this.navigateToFirstItem(e.target),e.preventDefault();break}case"End":{this.navigateToLastItem(e.target),e.preventDefault();break}case"Tab":break;case"Enter":case"NumpadEnter":case"Space":{this.onItemClick(e,t),e.preventDefault();break}}},navigateToNextItem:function(e){var t=this.findNextItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToPrevItem:function(e){var t=this.findPrevItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToFirstItem:function(e){var t=this.findFirstItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToLastItem:function(e){var t=this.findLastItem(e);t&&this.setFocusToMenuitem(e,t)},findNextItem:function(e){var t=e.parentElement.nextElementSibling;return t?t.children[0]:null},findPrevItem:function(e){var t=e.parentElement.previousElementSibling;return t?t.children[0]:null},findFirstItem:function(){var e=g(this.$refs.list,'[data-pc-section="item"]');return e?e.children[0]:null},findLastItem:function(){var e=h(this.$refs.list,'[data-pc-section="item"]');return e?e[e.length-1].children[0]:null},setFocusToMenuitem:function(e,t){e.tabIndex="-1",t.tabIndex="0",t.focus()},isActive:function(e){return e===this.d_activeStep},isItemDisabled:function(e,t){return this.disabled(e)||this.readonly&&!this.isActive(t)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},getMenuItemProps:function(e,t){var a=this;return{action:o({class:this.cx("itemLink"),onClick:function(i){return a.onItemClick(i,e)},onKeyDown:function(i){return a.onItemKeydown(i,e)}},this.getPTOptions("itemLink",e,t)),step:o({class:this.cx("itemNumber")},this.getPTOptions("itemNumber",e,t)),label:o({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,t))}}}},F=["id"],N=["aria-current","onClick","onKeydown","data-p-active","data-p-disabled"];function C(n,e,t,a,l,i){return p(),c("nav",o({id:n.id,class:n.cx("root")},n.ptmi("root")),[m("ol",o({ref:"list",class:n.cx("list")},n.ptm("list")),[(p(!0),c(u,null,I(n.model,function(s,r){return p(),c(u,{key:i.label(s)+"_"+r.toString()},[i.visible(s)?(p(),c("li",o({key:0,class:[n.cx("item",{item:s,index:r}),s.class],style:s.style,"aria-current":i.isActive(r)?"step":void 0,onClick:function(d){return i.onItemClick(d,s,r)},onKeydown:function(d){return i.onItemKeydown(d,s,r)}},{ref_for:!0},i.getPTOptions("item",s,r),{"data-p-active":i.isActive(r),"data-p-disabled":i.isItemDisabled(s,r)}),[n.$slots.item?(p(),k(w(n.$slots.item),{key:1,item:s,index:r,active:r===l.d_activeStep,label:i.label(s),props:i.getMenuItemProps(s,r)},null,8,["item","index","active","label","props"])):(p(),c("span",o({key:0,class:n.cx("itemLink")},{ref_for:!0},i.getPTOptions("itemLink",s,r)),[m("span",o({class:n.cx("itemNumber")},{ref_for:!0},i.getPTOptions("itemNumber",s,r)),b(r+1),17),m("span",o({class:n.cx("itemLabel")},{ref_for:!0},i.getPTOptions("itemLabel",s,r)),b(i.label(s)),17)],16))],16,N)):y("",!0)],64)}),128))],16)],16,F)}D.render=C;export{D as default};
