angular.module('starter', [])
.controller('mainCtrl', function($scope, $interval){
  $scope.input = "";
  $scope.display = $scope.input;
  //$scope.seconds = 50;

  $scope.update = function(number) {
    $scope.input += number;
    $scope.display = $scope.input;
  }

  $scope.play = function() {
      $interval(function() {
      $scope.input*1;
      $scope.input-=1;
      $scope.display = $scope.input;

      console.log($scope.display);

    }, 1000);

  };

  $scope.pause = function() {
    window.clearInterval();
  }
});
