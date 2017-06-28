angular.module('angularRestaurant.home').controller('HomeController',
  function ($log, SeedData, $uibModal) {

    var _this = this;
    _this.data = SeedData;

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
