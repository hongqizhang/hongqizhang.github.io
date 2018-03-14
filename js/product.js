$(function(){

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
	
	//点击左边的title隐藏显示,背景图标切换
	(function(){
		//全局变量，做中间判断的中介
		var  sign1 = true;
		var  sign2 = true;
		var  sign3 = true;
		$(".content-left1-title").click(function(){
			$(".content-left1-list").slideToggle();
			if(sign1){
				$(this).css("background","url(../img/lefticon1.png) no-repeat 18px center");
				sign1 = false;
			}else{
				$(this).css("background","url(../img/lefticon2.png) no-repeat 18px center");
				sign1 = true;
			}
		});
	
		$(".content-left2-title").click(function(){
			$(".content-left2-list").slideToggle();
			if(sign2){
				$(this).css("background","url(../img/lefticon2.png) no-repeat 18px center,url(../img/productleftbg.png) no-repeat center top");
				sign2 = false;
			}else{
				$(this).css("background","url(../img/lefticon1.png) no-repeat 18px center,url(../img/productleftbg.png) no-repeat center top");
				sign2 = true;
			}
		});
		
		$(".content-left3-title").click(function(){
			$(".content-left3-list").slideToggle();
			if(sign3){
				$(this).css("background","url(../img/lefticon2.png) no-repeat 18px center,url(../img/productleftbg.png) no-repeat center top");
				sign3 = false;
			}else{
				$(this).css("background","url(../img/lefticon1.png) no-repeat 18px center,url(../img/productleftbg.png) no-repeat center top");
				sign3 = true;
			}
		});
	})();
	
	//切换内容
	console.log($(".content-leftli"));
	$(".content-leftli").click(function(){
		//点击谁   谁变色
		var nnn = 0;
		$(".content-leftli").css("color","#333333")
		$(this).css("color","#d92443");
		//点击谁  谁对应的下标对应到右边列表的下标显示
		$(".content-right-list").hide();
		//判断在哪一个ul面
		if($(this).parent().prev().text() == "软件"){
			nnn = $(this).index()/1 + 7;
		}
		else if($(this).parent().prev().text() == "云平台"){
			nnn = $(this).index()/1 + 8;
		}else{
			nnn =  $(this).index();
		}
		
		$(".content-right-list").eq(nnn).show();
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
	
//	console.log($(".content-left").find("li").length);
});
