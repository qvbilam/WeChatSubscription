<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Ixudra\Curl\Facades\Curl;
use Illuminate\Support\Facades\Redis;


class TokenController extends Controller
{
    private $token = 'QvBiLam';

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


    static public function checkSignature()
    {
        // you must define TOKEN by yourself
        if (!self::token) {
            throw new Exception('TOKEN is not defined!');
        }

        $signature = $_GET["signature"];
        $timestamp = $_GET["timestamp"];
        $nonce = $_GET["nonce"];

        $token = self::token;
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
                'appid' => 'wx9e40a29d39faba87',
                'secret' => '23bdd2ef6129a278a3af4e57992105b4',
            ])
            ->get();
        $response = json_decode($response, true);
        Redis::setex('wxgzh_token', 7200, $response['access_token']);
        return $response['access_token'];
    }


}
