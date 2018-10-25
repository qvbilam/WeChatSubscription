<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Ixudra\Curl\Facades\Curl;
use Illuminate\Support\Facades\Redis;
use App\Http\Controllers\Controller;


class TokenController extends Controller
{
    //验证服务器token
    public function valid()
    {
        $echoStr = $_GET["echostr"];
        if ($this->checkSignature()) {
            echo $echoStr;
            exit;
        }
    }

    //获取微信token
    static public function getToken()
    {
        $token = Redis::exists('wxgzh_token');
        if (!$token) {
            return self::wechatGetToken();
        }
        return Redis::get('wxgzh_token');
    }

    //返回token接口
    public function returnToken()
    {
        $token = self::getToken();
        return Controller::success(0,'ok',['token'=>$token]);
    }


    static public function checkSignature()
    {
        // you must define TOKEN by yourself
        if (!env('wxgzh_token')) {
            throw new Exception('TOKEN is not defined!');
        }

        $signature = $_GET["signature"];
        $timestamp = $_GET["timestamp"];
        $nonce = $_GET["nonce"];

        $token = env('wxgzh_token');
        $tmpArr = array($token, $timestamp, $nonce);
        sort($tmpArr, SORT_STRING);
        $tmpStr = implode($tmpArr);
        $tmpStr = sha1($tmpStr);

        if ($tmpStr == $signature) {
            return true;
        } else {
            return false;
        }
    }

    static private function wechatGetToken()
    {
        $response = Curl::to('https://api.weixin.qq.com/cgi-bin/token')
            ->withData([
                'grant_type' => 'client_credential',
                'appid' => env('TEST_WECHAT_APPID'),
                'secret' => env('TEST_WECHAT_SECRET'),
            ])
            ->get();
        $response = json_decode($response, true);
        Redis::setex('wxgzh_token', 7200, $response['access_token']);
        return $response['access_token'];
    }


}
