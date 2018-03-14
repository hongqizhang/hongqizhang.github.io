$(function(){
	//获取浏览器可视窗口的宽和高
//	(function(){
//		//有坑，不能用document.body.clientWidth  document.body.clientHeight 
//		var  innerHeight1 = document.documentElement.clientHeight;
//		var innerWidth1 = document.documentElement.clientWidth;
//		//让轮播图大小适应不同的浏览器第一屏
//		$(".header").css({"height":innerHeight1,"width":innerWidth1});
//	})();
//	//顶部的banner的高度
//	$(".headimg").css("height",document.documentElement.clientHeight-80);
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
    		"margin-left":132
    	},600);   	
    });
    //newsout没有高度   子元素浮动后，他就高度跨了  内部元素撑不开，设置newsout的高度
    $(".newsout").height($(".news-right").outerHeight()-0 + 40);
    
    $(".newscontent").height($(".news-right").outerHeight());
    //设置news-right-list的高度，由于浮动  失去了高度，手动改变的高度
    //由于高度是由图片和文字撑开，所以先必须判断谁的高度大，就取谁的高度
    (function(){
    	var listHeight = 0;
    	listHeight = $(".news-right-listimg").outerHeight(true) > $(".news-right-listtitle").outerHeight(true)- 0 +$(".news-right-listword").outerHeight(true) ? $(".news-right-listimg").outerHeight(true):$(".news-right-listtitle").outerHeight(true)- 0 +$(".news-right-listword").outerHeight(true); 
    	$(".news-right-list").height(listHeight);
    })();
    
    //请求数据
//  $.ajax({
//  	type:"get",
//  	url:"../data/companynews.json",
//  	async:true,
//  	success:function(res){
//  		seteData(res.data);
//  		console.log(res.data);
//  	},
//  	error:function(){
//  		alert("请求数据失败！！");
//  	}
//  });
    
    //测试选择器的下标
//  console.log($(".news-right-list").find("p").eq(0).html());
    
    //处理数据的函数
//  function seteData(arr){
//  	var newslistHeight;
//  	for (var i = 0; i < arr.length; i++) {
//  		var newslist = $("<div><img/ ><p><a></a></p><p></p></div>").addClass("news-right-list");
//  		newslist.find("img").attr("src",arr[i].pic).addClass("news-right-listimg");
//  		newslist.find("p").eq(0).addClass("news-right-listtitle").text(arr[i].title);
//  		newslist.find("p").eq(1).addClass("news-right-listword").text(arr[i].word);
//  		$(".news-right").append(newslist);
//  		//判断谁高
//  		var listHeight = 0;
//  		listHeight = $(".news-right-listimg").outerHeight(true) > $(".news-right-listtitle").outerHeight(true)- 0 +$(".news-right-listword").outerHeight(true) ? $(".news-right-listimg").outerHeight(true):$(".news-right-listtitle").outerHeight(true)- 0 +$(".news-right-listword").outerHeight(true); 
//  		//把最高的值付给list
//  		$(".news-right-list").height(listHeight);
//  		//ul的高度累加
//  		newslistHeight +=listHeight;
//  	}
//  	//把最终的高度赋给ul
//  	$(".news-right").height(newslistHeight);
//  	
//  	 //newsout没有高度   子元素浮动后，他就高度跨了  内部元素撑不开，设置newsout的高度
//  	$(".newsout").height($(".news-right").outerHeight()-0 + 40);
//  	
//  	$(".newscontent").height($(".news-right").outerHeight());
//  }
    
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
