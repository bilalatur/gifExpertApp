(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n(7),i=n.n(a),s=(n(17),n(2)),u=n(10),o=n(8),j=function(t){var e=t.setCategories,n=Object(c.useState)(""),a=Object(s.a)(n,2),i=a[0],o=a[1];return Object(r.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&e((function(t){return[i].concat(Object(u.a)(t))}))},children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(t){o(t.target.value)}})})};j.prototypes={setCategories:n.n(o).a.func.isRequired};var d=n(11),p=function(t){t.id;var e=t.title,n=t.url;return Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:n,alt:e}),Object(r.jsx)("p",{children:e})]})},f=n(6),l=n.n(f),b=n(9),O=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,r,c,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=16YzGfsYqMcLp4aBhd4eLPRa3q2KfGeJ&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){O(t).then((function(t){setTimeout((function(){a({data:t,loading:!1})}),1500)}))}),[t]),r}(e),a=n.loading,i=n.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:e}),a&&Object(r.jsx)("p",{children:"Cargando los mejores Gifs"}),Object(r.jsx)("div",{className:"card-grid",children:i.map((function(t){return Object(r.jsx)(p,Object(d.a)({},t),t.id)}))})]})},x=function(){var t=Object(c.useState)(["Los Simpsons"]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"GifExpertApp"}),Object(r.jsx)(j,{setCategories:a}),Object(r.jsx)("hr",{}),Object(r.jsx)("ol",{children:n.map((function(t){return Object(r.jsx)(h,{category:t},t)}))})]})};i.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.13b1e7c1.chunk.js.map