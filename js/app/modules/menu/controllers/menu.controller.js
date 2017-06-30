angular.module('angularRestaurant.menu').controller('MenuController',
  function ($uibModal) {

    var vm = this;
    vm.data = "heh"

    vm.open = function (item) {
      $uibModal.open({
        templateUrl: 'js/app/modules/menu/templates/modal.html',
        controller: 'ModalController as modal',
        size: 'md',
        resolve: {
          itemResolve: function () {
            return item;
          }
        }
      });
    };

  });
