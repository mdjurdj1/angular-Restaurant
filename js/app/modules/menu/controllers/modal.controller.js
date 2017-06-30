angular.module('angularRestaurant.menu').controller('ModalController', function ($uibModalInstance, itemResolve) {

  var vm = this;
  vm.item = itemResolve

  vm.lunch_data = [ {
    "name": "Mini Chicken Quesadillas",
    "image": "http://ot-foodspotting-production.s3.amazonaws.com/reviews/2889450/thumb_275.jpg?1356144144",
    "description": "2 mini chicken Quesadillas served with sour cream & salsa.",
    "price": "$6.95"
  }, {
    "name": "Boneless Chicken Crispers",
    "image": "https://spicysouthernkitchen.com/wp-content/uploads/chicken-crispers-3-300x300.jpg",
    "description": "6 pieces with your choice of breaded, Naked, or Grilled with rosemary, onions & sauce.",
    "price": "$8.25"
  }, {
    "name": "Empanadas (2)",
    "image": "http://cookdiary.net/wp-content/uploads/images/Empanadas_5538.jpg",
    "description": "Deep fried Empanadas stuffed with your choice of beef or cheese",
    "price": "$5.95"
  }, {
    "name": "Bacon Cheeseburger and Fries",
    "image": "https://m.texasroadhouse.com/sf-images/default-source/mobile-app-menu/burgers-and-sandwiches/bacon-cheeseburger.jpg?sfvrsn=2",
    "description": "A delicious burger topped with carmelized onions, applewood bacon, and a side of fresh french fries!",
    "price": "$5.95"
  }
 ]

  vm.close = function () {
    $uibModalInstance.close();
  };

});
