<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script>
        ((doc, win)=> {
            var docEl = doc.documentElement,
                resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
                recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    if (!clientWidth) return;
                    if(clientWidth>=750){
                        docEl.style.fontSize = "100px";
                    }else{
                        docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
                    }
                };

            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener("DOMContentLoaded", recalc, false);
        })(document, window);
    </script>
</head>
<style>
    *{
        margin:0;
        padding:0;
    }
    .pic{
        width:100%;
        height:50vw;
        margin-top:4rem;
    }
    .pic img {
        width:2rem;
        display: block;
        margin:0 auto;
        padding-bottom:0.5rem;
    }
    .msg{
        font-size:0.28rem;
        display: block;
        width:100%;
        text-align: center;
    }
</style>
<body>
<div class="pic">
    {{--<img src="https://amo-qrcode.oss-cn-beijing.aliyuncs.com/amo-qrcode/success.png" alt="" />--}}
    {{--<span class="msg">成功</span>--}}
    <h1>{{ $title }}</h1>
    <span class="msg">{{ $msg }}</span>
</div>
</body>
</html>