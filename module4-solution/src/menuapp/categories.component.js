/**
 * Created by rkolliva
 * on 10/9/16.
 */

(function () {
  'use strict';

  angular.module('menuapp')
         .component('categories', {
           templateUrl: 'src/menuapp/templates/categories.template.html',
           bindings: {
             'items': '<'
           }
         });

})();