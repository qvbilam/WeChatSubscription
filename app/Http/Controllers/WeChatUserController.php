<?php

namespace App\Http\Controllers;

use App\Model\MacPool;
use Illuminate\Http\Request;
use Ixudra\Curl\Facades\Curl;
use Illuminate\Support\Facades\Redis;
use App\Http\Controllers\TokenController;
use App\Model\Driver;
use Illuminate\Support\Facades\DB;
use App\Model\DriverDetailInfo;
use App\Model\MacFault;
use App\Model\DriverPositionList;

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
        if (!$phone || !$name || !$carType || !$carColor || !$carNum) {
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

    //用户绑定
    public function bindExecute(Request $request)
    {
        $phone = $request->input('phone');
        $openId = $request->input('openId');
        if (!$phone) {
            return $this->error(4001, '请填写手机号');
        }
        $driverId = Driver::where(['phone' => $phone, 'type' => 0])->value('id');
        if (!$driverId) {
            return $this->error(4002, '请去注册');
        }
        //判断openId是否被其他手机号绑定
        $count = Driver::where(['openId' => $openId, 'type' => 0])->count('id');
        if ($count != 0) {
            return $this->error(4003, '该微信号已绑定其他手机号');
        }
        $res = Driver::where(['id' => $driverId])->update(['openId' => $openId]);
        if (!$res) {
            return $this->error(4004, '绑定失败');
        }
        return $this->success(0, '绑定成功', ['url' => view('bind_success')]);
    }

    //用户报修设备
    public function repairExecute(Request $request)
    {
        $openId = $request->input('openId');
        $driverId = Driver::where(['openId' => $openId, 'type' => 0])->value('id');
        if (!$driverId) {
            return $this->error(5001, '未获取到用户');
        }
        $position = $request->input('position');
        $mac = DriverPositionList::where(['position' => $position, 'driverId' => $driverId])->value('mac_id');
        if(!$mac){
            return $this->error(5002,'该位置并未绑定设备');
        }
        $problem = $request->input('radio_problem');
        $describe = $request->input('text_problem','');
        $res = MacFault::create([
            'mac_id' => $mac,
            'description' => $describe,
            'remarks' => $problem,
            'status' => 0
        ]);
        if(!$res){
            return $this->error(5003,'报修上报失败');
        }
        return $this->success(0,'报修成功');
    }

    //用户提现
    public function withdrawMoneyExecute(Request $request)
    {

    }
}
