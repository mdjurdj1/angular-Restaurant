var app = angular.module('app', [
  'angularRestaurant.core',
  'angularRestaurant.home'
]);

angular.module('app').config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
});
