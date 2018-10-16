<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Plugins\Aliyunsms\SignatureHelper;
use App\Model\CheckCode;

class CheckCodeController extends Controller
{
    //获取验证码
    public function getCheckCode(Request $request)
    {
        $phone = $request->input('phone');
        $tags = $request->input('tags'); //1.注册，2.修改手机，3.修改密码 4.受邀人获取验证码
        if ($phone && $tags >= 1) {
            $code = $this->GetRandStr(4);
            $sendSms_rst = $this->sendSms($phone, $code);
            if ($sendSms_rst->Code == 'OK') {
                $code_rst = CheckCode::updateOrCreate(['phone' => $phone], ['tags' => $tags, 'code' => $code]);
                if ($code_rst) {
                    return $this->success(0, '已向您发送手机验证码');
                } else {
                    return $this->error(1003, '获取验证码失败');
                }
            } else {
                Log::error('sendSms error: ' . json_encode($sendSms_rst));
                return $this->error(1002, '手机验证码发送失败');
            }
        } else {
            return $this->error(1001, '请填写手机号码');
        }
    }

    public function inspectCode(Request $request)
    {
        $phone = $request->input('phone',0);
        $code = $request->input('code',0);
        $tags = $request->input('tags',0);
        $res = CheckCode::where([
            'phone' => $phone,
            'code' => $code,
            'tags' => $tags
        ])->value('id');
        if(!$res){
            return $this->error(2001,'验证码错误');
        }
        return $this->success(0,'ok',['phone'=>$phone]);
    }

    //获取随机数
    protected function GetRandStr($len)
    {
        $chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        $charsLen = count($chars) - 1;
        shuffle($chars);
        $output = "";
        for ($i = 0; $i < $len; $i++) {
            $output .= $chars[mt_rand(0, $charsLen)];
        }
        return $output;
    }

    //发送短信验证码
    protected function sendSms($PhoneNumbers, $code)
    {
        $params = array();
        // *** 需用户填写部分 ***
        // fixme 必填: 请参阅 https://ak-console.aliyun.com/ 取得您的AK信息
        $accessKeyId = env('ALIYUNKEY_SMS');
        $accessKeySecret = env('ALIYUNKEY_SECRET');
        // fixme 必填: 短信接收号码
        $params["PhoneNumbers"] = $PhoneNumbers;
        // fixme 必填: 短信签名，应严格按"签名名称"填写，请参考: https://dysms.console.aliyun.com/dysms.htm#/develop/sign
        $params["SignName"] = "按么";
        // fixme 必填: 短信模板Code，应严格按"模板CODE"填写, 请参考: https://dysms.console.aliyun.com/dysms.htm#/develop/template
        $params["TemplateCode"] = "SMS_105230543";
        // fixme 可选: 设置模板参数, 假如模板中存在变量需要替换则为必填项
        $params['TemplateParam'] = Array(
            "code" => $code,
            "product" => "阿里通信"
        );
        // fixme 可选: 设置发送短信流水号
        $params['OutId'] = "12345";
        // fixme 可选: 上行短信扩展码, 扩展码字段控制在7位或以下，无特殊需求用户请忽略此字段
        $params['SmsUpExtendCode'] = "1234567";
        // *** 需用户填写部分结束, 以下代码若无必要无需更改 ***
        if (!empty($params["TemplateParam"]) && is_array($params["TemplateParam"])) {
            $params["TemplateParam"] = json_encode($params["TemplateParam"], JSON_UNESCAPED_UNICODE);
        }
        // 初始化SignatureHelper实例用于设置参数，签名以及发送请求
        $helper = new SignatureHelper();
        // 此处可能会抛出异常，注意catch
        $content = $helper->request(
            $accessKeyId,
            $accessKeySecret,
            "dysmsapi.aliyuncs.com",
            array_merge($params, array(
                "RegionId" => "cn-hangzhou",
                "Action" => "SendSms",
                "Version" => "2017-05-25",
            ))
        // fixme 选填: 启用https
        // ,true
        );
        return $content;
    }
}
