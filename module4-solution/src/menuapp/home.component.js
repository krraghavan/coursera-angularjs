(function () {
'use strict';

angular.module('menuapp')
.component('items', {
  templateUrl: 'src/menuapp/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
