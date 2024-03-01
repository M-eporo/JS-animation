$(function() {
	$('.btn').on('click', function() {
		$(this).toggleClass('open');
		$(".btn-area").toggleClass('open');
		$('.mask').toggleClass('open');
	});
})();