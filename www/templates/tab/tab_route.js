angular.module('tab.route',['tab.controller'])
	.config(function($stateProvider, $urlRouterProvider) {

$stateProvider

  .state('tab', {
    url: '/tab',
    abstract:true,
	templateUrl: 'templates/tab/tabs.html',
	controller: 'TabCtrl'
  })


});


