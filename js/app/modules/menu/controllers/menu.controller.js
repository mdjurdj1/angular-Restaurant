angular.module('angularRestaurant.menu').controller('MenuController',
  function ($uibModal) {

    var vm = this;

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
