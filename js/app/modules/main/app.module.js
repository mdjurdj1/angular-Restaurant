var app = angular.module('app', [
  'angularRestaurant.core',
  'angularRestaurant.home',
  'angularRestaurant.menu'
]);

angular.module('app').config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
});
