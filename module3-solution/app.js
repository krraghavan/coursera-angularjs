/**
 * Created by rkolliva
 * on 10/2/16.
 */

(function () {

  'use strict';

  angular.module("NarrowItDownApp", [])
         .controller('NarrowItDownController', NarrowItDownController)
         .service('MenuSearchService', MenuSearchService)
         .directive('foundItems', FoundItemsDirective);

  function  FoundItemsDirective() {
    var me = this;
    return {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove:'&'
      }
    };
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var me = this;
    me.getMatchingMenuItems = function (searchTerm) {
      // return the promise.
      return $http({
                     url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
                     method: "GET"
                   })
        .then(function (results) {
          var data = results.data;
          var foundItems = [];
          data.menu_items.map(function (item, index) {
            if (item.description.indexOf(searchTerm) !== -1) {
              foundItems.push(item);
            }
          });
          return foundItems;
        });
    };
  }

  NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
  function NarrowItDownController($scope, menuSearchService) {
    var me = this,
      msg = "Nothing found";
    me.searchTerm = "";
    me.foundItems = undefined;
    me.narrowItDown = function () {
      me.foundItems = [];
      if(me.searchTerm.trim() === "") {
        me.noResults = msg;
      }
      else {
        var promise = menuSearchService.getMatchingMenuItems(me.searchTerm);
        promise.then(function (foundItems) {
          if(foundItems.length === 0) {
            me.noResults = msg;
          }
          else {
            me.noResults = undefined;
            me.foundItems = foundItems;
          }
        });
      }
    };

    me.removeItem = function(index) {
      if(index >= 0 && index < me.foundItems.length) {
        me.foundItems.splice(index, 1);
      }
      if(me.foundItems.length === 0) {
        me.noResults = "Nothing left";
      }
    };
  }

})();
