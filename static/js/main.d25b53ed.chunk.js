(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(26)},20:function(e,n,t){},21:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(6),c=t.n(i),o=(t(20),t(21),t(5)),u=t(7),s=t(2),l="LOAD",d="DISPLAY",m="SELECTED",p="MOVE_UP",f="MOVE_DOWN",v="REMOVE",x="RENAMED";function b(){return function(e){e({type:l});var n=new XMLHttpRequest;n.open("GET","http://my-json-server.typicode.com/mate-academy/literary-blog/authors"),n.responseType="json",n.addEventListener("load",function(){var t=n.response;e(function(e){return{type:d,names:e}}(t))}),n.send()}}var L={requested:!1,names:null,selectedIndex:null};var E=t(4);var y=Object(u.b)(function(e){return{namesRequested:e.requested,names:e.names,indexLi:e.selectedIndex}},function(e){return{buttonLoad:function(){return e(b())},selectedLi:function(n){return e(function(e){return{type:m,index:e}}(n))},moveUp:function(n,t){return e(function(e,n){return{type:p,names:e,index:n}}(n,t))},moveDovn:function(n,t){return e(function(e,n){return{type:f,names:e,index:n}}(n,t))},remove:function(n){return e(function(e){return{type:v,names:e}}(n))},renamed:function(n){return e(function(e){return{type:x,names:e}}(n))}}})(function(e){return e.namesRequested?e.names?r.a.createElement(a.Fragment,null,r.a.createElement("ul",null,e.names.map(function(n,t){return r.a.createElement("li",{key:n+t,onClick:function(){return e.selectedLi(t)}},n,r.a.createElement("button",{onClick:function(){var n=Object(E.a)(e.names);return n.splice(e.indexLi,1),e.remove(n)}},"x"))})),r.a.createElement("button",{disabled:!e.indexLi,onClick:function(){var n=Object(E.a)(e.names),t=n.splice(e.indexLi,1);return n.splice(e.indexLi-1,0,t[0]),e.moveUp(n,e.indexLi-1)}},"Up"),r.a.createElement("button",{disabled:null===e.indexLi||e.indexLi===e.names.length-1,onClick:function(){var n=Object(E.a)(e.names),t=n.splice(e.indexLi,1);return n.splice(e.indexLi+1,0,t[0]),e.moveUp(n,e.indexLi+1)}},"Down"),null!==e.indexLi&&r.a.createElement("input",{type:"text",defaultValue:e.names[e.indexLi],onKeyDown:function(n){var t=Object(E.a)(e.names);if(t.splice(e.indexLi,1),t.splice(e.indexLi,0,n.target.value.trim()),e.renamed(t),"Enter"===n.key&&""===n.target.value.trim()){var a=Object(E.a)(e.names);return a.splice(e.indexLi,1),e.remove(a)}}})):r.a.createElement("span",null,"loading..."):r.a.createElement("button",{onClick:e.buttonLoad},"Load")}),O=t(14),j=Object(o.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case l:return Object(s.a)({},e,{requested:!0});case d:return Object(s.a)({},e,{names:n.names});case m:return Object(s.a)({},e,{selectedIndex:n.index});case p:case f:return Object(s.a)({},e,{names:n.names,selectedIndex:n.index});case v:return Object(s.a)({},e,{names:n.names,selectedIndex:null});case x:return Object(s.a)({},e,{names:n.names});default:return e}},Object(o.a)(O.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(function(){return r.a.createElement(u.a,{store:j},r.a.createElement(y,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.d25b53ed.chunk.js.map