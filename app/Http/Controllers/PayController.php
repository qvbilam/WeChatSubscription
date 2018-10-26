<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Plugins\wxpay\WxpayController;
use Illuminate\Support\Facades\Log;

class PayController extends Controller
{
    public static function unifiedorder($body, $out_trade_no, $total_fee, $openid) //调用统一下单接口，获取prepay_id
    {
        $url = "https://api.mch.weixin.qq.com/pay/unifiedorder";
        $appId = env('MINI_APP_ID');
        $mchId = env('MCHID');
        $nonce_str = WxpayController::getNonceStr();
        $sign_type = 'MD5';
        $spbill_create_ip = $_SERVER['REMOTE_ADDR'];
        $notify_url = "https://".$_SERVER['SERVER_NAME']."/notify";
        $trade_type = "JSAPI";

        $inputObj = [];
        $inputObj['appid'] = $appId;
        $inputObj['mch_id'] = $mchId;
        $inputObj['nonce_str'] = $nonce_str;
        $inputObj['sign_type'] = $sign_type;
        $inputObj['body'] = $body;
        $inputObj['out_trade_no'] = $out_trade_no;
        $inputObj['total_fee'] = $total_fee;
        $inputObj['spbill_create_ip'] = $spbill_create_ip;
        $inputObj['notify_url'] = $notify_url;
        $inputObj['trade_type'] = $trade_type;
        $inputObj['openid'] = $openid;
        $sign = WxpayController::MakeSign($inputObj);
        $inputObj['sign'] = $sign;
        $xml = WxpayController::ToXml($inputObj);
        $response = WxpayController::postXmlCurl($xml, $url, false);
        $rst = WxpayController::XmlToArray($response);
        return $rst;
    }
    public static function orderquery($out_trade_no)
    {
        $url = "https://api.mch.weixin.qq.com/pay/orderquery";
        $appId = env('MINI_APP_ID');
        $mchId = env('MCHID');
        $nonce_str = WxpayController::getNonceStr();
        $nonce_str = $nonce_str;
        $inputObj['appid'] = $appId;
        $inputObj['mch_id'] = $mchId;
        $inputObj['out_trade_no'] = $out_trade_no;
        $inputObj['nonce_str'] = $nonce_str;
        $sign = WxpayController::MakeSign($inputObj);
        $inputObj['sign'] = $sign;
        $xml = WxpayController::ToXml($inputObj);
        $response = WxpayController::postXmlCurl($xml, $url, false);
        $rst = WxpayController::XmlToArray($response);
        return $rst;
    }

    public function refundCsv(Request $request)
    {
        set_time_limit(0);
        if (isset($_FILES['csv']['tmp_name'])) {
            move_uploaded_file($_FILES['csv']['tmp_name'], 'refund.csv');
            $fp = fopen("refund.csv", 'r');
        } else {
            echo 'file type error';
        }
        while ($data = fgetcsv($fp)) { //每次读取CSV里面的一行内容
            if ($data[0][0] != '#' && $data[0][0] && $data[0][0] == '2') { //已201*开头的日期
                $tempStr = $data[2]; //out_trade_no
                $out_trade_no = trim($tempStr, '`');
                $out_refund_no = $out_trade_no . '|' . time(); //在out_trade_no 后拼凑时间戳 作为 out_refund_no
                $temp_total_fee = $data[5];
                //如果单位为分，则无需转换
                $total_fee = intval($temp_total_fee * 100);
                $temp_status_str = $data[4];
                $encode = mb_detect_encoding($temp_status_str, array("ASCII", "GB2312", "GBK", 'BIG5'));
                $status_str = trim(iconv($encode, 'UTF-8', $temp_status_str));
                $status = 1;
                if ($status_str == '全额退款完成') {
                    $status = 5;
                } else if ($status_str == '买家已支付') {
                    $status = 4;
                } else {
                    $status = 2; //其他情况暂认为支付失败，如："待买家支付"
                }
                $refundInfo = compact('out_trade_no', 'out_refund_no', 'total_fee', 'status');
                try {
                    WxrefundOrderList::updateOrCreate(['out_trade_no' => $out_trade_no], $refundInfo);
                } catch (\Exception $e) {
                    Log::error('save wxrefundOrderList error: ' . json_encode($e));
                }
            }
        }
    }

    public function executeRefund()
    {
        set_time_limit(0);
        $waitRefundList = WxrefundOrderList::where(['status' => 4, 'refund_fee' => 0])->get()->toArray();
        foreach ($waitRefundList as $waitRefund) {
            $out_trade_no = $waitRefund['out_trade_no'];
            $out_refund_no = $waitRefund['out_refund_no'];
            $total_fee = $waitRefund['total_fee'];
            $refund_fee = $total_fee;
            $refundRst = self::refund($out_trade_no, $out_refund_no, $total_fee, $refund_fee);
            if ($refundRst['return_code'] == 'SUCCESS' && $refundRst['return_msg'] == 'OK') {
                unset($refundRst['return_code']);
                unset($refundRst['return_msg']);
                unset($refundRst['refund_channel']); //删除这个无用的返回字段，数组会影响orm更改数据库条目
                $refundRst['status'] = 5;
                try {
                    $rst = WxrefundOrderList::updateOrCreate(['out_trade_no' => $out_trade_no], $refundRst);
                } catch (\Exception $e) {
                    Log::error('update refundList error: ' . json_encode($e));
                }
                usleep(7000); //7000纳秒睡一次，每秒钟最多执行143次退款，少于微信限制的150qps
            } else {
                usleep(200000); //200000纳秒睡一次，每秒钟最多执行5次错误的退款，少于微信限制的6qps
                Log::error('refund error: ' . json_encode($refundRst));
            }
        }
    }


