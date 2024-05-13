$(function() {
  $(".btn").on("click", function() {
    $(this).toggleClass("open");
    $(".mask").toggleClass("open");
  });
});
