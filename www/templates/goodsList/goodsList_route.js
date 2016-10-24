angular.module('goodsList.route',['goodsList.controller'])
	.config(function($stateProvider, $urlRouterProvider) {

$stateProvider

  .state('goodsList', {
  	//typeNumber为category.html中ui-sref="goodsList({typeNumber:{{item.typeNumber}}})"传递过来的
    url: '/goodsList/:typeNumber',
	templateUrl: 'templates/goodsList/goodsList.html',
	controller: 'GoodsListCtrl'
  })


});


