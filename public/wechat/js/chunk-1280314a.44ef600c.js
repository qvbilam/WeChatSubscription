(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1280314a"],{"18a0":function(e,n){!function(n,t){e.exports=t(n)}(window,function(e,n){function t(n,t,i){e.WeixinJSBridge?WeixinJSBridge.invoke(n,o(t),function(e){c(n,e,i)}):u(n,i)}function i(n,t,i){e.WeixinJSBridge?WeixinJSBridge.on(n,function(e){i&&i.trigger&&i.trigger(e),c(n,e,t)}):u(n,i||t)}function o(e){return e=e||{},e.appId=A.appId,e.verifyAppId=A.appId,e.verifySignType="sha1",e.verifyTimestamp=A.timestamp+"",e.verifyNonceStr=A.nonceStr,e.verifySignature=A.signature,e}function r(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function a(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function c(e,n,t){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var i=n.errMsg;i||(i=n.err_msg,delete n.err_msg,i=s(e,i),n.errMsg=i),(t=t||{})._complete&&(t._complete(n),delete t._complete),i=n.errMsg||"",A.debug&&!t.isInnerInvoke&&alert(JSON.stringify(n));var o=i.indexOf(":");switch(i.substring(o+1)){case"ok":t.success&&t.success(n);break;case"cancel":t.cancel&&t.cancel(n);break;default:t.fail&&t.fail(n)}t.complete&&t.complete(n)}function s(e,n){var t=e,i=v[t];i&&(t=i);var o="ok";if(n){var r=n.indexOf(":");"confirm"==(o=n.substring(r+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==t&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return t+":"+o}function d(e){if(e){for(var n=0,t=e.length;n<t;++n){var i=e[n],o=h[i];o&&(e[n]=o)}return e}}function u(e,n){if(!(!A.debug||n&&n.isInnerInvoke)){var t=v[e];t&&(e=t),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function l(e){if(!(_||k||A.debug||x<"6.0.2"||C.systemType<0)){var n=new Image;C.appId=A.appId,C.initTime=b.initEndTime-b.initStartTime,C.preVerifyTime=b.preVerifyEndTime-b.preVerifyStartTime,E.getNetworkType({isInnerInvoke:!0,success:function(e){C.networkType=e.networkType;var t="https://open.weixin.qq.com/sdk/report?v="+C.version+"&o="+C.isPreVerifyOk+"&s="+C.systemType+"&c="+C.clientVersion+"&a="+C.appId+"&n="+C.networkType+"&i="+C.initTime+"&p="+C.preVerifyTime+"&u="+C.url;n.src=t}})}}function p(){return(new Date).getTime()}function f(n){T&&(e.WeixinJSBridge?n():S.addEventListener&&S.addEventListener("WeixinJSBridgeReady",n,!1))}function g(){E.invoke||(E.invoke=function(n,t,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,o(t),i)},E.on=function(n,t){e.WeixinJSBridge&&WeixinJSBridge.on(n,t)})}function m(e){if("string"==typeof e&&e.length>0){var n=e.split("?")[0],t=e.split("?")[1];return n+=".html",void 0!==t?n+"?"+t:n}}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},v=function(){var e={};for(var n in h)e[h[n]]=n;return e}(),S=e.document,w=S.title,y=navigator.userAgent.toLowerCase(),I=navigator.platform.toLowerCase(),_=!(!I.match("mac")&&!I.match("win")),k=-1!=y.indexOf("wxdebugger"),T=-1!=y.indexOf("micromessenger"),M=-1!=y.indexOf("android"),P=-1!=y.indexOf("iphone")||-1!=y.indexOf("ipad"),x=function(){var e=y.match(/micromessenger\/(\d+\.\d+\.\d+)/)||y.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),b={initStartTime:p(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},C={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:P?1:M?2:-1,clientVersion:x,url:encodeURIComponent(location.href)},A={},O={_completes:[]},V={state:0,data:{}};f(function(){b.initEndTime=p()});var L=!1,B=[],E={config:function(e){A=e,u("config",e);var n=!1!==A.check;f(function(){if(n)t(h.config,{verifyJsApiList:d(A.jsApiList)},function(){O._complete=function(e){b.preVerifyEndTime=p(),V.state=1,V.data=e},O.success=function(e){C.isPreVerifyOk=0},O.fail=function(e){O._fail?O._fail(e):V.state=-1};var e=O._completes;return e.push(function(){l()}),O.complete=function(n){for(var t=0,i=e.length;t<i;++t)e[t]();O._completes=[]},O}()),b.preVerifyStartTime=p();else{V.state=1;for(var e=O._completes,i=0,o=e.length;i<o;++i)e[i]();O._completes=[]}}),g()},ready:function(e){0!=V.state?e():(O._completes.push(e),!T&&A.debug&&e())},error:function(e){x<"6.0.2"||(-1==V.state?e(V.data):O._fail=e)},checkJsApi:function(e){var n=function(e){var n=e.checkResult;for(var t in n){var i=v[t];i&&(n[i]=n[t],delete n[t])}return e};t("checkJsApi",{jsApiList:d(e.jsApiList)},(e._complete=function(e){if(M){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=n(e)},e))},onMenuShareTimeline:function(e){i(h.onMenuShareTimeline,{complete:function(){t("shareTimeline",{title:e.title||w,desc:e.title||w,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){i(h.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?t("sendAppMessage",{title:e.title||w,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):t("sendAppMessage",{title:e.title||w,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){i(h.onMenuShareQQ,{complete:function(){t("shareQQ",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){i(h.onMenuShareWeibo,{complete:function(){t("shareWeiboApp",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){i(h.onMenuShareQZone,{complete:function(){t("shareQZone",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){t("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){t("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){t("startRecord",{},e)},stopRecord:function(e){t("stopRecord",{},e)},onVoiceRecordEnd:function(e){i("onVoiceRecordEnd",e)},playVoice:function(e){t("playVoice",{localId:e.localId},e)},pauseVoice:function(e){t("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){t("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){i("onVoicePlayEnd",e)},uploadVoice:function(e){t("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){t("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){t("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){t("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(M){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){t(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){t("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){t("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===L?(L=!0,t("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(L=!1,B.length>0){var n=B.shift();wx.getLocalImgData(n)}},e))):B.push(e)},getNetworkType:function(e){var n=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var t=e.subtype;if(delete e.subtype,t)e.networkType=t;else{var i=n.indexOf(":"),o=n.substring(i+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e};t("getNetworkType",{},(e._complete=function(e){e=n(e)},e))},openLocation:function(e){t("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},t(h.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){t("hideOptionMenu",{},e)},showOptionMenu:function(e){t("showOptionMenu",{},e)},closeWindow:function(e){t("closeWindow",{},e=e||{})},hideMenuItems:function(e){t("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){t("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){t("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){t("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){t("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(P){var n=e.resultStr;if(n){var t=JSON.parse(n);e.resultStr=t&&t.scan_code&&t.scan_code.scan_result}}},e))},openAddress:function(e){t(h.openAddress,{},(e._complete=function(e){e=a(e)},e))},openProductSpecificView:function(e){t(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,i=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,card_ext:a.cardExt};i.push(c)}t(h.addCard,{card_list:i},(e._complete=function(e){var n=e.card_list;if(n){for(var t=0,i=(n=JSON.parse(n)).length;t<i;++t){var o=n[t];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))},chooseCard:function(e){t("chooseCard",{app_id:A.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var n=e.cardList,i=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,code:a.code};i.push(c)}t(h.openCard,{card_list:i},e)},consumeAndShareCard:function(e){t(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){t(h.chooseWXPay,r(e),e)},openEnterpriseRedPacket:function(e){t(h.openEnterpriseRedPacket,r(e),e)},startSearchBeacons:function(e){t(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){t(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){i(h.onSearchBeacons,e)},openEnterpriseChat:function(e){t("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){t("launchMiniProgram",{targetAppId:e.targetAppId,path:m(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},f(function(){t("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){f(function(){t("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){f(function(){t("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){f(function(){t("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){f(function(){t("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){f(function(){t("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(n){f(function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},N=1,R={};return S.addEventListener("error",function(e){if(!M){var n=e.target,t=n.tagName,i=n.src;if(("IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=N++,n["wx-id"]=o),R[o])return;R[o]=!0,wx.ready(function(){wx.getLocalImgData({localId:i,success:function(e){n.src=e.localData}})})}}},!0),S.addEventListener("load",function(e){if(!M){var n=e.target,t=n.tagName;if(n.src,"IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var i=n["wx-id"];i&&(R[i]=!1)}}},!0),n&&(e.wx=e.jWeixin=E),E}})},"1f75":function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"a",function(){return a});t("e7e5");var i=t("d399"),o=t("2b0e"),r=function(e,n,t,r){o["a"].http.post(e,{params:n},{emulateJSON:!0}).then(function(e){200===e.status&&(e.data.hasOwnProperty("error_code")?0!==e.data.error_code?(i["a"].fail(e.data.msg),r&&r(e.data.msg)):t&&t(e.data.data):t&&t(e.data))},function(){i["a"].fail("网络请求出错"),r&&r("网络请求出错")})},a=function(e,n,t,r){o["a"].http.get(e,{params:n}).then(function(e){window.console.log("http res",e),200===e.status&&(e.data.hasOwnProperty("error_code")?0!==e.data.error_code?(i["a"].fail(e.data.msg),r&&r(e.data.msg)):t&&t(e.data.data):(window.console.log("has not error code"),t&&t(e.data)))},function(){i["a"].fail("网络请求出错"),r&&r("网络请求出错")})}},"460a":function(e,n,t){"use strict";var i="driver_mobile_user_info_key";n["a"]={fetch:function(){var e=window.JSON.parse(window.localStorage.getItem(i)||"{}");return window.console.log("fetch",e),e},save:function(e){window.localStorage.setItem(i,window.JSON.stringify(e))}}},a49b:function(e,n,t){"use strict";t.d(n,"g",function(){return o}),t.d(n,"f",function(){return r}),t.d(n,"c",function(){return a}),t.d(n,"e",function(){return c}),t.d(n,"h",function(){return s}),t.d(n,"d",function(){return d}),t.d(n,"k",function(){return u}),t.d(n,"i",function(){return l}),t.d(n,"a",function(){return p}),t.d(n,"j",function(){return f}),t.d(n,"l",function(){return g}),t.d(n,"b",function(){return m});var i="/api/",o=i+"returnOpenId",r=i+"driverVerification",a=i+"getCheckCode",c=i+"Authentication",s=i+"getWithdraw",d=i+"withdrawMoneyExecute",u=i+"repairExecute",l=i+"getOrderList",p=i+"addOrderData",f=i+"perfect",g=i+"getSignPackage",m=i+"macBindExecute"},ee9d:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login_div"},[t("button",{attrs:{id:"wxsys",type:"primary"},on:{click:function(n){e.scan()}}},[e._v("扫一扫")])])},o=[],r=(t("e7e5"),t("d399")),a=t("18a0"),c=t.n(a),s=t("a49b"),d=t("1f75"),u=t("460a"),l={data:function(){return{data:{}}},methods:{initConfig:function(){Object(d["a"])(s["l"],{},function(e){c.a.config({debug:!0,appId:e.appId,timestamp:""+e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["checkJsApi","scanQRCode"]})})},scan:function(){c.a.checkJsApi({jsApiList:["scanQRCode"],error:function(){r["a"].fail("微信扫一扫初始化失败")}}),c.a.scanQRCode({needResult:1,scanType:["qrCode"],success:function(e){alert("?");var n=e.resultStr,t=3,i=this.data.openid;Object(d["b"])(s["b"],{mac:n,position:t,openid:i},function(){r["a"].success("绑定成功")})}})}},created:function(){var e=this,n=u["a"].fetch();if(this.initConfig(),n&&n.hasOwnProperty("openid"))if(this.data=n,n.hasOwnProperty("id"));else{var t={openId:n.openid};Object(d["b"])(s["f"],t,function(t){var i=t;i.openid=n.openid,u["a"].save(i),e.data=i},function(){return e.$router.push({name:"bind"})})}else{var i=this.$route.query.code;if(i){var o={code:i};Object(d["a"])(s["g"],o,function(t){e.data.openid=t.openid,u["a"].save(e.data),Object(d["b"])(s["f"],o,function(t){var i=t;i.openid=n.openid,u["a"].save(i),e.initConfig()},function(){return e.$router.push({name:"bind"})})})}else r["a"].fail("无法获得授权信息，请退出重试")}}},p=l,f=t("2877"),g=Object(f["a"])(p,i,o,!1,null,null,null);g.options.__file="index.vue";n["default"]=g.exports}}]);
//# sourceMappingURL=chunk-1280314a.44ef600c.js.map