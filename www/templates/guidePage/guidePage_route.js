angular.module('guidePage.route',['guidePage.controller'])
	.config(function($stateProvider, $urlRouterProvider) {

$stateProvider

  .state('guidePage', {
    url: '/guidePage',
    templateUrl: 'templates/guidePage/guidePage.html',
    controller: 'GuidePageCtrl'
  })


});


