(function () {
  'use strict';

      angular
        .module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

      LunchCheckController.$inject = ['$scope'];

      function LunchCheckController($scope) {
          $scope.lunchMenu = "";
          $scope.checkIfTooMuch = function () {
            $scope.feedback = checkMenu($scope.lunchMenu);
          };
      }

      var comma = ',';
      var empty = "";
      var threashold = 3;
      var noMenuString = "Please enter data first";
      var tooMuchFood = "Too much!";
      var justEnoughFood = "Enjoy!"


      function checkMenu (menu){
          if (menu == empty){
             return noMenuString;
          }
          else {
            var listOfItems = menu.split(comma);

            if (listOfItems.length <= threashold)
            {
               return justEnoughFood
            }
            else {
              return tooMuchFood;
            }
          }
        }
})();
