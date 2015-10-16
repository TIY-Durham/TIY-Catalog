
// When you click on the collection button, menu drops down
$('.collect-button').on('click', function(){
  $('.collect-drop-down').toggleClass('show');

});



// When you click on the favorite button, icon turns red
$('.favorite-button').on('click', function(){
  $(this).toggleClass('user-favorite');

});
