angular.module('devmtnTravel').controller('locationsCtrl', function ($scope, mainSrv) {
  $scope.locations = mainSrv.travelInfo;
  console.log('$scope.locations', $scope.locations)
})
