<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserMsgsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_msgs', function (Blueprint $table) {
            $table->increments('MsgId');
            $table->string('ToUserName',50)->comment('	开发者微信号')->default('');
            $table->string('FromUserName',50)->comment('发送方帐号（一个OpenID）')->default('');
            $table->string('MsgType',10)->comment('消息类型')->default('');
            $table->text('Content')->comment('文本消息内容');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_msgs');
    }
}
