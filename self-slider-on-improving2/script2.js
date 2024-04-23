const $slide = $(".items");
const $item = []
const itemCount = $slide.children().length;
let index = 0;
let running = false;
const $dotBtn = $("<ul>").appendTo($(".slider"));
$dotBtn.addClass("dot-btn");
 
for(let i = 0; i < itemCount; i++){
  $item.push($slide.children().eq(i));
  $item[i].prop("id",i);
  $dotBtn.append($("<li>"));
  $dotBtn.children().eq(i).prop("id", i);
  $dotBtn.children().eq(i).text("O");
}
function slider(pre, position){
  running = true;
  
  let offset = pre ? 0 : "-200%";
  $slide.animate({
    left: offset,
  }, 600, "swing", function(){
    ordering(pre);
    running = false;
  });
}
function ordering(pre, val){
  if(pre){
    let num = index === 0 ? itemCount - 1 : index - 1;
    $item[num].remove().prependTo($slide);
    $dotBtn.children().eq(num + 1).css("color", "red");
    index = num;
  } else {
//indexとitem[index]は同一
    $item[index].remove().appendTo($slide);
    if (index === itemCount - 1) {
      index = 0;
    }else{
      index += 1;
    }
  }
  $slide.css("left", "-100%");
  
}

//let interval = setInterval(slider, 1000);

$(".button").on("click", function(){
  if(running) return;
  //clearInterval(interval);
  let pre = $(this).is(".pre") ? true : false;
  slider(pre);
});

$(".btn").on("click", function(){
  ordering(false);
});

$dotBtn.on("click", "li", function(){
  const targetId = $(this).prop("id");
  console.log(targetId);
  const targetElem = $slide.find("#" + targetId);
  //画像とドットボタンのIDに対応する画像の位置
  const position = $slide.children().siblings("#" + targetId).index();
  console.log(position);	
  slider(position);
});