function scrollAnimation(){
  const parent = $(".randomWrapper");
  const children = $(".randomWrapper").children();
  randomAnimation();
  function randomAnimation() {
    const position = $(parent).offset().top;
    let height = $(window).height();
    let scroll = $(window).scrollTop();
    if(scroll >= position - height) {
      if(children.length > 0){
        let rnd = Math.floor(Math.random() * children.length);
        if(animeFlag){
          animeFlag = false;			
          $(children[rnd]).addClass("fadeIn");			
          setTimeout(() => {
            animeFlag = true;
            randomAnimation();
          }, 1000);
          children.splice(rnd, 1);
        }
      } else {
      animeFlag = true;	
      }
    }
  }
}
let animeFlag = true;
$(window).on("scroll", function() {
  scrollAnimation();
});

$(window).trigger("scroll");
