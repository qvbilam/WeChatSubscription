<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Ixudra\Curl\Facades\Curl;
use Illuminate\Support\Facades\Redis;
use App\Http\Controllers\TokenController;

class WeChatUserController extends Controller
{
    //获取用户信息
    static public function getUserInfo($openId = 'o870O1NTR8rNpjzVYLnRXbkQyf-E')
    {
        $token = Redis::get('wxgzh_token');
        if (!$token) {
            $token = TokenController::getToken();
        }
        $response = Curl::to('https://api.weixin.qq.com/cgi-bin/user/info')
            ->withData([
                'access_token' => $token,
                'openid' => $openId,
                'lang' => 'zh_CN',
            ])
            ->post();
        return $response;
    }

    static public function getQrCode()
    {
        $token = Redis::get('wxgzh_token');
        if (!$token) {
            $token = TokenController::getToken();
        }
        $response = Curl::to('https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=' . $token)
            ->withData([
                'action_name' => 'QR_LIMIT_SCENE'
            ])
            ->asJson(true)
            ->post();
        $pic = Curl::to('https://mp.weixin.qq.com/cgi-bin/showqrcode?')
            ->withData([
                'ticket' => $response['ticket']
            ])
            ->get();
        echo 123;
        return $pic;
    }
}
