<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Ixudra\Curl\Facades\Curl;
use Illuminate\Support\Facades\Redis;
use App\Http\Controllers\TokenController;
use App\Http\Controllers\ButtonController;
use App\Http\Controllers\MessageController;
use Illuminate\Support\Facades\Log;
use App\Model\UserMsg;


class WeChatController extends Controller
{

    public function index()
    {
        //验证token
        $echoStr = @$_GET["echostr"];
        if ($echoStr) {
            if(TokenController::checkSignature()){
                echo $echoStr;
                exit;
            }
        }
        //获取微信传来的消息
        $postStr = file_get_contents('php://input');
        if ($postStr) {
            $postArray = json_decode(json_encode(simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA)), true);
            $MsgT = $postArray['MsgType'];
            Log::info('wxmsg : ' . json_encode($postArray));
            //如果用户发送的为文本消息
            if ($MsgT == "text") {
                echo MessageController::responseMsg($postArray);
                exit;
            }
        }
    }

    public function button()
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
