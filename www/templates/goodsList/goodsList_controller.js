angular.module('goodsList.controller', ['goodsList.service'])

.controller('GoodsListCtrl', function($scope,$window,GoodsListFty,$stateParams,$ionicLoading,$ionicHistory,$state) {
	goodsNav();
	
	
    //列表数据数组
  	$scope.obj_goodsListData=[];
  	// 定义是否有更多数据加载,页面中有ng-if使用
    $scope.pms_isMoreItemsAvailable=true;
    $scope.pms_showhiden=true;
    
    //导航滚动
    function goodsNav(){
    	var liw=$(".nav-warp li:first-of-type").outerWidth();
    	var lilen=$(".nav-warp li").length;
    	var width=liw*lilen;
    	$(".nav-warp ul").css("width",width);
    }
	// 分页查询对象
    $scope.obj_pagingInfo = {
      amountMax: "",
      amountMin: "",
      billNum: "",
      createUser: "",
      dateFrom: "",
      dateTo: "",
      deptID: "",
      deptName: "",
      keyWord: "",
      loginName: "",
      billType: "",
      pageNum: 1,
      pageSize: 10,
      sortFlag: "0",
      sortType: "desc",
      typeNumber:""
    };
    
    $scope.$on('$ionicView.beforeEnter', function (e) {
		$scope.func_refreshGoodsList();
    });
    
    
	$scope.func_refreshGoodsList=function(){
		//每次刷新的时候让页码重置为1
		$scope.obj_pagingInfo.pageNum=1;
		//获取分类页面传过来的参数
		$scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
		//把分页信息对象变为了字符串
		var message=JSON.stringify($scope.obj_pagingInfo);
		var promise=GoodsListFty.refreshGoodsList(message);
		promise.then(function(data){
			if(data!=null){
				$scope.obj_goodsListData=data;
				$scope.pms_isMoreItemsAvailable=true;
    			$scope.pms_showhiden=true;
			}else{
				$scope.pms_showhiden=false;
			}
		},function(reason){
			
		}).finally(function(){
			//停止广播ion-refresher
			$scope.$broadcast('scroll.refreshComplete');
		})
	}
	
	$scope.func_loadMoreGoodsList=function(){
		$ionicLoading.show({
			template:'正在加载数据...'
		});
		//每次刷新的时候让页码重置为1
		$scope.obj_pagingInfo.pageNum=$scope.obj_pagingInfo.pageNum+1;
		//获取分类页面传过来的参数
		$scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
		//把分页信息对象变为了字符串
		var message=JSON.stringify($scope.obj_pagingInfo);
		var promise=GoodsListFty.loadMoreGoodsList(message);
		promise.then(function(data){
			//console.log(data)
			if(data!=null){
				$.each(data,function(i,item){
	              $scope.obj_goodsListData.push(item);
	            });
			}else{
				$scope.pms_isMoreItemsAvailable=false;
				$ionicLoading.show({
					template:'没有更多数据了...'
				});
				//$scope.pms_showhiden=true;
				return;
			}
		},function(reason){
			
		}).finally(function(){
			//停止广播ion-refresher
			$scope.$broadcast('scroll.infiniteScrollComplete');
			setTimeout(function(){
				$ionicLoading.hide();
			},1000);
		})
		
	}
	
	// 返回按钮方法
    $scope.func_goBack = function () {
      $ionicHistory.goBack();
    };

    $scope.func_goHome= function () {
      $state.go('tab.home');
    }
	
	
})
