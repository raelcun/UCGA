var mainApp = angular.module('mainApp', ['ui.router']);

mainApp
.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise(''); // default state
    
    $stateProvider
      .state('root', {
        url: '',
        abstract: true,
        views: {
          'header@': { templateUrl: 'views/partial-header.html' },
          'social-media-bar@': { templateUrl: 'views/partial-social-media-bar.html' },
          'nav@': { templateUrl: 'views/partial-nav.html' },
          'content@': { templateUrl: 'views/partial-content.html' }
        }
      })
      .state('root.home', {
        url: '/home',
        views: {
          'carousel@': { // populates carousel view in root
            templateUrl: 'views/home/partial-home-carousel.html',
            controller: 'homeCarouselCtrl'
          },
          'content.content@root': { // populates content view in root.content
            templateUrl: 'views/partial-content-content-blog.html',
            controller: 'blogContentCtrl'
          },
          'content.sidebar@root': { // populates sidebar view in root.content
            templateUrl: 'views/partial-sidebar.html',
            controller: 'sidebarCtrl'
          }
        }
      });
});