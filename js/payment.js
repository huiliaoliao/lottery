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







})





















