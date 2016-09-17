/**
 * Created by rkolliva
 * on 9/11/16.
 */

(function () {

  'use strict';

  angular.module("ShoppingCartApp", [])
         .controller('ToBuyShoppingController', ItemsToBuyController)
         .controller('AlreadyBoughtShoppingController', BoughtItemsController)
         .service('ShoppingListCheckOffService', ItemsService);

  var randomString = function (len) {
    var text = "";
    len = len || 10;
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < len; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    // make sure it starts with an alphabet.
    return 'a' + text;
  };

  ItemsToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ItemsToBuyController(itemsService) {
    var me = this;
    me.itemsToBuy = itemsService.getItemsToBuy();

    me.buyItem = function (index) {
      itemsService.buyItem(index);
    }
  }

  BoughtItemsController.$inject = ['ShoppingListCheckOffService'];
  function BoughtItemsController(itemsService) {
    var me = this;
    me.boughtItems = itemsService.getBoughtItems();
  }

  function ItemsService() {
    var me                      = this,
        itemsToBuy              = [],
        boughtItems             = [],
        // generate between 5 and 7 initial items
        randomCountOfItemsToBuy = Math.floor(5 + Math.random() * 2);

    for (var i = 0; i < randomCountOfItemsToBuy; i++) {
      itemsToBuy.push({
                        name: randomString(10),
                        quantity: Math.floor(Math.random() * 10) + 1
                      });
    }

    this.getItemsToBuy = function () {
      return itemsToBuy;
    };

    this.getBoughtItems = function () {
      return boughtItems;
    };

    this.buyItem = function (indexOfItem) {
      var item;
      if (indexOfItem >= 0 && indexOfItem < itemsToBuy.length) {
        item = itemsToBuy[indexOfItem];

        itemsToBuy.splice(indexOfItem, 1);
        boughtItems.push(item);
      }
    };

  }

})();
