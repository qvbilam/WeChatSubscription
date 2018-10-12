<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Ixudra\Curl\Facades\Curl;

class ViewController extends Controller
{
    //普通司机注册

    public function register()
    {
        $REDIRECT_URI = env('TEST_WECHAT_WEB_ME') . '/api/registerList';
        $scope = 'snsapi_base';
        $state = 'TEST';
        $to_url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" . env('TEST_WECHAT_APPID') .
            '&redirect_uri=' . urlencode($REDIRECT_URI) .
            '&response_type=code&scope=' . $scope .
            '&state=' . $state . '#wechat_redirect';
        header("Location:" . $to_url);
    }

    static public function getOpenId()
    {
        $APPID = env('TEST_WECHAT_APPID');
        $SECRET = env('TEST_WECHAT_SECRET');
        $state = 'TEST';
        $code = '';
        if ($_GET['state'] == $state) {
            $code = $_GET['code'];
            $uinfo = file_get_contents("https://api.weixin.qq.com/sns/oauth2/access_token?appid=" . $APPID .
                "&secret=" . $SECRET .
                "&code={$code}&grant_type=authorization_code");
            $uinfo = (array)json_decode($uinfo);
            $openid = $uinfo['openid'];
            return $openid;
        } else {
            echo "获取用户openId失败";
        }
    }

    public function registerList()
    {
        echo self::getOpenId() . '卧槽他妈能那都';
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
