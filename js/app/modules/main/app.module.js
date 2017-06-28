var app = angular.module('app', ['angularRestaurant.core']);

angular.module('app').config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
});
