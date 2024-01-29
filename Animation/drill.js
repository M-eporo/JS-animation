// スクロールすると順番に要素が出現
function delayScroll(){
  const time = 0.4;
  let delay = time;

  $(".delayScroll").each(function() {
    const elemPos = $(this).offset().top;
    let height = $(window).height();
    let scroll = $(window).scrollTop();

    const parent = this;
    const children = $(parent).children();

    if(scroll >= elemPos - height $$ !$(parent).hasClass("play"){
      $(".children").each(function(){
        if(!$(this).hasClass("fadeUp")) {
          $(parent).addClass("play");
          $(this).css("animation-delay", `${delay}s`).addClass("fadeUp");
          delay += time;

          let index = $(children).index(this);
          if($(children).length - 1 === index) {
            $(parent).removeClass("play");
          }
        }
      });
    } else {
      $(children).removeClass("fadeUp");
      delay = time;  
    }
  });
}
