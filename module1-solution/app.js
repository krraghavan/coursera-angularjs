/**
 * Created by rkolliva
 * on 9/11/16.
 */

(function() {

  'use strict';

  angular.module("LunchCheck", [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchList = "";
    $scope.message = "";

    $scope.checkLunchList = function() {
      console.log("Checking lunch list");
      $scope.message = validateInput($scope.lunchList);
    };

    function validateInput(value) {
      var redBorder =  "border:1px solid red;",
          greenBorder =  "border:1px solid green;",
          redFont = "color:red;",
          greenFont = "color:green";

      if(value.trim() === '') {
        return {
          text : "Please enter data first",
          borderStyle : redBorder,
          fontColor : redFont
        };
      }
      var itemList = value.split(",");
      console.log(itemList);
      // ignore empty items in list.
      var totalItemCount = 0;
      itemList.map(function(item, index) {
        if(item.trim() !== "") {
          totalItemCount++;
        }
      });
      /// RETURNING FONT AND COLOR FOR BONUS PORTION.
      if(totalItemCount === 0) {
        return {
          text : "Please enter data first (all entries were blank)",
          borderStyle : redBorder,
          fontColor : redFont
        };
      }
      else if(totalItemCount <= 3) {
        return {
          text: "Enjoy!",
          borderStyle : greenBorder,
          fontColor : greenFont
        };
      }
      else {
        return {
          text: "Too  much!",
          borderStyle : greenBorder,
          fontColor : greenFont
        };
      }
    }
  }

})();
