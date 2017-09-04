$(document).ready(function () {
    // //新增按钮
    // $("#add").click(function () {
    //     $("#newUser").removeClass("displayed-hide");
    // });
    //全选
    $("#chooseAll").click(function () {
        var self = this.checked;
        $(".chooseOne").each(function () {
            this.checked = self;
        })
    });

    $("#user-list-tbody").on("click", ".chooseOne", function () {
        var result = true;
        var a = $("#user-list-tbody .chooseOne");
        for (var i = 0; i < a.length; i++) {
            result = result && a[i].checked;
        }
        $("#chooseAll").prop("checked", result);
    });

    //搜索
    $("#user-list-search").click(function () {
        var register = $("#user-list .register-dete").val();
        var register2 = $("#user-list register-date2").val();
        var real = $("#user-list .real").val();
        var userName = $("#user-list .userName").val();
        var hierarchy = $("#user-list .hierarchy").val();
        // console.log(register);
        // console.log(register2);
        // console.log(real);
        // console.log(userName);
        // console.log(hierarchy);
    });


    //锁定
    $("#lock").click(function () {
        $("#user-list-tbody .chooseOne").each(function () {
            if (this.checked == true) {
                $(this).parent().siblings().children(".user-status").text("锁定");
                $(this).parent().siblings().children(".run").css("display", "block").next().css("display", "none");

            }

        })
    });


    //解锁
    $("#unlock").click(function () {
        $("#user-list-tbody .chooseOne").each(function () {
            if (this.checked == true) {
                $(this).parent().siblings().children(".user-status").text("启用");
                $(this).parent().siblings().children(".run").css("display", "none").next().css("display", "block");

            }

        })
    });

    // 操作里面按钮
    $("#user-list-tbody .handel button").click(function () {
        if (this.className.indexOf('run') >= 0) {
            $(this).parent().prev().children(".user-status").text("启用");
            $(this).css("display", "none").next().css("display", "block");
        } else {
            $(this).parent().prev().children(".user-status").text("锁定");
            $(this).css("display", "none").prev().css("display", "block");
        }

    });


    //member页面下的保存设置按钮
    //代理信息，保存设置
    $("#basics-agency").click(function () {
        var agentState = $("#vip-details-agentState").val();
        var contact = $("#vip-details-contact").val();
        // console.log(agentState);
        // console.log(contact);
    });

    //真实姓名，保存设置
    $("#basics-real").click(function () {
        var real = $("#vip-details-real").val();
        // console.log(real);
    });

    //资金密码，保存设置
    $("#basics-moneyPwd").click(function () {
        var money = $("#vip-details-money").val();
        // console.log(money);
    });

    //用户层级，保存设置
    $("#basics-hierarchy").click(function () {
        var hierarchy = $("#vip-details-hierarchy").val();
        // console.log(hierarchy);
    });
    //银行资料，保存设置
    $("#bank-save").click(function () {
        var bankSel = $("#bank-sel").val();
        var userName = $("#bank-userName").val();
        var bankNumber = $("#bank-number").val();
        var bankOpen = $("#bank-open").val();
        // console.log(bankSel);
        // console.log(userName);
        // console.log(bankNumber);
        // console.log(bankOpen);

    });

    //订单列表，搜索功能
    $("#order-search").click(function () {
        var orderKind = $("#order-kind").val();
        var orderStart = $("#order-start-time").val();
        var orderend = $("#order-end-time").val();
        var orderState = $("#order-state").val();
        var orderPage = $("#order-page").val();
        // console.log(orderKind);
        // console.log(orderStart);
        // console.log(orderend);
        // console.log(orderState);
        // console.log(orderPage);
    });


    var data = [
        {
            userId: 'zhangsan',
            dailiUser: "zhangsan",
            daili: "255555",
            total: 2566,
            shengyu: 2533,
            state: 555,
            createTime: 2000,
            handle: "click"
        },
        {
            userId: 'zhangsan',
            dailiUser: "lisi",
            daili: "255555",
            total: 2566,
            shengyu: 2533,
            state: 555,
            createTime: 2000,
            handle: "click"
        },
        {
            userId: 'zhangsan',
            dailiUser: "zongli",
            daili: "255555",
            total: 2566,
            shengyu: 2533,
            state: 555,
            createTime: 2000,
            handle: "click"
        },
        {
            userId: 'james',
            dailiUser: "james",
            daili: "255555",
            total: 2566,
            shengyu: 2533,
            state: 555,
            createTime: 2000,
            handle: "click"
        },
        {
            userId: 'carry',
            dailiUser: "carry",
            daili: "255555",
            total: 2566,
            shengyu: 2533,
            state: 555,
            createTime: 2000,
            handle: "click"
        },
        {
            userId: 'melo',
            dailiUser: "melo",
            daili: "255555",
            total: 2566,
            shengyu: 2533,
            state: 555,
            createTime: 2000,
            handle: "click"
        },
        {
            userId: 'userId',
            dailiUser: "durrant",
            daili: "255555",
            total: 2566,
            shengyu: 2533,
            state: 555,
            createTime: 2000,
            handle: "click"
        },
        {
            userId: 'kobe',
            dailiUser: "kobe",
            daili: "255555",
            total: 2566,
            shengyu: 2533,
            state: 555,
            createTime: 2000,
            handle: "click"
        },
        {
            userId: 'tom',
            dailiUser: "tom",
            daili: "255555",
            total: 2566,
            shengyu: 2533,
            state: 555,
            createTime: 2000,
            handle: "click"
        },
        {
            userId: 'jarry',
            dailiUser: "jarry",
            daili: "255555",
            total: 2566,
            shengyu: 2533,
            state: 555,
            createTime: 2000,
            handle: "click"
        },
        {
            userId: 'yyy',
            dailiUser: "yyy",
            daili: "255555",
            total: 2566,
            shengyu: 2533,
            state: 555,
            createTime: 2000,
            handle: "click"
        }
    ];
    //计算页码数量并动态生成
    var pageSize = 2;
    getpageNum();
    //显示第一页数据
    pagenationData(1, pageSize, data);

    function getpageNum() {
        var pageNum = Math.ceil(data.length / pageSize);
        for (var i = 0; i < pageNum; i++) {
            var li = $("<li>" + (i + 1) + "</li>");
            $("#pagenation>ul").append(li);
        }
        $("#pagenation>ul>li:eq(0)").addClass('pageSeleted');
    }

    //点击页码分页
    $("#pagenation>ul").on('click', 'li', function () {
        $(this).addClass('pageSeleted').siblings('.pageSeleted').removeClass('pageSeleted');
        var currentPage = $(this).index("#pagenation>ul>li") + 1;
        pagenationData(currentPage, pageSize, data);
    });
    //点击上下页分页
    $('#pagenation>a').click(function () {
        if (this.className == 'next') {
            var currentPage = $("#pagenation>ul>li.pageSeleted").index("#pagenation>ul>li") + 1;
            if (currentPage < $("#pagenation>ul>li").length) {
                $("#pagenation>ul>li:eq(" + currentPage + ")").addClass("pageSeleted").siblings(".pageSeleted").removeClass("pageSeleted");
                currentPage++;
            }
            pagenationData(currentPage, pageSize, data);
        } else {
            var currentPage = $("#pagenation>ul>li.pageSeleted").index("#pagenation>ul>li") + 1;
            if (currentPage > 1) {
                $("#pagenation>ul>li:eq(" + (currentPage - 2) + ")").addClass("pageSeleted").siblings(".pageSeleted").removeClass("pageSeleted");
                currentPage--;
            }
            pagenationData(currentPage, pageSize, data);
        }
    });

    //前台分页。{需要所有的数据}
    /*{
     @currentPage|当前页
     @pageSize|一页显示多少条
     @data|总数据
     @retrun|result[0]当前页的数据，直接动态生成表格即可，result[1]总页数
     }*/
    function pagenationData(currentPage, pageSize, data) {//2,5,10
        var startI = pageSize * (currentPage - 1);//0,5
        var endI = pageSize * currentPage;//5,10
        var currentPageDate = data.slice(startI, endI);
        /*var result = [data.slice(startI,endI),data.length];
         return result;*/
        var html = '';
        for (var i = 0; i < currentPageDate.length; i++) {
            html += `
                <tr>
                    <td>${currentPageDate[i].dailiUser}</td>
                    <td>${currentPageDate[i].daili}<input type="hidden" value='${currentPageDate[i].userId}'></td>
                    <td>${currentPageDate[i].total}</td>
                    <td>${currentPageDate[i].shengyu}</td>
                    <td class="color1">${currentPageDate[i].state}</td>
                    <td>${currentPageDate[i].createTime}</td>
                    <td>${currentPageDate[i].handle}</td>
                </tr>
            `;
        }
        $('#agency-name-table>tbody').html(html);
    }

    //新增用户，信息检查
    var newUserInfo = {};
    $("#newUser-userName").blur(function () {
        var userName = $(this).val();
        var ureg = /^[0-9a-zA-Z]{6,12}$/;
        if (!ureg.test(userName)) {
            $('.newUserName-err').addClass('displayed-show');
            newUserInfo.userName = '';
        } else {
            $('.newUserName-err').removeClass('displayed-show');
            newUserInfo.userName = userName;
        }
    });
    $("#newUser-upwd").blur(function () {
        var upwd = $(this).val();
        var preg = /^[0-9a-zA-Z]{6,18}$/;
        if (!preg.test(upwd)) {
            $('.newUser-upwd-err').addClass('displayed-show');
            newUserInfo.upwd = '';
        } else {
            $('.newUser-upwd-err').removeClass('displayed-show');
            newUserInfo.upwd = upwd;
        }
    });
    $('#newUser-realyName').blur(function () {
        var realyName = $(this).val();
        var rureg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
        var maxStr = /^.{0,32}$/;
        if (rureg.test(realyName) || (!maxStr.test(realyName) && !rureg.test(realyName))) {
            $('.newUser-realyName-err').addClass('displayed-show');//失败
            newUserInfo.realyName = '';
        } else {
            $('.newUser-realyName-err').removeClass('displayed-show');
            newUserInfo.realyName = realyName;
        }
    });
    $('#newUser-userTel').blur(function () {
        var userTel = $(this).val();
        var userTelReg = /^[1][34578]\d{9}$/;
        if (userTelReg.test(userTel)) {
            $('.newUser-tel-err').removeClass('displayed-show');
            newUserInfo.userTel = userTel;
        } else {
            $('.newUser-tel-err').addClass('displayed-show');
            newUserInfo.userTel = '';
        }
    });
    $('#newUser-userEmail').blur(function () {
        var userEmail = $(this).val();
        var userEmailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if (userEmailReg.test(userEmail)) {
            $('.newUser-email-err').removeClass('displayed-show');
            newUserInfo.userEmail = userEmail;
        } else {
            $('.newUser-email-err').addClass('displayed-show');
            newUserInfo.userEmail = '';
        }
    });

    $('#newUser-beizhu').blur(function () {
        var userBeizhu = $(this).val();
        var userBeizhuReg = /^.{6}$/;
        if (userBeizhuReg.test(userBeizhu)) {
            newUserInfo.userBeizhu = userBeizhu;
            $('.newUser-beizhu-err').removeClass('displayed-show');
        } else {
            newUserInfo.userBeizhu = '';
            $('.newUser-beizhu-err').addClass('displayed-show');
        }
    });
    $('#newUser-confirm').click(function () {
        if (!newUserInfo.userName) {
            $('.newUserName-err').addClass('displayed-show');
        } else {
            $('.newUserName-err').removeClass('displayed-show');
        }
        if (!newUserInfo.upwd) {
            $('.newUser-upwd-err').addClass('displayed-show');
        } else {
            $('.newUser-upwd-err').removeClass('displayed-show');
        }
        if (!$("#newuser-userType").val()) {
            $('.newUserType-required-err').addClass("displayed-show");
        } else {
            $('.newUserType-required-err').removeClass("displayed-show");
        }
        if (newUserInfo.userName && newUserInfo.upwd && $("#newuser-userType").val()) {
            console.log('可以提交');
            //获取所有值即可 ,在newUserInfo的属性上，$("#newuser-userType").val()，7个值
        }
    });

    getRangeVlue();
    //会员详情基本资料设置 设置返点
    $('#deal>li>input:not(:eq(3))').change(function () {
        //最大13
        var value = $(this).val();
        $(this).next().text(value);
    });

    function getRangeVlue() {
        $('#deal>li>input:not(:eq(3))').each(function () {
            $(this).next().text($(this).val());
        });
    }

    $('#deal>li>input:eq(3)').next().text($('#deal>li>input:eq(3)').val());
    $('#deal>li>input:eq(3)').change(function () {
        //最大10
        var value = $(this).val();
        $(this).next().text(value);
    });


    //代理审核
    $("#membership-details-search").click(function () {
        var user = $("#membership-details-user").val;
        var al = $("#membership-details-all").val;
    });
    //表格里面启用锁定按钮
    // $("#summary>tbody tr td:eq(10)").click(function () {
    //     if ($(this).text("启用")) {
    //         $(this).html("<button class='btn btn-danger btn-xs'>锁定</button>");
    //     } else {
    //         $(this).html("<button class='btn btn-danger btn-xs'>启用</button>");
    //     }
    // });


});
























