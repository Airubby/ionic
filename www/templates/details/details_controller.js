angular.module('details.controller', ['details.service'])

.controller('DetailsCtrl', function($scope,GlobalVariable,$stateParams,DetailsFty,$state,IndexdbJs,$ionicHistory) {
	
	$scope.$on("$ionicView.afterEnter",function(e){
		//幻灯图片
		var slength=$("#detailSwiper").find(".swiper-slide").length;
		$(".viewText").find("span")[1].innerHTML=slength;
		var dSwiper = new Swiper('#detailSwiper',{
			autoplay : 2500,
			onSlideChangeEnd: function(swiper){
				var index=dSwiper.activeIndex;
				$(".viewText").find("span")[0].innerHTML=index+1;
			}
		});
	});
	
	//初始购物车数量为0
	$scope.obj_cartCount = {
      count: "0"
    }
	
	$scope.$on('$ionicView.beforeEnter', function (e) {
		IndexdbJs.getAll("cart",function(data){
        for(var i =0;i<data.length;i++){
          $scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt(data[i].number);
        }
      },null)
     
	
    });
    
    $scope.obj_goodsInfo=DetailsFty.setInfo($stateParams.productId);
    
    //用户选择的信息
    $scope.obj_goodsDetailInfo={
      productId:$stateParams.productId,
      goodsId:$scope.obj_goodsInfo.goodsId,
      description: $scope.obj_goodsInfo.description,
      price: $scope.obj_goodsInfo.price,
      src:$scope.obj_goodsInfo.src,
      color: "",
      size: "",
      number: 1
    }
	
	$scope.func_jia1=function(){
		$scope.obj_goodsDetailInfo.number++;
	}
	$scope.func_jian1=function(){
		if($scope.obj_goodsDetailInfo.number!=1){
			$scope.obj_goodsDetailInfo.number--;
		}
	}
	
	
	
	//加入购物车
	$scope.func_addToCart=function(){
		var obj_newData={};
		//拷贝一份数据到obj_newData中
		angular.copy($scope.obj_goodsDetailInfo,obj_newData);
		obj_newData.goodsId =obj_newData.goodsId + "-" + obj_newData.color + "-" + obj_newData.size;
		
		IndexdbJs.get(obj_newData.goodsId,"cart",
	        function(data){
	          if(data==null||data==undefined){
	            //不存在商品就添加
	            IndexdbJs.add("cart", obj_newData, function () {
	              //变更购物车数量
	              $scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt($scope.obj_goodsDetailInfo.number);
	              //执行下面的语句$digest就开始循环了，去检查model变化
	              $scope.$digest();
	            }, null);
	          }
	          else {
	            // 存在商品
	            // 是新增加6个数量，所以要处理一下，这个还影响下面变更购物车数量的逻辑
	            obj_newData.number=parseInt(obj_newData.number)+parseInt(data.number);
	
	            IndexdbJs.update("cart", obj_newData, function () {
	              //变更购物车数量
	              $scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt($scope.obj_goodsDetailInfo.number);
	              $scope.$digest();
	            }, null);
	          }
	        },
	        null
	      )
	}
	
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
