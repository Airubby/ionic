// 引导页的服务
angular.module('home.service', [])
  .factory('HomeFty', function() {
    return {
    	setHeaderSlideData:function(){
    		var headerSlideData=[
	        {
	          alt:"双十一预热主场会",
	          src:"img/home/home-headerSlide-1.jpg"
	        },
	        {
	          alt:"11月11天家电低价不停歇",
	          src:"img/home/home-headerSlide-2.jpg"
	        },
	        {
	          alt:"家具盛典 好货提前抢",
	          src:"img/home/home-headerSlide-3.jpg"
	        },
	        {
	          alt:"IT抢券节",
	          src:"img/home/home-headerSlide-4.jpg"
	        },
	        {
	          alt:"潮流数码 双11爽购攻略",
	          src:"img/home/home-headerSlide-5.jpg"
	        }
	      ];
	      return headerSlideData;
	      
    	},
    	setTouTiaoSlideData:function(){
    		var toutiao=[
    			{
    				title:"兰博丹尼 可爱零钱包 5555"
    			},
    			{
    				title:"桂格即食燕麦片超值装1478g"
    			},
    			{
    				title:"维达 卫生纸 140g卷纸*10卷"
    			}
    		];
    		return toutiao;
    	},
    	setAdone:function(){
    		var adone=[
    			{
    				src:"img/home/home-ad-1.jpg"
    			},
    			{
    				src:"img/home/home-ad-2.jpg"
    			},
    			{
    				src:"img/home/home-ad-3.jpg"
    			}
    		];
    		return adone;
    	},
    	setMiaosha:function(){
    		var miaosha=[
    			{
    				title:"精品旅游背包11元",
    				now:"￥11.11",
    				old:"￥39.00",
    				src:"img/home/seckill_1.jpg"
    			},
    			{
    				title:"精品旅游背包69元",
    				now:"￥69.00",
    				old:"￥299.00",
    				src:"img/home/seckill_1.jpg"
    			},
    			{
    				title:"精品旅游背包99元",
    				now:"￥99.00",
    				old:"￥199.00",
    				src:"img/home/seckill_1.jpg"
    			}
    		];
    		return miaosha;
    	},
    	setAdtwo:function(){
    		var adtwo=[
    			{
    				src:"img/home/home-ad-4.jpg"
    			},
    			{
    				src:"img/home/home-ad-5.jpg"
    			},
    			{
    				src:"img/home/home-ad-6.jpg"
    			}
    		];
    		return adtwo;
    	},
    	
    	
    };
  });