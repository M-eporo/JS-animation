$(function() {

  var duration = 300;

  var $aside = $('.page-main > aside');
  
  var $asideBtn = $aside.find('button')
    .on('click', function() {
      //サイドバーが閉じているときは、openクラスを付ける
      //開いているときは外す
      $aside.toggleClass('open');

      if($aside.hasClass('open')){

        $aside.stop(true).animate({
          left: '-70px',
        }, duration, 'easeOutBack');
        $asideBtn.find('img').attr('src', 'img/btn_close.png');

      } else {

        $aside.stop(true).animate({
          left: '-350px',
        }, duration, 'easeInBack');
        $asideBtn.find('img').attr('src', 'img/btn_open.png');
      }
    });
});

$(function() {
  const duration = 300;
  const $aside = $('.page-main > aside');

  const $asideBtn = $aside.find('button')
  .on('click', function() {

    $aside.toggleClass('open');

    if($aside.hasClass('open')){

      $aside.stop(true).animate( {
        left: '-70px',
      }, duration, 'easeOutBack');
      $asideBtn.find('img').attr('src', 'img/close_btn.png');
    } else {

      $aside.stop(true).animate( {
        left: '-350px',
      }, duration, 'easeOutBack');
      $asideBtn.find('img').attr('src', 'img/open_btn.png');

    }
  });
});