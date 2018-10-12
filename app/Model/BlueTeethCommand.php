<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BlueTeethCommand extends Model
{
    use SoftDeletes;

    protected $table = 'blue_teeth_command';

    protected $dates = ['created_at', 'updated_at', 'deleted_at'];

    protected $guarded = [];

}
