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

});
// When you click on the favorite button, icon turns red
$('.favorite-button').on('click', function(){
  $(this).toggleClass('user-favorite');

});
})(); //end IIFE
