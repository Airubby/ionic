angular.module('home.route',['home.controller'])
	.config(function($stateProvider, $urlRouterProvider) {

$stateProvider

  .state('tab.home', {
    url: '/home',
    views:{
    	'tab-home':{
    		templateUrl: 'templates/home/home.html',
   			controller: 'HomeCtrl'
    	}
    }
  })


});


