$(".title").on("click", function() {
  $(".box").slideUp(500);
    
  const findElm = $(this).next(".box");
    
  if($(this).hasClass("close")){
    $(this).removeClass("close");
  }else{
    $(".close").removeClass("close");
    $(this).addClass("close");
    $(findElm).slideDown(500);く
  }
});

/*
$(window).on("load", function(){
  $(".accordion-area li:first-of-type section").addClass("open");
  $(".open").each(function(index, element){
    const title =$(element).children(".title");
    $(title).addClass("close");
    const box =$(element).children(".box");
    $(box).slideDown(500);
  });
});
*/
