(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.checkIfTooMuch = function () {

    var message = "Please enter data first";

    if ($scope.lunchtext) {
      const sl = $scope.lunchtext.split(',');
      //console.log(sl, sl.length);

      if (sl.length <= 3) {
        message = "Enjoy!";
      }  else {
        message = "Too much!";
      }
    }
    $scope.message = message;
  };

}

})();