    public static function refund($out_trade_no, $out_refund_no, $total_fee, $refund_fee)
    {
        $url = "https://api.mch.weixin.qq.com/secapi/pay/refund";
        $appId = env('MINI_APP_ID');
        $mchId = env('MCHID');
        $nonce_str = WxpayController::getNonceStr();
        $sign_type = 'MD5';
        $refund_desc = '退款';
        $notify_url = "https://".$_SERVER['SERVER_NAME']."/refundResult";

        $inputObj = [];
        $inputObj['appid'] = $appId;
        $inputObj['mch_id'] = $mchId;
        $inputObj['nonce_str'] = $nonce_str;
        $inputObj['sign_type'] = $sign_type;
        $inputObj['out_refund_no'] = $out_refund_no;//退款单号需内部生成
        $inputObj['out_trade_no'] = $out_trade_no;
        $inputObj['notify_url'] = $notify_url;
        $inputObj['total_fee'] = $total_fee;
        $inputObj['refund_fee'] = $refund_fee;//暂定为 全额退款 等于total_fee
        $inputObj['refund_desc'] = $refund_desc;
        $sign = WxpayController::MakeSign($inputObj);
        $inputObj['sign'] = $sign;
        $xml = WxpayController::ToXml($inputObj);
        $response = WxpayController::postXmlCurl($xml, $url, true);
        $rst = WxpayController::XmlToArray($response);
        return $rst;
    }

    public function putForward($money,$openId,$tradeno)
    {
        $url = "https://api.mch.weixin.qq.com/mmpaymkttransfers/promotion/transfers";
        $appId = env('MINI_APP_ID');
        $mchId = env('MCHID');
        $nonce_str = WxpayController::getNonceStr();
        //$sign_type = 'MD5';
        $check_name = 'NO_CHECK';
        $amount = $money;
        $desc = '提现';
        //$spbill_create_ip = '47.95.196.96';
        $spbill_create_ip = '127.0.0.1';
        $partner_trade_no = $tradeno;
        $openid = $openId;

        $inputObj = [];
        $inputObj['mch_appid'] = $appId;
        $inputObj['mchid'] = $mchId;
        $inputObj['nonce_str'] = $nonce_str;
        //$inputObj['sign_type'] = $sign_type;
        $inputObj['partner_trade_no'] = $partner_trade_no;
        $inputObj['openid'] = $openid;
        $inputObj['check_name'] = $check_name;
        $inputObj['amount'] = $amount;
        $inputObj['desc'] = $desc;
        $inputObj['spbill_create_ip'] = $spbill_create_ip;
        $sign = WxpayController::MakeSign($inputObj);
        $inputObj['sign'] = $sign;
        $xml = WxpayController::ToXml($inputObj);
        $response = WxpayController::postXmlCurl($xml, $url, true);
        $rst = WxpayController::XmlToArray($response);
        return $rst;
    }

    public function putRedForward($money,$openId,$tradeno)
    {
        $url = "https://api.mch.weixin.qq.com/mmpaymkttransfers/sendredpack";
        $appId = 'wx74ff86b2cdfafdc0';
        $mchId = env('MCHID');
        $nonce_str = WxpayController::getNonceStr();
        //$sign_type = 'MD5';
        //$spbill_create_ip = '47.95.196.96';
        $spbill_create_ip = '127.0.0.1';
        $partner_trade_no = $tradeno;
        $openid = $openId;
        $inputObj = [];
        $inputObj['nonce_str'] = $nonce_str;        //随机字符串
        $inputObj['mch_billno'] = $partner_trade_no;//商户订单号
        $inputObj['mch_id'] = $mchId;                //商户号
        $inputObj['wxappid'] = $appId;              //公众号账号
        $inputObj['send_name'] = '按么amo';          //商户名称
        $inputObj['re_openid'] = $openid;           //用户openid
        $inputObj['total_amount'] = $money;         //付款金额;
        $inputObj['total_num'] = 1;                 //发放人数;
        $inputObj['wishing'] = '123';                 //红包祝福语;
        $inputObj['client_ip'] = $spbill_create_ip; //ip地址
        $inputObj['act_name'] = '活动名称'; //活动名称
        $inputObj['remark'] = '备注'; //备注
        //$inputObj['desc'] = $desc;
        $sign = WxpayController::MakeSign($inputObj);
        $inputObj['sign'] = $sign;                  //签名
        //return $inputObj;
        $xml = WxpayController::ToXml($inputObj);
        $response = WxpayController::postXmlCurl($xml, $url, true);
        $rst = WxpayController::XmlToArray($response);
        return $rst;
    }

    //退款查询
    public function refundquery($out_trade_no)
    {
        $url = "https://api.mch.weixin.qq.com/pay/refundquery";
        $appId = 'wx74ff86b2cdfafdc0';
        $mchId = env('MCHID');
        $nonce_str = WxpayController::getNonceStr();
        $inputObj = [];
        $inputObj['appid'] = $appId;
        $inputObj['mch_id'] = $mchId;
        $inputObj['out_trade_no'] = $out_trade_no;
        $inputObj['nonce_str'] = $nonce_str;
        $sign = WxpayController::MakeSign($inputObj);
        $inputObj['sign'] = $sign;
        $xml = WxpayController::ToXml($inputObj);
        $response = WxpayController::postXmlCurl($xml, $url, true);
        $rst = WxpayController::XmlToArray($response);
        return $rst;
    }

}
