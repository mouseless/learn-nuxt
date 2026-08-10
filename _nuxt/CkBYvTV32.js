import{Ct as e,D as t,E as n,St as r,Yt as i,Zn as a,_ as o,b as s,bt as c,et as l,mt as u,o as d,qt as f,tr as ee,v as p,wt as m,xt as h,y as g}from"./B4b-2GOK.js";import{w as _}from"./C_cSr8y_.js";import{Ct as v,P as y,et as b,mt as x,t as S,w as C}from"./E-knF-Z8.js";import{t as w}from"./CRHlWn3X.js";import{t as T}from"./BLEQZSpC.js";import{t as E}from"./DH4VqoM8.js";import{t as te}from"./CIQ8XXnq.js";import{t as ne}from"./DoV2V33T2.js";import{n as re}from"./BlWD4UhT2.js";import{t as D}from"./De7QYr8X2.js";import{t as O}from"./CmbmQRcj2.js";import{t as k}from"./BkmtoD6p.js";import{n as A}from"./CF8ABqRb.js";import{t as ie}from"./D2oAZWIi.js";import{n as ae}from"./Cn8rKKiZ.js";import{n as oe}from"./mOkpzYBb.js";var se=S.extend({name:`tree`,style:`
    .p-tree {
        display: block;
        background: dt('tree.background');
        color: dt('tree.color');
        padding: dt('tree.padding');
    }

    .p-tree-root-children,
    .p-tree-node-children {
        display: flex;
        list-style-type: none;
        flex-direction: column;
        margin: 0;
        gap: dt('tree.gap');
    }

    .p-tree-root-children {
        padding: 0;
        padding-block-start: dt('tree.gap');
    }

    .p-tree-node-children {
        padding: 0;
        padding-block-start: dt('tree.gap');
        padding-inline-start: dt('tree.indent');
    }

    .p-tree-node {
        padding: 0;
        outline: 0 none;
    }

    .p-tree-node-content {
        border-radius: dt('tree.node.border.radius');
        padding: dt('tree.node.padding');
        display: flex;
        align-items: center;
        outline-color: transparent;
        color: dt('tree.node.color');
        gap: dt('tree.node.gap');
        transition:
            background dt('tree.transition.duration'),
            color dt('tree.transition.duration'),
            outline-color dt('tree.transition.duration'),
            box-shadow dt('tree.transition.duration');
    }

    .p-tree-node-content[data-p-dragging] {
        outline: 1px dashed dt('primary.color');
        outline-offset: -1px;
    }

    .p-tree-node-content[data-pc-section="drag-image"] {
        background: dt('tree.background');
    }

    .p-tree-node:focus-visible > .p-tree-node-content {
        box-shadow: dt('tree.node.focus.ring.shadow');
        outline: dt('tree.node.focus.ring.width') dt('tree.node.focus.ring.style') dt('tree.node.focus.ring.color');
        outline-offset: dt('tree.node.focus.ring.offset');
    }

    .p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover {
        background: dt('tree.node.hover.background');
        color: dt('tree.node.hover.color');
    }

    .p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover .p-tree-node-icon {
        color: dt('tree.node.icon.hover.color');
    }

    .p-tree-node-content.p-tree-node-selected {
        background: dt('tree.node.selected.background');
        color: dt('tree.node.selected.color');
    }

    .p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button {
        color: inherit;
    }

    .p-tree-node-content.p-tree-node-dragover {
        background: dt('tree.node.hover.background');
        color: dt('tree.node.hover.color');
    }

    .p-tree-node-drop-point {
		outline: 1px solid dt('primary.color');
	}

    .p-tree-node-toggle-button {
        cursor: pointer;
        user-select: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        flex-shrink: 0;
        width: dt('tree.node.toggle.button.size');
        height: dt('tree.node.toggle.button.size');
        color: dt('tree.node.toggle.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('tree.node.toggle.button.border.radius');
        transition:
            background dt('tree.transition.duration'),
            color dt('tree.transition.duration'),
            border-color dt('tree.transition.duration'),
            outline-color dt('tree.transition.duration'),
            box-shadow dt('tree.transition.duration');
        outline-color: transparent;
        padding: 0;
    }

    .p-tree-node-toggle-button:enabled:hover {
        background: dt('tree.node.toggle.button.hover.background');
        color: dt('tree.node.toggle.button.hover.color');
    }

    .p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button:hover {
        background: dt('tree.node.toggle.button.selected.hover.background');
        color: dt('tree.node.toggle.button.selected.hover.color');
    }

    .p-tree-root {
        overflow: auto;
    }

    .p-tree-node-selectable {
        cursor: pointer;
        user-select: none;
    }

    .p-tree-node-leaf > .p-tree-node-content .p-tree-node-toggle-button {
        visibility: hidden;
    }

    .p-tree-node-icon {
        color: dt('tree.node.icon.color');
        transition: color dt('tree.transition.duration');
    }

    .p-tree-node-content.p-tree-node-selected .p-tree-node-icon {
        color: dt('tree.node.icon.selected.color');
    }

    .p-tree-filter {
        margin: dt('tree.filter.margin');
    }

    .p-tree-filter-input {
        width: 100%;
    }

    .p-tree-loading {
        position: relative;
        height: 100%;
    }

    .p-tree-loading-icon {
        font-size: dt('tree.loading.icon.size');
        width: dt('tree.loading.icon.size');
        height: dt('tree.loading.icon.size');
    }

    .p-tree .p-tree-mask {
        position: absolute;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-tree-flex-scrollable {
        display: flex;
        flex: 1;
        height: 100%;
        flex-direction: column;
    }

    .p-tree-flex-scrollable .p-tree-root {
        flex: 1;
    }
`,classes:{root:function(e){var t=e.props;return[`p-tree p-component`,{"p-tree-selectable":t.selectionMode!=null,"p-tree-loading":t.loading,"p-tree-flex-scrollable":t.scrollHeight===`flex`}]},mask:`p-tree-mask p-overlay-mask`,loadingIcon:`p-tree-loading-icon`,pcFilterContainer:`p-tree-filter`,pcFilterInput:`p-tree-filter-input`,wrapper:`p-tree-root`,rootChildren:`p-tree-root-children`,node:function(e){return[`p-tree-node`,{"p-tree-node-leaf":e.instance.leaf}]},nodeContent:function(e){var t=e.instance;return[`p-tree-node-content`,t.node.styleClass,{"p-tree-node-selectable":t.selectable,"p-tree-node-selected":t.checkboxMode&&t.$parentInstance.highlightOnSelect?t.checked:t.selected}]},nodeToggleButton:`p-tree-node-toggle-button`,nodeToggleIcon:`p-tree-node-toggle-icon`,nodeCheckbox:`p-tree-node-checkbox`,nodeIcon:`p-tree-node-icon`,nodeLabel:`p-tree-node-label`,nodeChildren:`p-tree-node-children`}}),ce={name:`BaseTree`,extends:T,props:{value:{type:null,default:null},expandedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},metaKeySelection:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},loadingMode:{type:String,default:`mask`},filter:{type:Boolean,default:!1},filterBy:{type:[String,Function],default:`label`},filterMode:{type:String,default:`lenient`},filterPlaceholder:{type:String,default:null},filterLocale:{type:String,default:void 0},highlightOnSelect:{type:Boolean,default:!1},scrollHeight:{type:String,default:null},level:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:se,provide:function(){return{$pcTree:this,$parentInstance:this}}};function j(e){"@babel/helpers - typeof";return j=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},j(e)}function M(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=L(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?N(Object(n),!0).forEach(function(t){le(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function le(e,t,n){return(t=ue(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ue(e){var t=de(e,`string`);return j(t)==`symbol`?t:t+``}function de(e,t){if(j(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(j(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function F(e){return z(e)||R(e)||L(e)||I()}function I(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(e,t){if(e){if(typeof e==`string`)return B(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}function R(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function z(e){if(Array.isArray(e))return B(e)}function B(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var V={name:`TreeNode`,hostName:`Tree`,extends:T,emits:[`node-toggle`,`node-click`,`checkbox-change`],props:{node:{type:null,default:null},expandedKeys:{type:null,default:null},loadingMode:{type:String,default:`mask`},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},templates:{type:null,default:null},level:{type:Number,default:null},index:null},nodeTouched:!1,toggleClicked:!1,mounted:function(){this.setAllNodesTabIndexes()},methods:{toggle:function(){this.$emit(`node-toggle`,this.node),this.toggleClicked=!0},label:function(e){return typeof e.label==`function`?e.label():e.label},onChildNodeToggle:function(e){this.$emit(`node-toggle`,e)},getPTOptions:function(e){return this.ptm(e,{context:{node:this.node,index:this.index,expanded:this.expanded,selected:this.selected,checked:this.checked,partialChecked:this.partialChecked,leaf:this.leaf}})},onClick:function(e){if(this.toggleClicked||C(e.target,`[data-pc-section="nodetogglebutton"]`)||C(e.target.parentElement,`[data-pc-section="nodetogglebutton"]`)){this.toggleClicked=!1;return}this.isCheckboxSelectionMode()?this.node.selectable!=0&&this.toggleCheckbox():this.$emit(`node-click`,{originalEvent:e,nodeTouched:this.nodeTouched,node:this.node}),this.nodeTouched=!1},onChildNodeClick:function(e){this.$emit(`node-click`,e)},onTouchEnd:function(){this.nodeTouched=!0},onKeyDown:function(e){if(this.isSameNode(e))switch(e.code){case`Tab`:this.onTabKey(e);break;case`ArrowDown`:this.onArrowDown(e);break;case`ArrowUp`:this.onArrowUp(e);break;case`ArrowRight`:this.onArrowRight(e);break;case`ArrowLeft`:this.onArrowLeft(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onEnterKey(e)}},onArrowDown:function(e){var t=e.target.getAttribute(`data-pc-section`)===`nodetogglebutton`?e.target.closest(`[role="treeitem"]`):e.target,n=t.children[1];if(n)this.focusRowChange(t,n.children[0]);else if(t.nextElementSibling)this.focusRowChange(t,t.nextElementSibling);else{var r=this.findNextSiblingOfAncestor(t);r&&this.focusRowChange(t,r)}e.preventDefault()},onArrowUp:function(e){var t=e.target;if(t.previousElementSibling)this.focusRowChange(t,t.previousElementSibling,this.findLastVisibleDescendant(t.previousElementSibling));else{var n=this.getParentNodeElement(t);n&&this.focusRowChange(t,n)}e.preventDefault()},onArrowRight:function(e){var t=this;this.leaf||this.expanded||(e.currentTarget.tabIndex=-1,this.$emit(`node-toggle`,this.node),this.$nextTick(function(){t.onArrowDown(e)}))},onArrowLeft:function(e){var t=b(e.currentTarget,`[data-pc-section="nodetogglebutton"]`);if(this.level===0&&!this.expanded)return!1;if(this.expanded&&!this.leaf)return t.click(),!1;var n=this.findBeforeClickableNode(e.currentTarget);n&&this.focusRowChange(e.currentTarget,n)},onEnterKey:function(e){this.setTabIndexForSelectionMode(e,this.nodeTouched),this.onClick(e),e.preventDefault()},onTabKey:function(){this.setAllNodesTabIndexes()},setAllNodesTabIndexes:function(){var e=y(this.$refs.currentNode.closest(`[data-pc-section="rootchildren"]`),`[role="treeitem"]`),t=F(e).some(function(e){return e.getAttribute(`aria-selected`)===`true`||e.getAttribute(`aria-checked`)===`true`});if(F(e).forEach(function(e){e.tabIndex=-1}),t){var n=F(e).filter(function(e){return e.getAttribute(`aria-selected`)===`true`||e.getAttribute(`aria-checked`)===`true`});n[0].tabIndex=0;return}F(e)[0].tabIndex=0},setTabIndexForSelectionMode:function(e,t){if(this.selectionMode!==null){var n=F(y(this.$refs.currentNode.parentElement,`[role="treeitem"]`));e.currentTarget.tabIndex=t===!1?-1:0,n.every(function(e){return e.tabIndex===-1})&&(n[0].tabIndex=0)}},focusRowChange:function(e,t,n){e.tabIndex=`-1`,t.tabIndex=`0`,this.focusNode(n||t)},findBeforeClickableNode:function(e){var t=e.closest(`ul`).closest(`li`);if(t){var n=b(t,`button`);return n&&n.style.visibility!==`hidden`?t:this.findBeforeClickableNode(e.previousElementSibling)}return null},toggleCheckbox:function(){var e=this.selectionKeys?P({},this.selectionKeys):{},t=!this.checked;this.propagateDown(this.node,t,e),this.$emit(`checkbox-change`,{node:this.node,check:t,selectionKeys:e})},propagateDown:function(e,t,n){if(t&&e.selectable!=0?n[e.key]={checked:!0,partialChecked:!1}:delete n[e.key],e.children&&e.children.length){var r=M(e.children),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;this.propagateDown(a,t,n)}}catch(e){r.e(e)}finally{r.f()}}},propagateUp:function(e){var t=e.check,n=P({},e.selectionKeys),r=0,i=!1,a=M(this.node.children),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;n[s.key]&&n[s.key].checked?r++:n[s.key]&&n[s.key].partialChecked&&(i=!0)}}catch(e){a.e(e)}finally{a.f()}t&&r===this.node.children.length?n[this.node.key]={checked:!0,partialChecked:!1}:(t||delete n[this.node.key],i||r>0&&r!==this.node.children.length?n[this.node.key]={checked:!1,partialChecked:!0}:delete n[this.node.key]),this.$emit(`checkbox-change`,{node:e.node,check:e.check,selectionKeys:n})},onChildCheckboxChange:function(e){this.$emit(`checkbox-change`,e)},findNextSiblingOfAncestor:function(e){var t=this.getParentNodeElement(e);return t?t.nextElementSibling?t.nextElementSibling:this.findNextSiblingOfAncestor(t):null},findLastVisibleDescendant:function(e){var t=e.children[1];if(t){var n=t.children[t.children.length-1];return this.findLastVisibleDescendant(n)}return e},getParentNodeElement:function(e){var t=e.parentElement.parentElement;return C(t,`role`)===`treeitem`?t:null},focusNode:function(e){e.focus()},isCheckboxSelectionMode:function(){return this.selectionMode===`checkbox`},isSameNode:function(e){return e.currentTarget&&(e.currentTarget.isSameNode(e.target)||e.currentTarget.isSameNode(e.target.closest(`[role="treeitem"]`)))}},computed:{hasChildren:function(){return this.node.children&&this.node.children.length>0},expanded:function(){return this.expandedKeys&&this.expandedKeys[this.node.key]===!0},leaf:function(){return this.node.leaf!==!1&&!(this.node.children&&this.node.children.length)},selectable:function(){return this.node.selectable!==!1&&this.selectionMode!=null},selected:function(){return this.selectionMode&&this.selectionKeys?this.selectionKeys[this.node.key]===!0:!1},checkboxMode:function(){return this.selectionMode===`checkbox`&&this.node.selectable!==!1},checked:function(){return this.selectionKeys?this.selectionKeys[this.node.key]&&this.selectionKeys[this.node.key].checked:!1},partialChecked:function(){return this.selectionKeys?this.selectionKeys[this.node.key]&&this.selectionKeys[this.node.key].partialChecked:!1},ariaChecked:function(){return this.selectionMode===`single`||this.selectionMode===`multiple`?this.selected:void 0},ariaSelected:function(){return this.checkboxMode?this.checked:void 0}},components:{Checkbox:A,ChevronDownIcon:O,ChevronRightIcon:D,CheckIcon:ne,MinusIcon:k,SpinnerIcon:E},directives:{ripple:te}},H=[`aria-label`,`aria-selected`,`aria-expanded`,`aria-setsize`,`aria-posinset`,`aria-level`,`aria-checked`,`tabindex`],fe=[`data-p-selected`,`data-p-selectable`],pe=[`data-p-leaf`];function me(t,h,v,y,b,x){var S=r(`SpinnerIcon`),C=r(`Checkbox`),w=r(`TreeNode`,!0),T=e(`ripple`);return u(),s(`li`,l({ref:`currentNode`,class:t.cx(`node`),role:`treeitem`,"aria-label":x.label(v.node),"aria-selected":x.ariaSelected,"aria-expanded":x.expanded,"aria-setsize":v.node.children?v.node.children.length:0,"aria-posinset":v.index+1,"aria-level":v.level,"aria-checked":x.ariaChecked,tabindex:v.index===0?0:-1,onKeydown:h[4]||=function(){return x.onKeyDown&&x.onKeyDown.apply(x,arguments)}},x.getPTOptions(`node`)),[o(`div`,l({class:t.cx(`nodeContent`),onClick:h[2]||=function(){return x.onClick&&x.onClick.apply(x,arguments)},onTouchend:h[3]||=function(){return x.onTouchEnd&&x.onTouchEnd.apply(x,arguments)},style:v.node.style},x.getPTOptions(`nodeContent`),{"data-p-selected":x.checkboxMode?x.checked:x.selected,"data-p-selectable":x.selectable}),[i((u(),s(`button`,l({type:`button`,class:t.cx(`nodeToggleButton`),onClick:h[0]||=function(){return x.toggle&&x.toggle.apply(x,arguments)},tabindex:`-1`,"data-p-leaf":x.leaf},x.getPTOptions(`nodeToggleButton`)),[v.node.loading&&v.loadingMode===`icon`?(u(),s(d,{key:0},[v.templates.nodetoggleicon||v.templates.nodetogglericon?(u(),p(m(v.templates.nodetoggleicon||v.templates.nodetogglericon),{key:0,node:v.node,expanded:x.expanded,class:a(t.cx(`nodeToggleIcon`))},null,8,[`node`,`expanded`,`class`])):(u(),p(S,l({key:1,spin:``,class:t.cx(`nodeToggleIcon`)},x.getPTOptions(`nodeToggleIcon`)),null,16,[`class`]))],64)):(u(),s(d,{key:1},[v.templates.nodetoggleicon||v.templates.togglericon?(u(),p(m(v.templates.nodetoggleicon||v.templates.togglericon),{key:0,node:v.node,expanded:x.expanded,class:a(t.cx(`nodeToggleIcon`))},null,8,[`node`,`expanded`,`class`])):x.expanded?(u(),p(m(v.node.expandedIcon?`span`:`ChevronDownIcon`),l({key:1,class:t.cx(`nodeToggleIcon`)},x.getPTOptions(`nodeToggleIcon`)),null,16,[`class`])):(u(),p(m(v.node.collapsedIcon?`span`:`ChevronRightIcon`),l({key:2,class:t.cx(`nodeToggleIcon`)},x.getPTOptions(`nodeToggleIcon`)),null,16,[`class`]))],64))],16,pe)),[[T]]),x.checkboxMode?(u(),p(C,{key:0,defaultValue:x.checked,binary:!0,indeterminate:x.partialChecked,class:a(t.cx(`nodeCheckbox`)),tabindex:-1,unstyled:t.unstyled,pt:x.getPTOptions(`pcNodeCheckbox`),"data-p-partialchecked":x.partialChecked},{icon:f(function(e){return[v.templates.checkboxicon?(u(),p(m(v.templates.checkboxicon),{key:0,checked:e.checked,partialChecked:x.partialChecked,class:a(e.class)},null,8,[`checked`,`partialChecked`,`class`])):g(``,!0)]}),_:1},8,[`defaultValue`,`indeterminate`,`class`,`unstyled`,`pt`,`data-p-partialchecked`])):g(``,!0),v.templates.nodeicon?(u(),p(m(v.templates.nodeicon),l({key:1,node:v.node,class:[t.cx(`nodeIcon`)]},x.getPTOptions(`nodeIcon`)),null,16,[`node`,`class`])):(u(),s(`span`,l({key:2,class:[t.cx(`nodeIcon`),v.node.icon]},x.getPTOptions(`nodeIcon`)),null,16)),o(`span`,l({class:t.cx(`nodeLabel`)},x.getPTOptions(`nodeLabel`),{onKeydown:h[1]||=_(function(){},[`stop`])}),[v.templates[v.node.type]||v.templates.default?(u(),p(m(v.templates[v.node.type]||v.templates.default),{key:0,node:v.node,expanded:x.expanded,selected:x.checkboxMode?x.checked:x.selected},null,8,[`node`,`expanded`,`selected`])):(u(),s(d,{key:1},[n(ee(x.label(v.node)),1)],64))],16)],16,fe),x.hasChildren&&x.expanded?(u(),s(`ul`,l({key:0,class:t.cx(`nodeChildren`),role:`group`},t.ptm(`nodeChildren`)),[(u(!0),s(d,null,c(v.node.children,function(e,n){return u(),p(w,{key:e.key,node:e,templates:v.templates,level:v.level+1,index:n,loadingMode:v.loadingMode,expandedKeys:v.expandedKeys,onNodeToggle:x.onChildNodeToggle,onNodeClick:x.onChildNodeClick,selectionMode:v.selectionMode,selectionKeys:v.selectionKeys,onCheckboxChange:x.propagateUp,unstyled:t.unstyled,pt:t.pt},null,8,[`node`,`templates`,`level`,`index`,`loadingMode`,`expandedKeys`,`onNodeToggle`,`onNodeClick`,`selectionMode`,`selectionKeys`,`onCheckboxChange`,`unstyled`,`pt`])}),128))],16)):g(``,!0)],16,H)}V.render=me;function U(e){"@babel/helpers - typeof";return U=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},U(e)}function W(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=G(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function he(e){return ve(e)||_e(e)||G(e)||ge()}function ge(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(e,t){if(e){if(typeof e==`string`)return K(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}function _e(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ve(e){if(Array.isArray(e))return K(e)}function K(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?q(Object(n),!0).forEach(function(t){ye(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ye(e,t,n){return(t=be(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function be(e){var t=xe(e,`string`);return U(t)==`symbol`?t:t+``}function xe(e,t){if(U(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(U(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Y={name:`Tree`,extends:ce,inheritAttrs:!1,emits:[`node-expand`,`node-collapse`,`update:expandedKeys`,`update:selectionKeys`,`node-select`,`node-unselect`,`filter`],data:function(){return{d_expandedKeys:this.expandedKeys||{},filterValue:null}},watch:{expandedKeys:function(e){this.d_expandedKeys=e}},methods:{onNodeToggle:function(e){var t=e.key;this.d_expandedKeys[t]?(delete this.d_expandedKeys[t],this.$emit(`node-collapse`,e)):(this.d_expandedKeys[t]=!0,this.$emit(`node-expand`,e)),this.d_expandedKeys=J({},this.d_expandedKeys),this.$emit(`update:expandedKeys`,this.d_expandedKeys)},onNodeClick:function(e){if(this.selectionMode!=null&&e.node.selectable!==!1){var t=!e.nodeTouched&&this.metaKeySelection?this.handleSelectionWithMetaKey(e):this.handleSelectionWithoutMetaKey(e);this.$emit(`update:selectionKeys`,t)}},onCheckboxChange:function(e){this.$emit(`update:selectionKeys`,e.selectionKeys),e.check?this.$emit(`node-select`,e.node):this.$emit(`node-unselect`,e.node)},handleSelectionWithMetaKey:function(e){var t=e.originalEvent,n=e.node,r=t.metaKey||t.ctrlKey,i=this.isNodeSelected(n),a;return i&&r?(this.isSingleSelectionMode()?a={}:(a=J({},this.selectionKeys),delete a[n.key]),this.$emit(`node-unselect`,n)):(this.isSingleSelectionMode()?a={}:this.isMultipleSelectionMode()&&(a=r&&this.selectionKeys?J({},this.selectionKeys):{}),a[n.key]=!0,this.$emit(`node-select`,n)),a},handleSelectionWithoutMetaKey:function(e){var t=e.node,n=this.isNodeSelected(t),r;return this.isSingleSelectionMode()?n?(r={},this.$emit(`node-unselect`,t)):(r={},r[t.key]=!0,this.$emit(`node-select`,t)):n?(r=J({},this.selectionKeys),delete r[t.key],this.$emit(`node-unselect`,t)):(r=this.selectionKeys?J({},this.selectionKeys):{},r[t.key]=!0,this.$emit(`node-select`,t)),r},isSingleSelectionMode:function(){return this.selectionMode===`single`},isMultipleSelectionMode:function(){return this.selectionMode===`multiple`},isNodeSelected:function(e){return this.selectionMode&&this.selectionKeys?this.selectionKeys[e.key]===!0:!1},isChecked:function(e){return this.selectionKeys?this.selectionKeys[e.key]&&this.selectionKeys[e.key].checked:!1},isNodeLeaf:function(e){return e.leaf!==!1&&!(e.children&&e.children.length)},onFilterKeyup:function(e){(e.code===`Enter`||e.code===`NumpadEnter`)&&e.preventDefault(),this.$emit(`filter`,{originalEvent:e,value:e.target.value})},findFilteredNodes:function(e,t){if(e){var n=!1;if(e.children){var r=he(e.children);e.children=[];var i=W(r),a;try{for(i.s();!(a=i.n()).done;){var o=a.value,s=J({},o);this.isFilterMatched(s,t)&&(n=!0,e.children.push(s))}}catch(e){i.e(e)}finally{i.f()}}if(n)return!0}},isFilterMatched:function(e,t){var n=t.searchFields,r=t.filterText,i=t.strict,a=!1,o=W(n),s;try{for(o.s();!(s=o.n()).done;){var c=s.value;String(v(e,c)).toLocaleLowerCase(this.filterLocale).indexOf(r)>-1&&(a=!0)}}catch(e){o.e(e)}finally{o.f()}return(!a||i&&!this.isNodeLeaf(e))&&(a=this.findFilteredNodes(e,{searchFields:n,filterText:r,strict:i})||a),a}},computed:{filteredValue:function(){var e=[],t=x(this.filterBy)?[this.filterBy]:this.filterBy.split(`,`),n=this.filterValue.trim().toLocaleLowerCase(this.filterLocale),r=this.filterMode===`strict`,i=W(this.value),a;try{for(i.s();!(a=i.n()).done;){var o=a.value,s=J({},o),c={searchFields:t,filterText:n,strict:r};(r&&(this.findFilteredNodes(s,c)||this.isFilterMatched(s,c))||!r&&(this.isFilterMatched(s,c)||this.findFilteredNodes(s,c)))&&e.push(s)}}catch(e){i.e(e)}finally{i.f()}return e},valueToRender:function(){return this.filterValue&&this.filterValue.trim().length>0?this.filteredValue:this.value},containerDataP:function(){return w({loading:this.loading,scrollable:this.scrollHeight===`flex`})},wrapperDataP:function(){return w({scrollable:this.scrollHeight===`flex`})}},components:{TreeNode:V,InputText:re,InputIcon:oe,IconField:ae,SearchIcon:ie,SpinnerIcon:E}};function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Z(Object(n),!0).forEach(function(t){$(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function $(e,t,n){return(t=Se(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Se(e){var t=Ce(e,`string`);return X(t)==`symbol`?t:t+``}function Ce(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var we=[`data-p`],Te=[`data-p`],Ee=[`aria-labelledby`,`aria-label`];function De(e,n,i,ee,m,_){var v=r(`SpinnerIcon`),y=r(`InputText`),b=r(`SearchIcon`),x=r(`InputIcon`),S=r(`IconField`),C=r(`TreeNode`);return u(),s(`div`,l({class:e.cx(`root`),"data-p":_.containerDataP},e.ptmi(`root`)),[e.loading&&e.loadingMode===`mask`?(u(),s(`div`,l({key:0,class:e.cx(`mask`)},e.ptm(`mask`)),[h(e.$slots,`loadingicon`,{class:a(e.cx(`loadingIcon`))},function(){return[e.loadingIcon?(u(),s(`i`,l({key:0,class:[e.cx(`loadingIcon`),`pi-spin`,e.loadingIcon]},e.ptm(`loadingIcon`)),null,16)):(u(),p(v,l({key:1,spin:``,class:e.cx(`loadingIcon`)},e.ptm(`loadingIcon`)),null,16,[`class`]))]})],16)):g(``,!0),e.filter?(u(),p(S,{key:1,unstyled:e.unstyled,pt:Q(Q({},e.ptm(`pcFilter`)),e.ptm(`pcFilterContainer`)),class:a(e.cx(`pcFilterContainer`))},{default:f(function(){return[t(y,{modelValue:m.filterValue,"onUpdate:modelValue":n[0]||=function(e){return m.filterValue=e},autocomplete:`off`,class:a(e.cx(`pcFilterInput`)),placeholder:e.filterPlaceholder,unstyled:e.unstyled,onKeyup:_.onFilterKeyup,pt:e.ptm(`pcFilterInput`)},null,8,[`modelValue`,`class`,`placeholder`,`unstyled`,`onKeyup`,`pt`]),t(x,{unstyled:e.unstyled,pt:e.ptm(`pcFilterIconContainer`)},{default:f(function(){return[h(e.$slots,e.$slots.filtericon?`filtericon`:`searchicon`,{class:a(e.cx(`filterIcon`))},function(){return[t(b,l({class:e.cx(`filterIcon`)},e.ptm(`filterIcon`)),null,16,[`class`])]})]}),_:3},8,[`unstyled`,`pt`])]}),_:3},8,[`unstyled`,`pt`,`class`])):g(``,!0),o(`div`,l({class:e.cx(`wrapper`),style:{maxHeight:e.scrollHeight},"data-p":_.wrapperDataP},e.ptm(`wrapper`)),[h(e.$slots,`header`,{value:e.value,expandedKeys:e.expandedKeys,selectionKeys:e.selectionKeys}),o(`ul`,l({class:e.cx(`rootChildren`),role:`tree`,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptm(`rootChildren`)),[(u(!0),s(d,null,c(_.valueToRender,function(t,n){return u(),p(C,{key:t.key,node:t,templates:e.$slots,level:e.level+1,index:n,expandedKeys:m.d_expandedKeys,onNodeToggle:_.onNodeToggle,onNodeClick:_.onNodeClick,selectionMode:e.selectionMode,selectionKeys:e.selectionKeys,onCheckboxChange:_.onCheckboxChange,loadingMode:e.loadingMode,unstyled:e.unstyled,pt:e.pt},null,8,[`node`,`templates`,`level`,`index`,`expandedKeys`,`onNodeToggle`,`onNodeClick`,`selectionMode`,`selectionKeys`,`onCheckboxChange`,`loadingMode`,`unstyled`,`pt`])}),128))],16,Ee),h(e.$slots,`footer`,{value:e.value,expandedKeys:e.expandedKeys,selectionKeys:e.selectionKeys})],16,Te)],16,we)}Y.render=De;export{Y as default};