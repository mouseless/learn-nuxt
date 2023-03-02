export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I){return {data:{"content-query-UZBZIbXha4":{_path:"\u002Fsetup-guide",_dir:e,_draft:h,_partial:h,_locale:e,_empty:h,title:p,description:"Read the instructions below if you have any trouble running this application\nlocally. If you have any further issues please contact \u003E mouseless_ team.",body:{type:"root",children:[{type:b,tag:"h1",props:{id:"setup-guide"},children:[{type:a,value:p}]},{type:b,tag:d,props:{},children:[{type:a,value:"Read the instructions below if you have any trouble running this application\nlocally. If you have any further issues please contact "},{type:b,tag:c,props:{},children:[{type:a,value:"\u003E mouseless_"}]},{type:a,value:" team."}]},{type:b,tag:q,props:{id:r},children:[{type:b,tag:c,props:{},children:[{type:a,value:".env"}]},{type:a,value:" Files"}]},{type:b,tag:d,props:{},children:[{type:a,value:"It is usually a hidden file where we store our constant variables such as\n"},{type:b,tag:c,props:{},children:[{type:a,value:"BASE_URL"}]},{type:a,value:" for system settings. It can be customized as "},{type:b,tag:c,props:{},children:[{type:a,value:".env.{profile}"}]},{type:a,value:"."}]},{type:b,tag:i,props:{id:s},children:[{type:b,tag:c,props:{},children:[{type:a,value:t}]},{type:a,value:u}]},{type:b,tag:d,props:{},children:[{type:a,value:"This is where we host the config settings for developer mode. The local file\nis ignored in this repository, the app automatically creates the file in\nprebuild."}]},{type:b,tag:"h4",props:{id:"chromium_executable_path"},children:[{type:b,tag:c,props:{},children:[{type:a,value:v}]}]},{type:b,tag:d,props:{},children:[{type:a,value:w},{type:b,tag:c,props:{},children:[{type:a,value:x}]},{type:a,value:" to extract diagrams from markdown files. "},{type:b,tag:c,props:{},children:[{type:a,value:x}]},{type:a,value:" comes with\n"},{type:b,tag:c,props:{},children:[{type:a,value:j}]},{type:a,value:" as dependency and uses it to start a browser process to snapshot\ndiagrams. After v19.0.0 "},{type:b,tag:c,props:{},children:[{type:a,value:j}]},{type:a,value:" may not work properly with the downloaded\nbrowser and it will prompt an error like below when you run the application."}]},{type:b,tag:f,props:{code:y,language:k,meta:l},children:[{type:b,tag:m,props:{},children:[{type:b,tag:f,props:{__ignoreMap:e},children:[{type:a,value:y}]}]}]},{type:b,tag:d,props:{},children:[{type:a,value:"The current available solution is manually installing "},{type:b,tag:n,props:{},children:[{type:a,value:"Chromium"}]},{type:a,value:" or "},{type:b,tag:n,props:{},children:[{type:a,value:"Chrome"}]},{type:a,value:"\nbrowser, and provide its "},{type:b,tag:n,props:{},children:[{type:a,value:"executablePath"}]},{type:a,value:" in "},{type:b,tag:c,props:{},children:[{type:a,value:t}]},{type:a,value:" file for "},{type:b,tag:c,props:{},children:[{type:a,value:j}]},{type:a,value:"\nto use under "},{type:b,tag:c,props:{},children:[{type:a,value:v}]},{type:a,value:" key."}]},{type:b,tag:i,props:{id:z},children:[{type:b,tag:c,props:{},children:[{type:a,value:A}]},{type:a,value:u}]},{type:b,tag:d,props:{},children:[{type:a,value:"This is where we host the config settings for production mode. Settings in\n"},{type:b,tag:c,props:{},children:[{type:a,value:A}]},{type:a,value:" are used when deploying."}]},{type:b,tag:q,props:{id:B},children:[{type:a,value:C}]},{type:b,tag:d,props:{},children:[{type:a,value:w},{type:b,tag:D,props:{href:"https:\u002F\u002Feslint.org\u002F",rel:[E],title:"eslint.org"},children:[{type:a,value:"Eslint"}]},{type:a,value:" in this project. Configuration is in "},{type:b,tag:c,props:{},children:[{type:a,value:".eslintrc.json"}]},{type:a,value:"\nfile, and we use "},{type:b,tag:c,props:{},children:[{type:a,value:"unix"}]},{type:a,value:" style line endings."}]},{type:b,tag:i,props:{id:F},children:[{type:a,value:G}]},{type:b,tag:d,props:{},children:[{type:a,value:"When you checkout a repository on Windows, by default git handles line endings\nas "},{type:b,tag:c,props:{},children:[{type:a,value:"clrf"}]},{type:a,value:" for compatibility. Due to this reason, when you run the application,\neslint will prompt and error because it expects "},{type:b,tag:c,props:{},children:[{type:a,value:"lf"}]},{type:a,value:" line endings."}]},{type:b,tag:d,props:{},children:[{type:a,value:"You can set "},{type:b,tag:c,props:{},children:[{type:a,value:"core.autoclrf"}]},{type:a,value:" to false in your "},{type:b,tag:c,props:{},children:[{type:a,value:"git config"}]},{type:a,value:" or provide setup for\nspecific repository. Visit "},{type:b,tag:D,props:{href:"https:\u002F\u002Fdocs.github.com\u002Fen\u002Fget-started\u002Fgetting-started-with-git\u002Fconfiguring-git-to-handle-line-endings",rel:[E],title:"configuring-git-to-handle-line-endings"},children:[{type:a,value:"Git Documentation"}]},{type:a,value:" page for further details."}]},{type:b,tag:f,props:{code:H,language:k,meta:l},children:[{type:b,tag:m,props:{},children:[{type:b,tag:f,props:{__ignoreMap:e},children:[{type:a,value:H}]}]}]},{type:b,tag:"blockquote",props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:":bulb:"}]},{type:b,tag:d,props:{},children:[{type:a,value:"You can use the command below to fix your existing files"}]},{type:b,tag:f,props:{code:I,language:k,meta:l},children:[{type:b,tag:m,props:{},children:[{type:b,tag:f,props:{__ignoreMap:e},children:[{type:a,value:I}]}]}]}]}],toc:{title:e,searchDepth:g,depth:g,links:[{id:r,depth:g,text:".env Files",children:[{id:s,depth:o,text:".env.local File"},{id:z,depth:o,text:".env.production File"}]},{id:B,depth:g,text:C,children:[{id:F,depth:o,text:G}]}]}},_type:"markdown",_id:"content:setup-guide.md",_source:"content",_file:"setup-guide.md",_extension:"md"}},prerenderedAt:1677759377101}}("text","element","code-inline","p","","code",2,false,"h3","puppeteer","bash",null,"pre","em",3,"Setup Guide","h2","env-files","envlocal-file",".env.local"," File","CHROMIUM_EXECUTABLE_PATH","We use ","Mermaid","Error: Failed to launch the browser process\n","envproduction-file",".env.production","end-of-line","End of line","a","nofollow","windows-settings","Windows Settings","$git config --global core.autocrlf true\n","npx eslint . --fix\n"))