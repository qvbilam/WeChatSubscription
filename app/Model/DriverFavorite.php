<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class DriverFavorite extends Model
{
    /**
     * 关联到模型的数据表
     *
     * @var string
     */
    protected $table = 'driver_favorite';

    /**
     * 应该被调整为日期的属性
     *
     * @var array
     */
    protected $dates = ['created_at', 'updated_at'];

    protected $guarded = [];
}
