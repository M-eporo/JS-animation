let i = 1;
let preScroll = $(window).scrollTop();
let target;

$(window).on("scroll", function(event){
  
  let scroll = $(window).scrollTop();
  console.log("scroll: " + scroll);
  console.log("preScroll: " + preScroll);
  
  if((scroll - preScroll) > 90 ){
    
    target = $(`<div class=target id=${i}></div>`).appendTo($("body"));
    target.prop("id", i).css("top", scroll + 200);
    vanish(target.prop("id", i));
    remove(target.prop("id", i));
    i += 1;
    preScroll = scroll;

  } else if(preScroll > scroll && (preScroll - scroll) > 90){
    target = $(`<div class=target id=${i}></div>`).appendTo($("body"));
    target.prop("id", i).css("top", scroll + 100);
    vanish(target.prop("id", i));
    remove(target.prop("id", i));
    i += 1;
    preScroll = scroll;
  }
  
});

function vanish(elem){
  setTimeout(() => {
    elem.fadeOut(300);
  }, 2000);
}

function remove(elem){
  setTimeout(() => {
    elem.remove();
  },2500);
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