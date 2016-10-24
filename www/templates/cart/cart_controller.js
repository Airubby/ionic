angular.module('cart.controller', ['cart.service'])
	.controller('CartCtrl',['$scope','$state','$ionicHistory','IndexdbJs','CommonJs','CartFty',function ($scope, $state,$ionicHistory,IndexdbJs,CommonJs,CartFty) {
		
		// 获取所有数据
	    $scope.$on('$ionicView.beforeEnter', function (e) {
	      func_getAllData();
	    });
		//没有物品的时候显示
		$scope.pms_showhiden=true;
		
	    // 获取indexdb的数据
	    $scope.obj_cartDbData={
	      data:"",
	      total:0
	    }
	
	    // 获取全部数据
	    function func_getAllData(){
	      var promise = CartFty.getAllData();
	      promise.then(
	        function (data) {
	        	if(data==''){
	        		$scope.pms_showhiden=true;
	        	}else{
	        		$scope.pms_showhiden=false;
	        	}
	          var total=0;
	          $scope.obj_cartDbData.data=data;
	          for(var i=0;i<data.length;i++){
	            total=total+parseFloat(data[i].price)*data[i].number*1.0;
	          }
	          $scope.obj_cartDbData.total=total.toFixed(2);
	          //异步需要手动调用
	          //$scope.$digest();
	        },
	        function (e) {
	          CommonJs.AlertPopup(e);
	        }
	      ).finally(function () {
	        });
	    }
	
	    // 数量加1
	    $scope.func_jia1=function(id){
	      var promise = CartFty.get(id);
	      promise.then(
	        function (data) {
	          data.number++;
	          func_updateData(data);
	        },
	        function (e) {
	          CommonJs.AlertPopup(e);
	        }
	      ).finally(function () {
	        });
	    }
	
	    // 数量减1
	    $scope.func_jian1=function(id){
	      var promise = CartFty.get(id);
	      promise.then(
	        function (data) {
	          if(data.number!=1){
	            data.number--;
	            func_updateData(data);
	          }
	        },
	        function (e) {
	          CommonJs.AlertPopup(e);
	        }
	      ).finally(function () {
	        });
	    }
		
	    // 删除
	    $scope.func_delete=function(id){
	      var promise = CartFty.delete(id);
	      promise.then(
	        function (data) {
	        	func_updateData(data);
	        },
	        function (e) {
	          CommonJs.AlertPopup(e);
	        }
	      ).finally(function () {
	        });
	    }
	    
	    // 保存数据
	    function func_updateData(data){
	      var promise = CartFty.updateData(data);
	      promise.then(
	        function () {
	          func_getAllData(data);
	        },
	        function (e) {
	          CommonJs.AlertPopup(e);
	        }
	      ).finally(function () {
	        });
	    }
	    //
	    //
	    //// 选择被选中的按钮的jquery语句
	    $("input[type='checkbox']:checked").each(function(){
	      //console.log($(this).val());
	      $scope.batchApproveInfo.taskIDS=$scope.batchApproveInfo.taskIDS+$(this).val()+","
	    });
	
	    // 返回按钮方法
	    $scope.func_goBack = function () {
	      $ionicHistory.goBack();
	    };
	
	    $scope.func_goHome= function () {
	      $state.go('tab.home');
	    }
	    $scope.func_goInfo=function(){
			alert("此功能还在完善中！请随时关注！");
		}
		
	   

	}]);