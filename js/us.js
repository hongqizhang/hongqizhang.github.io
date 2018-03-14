$(function(){
	//获取浏览器可视窗口的宽和高
//	(function(){
//		//有坑，不能用document.body.clientWidth  document.body.clientHeight 
//		var  innerHeight1 = document.documentElement.clientHeight;
//		var innerWidth1 = document.documentElement.clientWidth;
//		//让轮播图大小适应不同的浏览器第一屏
//		$(".header").css({"height":innerHeight1,"width":innerWidth1});
//	})();
	//顶部的banner的高度
//	$(".headimg").css("height",document.documentElement.clientHeight-80);
	//图片容器大小
	$(".imgBox").height(848/1.79).width(848);
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
    		"margin-left":528
    	},600);   	
    });
    //点击切换内容
    $(".usContentInner-rightContent:gt(0)").hide();
    $(".usContentInner-left p").click(function(){
		$(".usContentInner-left p").css({
			"color":"#666666"
		});
		$(this).css("color","#d92443");
		$(".usContentInner-rightContent").hide();
		$(".usContentInner-rightContent").eq($(this).index()).show();
		$(".uscontent").height($(".usContentInner-right").height() + 40);
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
//				 title : "贵州泛联科技有限公司" // 信息窗口标题  
//				
//			}    
//			var infoWindow = new BMap.InfoWindow("World", opts);// 创建信息窗口对象
//			map.openInfoWindow(infoWindow, map.getCenter()); 
//			// 打开信息窗口
			    	
	}
   //显示内容的高度问题
   $(".uscontent").height($(".usContentInner-right").height() + 40);
    
    
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
    
    
    //贵州泛联地址地图

    var map1 = new BMap.Map("mapLeft");
    var point1 = new BMap.Point(106.651187,26.624632);
    map1.centerAndZoom(point1, 16);
    map1.enableScrollWheelZoom();
        var  opts = {  	
    		width:0,
    		height:0
   		}
   // map1.addControl(new BMap.NavigationControl());    
	//map1.addControl(new BMap.ScaleControl());    
	//map1.addControl(new BMap.OverviewMapControl());    
	//map1.addControl(new BMap.MapTypeControl()); 
	map1.setCurrentCity("北京");
	var marker1 = new BMap.Marker(point1);        // 创建标注    
	map1.addOverlay(marker1);
	
	var content1 = "<div>"+
	"<h2 style='color:red;font-size:13px;'>贵州泛联信息技术有限公司</h2>"+
	"<p style='font-size:11px;'>地址：贵阳市高新区长岭南路31号国家数字内容产业园大楼4楼B区</p>"+
	"<p style='font-size:11px;'>电 话(C)：0851-86652628</p>"+
	"</div>"
	
  	
	var infoWindow1 = new BMap.InfoWindow(content1,opts);// 创建信息窗口对象
	marker1.openInfoWindow(infoWindow1);
	 infoWindow1.redraw();
	
	//北京泛联地址地图
	var map2 = new BMap.Map("mapRight");
    var point2 = new BMap.Point(116.317672,40.0432);
    map2.centerAndZoom(point2, 16);
    map2.enableScrollWheelZoom();
    //map2.addControl(new BMap.NavigationControl());    
	//map2.addControl(new BMap.ScaleControl());    
	//map2.addControl(new BMap.OverviewMapControl());    
	//map2.addControl(new BMap.MapTypeControl()); 
	map2.setCurrentCity("北京");
	var marker2 = new BMap.Marker(point2);        // 创建标注    
	map2.addOverlay(marker2);
	
	var content2 = "<div>"+
	"<h2 style='color:red;font-size:13px;'>北京泛维智联信息技术有限公司</h2>"+
	"<p style='font-size:11px;margin:5px 0'>地址：北京市海淀区上地信息路26号7层718室</p>"+
	"<p style='font-size:11px;'>电 话(C)：010-60608488</p>"+
	"</div>"
	
  	
	var infoWindow2 = new BMap.InfoWindow(content2,opts);// 创建信息窗口对象
	marker2.openInfoWindow(infoWindow2);
	//infoWindow2.setHeight(0);
	infoWindow2.enableAutoPan();
	 infoWindow2.redraw();
	


	 
});
