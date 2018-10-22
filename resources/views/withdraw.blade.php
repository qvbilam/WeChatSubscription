<html>
<body>
<h1>司机提现</h1>
<h3>温馨提示:提现金额大于等于100元,每周三可提现</h3>
<input style="display: none;" type="text" id="openId" value="{{ $openId }}">
可提现金额：<input type="text" id="money" value="{{ $money / 100 }}">

<button id="submit">提现</button>

</body>
</html>

<script src="https://libs.baidu.com/jquery/2.0.0/jquery.js"></script>
<script>

    var Agreement = window.location.protocol
    var openId = $('#openId').val()


    $('#submit').click(function () {
        $money = $('#money').val()
        $.ajax({
            type: 'POST',
            url: Agreement + '/api/withdrawMoneyExecute',
            data: {
                'openId': openId,
                'money': money,
            },
            dataType: 'json',
            success: function (data) {
                alert(data.msg)
            }
        })
    })
</script>