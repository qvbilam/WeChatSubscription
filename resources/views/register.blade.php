<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>司机注册</title>
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('index/css/invitation.css') }}"/>
    <link rel="shortcut icon" type="image/x-icon" href="{{ URL::asset('index/img/shortcutIcon.ico') }}"/>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="{{ URL::asset('index/laydate/laydate.js') }}"></script>
    {{--<script src="{{ URL::asset('index/js/invitation.js') }}"></script>--}}
</head>
<body>
<div class="invitation">
    <!--<img class="bg" src="img/invitationBG.jpg">-->
    <div class="header">
        <img id="logo" class="logo" src="{{ URL::asset('index/img/amoLogo.png') }}">
    </div>
    <div class="inviCon">
        <input type="text" style="display: none" id="openId" value="{{ openId }}" >
        <div class="inviForm">
            <h2>司机注册</h2>
            <ul class="formUl">
                <li>
                    <input id="phoneNum" type="tel" class="inputTxt" placeholder="请输入手机号">
                </li>
                <li>
                    <input id="phoneCode" type="text" class="inputTxt input200 fl" placeholder="验证码">
                    <p class="fr">|<span class="getCode">  获取</span></p>
                </li>
                <div>
                    <button id="confirmPhone">点我跳到下一页！！</button>
                    {{--<img src="{{ URL::asset('index/img/invitationBtn.png') }}">--}}
                </div>
                <li>
                    <input id="realName" type="tel" class="inputTxt" placeholder="请输入真实姓名">
                </li>
                <li>
                    <input id="phone" type="tel" class="inputTxt" placeholder="请输入手机号">
                </li>
                <li>
                    <input id="carType" type="tel" class="inputTxt" placeholder="请输入车型号">
                </li>
                <li>
                    <input id="carNum" type="tel" class="inputTxt" placeholder="请输入车牌号">
                </li>
                <li>
                    <input id="carColor" type="tel" class="inputTxt" placeholder="请输入车内饰颜色">
                </li>
            </ul>
            <div class="inputSubmit" id="register">
                <img src="{{ URL::asset('index/img/invitationBtn.png') }}">
            </div>
        </div>
    </>

</div>
<script>
    var oepnId =$('#openId').val()
    var Agreement = window.location.protocol
    lay('#version').html('-v' + laydate.v);

    //时间选择器
    laydate.render({
        elem: '#date',
        type: 'datetime',
        min: 0
    });
    // 获取验证码
    $(".getCode").click(function () {
        var mobile = $("#phoneNum").val();
        if (mobile.length == 0) {
            alert('请输入手机号码！');
            $("#phoneCode").focus();
            return false;
        }
        if (mobile.length != 11) {
            alert('请输入有效的手机号码！');
            $("#phoneCode").focus();
            return false;
        }
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
//        var myreg = /^(((1[0-9][0-9]{1})|159|153)+\d{8})$/;
        if (!myreg.test(mobile)) {
            alert('请输入有效的手机号码！');
            $("#phoneCode").focus();
            return false;
        }

        $.ajax({
            url: Agreement + "/api/getCheckCode",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify({'phone': mobile, 'tags': 1}),
            dataType: "text",
            success: function (res) {
                var result = JSON.parse(res);
                if (result.msg) {
                    alert(result.msg);
                } else {
                    alert('请重新获取验证码！');
                }
            },
            error: function (msg) {
                alert('请重新获取验证码！');
            }
        })
    });


    //第一个发送确认手机号按钮
    $('#confirmPhone').click(function () {
        code = $('#phoneCode').val()
        var mobile = $("#phoneNum").val();
        $.ajax({
            url: Agreement + "/api/inspectCode",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            /*tags=1 是获取注册的验证码 写死*/
            data: JSON.stringify({'phone': mobile, 'tags': 1, 'code': code}),
            dataType: "text",
            success: function (res) {
                var result = JSON.parse(res);
                if (result.msg) {
                    $('#phone').attr('value', result.data.phone);
                } else {
                    alert('请重新获取验证码！');
                }
            },
            error: function (msg) {
                alert('请重新获取验证码！');
            }
        })
    })

    //确认注册
    $('#register').click(function () {
        realName = $('#realName').val();
        phone = $('#phone').val();
        carType = $('#carType').val();
        carColor = $('#carColor').val();
        carNum = $('#carNum').val();
        $.ajax({
            url: Agreement + "/api/registerExecute",
            type: "POST",
            data:{
                'realName': realName,
                'phone': phone,
                'carType': carType,
                'carColor': carColor,
                'carNum': carNum,
                'openId': oepnId
            },
            dataType: "json",
            success: function (res) {
                console.log(res)
                if (res.msg) {
                    alert(res.msg);
                }else{
                    alert('失败')
                }
            },
            error: function (msg) {
                alert('注册失败！');
            }
        })
    })
</script>
</body>
</html>




















