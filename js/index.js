$(function(){
	// menu
	$('.menuBtn').on('click',function(){
			$(this).siblings().toggleClass('on');
		})
	//导航菜单下拉效果
	$(".nav ul li").hover(function(){
        $(this).find(".sub_nav").stop().slideDown();
    },function(){
        $(this).find(".sub_nav").stop().slideUp();
    });
	//banner图
	jQuery(".banner").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:1});
	//语音通知手风琴效果
	$(".voice_2 ul li").each(function(){
		var fold = $(this).find(".fold");
		var unfold = $(this).find(".unfold");
		if(fold.is(":hidden")){
			$(this).width(653);
		}else{
			$(this).width(68);
		}
	})

	$(".voice_2 ul li").click(function(){
		var li_index = $(this).index();
		$(this).animate({width:653},200);
		$(this).find(".unfold").show();
		$(this).find(".fold").hide();
		$(this).siblings().animate({width:68},200);
		$(this).siblings().find(".unfold").hide();
		$(this).siblings().find(".fold").show();
	})
	$(function() {
		$('.voice_2 ul li:first').css({'width':653})
		$('.voice_2 ul li').click(function() {
			$(this).stop().animate({'width':653}, 500);
			$(this).siblings().stop().animate({'width':68}, 500);
		});
	});
	// 野景滚动
	jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:1,trigger:"click"});
	//野玩滚动
	jQuery(".picScroll-left1").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:4,scroll:3,trigger:"click"});
	// 野味滚动
	jQuery(".notice1").slide({ titCell:".tab-hd li", mainCell:".tab-bd",delayTime:0 });
	jQuery(".tab-pal .focusBox").slide({ mainCell:".pic",autoPlay:true, delayTime:300});
	// 巢居切换
	jQuery(".m-slide").slide({ titCell:".tab li", mainCell:".img",effect:"fold"});
	jQuery(".focusBox2").slide({ mainCell:".pic",autoPlay:true, delayTime:300});
	//野巢wild_nest
	jQuery(".notice_yw").slide({ titCell:".tab-hd li", mainCell:".tab-bd",delayTime:0 });
	jQuery(".focus_yw").slide({ titCell:"#tip li", mainCell:"#pic ul",effect:"leftLoop",autoPlay:true,delayTime:200 });
	jQuery(".picMarquee-left").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:4,interTime:50});
	// 野味 wild_taste
	jQuery(".picMarquee-left-taste").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:5,interTime:50});
	jQuery(".focus_ct").slide({ titCell:"#tip li", mainCell:"#pic ul",effect:"leftLoop",autoPlay:true,delayTime:200 });
	// 景区介绍 scenice_introduce
	jQuery(".focus_intr").slide({ titCell:"#tip li", mainCell:"#pic ul",effect:"leftLoop",autoPlay:true,delayTime:200 });
	jQuery(".focus_intr_02").slide({ titCell:"#tip li", mainCell:"#pic ul",effect:"leftLoop",autoPlay:true,delayTime:200 });
	// 发展历程时间轴
	$(".main .year .list").each(function(e, target){
	var $target=  $(target),
	$ul = $target.find("ul");
	$target.height($ul.outerHeight()), $ul.css("position", "absolute");
	}); 
	$(".main .year>h2>a").click(function(e){
		e.preventDefault();
		$(this).parents(".year").toggleClass("close");
	});
	//产品页弹窗效果start
	$(function () {
            $(".showbtn").click(function () {
                $("#bg").css({
                    display: "block", height: $(document).height()
                });
                $("body").css({
	                overflow:"hidden",
	            });
                var $box = $('.develop_box');
                $box.css({
                    //设置弹出层距离左边的位置
                    left: ($("body").width() - $box.width()) / 2 - 20 + "px",
                    //设置弹出层距离上面的位置
                    top: ($(window).height() - $box.height()) / 2 + $(window).scrollTop() + "px",
                    display: "block"
                });
            });
            //点击关闭按钮的时候，遮罩层关闭
            $(".close_btn").click(function () {
                $("#bg,.develop_box").css("display", "none");
                $("body").css({
                overflow:"scroll",
            });
            });
        });
    //点击关闭按钮的时候，遮罩层关闭

    // 悬浮窗
	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$("#side-bar .gotop").fadeIn();	
		}
		else{
			$("#side-bar .gotop").hide();
		}
	});
	$("#side-bar .gotop").click(function(){
		$('html,body').animate({'scrollTop':0},500);
	});
	

})