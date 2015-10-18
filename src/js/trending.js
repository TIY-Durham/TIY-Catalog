;(function(){

var app = angular.module("trending", [ ]);

  app.controller('ImageController', ['$http', '$scope', function($http, $scope){

    $http.get("../apis/etsy/listings/productpage/images.json")
     .then(function(data){

       $scope.results = data;

       console.log(data);
     });



      //  $scope.results = "url_570xN";

      // "url_570xN": "https://img0.etsystatic.com/058/0/6292388/il_570xN.736798362_jvz2.jpg",



      // AND DON'T DELETE ANYTHING BELOW
    }] ) // END CONTROLLER
  ; // END module(tiy-catalog--trending)
})(); // "Simple" IIFE
