<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Massage extends Model
{
    use SoftDeletes;

    protected $table = 'massage';

    protected $dates = ['created_at', 'updated_at', 'deleted_at'];

    protected $guarded = [];

    public function getBlueTeethByMid(){
        return $this->hasMany('App\Model\BlueTeethCommand');
    }
}
