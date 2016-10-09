/**
 * Created by rkolliva
 * on 10/9/16.
 */

(function() {
  angular.module('menuapp')
    .controller('CategoryDetailController', CategoryDetailController);

  CategoryDetailController.$inject = ['$stateParams', 'menuItems'];
  function CategoryDetailController($stateParams, menuItems) {
    var me = this;
    me.menuItems = menuItems.menu_items;
    me.selectedCategory = $stateParams.categoryId;

    me.getMenuItems = function() {
      return me.menuItems;
    }
  }
})();