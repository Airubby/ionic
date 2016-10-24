angular.module('details.route',['details.controller'])
	.config(function($stateProvider, $urlRouterProvider) {

$stateProvider

  .state('details', {
    url: '/details/:productId',
	templateUrl: 'templates/details/details.html',
	controller: 'DetailsCtrl'
  })


});


