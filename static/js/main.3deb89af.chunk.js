(this["webpackJsonpanurag-portfolio"]=this["webpackJsonpanurag-portfolio"]||[]).push([[0],{22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);t(16);var n=t(1),i=t.n(n),s=t(11),c=t.n(s),r=t(13),o=t(0),l=function(){return Object(o.jsx)("div",{})},d=t(14),m=(t(22),t(23),function(e){var a=["backdrop",e.show?"show":null];return Object(o.jsx)("div",{className:a.join(" "),onClick:e.hide})}),u=t(5),j=t.n(u),b=function(){return Object(o.jsxs)("div",{className:j.a.navbarMenu,children:[Object(o.jsx)("a",{href:"#about",className:j.a.navBarLink,children:"About"}),Object(o.jsx)("a",{href:"#skills",className:j.a.navBarLink,children:"Skills"}),Object(o.jsx)("a",{href:"#projects",className:j.a.navBarLink,children:"Projects"})]})},h=function(){var e=Object(n.useState)(!1),a=Object(d.a)(e,2),t=a[0],i=a[1],s=["navbar__mobile-nav",t?"show-nav":""];return Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsx)("div",{className:s.join(" "),children:Object(o.jsx)(b,{})}),Object(o.jsxs)("div",{className:"navbar__heading",children:[Object(o.jsx)("div",{className:"navbar__heading--bars",children:Object(o.jsx)("i",{className:"fas fa-bars",onClick:function(){i(!0)}})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Anurag Arwalkar"}),Object(o.jsx)("span",{children:"Full Stack Web Developer"})]})]}),Object(o.jsx)(m,{hide:function(){return i(!1)},show:t}),Object(o.jsx)("div",{className:"navbar__menu",children:Object(o.jsx)(b,{})})]})},f=t.p+"static/media/chat_buddy.d60c9de1.png",p=t.p+"static/media/npm.57f5819b.jpg",v=t.p+"static/media/space-x.20da26b3.png",A=t.p+"static/media/weather_app.b8621e52.png",D={profilePic:"https://drive.google.com/uc?export=download&id=1abnwlUC4jNot4kPLaowVzD41ebu1q3_T",downloadResume:"https://drive.google.com/u/0/uc?id=1Y249sFpZlvMI_s7kmdoDbI7AAShf9Nh1&export=download",title:"Anurag's Portfolio"},w=function(e){Object(n.useEffect)((function(){document.title="".concat(D.title," | ").concat(e)}),[e])},g=[{key:1,name:"Chat Buddy",description:" Realtime messaging application built using Angular, Node.js, Websockets",src:f,url:"https://chat-buddy-289610.web.app/auth"},{key:3,name:"Live Weather Application",description:"Buit a responsive weather application form Mobile and Desktop using Angular",src:A,url:"https://anuragarwalkar.github.io/my-weather-app/"},{key:2,name:"Create Node TypeScript App",description:"Build a NPM pacakge to create a boilerplate for a node.js project with express.",src:p,url:"https://www.npmjs.com/package/create-nodejs-typescript-app"},{key:4,name:"React SSR",description:"Build a server side rendering website using React and spaceX API",src:v,url:"https://spacex-anurag.herokuapp.com/?limit=100"}],O=function(e){return Object(o.jsxs)("article",{style:{width:280},children:[Object(o.jsx)("img",{src:e.img,style:{width:280,height:180,objectFit:"cover"},alt:e.name}),Object(o.jsx)("div",{style:{fontWeight:"bold",marginBottom:"2px"},children:e.name}),Object(o.jsx)("div",{style:{opacity:.8},children:e.description}),Object(o.jsx)("a",{href:e.link,children:"\ud83d\udc49 Live Url"})]})},N=function(e){return w("Projects"),Object(o.jsx)("div",{id:"#projects",style:{display:"flex",justifyContent:"space-between"},children:g.map((function(e){return Object(o.jsx)(O,{link:e.url,name:e.name,description:e.description,img:e.src})}))})},x=t(15),k=function(e){return Object(o.jsx)("a",{className:e.className,href:e.href,rel:"noopener noreferrer",target:e.target?e.target:"_blank",children:e.icon&&Object(o.jsx)("i",{className:"fab fa-".concat(e.icon," fa-lg")})})},z=t.p+"static/media/Google-flutter-logo.99b29fec.png",P=t.p+"static/media/Node.js_logo.c2e22c63.png",T=t.p+"static/media/React.js_logo-512.dd495beb.png",_=t(4),y=t.n(_),Z=function(e){var a=e.name,t=e.src,n=e.width;return Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:y.a.skill,width:n,src:t,alt:a})})},J=[{name:"React",id:1,img:T,width:"50"},{name:"Angular",id:2,img:"data:image/png;base64,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",width:"50"},{name:"Flutter",id:4,img:z,width:"100"},{name:"Node.js",id:3,img:P,width:"80"}],H=function(){return Object(o.jsx)("div",{id:"#skills",className:y.a.mainContainer,children:Object(o.jsx)("div",{className:y.a.skillsContainer,children:J.map((function(e){return Object(o.jsx)(Z,{width:e.width,name:e.name,src:e.img},e.id)}))})})},L=[{key:1,className:"about__info__social--youtube",href:"https://www.youtube.com/anuragarwalkar",icon:"youtube"},{key:2,className:"about__info__social--youtube",href:"https://bit.ly/anuragdev",icon:"youtube"},{key:3,className:"about__info__social--instagram",href:"https://www.instagram.com/anuragarwalkar",icon:"instagram"},{key:4,className:"about__info__social--twitter",href:"https://twitter.com/anruagarwalkar",icon:"twitter"},{key:5,className:"about__info__social--github",href:"https://github.com/anuragarwalkar",icon:"github"},{key:6,className:"about__info__social--medium",href:"https://anuragarwalkar.medium.com",icon:"medium"},{key:7,className:"about__info__social--stack-overflow",href:"https://stackoverflow.com/users/10028375/anurag-arwalkar",icon:"stack-overflow"}],W=(t(24),function(){return w("About"),Object(o.jsxs)("div",{className:"about",id:"#about",children:[Object(o.jsx)("div",{className:"about__photo",children:Object(o.jsx)("img",{src:D.profilePic,alt:"Anurag Arwalkar"})}),Object(o.jsxs)("div",{className:"about__info",children:[Object(o.jsx)("h1",{children:"About Me \ud83d\udc4b"}),Object(o.jsx)("p",{children:"I Anurag Self-motivated IT professional with good knowledge and\nproficiency in HTML, CSS, JavaScript. Expertise in frameworks like\nReact.js, Angular, Node.js and great knowledge of No SQL database like\nMongoDb as well as strong skills and ability in writing clean and\nefficient code. check out my work on GitHub."}),Object(o.jsx)(H,{}),Object(o.jsx)("div",{className:"about__info__download",children:Object(o.jsxs)("a",{className:"about__info--download-btn btn",href:D.downloadResume,download:!0,children:[Object(o.jsx)("i",{className:"fas fa-arrow-circle-down"})," Download Resume"]})}),Object(o.jsx)("div",{className:"about__info__social",children:L.map((function(e){return Object(o.jsx)(k,Object(x.a)({},e))}))})]})]})}),X=function(){return Object(o.jsxs)(n.Fragment,{children:[Object(o.jsx)(h,{}),Object(o.jsx)(W,{}),Object(o.jsx)("div",{children:"Projects"}),Object(o.jsx)(N,{}),Object(o.jsx)(l,{})]})};t(25),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(r.a,{children:Object(o.jsx)(X,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,a,t){e.exports={mainContainer:"skill_mainContainer__pPcx_",skillsContainer:"skill_skillsContainer__p9JQT"}},5:function(e,a,t){e.exports={navbarMenu:"NavLink_navbarMenu__2hAaP",navBarLink:"NavLink_navBarLink__1BAoN"}}},[[31,1,2]]]);
//# sourceMappingURL=main.3deb89af.chunk.js.map