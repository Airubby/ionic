angular.module('category.controller', ['category.service'])

.controller('CategoryCtrl', function($scope,CategoryFty,$window,$ionicHistory,$state) {
	
	
	$scope.$on('$ionicView.enter', function (e) {
      getCategoryData();
      $scope.getCategoryBig(102);
      $scope.getCategoryDetailData(102);
     
    });
    
    function getCategoryData(){
    	$scope.categoryData=CategoryFty.setCategoryData();
    }
    $scope.getCategoryBig=function(typeNumber){
    	$scope.categoryBigData=CategoryFty.setCategoryBig(typeNumber);
    }
    $scope.getCategoryDetailData=function (typeNumber){
		$scope.categoryDetailData=CategoryFty.setCategoryDetailData(typeNumber);
    }
    
    // 左侧分类单击样式修改
    $scope.categoryLeftClick=function(e,$index){
    	/*var bodyHeight=$(document).height();
    	var h=$("#nav").find("li:first-of-type").outerHeight()
    	var num=Math.ceil((bodyHeight-49-44)/h);
    	var liNum=$("#nav").find("li").length;
    	var sTop=$index*h
    	if($index<=liNum-num-1){
    		
    	}*/
      	e.target.className='nav-current';
      	$(e.target).siblings().removeClass().addClass('nav-blur');
      	
    };
    
    
    // 返回按钮方法
    $scope.func_goBack = function () {
      $ionicHistory.goBack();
    };

    $scope.func_goHome= function () {
      $state.go('tab.home');
    }
    
    
    
    
    
    
    
    
    


})
