(function () {
'use strict';

angular.module('menuapp')
.controller('CategoriesController', CategoriesController);

// Version with resolving to 1 item based on $stateParams in route config
CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var me = this;
  me.categories = categories;

  me.getCategories = function() {
    return me.categories;
  }
}

})();
