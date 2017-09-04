$(document).ready(function () {
    //出入汇总点击--详情事件
    $('#summary>tbody>tr>td span:nth-child(2)').click(function () {
        $("#table2").removeClass('displayed-hide');
        // $("#table2").addClass('displayed-block');
        var a = $(this).parent().prev("td").text();
        $("#caption").html(a);
    });

    //出入汇总---数字弹窗
    $('#summary>tbody>tr>td span:nth-child(1)').click(function () {
        //拿到后台当前行数据，修改弹窗头部标题，遍历显示表格即可
        //var rowKey = '行标识，唯一的';

        console.log('生成表格');
    });


    // //代理报表---搜索事件
    // $("#statement .search").click(function () {
    //     alert(1);
    // })
});






















