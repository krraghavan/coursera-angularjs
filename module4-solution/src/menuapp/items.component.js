(function () {
  'use strict';

  angular.module('menuapp')
         .component('mitems', {
           templateUrl: 'src/menuapp/templates/items.template.html',
           bindings: {
             menuItems: '<'
           }
         });

})();
