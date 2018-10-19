$(document).ready(function(){
    //         logo跳转到首页
    $("#logo").on("click", function(e){
        window.location.replace("http://www.3igtech.com");
    });
    $("#place,#placeGt").on("click", function(e){
        $("#placeGt").addClass("gtIconDown");
        $("#allPlace").show();
        $(document).one("click", function(){
            $("#placeGt").removeClass("gtIconDown");
            $("#allPlace").hide();
        });
        e.stopPropagation();
    });
    $("#allPlace").on("click", function(e){
        e.stopPropagation();
    });

    function infoDD() {
        $("#allPlace dd").click( function(e){
            $("#place").attr("value",$(this).attr("value")).attr("placeId",$(this).attr("placeId"));
            $("#allPlace").hide();
        });

    }
    // 获取验证码
    $(".getCode").click(function(){
        var mobile = $("#phoneNum").val();
        if(mobile.length==0)
        {
            alert('请输入手机号码！');
            $("#phoneCode").focus();
            return false;
        }
        if(mobile.length!=11)
        {
            alert('请输入有效的手机号码！');
            $("#phoneCode").focus();
            return false;
        }
		var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
//        var myreg = /^(((1[0-9][0-9]{1})|159|153)+\d{8})$/;
        if(!myreg.test(mobile))
        {
            alert('请输入有效的手机号码！');
            $("#phoneCode").focus();
            return false;
        }

        $.ajax({
           url : "https://wxgzh.dev/api/getCheckCode",
           type : "POST",
           contentType: "application/json;charset=utf-8",
           data : JSON.stringify({'phone':mobile,'tags':5}),
           dataType : "text",
           success : function(res) {
               var result = JSON.parse(res);
               if( result.msg ) {
                   alert(result.msg);
               } else {
                   alert('请重新获取验证码！');
               }
           },
           error:function(msg){
               alert('请重新获取验证码！');
           }
       })


    });

    //获取安装地点
    function getAllPlace() {
        $.ajax({
            url : "https://liar.3igtech.com/api/getInstallPlace",
            type : "POST",
            contentType: "application/json;charset=utf-8",
            // data : JSON.stringify({'phone':mobile,'tags':5}),
            dataType : "text",
            success : function(res) {
                var result = JSON.parse(res);
                if( result && result.data.list.length !== 0) {
                    var addrList = result.data.list;
                    $("#place").attr("value",addrList[0].addr).attr("placeId",addrList[0].id);
                    var addrHtml = "";
                    for( var i = 0; i<addrList.length; i += 1) {
                        addrHtml += "<dd value=\""+addrList[i].addr+"\" placeId = \""+addrList[i].id+"\">"+addrList[i].addr+"</dd>"
                    }
                    $("#allPlace").html(addrHtml);
                    infoDD();
                    return;
                } else {
                    alert('请刷新页面，重新获取安装地点！');
                    return;
                }
                alert(result.msg);
            },
            error:function(msg){
                alert('请刷新页面，重新获取安装地点！');
            }
        })
    }

    getAllPlace();


    //创建预约
    $(".inputSubmit").click( function(e){
        //校验
        if($("#phoneNum").val() == ''){
            $("#phoneNum").focus().addClass('errorBorder');
            return false;
        }
        if($("#phoneCode").val() == ''){
            $("#phoneCode").focus().addClass('errorBorder');
            return false;
        }
        if($("#date").val() == ''){
            $("#date").focus().addClass('errorBorder');
            return false;
        }
        if($("#place").attr("placeId") == ''){
            $("#place").focus().addClass('errorBorder');
            return false;
        }
        makeAppointment();
    });
    function checkInformation() {
        if($("#phoneNum").val() == ''){
            $("#phoneNum").focus().addClass('errorBorder');
            return false;
        }
        if($("#phoneCode").val() == ''){
            $("#phoneCode").focus().addClass('errorBorder');
            return false;
        }
        if($("#date").val() == ''){
            $("#date").focus().addClass('errorBorder');
            return false;
        }
        if($("#place").attr("placeId") == ''){
            $("#place").focus().addClass('errorBorder');
            return false;
        }
    }
    function makeAppointment() {
        var information = {
            phone:$("#phoneNum").val(),
            code :$("#phoneCode").val(),
            time :$("#date").val(),
            install_place_id  :$("#place").attr("placeId"),
        }
        $.ajax({
            url : "https://liar.3igtech.com/api/reserve",
            type : "POST",
            contentType: "application/json;charset=utf-8",
            data : JSON.stringify(information),
            dataType : "text",
            success : function(res) {
                var result = JSON.parse(res);
                if(result && (result.error_code == 0)) {
                    alert("预约成功");
                    setTimeout("window.location.replace(\"http://www.3igtech.com\");", 1500);
                    // window.location.replace("http://www.3igtech.com");
                    // window.location.href="www.3igtech.com";
                } else{
                    alert(result.msg);
                    window.location.replace("http://www.3igtech.com/invitation.html");
                }
            },
            error:function(msg){
                alert('预约失败，请重新预约！');
            }
        })
    }

});

