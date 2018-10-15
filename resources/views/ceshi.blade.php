<html>
<body>
<style>
    * {
        margin: 0;
        padding: 0;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-text-size-adjust: none;
    }

    html {
        font-size: 10px;
    }

    body {
        background-color: #f5f5f5;
        font-size: 1.2em;
    }

    .tab {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: 44px;
        line-height: 44px;
        border-bottom: 1px solid #ff3c3c;
        background-color: #eee;
    }

    .tab .item {
        display: block;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        width: 100%;
        font-size: 14px;
        text-align: center;
        color: #333;
        text-decoration: none;
    }

    .tab .cur {
        height: 42px;
        border-bottom: 2px solid #ff3c3c;
        color: #ff3c3c;
    }

    .content {
        background-color: #fff;
    }

    .content .item {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        -webkit-box-align: center;
        box-align: center;
        -webkit-align-items: center;
        align-items: center;
        padding: 3.125%;
        border-bottom: 1px solid #ddd;
        color: #333;
        text-decoration: none;
    }

    .content .item h3 {
        display: block;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        width: 100%;
        max-height: 40px;
        overflow: hidden;
        line-height: 20px;
        margin: 0 10px;
        font-size: 1.2rem;
    }

    .content .item .date {
        display: block;
        height: 20px;
        line-height: 20px;
        color: #999;
    }

    @-webkit-keyframes opacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes opacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

</style>
<div class="tab">
    <a href="javascript:;" class="item cur">amo</a>
</div>
<table style="width: 100%">
    <tbody class="content">
    @foreach($data as $val)
    <tr>
        <td>
            <div>{{ $val['created_at'] }}</div>
            <div style="width: 50%; float: left;">{{ $val['minute'] }}}({{ $val['fee'] }}})</div>
            <div style="width: 50%; float: right;">
                @if($val['refund'] == 0)
                    {{ $val['refund'] }}}完成
                @else
                    {{ $val['refund'] }}}用户退款
                @endif
            </div>
        </td>
    </tr>
    @endforeach
    </tbody>


</table>
<button id="getDataBut">获取更多订单</button>


</body>
</html>
<script src="https://libs.baidu.com/jquery/2.0.0/jquery.js"></script>
<script>
    var Agreement = window.location.protocol
    var page = 2;
    var driverId = {{ $driverId }}
    $('#getDataBut').click(function () {
        page += 1
        $.ajax({
            type: 'GET',
            url: Agreement + '/api/addOrderData',
            data: {'page': page, 'driverId': driverId},
            dataType: 'json',
            success: function (data) {
                console.log(data.data.length)
                if (data.data.length != 0) {
                    console.log('获取到数据')
                    for (i = 0; i < data.data.length; i++) {
                        if (data.data[i].refund < 1) {
                            $('.content').append('<tr><td><div>' + data.data[i].created_at + '</div><div style="width: 50%; float: left;">'
                                + data.data[i].minute + '分(' + data.data[i].fee / 100 + '元)' + '</div><div style="width: 50%; float: right;">成功</div></td></tr>')
                        } else {
                            $('.content').append('<tr><td><div>' + data.data[i].created_at + '</div><div style="width: 50%; float: left;">'
                                + data.data[i].minute + '分(' + data.data[i].fee / 100 + '元)' + '</div><div style="width: 50%; float: right;">退款</div></td></tr>')
                        }
                    }
                } else {
                    console.log('无更多数据')
                    $('#getDataBut').hide();
                }
            }
        })
    })
</script>
<script>

</script>


