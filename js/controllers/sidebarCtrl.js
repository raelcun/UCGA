angular.module('mainApp')
.controller('sidebarCtrl', function($scope) {
  $scope.posts = [
  {
    'title': 'LOL Tournament',
    'commentCount': 1,
    'date_day': 4,
    'date_month': 'January',
    'date_year': 2013,
    'image_path': 'img/1111.png'
  },
  {
    'title': 'Dead Space 3 Gameplay',
    'commentCount': 3,
    'date_day': 3,
    'date_month': 'January',
    'date_year': 2013,
    'image_path': 'img/51.png'
  }]
});