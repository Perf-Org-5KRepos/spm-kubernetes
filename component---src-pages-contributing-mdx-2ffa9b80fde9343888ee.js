(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{LRy0:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},l={_frontmatter:i},o=r.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(o,b({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This is a guide for contributing to the SPM DevOps runbook."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:"center"}),"Branch"),Object(n.b)("th",b({parentName:"tr"},{align:"center"}),"Status"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"center"}),Object(n.b)("em",{parentName:"td"},"Master")),Object(n.b)("td",b({parentName:"tr"},{align:"center"}),Object(n.b)("a",b({parentName:"td"},{href:"https://travis-ci.com/IBM/spm-kubernetes"}),Object(n.b)("img",b({parentName:"a"},{src:"https://travis-ci.com/IBM/spm-kubernetes.svg?branch=master",alt:"Build Status"}))))))),Object(n.b)("h2",null,"House Rules"),Object(n.b)("h3",null,"Do’s"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Do")," your own lint check before committing."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Do")," create your branch from the ",Object(n.b)("inlineCode",{parentName:"li"},"master")," branch to avoid conflicts."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Do")," use good grammar."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Do")," provide references to any external source materials.")),Object(n.b)("h3",null,"Don’ts"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Do not")," creates branches from ",Object(n.b)("inlineCode",{parentName:"li"},"gh-pages")," branch."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Do not")," commit directly to ",Object(n.b)("inlineCode",{parentName:"li"},"master")," or ",Object(n.b)("inlineCode",{parentName:"li"},"gh-pages")," branches.")),Object(n.b)("h2",null,"Prerequisites"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"NodeJS 12.x"),Object(n.b)("li",{parentName:"ul"},"Markdown-compatible editor")),Object(n.b)("h2",null,"Setting up"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Install Gatsby and MarkdownLint CLI tools:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"npm install -g gatsby markdownlint-cli")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",b({parentName:"li"},{href:"https://services.github.com/on-demand/github-desktop/install-github-desktop"}),"Install and Setup GitHub Desktop")," on your laptop"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",b({parentName:"li"},{href:"https://help.github.com/desktop/guides/getting-started-with-github-desktop/authenticating-to-github/"}),"Sign into GitHub from GitHub Desktop")),Object(n.b)("li",{parentName:"ul"},"Learn ",Object(n.b)("a",b({parentName:"li"},{href:"https://guides.github.com/features/mastering-markdown/"}),"Markdown Syntax")," and notice the formatting standards in the existing docs for examples of how we want you to construct a page"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",b({parentName:"li"},{href:"https://github.com/IBM/spm-kubernetes"}),"Clone this repository")," to your local workstation from the GitHub UI or ",Object(n.b)("a",b({parentName:"li"},{href:"https://services.github.com/on-demand/github-desktop/clone-repository-github-desktop"}),"use GitHub Desktop")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",b({parentName:"li"},{href:"https://services.github.com/on-demand/github-desktop/create-branches-github-desktop"}),"Create a branch")," from the ",Object(n.b)("a",b({parentName:"li"},{href:"https://github.com/IBM/spm-kubernetes/tree/master"}),"master branch"))),Object(n.b)("h2",null,"Authoring"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Make the changes locally, and build the static content for previewing:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"run ",Object(n.b)("inlineCode",{parentName:"li"},"gatsby build")," OR,"),Object(n.b)("li",{parentName:"ul"},"run ",Object(n.b)("inlineCode",{parentName:"li"},"gatsby develop")," to view your changes in your ",Object(n.b)("a",b({parentName:"li"},{href:"http://localhost:8000"}),"browser")," as soon as you save."))),Object(n.b)("li",{parentName:"ul"},"Check your code and validate the formatting",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"run ",Object(n.b)("inlineCode",{parentName:"li"},"markdownlint docs")))),Object(n.b)("li",{parentName:"ul"},"Add and push local commits with GitHub Desktop or the ",Object(n.b)("inlineCode",{parentName:"li"},"git")," command."),Object(n.b)("li",{parentName:"ul"},"Open a Pull Request when you are ready to merge your changes.")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-contributing-mdx-2ffa9b80fde9343888ee.js.map