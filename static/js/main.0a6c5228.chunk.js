(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{62:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),a=n(10),c=n.n(a),i=(n(62),n.p,n(63),n(4));function j(){return Object(i.jsx)("footer",{className:"bg-light",children:Object(i.jsxs)("div",{children:["Hello Footer ",Object(i.jsx)("br",{}),"Created by Eviatar Natan",Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[" You can see my other projects here: ",Object(i.jsx)("a",{href:"https://github.com/eviatarnatan",children:" GitHub"})]}),Object(i.jsxs)("li",{children:[" My Linkedin: ",Object(i.jsx)("a",{href:"https://www.linkedin.com/in/eviatarnatan/",children:"Profile"})]})]})]})})}var l=n(16),o=n(107),b=n(110),u=n(25),d=(n(65),n(9)),h=n(113);function O(){Object(d.f)();var e=Object(s.useState)(""),t=Object(l.a)(e,2);t[0],t[1];return Object(i.jsx)(o.a,{position:"static",className:"header",children:Object(i.jsx)(b.a,{className:"d-flex justify-content-between",children:Object(i.jsx)("nav",{children:Object(i.jsx)(h.a,{className:"box",children:Object(i.jsxs)("ul",{className:"flex-test",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(u.b,{className:"nav-link active text-white",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(u.b,{className:"nav-link text-white",to:"/register",children:"Register"})})]})})})})})}var p=n(13),x=n(42),m=n.n(x),f=n(26),v=n(47),g=n(111),w=n(114);function y(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(d.f)(),c=Object(s.useState)({username:"",password:""}),j=Object(l.a)(c,2),o=j[0],b=j[1],u=Object(s.useState)({username:null,password:null}),h=Object(l.a)(u,2),O=h[0],x=h[1],y=function(){var e=Object(v.a)(m.a.mark((function e(t){var n,s,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=!0,s={username:null,password:null},o.username||(n=!1,s=Object(f.a)(Object(f.a)({},s),{},{username:"username is empty"})),o.password||(n=!1,s=Object(f.a)(Object(f.a)({},s),{},{password:"password is empty"})),x(s),n){e.next=8;break}return e.abrupt("return");case 8:return r(!0),console.log("the sent values are: "+o.username+" "+o.password),e.next=12,fetch("http://localhost:8080/usersManager/login",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}});case 12:return c=e.sent,e.next=15,c;case 15:i=e.sent,console.log(i),r(!1),a.push("/welcome");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){b(Object(f.a)(Object(f.a)({},o),{},Object(p.a)({},e.target.name,e.target.value)))};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"login"}),Object(i.jsxs)("form",{noValidate:!0,onSubmit:y,children:[Object(i.jsx)("div",{children:Object(i.jsx)(g.a,{error:O.username,value:o.username,label:O.username?"Error":"Enter your username",type:"username",name:"username",onChange:N,helperText:O.username})}),Object(i.jsx)("div",{children:Object(i.jsx)(g.a,{error:O.password,value:o.password,label:O.password?"Error":"Enter your password",type:"password",name:"password",onChange:N,helperText:O.password})}),Object(i.jsx)(w.a,{color:"primary",variant:"contained",disabled:n,type:"submit",children:"Submit"})]})]})}function N(){return Object(i.jsx)("h1",{children:" register page"})}function S(){return Object(i.jsx)("h1",{children:" this is an error page"})}var k=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("div",{children:[Object(i.jsx)(O,{}),Object(i.jsxs)(d.c,{children:[Object(i.jsx)(d.a,{path:"/",exact:!0,children:Object(i.jsx)(y,{})}),Object(i.jsx)(d.a,{path:"/register",exact:!0,children:Object(i.jsx)(N,{})}),Object(i.jsx)(d.a,{children:Object(i.jsx)(S,{})})]}),Object(i.jsx)(j,{})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))};c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(u.a,{children:Object(i.jsx)(k,{})})}),document.getElementById("root")),C()}},[[76,1,2]]]);
//# sourceMappingURL=main.0a6c5228.chunk.js.map