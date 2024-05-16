$(function(){
  let status = true;
  $(".btn").on("click", function(){
    if(status){
      $(".box").animate({
        backgroundColor: "#000",
        color: "#fff",
        width: "100%",
      }, 1000, "swing");
    } else {
      $(".box").animate({
        backgroundColor: "#fff",
        color: "#000",
        width: "50%",
      }, 1000, "swing");
    }
    status = !status;
  });
});