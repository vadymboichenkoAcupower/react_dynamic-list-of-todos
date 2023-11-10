(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(2),i=c(8),d=c(1),o=(c(13),c(14),c(5)),r=c.n(o),j=c(0),u=function(e){var t=e.todos,c=e.selectedTodo,s=e.setSelectedTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",className:r()("",{"has-background-info-light":e.id===(null===c||void 0===c?void 0:c.id)}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(j.jsx)("td",{className:"is-vcentered",children:Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}):Object(j.jsx)("td",{className:"is-vcentered"}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:r()("has-text-success",{"has-text-danger":!e.completed}),children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:r()("far fa-eye",{"far fa-eye-slash":e.id===(null===c||void 0===c?void 0:c.id)})})})})})]})}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var b=function(e){var t=e.query,c=e.setQuery,a=e.filter,n=e.setFilter;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){n(e.target.value)},children:[Object(j.jsx)("option",{value:s.All,children:"All"}),Object(j.jsx)("option",{value:s.Active,children:"Active"}),Object(j.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},h=(c(16),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=Object(d.useState)(!1),a=Object(l.a)(s,2),n=a[0],i=a[1],o=Object(d.useState)(null),r=Object(l.a)(o,2),u=r[0],b=r[1];return Object(d.useEffect)((function(){var e;i(!0),(e=null===t||void 0===t?void 0:t.userId,m("/users/".concat(e))).then((function(e){return b(e)})).finally((function(){return i(!1)}))}),[t]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),n?Object(j.jsx)(h,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(j.jsx)("strong",{className:null!==t&&void 0!==t&&t.completed?"has-text-success":"has-text-danger",children:null!==t&&void 0!==t&&t.completed?"Done":"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===u||void 0===u?void 0:u.email),children:null===u||void 0===u?void 0:u.name})]})]})]})]})};var x=function(){var e=Object(d.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)([]),o=Object(l.a)(n,2),r=o[0],x=o[1],f=Object(d.useState)(s.All),v=Object(l.a)(f,2),p=v[0],N=v[1],y=Object(d.useState)(""),g=Object(l.a)(y,2),S=g[0],k=g[1],C=Object(d.useState)(null),T=Object(l.a)(C,2),w=T[0],A=T[1];Object(d.useEffect)((function(){a(!0),m("/todos").then((function(e){return x(e)})).finally((function(){return a(!1)}))}),[]);var _=Object(d.useMemo)((function(){return function(e,t,c){var a=Object(i.a)(e);switch(c&&(a=a.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}))),t){case s.Active:return a.filter((function(e){return!e.completed}));case s.Completed:return a.filter((function(e){return e.completed}));default:return a}}(r,p,S)}),[r,S,p]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{query:S,setQuery:k,filter:p,setFilter:N})}),Object(j.jsx)("div",{className:"block",children:c?Object(j.jsx)(h,{}):Object(j.jsx)(u,{todos:_,selectedTodo:w,setSelectedTodo:A})})]})})}),w&&Object(j.jsx)(O,{selectedTodo:w,setSelectedTodo:A})]})};n.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c90bf840.chunk.js.map