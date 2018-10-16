<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::any('valid', 'TokenController@valid');                               //验证服务器token
Route::any('getToken', 'TokenController@getToken');                         //获取token验证
Route::any('index', 'WeChatController@index');                              //首页
Route::any('test', 'WeChatController@test');                                //测试
Route::any('testajax', 'WeChatController@testajax');                        //测试


/*  button按钮  */
Route::any('createButton', 'ButtonController@createButton');                //创建button
Route::any('deleteButton', 'ButtonController@deleteButton');                //删除Button
Route::any('getButton', 'ButtonController@getButton');                      //获取button

/*消息*/
Route::any('responseMsg', 'MessageController@responseMsg');                 //被动回复消息

/*获取用户信息*/
Route::any('getUserInfo', 'WeChatUserController@getUserInfo');              //获取单个用户信息
Route::any('getQrCode', 'WeChatUserController@getQrCode');                  //获取单个用户信息

/*页面*/
Route::any('register', 'ViewController@register');                          //司机注册 ---- 普通
Route::any('withdrawMoney', 'ViewController@withdrawMoney');                //司机提现
Route::any('getOrder', 'ViewController@getOrder');                          //获取司机订单
Route::any('bind', 'ViewController@bind');                                  //司机绑定
Route::any('macRepair', 'ViewController@macRepair');                        //设备报修

/*页面重定向*/
Route::any('getOpenId', 'ViewController@getOpenId');                        //获取openid
Route::any('registerList', 'ViewController@registerList');                  //司机注册 ---- 普通
Route::any('registerExecute', 'WeChatUserController@registerExecute');      //司机注册提交 ---- 普通
Route::any('withdrawMoneyList', 'ViewController@withdrawMoneyList');        //司机提现
Route::any('getOrderList', 'ViewController@getOrderList');                  //获取司机订单
Route::any('addOrderData', 'ViewController@addOrderData');                  //增加司机订单
Route::any('OrderData', 'ViewController@OrderData');                        //订单数据
Route::any('bindList', 'ViewController@bindList');                          //司机绑定
Route::any('bindExecute', 'WeChatUserController@bindExecute');              //司机绑定提交
Route::any('macRepairList', 'ViewController@macRepairList');                //设备报修

/*验证码*/
Route::any('getCheckCode', 'CheckCodeController@getCheckCode');             //获取验证码
Route::any('inspectCode', 'CheckCodeController@inspectCode');               //检查验证码


