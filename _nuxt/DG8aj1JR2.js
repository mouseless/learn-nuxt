import{b as e,et as t,mt as n,v as r,wt as i,xt as a,y as o}from"./B4b-2GOK.js";import{t as s}from"./E-knF-Z8.js";import{t as c}from"./BLEQZSpC.js";import{t as l}from"./DoV2V33T2.js";import{n as u,t as d}from"./BAQoKe9E2.js";import{t as f}from"./BCD8B2JK2.js";var p=s.extend({name:`inlinemessage`,style:`
    .p-inlinemessage {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: dt('inlinemessage.padding');
        border-radius: dt('inlinemessage.border.radius');
        gap: dt('inlinemessage.gap');
    }

    .p-inlinemessage-text {
        font-weight: dt('inlinemessage.text.font.weight');
    }

    .p-inlinemessage-icon {
        flex-shrink: 0;
        font-size: dt('inlinemessage.icon.size');
        width: dt('inlinemessage.icon.size');
        height: dt('inlinemessage.icon.size');
    }

    .p-inlinemessage-icon-only .p-inlinemessage-text {
        visibility: hidden;
        width: 0;
    }

    .p-inlinemessage-info {
        background: dt('inlinemessage.info.background');
        border: 1px solid dt('inlinemessage.info.border.color');
        color: dt('inlinemessage.info.color');
        box-shadow: dt('inlinemessage.info.shadow');
    }

    .p-inlinemessage-info .p-inlinemessage-icon {
        color: dt('inlinemessage.info.color');
    }

    .p-inlinemessage-success {
        background: dt('inlinemessage.success.background');
        border: 1px solid dt('inlinemessage.success.border.color');
        color: dt('inlinemessage.success.color');
        box-shadow: dt('inlinemessage.success.shadow');
    }

    .p-inlinemessage-success .p-inlinemessage-icon {
        color: dt('inlinemessage.success.color');
    }

    .p-inlinemessage-warn {
        background: dt('inlinemessage.warn.background');
        border: 1px solid dt('inlinemessage.warn.border.color');
        color: dt('inlinemessage.warn.color');
        box-shadow: dt('inlinemessage.warn.shadow');
    }

    .p-inlinemessage-warn .p-inlinemessage-icon {
        color: dt('inlinemessage.warn.color');
    }

    .p-inlinemessage-error {
        background: dt('inlinemessage.error.background');
        border: 1px solid dt('inlinemessage.error.border.color');
        color: dt('inlinemessage.error.color');
        box-shadow: dt('inlinemessage.error.shadow');
    }

    .p-inlinemessage-error .p-inlinemessage-icon {
        color: dt('inlinemessage.error.color');
    }

    .p-inlinemessage-secondary {
        background: dt('inlinemessage.secondary.background');
        border: 1px solid dt('inlinemessage.secondary.border.color');
        color: dt('inlinemessage.secondary.color');
        box-shadow: dt('inlinemessage.secondary.shadow');
    }

    .p-inlinemessage-secondary .p-inlinemessage-icon {
        color: dt('inlinemessage.secondary.color');
    }

    .p-inlinemessage-contrast {
        background: dt('inlinemessage.contrast.background');
        border: 1px solid dt('inlinemessage.contrast.border.color');
        color: dt('inlinemessage.contrast.color');
        box-shadow: dt('inlinemessage.contrast.shadow');
    }

    .p-inlinemessage-contrast .p-inlinemessage-icon {
        color: dt('inlinemessage.contrast.color');
    }
`,classes:{root:function(e){var t=e.props,n=e.instance;return[`p-inlinemessage p-component p-inlinemessage-`+t.severity,{"p-inlinemessage-icon-only":!n.$slots.default}]},icon:function(e){return[`p-inlinemessage-icon`,e.props.icon]},text:`p-inlinemessage-text`}}),m={name:`InlineMessage`,extends:{name:`BaseInlineMessage`,extends:c,props:{severity:{type:String,default:`error`},icon:{type:String,default:void 0}},style:p,provide:function(){return{$pcInlineMessage:this,$parentInstance:this}}},inheritAttrs:!1,timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.sticky||setTimeout(function(){e.visible=!1},this.life)},computed:{iconComponent:function(){return{info:d,success:l,warn:u,error:f}[this.severity]}}};function h(s,c,l,u,d,f){return n(),e(`div`,t({role:`alert`,"aria-live":`assertive`,"aria-atomic":`true`,class:s.cx(`root`)},s.ptmi(`root`)),[a(s.$slots,`icon`,{},function(){return[(n(),r(i(s.icon?`span`:f.iconComponent),t({class:s.cx(`icon`)},s.ptm(`icon`)),null,16,[`class`]))]}),s.$slots.default?(n(),e(`div`,t({key:0,class:s.cx(`text`)},s.ptm(`text`)),[a(s.$slots,`default`)],16)):o(``,!0)],16)}m.render=h;export{m as default};