/*!
 * @名称：主体js
 * @功能：1、页面jq
 * @作者：Mr:Tian
 */

$(function() {
	$(".nav").slide({
		type : "menu",
		titCell : ".nLi",
		targetCell : ".sub",
		effect : "slideDown",
		delayTime : 300,
		triggerTime : 0,
		returnDefault : true
	});
	// 课程分类导航
	$(".sidenav .bd .item").removeClass("layer")
	$(".sidenav .bd .item").hover(function() {
		$(this).addClass("layer");
		$(this).find("a").addClass("hover");
	}, function() {
		$(this).removeClass("layer");
		$(this).find("a").removeClass("hover");
	});
	// nav-tab
	$(".my-tab-nav").slide({
		titCell : ".my-tab-hd li",
		mainCell : ".my-tab-bd",
		delayTime : 0
	});
	/* 轮播 */
	$(".slideBox").slide({
		mainCell : ".bd ul",
		autoPlay : true,
		interTime : 5000,
		delayTime : 500
	});Time : 50
	});
	// 图片滑过效果
	$(".testimg").zoomImgRollover();
	// 直播课堂滚动
    jQuery(".zbktbox").slide({mainCell:".dlList",autoPage:true,effect:"left",scroll:1,vis:4,pnLoop:true,autoPlay:false});

	// 精品课程/空中实验室/统一大讲坛
	// tab切换
	jQuery(".jpkc-box-c").slide({
		titCell : ".tab-hd li",
		mainCell : ".tab-bd",
		delayTime : 0
	});
	// 动画
	$(".hot-item1 li").hover(function() {
		$(this).find("p").stop().animate({
			left : "0"
		}, 400);
		$(this).find("h3").stop().animate({
			right : "-175px"
		}, 400);

	}, function() {
		$(this).find("p").stop().animate({
			left : "-175px"
		}, 400);
		$(this).find("h3").stop().animate({
			right : "0"
		}, 400);
	})

    $(".q-guang ").stop().animate({
        top : "0"
    }, 1000);
    setTimeout(function() {qguangHide()}, 5000);
    function qguangHide(){
        $(".closeAdvBtn").fadeOut();
        $(".q-guang").stop().animate({
            top : "-110%"
        }, 500);
    }
    $(".closeAdvBtn").click(function(){
        qguangHide();
        $(this).fadeOut();
    });

	// 右侧快速链接
	$(".mod-sidebar li").hover(function() {
		$(this).addClass("activeli").stop().animate({
			right : "90px"
		}, 400);
	}, function() {
		$(this).removeClass("activeli").stop().animate({
			right : "0"
		}, 400);
	})
