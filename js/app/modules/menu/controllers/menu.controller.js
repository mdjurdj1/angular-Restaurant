angular.module('angularRestaurant.menu').controller('MenuController',
  function ($uibModal) {

    var vm = this;
    vm.lunch_data = [ {
      "name": "Mini Chicken Quesadillas",
      "description": "2 mini chicken Quesadillas served with sour cream & salsa.",
      "price": "$6.95"
    }, {
      "name": "Boneless Chicken Crispers",
      "description": "6 pieces with your choice of breaded, Naked, or Grilled with rosemary, onions & sauce.",
      "price": "$8.25"
    }, {
      "name": "Empanadas (2)",
      "description": "Deep fried Empanadas stuffed with your choice of beef or cheese",
      "price": "$5.95"
    } ]


    vm.open_lunch = function (item) {
      $uibModal.open({
        templateUrl: 'js/app/modules/menu/templates/modal.html',
        controller: 'ModalController as modal',
        size: 'lg',
        resolve: {
          itemResolve: function () {
            return item;
          }
        }
      });
    };

    vm.open_dinner = function (item) {
      $uibModal.open({
        templateUrl: 'js/app/modules/menu/templates/modal.html',
        controller: 'ModalController as modal',
        size: 'lg',
        resolve: {
          itemResolve: function () {
            return item;
          }
        }
      });
    };

  });
