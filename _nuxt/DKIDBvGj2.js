import{D as e,St as t,Zn as n,_ as r,b as i,bt as a,et as o,mt as s,o as c,tr as l,xt as u,y as d}from"./B4b-2GOK.js";import{t as f}from"./E-knF-Z8.js";import{t as p}from"./CRHlWn3X.js";import{t as m}from"./BLEQZSpC.js";var h=f.extend({name:`metergroup`,style:`
    .p-metergroup {
        display: flex;
        gap: dt('metergroup.gap');
    }

    .p-metergroup-meters {
        display: flex;
        background: dt('metergroup.meters.background');
        border-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-label-list {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-metergroup-label {
        display: inline-flex;
        align-items: center;
        gap: dt('metergroup.label.gap');
    }

    .p-metergroup-label-marker {
        display: inline-flex;
        width: dt('metergroup.label.marker.size');
        height: dt('metergroup.label.marker.size');
        border-radius: 100%;
    }

    .p-metergroup-label-icon {
        font-size: dt('metergroup.label.icon.size');
        width: dt('metergroup.label.icon.size');
        height: dt('metergroup.label.icon.size');
    }

    .p-metergroup-horizontal {
        flex-direction: column;
    }

    .p-metergroup-label-list-horizontal {
        gap: dt('metergroup.label.list.horizontal.gap');
    }

    .p-metergroup-horizontal .p-metergroup-meters {
        height: dt('metergroup.meters.size');
    }

    .p-metergroup-horizontal .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-end-start-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-horizontal .p-metergroup-meter:last-of-type {
        border-start-end-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical {
        flex-direction: row;
    }

    .p-metergroup-label-list-vertical {
        flex-direction: column;
        gap: dt('metergroup.label.list.vertical.gap');
    }

    .p-metergroup-vertical .p-metergroup-meters {
        flex-direction: column;
        width: dt('metergroup.meters.size');
        height: 100%;
    }

    .p-metergroup-vertical .p-metergroup-label-list {
        align-items: flex-start;
    }

    .p-metergroup-vertical .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-start-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical .p-metergroup-meter:last-of-type {
        border-end-start-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }
`,classes:{root:function(e){var t=e.props;return[`p-metergroup p-component`,{"p-metergroup-horizontal":t.orientation===`horizontal`,"p-metergroup-vertical":t.orientation===`vertical`}]},meters:`p-metergroup-meters`,meter:`p-metergroup-meter`,labelList:function(e){var t=e.props;return[`p-metergroup-label-list`,{"p-metergroup-label-list-vertical":t.labelOrientation===`vertical`,"p-metergroup-label-list-horizontal":t.labelOrientation===`horizontal`}]},label:`p-metergroup-label`,labelIcon:`p-metergroup-label-icon`,labelMarker:`p-metergroup-label-marker`,labelText:`p-metergroup-label-text`}}),g={name:`MeterGroup`,extends:m,props:{value:{type:Array,default:null},min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:`horizontal`},labelPosition:{type:String,default:`end`},labelOrientation:{type:String,default:`horizontal`}},style:h,provide:function(){return{$pcMeterGroup:this,$parentInstance:this}}};function _(e){"@babel/helpers - typeof";return _=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},_(e)}function v(e,t,n){return(t=y(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){var t=b(e,`string`);return _(t)==`symbol`?t:t+``}function b(e,t){if(_(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(_(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var x={name:`MeterGroupLabel`,hostName:`MeterGroup`,extends:m,inheritAttrs:!1,inject:[`$pcMeterGroup`],props:{value:{type:Array,default:null},labelPosition:{type:String,default:`end`},labelOrientation:{type:String,default:`horizontal`}},computed:{dataP:function(){return p(v({},this.$pcMeterGroup.labelOrientation,this.$pcMeterGroup.labelOrientation))}}},S=[`data-p`];function C(e,t,d,f,p,m){return s(),i(`ol`,o({class:e.cx(`labelList`),"data-p":m.dataP},e.ptm(`labelList`)),[(s(!0),i(c,null,a(d.value,function(t,a){return s(),i(`li`,o({key:a+`_label`,class:e.cx(`label`)},{ref_for:!0},e.ptm(`label`)),[u(e.$slots,`icon`,{value:t,class:n(e.cx(`labelIcon`))},function(){return[t.icon?(s(),i(`i`,o({key:0,class:[t.icon,e.cx(`labelIcon`)],style:{color:t.color}},{ref_for:!0},e.ptm(`labelIcon`)),null,16)):(s(),i(`span`,o({key:1,class:e.cx(`labelMarker`),style:{backgroundColor:t.color}},{ref_for:!0},e.ptm(`labelMarker`)),null,16))]}),r(`span`,o({class:e.cx(`labelText`)},{ref_for:!0},e.ptm(`labelText`)),l(t.label)+` (`+l(e.$parentInstance.percentValue(t.value))+`)`,17)],16)}),128))],16,S)}x.render=C;function w(e){"@babel/helpers - typeof";return w=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},w(e)}function T(e,t,n){return(t=E(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){var t=D(e,`string`);return w(t)==`symbol`?t:t+``}function D(e,t){if(w(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(w(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var O={name:`MeterGroup`,extends:g,inheritAttrs:!1,methods:{getPTOptions:function(e,t,n){return this.ptm(e,{context:{value:t,index:n}})},percent:function(){var e=((arguments.length>0&&arguments[0]!==void 0?arguments[0]:0)-this.min)/(this.max-this.min)*100;return Math.round(Math.max(0,Math.min(100,e)))},percentValue:function(e){return this.percent(e)+`%`},meterCalculatedStyles:function(e){return{backgroundColor:e.color,width:this.orientation===`horizontal`&&this.percentValue(e.value),height:this.orientation===`vertical`&&this.percentValue(e.value)}}},computed:{totalPercent:function(){return this.percent(this.value.reduce(function(e,t){return e+t.value},0))},percentages:function(){var e=0,t=[];return this.value.forEach(function(n){e+=n.value,t.push(e)}),t},dataP:function(){return p(T({},this.orientation,this.orientation))}},components:{MeterGroupLabel:x}},k=[`aria-valuemin`,`aria-valuemax`,`aria-valuenow`,`data-p`],A=[`data-p`],j=[`data-p`];function M(l,f,p,m,h,g){var _=t(`MeterGroupLabel`);return s(),i(`div`,o({class:l.cx(`root`),role:`meter`,"aria-valuemin":l.min,"aria-valuemax":l.max,"aria-valuenow":g.totalPercent,"data-p":g.dataP},l.ptmi(`root`)),[l.labelPosition===`start`?u(l.$slots,`label`,{key:0,value:l.value,totalPercent:g.totalPercent,percentages:g.percentages},function(){return[e(_,{value:l.value,labelPosition:l.labelPosition,labelOrientation:l.labelOrientation,unstyled:l.unstyled,pt:l.pt},null,8,[`value`,`labelPosition`,`labelOrientation`,`unstyled`,`pt`])]}):d(``,!0),u(l.$slots,`start`,{value:l.value,totalPercent:g.totalPercent,percentages:g.percentages}),r(`div`,o({class:l.cx(`meters`),"data-p":g.dataP},l.ptm(`meters`)),[(s(!0),i(c,null,a(l.value,function(e,t){return u(l.$slots,`meter`,{key:t,value:e,index:t,class:n(l.cx(`meter`)),orientation:l.orientation,size:g.percentValue(e.value),totalPercent:g.totalPercent},function(){return[g.percent(e.value)?(s(),i(`span`,o({key:0,class:l.cx(`meter`),style:g.meterCalculatedStyles(e),"data-p":g.dataP},{ref_for:!0},g.getPTOptions(`meter`,e,t)),null,16,j)):d(``,!0)]})}),128))],16,A),u(l.$slots,`end`,{value:l.value,totalPercent:g.totalPercent,percentages:g.percentages}),l.labelPosition===`end`?u(l.$slots,`label`,{key:1,value:l.value,totalPercent:g.totalPercent,percentages:g.percentages},function(){return[e(_,{value:l.value,labelPosition:l.labelPosition,labelOrientation:l.labelOrientation,unstyled:l.unstyled,pt:l.pt},null,8,[`value`,`labelPosition`,`labelOrientation`,`unstyled`,`pt`])]}):d(``,!0)],16,k)}O.render=M;export{O as default};