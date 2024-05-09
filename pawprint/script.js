let i = 1;
let preScroll = $(window).scrollTop();
let target;
let direction;
let position;

const height = $(window).height();
const docHeight = $("body").innerHeight();

$(window).on("scroll", function(event){
  
  let scroll = $(window).scrollTop();
  
  if((scroll - preScroll) > 50 || (preScroll > scroll && (preScroll - scroll) > 50)){

    target = $(`<div class=target id=${i}></div>`).appendTo($("body"));
    target.prop("id", i).css("top", scroll + (height / 2));

    //1=else 2=false
    if((i % 2)){
      direction = "right";
      target.prop("id", i).addClass(direction);
    } else {
      direction = "left";
      target.prop("id", i).addClass(direction);
    }

    vanish(target.prop("id", i));
    remove(target.prop("id", i));

    i += 1;
    preScroll = scroll;

  }

  
  
});

function vanish(elem){
  setTimeout(() => {
    elem.fadeOut(300);
  }, 1000);
}

function remove(elem){
  setTimeout(() => {
    elem.remove();
  },2000);
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

/*
$(window).on("scroll", function(event){
  
  let scroll = $(window).scrollTop();
  
  if((scroll - preScroll) > 50){

    target = $(`<div class=target id=${i}></div>`).appendTo($("body"));
    target.prop("id", i).css("top", scroll + (height / 2));
    
    normalScroll(target.prop("id", i));
    
    vanish(target.prop("id", i));
    remove(target.prop("id", i));

  } else if (preScroll > scroll && (preScroll - scroll) > 50){

    target = $(`<div class=target id=${i}></div>`).appendTo($("body"));
    target.prop("id", i).css("top", scroll + (height / 2));

    reverseScroll(target.prop("id", i));

    vanish(target.prop("id", i));
    remove(target.prop("id", i));

  }
  
  i += 1;
  preScroll = scroll;
  
});

function vanish(elem){
  setTimeout(() => {
    elem.fadeOut(300);
  }, 1000);
}

function remove(elem){
  setTimeout(() => {
    elem.remove();
  },2000);
}

function normalScroll(elem){
  //1=true 2=false
  if((i % 2)){
    direction = "right";
    elem.addClass(direction);
  } else {
    direction = "left";
    elem.addClass(direction);
  }
}
function reverseScroll(elem){
  //1=true 2=false
  if((i % 2)){
    direction = "right";
    elem.addClass(direction);
  } else {
    direction = "left";
    elem.addClass(direction);
  }
}
*/