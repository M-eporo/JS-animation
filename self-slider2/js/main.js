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
  
  $(function() {

    $('.slideshow').each(function() {

      let $container = $(this),
        $slideGroup = $container.find('.slideshow-slides'),
        $slides = $slideGroup.find('.slide'),
        $nav = $container.find('.slideshow-nav'),
        $indicator = $container.find('.slideshow-indicator'),

        slideCount = $slides.length,
        indicatorHTML = '',
        currentIndex = 0,
        duration = 500,
        easing = 'easeInOutExpo',
        interval = 7500,
        timer;

        $slides.each(function(i){
          $(this).css({
            left: 100 * i + '%'
          });indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
        });

        $indicator.html(indicatorHTML);

        function goToSlide(index){
          $slideGroup.animate( {
            left: -100 * index + '%'
          }, duration, easing);
          currentIndex = index;
          updateNav();
        }

        function updateNav() {
          let $navPrev = $nav.find('.prev')
          let $navNext = $nav.find('.next');

          if(currentIndex === 0){
            $navPrev.addClass('disabled');
          } else {
            $navPrev.removeClass('disabled');
          }

          if(currentIndex === slideCount -1) {
            $navNext.addClass('disabled');
          } else {
            $navNext.removeClass('disabled');
          }

          $indicator.find('a').removeClass('active')
            .eq(currentIndex).addClass('active');
        }

        function startTimer() {
          timer = setInterval(() => {
            let nextIndex = (currentIndex + 1) % slideCount;
            goToSlide(nextIndex);
          }, interval);
        }

        function stopTimer() {
          clearInterval(timer);
        }

        $nav.on('click', function(evnt){
          evnt.preventDefault();
          if($(this).hasClass('prev')) {
            goToSlide(currentIndex - 1);
          } else {
            goToSlide(currentIndex + 1);
          }
        });

        indicatorHTML.on('click', function(evnt) {
          evnt.preventDefault();
          if($(this).hasClass('active')) {
            goToSlide($(this).index());
          }
        });

        $container.on({
          mouseenter: stopTimer,
          mouseleave: startTimer,
        });

        goToSlide(currentIndex);

        startTimer();
    })
  })
});
