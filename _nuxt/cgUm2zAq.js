import{$n as e,Ct as t,E as n,St as r,Yt as i,Zn as a,_ as o,b as s,bt as c,et as l,mt as u,o as d,qt as f,tr as p,v as m,w as h,wt as g,xt as _,y as v}from"./B4b-2GOK.js";import{L as y,t as b}from"./E-knF-Z8.js";import{t as x}from"./BLEQZSpC.js";import{t as S}from"./CIQ8XXnq.js";import{t as C}from"./C9niURxP.js";import{n as w,r as T,t as ee}from"./BFbh-1U5.js";import{t as E}from"./C34b9pxl.js";import{n as D}from"./BwDQIttw.js";var te=`
    .p-paginator {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        background: dt('paginator.background');
        color: dt('paginator.color');
        padding: dt('paginator.padding');
        border-radius: dt('paginator.border.radius');
        gap: dt('paginator.gap');
    }

    .p-paginator-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: dt('paginator.gap');
    }

    .p-paginator-content-start {
        margin-inline-end: auto;
    }

    .p-paginator-content-end {
        margin-inline-start: auto;
    }

    .p-paginator-page,
    .p-paginator-next,
    .p-paginator-last,
    .p-paginator-first,
    .p-paginator-prev {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        user-select: none;
        overflow: hidden;
        position: relative;
        background: dt('paginator.nav.button.background');
        border: 0 none;
        color: dt('paginator.nav.button.color');
        min-width: dt('paginator.nav.button.width');
        height: dt('paginator.nav.button.height');
        transition:
            background dt('paginator.transition.duration'),
            color dt('paginator.transition.duration'),
            outline-color dt('paginator.transition.duration'),
            box-shadow dt('paginator.transition.duration');
        border-radius: dt('paginator.nav.button.border.radius');
        padding: 0;
        margin: 0;
    }

    .p-paginator-page:focus-visible,
    .p-paginator-next:focus-visible,
    .p-paginator-last:focus-visible,
    .p-paginator-first:focus-visible,
    .p-paginator-prev:focus-visible {
        box-shadow: dt('paginator.nav.button.focus.ring.shadow');
        outline: dt('paginator.nav.button.focus.ring.width') dt('paginator.nav.button.focus.ring.style') dt('paginator.nav.button.focus.ring.color');
        outline-offset: dt('paginator.nav.button.focus.ring.offset');
    }

    .p-paginator-page:not(.p-disabled):not(.p-paginator-page-selected):hover,
    .p-paginator-first:not(.p-disabled):hover,
    .p-paginator-prev:not(.p-disabled):hover,
    .p-paginator-next:not(.p-disabled):hover,
    .p-paginator-last:not(.p-disabled):hover {
        background: dt('paginator.nav.button.hover.background');
        color: dt('paginator.nav.button.hover.color');
    }

    .p-paginator-page.p-paginator-page-selected {
        background: dt('paginator.nav.button.selected.background');
        color: dt('paginator.nav.button.selected.color');
    }

    .p-paginator-current {
        color: dt('paginator.current.page.report.color');
    }

    .p-paginator-pages {
        display: flex;
        align-items: center;
        gap: dt('paginator.gap');
    }

    .p-paginator-jtp-input .p-inputtext {
        max-width: dt('paginator.jump.to.page.input.max.width');
    }

    .p-paginator-first:dir(rtl),
    .p-paginator-prev:dir(rtl),
    .p-paginator-next:dir(rtl),
    .p-paginator-last:dir(rtl) {
        transform: rotate(180deg);
    }
`;function O(e){"@babel/helpers - typeof";return O=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},O(e)}function k(e,t,n){return(t=A(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){var t=j(e,`string`);return O(t)==`symbol`?t:t+``}function j(e,t){if(O(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(O(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var M=b.extend({name:`paginator`,style:te,classes:{paginator:function(e){var t=e.instance,n=e.key;return[`p-paginator p-component`,k({"p-paginator-default":!t.hasBreakpoints()},`p-paginator-${n}`,t.hasBreakpoints())]},content:`p-paginator-content`,contentStart:`p-paginator-content-start`,contentEnd:`p-paginator-content-end`,first:function(e){return[`p-paginator-first`,{"p-disabled":e.instance.$attrs.disabled}]},firstIcon:`p-paginator-first-icon`,prev:function(e){return[`p-paginator-prev`,{"p-disabled":e.instance.$attrs.disabled}]},prevIcon:`p-paginator-prev-icon`,next:function(e){return[`p-paginator-next`,{"p-disabled":e.instance.$attrs.disabled}]},nextIcon:`p-paginator-next-icon`,last:function(e){return[`p-paginator-last`,{"p-disabled":e.instance.$attrs.disabled}]},lastIcon:`p-paginator-last-icon`,pages:`p-paginator-pages`,page:function(e){var t=e.props;return[`p-paginator-page`,{"p-paginator-page-selected":e.pageLink-1===t.page}]},current:`p-paginator-current`,pcRowPerPageDropdown:`p-paginator-rpp-dropdown`,pcJumpToPageDropdown:`p-paginator-jtp-dropdown`,pcJumpToPageInputText:`p-paginator-jtp-input`}}),N={name:`BasePaginator`,extends:x,props:{totalRecords:{type:Number,default:0},rows:{type:Number,default:0},first:{type:Number,default:0},pageLinkSize:{type:Number,default:5},rowsPerPageOptions:{type:Array,default:null},template:{type:[Object,String],default:`FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown`},currentPageReportTemplate:{type:null,default:`({currentPage} of {totalPages})`},alwaysShow:{type:Boolean,default:!0}},style:M,provide:function(){return{$pcPaginator:this,$parentInstance:this}}},P={name:`CurrentPageReport`,hostName:`Paginator`,extends:x,props:{pageCount:{type:Number,default:0},currentPage:{type:Number,default:0},page:{type:Number,default:0},first:{type:Number,default:0},rows:{type:Number,default:0},totalRecords:{type:Number,default:0},template:{type:String,default:`({currentPage} of {totalPages})`}},computed:{text:function(){return this.template.replace(`{currentPage}`,this.currentPage).replace(`{totalPages}`,this.pageCount).replace(`{first}`,this.pageCount>0?this.first+1:0).replace(`{last}`,Math.min(this.first+this.rows,this.totalRecords)).replace(`{rows}`,this.rows).replace(`{totalRecords}`,this.totalRecords)}}};function ne(e,t,n,r,i,a){return u(),s(`span`,l({class:e.cx(`current`)},e.ptm(`current`)),p(a.text),17)}P.render=ne;var F={name:`FirstPageLink`,hostName:`Paginator`,extends:x,props:{template:{type:Function,default:null}},methods:{getPTOptions:function(e){return this.ptm(e,{context:{disabled:this.$attrs.disabled}})}},components:{AngleDoubleLeftIcon:T},directives:{ripple:S}};function re(e,n,r,a,o,c){var d=t(`ripple`);return i((u(),s(`button`,l({class:e.cx(`first`),type:`button`},c.getPTOptions(`first`),{"data-pc-group-section":`pagebutton`}),[(u(),m(g(r.template||`AngleDoubleLeftIcon`),l({class:e.cx(`firstIcon`)},c.getPTOptions(`firstIcon`)),null,16,[`class`]))],16)),[[d]])}F.render=re;var I={name:`JumpToPageDropdown`,hostName:`Paginator`,extends:x,emits:[`page-change`],props:{page:Number,pageCount:Number,disabled:Boolean,templates:null},methods:{onChange:function(e){this.$emit(`page-change`,e)}},computed:{pageOptions:function(){for(var e=[],t=0;t<this.pageCount;t++)e.push({label:String(t+1),value:t});return e}},components:{JTPSelect:E}};function ie(e,t,n,i,o,s){var c=r(`JTPSelect`);return u(),m(c,{modelValue:n.page,options:s.pageOptions,optionLabel:`label`,optionValue:`value`,"onUpdate:modelValue":t[0]||=function(e){return s.onChange(e)},class:a(e.cx(`pcJumpToPageDropdown`)),disabled:n.disabled,unstyled:e.unstyled,pt:e.ptm(`pcJumpToPageDropdown`),"data-pc-group-section":`pagedropdown`},h({_:2},[n.templates.jumptopagedropdownicon?{name:`dropdownicon`,fn:f(function(e){return[(u(),m(g(n.templates.jumptopagedropdownicon),{class:a(e.class)},null,8,[`class`]))]}),key:`0`}:void 0]),1032,[`modelValue`,`options`,`class`,`disabled`,`unstyled`,`pt`])}I.render=ie;var L={name:`JumpToPageInput`,hostName:`Paginator`,extends:x,inheritAttrs:!1,emits:[`page-change`],props:{page:Number,pageCount:Number,disabled:Boolean},data:function(){return{d_page:this.page}},watch:{page:function(e){this.d_page=e}},methods:{onChange:function(e){e!==this.page&&(this.d_page=e,this.$emit(`page-change`,e-1))}},computed:{inputArialabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.jumpToPageInputLabel:void 0}},components:{JTPInput:D}};function R(e,t,n,i,o,s){var c=r(`JTPInput`);return u(),m(c,{ref:`jtpInput`,modelValue:o.d_page,class:a(e.cx(`pcJumpToPageInputText`)),"aria-label":s.inputArialabel,disabled:n.disabled,"onUpdate:modelValue":s.onChange,unstyled:e.unstyled,pt:e.ptm(`pcJumpToPageInputText`)},null,8,[`modelValue`,`class`,`aria-label`,`disabled`,`onUpdate:modelValue`,`unstyled`,`pt`])}L.render=R;var z={name:`LastPageLink`,hostName:`Paginator`,extends:x,props:{template:{type:Function,default:null}},methods:{getPTOptions:function(e){return this.ptm(e,{context:{disabled:this.$attrs.disabled}})}},components:{AngleDoubleRightIcon:w},directives:{ripple:S}};function B(e,n,r,a,o,c){var d=t(`ripple`);return i((u(),s(`button`,l({class:e.cx(`last`),type:`button`},c.getPTOptions(`last`),{"data-pc-group-section":`pagebutton`}),[(u(),m(g(r.template||`AngleDoubleRightIcon`),l({class:e.cx(`lastIcon`)},c.getPTOptions(`lastIcon`)),null,16,[`class`]))],16)),[[d]])}z.render=B;var V={name:`NextPageLink`,hostName:`Paginator`,extends:x,props:{template:{type:Function,default:null}},methods:{getPTOptions:function(e){return this.ptm(e,{context:{disabled:this.$attrs.disabled}})}},components:{AngleRightIcon:C},directives:{ripple:S}};function H(e,n,r,a,o,c){var d=t(`ripple`);return i((u(),s(`button`,l({class:e.cx(`next`),type:`button`},c.getPTOptions(`next`),{"data-pc-group-section":`pagebutton`}),[(u(),m(g(r.template||`AngleRightIcon`),l({class:e.cx(`nextIcon`)},c.getPTOptions(`nextIcon`)),null,16,[`class`]))],16)),[[d]])}V.render=H;var U={name:`PageLinks`,hostName:`Paginator`,extends:x,inheritAttrs:!1,emits:[`click`],props:{value:Array,page:Number},methods:{getPTOptions:function(e,t){return this.ptm(t,{context:{active:e===this.page}})},onPageLinkClick:function(e,t){this.$emit(`click`,{originalEvent:e,value:t})},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},directives:{ripple:S}},W=[`aria-label`,`aria-current`,`onClick`,`data-p-active`];function G(e,r,a,o,f,m){var h=t(`ripple`);return u(),s(`span`,l({class:e.cx(`pages`)},e.ptm(`pages`)),[(u(!0),s(d,null,c(a.value,function(t){return i((u(),s(`button`,l({key:t,class:e.cx(`page`,{pageLink:t}),type:`button`,"aria-label":m.ariaPageLabel(t),"aria-current":t-1===a.page?`page`:void 0,onClick:function(e){return m.onPageLinkClick(e,t)}},{ref_for:!0},m.getPTOptions(t-1,`page`),{"data-p-active":t-1===a.page}),[n(p(t),1)],16,W)),[[h]])}),128))],16)}U.render=G;var K={name:`PrevPageLink`,hostName:`Paginator`,extends:x,props:{template:{type:Function,default:null}},methods:{getPTOptions:function(e){return this.ptm(e,{context:{disabled:this.$attrs.disabled}})}},components:{AngleLeftIcon:ee},directives:{ripple:S}};function q(e,n,r,a,o,c){var d=t(`ripple`);return i((u(),s(`button`,l({class:e.cx(`prev`),type:`button`},c.getPTOptions(`prev`),{"data-pc-group-section":`pagebutton`}),[(u(),m(g(r.template||`AngleLeftIcon`),l({class:e.cx(`prevIcon`)},c.getPTOptions(`prevIcon`)),null,16,[`class`]))],16)),[[d]])}K.render=q;var J={name:`RowsPerPageDropdown`,hostName:`Paginator`,extends:x,emits:[`rows-change`],props:{options:Array,rows:Number,disabled:Boolean,templates:null},methods:{onChange:function(e){this.$emit(`rows-change`,e)}},computed:{rowsOptions:function(){var e=[];if(this.options)for(var t=0;t<this.options.length;t++)e.push({label:String(this.options[t]),value:this.options[t]});return e}},components:{RPPSelect:E}};function ae(e,t,n,i,o,s){var c=r(`RPPSelect`);return u(),m(c,{modelValue:n.rows,options:s.rowsOptions,optionLabel:`label`,optionValue:`value`,"onUpdate:modelValue":t[0]||=function(e){return s.onChange(e)},class:a(e.cx(`pcRowPerPageDropdown`)),disabled:n.disabled,unstyled:e.unstyled,pt:e.ptm(`pcRowPerPageDropdown`),"data-pc-group-section":`pagedropdown`},h({_:2},[n.templates.rowsperpagedropdownicon?{name:`dropdownicon`,fn:f(function(e){return[(u(),m(g(n.templates.rowsperpagedropdownicon),{class:a(e.class)},null,8,[`class`]))]}),key:`0`}:void 0]),1032,[`modelValue`,`options`,`class`,`disabled`,`unstyled`,`pt`])}J.render=ae;function Y(e){"@babel/helpers - typeof";return Y=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Y(e)}function X(e,t){return le(e)||ce(e,t)||se(e,t)||oe()}function oe(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(e,t){if(e){if(typeof e==`string`)return Z(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}function Z(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ce(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function le(e){if(Array.isArray(e))return e}var Q={name:`Paginator`,extends:N,inheritAttrs:!1,emits:[`update:first`,`update:rows`,`page`],data:function(){return{d_first:this.first,d_rows:this.rows}},watch:{first:function(e){this.d_first=e},rows:function(e){this.d_rows=e},totalRecords:function(e){this.page>0&&e&&this.d_first>=e&&this.changePage(this.pageCount-1)}},mounted:function(){this.createStyle()},methods:{changePage:function(e){var t=this.pageCount;if(e>=0&&e<t){this.d_first=this.d_rows*e;var n={page:e,first:this.d_first,rows:this.d_rows,pageCount:t};this.$emit(`update:first`,this.d_first),this.$emit(`update:rows`,this.d_rows),this.$emit(`page`,n)}},changePageToFirst:function(e){this.isFirstPage||this.changePage(0),e.preventDefault()},changePageToPrev:function(e){this.changePage(this.page-1),e.preventDefault()},changePageLink:function(e){this.changePage(e.value-1),e.originalEvent.preventDefault()},changePageToNext:function(e){this.changePage(this.page+1),e.preventDefault()},changePageToLast:function(e){this.isLastPage||this.changePage(this.pageCount-1),e.preventDefault()},onRowChange:function(e){this.d_rows=e,this.changePage(this.page)},createStyle:function(){var e=this;if(this.hasBreakpoints()&&!this.isUnstyled){var t;this.styleElement=document.createElement(`style`),this.styleElement.type=`text/css`,y(this.styleElement,`nonce`,(t=this.$primevue)==null||(t=t.config)==null||(t=t.csp)==null?void 0:t.nonce),document.body.appendChild(this.styleElement);var n=``,r=Object.keys(this.template),i={};r.sort(function(e,t){return parseInt(e)-parseInt(t)}).forEach(function(t){i[t]=e.template[t]});for(var a=0,o=Object.entries(Object.entries(i));a<o.length;a++){var s=X(o[a],2),c=s[0],l=X(s[1],1)[0],u=void 0,d=void 0;d=l!=="default"&&typeof Object.keys(i)[c-1]==`string`?Number(Object.keys(i)[c-1].slice(0,-2))+1+`px`:Object.keys(i)[c-1],u=Object.entries(i)[c-1]?`and (min-width:${d})`:``,n+=l==="default"?`
                            @media screen ${u} {
                                .p-paginator[${this.$attrSelector}],
                                    display: flex;
                                }
                            }
                        `:`
.p-paginator-${l} {
    display: none;
}
@media screen ${u} and (max-width: ${l}) {
    .p-paginator-${l} {
        display: flex;
    }

    .p-paginator-default{
        display: none;
    }
}
                    `}this.styleElement.innerHTML=n}},hasBreakpoints:function(){return Y(this.template)===`object`},getAriaLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria[e]:void 0}},computed:{templateItems:function(){var e={};if(this.hasBreakpoints()){for(var t in e=this.template,e.default||(e.default=`FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown`),e)e[t]=this.template[t].split(` `).map(function(e){return e.trim()});return e}return e.default=this.template.split(` `).map(function(e){return e.trim()}),e},page:function(){return Math.floor(this.d_first/this.d_rows)},pageCount:function(){return Math.ceil(this.totalRecords/this.d_rows)},isFirstPage:function(){return this.page===0},isLastPage:function(){return this.page===this.pageCount-1},calculatePageLinkBoundaries:function(){var e=this.pageCount,t=Math.min(this.pageLinkSize,e),n=Math.max(0,Math.ceil(this.page-t/2)),r=Math.min(e-1,n+t-1),i=this.pageLinkSize-(r-n+1);return n=Math.max(0,n-i),[n,r]},pageLinks:function(){for(var e=[],t=this.calculatePageLinkBoundaries,n=t[0],r=t[1],i=n;i<=r;i++)e.push(i+1);return e},currentState:function(){return{page:this.page,first:this.d_first,rows:this.d_rows}},empty:function(){return this.pageCount===0},currentPage:function(){return this.pageCount>0?this.page+1:0},last:function(){return Math.min(this.d_first+this.rows,this.totalRecords)}},components:{CurrentPageReport:P,FirstPageLink:F,LastPageLink:z,NextPageLink:V,PageLinks:U,PrevPageLink:K,RowsPerPageDropdown:J,JumpToPageDropdown:I,JumpToPageInput:L}};function $(t,n,i,a,f,p){var h=r(`FirstPageLink`),g=r(`PrevPageLink`),y=r(`NextPageLink`),b=r(`LastPageLink`),x=r(`PageLinks`),S=r(`CurrentPageReport`),C=r(`RowsPerPageDropdown`),w=r(`JumpToPageDropdown`),T=r(`JumpToPageInput`);return t.alwaysShow||p.pageLinks&&p.pageLinks.length>1?(u(),s(`nav`,e(l({key:0},t.ptmi(`paginatorContainer`))),[(u(!0),s(d,null,c(p.templateItems,function(e,r){return u(),s(`div`,l({key:r,ref_for:!0,ref:`paginator`,class:t.cx(`paginator`,{key:r})},{ref_for:!0},t.ptm(`root`)),[t.$slots.container?_(t.$slots,`container`,{key:0,first:f.d_first+1,last:p.last,rows:f.d_rows,page:p.page,pageCount:p.pageCount,pageLinks:p.pageLinks,totalRecords:t.totalRecords,firstPageCallback:p.changePageToFirst,lastPageCallback:p.changePageToLast,prevPageCallback:p.changePageToPrev,nextPageCallback:p.changePageToNext,rowChangeCallback:p.onRowChange,changePageCallback:p.changePage}):(u(),s(d,{key:1},[t.$slots.start?(u(),s(`div`,l({key:0,class:t.cx(`contentStart`)},{ref_for:!0},t.ptm(`contentStart`)),[_(t.$slots,`start`,{state:p.currentState})],16)):v(``,!0),o(`div`,l({class:t.cx(`content`)},{ref_for:!0},t.ptm(`content`)),[(u(!0),s(d,null,c(e,function(e){return u(),s(d,{key:e},[e===`FirstPageLink`?(u(),m(h,{key:0,"aria-label":p.getAriaLabel(`firstPageLabel`),template:t.$slots.firsticon||t.$slots.firstpagelinkicon,onClick:n[0]||=function(e){return p.changePageToFirst(e)},disabled:p.isFirstPage||p.empty,unstyled:t.unstyled,pt:t.pt},null,8,[`aria-label`,`template`,`disabled`,`unstyled`,`pt`])):e===`PrevPageLink`?(u(),m(g,{key:1,"aria-label":p.getAriaLabel(`prevPageLabel`),template:t.$slots.previcon||t.$slots.prevpagelinkicon,onClick:n[1]||=function(e){return p.changePageToPrev(e)},disabled:p.isFirstPage||p.empty,unstyled:t.unstyled,pt:t.pt},null,8,[`aria-label`,`template`,`disabled`,`unstyled`,`pt`])):e===`NextPageLink`?(u(),m(y,{key:2,"aria-label":p.getAriaLabel(`nextPageLabel`),template:t.$slots.nexticon||t.$slots.nextpagelinkicon,onClick:n[2]||=function(e){return p.changePageToNext(e)},disabled:p.isLastPage||p.empty,unstyled:t.unstyled,pt:t.pt},null,8,[`aria-label`,`template`,`disabled`,`unstyled`,`pt`])):e===`LastPageLink`?(u(),m(b,{key:3,"aria-label":p.getAriaLabel(`lastPageLabel`),template:t.$slots.lasticon||t.$slots.lastpagelinkicon,onClick:n[3]||=function(e){return p.changePageToLast(e)},disabled:p.isLastPage||p.empty,unstyled:t.unstyled,pt:t.pt},null,8,[`aria-label`,`template`,`disabled`,`unstyled`,`pt`])):e===`PageLinks`?(u(),m(x,{key:4,"aria-label":p.getAriaLabel(`pageLabel`),value:p.pageLinks,page:p.page,onClick:n[4]||=function(e){return p.changePageLink(e)},unstyled:t.unstyled,pt:t.pt},null,8,[`aria-label`,`value`,`page`,`unstyled`,`pt`])):e===`CurrentPageReport`?(u(),m(S,{key:5,"aria-live":`polite`,template:t.currentPageReportTemplate,currentPage:p.currentPage,page:p.page,pageCount:p.pageCount,first:f.d_first,rows:f.d_rows,totalRecords:t.totalRecords,unstyled:t.unstyled,pt:t.pt},null,8,[`template`,`currentPage`,`page`,`pageCount`,`first`,`rows`,`totalRecords`,`unstyled`,`pt`])):e===`RowsPerPageDropdown`&&t.rowsPerPageOptions?(u(),m(C,{key:6,"aria-label":p.getAriaLabel(`rowsPerPageLabel`),rows:f.d_rows,options:t.rowsPerPageOptions,onRowsChange:n[5]||=function(e){return p.onRowChange(e)},disabled:p.empty,templates:t.$slots,unstyled:t.unstyled,pt:t.pt},null,8,[`aria-label`,`rows`,`options`,`disabled`,`templates`,`unstyled`,`pt`])):e===`JumpToPageDropdown`?(u(),m(w,{key:7,"aria-label":p.getAriaLabel(`jumpToPageDropdownLabel`),page:p.page,pageCount:p.pageCount,onPageChange:n[6]||=function(e){return p.changePage(e)},disabled:p.empty,templates:t.$slots,unstyled:t.unstyled,pt:t.pt},null,8,[`aria-label`,`page`,`pageCount`,`disabled`,`templates`,`unstyled`,`pt`])):e===`JumpToPageInput`?(u(),m(T,{key:8,page:p.currentPage,onPageChange:n[7]||=function(e){return p.changePage(e)},disabled:p.empty,unstyled:t.unstyled,pt:t.pt},null,8,[`page`,`disabled`,`unstyled`,`pt`])):v(``,!0)],64)}),128))],16),t.$slots.end?(u(),s(`div`,l({key:1,class:t.cx(`contentEnd`)},{ref_for:!0},t.ptm(`contentEnd`)),[_(t.$slots,`end`,{state:p.currentState})],16)):v(``,!0)],64))],16)}),128))],16)):v(``,!0)}Q.render=$;export{Q as default};