;(function(){ // No params necessary...
  // TODO: Create a module named "tiy-catalog--trending"
  angular.module('tiy-catalog--trending', [ ])
    .run([ '$rootScope', function($scope){
      // PUT YOUR CODE IN HERE, PLEASE

      $scope.listing = {
        title: 'Something Random!',
        price: 1234.56,
        shop: {
          name: 'My Awesome Sauce'
        }
      };

      // AND DON'T DELETE ANYTHING BELOW
    } ])
  ; // END module(tiy-catalog--trending)
})(); // "Simple" IIFE
