angular.module('angularRestaurant.home').config(function ($stateProvider) {
   $stateProvider.state('home', {
     url: '/home',
     resolve: {
       SeedData: function (SeedDataFactory) {
         return SeedDataFactory.query({ filename: 'data' });
       }
     },
     data: {
       pageTitle: 'Home',
       bodyClass: 'home'
     },
     views: {
       'header': {
         controller: 'HeaderController as header',
         templateUrl: 'modules/main/templates/header.html'
       },
       'content': {
         controller: 'HomeController as home',
         templateUrl: 'modules/home/templates/home.html'
       },
       'footer': {
         controller: 'FooterController as footer',
         templateUrl: 'modules/main/templates/footer.html'
       }
     }
   });
 });
