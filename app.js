HTMLJSCSS
(function() {
  'use strict';

  angular.module('myapp', ["ui.router",'ngMaterial'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	   /** @define states */
	   $stateProvider

		   /* configure employeeForm state */
		   .state('main', {
			   url: '/',
			//    controller: 'employeeFormController',
			   templateUrl: 'templates/home.html'
		   }).state('main.home', {
			   url: '/home',
			//    controller: 'employeeFormController',
			   templateUrl: 'templates/home.html'
		   })
		   .state('main.contact', {
			   url: '/home',
			//    controller: 'employeeFormController',
			   templateUrl: 'templates/contact.html'
		   })
		   .state('main.country', {
			   url: '/country',
			//    controller: 'employeeFormController',
			   templateUrl: 'templates/country.html'
		   })
		$urlRouterProvider.otherwise('/home');
	   }});

	  .controller('AppCtrl', AppCtrl);

  function AppCtrl($scope) {
	$scope.currentNavItem = 'page1';
  }
})();
