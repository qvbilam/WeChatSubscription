<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Ixudra\Curl\Facades\Curl;
use Illuminate\Support\Facades\Redis;
use App\Http\Controllers\TokenController;
use App\Model\Driver;
use Illuminate\Support\Facades\DB;
use App\Model\DriverDetailInfo;

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

    //用户注册
    public function registerExecute(Request $request)
    {
        $phone = $request->input('phone');
        $name = $request->input('realName');
        $carType = $request->input('carType');
        $carColor = $request->input('carColor');
        $carNum = $request->input('carNum');
//        $openId = $request->input('openId');
        $type = 0;
        if (!$phone || !$name || !$carType || !$carColor || !$carNum ) {
            return $this->error(3001, '请填写完整信息');
        }
        $res = Driver::where(['phone' => $phone, 'type' => $type])->value('id');
        if ($res) {
            return $this->error(3002, '该手机号已注册');
        }
        DB::beginTransaction();
        try {
            //'openId' => $openId,不加入。用户自行绑定
            $res = Driver::create(['phone' => $phone, 'type' => $type]);
            DriverDetailInfo::updateOrCreate(['driverId' => $res['id']], ['name' => $name, 'car_number' => $carNum, 'car_type' => $carType, 'car_color' => $carColor]);
        } catch (\Exception $exception) {
            return $this->error(3003, '注册失败');
            DB::rollBack();
        }
        DB::commit();
        return $this->success(0, '注册成功');
    }
}
