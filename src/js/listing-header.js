;(function(){ // IIFE
  var app = angular.module('listing-header', [ ]); // End module

  app.run(['$rootScope', function($scope){
    $scope.count = '249';
    $scope.shop_name = 'PickslaysWoodworking';
  }]);
})(); // End IIFE
