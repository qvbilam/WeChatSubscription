(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e1fa940"],{"0609":function(t,e,n){},1169:function(t,e,n){var r=n("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),a=n("6821"),o=n("6a99"),c=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=a(t),e=o(e,!0),s)try{return u(t,e)}catch(t){}if(c(t,e))return i(!r.f.call(t,e),t[e])}},"1bd8":function(t,e,n){},"1f75":function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return o});n("e7e5");var r=n("d399"),i=n("2b0e"),a=function(t,e,n,a){i["a"].http.post(t,{params:e},{emulateJSON:!0}).then(function(t){200===t.status&&(t.data.hasOwnProperty("error_code")?0!==t.data.error_code?(r["a"].fail(t.data.msg),a&&a(t.data.msg)):n&&n(t.data.data):n&&n(t.data))},function(){r["a"].fail("网络请求出错"),a&&a("网络请求出错")})},o=function(t,e,n,a){i["a"].http.get(t,{params:e}).then(function(t){window.console.log("http res",t),200===t.status&&(t.data.hasOwnProperty("error_code")?0!==t.data.error_code?(r["a"].fail(t.data.msg),a&&a(t.data.msg)):n&&n(t.data.data):(window.console.log("has not error code"),n&&n(t.data)))},function(){r["a"].fail("网络请求出错"),a&&a("网络请求出错")})}},2621:function(t,e){e.f=Object.getOwnPropertySymbols},"37c8":function(t,e,n){e.f=n("2b4c")},"3a72":function(t,e,n){var r=n("7726"),i=n("8378"),a=n("2d00"),o=n("37c8"),c=n("86cc").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=a?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:o.f(t)})}},"45e1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("p",{staticClass:"title"},[t._v("我的订单")]),n("van-list",{staticClass:"outer",attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.orders,function(e){return n("div",{key:e.couponId,staticClass:"item",attrs:{title:e}},[n("div",{staticClass:"item-left"},[n("div",{staticClass:"time"},[t._v(t._s(e.created_at))]),n("div",{staticClass:"latency"},[t._v("服务"+t._s(e.minute)+"分钟")])]),n("div",{staticClass:"item-right"},[n("div",{staticClass:"status"},[t._v(t._s(0===e.refund?"成功":3===e.refund?"完成":"申请中"))]),n("div",{staticClass:"price"},[t._v("￥"+t._s(e.fee))])])])}))],1)},i=[],a=(n("e7e5"),n("d399")),o=(n("ac4d"),n("8a81"),n("ac6a"),n("a322")),c=(n("7f7f"),n("5548"),n("1bd8"),n("fe7e")),s=n("023d"),u=n("db78"),f=Object(c["a"])({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.b()},[t._t("default"),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],class:t.b("loading")},[t._t("loading",[n("loading"),n("span",{class:t.b("loading-text")},[t._v(t._s(t.loadingText||t.$t("loadingTip")))])])],2)],2)},name:"list",model:{prop:"loading"},props:{loading:Boolean,finished:Boolean,immediateCheck:{type:Boolean,default:!0},offset:{type:Number,default:300},loadingText:String},mounted:function(){this.scroller=s["a"].getScrollEventTarget(this.$el),this.handler(!0),this.immediateCheck&&this.$nextTick(this.check)},destroyed:function(){this.handler(!1)},activated:function(){this.handler(!0)},deactivated:function(){this.handler(!1)},watch:{loading:function(){this.$nextTick(this.check)},finished:function(){this.$nextTick(this.check)}},methods:{check:function(){if(!this.loading&&!this.finished){var t=this.$el,e=this.scroller,n=s["a"].getVisibleHeight(e);if(n&&"none"!==s["a"].getComputedStyle(t).display&&null!==t.offsetParent){var r=s["a"].getScrollTop(e),i=r+n,a=!1;if(t===e)a=e.scrollHeight-i<this.offset;else{var o=s["a"].getElementTop(t)-s["a"].getElementTop(e)+s["a"].getVisibleHeight(t);a=o-n<this.offset}a&&(this.$emit("input",!0),this.$emit("load"))}}},handler:function(t){this.binded!==t&&(this.binded=t,(t?u["b"]:u["a"])(this.scroller,"scroll",this.check))}}}),d=n("a49b"),l=n("1f75"),h=n("460a"),p={components:Object(o["a"])({},f.name,f),data:function(){return{loading:!1,finished:!0,orders:[],data:{},driverId:0,page:0}},computed:{},methods:{initOrder:function(){var t=this,e={openId:this.openid};Object(l["b"])(d["i"],e,function(e){t.orders=e.data,t.driverId=e.driverId,t.finished=!1})},onLoad:function(){var t=this;this.page++;var e={driverId:this.driverId};Object(l["b"])(d["a"],e,function(e){var n=e.data.length;if(0===n)t.finished=!0;else{var r=!0,i=!1,a=void 0;try{for(var o,c=e.data[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var s=o.value;t.orders.push(s)}}catch(t){i=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}}t.loading=!1})}},created:function(){var t=this,e=h["a"].fetch();if(e&&e.hasOwnProperty("openid"))if(this.data=e,e.hasOwnProperty("id"))this.initOrder();else{var n={openId:e.openid};Object(l["b"])(d["f"],n,function(n){var r=n;r.openid=e.openid,h["a"].save(r),t.data=r,t.initOrder()},function(){return t.$router.push({name:"bind",query:{from:"order"}})})}else{var r=this.$route.query.code;if(window.console.log("code",r),r){var i={code:r};Object(l["a"])(d["g"],i,function(n){t.data.openid=n.openid,h["a"].save(t.data),Object(l["b"])(d["f"],i,function(n){var r=n;r.openid=e.openid,h["a"].save(r),t.initOrder()},function(){return t.$router.push({name:"bind",query:{from:"order"}})})})}else a["a"].fail("无法获得授权信息，请退出重试")}}},v=p,b=(n("74c9"),n("2877")),g=Object(b["a"])(v,r,i,!1,null,null,null);g.options.__file="index.vue";e["default"]=g.exports},"460a":function(t,e,n){"use strict";var r="driver_mobile_user_info_key";e["a"]={fetch:function(){var t=window.JSON.parse(window.localStorage.getItem(r)||"{}");return window.console.log("fetch",t),t},save:function(t){window.localStorage.setItem(r,window.JSON.stringify(t))}}},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"67ab":function(t,e,n){var r=n("ca5a")("meta"),i=n("d3f4"),a=n("69a8"),o=n("86cc").f,c=0,s=Object.isExtensible||function(){return!0},u=!n("79e5")(function(){return s(Object.preventExtensions({}))}),f=function(t){o(t,r,{value:{i:"O"+ ++c,w:{}}})},d=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,r)){if(!s(t))return"F";if(!e)return"E";f(t)}return t[r].i},l=function(t,e){if(!a(t,r)){if(!s(t))return!0;if(!e)return!1;f(t)}return t[r].w},h=function(t){return u&&p.NEED&&s(t)&&!a(t,r)&&f(t),t},p=t.exports={KEY:r,NEED:!1,fastKey:d,getWeak:l,onFreeze:h}},"74c9":function(t,e,n){"use strict";var r=n("0609"),i=n.n(r);i.a},"7bbc":function(t,e,n){var r=n("6821"),i=n("9093").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(t){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?c(t):i(r(t))}},"8a81":function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),a=n("9e1e"),o=n("5ca1"),c=n("2aba"),s=n("67ab").KEY,u=n("79e5"),f=n("5537"),d=n("7f20"),l=n("ca5a"),h=n("2b4c"),p=n("37c8"),v=n("3a72"),b=n("d4c0"),g=n("1169"),m=n("cb7c"),y=n("d3f4"),w=n("6821"),O=n("6a99"),S=n("4630"),_=n("2aeb"),j=n("7bbc"),k=n("11e9"),E=n("86cc"),x=n("0d58"),P=k.f,C=E.f,I=j.f,N=r.Symbol,T=r.JSON,$=T&&T.stringify,J="prototype",F=h("_hidden"),A=h("toPrimitive"),D={}.propertyIsEnumerable,B=f("symbol-registry"),W=f("symbols"),q=f("op-symbols"),H=Object[J],K="function"==typeof N,L=r.QObject,M=!L||!L[J]||!L[J].findChild,V=a&&u(function(){return 7!=_(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=P(H,e);r&&delete H[e],C(t,e,n),r&&t!==H&&C(H,e,r)}:C,Y=function(t){var e=W[t]=_(N[J]);return e._k=t,e},z=K&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},G=function(t,e,n){return t===H&&G(q,e,n),m(t),e=O(e,!0),m(n),i(W,e)?(n.enumerable?(i(t,F)&&t[F][e]&&(t[F][e]=!1),n=_(n,{enumerable:S(0,!1)})):(i(t,F)||C(t,F,S(1,{})),t[F][e]=!0),V(t,e,n)):C(t,e,n)},Q=function(t,e){m(t);var n,r=b(e=w(e)),i=0,a=r.length;while(a>i)G(t,n=r[i++],e[n]);return t},R=function(t,e){return void 0===e?_(t):Q(_(t),e)},U=function(t){var e=D.call(this,t=O(t,!0));return!(this===H&&i(W,t)&&!i(q,t))&&(!(e||!i(this,t)||!i(W,t)||i(this,F)&&this[F][t])||e)},X=function(t,e){if(t=w(t),e=O(e,!0),t!==H||!i(W,e)||i(q,e)){var n=P(t,e);return!n||!i(W,e)||i(t,F)&&t[F][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=I(w(t)),r=[],a=0;while(n.length>a)i(W,e=n[a++])||e==F||e==s||r.push(e);return r},tt=function(t){var e,n=t===H,r=I(n?q:w(t)),a=[],o=0;while(r.length>o)!i(W,e=r[o++])||n&&!i(H,e)||a.push(W[e]);return a};K||(N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var t=l(arguments.length>0?arguments[0]:void 0),e=function(n){this===H&&e.call(q,n),i(this,F)&&i(this[F],t)&&(this[F][t]=!1),V(this,t,S(1,n))};return a&&M&&V(H,t,{configurable:!0,set:e}),Y(t)},c(N[J],"toString",function(){return this._k}),k.f=X,E.f=G,n("9093").f=j.f=Z,n("52a7").f=U,n("2621").f=tt,a&&!n("2d00")&&c(H,"propertyIsEnumerable",U,!0),p.f=function(t){return Y(h(t))}),o(o.G+o.W+o.F*!K,{Symbol:N});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)h(et[nt++]);for(var rt=x(h.store),it=0;rt.length>it;)v(rt[it++]);o(o.S+o.F*!K,"Symbol",{for:function(t){return i(B,t+="")?B[t]:B[t]=N(t)},keyFor:function(t){if(!z(t))throw TypeError(t+" is not a symbol!");for(var e in B)if(B[e]===t)return e},useSetter:function(){M=!0},useSimple:function(){M=!1}}),o(o.S+o.F*!K,"Object",{create:R,defineProperty:G,defineProperties:Q,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),T&&o(o.S+o.F*(!K||u(function(){var t=N();return"[null]"!=$([t])||"{}"!=$({a:t})||"{}"!=$(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e=r[1],(y(e)||void 0!==t)&&!z(t))return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!z(e))return e}),r[1]=e,$.apply(T,r)}}),N[J][A]||n("32e9")(N[J],A,N[J].valueOf),d(N,"Symbol"),d(Math,"Math",!0),d(r.JSON,"JSON",!0)},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},a322:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",function(){return r})},a49b:function(t,e,n){"use strict";n.d(e,"g",function(){return i}),n.d(e,"f",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"e",function(){return c}),n.d(e,"h",function(){return s}),n.d(e,"d",function(){return u}),n.d(e,"k",function(){return f}),n.d(e,"i",function(){return d}),n.d(e,"a",function(){return l}),n.d(e,"j",function(){return h}),n.d(e,"l",function(){return p}),n.d(e,"b",function(){return v});var r="/api/",i=r+"returnOpenId",a=r+"driverVerification",o=r+"getCheckCode",c=r+"Authentication",s=r+"getWithdraw",u=r+"withdrawMoneyExecute",f=r+"repairExecute",d=r+"getOrderList",l=r+"addOrderData",h=r+"perfect",p=r+"getSignPackage",v=r+"macBindExecute"},ac4d:function(t,e,n){n("3a72")("asyncIterator")},d4c0:function(t,e,n){var r=n("0d58"),i=n("2621"),a=n("52a7");t.exports=function(t){var e=r(t),n=i.f;if(n){var o,c=n(t),s=a.f,u=0;while(c.length>u)s.call(t,o=c[u++])&&e.push(o)}return e}}}]);
//# sourceMappingURL=chunk-7e1fa940.98520b73.js.map