(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(3),i=n.n(c),a=n(6),s=(n(24),n(9)),l=n(13),h=n(4),d=n(5),u=n(8),b=n(7),j=n(1),f=function(e){var t=e.id,n=e.name,r=e.email;return Object(j.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(j.jsx)("img",{src:"https://robohash.org/".concat(t,"?300x300"),alt:"Robot",rel:"pre-connect",width:"300",height:"300"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:n}),Object(j.jsx)("p",{children:r})]})]})},p=function(e){var t=e.robots;return Object(j.jsx)("div",{children:t.map((function(e,t){return Object(j.jsx)(f,{id:e.id,name:e.name,email:e.email},"".concat(t,"x"))}))})},g=function(e){e.searchTerm;var t=e.onSearch;return Object(j.jsx)("div",{className:"pa2",children:Object(j.jsx)("input",{"aria-label":"Search Robots",type:"search",placeholder:"search for robots",className:"pa2 ba b--green bg-lightest-blue",onChange:t})})},v=(n(26),n(27),function(e){var t=e.children;return Object(j.jsx)("div",{className:"scroller",style:{overflowY:"scroll",border:"2px solid black",height:"500px"},children:t})}),O=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(d.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(j.jsx)("h1",{children:"Oooops. That is not good"}):this.props.children}}]),n}(o.a.Component),w="CHANGE_SEARCHFIELD",m="REQUEST_ROBOTS_PENDING",x="REQUEST_ROBOTS_SUCCESS",y="REQUEST_ROBOTS_FAILED",S=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this,t=this.props.robots.filter((function(t){return t.name.toLowerCase().includes(e.props.searchField.toLowerCase())}));return Object(j.jsxs)("div",{className:"tc",children:[Object(j.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(j.jsx)(g,{searchTerm:this.props.searchField,onSearch:this.props.handleSearch}),this.props.error&&Object(j.jsx)("h1",{children:"Something went wrong ..."}),this.props.isPending?Object(j.jsx)("h1",{children:"Loading..."}):Object(j.jsx)(v,{children:Object(j.jsx)(O,{children:Object(j.jsx)(p,{robots:t})})})]})}}]),n}(r.Component),R=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{handleSearch:function(t){return e((n=t.target.value,{type:w,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:m}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:x,payload:t})})).catch((function(t){return e({type:y,payload:t})}))}))}}}))(S),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),c(e),i(e)}))},F=(n(28),n(2)),T={searchField:""};var P={isPending:!1,error:!1,robots:[]};var N=Object(s.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===w?Object(F.a)(Object(F.a)({},e),{},{searchField:t.payload}):Object(F.a)({},e)},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m:return Object(F.a)(Object(F.a)({},e),{},{error:!1,isPending:!0});case x:return Object(F.a)(Object(F.a)({},e),{},{isPending:!1,error:!1,robots:t.payload});case y:return Object(F.a)(Object(F.a)({},e),{},{isPending:!1,error:!0});default:return Object(F.a)({},e)}}}),L=Object(s.c)(N,Object(s.a)(l.a));i.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(a.a,{store:L,children:Object(j.jsx)(R,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):E(t,e)}))}}(),C()}},[[29,1,2]]]);
//# sourceMappingURL=main.e893a906.chunk.js.map