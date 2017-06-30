angular.module('angularRestaurant.menu').controller('ModalController', function ($uibModalInstance, itemResolve) {

  var vm = this;
  vm.item = itemResolve

  vm.lunch_data = [ {
    "name": "Mini Chicken Quesadillas",
    "image": "http://ot-foodspotting-production.s3.amazonaws.com/reviews/2889450/thumb_275.jpg?1356144144",
    "description": "2 mini chicken Quesadillas served with sour cream & salsa. Enjoy with guacamole and a side of cheesy nachos!",
    "price": "$6.95"
  }, {
    "name": "Boneless Chicken Crispers",
    "image": "https://spicysouthernkitchen.com/wp-content/uploads/chicken-crispers-3-300x300.jpg",
    "description": "6 pieces with your choice of breaded, Naked, or Grilled with rosemary, onions & sauce.",
    "price": "$8.25"
  }, {
    "name": "Bacon Cheeseburger and Fries",
    "image": "https://m.texasroadhouse.com/sf-images/default-source/mobile-app-menu/burgers-and-sandwiches/bacon-cheeseburger.jpg?sfvrsn=2",
    "description": "A delicious burger topped with carmelized onions, applewood bacon, and a side of fresh french fries!",
    "price": "$5.95"
  }
 ]

 vm.dinner_data = [ {
   "name": "8oz. and 10oz. Flat Iron Steak",
   "image": "http://swansonnatural.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/l/flat_iron_cooked.png",
   "description": "Your choice of either an 8oz or a 10oz USDA choice Flat Iron steak,  broiled over open flame to enhance its flavors.",
   "price": "$15.95"
 }, {
   "name": "Chicken Parmesan",
   "image": "https://i.ytimg.com/vi/FHMZcoi6hL8/maxresdefault.jpg",
   "description": "Chicken cutlets, breaded and fried, smothered with tomato sauce, covered with Mozzarella and Parmesan cheeses, and baked until the cheese melts over.",
   "price": "$12.25"
 }, {
   "name": "Tiramisu",
   "image": "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/2/RX-FNM_030111-Sugar-Fix-005_s4x3.jpg.rend.hgtvcom.616.462.jpeg",
   "description": "A delicious custard dessert. It is made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa.",
   "price": "$5.95"
 }
]

  vm.close = function () {
    $uibModalInstance.close();
  };

});
