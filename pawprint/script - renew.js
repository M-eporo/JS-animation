const container = $(".container");
let i = 1;
let preScroll = $(window).scrollTop();

$(window).on("scroll", function(){
  
  let height = $(window).height();
  let scroll = $(window).scrollTop();
  
  console.log("scroll: " + scroll);
  console.log("preScroll: " + preScroll);
  if((scroll - preScroll) > 100){
    
    const target = $(`<div class=target id=${i}></div>`).appendTo($("body"));
    target.prop("id", i).css("top", scroll + 100);
    vanish(target.prop("id", i));
    i += 1;
    preScroll = scroll;
    console.log(preScroll + " : " + scroll);

  } else if((preScroll - scroll) > 100) {
    showUp(target.prop("id", i));
    i -= 1;
  }
});

function vanish(elem){
  setTimeout(() => {
    elem.fadeOut(300);
  }, 2000);
}

function showUp(elem){
  elem.css("display", "inline-block");
}


/*
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
*/