angular.module('devmtnTravel').controller('bookedCtrl', function ($scope, mainSrv, $stateParams) {

  findBookedPackage();

      function findBookedPackage() {
          mainSrv.packageInfo.forEach(function(package) {
              if (package.id == $stateParams.id) {
                  $scope.bookedPackage = package;
              }
          });
      }

});
