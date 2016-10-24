angular.module('guidePage.controller', ['guidePage.service'])

.controller('GuidePageCtrl', function($scope,GuidePageFty,$state) {
	 //引导页slide初始化
    var guideSlide = new Swiper('#guideSlide', {
      pagination: '.swiper-pagination',
      onSlideChangeEnd: function(swiper){
      	var index=guideSlide.activeIndex;
      	var nowindex=$(".item-logo")[index];
      	var nowindexchild=$(nowindex).find("div:first-of-type");
      	if(nowindexchild.hasClass("hidden")){
      		nowindexchild.removeClass("hidden");
      		nowindexchild.addClass("guide-show");
      	}
      	
      }
    });
	
	$scope.func_goHome=function(){
		localStorage["isFirst"]=true; //判断是否是第一次进入
		$state.go('tab.home');
	}
	
	
})
