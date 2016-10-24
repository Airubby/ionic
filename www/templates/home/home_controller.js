angular.module('home.controller', ['home.service'])

.controller('HomeCtrl', function($scope,$window,HomeFty) {
	getHeaderSlideData();
	toutiao();
	getAdone();
	getMiaosha();
	getAdtwo();
	moveTop();
	countdown();
	headerChangeColor();
	$scope.$on("$ionicView.afterEnter",function(e){
		initHeaderSlideData();
		inittoutiao();
	});
	
	function getHeaderSlideData(){
		$scope.headerSlideData=HomeFty.setHeaderSlideData();
	}
	function initHeaderSlideData(){
		var headerSwiper = new Swiper('#headerSlider', {
	        paginationClickable: true,  //是否显示分页器
	        autoplay: 2000,
	        autoplayDisableOnInteraction: false, //为true的话用户操作了幻灯片就不会再自动切换了
	        loop: true,
	        // 如果需要分页器
	        pagination: '.swiper-pagination',
	        // 改变自动更新（js删除第一个slide时分页器实时更新）
	        observer:true,
	        observeParents:true  //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
		})
	}
	function toutiao(){
		$scope.toutiao=HomeFty.setTouTiaoSlideData();
	}
	function inittoutiao(){
		var toutiaoSwiper = new Swiper('#toutiaoSlider', {
	        direction:'vertical',
	        autoplay: 2000,
	        loop: true
	    });
	}
	function getAdone(){
		$scope.adone=HomeFty.setAdone();
	}
	function getMiaosha(){
		$scope.miaosha=HomeFty.setMiaosha();
	}
	function getAdtwo(){
		$scope.adtwo=HomeFty.setAdtwo();
	}
	
	//回到顶部
    function moveTop(){
    	
      var bg=$window.document.getElementById('home-content');
      var goTop = document.querySelector(".back_top");

      bg.addEventListener('scroll',function(){
        var top = bg.scrollTop;
        if(top>200){
          goTop.style.opacity = 1;
        }else{
          goTop.style.opacity = 0;
        }
      },false);

      goTop.onclick = function(){
        bg.scrollTop = 0;
      }
      
    };
    
    // 改变头部颜色
    function headerChangeColor(){
      var bg=$window.document.getElementById('home-content');
      var nowOpacity=0;
      bg.onscroll=function(event){
        if(this.scrollTop/250<.9){
          nowOpacity=this.scrollTop/250;
        }
        document.getElementById("headerBar-bg").style.opacity=nowOpacity;
      }
    }
    
    
    // 秒杀计时器
    function countdown(){
      if($window.timer){
        clearInterval($window.timer);
      }
      // 倒计时
      var timeObj={
        h:1,
        m:37,
        s:13
      };

      var timeStr=toDouble(timeObj.h)+toDouble(timeObj.m)+toDouble(timeObj.s);
      var timeList=document.getElementsByClassName('time-text');
      for(var i=0;i<timeList.length;i++){
        timeList[i].innerHTML=timeStr[i];
      }
      function toDouble(num){
        if(num<10){
          return '0'+num;
        }else{
          return ''+num;
        }
      }

      $window.timer=setInterval(function(){
        timeObj.s--;
        if(timeObj.s==-1){
          timeObj.m--;
          timeObj.s=59;
        }
        if(timeObj.m==-1){
          timeObj.h--;
          timeObj.m=59;
        }
        if(timeObj.h==-1){
          timeObj.h=0;
          timeObj.m=0;
          timeObj.s=0;
          clearInterval($window.timer);
        }
        timeStr=toDouble(timeObj.h)+toDouble(timeObj.m)+toDouble(timeObj.s);
        for(var i=0;i<timeList.length;i++){
          timeList[i].innerHTML=timeStr[i];
        }
      },1000)
    }
    
	
})
