angular.module('angularRestaurant.home').config(function($stateProvider) {
   $stateProvider.state('home', {
     url: '/home',
     views: {
       'content': {
         controller: 'HomeController as home',
         templateUrl: 'js/app/modules/home/templates/home.html'
       },
       'footer': {
         controller: 'FooterController as footer',
         templateUrl: 'js/app/modules/main/templates/footer.html'
       }
     }
   });
 });
