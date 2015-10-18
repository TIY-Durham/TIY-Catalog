
var imagesAPI = "../../apis/etsy/listings/productpage/item100384851_images.json";
var numImages = imagesAPI.count;
console.log (numImages);


$.ajax({
    url: imagesAPI,
    dataType: 'jsonp',
    success: function( json )
    {
        $('#avatar').attr("src", json.avatar_url );
        $('h1').text( json.name );
        $('h2').text( json.login );
        $('#company').text( json.company );
        $('#location').text( json.location);
        $('#blog').text( json.blog);
        $('#email').text( json.email );
        $('#created-at').text( json.created_at );
        $('#followers').text( json.followers);
        $('#starred').text( json.starred );
        $('#following').text( json.following );

        // using custom template delimiters
        _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
        var name = _.template('{{name}}');
        name(json);
        // → 'hello mustache!'

    }
});

// Dat IIFE tho...
;(function(globals){
  var module = angular.module(
    'module-name',
    [ /* list of dependencies */ ]
  ); // END module

  module.run([ '$rootScope',
    function($scope){
      $scope.goodbye = 'Goodbye, cruel world!';
    }
  ]);

  module.run([ '$rootScope', function($s){
    $s.user = {
      name: 'The Octocat',
      login: 'octocat',
      location: 'The Internet'
    };
  } ]); // END run
})(window);
