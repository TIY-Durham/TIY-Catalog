;(function(){

  angular.module('TrendingListing', [ ])
    .run([ '$rootScope', function($scope){
       // TODO: Get this from JSON instead...


  $scope.listing =
   $.ajax("../../apis/etsy/listings/trending/trending.json").then(function(data){
    $scope.listing = data; // Shouldn't this work?
  });

  // jQuery.getJSON('/apis/etsy/listing/00000000000.json')
  //   .then(function(data){
  //     console.log(data);
  //
  //     $scope.listing = data; // Shouldn't this work?
  //   })

      // AND DON'T DELETE ANYTHING BELOW
    } ])
  ; // END module(tiy-catalog--trending)
})(); // "Simple" IIFE
