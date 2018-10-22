<html>
<bod>
    <h1>设备绑定</h1>
    <input type="text" id="phone">
    <input style="display: none;" type="text" id="driverId" value="{{ $driverId }}">
    <button id="bind">绑定</button>
</bod>
</html>

<script src="https://libs.baidu.com/jquery/2.0.0/jquery.js"></script>
<script>
    var Agreement = window.location.protocol
    var driverId = $('#driverId').val()
    var position = 4
    var mac = '9245c6ZCVgFQMD'
    $('#bind').click(function () {
        $.ajax({
            type: 'POST',
            url: Agreement + '/api/macBindExecute',
            data: {'driverId': driverId, 'mac': mac, 'position': position},
            dataType: 'json',
            success: function (data) {
                console.log(data)
            }
        })
    })
</script>