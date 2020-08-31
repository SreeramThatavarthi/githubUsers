(this["webpackJsonpeleven-firebase-github"]=this["webpackJsonpeleven-firebase-github"]||[]).push([[0],{45:function(e,t,a){e.exports=a(88)},50:function(e,t,a){},51:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),o=(a(50),a(8)),i=(a(51),a(52),a(15)),m=(a(53),r.a.createContext()),s=a(13),u=a(7),p=a(22),E=a.n(p),d=a(43),g=a(95),b=a(96),h=a(97),f=a(23),v=a.n(f),w=a(91),y=a(92),x=function(e){var t=e.user;return r.a.createElement(w.a,{className:"text-center"},r.a.createElement("img",{src:t.avatar_url,className:"img-thumbnail",height:"300",width:"500"}),r.a.createElement(y.a,{className:"md-4 mt-3",style:{fontSize:"20px",float:"left"}},r.a.createElement("div",null,"Name:",t.name),r.a.createElement("div",null,"Location:",t.location),r.a.createElement("div",null,"Followers:",t.followers),r.a.createElement("div",null,"Hireable:",t.hireable?"Yes":"Not Mentioned")))},j=a(93),N=a(94),O=function(e){var t=e.user;return r.a.createElement("div",{className:"mb-5"},r.a.createElement("h1",{color:"success",style:{marginTop:"10px"}},"Repositories"),t.map((function(e){return r.a.createElement(w.a,null,r.a.createElement(y.a,null,r.a.createElement(j.a,null,"Project Name: ",e.name),r.a.createElement(N.a,null,r.a.createElement("a",{href:"https://sreeramthatavarthi.github.io/".concat(e.name)},"Project link"))))})))},S=a(24),I=function(){var e=Object(n.useContext)(m),t="https://api.github.com/users/",a=Object(n.useState)(""),l=Object(o.a)(a,2),c=l[0],s=l[1],p=Object(n.useState)([]),f=Object(o.a)(p,2),w=f[0],y=f[1],j=Object(n.useState)([]),N=Object(o.a)(j,2),I=N[0],C=N[1],k=Object(S.useMediaQuery)({query:"(min-device-width: 1224px)"}),F=Object(S.useMediaQuery)({query:"(max-device-width: 1224px)"}),U=function(){var e=Object(d.a)(E.a.mark((function e(){var a,n,r,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(t).concat(c),s(""),e.prev=2,e.next=5,v.a.get(t).catch((function(e){if(404===e.response.status)throw new Error("".concat(e.config.url," not found"));throw e}));case 5:return a=e.sent,n=a.data,r=n.repos_url,e.next=10,v.a.get(r);case 10:l=e.sent,C(l.data),y(n),console.log(n),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),Object(i.b)("User Id Not Found",{type:"error"});case 19:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(){return e.apply(this,arguments)}}();return e.user?r.a.createElement(g.a,{fluid:!0},k&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement(h.a,{className:"md-6"},r.a.createElement("div",{className:"input-group mb-3 mt-4",style:{width:"70%"}},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter GitHub Id",value:c,onChange:function(e){return s(e.target.value)}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn  btn-primary",type:"button",onClick:U},"Submit"))),w.id?r.a.createElement(x,{user:w}):""),r.a.createElement(h.a,{className:"md-6"},w.id?r.a.createElement(O,{user:I}):""))),F&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-group mb-3 mt-4",style:{width:"80%"}},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter GitHub Id",value:c,onChange:function(e){return s(e.target.value)}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn  btn-primary",type:"button",onClick:U},"Submit"))),w.id?r.a.createElement(x,{user:w}):"",r.a.createElement("div",null,w.id?r.a.createElement(O,{user:I}):""))):r.a.createElement(u.a,{to:"/git/signup"})},C=a(98),k=a(99),F=a(100),U=a(101),P=a(102),B=a(103),A=a(104),G=a(17),H=a.n(G),q=function(){var e,t=Object(n.useContext)(m),a=Object(n.useState)(""),l=Object(o.a)(a,2),c=l[0],s=l[1],p=Object(n.useState)(""),E=Object(o.a)(p,2),d=E[0],f=E[1];return(null===(e=t.user)||void 0===e?void 0:e.uid)?r.a.createElement(u.a,{to:"/"}):r.a.createElement(g.a,{className:"text-center"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:"20px"}},"Note:SignIn is required to search github users.And SignUp if you are not signed In"),r.a.createElement(b.a,null,r.a.createElement(h.a,{lg:6,className:"offset-lg-3 mt-5"},r.a.createElement(w.a,null,r.a.createElement(C.a,{onSubmit:function(e){e.preventDefault(),H.a.auth().signInWithEmailAndPassword(c,d).then((function(e){console.log(e),t.setUser({email:e.user.email,uid:e.user.uid})})).catch((function(e){console.log(e),Object(i.b)(e.message,{type:"error"})}))}},r.a.createElement(k.a,{className:""},"SignIn here"),r.a.createElement(y.a,null,r.a.createElement(F.a,{row:!0},r.a.createElement(U.a,{for:"email",sm:3},"Email"),r.a.createElement(h.a,{sm:9},r.a.createElement(P.a,{type:"email",name:"email",id:"email",placeholder:"provide your email",value:c,onChange:function(e){return s(e.target.value)}}))),r.a.createElement(F.a,{row:!0},r.a.createElement(U.a,{for:"password",sm:3},"Password"),r.a.createElement(h.a,{sm:9},r.a.createElement(P.a,{type:"password",name:"password",id:"password",placeholder:"your password here",value:d,onChange:function(e){return f(e.target.value)}})))),r.a.createElement(B.a,null,r.a.createElement(A.a,{type:"submit",block:!0,color:"primary"},"Sign In"))))))))},D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{to:"/git/signup"}))},M=function(){var e,t=Object(n.useContext)(m),a=Object(n.useState)(""),l=Object(o.a)(a,2),c=l[0],s=l[1],p=Object(n.useState)(""),E=Object(o.a)(p,2),d=E[0],f=E[1];return(null===(e=t.user)||void 0===e?void 0:e.uid)?r.a.createElement(u.a,{to:"/"}):r.a.createElement(g.a,{className:"text-center"},r.a.createElement(b.a,null,r.a.createElement(h.a,{lg:6,className:"offset-lg-3 mt-5"},r.a.createElement(w.a,null,r.a.createElement(C.a,{onSubmit:function(e){e.preventDefault(),H.a.auth().createUserWithEmailAndPassword(c,d).then((function(e){console.log(e),t.setUser({email:e.user.email,uid:e.user.uid})})).catch((function(e){console.log(e),Object(i.b)(e.message,{type:"error"})}))}},r.a.createElement(k.a,{className:""},"SignUp here"),r.a.createElement(y.a,null,r.a.createElement(F.a,{row:!0},r.a.createElement(U.a,{for:"email",sm:3},"Email"),r.a.createElement(h.a,{sm:9},r.a.createElement(P.a,{type:"email",name:"email",id:"email",placeholder:"provide your email",value:c,onChange:function(e){return s(e.target.value)}}))),r.a.createElement(F.a,{row:!0},r.a.createElement(U.a,{for:"password",sm:3},"Password"),r.a.createElement(h.a,{sm:9},r.a.createElement(P.a,{type:"password",name:"password",id:"password",placeholder:"your password here",value:d,onChange:function(e){return f(e.target.value)}})))),r.a.createElement(B.a,null,r.a.createElement(A.a,{type:"submit",block:!0,color:"primary"},"Sign Up")))))))},W=function(){return r.a.createElement(g.a,{fluid:!0,tag:"footer",className:"text-center bg-info text-white text-uppercase fixed-bottom p-3"},"GITHUB Search App with FireBase")},z=a(105),J=a(106),R=a(107),T=a(108),V=a(112),_=a(109),K=a(110),L=a(111),Q=function(){var e,t=Object(n.useContext)(m),a=Object(n.useState)(!1),l=Object(o.a)(a,2),c=l[0],i=l[1];return r.a.createElement(z.a,{color:"info",light:!0,expand:"md"},r.a.createElement(J.a,null,r.a.createElement(s.b,{to:"/",className:"text-white"},"Github with Firebase")),r.a.createElement(R.a,null,(null===(e=t.user)||void 0===e?void 0:e.email)?t.user.email:""),r.a.createElement(T.a,{onClick:function(){return i(!c)}}),r.a.createElement(V.a,{isOpen:c,navbar:!0},r.a.createElement(_.a,{className:"ml-auto",navbar:!0},t.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,null,r.a.createElement(L.a,{style:{cursor:"pointer"},onClick:function(){return t.setUser(null)},className:"text-white"},"Signout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,null,r.a.createElement(L.a,{tag:s.b,to:"/git/signup",className:"text-white"},"Signup")),r.a.createElement(K.a,null,r.a.createElement(L.a,{tag:s.b,to:"/git/signin",className:"text-white"},"Signin"))))))};a(85),a(87);H.a.initializeApp({apiKey:"AIzaSyD_R706OcnKZ74gP9pFtxwq6Vl09llIBrs",authDomain:"git-app-890e2.firebaseapp.com",databaseURL:"https://git-app-890e2.firebaseio.com",projectId:"git-app-890e2",storageBucket:"git-app-890e2.appspot.com",messagingSenderId:"146086151419",appId:"1:146086151419:web:88624d08c0fd927a7edc5e",measurementId:"G-5JV69HB3XV"});var X=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement(s.a,null,r.a.createElement(i.a,null),r.a.createElement(m.Provider,{value:{user:a,setUser:l}},r.a.createElement(Q,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:I}),r.a.createElement(u.b,{exact:!0,path:"/git/signin",component:q}),r.a.createElement(u.b,{exact:!0,path:"/git/signup",component:M}),r.a.createElement(u.b,{exact:!0,path:"*",component:D})),r.a.createElement(W,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.a625befd.chunk.js.map