(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{YQE9:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return u}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},p=c("Caption"),r=c("InlineNotification"),s={_frontmatter:i},b=o.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(b,l({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"One of the benefits of SPM on Kubernetes is the reduced time required to roll out a new version of your application from development all the way to production."),Object(n.b)("p",null,"Depending on the type of change that needs to be made, there are multiple options for rolling out the change. The different options have been visualized below."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"532px"}},"\n      ",Object(n.b)("span",l({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"137.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAIAAADuuAg3AAAACXBIWXMAAAsSAAALEgHS3X78AAAClklEQVQ4y5VU2VLbMBT1/39C+9BOX3ijdKYzUBgC2QlbgNRAEhY7CyaO49jWLtlKrx3SUJYUH8uekawjnXvulYzbVu+k2Dorm/b1cJYTRn3nZGu9sPezel67zE1miI/63sQJOBa5yfASQuM4nuVHRkZjQYOsq/ORtUSD9i/3fi+JSRwncazilRBCKKWSJEnJMXXOKl+vjtYkcQjllBK6EkEQEJLOeZLNIluSYS7FGGPYPCUjhCllH6RprTOPyZIMkeSyaknmNFKC/LP8TCezJG16mcJEpyPgKQwSgnWijURR52Z3bJVixbgQUkrMUNM6vug3T6yj23EbdpACHn436Z5aR6bTunbNMApAPrg9OCx8atW+gWcTP0RR1H283m5ubxS/b59uutEj5I5g0htb+2ZhbWttvbR+791wxp9kS3SrsPXXjxFyHDQYTnsudtKBrHJ84tmTu4Fv294dl5RRtohZiHnSdYYVJkN65zOXhkHSoGg+bvKLVCHoQOmplYAJMPM1GUcR4py9CQ5RpU3CF7ovi4SSUAr8nlSqcCimaWNTvTh2T+RY0km/Mh3WlWRzbQD4AV8pFZP0+L5RahUPunXTuVCLyEA/SDAEsg8Ln5ulLyy0uVCe5zkZfN/HCPd9q3S5XzFL+xe7o9CBqiKUgPgoilIy6IjGJvE7epGS5wmDnYlEVMFdQ/Szq2IZM6wESt/L7aqD8fDwcH5+1ul23LH7+hrSWYXpRZ3Nl8w8JuCKAWu4IzcMIrhCPniYAWGWcIg5ccIh1LPH3IBO/stPlOLDQdBpi9GjAcyiubfV2Kx2yuAtVDyGQ/QmMA4JQd0Orpa9cpE06sbV6HfFLP8obtTbVaVVFuU7gORDtP0eadSCgxo9PvwDuXtOpFHeGdMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("picture",{parentName:"span"},"\n        ",Object(n.b)("source",l({parentName:"picture"},{srcSet:["/spm-kubernetes/static/93cc873d76386c8a0595ee41a91d1cb5/0eda2/upgrade_flow.webp 288w","/spm-kubernetes/static/93cc873d76386c8a0595ee41a91d1cb5/d122d/upgrade_flow.webp 532w"],sizes:"(max-width: 532px) 100vw, 532px",type:"image/webp"})),"\n        ",Object(n.b)("source",l({parentName:"picture"},{srcSet:["/spm-kubernetes/static/93cc873d76386c8a0595ee41a91d1cb5/7fc1e/upgrade_flow.png 288w","/spm-kubernetes/static/93cc873d76386c8a0595ee41a91d1cb5/5774b/upgrade_flow.png 532w"],sizes:"(max-width: 532px) 100vw, 532px",type:"image/png"})),"\n        ",Object(n.b)("img",l({parentName:"picture"},{className:"gatsby-resp-image-image",src:"/spm-kubernetes/static/93cc873d76386c8a0595ee41a91d1cb5/5774b/upgrade_flow.png",alt:"Upgrade Flow",title:"Upgrade Flow",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}})),"\n      "),"\n    "),Object(n.b)(p,{mdxType:"Caption"},Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Figure 1:")," Upgrade process flow")),Object(n.b)("p",null,"All of the application images should be built by a continuous integration environment, tagged appropriately (e.g. combination of product version and a timestamp), and then promoted throughout all the phases."),Object(n.b)("p",null,"Updates can be applied using 2 ways: Helm values, or by editing the deployed resources using ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl"),"."),Object(n.b)("h2",null,"Updating with ",Object(n.b)("inlineCode",{parentName:"h2"},"kubectl")),Object(n.b)("p",null,"The update of a running application can be as simple as using the following command to switch out an image, and Kubernetes will take care of everything else.\nA new pod with the new image will be started up, and when it reports as ‘Ready’, it will take over serving traffic."),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-bash"}),"kubectl set image deployment/<deploymentName> <containerName>=<newImage>:<newTag>\n")),Object(n.b)("p",null,"This process is described in greater detail in the Kubernetes official ",Object(n.b)("a",l({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#updating-a-deployment"}),"documentation"),"."),Object(n.b)("p",null,"For example, the following command will issue an instruction to the Kubernetes Master to change the image used by the ",Object(n.b)("inlineCode",{parentName:"p"},"apps-producer-rest")," container of a deployment called ",Object(n.b)("inlineCode",{parentName:"p"},"myRelease-apps-rest-producer")," to ",Object(n.b)("inlineCode",{parentName:"p"},"minikube.local:5000/rest:vNext")),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-bash"}),"kubectl set image deployment/myRelease-apps-rest-producer apps-producer-rest=minikube.local:5000/rest:vNext\n")),Object(n.b)("p",null,"The status of this change can be monitored using ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl get pods --watch")," or ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl rollout status deployment/myRelease-apps-rest-producer")),Object(n.b)("p",null,"In the event that the rollout is not successful (for example, becasue of a typo), the last update can be rolled back:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-bash"}),"kubectl rollout undo deployment/<deploymentName>\n")),Object(n.b)("p",null,"This is convenient when there is only a single image that needs to be updated, and the changes do not require any database changes (the Universal Access React application would be a good candidate).\nHowever, bulk updates of images or configuration should be handled with Helm."),Object(n.b)("h2",null,"Rolling out updates with Helm"),Object(n.b)("p",null,"An update using Helm can include configuration changes, as well as a change of Docker® images. Assuming that all images are tagged with the same tag, the upgrade command would look something like the following:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-bash"}),"helm upgrade <releasename> <chartName> --reuse-values --set images.tag=vNext\n")),Object(n.b)("p",null,"The above command will keep all the values used with the original ",Object(n.b)("inlineCode",{parentName:"p"},"helm install")," due to the ",Object(n.b)("inlineCode",{parentName:"p"},"--reuse-values")," flag, and only change the ",Object(n.b)("inlineCode",{parentName:"p"},"images.tag")," value, so all new images will be deployed with the ",Object(n.b)("inlineCode",{parentName:"p"},"vNext")," tag."),Object(n.b)("p",null,"Similarly to ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl"),", if it is necessary to reverse any configuration changes applied by the last action, this can be done using ",Object(n.b)("inlineCode",{parentName:"p"},"helm rollback <releasename>"),"."),Object(n.b)("p",null,"The full documentation of the ",Object(n.b)("inlineCode",{parentName:"p"},"helm upgrade")," command is available on the Helm ",Object(n.b)("a",l({parentName:"p"},{href:"https://helm.sh/docs/helm/helm_upgrade/"}),"website"),"."),Object(n.b)("h2",null,"Upgrade with SQL changes"),Object(n.b)("p",null,"Both of the scenarios above assume a no-impact, zero-downtime upgrade, that is no changes to the database are required.\nHowever, should the rollout include schema changes, the application must be halted. This must be coordinated together with your IT Operations and DBA teams."),Object(n.b)("p",null,"To halt the application for the duration of the upgrade without deleting all Kubernetes objects, the application can be scaled down to 0 pods:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-bash"}),"kubectl scale --replicas=0 deployment/<deploymentName>\n")),Object(n.b)("p",null,"After the database upgrade is completed, the new version of application code can be rolled out using the Helm method described above."),Object(n.b)(r,{mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note:")," The ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl scale")," command can be used to horizontally ",Object(n.b)("a",l({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#scaling-a-deployment"}),"scale your application"),".")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-06-operations-updating-curam-mdx-50a50f4190016df69fcf.js.map