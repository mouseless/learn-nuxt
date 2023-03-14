export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S){return {data:{"content-query-R06bpTvUhn":[{_path:"\u002Fcontent",title:"Content",position:1},{_path:"\u002Fpages",title:"Pages",position:e},{_path:"\u002Ftemplate-syntax",title:"Template Syntax",position:3},{_path:t,title:k,position:u},{_path:"\u002Frouting",title:"Routing",position:5},{_path:"\u002Fconfiguration",title:"Configuration",position:6},{_path:"\u002Fusing-scss",title:"Using Scss",position:99},{_path:"\u002Fsetup-guide",title:"Setup Guide",position:100},{_path:"\u002Fbuild-and-run",title:"Build & Run",position:101},{_path:"\u002Fcontributing",title:"Contributing",position:102}],"content-query-IGYniFpqan":{_path:t,_dir:m,_draft:n,_partial:n,_locale:m,_empty:n,title:k,description:"Components are reusable pieces which can be created manually using built in\ncomponents. Creating components gives you flexibility in designing your UI.\nTo create a component, create a vue file in .theme\u002Fcomponents directory.",position:u,body:{type:"root",children:[{type:b,tag:"h1",props:{id:"components"},children:[{type:a,value:k}]},{type:b,tag:c,props:{},children:[{type:a,value:"Components are reusable pieces which can be created manually using built in\ncomponents. Creating components gives you flexibility in designing your UI.\nTo create a component, create a vue file in "},{type:b,tag:d,props:{},children:[{type:a,value:v}]},{type:a,value:" directory."}]},{type:b,tag:g,props:{id:w},children:[{type:a,value:x}]},{type:b,tag:c,props:{},children:[{type:a,value:"Basic component is our understanding of a component in its simplest form,\nto create a basic component create the vue file "},{type:b,tag:d,props:{},children:[{type:a,value:"BasicComponent.vue"}]},{type:a,value:" in\n"},{type:b,tag:d,props:{},children:[{type:a,value:v}]},{type:a,value:" directory. To create more complex components this base\ncomponent can be used as a starting point. Then use this component in a page\nas shown in "},{type:b,tag:d,props:{},children:[{type:a,value:".theme\u002Fpages\u002Fdemo\u002Fbasic.vue"}]},{type:a,value:o}]},{type:b,tag:c,props:{},children:[{type:a,value:j},{type:b,tag:h,props:{href:y},children:[{type:a,value:y}]},{type:a,value:o}]},{type:b,tag:g,props:{id:z},children:[{type:a,value:A}]},{type:b,tag:c,props:{},children:[{type:a,value:"To add properties to a component, "},{type:b,tag:d,props:{},children:[{type:a,value:"defineProps"}]},{type:a,value:" can be used and type and default\nvalue can be set as shown in "},{type:b,tag:d,props:{},children:[{type:a,value:".\u002Ftheme\u002Fcomponents\u002FComponentWithProps.vue"}]},{type:a,value:". More\nproperties can be added later on. Values of these properties can be assigned\nwhen using the component with properties as shown in\n"},{type:b,tag:d,props:{},children:[{type:a,value:".theme\u002Fdemo\u002Fdefining-props.vue"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:j},{type:b,tag:h,props:{href:B},children:[{type:a,value:B}]}]},{type:b,tag:g,props:{id:C},children:[{type:a,value:D}]},{type:b,tag:c,props:{},children:[{type:a,value:"Emit is the way to raise events from a component to its parent, like a click\nevent. Ref is used for reactivity, so when a state is expected to change use\n"},{type:b,tag:d,props:{},children:[{type:a,value:"ref"}]},{type:a,value:" for changes to apply to the template immediately."}]},{type:b,tag:c,props:{},children:[{type:a,value:j},{type:b,tag:h,props:{href:E},children:[{type:a,value:E}]}]},{type:b,tag:g,props:{id:F},children:[{type:a,value:G}]},{type:b,tag:c,props:{},children:[{type:a,value:"To emit a global change, we use nuxt's state management. To achieve this;"}]},{type:b,tag:"ol",props:{},children:[{type:b,tag:p,props:{},children:[{type:a,value:"Introduce a state with its default value function as shown in\n"},{type:b,tag:d,props:{},children:[{type:a,value:".theme\u002Fcomposables\u002Fstates.js"}]}]},{type:b,tag:p,props:{},children:[{type:a,value:"Import and modify it as shown in\n"},{type:b,tag:d,props:{},children:[{type:a,value:".theme\u002Fcomponents\u002FComponentThatEmitsGlobally.vue"}]}]},{type:b,tag:p,props:{},children:[{type:a,value:"Watch it as shown in "},{type:b,tag:d,props:{},children:[{type:a,value:".theme\u002Fpages\u002Fdemo\u002Fcomponents\u002Fglobal-emit.vue"}]}]}]},{type:b,tag:c,props:{},children:[{type:a,value:j},{type:b,tag:h,props:{href:H},children:[{type:a,value:H}]}]},{type:b,tag:g,props:{id:I},children:[{type:a,value:q}]},{type:b,tag:c,props:{},children:[{type:a,value:"Prose components are wrappers of html tags that are used to render markdown\ncontent. When you want to change the way nuxt renders markdown you need to\noverride a prose component."}]},{type:b,tag:c,props:{},children:[{type:a,value:"To override a prose, let's say "},{type:b,tag:d,props:{},children:[{type:a,value:"\u003Ctable\u003E"}]},{type:a,value:", browse to "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fcontent\u002Fblob\u002Fmain\u002Fsrc\u002Fruntime\u002Fcomponents\u002FProse\u002F",rel:["nofollow"]},children:[{type:a,value:"Nuxt Content \u002F\nProse"}]},{type:a,value:"\nand copy corresponding component, "},{type:b,tag:d,props:{},children:[{type:a,value:J}]},{type:a,value:" in this case, and place it\nunder exactly the same path "},{type:b,tag:d,props:{},children:[{type:a,value:".theme\u002Fcomponents\u002FProse\u002F"}]},{type:a,value:", and make any change you\nwant."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Below is a demonstration of overriding "},{type:b,tag:d,props:{},children:[{type:a,value:J}]},{type:a,value:";"}]},{type:b,tag:"table",props:{},children:[{type:b,tag:"thead",props:{},children:[{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{align:f},children:[{type:a,value:"Override"}]},{type:b,tag:s,props:{align:f},children:[{type:a,value:"This"}]},{type:b,tag:s,props:{align:f},children:[{type:a,value:"Table"}]}]}]},{type:b,tag:"tbody",props:{},children:[{type:b,tag:r,props:{},children:[{type:b,tag:i,props:{align:f},children:[{type:a,value:"Using"}]},{type:b,tag:i,props:{align:f},children:[{type:a,value:q}]},{type:b,tag:i,props:{align:f},children:[{type:a,value:k}]}]},{type:b,tag:r,props:{},children:[{type:b,tag:i,props:{align:f},children:[{type:a,value:"To"}]},{type:b,tag:i,props:{align:f},children:[{type:a,value:"Add"}]},{type:b,tag:i,props:{align:f},children:[{type:a,value:"Border"}]}]}]}]},{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:K}]},{type:b,tag:c,props:{},children:[{type:a,value:"You need to configure "},{type:b,tag:d,props:{},children:[{type:a,value:"~\u002Fcomponents\u002FProse"}]},{type:a,value:" as a global directory to enable\nthis. See "},{type:b,tag:d,props:{},children:[{type:a,value:".theme\u002Fnuxt.config.ts"}]},{type:a,value:o}]}]},{type:b,tag:g,props:{id:L},children:[{type:a,value:M}]},{type:b,tag:c,props:{},children:[{type:a,value:"We need this one to create an alarm component out of a blockquote with an icon\nin its first line like below;"}]},{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:":warning:"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Demo warning message"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Content of this blockquote is passed to "},{type:b,tag:d,props:{},children:[{type:a,value:"ProseBlockquote"}]},{type:a,value:" component in\n"},{type:b,tag:d,props:{},children:[{type:a,value:N}]},{type:a,value:". To parse the first line of this slot, we used "},{type:b,tag:d,props:{},children:[{type:a,value:"useSlots"}]},{type:a,value:" in script\nwhere nuxt gives access to element tree of a markdown content."}]},{type:b,tag:c,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:N}]},{type:a,value:" does not allow to manipulate its content, so we used "},{type:b,tag:d,props:{},children:[{type:a,value:"\u003Ccomponent :is=\"...\"\u002F\u003E"}]},{type:a,value:" instead. This is the way to render a slot that is programmatically\nchanged or created."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Other types demonstrated below;"}]},{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:K}]},{type:b,tag:c,props:{},children:[{type:a,value:"Demo info message"}]}]},{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:"Demo default message"}]}]},{type:b,tag:g,props:{id:O},children:[{type:a,value:P}]},{type:b,tag:c,props:{},children:[{type:a,value:"When you need to access a data that cannot be passed to a component (such as\nprose components), we use "},{type:b,tag:d,props:{},children:[{type:a,value:Q}]},{type:a,value:" and "},{type:b,tag:d,props:{},children:[{type:a,value:R}]},{type:a,value:" functions. Basically you\n"},{type:b,tag:d,props:{},children:[{type:a,value:Q}]},{type:a,value:" a value in a parent component to be "},{type:b,tag:d,props:{},children:[{type:a,value:R}]},{type:a,value:"ed in any child\ncomponents."}]},{type:b,tag:c,props:{},children:[{type:b,tag:"img",props:{alt:"diagram",src:".\u002Fcomponents-1.png"},children:[]}]},{type:b,tag:c,props:{},children:[{type:a,value:j},{type:b,tag:h,props:{href:S},children:[{type:a,value:S}]}]}],toc:{title:m,searchDepth:e,depth:e,links:[{id:w,depth:e,text:x},{id:z,depth:e,text:A},{id:C,depth:e,text:D},{id:F,depth:e,text:G},{id:I,depth:e,text:q},{id:L,depth:e,text:M},{id:O,depth:e,text:P}]}},_type:"markdown",_id:"content:components.md",_source:"content",_file:"components.md",_extension:"md"}},prerenderedAt:1678803349322}}("text","element","p","code-inline",2,null,"h2","a","td","Demo is at ","Components","blockquote","",false,".","li","Prose","tr","th","\u002Fcomponents",4,".theme\u002Fcomponents","basic-component","Basic Component","\u002Fdemo\u002Fcomponents\u002Fbasic","defining-properties","Defining Properties","\u002Fdemo\u002Fcomponents\u002Fdefining-props","emit-ref","Emit & Ref","\u002Fdemo\u002Fcomponents\u002Femit-and-ref","global-emit","Global Emit","\u002Fdemo\u002Fcomponents\u002Fglobal-emit","prose","ProseTable.vue",":information_source:","slot-manipulation","Slot Manipulation","\u003Cslot\u002F\u003E","provide-inject","Provide & Inject","provide","inject","\u002Fdemo\u002Fprovide-and-inject"))