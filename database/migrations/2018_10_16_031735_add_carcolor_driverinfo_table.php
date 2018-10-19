<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCarcolorDriverinfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('driver_detail_info', function (Blueprint $table) {
            //
            $table->string('car_color',10)->default('')->comment('车内颜色')->after('car_type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('driver_detail_info', function (Blueprint $table) {
            //
            $table->dropColumn('intensity');
        });
    }
}
