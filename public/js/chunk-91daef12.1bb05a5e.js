(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91daef12"],{"18a0":function(e,n){!function(n,t){e.exports=t(n)}(window,function(e,n){function t(n,t,i){e.WeixinJSBridge?WeixinJSBridge.invoke(n,o(t),function(e){c(n,e,i)}):l(n,i)}function i(n,t,i){e.WeixinJSBridge?WeixinJSBridge.on(n,function(e){i&&i.trigger&&i.trigger(e),c(n,e,t)}):l(n,i||t)}function o(e){return e=e||{},e.appId=M.appId,e.verifyAppId=M.appId,e.verifySignType="sha1",e.verifyTimestamp=M.timestamp+"",e.verifyNonceStr=M.nonceStr,e.verifySignature=M.signature,e}function a(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function c(e,n,t){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var i=n.errMsg;i||(i=n.err_msg,delete n.err_msg,i=s(e,i),n.errMsg=i),(t=t||{})._complete&&(t._complete(n),delete t._complete),i=n.errMsg||"",M.debug&&!t.isInnerInvoke&&alert(JSON.stringify(n));var o=i.indexOf(":");switch(i.substring(o+1)){case"ok":t.success&&t.success(n);break;case"cancel":t.cancel&&t.cancel(n);break;default:t.fail&&t.fail(n)}t.complete&&t.complete(n)}function s(e,n){var t=e,i=v[t];i&&(t=i);var o="ok";if(n){var a=n.indexOf(":");"confirm"==(o=n.substring(a+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==t&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return t+":"+o}function d(e){if(e){for(var n=0,t=e.length;n<t;++n){var i=e[n],o=h[i];o&&(e[n]=o)}return e}}function l(e,n){if(!(!M.debug||n&&n.isInnerInvoke)){var t=v[e];t&&(e=t),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function u(e){if(!(_||I||M.debug||C<"6.0.2"||P.systemType<0)){var n=new Image;P.appId=M.appId,P.initTime=T.initEndTime-T.initStartTime,P.preVerifyTime=T.preVerifyEndTime-T.preVerifyStartTime,L.getNetworkType({isInnerInvoke:!0,success:function(e){P.networkType=e.networkType;var t="https://open.weixin.qq.com/sdk/report?v="+P.version+"&o="+P.isPreVerifyOk+"&s="+P.systemType+"&c="+P.clientVersion+"&a="+P.appId+"&n="+P.networkType+"&i="+P.initTime+"&p="+P.preVerifyTime+"&u="+P.url;n.src=t}})}}function p(){return(new Date).getTime()}function f(n){k&&(e.WeixinJSBridge?n():S.addEventListener&&S.addEventListener("WeixinJSBridgeReady",n,!1))}function g(){L.invoke||(L.invoke=function(n,t,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,o(t),i)},L.on=function(n,t){e.WeixinJSBridge&&WeixinJSBridge.on(n,t)})}function m(e){if("string"==typeof e&&e.length>0){var n=e.split("?")[0],t=e.split("?")[1];return n+=".html",void 0!==t?n+"?"+t:n}}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},v=function(){var e={};for(var n in h)e[h[n]]=n;return e}(),S=e.document,w=S.title,b=navigator.userAgent.toLowerCase(),y=navigator.platform.toLowerCase(),_=!(!y.match("mac")&&!y.match("win")),I=-1!=b.indexOf("wxdebugger"),k=-1!=b.indexOf("micromessenger"),x=-1!=b.indexOf("android"),A=-1!=b.indexOf("iphone")||-1!=b.indexOf("ipad"),C=function(){var e=b.match(/micromessenger\/(\d+\.\d+\.\d+)/)||b.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),T={initStartTime:p(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},P={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:A?1:x?2:-1,clientVersion:C,url:encodeURIComponent(location.href)},M={},O={_completes:[]},B={state:0,data:{}};f(function(){T.initEndTime=p()});var E=!1,V=[],L={config:function(e){M=e,l("config",e);var n=!1!==M.check;f(function(){if(n)t(h.config,{verifyJsApiList:d(M.jsApiList)},function(){O._complete=function(e){T.preVerifyEndTime=p(),B.state=1,B.data=e},O.success=function(e){P.isPreVerifyOk=0},O.fail=function(e){O._fail?O._fail(e):B.state=-1};var e=O._completes;return e.push(function(){u()}),O.complete=function(n){for(var t=0,i=e.length;t<i;++t)e[t]();O._completes=[]},O}()),T.preVerifyStartTime=p();else{B.state=1;for(var e=O._completes,i=0,o=e.length;i<o;++i)e[i]();O._completes=[]}}),g()},ready:function(e){0!=B.state?e():(O._completes.push(e),!k&&M.debug&&e())},error:function(e){C<"6.0.2"||(-1==B.state?e(B.data):O._fail=e)},checkJsApi:function(e){var n=function(e){var n=e.checkResult;for(var t in n){var i=v[t];i&&(n[i]=n[t],delete n[t])}return e};t("checkJsApi",{jsApiList:d(e.jsApiList)},(e._complete=function(e){if(x){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=n(e)},e))},onMenuShareTimeline:function(e){i(h.onMenuShareTimeline,{complete:function(){t("shareTimeline",{title:e.title||w,desc:e.title||w,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){i(h.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?t("sendAppMessage",{title:e.title||w,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):t("sendAppMessage",{title:e.title||w,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){i(h.onMenuShareQQ,{complete:function(){t("shareQQ",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){i(h.onMenuShareWeibo,{complete:function(){t("shareWeiboApp",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){i(h.onMenuShareQZone,{complete:function(){t("shareQZone",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){t("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){t("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){t("startRecord",{},e)},stopRecord:function(e){t("stopRecord",{},e)},onVoiceRecordEnd:function(e){i("onVoiceRecordEnd",e)},playVoice:function(e){t("playVoice",{localId:e.localId},e)},pauseVoice:function(e){t("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){t("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){i("onVoicePlayEnd",e)},uploadVoice:function(e){t("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){t("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){t("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){t("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(x){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){t(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){t("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){t("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===E?(E=!0,t("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(E=!1,V.length>0){var n=V.shift();wx.getLocalImgData(n)}},e))):V.push(e)},getNetworkType:function(e){var n=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var t=e.subtype;if(delete e.subtype,t)e.networkType=t;else{var i=n.indexOf(":"),o=n.substring(i+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e};t("getNetworkType",{},(e._complete=function(e){e=n(e)},e))},openLocation:function(e){t("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},t(h.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){t("hideOptionMenu",{},e)},showOptionMenu:function(e){t("showOptionMenu",{},e)},closeWindow:function(e){t("closeWindow",{},e=e||{})},hideMenuItems:function(e){t("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){t("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){t("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){t("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){t("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(A){var n=e.resultStr;if(n){var t=JSON.parse(n);e.resultStr=t&&t.scan_code&&t.scan_code.scan_result}}},e))},openAddress:function(e){t(h.openAddress,{},(e._complete=function(e){e=r(e)},e))},openProductSpecificView:function(e){t(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,i=[],o=0,a=n.length;o<a;++o){var r=n[o],c={card_id:r.cardId,card_ext:r.cardExt};i.push(c)}t(h.addCard,{card_list:i},(e._complete=function(e){var n=e.card_list;if(n){for(var t=0,i=(n=JSON.parse(n)).length;t<i;++t){var o=n[t];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))},chooseCard:function(e){t("chooseCard",{app_id:M.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var n=e.cardList,i=[],o=0,a=n.length;o<a;++o){var r=n[o],c={card_id:r.cardId,code:r.code};i.push(c)}t(h.openCard,{card_list:i},e)},consumeAndShareCard:function(e){t(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){t(h.chooseWXPay,a(e),e)},openEnterpriseRedPacket:function(e){t(h.openEnterpriseRedPacket,a(e),e)},startSearchBeacons:function(e){t(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){t(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){i(h.onSearchBeacons,e)},openEnterpriseChat:function(e){t("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){t("launchMiniProgram",{targetAppId:e.targetAppId,path:m(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},f(function(){t("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){f(function(){t("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){f(function(){t("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){f(function(){t("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){f(function(){t("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){f(function(){t("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(n){f(function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},R=1,J={};return S.addEventListener("error",function(e){if(!x){var n=e.target,t=n.tagName,i=n.src;if(("IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=R++,n["wx-id"]=o),J[o])return;J[o]=!0,wx.ready(function(){wx.getLocalImgData({localId:i,success:function(e){n.src=e.localData}})})}}},!0),S.addEventListener("load",function(e){if(!x){var n=e.target,t=n.tagName;if(n.src,"IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var i=n["wx-id"];i&&(J[i]=!1)}}},!0),n&&(e.wx=e.jWeixin=L),L}})},"1f75":function(e,n,t){"use strict";t.d(n,"b",function(){return a}),t.d(n,"a",function(){return r});t("e7e5");var i=t("d399"),o=t("2b0e"),a=function(e,n,t,a){o["a"].http.post(e,n,{emulateJSON:!1}).then(function(e){window.console.log("http res",e),200===e.status&&(e.data.hasOwnProperty("error_code")?0!==e.data.error_code&&"0"!==e.data.error_code?(i["a"].fail(e.data.msg),a&&a(e.data.msg)):t&&t(e.data.data):t&&t(e.data))},function(){i["a"].fail("网络请求出错"),a&&a("网络请求出错")})},r=function(e,n,t,a){o["a"].http.get(e,{params:n}).then(function(e){window.console.log("http res",e),200===e.status&&(e.data.hasOwnProperty("error_code")?0!==e.data.error_code&&"0"!==e.data.error_code?(i["a"].fail(e.data.msg),a&&a(e.data.msg)):t&&t(e.data.data):(window.console.log("has not error code"),t&&t(e.data)))},function(){i["a"].fail("网络请求出错"),a&&a("网络请求出错")})}},"214f":function(e,n,t){"use strict";var i=t("32e9"),o=t("2aba"),a=t("79e5"),r=t("be13"),c=t("2b4c");e.exports=function(e,n,t){var s=c(e),d=t(r,s,""[e]),l=d[0],u=d[1];a(function(){var n={};return n[s]=function(){return 7},7!=""[e](n)})&&(o(String.prototype,e,l),i(RegExp.prototype,s,2==n?function(e,n){return u.call(e,this,n)}:function(e){return u.call(e,this)}))}},"28a5":function(e,n,t){t("214f")("split",2,function(e,n,i){"use strict";var o=t("aae3"),a=i,r=[].push,c="split",s="length",d="lastIndex";if("c"=="abbc"[c](/(b)*/)[1]||4!="test"[c](/(?:)/,-1)[s]||2!="ab"[c](/(?:ab)*/)[s]||4!="."[c](/(.?)(.?)/)[s]||"."[c](/()()/)[s]>1||""[c](/.?/)[s]){var l=void 0===/()??/.exec("")[1];i=function(e,n){var t=String(this);if(void 0===e&&0===n)return[];if(!o(e))return a.call(t,e,n);var i,c,u,p,f,g=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,v=void 0===n?4294967295:n>>>0,S=new RegExp(e.source,m+"g");l||(i=new RegExp("^"+S.source+"$(?!\\s)",m));while(c=S.exec(t)){if(u=c.index+c[0][s],u>h&&(g.push(t.slice(h,c.index)),!l&&c[s]>1&&c[0].replace(i,function(){for(f=1;f<arguments[s]-2;f++)void 0===arguments[f]&&(c[f]=void 0)}),c[s]>1&&c.index<t[s]&&r.apply(g,c.slice(1)),p=c[0][s],h=u,g[s]>=v))break;S[d]===c.index&&S[d]++}return h===t[s]?!p&&S.test("")||g.push(""):g.push(t.slice(h)),g[s]>v?g.slice(0,v):g}}else"0"[c](void 0,0)[s]&&(i=function(e,n){return void 0===e&&0===n?[]:a.call(this,e,n)});return[function(t,o){var a=e(this),r=void 0==t?void 0:t[n];return void 0!==r?r.call(t,a,o):i.call(String(a),t,o)},i]})},"386d":function(e,n,t){t("214f")("search",1,function(e,n,t){return[function(t){"use strict";var i=e(this),o=void 0==t?void 0:t[n];return void 0!==o?o.call(t,i):new RegExp(t)[n](String(i))},t]})},"460a":function(e,n,t){"use strict";t("386d"),t("4917");var i="driver_mobile_user_info_key";n["a"]={urlParam:function(e){var n="(^|&)".concat(e,"=([^&]*)(&|$)"),t=window.location.search.substr(1).match(n);return null!=t?decodeURI(t[2]):null},fetch:function(){var e=window.JSON.parse(window.localStorage.getItem(i)||"{}");return window.console.log("fetch",e),e},save:function(e){window.localStorage.setItem(i,window.JSON.stringify(e))}}},4917:function(e,n,t){t("214f")("match",1,function(e,n,t){return[function(t){"use strict";var i=e(this),o=void 0==t?void 0:t[n];return void 0!==o?o.call(t,i):new RegExp(t)[n](String(i))},t]})},"539e":function(e,n,t){e.exports=t.p+"img/tip2.ff814599.png"},"66b9":function(e,n,t){"use strict";t("5548")},"73ef":function(e,n,t){},"9bbe":function(e,n,t){},a322:function(e,n,t){"use strict";function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",function(){return i})},a49b:function(e,n,t){"use strict";t.d(n,"g",function(){return o}),t.d(n,"f",function(){return a}),t.d(n,"c",function(){return r}),t.d(n,"e",function(){return c}),t.d(n,"h",function(){return s}),t.d(n,"d",function(){return d}),t.d(n,"k",function(){return l}),t.d(n,"i",function(){return u}),t.d(n,"a",function(){return p}),t.d(n,"j",function(){return f}),t.d(n,"l",function(){return g}),t.d(n,"b",function(){return m});var i="/api/",o=i+"returnOpenId",a=i+"driverVerification",r=i+"getCheckCode",c=i+"Authentication",s=i+"getWithdraw",d=i+"withdrawMoneyExecute",l=i+"repairExecute",u=i+"getOrderList",p=i+"addOrderData",f=i+"perfect",g=i+"getSignPackage",m=i+"macBindExecute"},aae3:function(e,n,t){var i=t("d3f4"),o=t("2d95"),a=t("2b4c")("match");e.exports=function(e){var n;return i(e)&&(void 0!==(n=e[a])?!!n:"RegExp"==o(e))}},b2d4:function(e,n,t){"use strict";var i=t("9bbe"),o=t.n(i);o.a},b650:function(e,n,t){"use strict";var i=t("fe7e");n["a"]=Object(i["a"])({render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t(e.tag,{tag:"component",class:e.b([e.type,e.size,{block:e.block,plain:e.plain,round:e.round,square:e.square,loading:e.loading,disabled:e.disabled,unclickable:e.disabled||e.loading,"bottom-action":e.bottomAction}]),attrs:{type:e.nativeType,disabled:e.disabled},on:{click:e.onClick}},[e.loading?t("loading",{attrs:{size:"20px",color:"default"===e.type?void 0:""}}):t("span",{class:e.b("text")},[e._t("default",[e._v(e._s(e.text))])],2)],1)},name:"button",props:{text:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,disabled:Boolean,nativeType:String,bottomAction:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"}},methods:{onClick:function(e){this.loading||this.disabled||this.$emit("click",e)}}})},c5d4:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAAlhJREFUOBGVlDtoU2EUx3PvFTU16OIgXXQWHDSLziGZAlYwKkVQC3mYQIZotCJiKCKpCkIkJY9CFTvoIg7FoJOTi5OCWURcJLplSNQY8/B30vuVLzbPD849z///nJz73Tgcm8fIZDJ7bXsqZeTz+X2GYawjR7rdbjoUCuWmYTABHQbsB3QQvQLhlakIarXaR0g2bJBhmuaDQqFwY1ISM5lM/qxWq/OQvFQgJrnLJCnlj9KGSgKYAbiGnFExdDoYDI6cZotAQLyJXU6ncxXzvPhymOxhpVK5mkqlOpuR/qelu6VSqe33+2Ufs0xyTHLoEy6Xaz/Er8vlclev7+X/D4gfCAQsn8/3CPOyll/tdDrRcDj8V4s5+iZQCenkdrtLdJY7ctyOy0SHvF7vK5lU1fbtQAV1zStNQ3Jdiz1nkgUm+SUxU0sMNLmZiyxySUuehXBdXf2xBAKE5DbqGtIUH4JTLPW+2BMRSGG73f7EJC2x5WDPit4hj3GnWCyepuYxMiO1gMvsISH22Am4ofPUPUX2CADwB36CPxKJfBZ/JEEul7vEx7VG3W4pBvxewFzvr+LLGUpA5zDgAjU7pRDwO+Qk4G/iqzOQAHCcTiuI2tHbRqMxx7v/roBKb7tILCxJchnp5ej6ptVqnYtGo1UF0nXfBHS+SfKeBt6gc2AYWIi2JqDzEv4tCdrnRbPZvBCLxeoqMEgb9pd3h+SiKmDsZ/V6fSGRSPxWsWHa9Hg8R3Uw9hPGvjgJWEhNy7J+0PEL0kHy3LBgPB7/I8mJTzabPcACe/9AE4Pswn/t8u/VMUuzjgAAAABJRU5ErkJggg=="},e4a8:function(e,n,t){e.exports=t.p+"img/tip1.30f0fd90.png"},ee9d:function(e,n,t){"use strict";t.r(n);var i,o=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"container"},[i("div",{staticClass:"main-in"},[i("div",{staticClass:"title-in"},[e._v("\n            请选择安装位置\n        ")]),e._m(0),i("div",{staticClass:"select",on:{click:e.openSelect}},[e._v("\n            "+e._s(e.text)+" "),i("img",{attrs:{src:t("c5d4")}})]),i("img",{staticClass:"tip1",attrs:{src:t("e4a8")}}),i("img",{staticClass:"tip2",attrs:{src:t("539e")}})]),i("van-button",{directives:[{name:"show",rawName:"v-show",value:e.position>0,expression:"position>0"}],staticClass:"confirm",staticStyle:{left:"0"},on:{click:e.scan}},[e._v("去设置")]),i("van-actionsheet",{attrs:{actions:e.actions,"cancel-text":"取消"},on:{select:e.onSelect,cancel:e.onCancel},model:{value:e.show,callback:function(n){e.show=n},expression:"show"}})],1)},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"info-in"},[e._v("\n            您可以通过"),t("p",{staticClass:"bold"},[e._v("【选择座椅】来为设备")]),t("br"),e._v("进行个性化设置\n        ")])}],r=(t("e7e5"),t("d399")),c=(t("28a5"),t("a322")),s=(t("66b9"),t("b650")),d=(t("7f7f"),t("5548"),t("f61d"),t("73ef"),t("fe7e")),l=t("6605"),u=Object(d["a"])({render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("transition",{attrs:{name:"van-slide-bottom"}},[e.shouldRender?t("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],class:e.b({withtitle:e.title})},[e.title?t("div",{staticClass:"van-hairline--top-bottom",class:e.b("header")},[t("div",{domProps:{textContent:e._s(e.title)}}),t("icon",{attrs:{name:"close"},on:{click:e.onCancel}})],1):t("ul",{staticClass:"van-hairline--bottom"},e._l(e.actions,function(n){return t("li",{class:[e.b("item",{disabled:n.disabled||n.loading}),n.className,"van-hairline--top"],on:{click:function(t){t.stopPropagation(),e.onSelect(n)}}},[n.loading?t("loading",{class:e.b("loading"),attrs:{size:"20px"}}):[t("span",{class:e.b("name")},[e._v(e._s(n.name))]),n.subname?t("span",{class:e.b("subname")},[e._v(e._s(n.subname))]):e._e()]],2)})),e.cancelText?t("div",{class:[e.b("cancel"),"van-hairline--top"],domProps:{textContent:e._s(e.cancelText)},on:{click:e.onCancel}}):t("div",{class:e.b("content")},[e._t("default")],2)]):e._e()])},name:"actionsheet",mixins:[l["a"]],props:{value:Boolean,title:String,cancelText:String,actions:{type:Array,default:function(){return[]}},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},methods:{onSelect:function(e){e.disabled||e.loading||(e.callback&&e.callback(e),this.$emit("select",e))},onCancel:function(){this.$emit("input",!1),this.$emit("cancel")}}}),p=(t("cadf"),t("551c"),t("097d"),t("18a0")),f=t.n(p),g=t("a49b"),m=t("1f75"),h=t("460a"),v={components:(i={},Object(c["a"])(i,u.name,u),Object(c["a"])(i,s["a"].name,s["a"]),i),data:function(){return{data:{},position:0,show:!1,text:"选择座椅",actions:[{name:"主驾",position:1},{name:"副驾",position:2},{name:"后排(左)",position:3},{name:"后排(右)",position:4}]}},methods:{openSelect:function(){this.show=!0},onSelect:function(e){this.show=!1,this.position=e.position;var n=h["a"].fetch();n.position=this.position,h["a"].save(n),this.text=e.name},onCancel:function(){this.show=!1},initConfig:function(){var e=location.href.split("#")[0];Object(m["a"])(g["l"],{url:e},function(e){f.a.config({debug:!1,appId:e.appId,timestamp:""+e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["checkJsApi","scanQRCode"]})})},scan:function(){f.a.checkJsApi({jsApiList:["scanQRCode"],error:function(){r["a"].fail("微信扫一扫初始化失败")}}),f.a.scanQRCode({needResult:1,scanType:["qrCode"],success:function(e){var n=h["a"].fetch(),t=e.resultStr,i=n.position,o=n.openid;window.console.log("scan result",e,t,i,o),Object(m["b"])(g["b"],{mac:t,position:i,openId:o},function(){r["a"].success("绑定成功")})}})}},created:function(){var e=this,n=h["a"].fetch();if(n&&n.hasOwnProperty("openid")){this.data=n;var t={openId:n.openid};Object(m["b"])(g["f"],t,function(n){var t=n;t.openid=e.data.openid,h["a"].save(t),e.data=t,e.initConfig()},function(){return e.$router.push({name:"bind"})})}else{var i=h["a"].urlParam("code");if(i){var o={code:i};Object(m["a"])(g["g"],o,function(n){e.data.openid=n.openId,h["a"].save(e.data);var t={openId:e.data.openid};Object(m["b"])(g["f"],t,function(n){var t=n;t.openid=e.data.openid,h["a"].save(t),e.initConfig()},function(){return e.$router.push({name:"bind"})})})}else r["a"].fail("无法获得授权信息，请退出重试")}}},S=v,w=(t("b2d4"),t("2877")),b=Object(w["a"])(S,o,a,!1,null,null,null);b.options.__file="index.vue";n["default"]=b.exports}}]);
//# sourceMappingURL=chunk-91daef12.1bb05a5e.js.map