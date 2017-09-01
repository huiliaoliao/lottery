$(document).ready(function () {
    //新增按钮
    $("#add").click(function () {
        $("#newUser").removeClass("displayed-hide");
    });
    //全选
    $("#chooseAll").click(function ( ) {
        var self= this.checked;
        $(".chooseOne").each(function () {
            this.checked = self;

        })
    });

    $("#user-list-tbody").on("click",".chooseOne",function () {
        var result = true;
        $("#user-list-tbody").each(function () {
            result = result&&this.checked;
        });
        $("#chooseAll").prop("checked",result);
    });

    //锁定
    $("#lock").click(function () {
        $("#user-list-tbody .chooseOne").each(function () {
            if(this.checked==true){
                $(this).parent().siblings().children(".user-status").text("锁定");
                $(this).parent().siblings().children(".run").css("display","block").next().css("display","none");

            }

        })
    });
    
    
    //解锁
    $("#unlock").click(function () {
        $("#user-list-tbody .chooseOne").each(function () {
            if(this.checked==true){
                $(this).parent().siblings().children(".user-status").text("启用");
                $(this).parent().siblings().children(".run").css("display","none").next().css("display","block");

            }

        })
    });

    // 操作里面按钮
    $("#user-list-tbody .handel button").click(function() {
        if (this.className.indexOf('run') >= 0) {
            $(this).parent().prev().children(".user-status").text("启用");
            $(this).css("display", "none").next().css("display", "block");
        } else {
            $(this).parent().prev().children(".user-status").text("锁定");
            $(this).css("display", "none").prev().css("display", "block");
        }

    })

    //新增

    // $("btn").click(function () {
    //     var u = uname.val();
    //     var p = upwd.val();
    //     var ureg = /^[0-9a-zA-Z]{6,12}$/;
    //     var preg = /^[0-9a-zA-Z]{6,18}$/;
    //
    // })


});