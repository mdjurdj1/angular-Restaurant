angular.module('angularRestaurant.menu').controller('ModalController', function ($uibModalInstance, itemResolve) {

  var vm = this;

  vm.item = itemResolve;

  vm.close = function () {
    $uibModalInstance.close();
  };

});
