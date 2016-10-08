angular.module('devmtnTravel').controller('locationsCtrl', function ($scope, mainSrv) {

      $scope.travelData = mainSrv.travelInfo;

});
