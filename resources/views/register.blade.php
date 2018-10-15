<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>司机注册</title>
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('index/css/invitation.css') }}" />
    <link rel="shortcut icon" type="image/x-icon" href="{{ URL::asset('index/img/shortcutIcon.ico') }}" />
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="{{ URL::asset('index/laydate/laydate.js') }}"></script>
    <script src="{{ URL::asset('index/js/invitation.js') }}"></script>
</head>
<body>
<div class="invitation">
    <!--<img class="bg" src="img/invitationBG.jpg">-->
    <div class="header">
        <img id="logo" class="logo" src="{{ URL::asset('index/img/amoLogo.png') }}">
    </div>
    <div class="inviCon">
        <div class="inviForm">
            <h2>领取座椅舒适系统 增加收益</h2>
            <ul class="formUl">
                <li>
                    <input id="phoneNum" type="tel" class="inputTxt" placeholder="请输入手机号">
                </li>
                <li>
                    <input id="phoneCode" type="text" class="inputTxt input200 fl" placeholder="验证码">
                    <p class="fr">|<span class="getCode">  获取</span></p>
                </li>
                <li class="selDateLi">
                    <input type="text" class="inputTxt"  id="date" placeholder="点击选择安装时间">
                </li>
                <li>
                    <input type="text" class="inputTxt input260"  id="place" readonly placeholder="点击选择安装地点">
                    <p class="fr gtIcon" id="placeGt">&gt;</p>
                    <dl id="allPlace"> </dl>

                </li>
            </ul>
            <div class="inputSubmit">
                <img src="{{ URL::asset('index/img/invitationBtn.png') }}">
            </div>
        </div>
    </div>
</div>
<script>
    lay('#version').html('-v'+ laydate.v);

    //时间选择器
    laydate.render({
        elem: '#date',
        type: 'datetime',
        min: 0
    });
</script>
</body>
</html>




















