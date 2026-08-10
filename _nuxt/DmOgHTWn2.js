import{b as e,et as t,mt as n,xt as r}from"./B4b-2GOK.js";import{A as i,M as a,d as o,t as s}from"./E-knF-Z8.js";import{t as c}from"./cO8iUN-n.js";import{t as l}from"./BLEQZSpC.js";import{n as u,t as d}from"./CJOXGWLR2.js";var f=s.extend({name:`blockui`,style:`
    .p-blockui {
        position: relative;
    }

    .p-blockui-mask {
        border-radius: dt('blockui.border.radius');
    }

    .p-blockui-mask.p-overlay-mask {
        position: absolute;
    }

    .p-blockui-mask-document.p-overlay-mask {
        position: fixed;
    }
`,classes:{root:`p-blockui`}}),p={name:`BlockUI`,extends:{name:`BaseBlockUI`,extends:l,props:{blocked:{type:Boolean,default:!1},fullScreen:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0}},style:f,provide:function(){return{$pcBlockUI:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`block`,`unblock`],mask:null,data:function(){return{isBlocked:!1}},watch:{blocked:function(e){e===!0?this.block():this.unblock()}},mounted:function(){this.blocked&&this.block()},methods:{block:function(){var e=`p-blockui-mask p-overlay-mask p-overlay-mask-enter`;this.fullScreen?(e+=` p-blockui-mask-document`,this.mask=i(`div`,{style:{position:`fixed`,top:`0`,left:`0`,width:`100%`,height:`100%`},class:!this.isUnstyled&&e,"p-bind":this.ptm(`mask`)}),document.body.appendChild(this.mask),d(),document.activeElement.blur()):(this.mask=i(`div`,{style:{position:`absolute`,top:`0`,left:`0`,width:`100%`,height:`100%`},class:!this.isUnstyled&&e,"p-bind":this.ptm(`mask`)}),this.$refs.container.appendChild(this.mask)),this.autoZIndex&&c.set(`modal`,this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal),this.isBlocked=!0,this.$emit(`block`)},unblock:function(){var e=this;if(this.mask){!this.isUnstyled&&a(this.mask,`p-overlay-mask-leave`);var t=function(){clearTimeout(n),e.mask.removeEventListener(`animationend`,t),e.mask.removeEventListener(`webkitAnimationEnd`,t)},n=setTimeout(function(){e.removeMask()},10);o(this.mask)>0&&(this.mask.addEventListener(`animationend`,t),this.mask.addEventListener(`webkitAnimationEnd`,t))}else this.removeMask()},removeMask:function(){if(c.clear(this.mask),this.fullScreen)document.body.removeChild(this.mask),u();else{var e;(e=this.$refs.container)==null||e.removeChild(this.mask)}this.isBlocked=!1,this.$emit(`unblock`)}}},m=[`aria-busy`];function h(i,a,o,s,c,l){return n(),e(`div`,t({ref:`container`,class:i.cx(`root`),"aria-busy":c.isBlocked},i.ptmi(`root`)),[r(i.$slots,`default`)],16,m)}p.render=h;export{p as default};