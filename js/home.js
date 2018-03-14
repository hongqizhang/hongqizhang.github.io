$(function(){
	//获取浏览器可视窗口的宽和高
	(function(){
		//有坑，不能用document.body.clientWidth  document.body.clientHeight 
		var  innerHeight1 = document.documentElement.clientHeight;
		var innerWidth1 = document.documentElement.clientWidth;
		console.log(innerHeight1,innerWidth1)
		//让轮播图大小适应不同的浏览器第一屏
		$(".header").css({"height":innerHeight1,"width":innerWidth1});
		$(".banner").css({"height":innerHeight1,"width":innerWidth1});
		$(".lastimg").css("height",innerHeight1);
	})();
	//首页轮播图
	var mySwiper = new Swiper ('.swiper-container', {
	    loop: true,
	    
	    // 分页器
	    pagination: '.swiper-pagination',
	    //分页器是否可以点击
	    paginationClickable :true,
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
		
		//滑动间隔时间
	    autoplay : 3000,
	    //滑动一张的时间
		speed:500
    });
    //导航栏下划线移动
    	//鼠标放上去下划线跑动
    $(".nav-ul li").on("mouseover",function(){
    	$(".underline").stop().animate({
    		"margin-left":$(this).index()*132
    	},300);   	
    });
    	//如果不点击，鼠标离开下划线回到第一个初始位置
     $(".nav-ul li").on("mouseout",function(){
    	$(".underline").stop().animate({
    		"margin-left":0
    	},600);   	
    });
    
    //滑动的新闻中心
    var newTime1 = -1;
    setInterval(function(){
    	newTime1--;
    	if(newTime1 <= -5){
    		$(".newslide-content").css("margin-top",0)
    		newTime1 = -1;
    	}
    	$(".newslide-content").animate({"margin-top":newTime1*85},1000);
    },3000);
    
    	//list鼠标事件，图标上移
	$(".productservice-float").on("mouseover",function(){
	   	   $(this).find('.movePart').stop().animate({
	   	   	   'top':43
	   	   },500);
	   	   $(this).find(".productservice-none").stop().fadeIn(500);
   		});
   //鼠标离开时  回到初始位置
    $(".productservice-float").on("mouseout",function(){
   	   $(this).find('.movePart').stop().animate({
   	   	   'top':108
   	   },500);
   	   $(this).find(".productservice-none").stop().fadeOut(500);
   });
    //地图API封装函数
    function showMap(long,lat){
    	var map = new BMap.Map("myMap");
    	var point = new BMap.Point(long, lat);
    	map.centerAndZoom(point, 17);
    	map.enableScrollWheelZoom();
    	map.addControl(new BMap.NavigationControl());    
		map.addControl(new BMap.ScaleControl());    
		map.addControl(new BMap.OverviewMapControl());    
		map.addControl(new BMap.MapTypeControl()); 
		map.setCurrentCity("北京");
		var marker = new BMap.Marker(point);        // 创建标注    
		map.addOverlay(marker);	
		marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
//		
//		var opts = {    
//				 width : 250,     // 信息窗口宽度    
//				 height: 100,     // 信息窗口高度    
//				 title : "Hello" // 信息窗口标题  
//				
//			}    
//			var infoWindow = new BMap.InfoWindow("World", opts,"red");// 创建信息窗口对象
//			map.openInfoWindow(infoWindow, map.getCenter()); 
//			// 打开信息窗口
			    	
	}
        
    //点击按钮，地图显示
    $(".clickmap1").click(function(){
    	$(".coverWrap").show();
    	showMap(106.651187,26.624632)
    	$("body").css("overflow","hidden");
    	
    });
    
    $(".clickmap2").click(function(){
    	$(".coverWrap").show();
    	$("body").css("overflow","hidden");
    	showMap(116.317672,40.0432)
    	
    });
    
    //点击关闭，地图隐藏
    $(".closeCover").click(function(){
    	$(".coverWrap").hide();
    	$("body").css("overflow","auto");
    });
    
  
});
