angular.module('about.controller', ['about.service'])

.controller('AboutCtrl', function($scope,$state,$ionicHistory) {
	
	
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
	
	
})
