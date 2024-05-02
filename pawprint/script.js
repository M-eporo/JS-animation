const container = $(".container");
const target = $(".target");
console.log(target);
const diff = 30;
let id = 1;
let position = 0;
const elem = $("body").append($("<div class='target'></div>"));
elem.id = id;

$(window).on("scroll", function(){
  let height = $(window).height();
  let scroll = $(window).scrollTop();
  let point = 500;

  if(scroll >= point){
    elem.css({
      top: scroll + 10,
      display: block,
    });
});




  
async function aFn(){
  for(let i = 0; i < 5; i++){
  const p1 = await fn1();
  const p2 = await fn2();
  const p5 = await fn1();
  const p3 = await fn3();
  const p4 = await fn4();
  const p6 = await fn2();
  }
}
aFn();

function fn1(){
  return new Promise(resolve => {
    setTimeout(() => {
      target.fadeOut(1000);
      fn2();
      resolve();
    }, 1000);
  });
}

function fn2(){
  return new Promise(resolve => {
    setTimeout(() => {
      target.fadeIn(1000);
      resolve();
    }, 1000);
  });
}
function fn3(){
  
  return new Promise(resolve => {
    setTimeout(() => {
      target.animate({
        left: position += diff,
      }, 600, "linear");
      resolve();
    }, 500);
  });
}

function fn4(){
  return new Promise(resolve => {
    setTimeout(() => {
      target.css("transform", "rotate(90deg)");
      resolve();
    }, 500);
  });
}