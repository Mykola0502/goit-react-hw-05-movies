"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[495],{9495:function(e,n,r){r.r(n),r.d(n,{default:function(){return C}});var t,a,c,s,i,o=r(5861),u=r(9439),p=r(7757),l=r.n(p),d=r(7689),h=r(2791),f=r(4390),v=r(8617),x=r(168),m=r(6444),g=r(1087),b=m.ZP.div(t||(t=(0,x.Z)(["\n  position: sticky;\n  top: 60px;\n  margin-bottom: 10px;\n  padding: 5px 0;\n  background-color: #d8d4fae0;\n"]))),w=(0,m.ZP)(g.rU)(a||(a=(0,x.Z)(["\n  padding: 8px 20px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background-color: #eb9e9edc;\n  color: black;\n  border-radius: 5px;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  transition: color 250ms ease;\n\n  :hover {\n    color: #07d200;\n  }\n"]))),j=r(184),k=function(e){var n=e.to,r=e.children;return(0,j.jsx)(b,{children:(0,j.jsxs)(w,{to:n,children:[(0,j.jsx)(v.jTe,{size:"24"}),r]})})},Z=r(3342),y=r(4401),_=m.ZP.div(c||(c=(0,x.Z)(["\n  margin-bottom: 10px;\n  display: flex;\n  gap: 5px;\n"]))),U=m.ZP.img(s||(s=(0,x.Z)(["\n  width: 200px;\n  height: auto;\n"]))),S=m.ZP.div(i||(i=(0,x.Z)(["\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n"]))),E=function(e){var n=e.film,r=n.poster_path,t=n.original_title,a=n.release_date,c=n.vote_average,s=n.overview,i=n.genres;return(0,j.jsxs)(_,{children:[(0,j.jsx)(U,{src:r?"https://image.tmdb.org/t/p/w500".concat(r):y,alt:t}),(0,j.jsxs)(S,{children:[(0,j.jsxs)("h2",{children:[t," (",a,")"]}),(0,j.jsxs)("p",{children:["User score: ",c&&c.toFixed(1)||"-"]}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:s}),(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)("p",{children:i&&function(e){return e.map((function(e){return e.name})).join(", ")}(i)})]})]})},P=function(e){var n=e.movie,r=e.backLink;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(E,{film:n}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h3",{children:"Additional information"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(g.rU,{to:"cast",state:{from:r},children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(g.rU,{to:"reviews",state:{from:r},children:"Reviews"})})]}),(0,j.jsx)(h.Suspense,{fallback:(0,j.jsx)(Z.a,{}),children:(0,j.jsx)(d.j3,{})})]})]})},C=function(){var e,n,r=(0,h.useState)([]),t=(0,u.Z)(r,2),a=t[0],c=t[1],s=(0,h.useState)(!1),i=(0,u.Z)(s,2),p=i[0],v=i[1],x=(0,h.useState)(null),m=(0,u.Z)(x,2),g=m[0],b=m[1],w=(0,d.UO)().movieId,y=null!==(e=null===(n=(0,d.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,h.useEffect)((function(){var e=function(){var e=(0,o.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,(0,f.Ny)(w);case 4:n=e.sent,c(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),b(e.t0.message);case 12:return e.prev=12,v(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e(w)}),[w]),(0,j.jsxs)("main",{children:[(0,j.jsx)(k,{to:y,children:"Go back"}),p&&(0,j.jsx)(Z.a,{}),g&&(0,j.jsxs)("h2",{children:[g,(0,j.jsx)("p",{children:"Something went wrong, try reloading the page or come back later\ud83d\ude22"})]}),!g&&!p&&a&&(0,j.jsx)(P,{movie:a,backLink:y})]})}},4390:function(e,n,r){r.d(n,{Ai:function(){return u},Hx:function(){return l},Ny:function(){return o},Tg:function(){return i},uV:function(){return p}});var t=r(5861),a=r(7757),c=r.n(a),s=r(1912);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("trending/movie/day",{params:{api_key:"9e9058c72b8ee0828aa8b191435a8696"}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(n),{params:{api_key:"9e9058c72b8ee0828aa8b191435a8696",language:"en-US"}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("search/movie",{params:{api_key:"9e9058c72b8ee0828aa8b191435a8696",language:"en-US",query:"".concat(n)}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.log(e.t0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(n,"/credits"),{params:{api_key:"9e9058c72b8ee0828aa8b191435a8696",language:"en-US"}});case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:throw e.prev=7,e.t0=e.catch(0),console.log(e.t0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(n,"/reviews"),{params:{api_key:"9e9058c72b8ee0828aa8b191435a8696",language:"en-US",page:1}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.log(e.t0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()},4401:function(e,n,r){e.exports=r.p+"static/media/noImage.d621b3bcf47788207135.png"}}]);
//# sourceMappingURL=495.b3cf39ba.chunk.js.map