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
        var b = $(this).parent("").html();
        $("#pop-up").addClass('displayed-block').html(b);

        //未写完。不知道弹窗要获取哪里数据

    });


    // //代理报表---搜索事件
    // $("#statement .search").click(function () {
    //     alert(1);
    // })
});






















