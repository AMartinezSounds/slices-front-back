(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/GqU":function(t,n,r){var e=r("RK3t"),o=r("HYAF");t.exports=function(t){return e(o(t))}},"/b8u":function(t,n,r){var e=r("STAE");t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"0BK2":function(t,n){t.exports={}},"0Dky":function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},"0GbY":function(t,n,r){var e=r("Qo9l"),o=r("2oRo"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},"0eef":function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},"2oRo":function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r("yLpj"))},"33Wh":function(t,n,r){var e=r("yoRg"),o=r("eDl+");t.exports=Object.keys||function(t){return e(t,o)}},"6JNq":function(t,n,r){var e=r("UTVS"),o=r("Vu81"),i=r("Bs8V"),u=r("m/L8");t.exports=function(t,n){for(var r=o(n),a=u.f,c=i.f,f=0;f<r.length;f++){var p=r[f];e(t,p)||a(t,p,c(n,p))}}},"6LWA":function(t,n,r){var e=r("xrYK");t.exports=Array.isArray||function(t){return"Array"==e(t)}},"93I0":function(t,n,r){var e=r("VpIT"),o=r("kOOl"),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},A2ZE:function(t,n,r){var e=r("HAuM");t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},BIHw:function(t,n,r){"use strict";var e=r("I+eb"),o=r("or9q"),i=r("ewvW"),u=r("UMSQ"),a=r("ppGB"),c=r("ZfDv");e({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,n=i(this),r=u(n.length),e=c(n,0);return e.length=o(e,n,n,r,0,void 0===t?1:a(t)),e}})},Bs8V:function(t,n,r){var e=r("g6v/"),o=r("0eef"),i=r("XGwC"),u=r("/GqU"),a=r("wE6v"),c=r("UTVS"),f=r("DPsx"),p=Object.getOwnPropertyDescriptor;n.f=e?p:function(t,n){if(t=u(t),n=a(n,!0),f)try{return p(t,n)}catch(r){}if(c(t,n))return i(!o.f.call(t,n),t[n])}},DPsx:function(t,n,r){var e=r("g6v/"),o=r("0Dky"),i=r("zBJ4");t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"G+Rx":function(t,n,r){var e=r("0GbY");t.exports=e("document","documentElement")},HAuM:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},HYAF:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},"I+eb":function(t,n,r){var e=r("2oRo"),o=r("Bs8V").f,i=r("kRJp"),u=r("busE"),a=r("zk60"),c=r("6JNq"),f=r("lMq5");t.exports=function(t,n){var r,p,s,l,v,g=t.target,m=t.global,y=t.stat;if(r=m?e:y?e[g]||a(g,{}):(e[g]||{}).prototype)for(p in n){if(l=n[p],s=t.noTargetGet?(v=o(r,p))&&v.value:r[p],!f(m?p:g+(y?".":"#")+p,t.forced)&&void 0!==s){if(typeof l==typeof s)continue;c(l,s)}(t.sham||s&&s.sham)&&i(l,"sham",!0),u(r,p,l,t)}}},I8vh:function(t,n,r){var e=r("ppGB"),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},JBy8:function(t,n,r){var e=r("yoRg"),o=r("eDl+").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},"N+g0":function(t,n,r){var e=r("g6v/"),o=r("m/L8"),i=r("glrk"),u=r("33Wh");t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=u(n),a=e.length,c=0;a>c;)o.f(t,r=e[c++],n[r]);return t}},QGkA:function(t,n,r){r("RNIs")("flat")},Qo9l:function(t,n,r){var e=r("2oRo");t.exports=e},RK3t:function(t,n,r){var e=r("0Dky"),o=r("xrYK"),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},RNIs:function(t,n,r){var e=r("tiKp"),o=r("fHMY"),i=r("m/L8"),u=e("unscopables"),a=Array.prototype;null==a[u]&&i.f(a,u,{configurable:!0,value:o(null)}),t.exports=function(t){a[u][t]=!0}},STAE:function(t,n,r){var e=r("0Dky");t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},TWQb:function(t,n,r){var e=r("/GqU"),o=r("UMSQ"),i=r("I8vh"),u=function(t){return function(n,r,u){var a,c=e(n),f=o(c.length),p=i(u,f);if(t&&r!=r){for(;f>p;)if((a=c[p++])!=a)return!0}else for(;f>p;p++)if((t||p in c)&&c[p]===r)return t||p||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},UMSQ:function(t,n,r){var e=r("ppGB"),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},UTVS:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},VpIT:function(t,n,r){var e=r("xDBR"),o=r("xs3f");(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},Vu81:function(t,n,r){var e=r("0GbY"),o=r("JBy8"),i=r("dBg+"),u=r("glrk");t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},XGwC:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},ZfDv:function(t,n,r){var e=r("hh1v"),o=r("6LWA"),i=r("tiKp")("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},afO8:function(t,n,r){var e,o,i,u=r("f5p1"),a=r("2oRo"),c=r("hh1v"),f=r("kRJp"),p=r("UTVS"),s=r("93I0"),l=r("0BK2"),v=a.WeakMap;if(u){var g=new v,m=g.get,y=g.has,d=g.set;e=function(t,n){return d.call(g,t,n),n},o=function(t){return m.call(g,t)||{}},i=function(t){return y.call(g,t)}}else{var h=s("state");l[h]=!0,e=function(t,n){return f(t,h,n),n},o=function(t){return p(t,h)?t[h]:{}},i=function(t){return p(t,h)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!c(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},busE:function(t,n,r){var e=r("2oRo"),o=r("kRJp"),i=r("UTVS"),u=r("zk60"),a=r("iSVu"),c=r("afO8"),f=c.get,p=c.enforce,s=String(String).split("String");(t.exports=function(t,n,r,a){var c=!!a&&!!a.unsafe,f=!!a&&!!a.enumerable,l=!!a&&!!a.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),p(r).source=s.join("string"==typeof n?n:"")),t!==e?(c?!l&&t[n]&&(f=!0):delete t[n],f?t[n]=r:o(t,n,r)):f?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||a(this)}))},"dBg+":function(t,n){n.f=Object.getOwnPropertySymbols},"eDl+":function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},ewvW:function(t,n,r){var e=r("HYAF");t.exports=function(t){return Object(e(t))}},f5p1:function(t,n,r){var e=r("2oRo"),o=r("iSVu"),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},fHMY:function(t,n,r){var e,o=r("glrk"),i=r("N+g0"),u=r("eDl+"),a=r("0BK2"),c=r("G+Rx"),f=r("zBJ4"),p=r("93I0"),s=p("IE_PROTO"),l=function(){},v=function(t){return"<script>"+t+"<\/script>"},g=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(o){}var t,n;g=e?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((n=f("iframe")).style.display="none",c.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var r=u.length;r--;)delete g.prototype[u[r]];return g()};a[s]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(l.prototype=o(t),r=new l,l.prototype=null,r[s]=t):r=g(),void 0===n?r:i(r,n)}},"g6v/":function(t,n,r){var e=r("0Dky");t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},glrk:function(t,n,r){var e=r("hh1v");t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},hh1v:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},hiQ4:function(t,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return y})),r.d(n,"query",(function(){return d}));var e=r("q1tI"),o=r.n(e),i=r("Wbzz"),u=r("9eSz"),a=r.n(u),c=r("vOnD"),f=c.b.div.withConfig({displayName:"PizzaList__PizzaGridStyles",componentId:"sc-1bfq4fh-0"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:4rem;grid-auto-rows:auto auto 500px;"]),p=c.b.div.withConfig({displayName:"PizzaList__PizzaStyles",componentId:"sc-1bfq4fh-1"})(["display:grid;@supports not (grid-template-rows:subgrid){--rows:auto auto 1fr;}grid-template-rows:var(--rows,subgrid);grid-row:span 3;grid-gap:1rem;h2,p{margin:0;}"]);function s(t){var n=t.pizza;return o.a.createElement(p,null,o.a.createElement(i.a,{to:"/pizza/"+n.slug.current},o.a.createElement("h2",null,o.a.createElement("span",{className:"mark"},n.name))),o.a.createElement("p",null,n.toppings.map((function(t){return t.name})).join(", ")),o.a.createElement(a.a,{fluid:n.image.asset.fluid,alt:n.name}))}var l=function(t){var n=t.pizzas;return o.a.createElement(f,null,n.map((function(t){return o.a.createElement(s,{key:t.id,pizza:t})})))},v=(r("BIHw"),r("QGkA"),c.b.div.withConfig({displayName:"ToppingsFilter__ToppingStyles",componentId:"sc-17jrjpr-0"})(["display:flex;flex-wrap:wrap;gap:1rem;margin-bottom:4rem;a{display:grid;grid-template-columns:auto 1fr;grid-gap:0 1rem;align-items:center;padding:5px;background:var(--grey);border-radius:2px;text-decoration:none;font-size:clamp(1.5rem,1.4vw,2.5rem);.count{background:white;padding:2px 5px;}&[aria-current='page']{background:var(--yellow);}}"]));var g=function(t){var n=t.activeTopping,r=Object(i.c)("2929599075"),e=(r.toppings,r.pizzas),u=function(t){var n=t.map((function(t){return t.toppings})).flat().reduce((function(t,n){var r=t[n.id];return r?r.count+=1:t[n.id]={id:n.id,name:n.name,count:1},t}),{});return Object.values(n).sort((function(t,n){return n.count-t.count}))}(e.nodes);return o.a.createElement(v,null,o.a.createElement(i.a,{to:"/pizzas"},o.a.createElement("span",{className:"name"},"All"),o.a.createElement("span",{className:"count"},e.nodes.length)),u.map((function(t){return o.a.createElement(i.a,{to:"/topping/"+t.name,key:t.id,className:t.name===n?"active":""},o.a.createElement("span",{className:"name"},t.name),o.a.createElement("span",{className:"count"},t.count))})))},m=r("EYWl");function y(t){var n=t.data,r=t.pageContext,e=n.pizzas.nodes;return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{title:r.topping?"Pizzas With "+r.topping:"All pizzas"}),o.a.createElement(g,{activeTopping:r.topping}),o.a.createElement(l,{pizzas:e}))}var d="1730256619"},iSVu:function(t,n,r){var e=r("xs3f"),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},kOOl:function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},kRJp:function(t,n,r){var e=r("g6v/"),o=r("m/L8"),i=r("XGwC");t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},lMq5:function(t,n,r){var e=r("0Dky"),o=/#|\.prototype\./,i=function(t,n){var r=a[u(t)];return r==f||r!=c&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},c=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},"m/L8":function(t,n,r){var e=r("g6v/"),o=r("DPsx"),i=r("glrk"),u=r("wE6v"),a=Object.defineProperty;n.f=e?a:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return a(t,n,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},or9q:function(t,n,r){"use strict";var e=r("6LWA"),o=r("UMSQ"),i=r("A2ZE"),u=function(t,n,r,a,c,f,p,s){for(var l,v=c,g=0,m=!!p&&i(p,s,3);g<a;){if(g in r){if(l=m?m(r[g],g,n):r[g],f>0&&e(l))v=u(t,n,l,o(l.length),v,f-1)-1;else{if(v>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[v]=l}v++}g++}return v};t.exports=u},ppGB:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},tiKp:function(t,n,r){var e=r("2oRo"),o=r("VpIT"),i=r("UTVS"),u=r("kOOl"),a=r("STAE"),c=r("/b8u"),f=o("wks"),p=e.Symbol,s=c?p:p&&p.withoutSetter||u;t.exports=function(t){return i(f,t)||(a&&i(p,t)?f[t]=p[t]:f[t]=s("Symbol."+t)),f[t]}},wE6v:function(t,n,r){var e=r("hh1v");t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},xDBR:function(t,n){t.exports=!1},xrYK:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},xs3f:function(t,n,r){var e=r("2oRo"),o=r("zk60"),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},yoRg:function(t,n,r){var e=r("UTVS"),o=r("/GqU"),i=r("TWQb").indexOf,u=r("0BK2");t.exports=function(t,n){var r,a=o(t),c=0,f=[];for(r in a)!e(u,r)&&e(a,r)&&f.push(r);for(;n.length>c;)e(a,r=n[c++])&&(~i(f,r)||f.push(r));return f}},zBJ4:function(t,n,r){var e=r("2oRo"),o=r("hh1v"),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},zk60:function(t,n,r){var e=r("2oRo"),o=r("kRJp");t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}}}]);
//# sourceMappingURL=component---src-pages-pizzas-js-de013bc440cab881e6a5.js.map