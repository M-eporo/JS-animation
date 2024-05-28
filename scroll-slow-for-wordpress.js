$(function(){
  $("a[href*='http://domain.local/#']").on("click", function() {
    const href = $(this).attr("href");
    let num = href.indexOf("#");
    let str = href.slice(num);
    let $target;
    if(href === -1){
      $target = $("html");
    } else {
      $target = $(`${str}`);
    }
    $("html, body").animate({
      scrollTop: $($target).offset().top
    }, 600, "swing");	
    return false;
  });
});
