<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Ixudra\Curl\Facades\Curl;
use App\Model\Driver;
use App\Model\Coupon;

class ViewController extends Controller
{
    //普通司机注册
    static public $offset = 5;

    public function register()
    {
        return view('register');
//        $REDIRECT_URI = env('TEST_WECHAT_WEB_ME') . '/api/registerList';
//        self::requestWechat($REDIRECT_URI);
//        header("Location:" . $REDIRECT_URI);
    }

    public function registerList()
    {
//        $openId = self::getOpenId();
//        $res = self::judgeUser($openId);
//        if (!$res) {
//            return view('error');
//        }
//        return view('register');
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

    static public function getOrderList()
    {
        $openId = self::getOpenId();
        $driverId = self::judgeUser($openId);
        if (!$driverId) {
            return view('error',['title'=>'订单管理','msg'=>'未获取到用户信息']);
        }

        //统计总页数
//        $data = Coupon::leftJoin('passenger_wxpay_orderlist','passenger_wxpay_orderlist.out_trade_no','=','passenger_coupons.out_trade_no')
//            ->leftJoin('passenger_combos','passenger_combos.id','=','passenger_coupons.combo_id')
//            ->where(['passenger_coupons.driverId'=>$driverId])
//            ->orderBy('passenger_coupons.id','desc')
//            ->select(
//                'passenger_coupons.id as couponId',
//                'passenger_coupons.created_at as created_at',
//                'passenger_combos.minute as minute',
//                'passenger_wxpay_orderlist.cash_fee as fee',
//                'passenger_coupons.refund as refund'
//            )
//            ->limit(0,15)
//            ->get();
//            ->paginate(15);
//        ->get()->toArray();
        $data =json_decode(self::OrderData($driverId, 1, self::$offset),true);
        if(!$data['data']){
            return view('error',['title'=>'订单管理','error'=>'没有订单']);
        }
        return view('order', ['data' => $data['data'], 'driverId' => $driverId]);

    }

    static public function addOrderData(Request $request)
    {

        $driverId = $request->input('driverId', 0);
        $page = $request->input('page', 1);
        $offset = self::$offset;
        return self::OrderData($driverId, $page, $offset);
    }

    static public function OrderData($driverId, $page = 1, $offset = 5)
    {
        $page = $page - 1;
        $data = Coupon::leftJoin('passenger_wxpay_orderlist', 'passenger_wxpay_orderlist.out_trade_no', '=', 'passenger_coupons.out_trade_no')
            ->leftJoin('passenger_combos', 'passenger_combos.id', '=', 'passenger_coupons.combo_id')
            ->where(['passenger_coupons.driverId' => $driverId])
            ->whereNotNull('passenger_wxpay_orderlist.cash_fee')
            ->orderBy('passenger_coupons.id', 'desc')
            ->select(
                'passenger_coupons.id as couponId',
                'passenger_coupons.created_at as created_at',
                'passenger_combos.minute as minute',
                'passenger_wxpay_orderlist.cash_fee as fee',
                'passenger_coupons.refund as refund'
            )
            ->offset($page * $offset)
            ->limit($offset)
            ->get();
        //return self::success(0, 'ok', ['data'=>$data]);
	return json_encode(['data'=>$data]);

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
        return view('bind',['openId'=>$openId]);
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
        $driverId = self::judgeUser($openId);
        if (!$driverId) {
            return view('error',['title'=>'设备报修','error'=>'未获取到用户信息']);
        }
        return view('repair',['openId'=>$openId]);

    }


    static public function getOpenId()
    {
        $APPID = env('TEST_WECHAT_APPID');
        $SECRET = env('TEST_WECHAT_SECRET');
        $state = 'TEST';
        $code = '';
        if (isset($_GET['state']) && $_GET['state'] == $state) {
            $code = $_GET['code'];
            $uinfo = file_get_contents("https://api.weixin.qq.com/sns/oauth2/access_token?appid=" . $APPID .
                "&secret=" . $SECRET .
                "&code={$code}&grant_type=authorization_code");
            $uinfo = (array)json_decode($uinfo);
            $openid = $uinfo['openid'];
            return $openid;
            //可能来自订单分页
        } else if (isset($_GET['page'])) {
            return self::addOrderData($_GET['page']);
        }


    }

    //请求微信获取用户openid. 参数重定向页面
    static public function requestWechat($REDIRECT_URI, $scope = 'snsapi_base', $state = 'TEST')
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
        $res = Driver::where(['openId' => $openId, 'type' => 0])->value('id');
        if ($res) {
            return $res;
        }
        return false;
    }
}
