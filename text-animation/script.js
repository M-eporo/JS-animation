function slideAnime(){
  $(".leftAnime").each(function(){
    const elmPosition = $(this).offset().top-50;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();

    if(scroll >= elmPosition - windowHeight) {
      $(this).addClass("slideAnimeLeftRight");
      $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");
    } else {
      $(this).removeClass("slideAnimeLeftRight");
      $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
    }
  });
}

$(window).on("scroll",slideAnime);