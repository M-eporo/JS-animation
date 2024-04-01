var items = $('.items'), //アイテムのコンテナ
    item = [], //各アイテムを代入する
    order = [],  //各アイテムのorderプロパティ
    num = items.children().length, //アイテム数
    index = 0, //配列操作用の変数
    running = false; //アニメーション重複を防ぐフラグ

for(var i = 0; i < num; i++){
  item.push( items.children().eq( i ) );
  order.push( i );
  item[i].css('order', i　); //各アイテムにORDERプロパティをふる
}

function slider( prev ){
  running = true;  //アニメーションのフラグON
  var offset = prev ? 0 : '-200%';  //prevによって、左右の回り方を決める
  items.animate({left: offset }, 600, 'swing', function(){
    ordering( prev );  //アニメーション後の並び替えの関数を実行
    running = false;  //アニメーションフラグ解除
  });
}

function ordering( prev ){
  if( prev ){
    var i = index > 0 ? index - 1 : num - 1;
    item[i].css('order', order[i]-=num);
    index = i;
  } else {
    item[index].css('order', order[index]+=num);
    index = index < num - 1 ? index + 1 : 0;
  }
  items.css('left','-100%');
}

var setSlider = setInterval( slider, 5000);

if('ontouchstart' in window){
  // flick
  $('.buttons').remove();
  var startX,
      endX;
  $('.slider').on('touchstart', function(e){
    startX = e.originalEvent.changedTouches[0].pageX;
    endX = startX;
  }).on('touchmove', function(e){
    endX = e.originalEvent.changedTouches[0].pageX;
  }).on('touchend', function(e){
    var difX = endX - startX;
    if( Math.abs(difX) > 100 ){
      if( running ) return;
      clearInterval( setSlider );
      var prev = difX > 0 ? true : false;
      slider(prev);
    }
  });
}else{
  // click
  $('.button').on('click', function(){
    if( running ) return;
    clearInterval( setSlider );
    var prev = $(this).is('.prev') ? true : false;
    slider( prev );
  });
}


  