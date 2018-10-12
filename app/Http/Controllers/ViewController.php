<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ViewController extends Controller
{
    //普通司机注册
    public function register()
    {
        return view('welcome');
    }

    //司机提现
    public function withdrawMoney()
    {
        return view('welcome');
    }

    //司机订单
    public function getOrder()
    {
        return view('welcome');
    }

    //司机绑定
    public function bind()
    {
        return view('welcome');
    }

    //设备报修
    public function macRepair()
    {
        return view('welcome');
    }
}
