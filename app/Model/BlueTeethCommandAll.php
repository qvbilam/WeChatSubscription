<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BlueTeethCommandAll extends Model
{
    use SoftDeletes;

    protected $table = 'driver_blue_teeth_command_all';

    protected $dates = ['created_at', 'updated_at', 'deleted_at'];

    protected $guarded = [];

}
