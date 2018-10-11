<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\UserMsg;
use Illuminate\Support\Facades\Log;

class MessageController extends Controller
{
    //
    static public function responseMsg($postObj)
    {
        $fromUsername = $postObj->FromUserName;
        $toUsername = $postObj->ToUserName;
        $time = time();
        $key = trim($postObj->Content);
        $textTpl = "<xml><ToUserName><![CDATA[%s]]></ToUserName><FromUserName><![CDATA[%s]]></FromUserName>
                            <CreateTime>%s</CreateTime><MsgType><![CDATA[%s]]></MsgType><Content><![CDATA[%s]]></Content></xml>";
        $msgType = "text";
        $contentStr = "openid是：" . $fromUsername;
        $data = [
            'ToUserName' => $toUsername,
            'FromUserName' => '',
            'MsgType' => $msgType,
            'Content' => $contentStr,
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
