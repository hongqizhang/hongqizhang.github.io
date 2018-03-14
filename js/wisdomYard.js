$(function(){
	 //导航栏下划线移动
    	//鼠标放上去下划线跑动
    $(".nav-ul li").on("mouseover",function(){
    	$(".underline").stop().animate({
    		"margin-left":$(this).index()*132
    	},300);   	
    });
    	//如果不点击，鼠标离开下划线回到第初始位置
     $(".nav-ul li").on("mouseout",function(){
    	$(".underline").stop().animate({
    		"margin-left":396
    	},600);   	
    });
    //顶部的banner的高度
//	$(".headimg").css("height",document.documentElement.clientHeight-80);
	
	//列表第一行内容
	//list鼠标事件，图标上移
	   $(".list_li").on("mouseover",function(){
	   	   $(this).find('.icon_2').stop().animate({
	   	   	   'top':0
	   	   },300);
	   	   $(this).find(".details").stop().fadeIn(300);
   		});
   //鼠标离开时  回到初始位置
    $(".list_li").on("mouseout",function(){
   	   $(this).find('.icon_2').stop().animate({
   	   	   'top':67
   	   },300);
   	   $(this).find(".details").stop().fadeOut(300);
   });
   //列表第二行内容
   //list鼠标事件，图标上移
	   $(".list_li2").on("mouseover",function(){
	   	   $(this).find('.icon').stop().animate({
	   	   	   'top':130
	   	   },300);
	   	   $(this).find(".details_1").stop().fadeIn(300);
   		});  	
   //鼠标离开时  回到初始位置
    $(".list_li2").on("mouseout",function(){
   	   $(this).find('.icon').stop().animate({
   	   	   'top':193
   	   },300);
   	   $(this).find(".details_1").stop().fadeOut(300);
   });
     //列表第二行中间内容
      //list鼠标事件，图标上移
	   $(".list_5_0").on("mouseover",function(){
	   	   $(this).find('.icon_1').stop().animate({
	   	   	   'top':0
	   	   },300);
	   	   $(this).find(".details").stop().fadeIn(300);
   		}); 
   //鼠标离开时  回到初始位置
    $(".list_5_0").on("mouseout",function(){
   	   $(this).find('.icon_1').stop().animate({
   	   	   'top':63
   	   },300);
   	   $(this).find(".details").stop().fadeOut(300);
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
