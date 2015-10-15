(function() {

//controller for the item-tabs area of the Listing/Product page
$("nav#item-tabs a").click(function(){
  $(this).addClass("active").siblings().removeClass("active");
  var text = $(this).attr("href");
  console.log(text);
  $($(this).attr("href")).addClass("active").siblings().removeClass("active");
});


})();
