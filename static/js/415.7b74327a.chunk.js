"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{8647:function(e,n,t){t.d(n,{e:function(){return f}});var r,a,c=t(7689),u=t(168),o=t(6444),s=t(1087),i=o.ZP.li(r||(r=(0,u.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),p=(0,o.ZP)(s.rU)(a||(a=(0,u.Z)(["\n  display: inline-flex;\n  align-items: center;\n  color: #0000ff;\n  text-decoration: none;\n  font-weight: 500;\n\n  transition: color 250ms ease;\n\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n\n  :hover {\n    color: #ff4500;\n  }\n"]))),l=t(184),f=function(e){var n=e.movies,t=(0,c.TH)();return(0,l.jsx)("ul",{children:n.map((function(e){return(0,l.jsx)(i,{children:(0,l.jsx)(p,{to:"/movie/".concat(e.id),state:{from:t},children:e.title})},e.id)}))})}},5415:function(e,n,t){t.r(n);var r=t(5861),a=t(9439),c=t(7757),u=t.n(c),o=t(2791),s=t(4390),i=t(3342),p=t(8647),l=t(184);n.default=function(){var e=(0,o.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],f=(0,o.useState)(!1),v=(0,a.Z)(f,2),h=v[0],m=v[1],d=(0,o.useState)(null),g=(0,a.Z)(d,2),x=g[0],w=g[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,s.Tg)();case 4:n=e.sent,c(n.results),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message),console.log(e.t0),w(e.t0.message);case 13:return e.prev=13,m(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,8,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsxs)("main",{children:[(0,l.jsx)("h1",{children:"Trending today"}),h&&(0,l.jsx)(i.a,{}),t&&(0,l.jsx)(p.e,{movies:t}),x&&(0,l.jsxs)("h2",{children:[x,(0,l.jsx)("p",{children:"No films found, try again\ud83d\ude22"})]})]})}},4390:function(e,n,t){t.d(n,{Ai:function(){return i},Hx:function(){return l},Ny:function(){return s},Tg:function(){return o},uV:function(){return p}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1912);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("trending/movie/day",{params:{api_key:"9e9058c72b8ee0828aa8b191435a8696"}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(n),{params:{api_key:"9e9058c72b8ee0828aa8b191435a8696",language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("search/movie",{params:{api_key:"9e9058c72b8ee0828aa8b191435a8696",language:"en-US",query:"".concat(n)}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.log(e.t0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(n,"/credits"),{params:{api_key:"9e9058c72b8ee0828aa8b191435a8696",language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:throw e.prev=7,e.t0=e.catch(0),console.log(e.t0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(n,"/reviews"),{params:{api_key:"9e9058c72b8ee0828aa8b191435a8696",language:"en-US",page:1}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.log(e.t0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.7b74327a.chunk.js.map