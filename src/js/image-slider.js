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

        var counter = 0;
        $('a#next').on('click', function () {
          if (counter >= 0 && counter <= 3 ) {
          counter++;
          $('img.img-active').attr("src",data.results[counter].url_570xN);
        }
        });
        $('a#prev').on('click', function () {
          if (counter > 0){
          counter--;
          $('img.img-active').attr("src",data.results[counter].url_570xN);
        }
        });
        $('li.img1').on('click', function () {
          counter = 0;
          $('img.img-active').attr("src",data.results[counter].url_570xN);
        });
        $('li.img2').on('click', function () {
          counter = 1;
          $('img.img-active').attr("src",data.results[counter].url_570xN);
        });
        $('li.img3').on('click', function () {
          counter = 2;
          $('img.img-active').attr("src",data.results[counter].url_570xN);
        });
        $('li.img4').on('click', function () {
          counter = 3;
          $('img.img-active').attr("src",data.results[counter].url_570xN);
        });
        $('li.img5').on('click', function () {
          counter = 4;
          $('img.img-active').attr("src",data.results[counter].url_570xN);
        });





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






})(window);
