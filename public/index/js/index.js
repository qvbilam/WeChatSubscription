$(document).ready(function(){
    //         二维码展示
    $(".passenger").mousemove(function erweima(){
        $(".erweima").show();
    });
    $(".passenger").mouseout(function erweima(){
        $(".erweima").hide();
    });
    //         banner fadeIn
    function bannerFadeIn(){
        $('.amomentTxt').animate({
            left: '15%',
            opacity: '1',
        },2500)
        $('.amomentTxt2').animate({
            left: '40%',
            opacity: '1',
        },2500)
    }
    bannerFadeIn();
    //         360° 数字累加
    var myVar;
    var i = 0;
    function myFunction() {
        myVar = setInterval(numAdd, 20);
    }
    function numAdd() {
        if(i < 360){
            i += 3;
            $('.number').html(i);
            myVar;
        }else{
            clearInterval(myVar);
        }
    }
    //         加入我们
    setInterval("$('.joinPortal').animate({left: '11%'},100).animate({left: '7%'},100).animate({left: '11%'},50);", 5000);

    // var joinUsInterval;
    // function myFunction() {
    //     joinUsInterval = setInterval(joinUs, 5000);
    // }
    // function joinUs(){
    //     $('.joinPortal').animate({left: '11%'},100).animate({left: '7%'},100).animate({left: '11%'},50);
    // }
    var maskDomHeight = $('.mask').height();
    console.log(maskDomHeight);
    document.onmousewheel = function r() {
        var amomentHeight = document.getElementById('amoment').getBoundingClientRect().top;
        var opacity = 1 - ((maskDomHeight + amomentHeight)/maskDomHeight);
        if(opacity >= 0.9) {
            opacity = 0.9;
        }
        $(".mask").css("opacity",opacity);
        var numAddHeight = document.getElementById('numAdd').getBoundingClientRect().top;
        if (numAddHeight < 300) {
            myFunction();
        }
        // var joinUsHeight = document.getElementById('joinUs').getBoundingClientRect().top;
        // console.log(joinUsHeight);
        // if (joinUsHeight >0 && joinUsHeight < 100) {
        //     joinUs();
        // }
    };
    window.onmousewheel = document.onmousewheel
    //         二维码展示
    $("#setErwei").mousemove(function erweima(){
        $(".erweimaPic").show();
    });
    $("#setErwei").mouseout(function erweima(){
        $(".erweimaPic").hide();
    });
    //         weixin二维码展示
    $(".weixin").mousemove(function erweima(){
        $(".weixinErwei").show();
    });
    $(".weixin").mouseout(function erweima(){
        $(".weixinErwei").hide();
    });

    //         logo跳转到首页
    $("#toInvation").on("click", function(e){
        window.location.replace("http://www.3igtech.com/invitation.html");
    });

});

