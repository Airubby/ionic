// 引导页的服务
angular.module('details.service', [])
  .factory('DetailsFty', function() {
    return {
    	setInfo:function(productId){
    		//var goodsId = JSON.parse(message);
    		if(productId==1){
    			var obj_goodsInfo={
	    			goodsId: "1",
			      description: "素念 毛呢大衣 女 2015秋装新款修身  连帽长袖毛呢外套女中长款呢子 大衣女欧美 藏青兰",
			      price: "166.00",
			      picture: [{src:'img/details/detail1.jpg'},{src:'img/details/detail2.jpg'},{src:'img/details/detail3.jpg'},{src:'img/details/detail4.jpg'}],
			      src: "img/details/detail1.jpg",
			      colorGroup: [{name: "红色", value: "红色"}, {name: "蓝色", value: "蓝色"},{name: "白色", value: "白色"}],
			      sizeGroup: [{name: "S", value: "S"}, {name: "M", value: "M"}, {name: "L", value: "L"},{name: "XL", value: "XL"}]
	    		};
	    		return obj_goodsInfo;
    		}else{
    			var obj_goodsInfo={
	    			goodsId: "2",
			      description: "若昕 韩版睡衣女冬法兰绒家居服加厚珊瑚绒女人卡通甜美睡衣秋冬套装 66651K",
			      price: "166.00",
			      picture: [{src:'img/details/detail02.jpg'},{src:'img/details/detail01.jpg'},{src:'img/details/detail04.jpg'},{src:'img/details/detail03.jpg'}],
			      src: "img/details/detail02.jpg",
			      colorGroup: [{name: "粉色", value: "粉色"}, {name: "黑色", value: "黑色"},{name: "花色", value: "花色"}],
			      sizeGroup: [{name: "S", value: "S"}, {name: "M", value: "M"}, {name: "L", value: "L"},{name: "XL", value: "XL"}]
	    		};
	    		return obj_goodsInfo;
    		}
    		
    	}
    };
  });