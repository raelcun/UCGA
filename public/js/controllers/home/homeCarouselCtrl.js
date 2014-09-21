angular.module('mainApp')
.controller('homeCarouselCtrl', function($scope) {
  $scope.slides = [
    {
      'image_path': 'img/31.png',
      'image_thumb': 'img/31s.png',
      'title': 'About',
      'desc': 'Lorem ipsum dolor sit',
      'show_nav': true
    },
    {
      'image_path': 'img/32.png',
      'image_thumb': 'img/32s.png',
      'title': 'Projects',
      'desc': 'Lorem ipsum dolor sit',
      'show_nav': true
    },
    {
      'image_path': 'img/31.png',
      'image_thumb': 'img/31s.png',
      'title': 'About',
      'desc': 'Lorem ipsum dolor sit',
      'show_nav': false
    },
    {
      'image_path': 'img/32.png',
      'image_thumb': 'img/32s.png',
      'title': 'Projects',
      'desc': 'Lorem ipsum dolor sit',
      'show_nav': false
    }
  ];
});