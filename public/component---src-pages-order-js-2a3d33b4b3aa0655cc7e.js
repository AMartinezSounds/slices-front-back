(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ls82:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function u(e,t,r,n){var a=t&&t.prototype instanceof s?t:s,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var u=w(i,r);if(u){if(u===l)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=c(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),o}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=u;var l={};function s(){}function f(){}function m(){}var p={};p[a]=function(){return this};var d=Object.getPrototypeOf,h=d&&d(d(O([])));h&&h!==t&&r.call(h,a)&&(p=h);var v=m.prototype=s.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function g(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,u){var l=c(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,u)}),(function(e){n("throw",e,i,u)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,u)}))}u(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=c(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=v.constructor=m,m.constructor=f,m[i]=f.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(g.prototype),g.prototype[o]=function(){return this},e.AsyncIterator=g,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new g(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(v),v[i]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(e,t,r){e.exports=r("ls82")},pi3A:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return S})),r.d(t,"query",(function(){return L}));var n=r("q1tI"),a=r.n(n),o=r("9eSz"),i=r.n(o),u=r("EYWl");var c={S:.75,M:1,L:1.25};function l(e,t){return e*c[t]}var s=Intl.NumberFormat("en-US",{style:"currency",currency:"GBP"});var f=function(e){return s.format(e/100)},m=r("vOnD"),p=m.b.form.withConfig({displayName:"OrderStyles",componentId:"sc-11qtif2-0"})(["display:grid;grid-template-columns:1fr 1fr;gap:20px;fieldset{grid-column:span 2;max-height:600px;overflow:auto;display:grid;gap:1rem;align-content:start;&.order,&.menu{grid-column:span 1;}}.mapleSyrup{display:none;}@media (max-width:900px){fieldset.menu,fieldset.order{grid-column:span 2;}}"]),d=m.b.div.withConfig({displayName:"MenuItemStyles",componentId:"m2f55x-0"})(["display:grid;grid-template-columns:100px 1fr;grid-template-rows:1fr 1fr;gap:0 1.3rem;align-content:center;align-items:center;position:relative;.gatsby-image-wrapper{grid-row:span 2;height:100%;}p{margin:0;}button{font-size:1.5rem;}button + button{margin-left:1rem;}.remove{background:none;color:var(--red);font-size:3rem;position:absolute;top:0;right:0;box-shadow:none;line-height:1rem;}"]),h=r("o0o1"),v=r.n(h);r("ls82");function y(e,t,r,n,a,o,i){try{var u=e[o](i),c=u.value}catch(l){return void r(l)}u.done?t(c):Promise.resolve(c).then(n,a)}function g(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){y(o,n,a,i,u,"next",e)}function u(e){y(o,n,a,i,u,"throw",e)}i(void 0)}))}}var w=r("KQm4"),b=r("HsoQ");function E(e,t){return e.reduce((function(e,r){return e+l(t.find((function(e){return e.id===r.id})).price,r.size)}),0)}function x(e,t){return e.map((function(e){var r=t.find((function(t){return t.id===e.id}));return Object.assign({},e,{name:r.name,thumbnail:r.image.asset.fluid.src,price:f(l(r.price,e.size))})}))}var O=function(e){var t=e.order,r=e.pizzas,n=e.removeFromOrder;return e.plainImage,a.a.createElement(a.a.Fragment,null,t.map((function(e,t){var o=r.find((function(t){return t.id===e.id}));return a.a.createElement(d,{key:e.id+" - "+t},a.a.createElement(i.a,{fluid:o.image.asset.fluid}),a.a.createElement("h2",null,o.name),a.a.createElement("p",null,f(l(o.price,e.size)),a.a.createElement("button",{type:"button",className:"remove",title:"Remove "+e.size+" "+o.name+" from Order",onClick:function(){return n(t)}},"×")))})))};function S(e){var t=e.data.pizzas.nodes,r=function(e){var t=Object(n.useState)(e),r=t[0],a=t[1];return{values:r,updateValue:function(e){var t,n=e.target.value;"number"===e.target.type&&(n=parseInt(e.target.value)),a(Object.assign({},r,((t={})[e.target.name]=n,t)))}}}({name:"",email:"",mapleSyrup:""}),o=r.values,c=r.updateValue,s=function(e){var t=e.pizzas,r=e.values,a=Object(n.useContext)(b.b),o=a[0],i=a[1],u=Object(n.useState)(),c=u[0],l=u[1],s=Object(n.useState)(!1),m=s[0],p=s[1],d=Object(n.useState)(""),h=d[0],y=d[1];function O(){return(O=g(v.a.mark((function e(n){var a,i,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log(n),p(!0),l(null),a={order:x(o,t),total:f(E(o,t)),name:r.name,email:r.email,mapleSyrup:r.mapleSyrup},e.next=7,fetch("http://localhost:8888/.netlify/functions/placeOrder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 7:return i=e.sent,e.t0=JSON,e.next=11,i.text();case 11:e.t1=e.sent,u=e.t0.parse.call(e.t0,e.t1),i.status>=400&&i.status<600?(p(!1),l(u.message)):(p(!1),y("Success! Come on down for your pizza"));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{order:o,addToOrder:function(e){i([].concat(Object(w.a)(o),[e]))},removeFromOrder:function(e){i([].concat(Object(w.a)(o.slice(0,e)),Object(w.a)(o.slice(e+1))))},error:c,loading:m,message:h,submitOrder:function(e){return O.apply(this,arguments)}}}({pizzas:t,values:o}),m=s.order,h=s.addToOrder,y=s.removeFromOrder,S=s.error,L=s.loading,z=s.message,j=s.submitOrder;return z?a.a.createElement("p",null,z):a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{title:"Order a Pizza!"}),a.a.createElement(p,{onSubmit:j},a.a.createElement("fieldset",{disabled:L},a.a.createElement("legend",null,"Your Info"),a.a.createElement("label",{htmlFor:"name"},"Name"),a.a.createElement("input",{type:"text",name:"name",id:"name",value:o.name,onChange:c}),a.a.createElement("label",{htmlFor:"email"},"Email"),a.a.createElement("input",{type:"email",name:"email",id:"email",value:o.email,onChange:c}),a.a.createElement("input",{type:"mapleSyrup",name:"mappleSyrup",id:"mapleSyrup",value:o.mapleSyrup,onChange:c,className:"mapleSyrup"})),a.a.createElement("fieldset",{disabled:L,className:"menu"},a.a.createElement("label",null,"Menu"),t.map((function(e){return a.a.createElement(d,{key:e.id},a.a.createElement(i.a,{width:"50",height:"50",fluid:e.image.asset.fluid,alt:e.name}),a.a.createElement("div",null,a.a.createElement("h2",null,e.name)),a.a.createElement("div",null,["S","M","L"].map((function(t){return a.a.createElement("button",{type:"button",key:t,onClick:function(){return h({id:e.id,size:t})}},t," ",f(l(e.price,t)))}))))}))),a.a.createElement("fieldset",{disabled:L,className:"order"},a.a.createElement("label",null,"Order"),a.a.createElement(O,{order:m,removeFromOrder:y,pizzas:t})),a.a.createElement("fieldset",{disabled:L},a.a.createElement("h3",null,"Your Total is ",f(E(m,t))),a.a.createElement("div",null,S?a.a.createElement("p",null,"Error: ",S):""),a.a.createElement("button",{type:"submit",disabled:L},L?"Placing Order...":"Order Ahead"))))}var L="369404229"}}]);
//# sourceMappingURL=component---src-pages-order-js-2a3d33b4b3aa0655cc7e.js.map