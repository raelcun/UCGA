angular.module('mainApp')
.controller('blogContentCtrl', function($scope) {
  $scope.posts = [
  {
    'title': 'LOL Tournament',
    'commentCount': 1,
    'date_day': 4,
    'date_month': 'January',
    'date_year': 2013,
    'author': 'admin',
    'content': 'Integer tincidunt tellus ut metus viverra ac sodales odio vulputate. Ut id erat neque, sit amet tristique erat. Vivamus in turpis orci, et volutpat purus. Vestibulum lacinia, arcu id varius eleifend, eros lorem iaculis massa, vitae consequat enim diam eget massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ...',
    'image_path': 'img/1111.png'
  },
  {
    'title': 'Dead Space 3 Gameplay',
    'commentCount': 3,
    'date_day': 3,
    'date_month': 'January',
    'date_year': 2013,
    'author': 'admin',
    'content': 'Integer tincidunt tellus ut metus viverra ac sodales odio vulputate. Ut id erat neque, sit amet tristique erat. Vivamus in turpis orci, et volutpat purus. Vestibulum lacinia, arcu id varius eleifend, eros lorem iaculis massa, vitae consequat enim diam eget massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ...',
    'image_path': 'img/51.png'
  }]
});