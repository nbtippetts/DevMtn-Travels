// angular.module('devmtnTravel').controller('packagesCtrl', function ($scope, mainSrv) {
//      $scope.test = 'ksjdhkjsdfhksjdhf';
//     //  $scope.travelData = mainSrv.travelInfo;
//
// })


angular.module('devmtnTravel').controller('packagesCtrl', function ($scope, mainSrv) {

      $scope.travelData = mainSrv.travelInfo;

});
