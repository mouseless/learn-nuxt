import{n as e}from"./hePW80VL.js";import{b as t,et as n,mt as r,tr as i,v as a,wt as o,xt as s,y as c}from"./B4b-2GOK.js";import{t as l}from"./E-knF-Z8.js";import{t as u}from"./CRHlWn3X.js";import{t as d}from"./BLEQZSpC.js";import{t as f}from"./BCD8B2JK2.js";var p=l.extend({name:`chip`,style:`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,classes:{root:`p-chip p-component`,image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`}}),m=e({default:()=>h}),h={name:`Chip`,extends:{name:`BaseChip`,extends:d,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:p,provide:function(){return{$pcChip:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`remove`],data:function(){return{visible:!0}},methods:{onKeydown:function(e){(e.key===`Enter`||e.key===`Backspace`)&&this.close(e)},close:function(e){this.visible=!1,this.$emit(`remove`,e)}},computed:{dataP:function(){return u({removable:this.removable})}},components:{TimesCircleIcon:f}},g=[`aria-label`,`data-p`],_=[`src`];function v(e,l,u,d,f,p){return f.visible?(r(),t(`div`,n({key:0,class:e.cx(`root`),"aria-label":e.label},e.ptmi(`root`),{"data-p":p.dataP}),[s(e.$slots,`default`,{},function(){return[e.image?(r(),t(`img`,n({key:0,src:e.image},e.ptm(`image`),{class:e.cx(`image`)}),null,16,_)):e.$slots.icon?(r(),a(o(e.$slots.icon),n({key:1,class:e.cx(`icon`)},e.ptm(`icon`)),null,16,[`class`])):e.icon?(r(),t(`span`,n({key:2,class:[e.cx(`icon`),e.icon]},e.ptm(`icon`)),null,16)):c(``,!0),e.label===null?c(``,!0):(r(),t(`div`,n({key:3,class:e.cx(`label`)},e.ptm(`label`)),i(e.label),17))]}),e.removable?s(e.$slots,`removeicon`,{key:0,removeCallback:p.close,keydownCallback:p.onKeydown},function(){return[(r(),a(o(e.removeIcon?`span`:`TimesCircleIcon`),n({class:[e.cx(`removeIcon`),e.removeIcon],onClick:p.close,onKeydown:p.onKeydown},e.ptm(`removeIcon`)),null,16,[`class`,`onClick`,`onKeydown`]))]}):c(``,!0)],16,g)):c(``,!0)}h.render=v;export{h as n,m as t};