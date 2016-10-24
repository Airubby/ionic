angular.module('cart.route', ['cart.controller'])
	.config(function($stateProvider,$urlRouterProvider){
		$stateProvider
		.state('cart',{
			url:'/cart',
			templateUrl:'templates/cart/cart.html',
			controller:'CartCtrl'
		})
	});
