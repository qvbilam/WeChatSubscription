<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Ixudra\Curl\Facades\Curl;
use Illuminate\Support\Facades\Redis;
use App\Http\Controllers\TokenController;
use App\Http\Controllers\ButtonController;

class WeChatController extends Controller
{

    public function index()
    {
        $button = ButtonController::getButton();
        $token = Redis::get('wxgzh_token');
        if (!$token) {
            $token = TokenController::getToken();
        }
        $response = Curl::to('https://api.weixin.qq.com/cgi-bin/menu/create')
            ->withData(['access_token' => $token, 'body' => $button])
            ->get();
        return $response;
    }


}
