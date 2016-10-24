angular.module('route',[
'guidePage.route',
'tab.route',
'home.route',
'category.route',
'goodsList.route',
'details.route',
'cart.route',
'account.route',
'about.route',
'safety.route',
'general.route'
])
	.config(function($stateProvider, $urlRouterProvider) {

$stateProvider

  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/guidePage');

	//isFirst在guidePage中的guidePage_controller.js中
  if(localStorage["isFirst"]){
      $urlRouterProvider.otherwise('/tab/home');
  }else {
      $urlRouterProvider.otherwise('/guidePage');
  }

});


