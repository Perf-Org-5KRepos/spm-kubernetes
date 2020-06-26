(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{BhIP:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return u}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),o=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},i=s("Caption"),b=s("InlineNotification"),p={_frontmatter:c},l=o.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(l,r({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Deploy SPM Static Content in IBM® Kubernetes Services (IKS)"),Object(a.b)("p",null,"The static content server feature allows static content to be hosted on a separate web server.\nThis feature allows the web server that hosts the static content to be tuned for the static content and reduces the load on the main SPM application servers."),Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"641px"}},"\n      ",Object(a.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsSAAALEgHS3X78AAAB6UlEQVQoz3WSa2/TMBSG+68REt8Rlw/8ASQEaAKNfmBCSEyqGNoGha4bkLaDtmm7NumSOI4vsZM4sWNO2jFNXF5ZR749Ou85dgtjzDlnjFFK4zgOogRFUbgRLJPfIk3AEDEMjOEIYgvIPM+lzMpCnP1M7u2mPWc1dL46zgD2rbXGGIiqMgfnRW/M3MtsEdcrpABsQc4sywCWgs89sn9aMKFro6tK22vV2mi1e+TtHbvrWLo+XYUpgFcwiFIGTpqbdX0T02VaFiily733/XanPxrPuh8PwzDYZqZA5pmkJMEoqMp86ClnqTxczkPlYyayWJtSG/PtfHZ0Nl4HaDqdYJwwxlsHDnn1Oc0kR2iFgrlWyaN36YO3oj/G7f1T91JuHWhjOwNx6ASLMFtz6ydlA393yZdJKiX3Iw/hSNd1f8J6E76Msguk/JioAttaKVV8mhZrYUOmhm4080ljWwpmyqZmRjm8AyTBKMRxKKXYNLkoSpHnuMrWb163H96/+/LFzmI2hRqbhhFKhdw2jBJC/mwYLDfD2Prxk2e3bt95+nwnVxUmHO5fP5UEG0KILbzV1bxhbaXNh5NJd+Cde3LkKTcompr/Cdu/BFud7ujkB1pgOwnNRVzd/CQSSHCS/l+EQjJwyyjjUCzoF8GDmWfhsIaHAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("picture",{parentName:"span"},"\n        ",Object(a.b)("source",r({parentName:"picture"},{srcSet:["/spm-kubernetes/static/85b3fecbeab08c582f15c43e6804f25c/0eda2/spm_static_content_on_kubernetes.webp 288w","/spm-kubernetes/static/85b3fecbeab08c582f15c43e6804f25c/460e2/spm_static_content_on_kubernetes.webp 576w","/spm-kubernetes/static/85b3fecbeab08c582f15c43e6804f25c/76246/spm_static_content_on_kubernetes.webp 641w"],sizes:"(max-width: 641px) 100vw, 641px",type:"image/webp"})),"\n        ",Object(a.b)("source",r({parentName:"picture"},{srcSet:["/spm-kubernetes/static/85b3fecbeab08c582f15c43e6804f25c/7fc1e/spm_static_content_on_kubernetes.png 288w","/spm-kubernetes/static/85b3fecbeab08c582f15c43e6804f25c/a5df1/spm_static_content_on_kubernetes.png 576w","/spm-kubernetes/static/85b3fecbeab08c582f15c43e6804f25c/96a46/spm_static_content_on_kubernetes.png 641w"],sizes:"(max-width: 641px) 100vw, 641px",type:"image/png"})),"\n        ",Object(a.b)("img",r({parentName:"picture"},{className:"gatsby-resp-image-image",src:"/spm-kubernetes/static/85b3fecbeab08c582f15c43e6804f25c/96a46/spm_static_content_on_kubernetes.png",alt:"SPM on Kubernetes - Static Content",title:"SPM on Kubernetes - Static Content",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}})),"\n      "),"\n    "),Object(a.b)(i,{mdxType:"Caption"},Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Figure 1:")," SPM on Kubernetes - static content")),Object(a.b)("p",null,"As outlined in Figure 1, SPM static content runs in its own pod. By running SPM static content in its own pod, the pod can leverage the benefits of flexibility, elasticity, efficiency and the strategic value offered by cloud native architecture."),Object(a.b)("p",null,"While it is technically possible to have SPM static content on the ingress controllers (for example, ALBs), this is not a recommended approach. The ingress controller is not designed to serve static content."),Object(a.b)("p",null,"Application workloads should be isolated from ingress workloads.\nThe ingress controller should have the unique role of handling the ingress rules that are defined in your cluster, and should be treated as part an infrastructure component of your cloud native architecture."),Object(a.b)("p",null,"Serving static content is a fundamental part of your application, and the static content should be served in a pod on your application worker nodes."),Object(a.b)(b,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," For more infomation about how to create an SPM static content container to run on Kubernetes, see ",Object(a.b)("a",r({parentName:"p"},{href:"/spm-kubernetes/03-build-images/build_images"}),"Building the Docker® images"))),Object(a.b)(b,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," For more information, see Static Content Server in the ",Object(a.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.content.doc/WebClientReference/r_WEBCREF_Development1Staticcontentserver1.html"}),"Knowledge Center"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-00-intro-ihs-static-content-mdx-b9664c8d30568c928322.js.map