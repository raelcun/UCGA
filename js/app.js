var routerApp = angular.module('mainApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home'); // default state
    
    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          'content': { templateUrl: 'views/partial-home.html' }
        }
      });
});