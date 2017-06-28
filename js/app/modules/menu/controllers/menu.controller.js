angular.module('angularRestaurant.menu').controller('MenuController',
  function ($uibModal) {

    var _this = this;
    _this.data = "heh"

    _this.open = function (item) {
      $uibModal.open({
        templateUrl: 'modules/home/templates/modal.html',
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
