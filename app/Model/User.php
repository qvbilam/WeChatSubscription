<?php

namespace App\Model;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Model
{
    use Authenticatable, Authorizable;
    use SoftDeletes;
    /**
     * 关联到模型的数据表
     *
     * @var string
     */
    protected $table = 'passenger_users';

    /**
     * 应该被调整为日期的属性
     *
     * @var array
     */
    protected $dates = ['created_at', 'updated_at', 'deleted_at'];

    protected $fillable = ['unionId', 'openId', 'uuid', 'sessionKey',
        'nickName','gender','language','city',
        'province','country', 'avatarUrl', 'status'];
}
