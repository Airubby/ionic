angular.module('category.route',['category.controller'])
	.config(function($stateProvider, $urlRouterProvider) {

$stateProvider

  .state('category', {
    url: '/category',
	templateUrl: 'templates/category/category.html',
	controller: 'CategoryCtrl'
  })


});


