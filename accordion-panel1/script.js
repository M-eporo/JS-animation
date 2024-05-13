$(".title").on("click", function() {
  const findElm = $(this).next(".box");
  $(findElm).slideToggle();
    
  if($(this).hasClass("close")){
    $(this).removeClass("close");
  }else{
    $(this).addClass("close");
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
