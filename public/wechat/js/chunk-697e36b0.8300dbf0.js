(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-697e36b0"],{"1f75":function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o});n("e7e5");var i=n("d399"),a=n("2b0e"),r=function(t,e,n,r){a["a"].http.post(t,{params:e},{emulateJSON:!0}).then(function(t){200===t.status&&(t.data.hasOwnProperty("error_code")?0!==t.data.error_code?(i["a"].fail(t.data.msg),r&&r(t.data.msg)):n&&n(t.data.data):n&&n(t.data))},function(){i["a"].fail("网络请求出错"),r&&r("网络请求出错")})},o=function(t,e,n,r){a["a"].http.get(t,{params:e}).then(function(t){window.console.log("http res",t),200===t.status&&(t.data.hasOwnProperty("error_code")?0!==t.data.error_code?(i["a"].fail(t.data.msg),r&&r(t.data.msg)):n&&n(t.data.data):(window.console.log("has not error code"),n&&n(t.data)))},function(){i["a"].fail("网络请求出错"),r&&r("网络请求出错")})}},"22c3":function(t,e,n){},"460a":function(t,e,n){"use strict";var i="driver_mobile_user_info_key";e["a"]={fetch:function(){var t=window.JSON.parse(window.localStorage.getItem(i)||"{}");return window.console.log("fetch",t),t},save:function(t){window.localStorage.setItem(i,window.JSON.stringify(t))}}},"54cd":function(t,e,n){"use strict";var i=n("22c3"),a=n.n(i);a.a},"565f":function(t,e,n){"use strict";var i=n("1988"),a=n("fe7e"),r=n("a142");e["a"]=Object(a["a"])({render:function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i("cell",{class:e.b((t={error:e.error,disabled:e.$attrs.disabled,"min-height":"textarea"===e.type&&!e.autosize},t["label-"+e.labelAlign]=e.labelAlign,t)),attrs:{icon:e.leftIcon,title:e.label,center:e.center,border:e.border,"is-link":e.isLink,required:e.required}},[e._t("label",null,{slot:"title"}),i("div",{class:e.b("body")},["textarea"===e.type?i("textarea",e._g(e._b({ref:"input",class:e.b("control",e.inputAlign),attrs:{readonly:e.readonly},domProps:{value:e.value}},"textarea",e.$attrs,!1),e.listeners)):i("input",e._g(e._b({ref:"input",class:e.b("control",e.inputAlign),attrs:{type:e.type,readonly:e.readonly},domProps:{value:e.value}},"input",e.$attrs,!1),e.listeners)),e.showClear?i("icon",{class:e.b("clear"),attrs:{name:"clear"},on:{touchstart:function(t){return t.preventDefault(),e.onClear(t)}}}):e._e(),e.$slots.icon||e.icon?i("div",{class:e.b("icon"),on:{click:e.onClickIcon}},[e._t("icon",[i("icon",{attrs:{name:e.icon}})])],2):e._e(),e.$slots.button?i("div",{class:e.b("button")},[e._t("button")],2):e._e()],1),e.errorMessage?i("div",{class:e.b("error-message"),domProps:{textContent:e._s(e.errorMessage)}}):e._e()],2)},name:"field",inheritAttrs:!1,props:{value:[String,Number],icon:String,label:String,error:Boolean,center:Boolean,isLink:Boolean,leftIcon:String,readonly:Boolean,required:Boolean,clearable:Boolean,labelAlign:String,inputAlign:String,onIconClick:Function,autosize:[Boolean,Object],errorMessage:String,type:{type:String,default:"text"},border:{type:Boolean,default:!0}},data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&this.isDef(this.value)&&!this.readonly},listeners:function(){return Object(i["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur})}},methods:{blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){void 0===t&&(t=this.$refs.input);var e=t,n=e.value,i=this.$attrs.maxlength;return this.isDef(i)&&n.length>i&&(n=n.slice(0,i),t.value=n),n},onInput:function(t){this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t)},onClickIcon:function(){this.$emit("click-icon"),this.onIconClick&&this.onIconClick()},onClear:function(){this.$emit("input",""),this.$emit("clear")},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,n=-1===String(this.value).indexOf("."),i=e>=48&&e<=57||46===e&&n||45===e;i||t.preventDefault()}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(r["d"])(this.autosize)){var n=this.autosize,i=n.maxHeight,a=n.minHeight;i&&(e=Math.min(e,i)),a&&(e=Math.max(e,a))}e&&(t.style.height=e+"px")}}}})},"66b9":function(t,e,n){"use strict";n("5548")},"7c56":function(t,e,n){},9530:function(t,e,n){"use strict";n.r(e);var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"x-container"},[n("div",{staticClass:"position"},[n("p",{staticClass:"position-title"},[t._v("设备位置")]),n("van-row",{staticClass:"position-group"},[n("van-col",{attrs:{span:"8"}},[n("van-button",{class:t.s1Style,attrs:{square:"",type:"primary"},on:{click:function(e){t.onSeat(1)}}},[t._v("主驾")])],1),n("van-col",{attrs:{span:"8"}},[n("van-button",{class:t.s2Style,attrs:{square:"",type:"primary"},on:{click:function(e){t.onSeat(2)}}},[t._v("副驾")])],1),n("van-col",{attrs:{span:"8"}},[n("van-button",{class:t.s3Style,attrs:{square:"",type:"primary"},on:{click:function(e){t.onSeat(3)}}},[t._v("贵宾")])],1)],1)],1),n("div",{staticClass:"problem"},[n("p",{staticClass:"problem-title"},[t._v("设备问题")]),n("van-checkbox-group",{staticClass:"problem-group",model:{value:t.result,callback:function(e){t.result=e},expression:"result"}},t._l(t.problems,function(e){return n("van-checkbox",{key:e,staticClass:"problem-group-item",attrs:{name:e,shape:"square"}},[t._v("\n                "+t._s(e)+"\n            ")])}))],1),n("div",{staticClass:"info"},[n("van-field",{staticClass:"info-detail",attrs:{type:"textarea",placeholder:"其他问题描述"},model:{value:t.other,callback:function(e){t.other=e},expression:"other"}})],1),n("van-button",{staticClass:"ok"},[t._v("提交")])],1)},r=[],o=(n("e7e5"),n("d399")),s=n("a322"),c=(n("be7f"),n("565f")),l=(n("66b9"),n("b650")),u=(n("5548"),n("a196"),n("fe7e")),d=Object(u["a"])({render:function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i(e.tag,{tag:"component",class:e.b((t={},t[e.span]=e.span,t["offset-"+e.offset]=e.offset,t)),style:e.style},[e._t("default")],2)},name:"col",props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{gutter:function(){return this.$parent&&Number(this.$parent.gutter)||0},style:function(){var t=this.gutter/2+"px";return this.gutter?{paddingLeft:t,paddingRight:t}:{}}}}),f=(n("c873"),Object(u["a"])({render:function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i(e.tag,{tag:"component",class:e.b((t={flex:e.flex},t["align-"+e.align]=e.flex&&e.align,t["justify-"+e.justify]=e.flex&&e.justify,t)),style:e.style},[e._t("default")],2)},name:"row",props:{type:String,align:String,justify:String,tag:{type:String,default:"div"},gutter:{type:[Number,String],default:0}},computed:{flex:function(){return"flex"===this.type},style:function(){var t="-"+Number(this.gutter)/2+"px";return this.gutter?{marginLeft:t,marginRight:t}:{}}}})),p=(n("dae9"),{data:function(){return{parent:null}},methods:{findParent:function(t){var e=this.$parent;while(e){if(e.$options.name===t){this.parent=e;break}e=e.$parent}}}}),h=Object(u["a"])({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.b()},[n("div",{class:[t.b("icon",[t.shape,{disabled:t.isDisabled,checked:t.checked}])],on:{click:t.toggle}},[t._t("icon",[n("icon",{attrs:{name:"success"}})],{checked:t.checked})],2),t.$slots.default?n("span",{class:t.b("label",t.labelPosition),on:{click:function(e){t.toggle("label")}}},[t._t("default")],2):t._e()])},name:"checkbox",mixins:[p],props:{name:null,value:null,disabled:Boolean,labelPosition:String,labelDisabled:{type:Boolean,default:!1},shape:{type:String,default:"round"}},computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(t){var e=this.parent;if(e){var n=this.parent.value.slice();if(t){if(e.max&&n.length>=e.max)return;-1===n.indexOf(this.name)&&(n.push(this.name),e.$emit("input",n))}else{var i=n.indexOf(this.name);-1!==i&&(n.splice(i,1),e.$emit("input",n))}}else this.$emit("input",t)}},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled}},watch:{value:function(t){this.$emit("change",t)}},created:function(){this.findParent("van-checkbox-group")},methods:{toggle:function(t){this.isDisabled||"label"===t&&this.labelDisabled||(this.checked=!this.checked)}}}),b=(n("7f7f"),Object(u["a"])({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.b()},[t._t("default")],2)},name:"checkbox-group",props:{value:Array,disabled:Boolean,max:{default:0,type:Number}},watch:{value:function(t){this.$emit("change",t)}}})),g=(n("cadf"),n("551c"),n("097d"),n("a49b")),m=n("1f75"),v=n("460a"),y={components:(i={},Object(s["a"])(i,b.name,b),Object(s["a"])(i,h.name,h),Object(s["a"])(i,f.name,f),Object(s["a"])(i,d.name,d),Object(s["a"])(i,l["a"].name,l["a"]),Object(s["a"])(i,c["a"].name,c["a"]),i),data:function(){return{result:[],other:"",problems:["支付成功，设备不工作","小程序无法连接设备","设备工作时长不准确","设备长时间工作，无法停止"],selected:0,data:{}}},computed:{s1Style:function(){return 1===this.selected?"position-group-seat active":"position-group-seat"},s2Style:function(){return 2===this.selected?"position-group-seat active":"position-group-seat"},s3Style:function(){return 3===this.selected?"position-group-seat active":"position-group-seat"},totalPrice:function(){var t=this;return this.goods.reduce(function(e,n){return e+(-1!==t.checkedGoods.indexOf(n.id)?n.price:0)},0)}},methods:{onSeat:function(t){t===this.selected?this.selected=0:this.selected=t},onSubmit:function(){var t=this.result.join(","),e=this.other,n=this.data.openid,i={position:this.selected,radio_problem:t,text_problem:e,openid:n};Object(m["b"])(g["k"],i,function(){o["a"].success("提交成功")})}},created:function(){var t=this,e=v["a"].fetch();if(e&&e.hasOwnProperty("openid")){if(this.data=e,!e.hasOwnProperty("id")){var n={openId:e.openid};Object(m["b"])(g["f"],n,function(n){var i=n;i.openid=e.openid,v["a"].save(i),t.data=i},function(){return t.$router.push({name:"bind",query:{from:"device"}})})}}else{var i=this.$route.query.code;if(i){var a={code:i};Object(m["a"])(g["g"],a,function(n){t.data.openid=n.openid,v["a"].save(t.data),Object(m["b"])(g["f"],a,function(t){var n=t;n.openid=e.openid,v["a"].save(n)},function(){return t.$router.push({name:"bind",query:{from:"device"}})})})}else o["a"].fail("无法获得授权信息，请退出重试")}}},_=y,k=(n("54cd"),n("2877")),x=Object(k["a"])(_,a,r,!1,null,null,null);x.options.__file="index.vue";e["default"]=x.exports},a196:function(t,e,n){},a322:function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",function(){return i})},a49b:function(t,e,n){"use strict";n.d(e,"g",function(){return a}),n.d(e,"f",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"e",function(){return s}),n.d(e,"h",function(){return c}),n.d(e,"d",function(){return l}),n.d(e,"k",function(){return u}),n.d(e,"i",function(){return d}),n.d(e,"a",function(){return f}),n.d(e,"j",function(){return p}),n.d(e,"l",function(){return h}),n.d(e,"b",function(){return b});var i="/api/",a=i+"returnOpenId",r=i+"driverVerification",o=i+"getCheckCode",s=i+"Authentication",c=i+"getWithdraw",l=i+"withdrawMoneyExecute",u=i+"repairExecute",d=i+"getOrderList",f=i+"addOrderData",p=i+"perfect",h=i+"getSignPackage",b=i+"macBindExecute"},b650:function(t,e,n){"use strict";var i=n("fe7e");e["a"]=Object(i["a"])({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:t.b([t.type,t.size,{block:t.block,plain:t.plain,round:t.round,square:t.square,loading:t.loading,disabled:t.disabled,unclickable:t.disabled||t.loading,"bottom-action":t.bottomAction}]),attrs:{type:t.nativeType,disabled:t.disabled},on:{click:t.onClick}},[t.loading?n("loading",{attrs:{size:"20px",color:"default"===t.type?void 0:""}}):n("span",{class:t.b("text")},[t._t("default",[t._v(t._s(t.text))])],2)],1)},name:"button",props:{text:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,disabled:Boolean,nativeType:String,bottomAction:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"}},methods:{onClick:function(t){this.loading||this.disabled||this.$emit("click",t)}}})},be7f:function(t,e,n){"use strict";n("5548"),n("7c56")},c873:function(t,e,n){},dae9:function(t,e,n){}}]);
//# sourceMappingURL=chunk-697e36b0.8300dbf0.js.map