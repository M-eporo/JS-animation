const $slide = $(".items");
const $item = []
const itemCount = $slide.children().length;
let index = 0;
let running = false;
const $ul = $("<ul>").appendTo($(".slider"));
$ul.addClass("dot-btn");

for(let i = 0; i < itemCount; i++){
  $item.push($slide.children().eq(i));
  $item[i].prop("id",i);
  $ul.append($("<li>"));
  $ul.children().eq(i).prop("id", i);
}

function ordering(prev){
  if(prev){
    console.log(prev);
  } else {
    $item[index].remove().appendTo($slide);
    
    if (index === itemCount - 1) {
      index = 0;
    }else{
      index += 1;
    }
  }
  $slide.css("left", "-100%");
}



$(".btn").on("click", function(){
  ordering(false);
});