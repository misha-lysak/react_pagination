(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),i=t.n(c),l=t(1),s=t(2),o=t(4),g=t(3),p=t(5),u=t.n(p),m=function(e){Object(o.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.total,t=e.perPage,n=e.page,c=e.inPageChange,i=e.prevPage,l=e.nextPage,s=Math.ceil(a/t),o=Array.from(Array(s),(function(e,a){return a+1}));return r.a.createElement("div",null,r.a.createElement("nav",{"aria-label":"Page navigation example"},r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",{className:"page-item"},r.a.createElement("a",{onClick:i,className:u()("page-link-btn",{disabled:1===n}),href:"#".concat(n)},"Previous")),o.map((function(e){return r.a.createElement("li",{key:e,className:"page-item"},r.a.createElement("a",{onClick:c,className:u()("page-link",{active:n===e}),href:"#".concat(e)},e))})),r.a.createElement("li",{className:"page-item"},r.a.createElement("a",{onClick:l,className:u()("page-link-btn",{disabled:n===s}),href:"#".concat(n)},"Next")))),n>t&&r.a.createElement("p",null,"u can take some info from this small paragraph"))}}]),t}(r.a.Component),h=(t(13),function(e){Object(o.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={total:42,perPage:5,page:1},e.inPageChange=function(a){e.setState({page:+a.target.innerText})},e.prevPage=function(a){1!==e.state.page&&e.setState((function(e){return{page:e.page-1}}))},e.nextPage=function(a){e.state.page!==Math.ceil(e.state.total/e.state.perPage)&&e.setState((function(e){return{page:e.page+1}}))},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,{className:"pagination",total:this.state.total,perPage:this.state.perPage,page:this.state.page,inPageChange:this.inPageChange,prevPage:this.prevPage,nextPage:this.nextPage}))}}]),t}(r.a.Component));i.a.render(r.a.createElement(h,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.1202e94b.chunk.js.map