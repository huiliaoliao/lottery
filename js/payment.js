$(function () {


    var startTimeYear = new Date(2017,1,26).getFullYear();
    var startTimeMonth = new Date(2017,1,26).getMonth();
    if(startTimeMonth<10){
        startTimeMonth = "0"+startTimeMonth;
    }
    var startTimeDay = new Date(2017,1,26).getDate();
    if(startTimeDay<10){
        startTimeDay = "0"+startTimeDay;
    }
    $("#online-out-start-time").val(startTimeYear+'-'+startTimeMonth+'-'+startTimeDay);

    var endTimeYear = new Date().getFullYear();
    var endTimeMonth = new Date().getMonth();
    if(endTimeMonth<10){
        endTimeMonth = "0"+endTimeMonth;
    }
    var endTimeDay = new Date().getDate();
    if(endTimeDay<10){
        endTimeDay = "0"+endTimeDay;
    }
    $("#online-out-end-time").val(endTimeYear+'-'+endTimeMonth+'-'+endTimeDay);


    //刷新类型选择
    $("#online-out-refresh-type").change(function () {
        if($(this).val()!="auto"){
            //10,20,60刷新的方法
            var timer = setInterval(refreshTask,$(this).val()*1000);
        }else{
            clearInterval(timer);
            timer=null;
            //自动刷新的方法
        }
    });

    //定时刷新的方法
    function refreshTask(){
        //局部刷新表格，
        //console.log("refresh");
    }



//复制方法，是在浏览器本地复制，还是跨程序复制？？？





    //线上出款列表
    $("#online-info-tbody").on("click","td:last-child>a:first-child",function () {
        var con;
        con= confirm("确认要执行该操作么?");
        if(con==true){
            $(this).parent().prev().children('.success').css("display","block").prev().css("display","none");
        }
        else{
            $(this).parent().prev().children('.success').css("display","none").prev().css("display","block");
        }
    });


    //入款类型设置
    $("#type-setting-tbody").on("click",".state button",function () {
        if (this.className.indexOf('run') >= 0) {
            $(this).css("display", "none").next().css("display", "block");
        } else {
            $(this).css("display", "none").prev().css("display", "block");
        }
    });
    //操作，停用启用
    $("#type-setting-tbody").on("click",".handle .stop",function () {
        if (this.className.indexOf('stop') >= 0) {
            $(this).text("启用");
        } else {
            $(this).text("停用").css("color","#f4841e");
        }//只是一次性点击，
    })









});





















