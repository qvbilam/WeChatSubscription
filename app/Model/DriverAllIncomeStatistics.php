<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DriverAllIncomeStatistics extends Model
{
    //
    use SoftDeletes;
    /**
     * 关联到模型的数据表
     *
     * @var string
     */
    protected $table = 'driver_all_income_statistics';

    /**
     * 应该被调整为日期的属性
     *
     * @var array
     */
    protected $dates = ['created_at', 'updated_at', 'deleted_at'];

    protected $guarded = [];
}
