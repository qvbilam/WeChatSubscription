<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class UserMsg extends Model
{
    //
    protected $fillable = ['ToUserName', 'FromUserName','MsgType','Content'];
}
