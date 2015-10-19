// Dat IIFE tho...
;(function(globals){

  var slider = angular.module(
    'slider-module',
    []
  ); // END module

  slider.run([ '$rootScope','$http', function($scope, $http){
    $http.get("../../apis/etsy/listings/productpage/item100384851_images.json") // will work running html in Browser Sync
      .success(function(data){
        $scope.listingImages = data;
      }, function() {
        console.log("cannot find data");
      });
    }]);

  // slider.controller('post-image', function($scope, $http){
  //   $http.get("../../apis/etsy/listings/productpage/item100384851_images.json") // will work running html in Browser Sync
  //   .then(function(response){
  //     $scope.item = response;
  //  }, function() {
  //     console.log("cannot find data");
  //     });
  //   });

  // var counter = 0;
  // $('a#next').on('click', function () {
  //   counter++;
  //   $('img.img-active').value('clics', function () {
  // })





})(window);
