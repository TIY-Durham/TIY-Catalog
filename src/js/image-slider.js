// Dat IIFE tho...
;(function(globals){

  var slider = angular.module(
    'slider-module',
    []
  ); // END module

  // slider.run([ '$rootScope', function($s, $http){
  //   $http.get("../../apis/etsy/listings/productpage/item100384851_images.json") // will work running html in Browser Sync
  //     .then(function(response){
  //       $s.item = response;
  //     });
  //   }]);

  slider.controller('post-image', function($scope, $http){
    $http.get("../../apis/etsy/listings/productpage/item100384851_images.json") // will work running html in Browser Sync
    .then(function(response){
      // slider.run([ '$rootScope', function(){
      $scope.item = response;
    // }]); //END run
   }, function() {
      console.log("cannot find data");
 }); // END then
 }); // END then
})(window);
