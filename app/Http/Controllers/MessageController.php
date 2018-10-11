<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\UserMsg;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class MessageController extends Controller
{
    //回复消息
    static public function responseMsg($postArray)
    {
        $fromUsername = $postArray['FromUserName'];
        $toUsername = $postArray['ToUserName'];
        $time = time();
        $key = trim($postArray['Content']);
        $textTpl = "<xml><ToUserName><![CDATA[%s]]></ToUserName><FromUserName><![CDATA[%s]]></FromUserName>
                            <CreateTime>%s</CreateTime><MsgType><![CDATA[%s]]></MsgType><Content><![CDATA[%s]]></Content></xml>";
        $msgType = "text";
        //判断消息内容后返回对应的数据
        $contentStr = self::typeMsg($postArray);
//        $contentStr = "openid是：" . $fromUsername;
        //需要保存的信息
        $data = [
            'ToUserName' => $toUsername,
            'FromUserName' => $fromUsername,
            'MsgType' => $postArray['MsgType'],
            'Content' => $key,
        ];
        self::saveMsg($data);
        $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr);
        return $resultStr;
    }

    static public function textMsg($postArray)
    {
        return "openid是：" . $postArray['$fromUsername'];
    }

    static public function eventMsg($postArray)
    {
        return '欢迎关注';
    }

    //消息类型判断
    static public function typeMsg($postArray)
    {
        $type = $postArray['MsgType'];
        switch ($type){
            case $type=='text':
                return self::textMsg($postArray);
                break;
            case $type=='event':
                return self::eventMsg($postArray);
                break;
        }
    }

    //保存消息
    static public function saveMsg($data)
    {
        UserMsg::create($data);
    }
}
