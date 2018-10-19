<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MacFault extends Model
{
    use SoftDeletes;
    /**
     * 关联到模型的数据表
     *
     * @var string
     */
    protected $table = 'driver_mac_fault';

    /**
     * 应该被调整为日期的属性
     *
     * @var array
     */
    protected $dates = ['created_at', 'updated_at', 'deleted_at'];

    protected $guarded = [];
}
