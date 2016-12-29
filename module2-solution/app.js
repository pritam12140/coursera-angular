(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuy = this;
  tobuy.toBuy= ShoppingListCheckOffService.toBuy;
  tobuy.operations =function (item) {
  ShoppingListCheckOffService.addItem(item);
  ShoppingListCheckOffService.removeItem(item);
}
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.Bought=ShoppingListCheckOffService.Bought;

}


 function ShoppingListCheckOffService() {
 var service = this;

 service.toBuy = [
 {
   name: "ColdDrink",
   quantity: "2"
 },
 {
   name: "Chocolates",
   quantity: "6"
 },
 {
   name: "Cookies",
   quantity: "300"
 },
 {
   name: "Cocktail",
   quantity: "5"
 },
 {
   name: "Mocktail",
   quantity: "6"
 },
 {
   name: "Cadburry",
   quantity: "9"
 },
 {
   name: "Milk",
   quantity: "69"
 }

 ];

 service.Bought = [];


service.addItem = function (item) {
    var toAdd= {
      name: item.name,
      quantity: item.quantity
    };
    service.Bought.push(toAdd);
  };

  service.removeItem = function (item) {
  var index = service.toBuy.indexOf(item);
service.toBuy.splice(index, 1);
};

};//end of Service
})();
