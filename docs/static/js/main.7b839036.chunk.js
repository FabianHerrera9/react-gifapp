(this["webpackJsonpgifs-app"]=this["webpackJsonpgifs-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(9),u=n(0),o=function(t){var e=t.setcatg,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(s.a)(t))})),o("")),console.log("Submmited")},children:[Object(u.jsx)("h2",{children:"Add Category"}),Object(u.jsx)("input",{type:"text",value:r,placeholder:"Type here",onChange:function(t){o(t.target.value)}})]})})},j=n(10),d=n(6),l=n.n(d),b=n(8),m=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,a,c,r,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"n3lAZflPuzxyOB9s3DE6AuBbpomgNZ6K",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=").concat("n3lAZflPuzxyOB9s3DE6AuBbpomgNZ6K"),t.next=4,fetch(n);case 4:return a=t.sent,t.next=7,a.json();case 7:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){t.id;var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeInDown",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},p=function(t){var e=t.catgry,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){m(t).then((function(t){r({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeInDown",children:e}),r&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"loading"}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(u.jsx)(f,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(a.useState)(["Genshin Impact"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Gif App"}),Object(u.jsx)(o,{setcatg:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ul",{children:n.map((function(t){return Object(u.jsx)(p,{catgry:t},t)}))})]})};n(17);r.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7b839036.chunk.js.map