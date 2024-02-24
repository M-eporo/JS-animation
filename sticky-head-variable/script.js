$(function() {

  /* Sticky Header */
  $('.page-header').each(function() {

      var $window = $(window);
      var $header = $(this);

      var $headerClone = $header.contents().clone();

      var $headerCloneContainer = 
        $('<div class="page-header-clone"></div>');
      
      var threshold = $header.offset().top + $header.outerHeight();

      $headerCloneContainer.append($headerClone);
      $headerCloneContainer.appendTo('body');

      $window.on("scroll",function() {
        if($window.scrollTop() > threshold) {
          $headerCloneContainer.addClass('visible');
        } else {
          $headerCloneContainer.removeClass('visible');
        }
      });
      
      $window.trigger('scroll');
  });
});