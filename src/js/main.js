(function() {

//controller for the item-tabs area of the Listing/Product page
$("nav#item-tabs a").click(function(){
  $(this).addClass("active").siblings().removeClass("active");
  $("section.tabs").removeClass("active");
  $($(this).attr("href")).addClass("active");
  // .siblings().removeClass("active");
});


})();
