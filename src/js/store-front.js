;(function(globals){
  var storeFront = angular.module(
    'store-module',
    [ /* list of dependencies */ ]
  ); // END module

  storeFront.run([ '$rootScope','$http', function($scope, $http){
    $http.get("../../apis/etsy/listings/productpage/picklays-shop-info.json")
    .success(function(data) {
      $scope.item = data;
      console.log(data);
    },
      function() {
        console.log("cannot find data");
      });
  } ]); // END run
})(window);
