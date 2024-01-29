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

function moveAnimation() {
  // on loading : 
  const randomElm = $(".randomBox");
  const randomElmChild = $(".randomBox").children();
  if(!$(randomElm).hasClass("play")) {
    randomAnime();
  }

  function randomAnime() {
    $(randomElm).addClass("play");
    let rnd = Math.floor(Math.random() * $(randomElmChild).length);
    let moveData = "fadeUp";
    $(randomElmChild[rnd]).addClass(moveData);
    randomElmChild.splice(rnd,1);

    if(radomElmChild.length === 0){
      $(rndElm).removeClass("play");
    } else {
      setTimeout(( ) => randomAnime(), 500);
    }
  }

  // on scroll : 
  

  
}
