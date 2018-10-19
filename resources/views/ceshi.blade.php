<html>
<body>
<h1>司机提现</h1>
<h3>温馨提示:提现金额大于等于100元,每周三可提现</h3>
<input style="display: none;" type="text" id="openId" value="{{ $openId }}">
可提现金额：<input type="text" value="">

<button id="submit">提现</button>

<label>照相机</label>
<input type="file" id='image' accept="image/*" capture='camera'>
<br>
<label>摄像机</label>
<input type="file" id='video' accept="video/*" capture='camcorder'>
</body>
</html>

<script src="https://libs.baidu.com/jquery/2.0.0/jquery.js"></script>
<script>

    var file = document.querySelector('input');
    if (getIos()) {
        file.removeAttribute("capture");
    }
    function getIos() {
        var ua=navigator.userAgent.toLowerCase();
        if (ua.match(/iPhone\sOS/i) == "iphone os") {
            return true;
        } else {
            return false;
        }
    }

    var Agreement = window.location.protocol
    var openId = $('#openId').val()
    var position = 0

    $('.position').click(function () {
        position = $(this).attr('value')
    })

    $('#submit').click(function () {
        radio_problem = $('input:radio:checked').val()
        text_problem = $('#problem').val()
        if (position == 0) {
            alert('请选择座椅位置')
            return false
        }
        if (!radio_problem) {
            alert('请选择设备问题')
        }
        $.ajax({
            type: 'POST',
            url: Agreement + '/api/repairExecute',
            data: {
                'radio_problem': radio_problem,
                'text_problem': text_problem,
                'position': position,
                'openId': openId
            },
            dataType: 'json',
            success: function (data) {
                alert(data.msg)
            }
        })
    })
</script>