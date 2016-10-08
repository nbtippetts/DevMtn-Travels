angular.module('devmtnTravel').controller('bookedCtrl', function ($scope, $stateParams, mainSrv) {

  $scope.location = mainSrv.getLocation($stateParams.id);

});
