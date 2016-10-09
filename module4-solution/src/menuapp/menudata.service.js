(function () {
  'use strict';

  angular.module('data')
         .service('MenuDataService', MenuDataService);


  MenuDataService.$inject = ['$q', '$http'];

  function MenuDataService($q, $http) {

    var me = this;

    me.getAllCategories = function() {
      return $http({
                     url: 'https://davids-restaurant.herokuapp.com/categories.json',
                     method: "GET"
                   })
        .then(function (results) {
          return results.data;
        })
      };

    me.getItemsForCategory = function(category) {
      return $http({
                     url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category='+category,
                     method: "GET"
                   })
        .then(function (results) {
          return results.data;
        })

    };

  }

})();
