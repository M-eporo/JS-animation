// a要素のopacity
$("a").on( {
  mouseenter: function() {
    $(this).animate( {
      opacity: 0.5,
    }, 500);
  },
  mouseleave: function() {
    $(this).animate( {
      opacity: 1.0,
    }, 500);
  }
});
// カルーセル
$(".carousel").slick({
  autoplay: true,
  dots: true,
  fade: true,
  infinite: true,
  autoplaySpeed: 3000,
  arrows: false,
});

// スクロールした時にTOPボタンが出る。
$(window).on("scroll", function(event) {
  let scroll = $(window).scrollTop();
  let height = $(window).height();
  const elemPos = $("#about").offset().top + 100;

  if(scroll >= elemPos - height) {
    
    $(".top-btn").animate({
      opacity: 1,
    },10, "linear");
  
  } else {

    $(".top-btn").animate({
      opacity: 0,
    },10, "linear");
  }
});

// ページ内リンクのスクロールを滑らかにする
$("a[href^='#']").click(function() {
  const speed = 500;
  const href = $(this).attr("href");
  let $target;
  if(href == "#"){
    $target = $("html");
  } else {
    $target = $(href);
  }

  const position = $target.offset().top;
  $("html, body").animate({
    "scrollTop": position,
  }, speed, "swing");
  return false;
});
  
// スクロール時にセクションをフェードインさせる
$(window).scroll(function() {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();

  $("section").each(function() {
    const position = $(this).offset().top;
    if(scrollAmount > position - windowHeight + 100) {
      $(this).addClass("fade-in");
    }
  });
});

$(".works img").click(function() {
  const imgSrc = $(this).attr("src");
  $(".big-img").attr("src", imgSrc);
  $(".modal").fadeIn();
  return false;
});

$(".close-btn").click(function() {
  $(".modal").fadeOut();
  return false;
});