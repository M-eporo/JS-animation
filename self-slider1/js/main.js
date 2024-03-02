$(function() {

  const $humberger = $('.humberger');
  const $nav = $('.nav-container');

  $humberger.on('click', function() {
    $(this).toggleClass('open');
    $nav.toggleClass('open');

  });

  const $header = $('header');
  $header.each(function() {

    const $window = $(window);
    const headerOffsetTop = $header.offset().top;
    const threshold = $header.outerHeight();
    
    $window.on('scroll', function() {
      if($window.scrollTop() > headerOffsetTop){
        $header.addClass('sticky');
      } else {
        $header.removeClass('sticky');
      }
    });

    $window.trigger('scroll');

  });

  $("a[href^='#']").on('click', function() {

    const href = $(this).attr('href');
    let $target;

    if(href === '#'){
      $target = $('html');
    } else {
      $target = $(href);
    }

    $('html, body').animate({
      scrollTop: $target.offset().top - 150,
    }, 600, "swing");

    return false;

  });

  $('.slideshow').each(function() {
    let $slides = $(this).find('img');
    let slideCount = $slides.length;
    let currentIndex = 0;

    $slides.eq(currentIndex).fadeIn();
    setInterval(showNextSlide, 1000);

    function showNextSlide() {

      let nextIndex = (currentIndex + 1) % slideCount;
      $slides.eq(currentIndex).fadeOut();
      $slides.eq(nextIndex).fadeIn();
      currentIndex = nextIndex;
    }
  });
});