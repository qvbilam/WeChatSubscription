<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Ixudra\Curl\Facades\Curl;
use App\Model\Driver;
use App\Model\Coupon;

class ViewController extends Controller
{
    //普通司机注册
    public function register()
    {
        $REDIRECT_URI = env('TEST_WECHAT_WEB_ME') . '/api/registerList';
        self::requestWechat($REDIRECT_URI);
    }

    public function registerList()
    {
        $openId = self::getOpenId();
        $res = self::judgeUser($openId);
        if(!$res){
            return view('error');
        }
        echo "注册 : " . $openId;
    }

    //司机提现
    public function withdrawMoney()
    {
        $REDIRECT_URI = env('TEST_WECHAT_WEB_ME') . '/api/withdrawMoneyList';
        self::requestWechat($REDIRECT_URI);
    }

    public function withdrawMoneyList()
    {
        $openId = self::getOpenId();
        echo "提现 : " . $openId;
    }

    //司机订单
    public function getOrder()
    {
        $REDIRECT_URI = env('TEST_WECHAT_WEB_ME') . '/api/getOrderList';
        self::requestWechat($REDIRECT_URI);
    }

    public function getOrderList()
    {
        $openId = self::getOpenId();
        $driverId = self::judgeUser($openId);
        if(!$driverId){
            return view('error');
        }
        $data = Coupon::leftJoin('passenger_wxpay_orderlist','passenger_wxpay_orderlist.out_trade_no','=','passenger_coupons.out_trade_no')
            ->leftJoin('passenger_combos','passenger_combos.id','=','passenger_coupons.combo_id')
            ->where(['id'=>$driverId])
            ->select(
                'passenger_coupons.id as couponId',
                'passenger_coupons.created_at as created_at',
                'passenger_combos.minute as minute',
                'passenger_wxpay_orderlist.cash_fee as fee',
                'passenger_coupons.refund as refund'
            )
            ->paginate(15);
        return view('test',[$data => $data]);

    }

    //司机绑定
    public function bind()
    {
        $REDIRECT_URI = env('TEST_WECHAT_WEB_ME') . '/api/bindList';
        self::requestWechat($REDIRECT_URI);
    }

    public function bindList()
    {
        $openId = self::getOpenId();
        echo "绑定 : " . $openId;
    }

    //设备报修
    public function macRepair()
    {
        $REDIRECT_URI = env('TEST_WECHAT_WEB_ME') . '/api/macRepairList';
        self::requestWechat($REDIRECT_URI);
    }

    public function macRepairList()
    {
        $openId = self::getOpenId();
        echo "报修 : " . $openId;
    }


    static public function getOpenId()
    {
        $APPID = env('TEST_WECHAT_APPID');
        $SECRET = env('TEST_WECHAT_SECRET');
        $state = 'TEST';
        $code = '';
        if ($_GET['state'] == $state) {
            $code = $_GET['code'];
            $uinfo = file_get_contents("https://api.weixin.qq.com/sns/oauth2/access_token?appid=" . $APPID .
                "&secret=" . $SECRET .
                "&code={$code}&grant_type=authorization_code");
            $uinfo = (array)json_decode($uinfo);
            $openid = $uinfo['openid'];
            return $openid;
        } else {
            echo "获取用户openId失败";
        }
    }

    //请求微信获取用户openid. 参数重定向页面
    static public function requestWechat($REDIRECT_URI,$scope='snsapi_base',$state='TEST')
    {
        $to_url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" . env('TEST_WECHAT_APPID') .
            '&redirect_uri=' . urlencode($REDIRECT_URI) .
            '&response_type=code&scope=' . $scope .
            '&state=' . $state . '#wechat_redirect';
        header("Location:" . $to_url);
    }

    //判断用户是否绑定
    static public function judgeUser($openId)
    {
        $res = Driver::where(['openId'=>$openId,'type'=>0])->value('id');
        if($res){
            return $res;
        }
        return false;
    }
}
