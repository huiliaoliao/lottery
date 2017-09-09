$(document).ready(function () {
    //分类设置：

    $("#class-setting-tbody").on("click","td:last>span",function () {
        var name = $(this).parent().parent().children('tr>td:eq(0)').text();
        $("#class-setting-list-myModalLabel").html(name);
    });
    //提交编辑模态框
    //关闭模态框
    $("#class-setting-cancel").click(function () {
        $("#class-setting-list-myModal").modal('hide');
    })



    //展示分类：

    $("#show-class-tbody").on("click","td:last>span",function () {
        var name = $(this).parent().parent().children('tr>td:eq(0)').text();
        $("#show-class-myModalLabel").html(name);
    });
    //提交编辑模态框
    //关闭模态框
    $("#show-class-cancel").click(function () {
        $("#show-class-myModal").modal('hide');
    });

    //
    // 彩种设置
    // 全选

    //表头全选,每个表格只需获取thCheckBox，在他的click事件中调下面的方法即可
    var thCheckBox = $('#color-setting-every-thead>tr>th>input[type=checkbox]');
    thCheckBox.click(function(){
        thCheckAll(thCheckBox,$(this));
    });
    // var fast = $('#color-setting-fast-thead>tr>th>input[type=checkbox]');
    // fast.click = function () {
    //     thCheckAll(fast,$(this));
    // };
    var thFast = $("#color-setting-fast-thead>tr>th>input[type=checkbox]");
    thFast.click(function () {
        thCheckAll(thFast,$(this));
    });
    var thEleven = $("#color-setting-eleven-thead>tr>th>input[type=checkbox]");
    thEleven.click(function () {
        thCheckAll(thEleven,$(this));
    });
    var thLow = $("#color-setting-low-thead>tr>th>input[type=checkbox]");
    thLow.click(function () {
        thCheckAll(thLow,$(this));
    });
    var thTen = $("#color-setting-ten-thead>tr>th>input[type=checkbox]");
    thTen.click(function () {
        thCheckAll(thTen,$(this));
    });
    var thPc = $("#color-setting-pc-thead>tr>th>input[type=checkbox]");
    thPc.click(function () {
        thCheckAll(thPc,$(this));
    });
    function thCheckAll(thCheckBox,self){
        var thIndex = thCheckBox.index(self[0]);
        var tbody = self.parent().parent().parent().next();
        var tr = tbody.children();
        tr.each(function(){
            checkItems = $(this).children().children('input[type=checkbox]').eq(thIndex);
            checkItems[0].checked = self[0].checked;
        });
    }



    //编辑彩种 模态框
    $("#color-list-tbody").on("click","td:last>span",function () {
        var name = $(this).parent().parent().children('tr>td:eq(0)').text();
        $("#show-class-myModalLabel").html(name);
    });
    //提交编辑模态框
    //关闭模态框
    $("#color-list-cancel").click(function () {
        $("#color-list-myModal").modal('hide');
    });
    //编辑彩种 新增模态框
    $("#color-list-tbody").on("click","td:last>span",function () {
        var name = $(this).parent().parent().children('tr>td:eq(0)').text();
        $("#show-class-myModalLabel").html(name);
    });
    //提交编辑模态框
    //关闭模态框
    $("#color-list-add-cancel").click(function () {
        $("#color-list-add-myModal").modal('hide');
    });

    //多行文本限制字符
    // $("textarea[maxlength]").keyup(function(){
    //     var area=$(this);
    //     var max=parseInt(area.attr("maxlength"),10); //获取maxlength的值
    //     if(max>0){
    //         if(area.val().length>max){ //textarea的文本长度大于maxlength
    //             area.val(area.val().substr(0,max)); //截断textarea的文本重新赋值
    //         }
    //     }
    // });
    //编辑玩法 模态框
    $("#play-list-tbody").on("click","td:last>span",function () {
        var name = $(this).parent().parent().children('tr>td:eq(0)').text();
        $("#play-list-myModalLabel").html(name);
    });
    //提交编辑模态框
    //关闭模态框
    $("#play-list-cancel").click(function () {
        $("#play-list-myModal").modal('hide');
    });
    
    
    
    //注单管理
    $("#single-tbody").on("click","tr>td:last-child>span.revoke",function () {
        $(this).parent().prev().children().eq(3).css('display','block').siblings().css('display','none');
    })

});























