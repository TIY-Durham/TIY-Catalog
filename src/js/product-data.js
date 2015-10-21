// Dat IIFE tho...
;(function(globals){

angular.module('data-fetch',[])

  .run(['$rootScope', function($scope){
    $scope.count = '249';
    $scope.shop_name = 'PickslaysWoodworking';
  }])

  .run([ '$rootScope','$http', function($scope, $http){
    $http.get("../../apis/etsy/listings/productpage/item100384851_images.json") // will work running html in Browser Sync
      .then(function(response){
        console.log(response);
        $scope.listingImages = response.data;

        var counter = 0;
        $('a#next').on('click', function () {
          if (counter >= 0 && counter <= 3 ) {
          counter++;
          $('img.img-active').attr("src",response.data.results[counter].url_570xN);
        }
        });
        $('a#prev').on('click', function () {
          if (counter > 0){
          counter--;
          $('img.img-active').attr("src",response.data.results[counter].url_570xN);
        }
        });
        $('li.img1').on('click', function () {
          counter = 0;
          $('img.img-active').attr("src",response.data.results[counter].url_570xN);
        });
        $('li.img2').on('click', function () {
          counter = 1;
          $('img.img-active').attr("src",response.data.results[counter].url_570xN);
        });
        $('li.img3').on('click', function () {
          counter = 2;
          $('img.img-active').attr("src",response.data.results[counter].url_570xN);
        });
        $('li.img4').on('click', function () {
          counter = 3;
          $('img.img-active').attr("src",response.data.results[counter].url_570xN);
        });
        $('li.img5').on('click', function () {
          counter = 4;
          $('img.img-active').attr("src",response.data.results[counter].url_570xN);
        });
      }, function() {
        console.log("cannot find data");
      });
    }])

    .run([ '$rootScope','$http', function($scope, $http){
      $http.get("../../apis/etsy/listings/productpage/picklays-shop-info.json")
      .success(function(data) {
        $scope.item = data;
        console.log(data);
      },
        function() {
          console.log("cannot find data");
        });
    } ]);

  // slider.controller('post-image', function($scope, $http){
  //   $http.get("../../apis/etsy/listings/productpage/item100384851_images.json") // will work running html in Browser Sync
  //   .then(function(response){
  //     $scope.item = response;
  //  }, function() {
  //     console.log("cannot find data");
  //     });
  //   });






})(window);
