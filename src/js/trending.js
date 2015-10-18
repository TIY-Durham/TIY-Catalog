;(function(){

  var app = angular.module("trending", [ ]);

  app.controller('TrendingController',[ '$http', '$scope', function($http, $scope){
       // TODO: Get this from JSON instead...

 $http.get("../apis/etsy/listings/productpage/images.json")
  .then (function(data){

    $scope.images = {

      "url_570xN": "https://img0.etsystatic.com/058/0/6292388/il_570xN.736798362_jvz2.jpg"
    };


    $scope.results = {
      "title": "one-custom-engraved-wooden-guitar-pick",
      "price": "8.50",
      "shop_name": "PickslaysWoodworking"

    };

    console.log(data); // logs images.json

  }); // END $HTTP






      // AND DON'T DELETE ANYTHING BELOW
    } ])
  ; // END module(tiy-catalog--trending)
})(); // "Simple" IIFE
