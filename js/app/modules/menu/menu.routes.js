angular.module('angularRestaurant.menu').config(function($stateProvider) {
   $stateProvider.state('menu', {
     url: '/menu',
     data: {
        pageTitle: 'Home',
        access: 'private',
        bodyClass: 'home'
      },
     views: {
       'header': {
         controller: 'HeaderController as header',
         templateUrl: 'js/app/modules/main/templates/header.html'
       },
       'content': {
         controller: 'MenuController as menu',
         templateUrl: 'js/app/modules/menu/templates/menu.html'
       },
       'footer': {
         controller: 'FooterController as footer',
         templateUrl: 'js/app/modules/main/templates/footer.html'
       }
     }
   });
 });
