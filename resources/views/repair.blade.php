<html>
<body>
<h1>设备报修</h1>
<h3>设备位置</h3>
<input style="display: none;" type="text" id="openId" value="{{ $openId }}">

<button class="position" value="1">主驾</button>
<button class="position" value="2">副驾</button>
<button class="position" value="3">贵宾</button>

<h3>设备问题</h3>

<label><input id="r5" type="radio" value="付款成功，设备不运动" name="chose">付款成功，设备不运动</label><br>
<label><input id="r6" type="radio" value="微信小程序无法连接设备" name="chose">微信小程序无法连接设备</label><br>
<label><input id="r6" type="radio" value="设备运动时长不准确" name="chose">设备运动时长不准确</label><br>
<label><input id="r6" type="radio" value="设备长时间运动，无法停止" name="chose">设备长时间运动，无法停止</label><br>

<input type="text" id="problem"><br>
<button id="submit">提交</button>
</body>
</html>

<script src="https://libs.baidu.com/jquery/2.0.0/jquery.js"></script>
<script>
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