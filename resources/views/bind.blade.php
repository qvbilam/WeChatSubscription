<html>
<bod>
    <h1>服务号绑定</h1>
    <h4>温馨提示:绑定服务号时，需要填写"司机注册"时的手机号,如未注册请先注册</h4>
    <input type="text" id="phone">
    <input style="display: none;" type="text" id="openId" value="{{ $openId }}}">
    <button id="bind">绑定</button>
</bod>
</html>

<script src="https://libs.baidu.com/jquery/2.0.0/jquery.js"></script>
<script>
    var phone = $('#phone').val()
    var openId = $('#openId').val()
    $('#phone').click(function () {
        $.ajax({
            type: 'POST',
            url: Agreement + '/api/addOrderData',
            data: {'phone': phone, 'openId': openId},
            dataType: 'json',
            success: function (data) {
                console.log(data.data.length)
            }
        })
    })
</script>