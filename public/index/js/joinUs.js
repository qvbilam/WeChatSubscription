$(document).ready(function(){
    //         logo跳转到首页
    $("#logo").on("click", function(e){
        window.location.replace("http://www.3igtech.com");
    });

    function changeErwei(showName){
        $(".appCon dt img").hide();
        $("."+showName).show();
    }
});

