(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{105:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),s=(n(96),n(97),n(160)),l=(n(98),n(2));function i(){return Object(l.jsx)(s.a,{className:"flexbox",children:Object(l.jsx)("footer",{children:Object(l.jsxs)("div",{className:"footer-distance",children:["Created by Eviatar Natan",Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[" You can see my other projects here: ",Object(l.jsx)("a",{href:"https://github.com/eviatarnatan",children:" GitHub"})]}),Object(l.jsxs)("li",{children:[" My Linkedin: ",Object(l.jsx)("a",{href:"https://www.linkedin.com/in/eviatarnatan/",children:"Profile"})]})]})]})})})}var u=n(19),j=n.n(u),d=n(25),b=n(150),p=n(152),h=n(40),O=(n(105),n(13));function x(e){return{type:"SET_TOKEN",payload:e}}function m(e){return{type:"SET_USERNAME",payload:e}}function f(){return(f=Object(d.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("token to sent for logout: "+t),e.next=3,fetch("http://localhost:8080/usersManager/logout",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:401===e.sent.status?console.log("unauthorized, there was an error with the token"):(console.log("logout success!"),n(x(null)),n(m(null)));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){var e=Object(O.c)((function(e){return e.user.token})),t=Object(O.b)();return Object(l.jsx)("header",{children:Object(l.jsx)("div",{className:"distance",children:Object(l.jsx)(b.a,{position:"static",className:"header-class",children:Object(l.jsx)(p.a,{children:Object(l.jsx)("nav",{className:"header-class",children:Object(l.jsx)(s.a,{className:"flex",children:Object(l.jsxs)("ul",{className:"header-class",children:[Object(l.jsx)("li",{className:"header-list-item",children:Object(l.jsx)(h.b,{to:e?"/notes-app/notesMain":"/notes-app",className:"link",children:Object(l.jsx)("span",{children:"Home"})})}),Object(l.jsx)("li",{className:"header-list-item",children:Object(l.jsx)(h.b,{to:"/notes-app/register",className:"link",children:Object(l.jsx)("span",{children:"Register"})})}),Object(l.jsx)("li",{className:"header-list-item",children:Object(l.jsx)(h.b,{to:"/notes-app",onClick:function(){return function(e,t){return f.apply(this,arguments)}(e,t)},className:"link",children:e?Object(l.jsx)("span",{children:"Logout"}):null})})]})})})})})})})}var y=n(17),v=n(7),w=n(14),T=n(163),E=n(157),N=n(10);function S(){var e=Object(a.useState)(!1),t=Object(w.a)(e,2),n=t[0],r=t[1],c=Object(N.g)(),o=Object(O.b)(),s=Object(a.useState)({username:"",password:""}),i=Object(w.a)(s,2),u=i[0],b=i[1],p=Object(a.useState)({username:null,password:null}),h=Object(w.a)(p,2),f=h[0],g=h[1],S=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a,s,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=!0,a={username:null,password:null},u.username||(n=!1,a=Object(v.a)(Object(v.a)({},a),{},{username:"username is empty"})),u.password||(n=!1,a=Object(v.a)(Object(v.a)({},a),{},{password:"password is empty"})),g(a),n){e.next=8;break}return e.abrupt("return");case 8:return r(!0),console.log("the sent values are: "+u.username+" "+u.password),e.next=12,fetch("http://localhost:8080/usersManager/login",{method:"POST",body:JSON.stringify(u),headers:{"Content-Type":"application/json"}});case 12:return s=e.sent,e.next=15,s.json();case 15:if(l=e.sent,console.log(l),r(!1),401!==s.status){e.next=21;break}return alert("Incorrect username/password. Please try again."),e.abrupt("return");case 21:console.log(l.username),o(m(l.username)),o(x(l.token)),c.push("/notes-app/notesMain");case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){b(Object(v.a)(Object(v.a)({},u),{},Object(y.a)({},e.target.name,e.target.value)))};return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsxs)("form",{noValidate:!0,onSubmit:S,children:[Object(l.jsx)("div",{children:Object(l.jsx)(T.a,{error:f.username,value:u.username,label:f.username?"Error":"Enter your username",type:"text",name:"username",onChange:k,helperText:f.username})}),Object(l.jsx)("div",{className:"form-button-margin",children:Object(l.jsx)(T.a,{error:f.password,value:u.password,label:f.password?"Error":"Enter your password",type:"password",name:"password",onChange:k,helperText:f.password})}),Object(l.jsx)("div",{children:Object(l.jsx)(E.a,{color:"primary",variant:"contained",disabled:n,type:"submit",children:"Submit"})})]})]})}function k(){var e=Object(a.useState)(),t=Object(w.a)(e,2),n=t[0],r=t[1],c=Object(N.g)(),o=Object(O.c)((function(e){return e.user.token})),s=Object(a.useState)({username:"",password:""}),i=Object(w.a)(s,2),u=i[0],b=i[1],p=Object(a.useState)({username:null,password:null}),h=Object(w.a)(p,2),x=h[0],m=h[1],f=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a,s,l,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=!0,a={username:null,password:null},u.username||(n=!1,a=Object(v.a)(Object(v.a)({},a),{},{username:"username is empty"})),u.username.length>20&&(n=!1,a=Object(v.a)(Object(v.a)({},a),{},{username:"no more than 20 characters"})),u.password||(n=!1,a=Object(v.a)(Object(v.a)({},a),{},{password:"password is empty"})),console.log(u.password.length),u.password.length<5&&(n=!1,a=Object(v.a)(Object(v.a)({},a),{},{password:"5+ characters are required"})),m(a),n){e.next=11;break}return e.abrupt("return");case 11:return r(!0),console.log("the sent values are: "+u.username+" "+u.password),e.next=15,fetch("http://localhost:8080/usersManager/register",{method:"POST",body:JSON.stringify(u),headers:{"Content-Type":"application/json"}});case 15:return s=e.sent,console.log("let's print response before await "+s),e.next=19,s.json;case 19:if(l=e.sent,r(!1),409!==s.status){e.next=25;break}return console.log("it's a conflict "+s.status),alert("Username already exists, please choose another"),e.abrupt("return");case 25:console.log("it's the response text "+s.status),console.log("let's print response after await "+l),alert("Registered Successfuly!"),i=o?"/notes-app/notesMain":"/notes-app",c.push(i);case 30:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){b(Object(v.a)(Object(v.a)({},u),{},Object(y.a)({},e.target.name,e.target.value)))};return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:" Register"}),Object(l.jsxs)("form",{noValidate:!0,onSubmit:f,children:[Object(l.jsx)("div",{children:Object(l.jsx)(T.a,{error:x.username,value:u.username,label:x.username?"Error":"Choose your username",type:"username",name:"username",onChange:g,helperText:x.username})}),Object(l.jsx)("div",{className:"form-button-margin",children:Object(l.jsx)(T.a,{error:x.password,value:u.password,label:x.password?"Error":"Choose your password",type:"password",name:"password",onChange:g,helperText:x.password})}),Object(l.jsx)(E.a,{color:"primary",variant:"contained",disabled:n,type:"submit",children:"Submit"})]})]})}function C(){return Object(l.jsx)("h1",{children:" Error, this page does not exist"})}var P=n(72),M=n.n(P),F=n(118),_=n(71),R=n.n(_);n(66);function I(e){return{type:"SET_TITLE",payload:e}}function A(e){return{type:"SET_BODY",payload:e}}function L(e){return{type:"SET_PRIORITY",payload:e}}function D(e){return{type:"SET_COLOR",payload:e}}function B(e){return{type:"SET_READ_FLAG",payload:e}}function J(e){return{type:"SET_ID",payload:e}}function Y(e){return{type:"SET_ICON",payload:e}}function z(){var e=Object(a.useState)([]),t=Object(w.a)(e,2),n=t[0],r=t[1],c=Object(N.g)(),o=Object(O.b)(),s=Object(O.c)((function(e){return e.user.token})),i=Object(O.c)((function(e){return e.user.username})),u=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/notesManager/getnotes",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n[0]),r(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("I'm inside delete note"),console.log(t),e.next=4,fetch("http://localhost:8080/notesManager/delete",{method:"DELETE",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)}});case 4:u();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s&&u()}),[s]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:[" welcome, ",i]}),Object(l.jsxs)("div",{className:"list-class",children:[Object(l.jsx)("ul",{className:"list-class",children:n.map((function(e){return Object(l.jsx)("div",{className:"div-distance",children:Object(l.jsxs)("li",{children:[Object(l.jsx)(E.a,{onClick:function(){!function(e){console.log("Edit me!"),o(J(e.id)),o(I(e.title)),o(A(e.body)),o(L(e.priority)),o(D(e.color)),o(B(e.readFlag)),o(Y(e.icon)),console.log("before going to edit, read status is: "+Object.keys(e)),c.push("/notes-app/notesMain/editNote")}(e)},children:Object(l.jsx)("h3",{className:"button-change",children:e.title})}),Object(l.jsx)(F.a,{onClick:function(){b(e)},children:Object(l.jsx)(R.a,{})})]})})}))}),Object(l.jsx)("div",{className:"add-class",children:Object(l.jsx)(F.a,{onClick:function(){console.log("Add me!"),o(J("")),o(I("")),o(A("")),o(L("")),o(D("")),o(B(!1)),o(Y("")),c.push("/notes-app/notesMain/addNote")},color:"primary",children:Object(l.jsx)(M.a,{})})})]})]})}var G=n(158),U=n(155),H=n(156),V=n(159),K=n(117),W=n(165),q=n(166),Q=n(161),X=n(162),Z=n(77),$=n.n(Z),ee=n(73),te=n.n(ee),ne=n(74),ae=n.n(ne),re=n(75),ce=n.n(re),oe=n(76),se=n.n(oe),le=Object(G.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function ie(e){var t=le(),n=Object(O.c)((function(e){return e.user.token})),r=window.location.pathname,c=Object(O.c)((function(e){return console.log("Hi, I'm inside"),e.note.title})),o=Object(O.c)((function(e){return e.note.body})),s=Object(O.c)((function(e){return e.note.priority})),i=Object(O.c)((function(e){return console.log("blabla color"),e.note.color})),u=Object(O.c)((function(e){return e.note.readFlag})),b=Object(O.c)((function(e){return e.note.id})),p=Object(O.c)((function(e){return e.note.icon})),h=Object(N.g)(),x=Object(a.useState)({id:b,title:c,body:o,color:i,priority:s,readFlag:u,icon:p}),m=Object(w.a)(x,2),f=m[0],g=m[1],S=Object(a.useState)({title:null,body:null}),k=Object(w.a)(S,2),C=k[0],P=k[1];console.log("the icon is "+f.icon),console.log("the id is "+f.id),console.log("the title is "+f.title),console.log("the body is "+f.body),console.log("the color is "+f.color),console.log("the priority is "+f.priority),console.log("the read status is "+f.readFlag);var M=function(e){g(Object(v.a)(Object(v.a)({},f),{},Object(y.a)({},e.target.name,e.target.value))),console.log("am i handling this icon change?:"+f.icon),console.log("am i handling this read change?:"+f.readFlag)},F=function(){var e=Object(d.a)(j.a.mark((function e(t){var a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log("we are going to add"),a=!0,r={title:null,body:null},f.title||(a=!1,r=Object(v.a)(Object(v.a)({},r),{},{title:"Empty title"})),P(r),a){e.next=8;break}return e.abrupt("return");case 8:return console.log("token before sending is: "+n),console.log("the sent values are: "+f.title+f.body),e.next=12,fetch("http://localhost:8080/notesManager/add",{method:"POST",body:JSON.stringify(f),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 12:e.sent,h.push("../notesMain");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(d.a)(j.a.mark((function e(t){var a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log("the values before update are: "+Object.values(f)),console.log("We are going to update"),console.log(f.readFlag),a=!0,r={title:null,body:null},f.title||(a=!1,r=Object(v.a)(Object(v.a)({},r),{},{title:"Empty title"})),P(r),a){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,fetch("http://localhost:8080/notesManager/update",{method:"PUT",body:JSON.stringify(f),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 12:e.sent,h.push("../notesMain");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{noValidate:!0,onSubmit:r.includes("addNote")?F:_,children:[Object(l.jsx)("div",{className:"div-distance",children:Object(l.jsx)(T.a,{className:"form",error:C.title,value:f.title,label:C.title?"Error":"Title",type:"text",name:"title",onChange:M,helperText:C.title,inputProps:{maxLength:40},variant:"outlined"})}),Object(l.jsx)("div",{children:Object(l.jsx)(T.a,{className:"form",error:C.body,value:f.body,label:C.body?"Error":"Body",helperText:C.body,onChange:M,type:"text",name:"body",multiline:!0,rows:"13",color:"primary",variant:"outlined"})}),Object(l.jsxs)("div",{children:[Object(l.jsxs)(U.a,{className:t.formControl,children:[Object(l.jsx)(H.a,{htmlFor:"color-native-simple",children:"Color"}),Object(l.jsxs)(V.a,{native:!0,value:f.color,onChange:M,inputProps:{name:"color",id:"color-native-simple"},children:[Object(l.jsx)("option",{"aria-label":"None",value:""}),Object(l.jsx)("option",{value:"Green",children:"Green"}),Object(l.jsx)("option",{value:"Yellow",children:"Yellow"}),Object(l.jsx)("option",{value:"Red",children:"Red"})]})]}),Object(l.jsxs)(U.a,{className:t.formControl,children:[Object(l.jsx)(H.a,{htmlFor:"priority-native-helper",children:"Priority"}),Object(l.jsxs)(V.a,{native:!0,value:f.priority,onChange:M,inputProps:{name:"priority",id:"priority-native-helper"},children:[Object(l.jsx)("option",{"aria-label":"None",value:""}),Object(l.jsx)("option",{value:1,children:"1"}),Object(l.jsx)("option",{value:2,children:"2"}),Object(l.jsx)("option",{value:3,children:"3"}),Object(l.jsx)("option",{value:4,children:"4"}),Object(l.jsx)("option",{value:5,children:"5"})]})]})]}),Object(l.jsx)("div",{children:Object(l.jsxs)(U.a,{component:"fieldset",children:[Object(l.jsx)(K.a,{component:"legend",children:"Icon"}),Object(l.jsxs)(W.a,{row:!0,"aria-label":"position",name:"icon",value:f.icon,onChange:M,children:[Object(l.jsx)(q.a,{value:"call",control:Object(l.jsx)(Q.a,{color:"primary"}),label:Object(l.jsx)(te.a,{}),labelPlacement:"start"}),Object(l.jsx)(q.a,{value:"place",control:Object(l.jsx)(Q.a,{color:"primary"}),label:Object(l.jsx)(ae.a,{}),labelPlacement:"start"}),Object(l.jsx)(q.a,{value:"highPriority",control:Object(l.jsx)(Q.a,{color:"primary"}),label:Object(l.jsx)(ce.a,{}),labelPlacement:"start"}),Object(l.jsx)(q.a,{value:"schedule",control:Object(l.jsx)(Q.a,{color:"primary"}),label:Object(l.jsx)(se.a,{}),labelPlacement:"start"}),Object(l.jsx)(q.a,{value:"musicNote",control:Object(l.jsx)(Q.a,{color:"primary"}),label:Object(l.jsx)($.a,{}),labelPlacement:"start"})]})]})}),Object(l.jsxs)("div",{children:["Read",Object(l.jsx)(X.a,{value:f.readFlag,color:"primary",onChange:function(e){g(Object(v.a)(Object(v.a)({},f),{},Object(y.a)({},e.target.name,e.target.checked)))},label:"Read",checked:f.readFlag,inputProps:{name:"readFlag",id:"readFlag"}})]}),Object(l.jsx)("div",{children:Object(l.jsx)(E.a,{className:"form",color:"primary",variant:"contained",type:"submit",children:"Save"})})]})})}var ue=function(){var e=Object(O.c)((function(e){return e.user.token}));return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{}),Object(l.jsxs)(N.d,{children:[Object(l.jsx)(N.b,{path:"/notes-app",exact:!0,children:Object(l.jsx)(S,{})}),Object(l.jsx)(N.b,{path:"/notes-app/register",exact:!0,children:Object(l.jsx)(k,{})}),Object(l.jsx)(N.b,{path:"/notes-app/notesMain",exact:!0,children:e?Object(l.jsx)(z,{}):Object(l.jsx)(N.a,{to:"/notes-app"})}),Object(l.jsx)(N.b,{path:"/notes-app/notesMain/addNote",exact:!0,children:e?Object(l.jsx)(ie,{}):Object(l.jsx)(N.a,{to:"/notes-app"})}),Object(l.jsx)(N.b,{path:"/notes-app/notesMain/editNote",exact:!0,children:e?Object(l.jsx)(ie,{}):Object(l.jsx)(N.a,{to:"/notes-app"})}),Object(l.jsx)(N.b,{children:Object(l.jsx)(C,{})})]}),Object(l.jsx)(i,{})]})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,168)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},de=n(78);var be=Object(de.a)({reducer:{user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{username:null,token:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOKEN":return Object(v.a)(Object(v.a)({},e),{},{token:t.payload});case"SET_USERNAME":return Object(v.a)(Object(v.a)({},e),{},{username:t.payload});default:return e}},note:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:null,title:null,body:null,priority:null,color:null,readFlag:null,icon:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ID":return Object(v.a)(Object(v.a)({},e),{},{id:t.payload});case"SET_TITLE":return Object(v.a)(Object(v.a)({},e),{},{title:t.payload});case"SET_BODY":return Object(v.a)(Object(v.a)({},e),{},{body:t.payload});case"SET_PRIORITY":return Object(v.a)(Object(v.a)({},e),{},{priority:t.payload});case"SET_COLOR":return Object(v.a)(Object(v.a)({},e),{},{color:t.payload});case"SET_READ_FLAG":return Object(v.a)(Object(v.a)({},e),{},{readFlag:t.payload});case"SET_ICON":return Object(v.a)(Object(v.a)({},e),{},{icon:t.payload});default:return e}}}});o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(h.a,{children:Object(l.jsx)(O.a,{store:be,children:Object(l.jsx)(ue,{})})})}),document.getElementById("root")),je()},66:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[113,1,2]]]);
//# sourceMappingURL=main.2dd17115.chunk.js.map