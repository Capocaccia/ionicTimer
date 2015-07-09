angular.module('starter', [])
.controller('mainCtrl', function($scope, $interval, $timeout){
  $scope.input = "";
  $scope.display = $scope.input;
  //$scope.seconds = 50;

  $scope.update = function(number) {
    $scope.input += number;
    $scope.display = $scope.input;
  }

  $scope.play = function() {
      if($scope.input >= 1) {
      $interval(function() {
      $scope.input*1;
      $scope.input-=1;
      $scope.display = $scope.input;

      console.log($scope.display);

    }, 1000);
    }
    else if($scope.input = 0) {
      $interval.cancel(stop);
    }
  };

  $scope.pause = function() {
    window.clearInterval();
  }
});
