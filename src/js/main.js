(function() {
  //controller for the item-tabs area of the Listing/Product page
  $("nav#item-tabs a").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $("section.tabs").removeClass("active");
    $($(this).attr("href")).addClass("active");
  });


  // When you click on the collection button, menu drops down
  $('.collect-button').on('click', function(){
    $('.collect-drop-down').toggleClass('show');
    $('.add-to-list').removeClass('active');
  });

  // When you click on the favorite button, icon turns red
  $('.favorite-button').on('click', function(){
    $(this).toggleClass('user-favorite');
  });

  // When you click on the drop down input field, add button appears
  $('input.list-text').on('click', function(){
    $('.add-to-list').addClass('active');
  });
})(); //end IIFE

(function(){ // IIFE for Angular JS!
  angular.module('TIY-Catalog', [ 'ngRoute' ], function($routeProvider){
    $routeProvider
      .when('/signup', {
        templateUrl: 'registration-form.html',
        controller: function(){
           var signup = this;

           signup.user = { };

           signup.createUser = function(){
             console.log('CREATE THE USER!');
           }
        },
        controllerAs: 'signup'
      })
      .when('/trending', { // route
        // controller: 'name of a controller' || function(){ },
        // controllerAs: 'identifier name for controller?',
        // template: 'string HTML template' || function(){
        //   return 'an HTML template';
        // },
        // templateUrl: 'string path' || function(){
        //   return 'string path';
        // },
        templateUrl: 'trending.html'
        // resolve: see documentation?
        // redirectTo: 'string path' || function(){
        //   return 'string path'
        // }
      }) // END when(path, route)
      .when('/listing/:listing_id', {
        templateUrl: 'product.html',
        controller: function($routeParams){
          // $route.current.params.listing_id
          console.log($routeParams.listing_id);
        }
      })

  });

  angular.module('TIY-Catalog')
    .config(function($routeProvider){
      $routeProvider
    });
})(); // END IIFE













/* WHY YOU NO LIKE EXTRA LINES ATOM!? */
