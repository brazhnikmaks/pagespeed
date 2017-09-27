$(document).ready(function () {

$('a.btn,a.btn2').click(function() {
  $("html, body").animate({
  scrollTop: $("#order").offset().top - 300
  }, 1000);
  return false;
});

});
