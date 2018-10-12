<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Ixudra\Curl\Facades\Curl;

class ViewController extends Controller
{
    //普通司机注册
    static public $url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9e40a29d39faba87&redirect_uri=";
    static public $parameter = "&response_type=code&scope=snsapi_base&state=123#wechat_redirect";

    public function register(Request $request)
    {
        $REDIRECT_URI = env('TEST_WECHAT_WEB_ME') . '/api/getOpenId';
        $scope = 'snsapi_base';
        $state = 'TEST';
        $to_url = self::$url . urlencode($REDIRECT_URI) . '&response_type=code&scope=' . $scope . '&state=' . $state . '#wechat_redirect';
        header("Location:" . $to_url);
    }

    public function getOpenId()
    {
        $APPID='wx9e40a29d39faba87';
        $SECRET='23bdd2ef6129a278a3af4e57992105b4';
        $state='TEST';
        $code='';
        if($_GET['state']==$state) {
            $code = $_GET['code'];
            $uinfo = file_get_contents("https://api.weixin.qq.com/sns/oauth2/access_token?appid=" . $APPID . "&secret=" . $SECRET . "&code={$code}&grant_type=authorization_code");
            $uinfo = (array)json_decode($uinfo);
            $openid = $uinfo['openid'];
            echo "OPENID IS: " . $openid;
        }
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
