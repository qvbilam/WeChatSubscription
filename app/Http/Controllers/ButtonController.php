<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Ixudra\Curl\Facades\Curl;
use App\Http\Controllers\TokenController;

class ButtonController extends Controller
{
    //
    public function createButton()
    {
        $button = self::ButtonData();
        $token = Redis::get('wxgzh_token');
        if (!$token) {
            $token = TokenController::getToken();
        }
        $response = Curl::to('https://api.weixin.qq.com/cgi-bin/menu/create')
            ->withData(['access_token' => $token, 'body' => $button])
            ->post();
        return $response;

    }

    public function deleteButton()
    {
        $token = Redis::get('wxgzh_token');
        if (!$token) {
            $token = TokenController::getToken();
        }
        $response = Curl::to('https://api.weixin.qq.com/cgi-bin/menu/delete')
            ->withData(['access_token' => $token])
            ->get();
        return $response;
    }

    public function getButton()
    {
        $token = Redis::get('wxgzh_token');
        if (!$token) {
            $token = TokenController::getToken();
        }
        $response = Curl::to('https://api.weixin.qq.com/cgi-bin/menu/get')
            ->withData(['access_token' => $token])
            ->get();
        return $response;
    }


    static public function ButtonData()
    {
        return $data = ' {
                     "button":[
                     {    
                        "type":"miniprogram",
                        "name":"我要按么",
                        "url":"http://mp.weixin.qq.com",
                        "appid":"wxf67e5d6039607945",
                        "pagepath":"pages/index/index"
                        
                     },
                     {
                        "name":"加入我们",
                        "sub_button":[
                        {    
                            "type":"view",
                            "name":"司机注册",
                            "url":"http://wechattest.3igtech.com/#/bind"
                        },
                        {    
                            "type":"view",
                            "name":"服务号绑定",
                            "url":"http://wechattest.3igtech.com/#/bind"
                        },
                        {    
                            "type":"click",
                            "name":"联系我们",
                            "key":"call_us"
                        }]
                     },
                     {
                        "name":"个人中心",
                        "sub_button":[
                        {    
                            "type":"view",
                            "name":"司机提现",
                            "url":"http://wechattest.3igtech.com/#/draw"
                        },
                        {    
                            "type":"view",
                            "name":"订单管理",
                            "url":"http://wechattest.3igtech.com/#/order"
                        },
                        {    
                            "type":"view",
                            "name":"设备绑定",
                            "url":"http://wechattest.3igtech.com/#/bind"
                        },
                        {    
                            "type":"view",
                            "name":"设备报修",
                            "url":"http://wechattest.3igtech.com/#/device"
                        }]
                     }
                     ]
                 }';
    }
}
