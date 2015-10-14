;(function(){ // No params necessary...
  // TODO: Create a module named "tiy-catalog--trending"
  angular.module('tiy-catalog--trending', [ ])
    .run([ '$rootScope', function($scope){
      // PUT YOUR CODE IN HERE, PLEASE

      /* // TODO: Get this from JSON instead...
      $scope.listing = {
        title: 'Something Random!',
        price: 1234.56,
        shop: {
          name: 'My Awesome Sauce'
        }
      }; */

      jQuery.getJSON('/apis/etsy/listing/00000000000.json')
        .then(function(data){
          console.log(data);

          $scope.listing = data; // Shouldn't this work?
        })

      // AND DON'T DELETE ANYTHING BELOW
    } ])
  ; // END module(tiy-catalog--trending)
})(); // "Simple" IIFE
