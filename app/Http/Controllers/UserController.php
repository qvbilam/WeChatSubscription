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
use App\Http\Controllers\PayController;
use App\Model\DriverWithdraw;
use Illuminate\Support\Facades\Log;
use App\Model\CheckCode;

class UserController extends Controller
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

    //司机认证
    public function Authentication(Request $request)
    {
        $phone = $request->input('phone', 0);
        $code = $request->input('code', 0);
        $tags = $request->input('tags', 0);
        $openId = $request->input('openId');
        if (!$openId) {
            return $this->error(2001, '未获取到openId');
        }
        //判断openId是否被其他手机号绑定
        $count = Driver::where(['openId' => $openId, 'type' => 0])->count('id');
        if ($count != 0) {
            return $this->error(2002, '该微信号已绑定其他手机号');
        }
        $res = CheckCode::where([
            'phone' => $phone,
            'code' => $code,
            'tags' => $tags
        ])->value('id');
        if (!$res) {
            return $this->error(2003, '验证码错误');
        }
        $result = Driver::updateOrCreate(['phone' => $phone, 'type' => 0], ['openId' => $openId]);
        $status = Driver::where(['phone' => $phone, 'type' => 0])->value('status');
        if (!$result) {
            return $this->error(2004, '验证失败');
        }
        return $this->success(0, 'ok', ['status' => $status]);
    }

    //完善个人信息
    public function perfect(Request $request)
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
        DB::beginTransaction();
        try {
            //'openId' => $openId,不加入。用户自行绑定
            $driver = Driver::select('id','status')->where(['phone' => $phone, 'type' => $type])->first();
            if($driver['status'] != 4){
                Driver::where(['driverId' => $driver['id']])->update(['status' => 3]);
            }
            DriverDetailInfo::updateOrCreate(['driverId' => $driver['id']], ['name' => $name, 'car_number' => $carNum, 'car_type' => $carType, 'car_color' => $carColor]);
        } catch (\Exception $exception) {
            Log::error('register_error : ' . json_encode($exception));
            return $this->error(3002, '完善个人信息失败');
            DB::rollBack();
        }
        DB::commit();
        return $this->success(0, '完善个人信息成功',  ['phone'=>$phone]);
    }

    //用户绑定  需要注册用户 并且微信号没有绑定过去其他账号 ======= 废用
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
        return $this->success(0, '绑定成功', ['url' => view('success', ['title' => '用户绑定', 'msg' => '绑定成功'])]);
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
        if (!$mac) {
            return $this->error(5002, '该位置并未绑定设备');
        }
        $problem = $request->input('radio_problem');
        $describe = $request->input('text_problem', '');
        $res = MacFault::create([
            'mac_id' => $mac,
            'description' => $describe,
            'remarks' => $problem,
            'status' => 0
        ]);
        if (!$res) {
            return $this->error(5003, '报修上报失败');
        }
        return $this->success(0, '报修成功', ['stauts' => 0]);
    }

    //用户设备绑定
    public function macBindExecute(Request $request)
    {
//        $driverId = $request->input('driverId');
        $openId = $request->input('openId');
        $driverId = Driver::where(['openId'=>$openId,'type'=>0])->value('id');
        $mac = $request->input('mac');
        $macPool = MacPool::select('imei', 'status')->where(['mac_id', $mac])->first();
        if (!$macPool) {
            return $this->error(6001, '请扫正确的二维码');
        }
        if ($macPool >= 4) {
            return $this->error(6002, '该设备已被使用');
        }
        $position = $request->input('position');
        if ($driverId && $position && $mac && strlen($mac) >= 10) {
            $driver = Driver::select(['id'])->where(['id' => $driverId, 'type' => 1])->first();
            if (!($driver && $driver['id'])) {
                return $this->error(6003, '获取个人信息失败');
            }
            //查询这个人是否在座椅绑定过座椅
            $res = DriverPositionList::where(['driverId' => $driverId['id'], 'position' => $position])->first();
            if ($res) {
                return $this->error(6006, '该位置已经绑定了座椅');
            }
            DB::beginTransaction();
            try {
                $mac = strval($mac);
                $host = 'https://' . $_SERVER['SERVER_NAME'];
                $hostprefix = $host . '/?mac=';
                $qrcode_url = $hostprefix . $mac; //二维码内容
                $outfile_inner = "./image/" . $mac . ".png"; //二维码储存url
                $outfile_outer = $host . "/image/" . $mac . ".png"; // 返回二维码给前端的url
                if (!file_exists($outfile_inner)) {
                    \PHPQRCode\QRcode::png($qrcode_url, $outfile_inner, 'L', 100, 2);
                }
                $DriverPositionList_rst = DriverPositionList::updateOrCreate([
                    'driverId' => $driver['id'],
                    'mac_id' => $mac,
                    'position' => $position,
                ], ['qrcodeUrl' => $outfile_outer]);
                if ($DriverPositionList_rst) {
                    $driver = Driver::updateOrCreate(['id' => $driver['id']], ['status' => 4]);
                    MacPool::where(['mac_id' => $mac])->update(['status' => 4]);
                }
            } catch (\Exception $exception) {
                DB::rollback();
                Log::error('driverBind error: ' . json_encode($exception));
                return $this->error(6004, '绑定失败');
            }
            DB::commit();
            return $this->success(0, '绑定成功', [
                'status' => $driver['status'],
                'qrcodeUrl' => $outfile_outer,
                'imei' => $macPool['imei'] . 0
            ]);
        } else {
            return $this->error(6005, '请选择座椅位置并输入正确的设备mac');
        }
    }

    //用户提现
    public function withdrawMoneyExecute(Request $request)
    {
        $week = date("w");
        if ($week != 1) {
            return $this->error(7000, '每周三满100可提');
        }
        $openId = $request->input('openId');
        if (!$openId) {
            return $this->error(7001, '您没有通过司机认证');
        }
        $money = $request->input('money') * 100;
        $money = (int)$money;
        if (!$money || $money < 100) {
            return $this->error(7002, '提现额度必须大于等于100元');
        }
        $driver = Driver::select('id', 'earning_fee', 'fetch_fee')->where(['openId' => $openId, 'type' => 0])->first();
        $withdraw_money = $driver['earning_fee'] - $driver['fetch_fee'];
        if ($withdraw_money < $money) {
            return $this->error(7003, '欲提额度不能大于可提现额度');
        }
        $tradeno = $driver['id'] . date('ymdhis', time());
        $res = $this->drawMoney($openId, $money, $tradeno);
        if (isset($res['error_code'])) {
            return $res['msg'];
        }
        if ($res['result_code'] == 'SUCCESS') {
            DB::table('drivers')->where('id', $driver['id'])->increment('fetch_fee', $money);
            DriverWithdraw::Create(['driver_id' => $driver['id'], 'withdraw_fee' => $money, 'out_trade_no' => $tradeno]);
            return $this->error(0, '提现成功', ['withdr_fee'=>$money]);
        } else {
            return $this->error(7004, $res['err_code_des']);
        }
    }

    //执行提现
    public function drawMoney($openId, $money, $tradeno)
    {

        $pay = new PayController();
        $res = $pay->putForward($money, $openId, $tradeno);
        return $res;
//        return $res['result_code'];
    }

}
