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

Route::any('valid', 'TokenController@valid'); //验证服务器token
Route::any('getToken', 'TokenController@getToken'); //获取token验证
Route::any('index', 'WeChatController@index'); //首页


/*  button按钮  */
Route::any('createButton', 'ButtonController@createButton'); //创建button
Route::any('deleteButton', 'ButtonController@deleteButton'); //删除Button
Route::any('getButton', 'ButtonController@getButton'); //获取button


/*消息*/
Route::any('responseMsg', 'MessageController@responseMsg'); //被动回复消息


