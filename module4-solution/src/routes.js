(function () {
  'use strict';

  angular.module('menuapp')
         .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
      })

      //// Premade list page
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/menuapp/templates/main-categories.template.html',
        controller: 'CategoriesController as vm',
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }
          ]
        }
      })
      //
      //// Item detail
      .state('categoryDetail', {
        url: '/categoryDetail/{categoryId}',
        templateUrl: 'src/menuapp/templates/menu-items.template.html',
        controller: 'CategoryDetailController as vm',
        params: {
          categoryId: null
        },
        resolve : {
          menuItems : ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryId);
          }]
        }
      });

  }

})();
