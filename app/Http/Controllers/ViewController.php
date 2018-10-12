<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Ixudra\Curl\Facades\Curl;

class ViewController extends Controller
{
    //普通司机注册
    static public $url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9e40a29d39faba87&redirect_uri=";
    static public $parameter = "&response_type=code&scope=snsapi_base&state=123#wechat_redirect";

    public function register()
    {
        $web = json_encode(env('TEST_WECHAT_WEB_ME') . "api/register");
        $response = Curl::to(self::$url . $web . self::$parameter)
            ->get();
        dd($response);
        //return view('welcome');
    }

    //司机提现
    public function withdrawMoney()
    {
        return view('welcome');
    }

    //司机订单
    public function getOrder()
    {
        return view('welcome');
    }

    //司机绑定
    public function bind()
    {
        return view('welcome');
    }

    //设备报修
    public function macRepair()
    {
        return view('welcome');
    }
}
