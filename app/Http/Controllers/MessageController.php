<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\UserMsg;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class MessageController extends Controller
{
    //
    static public function responseMsg($postArray)
    {
        $fromUsername = $postArray['FromUserName'];
        $toUsername = $postArray['ToUserName'];
        $time = time();
        $key = trim($postArray['Content']);
        $textTpl = "<xml><ToUserName><![CDATA[%s]]></ToUserName><FromUserName><![CDATA[%s]]></FromUserName>
                            <CreateTime>%s</CreateTime><MsgType><![CDATA[%s]]></MsgType><Content><![CDATA[%s]]></Content></xml>";
        $msgType = "text";
        $contentStr = "openid是：" . $fromUsername;
        $data = [
            'ToUserName' => $toUsername,
            'FromUserName' => $fromUsername,
            'MsgType' => $msgType,
            'Content' => $key,
        ];
        self::saveTxtMsg($data);
        $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr);
        return $resultStr;
    }

    static public function saveTxtMsg($data)
    {
        UserMsg::create($data);
    }
}
