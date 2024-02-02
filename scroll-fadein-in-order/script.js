$(window).on("scroll", function() {

	const time = 0.5;
	let delay = time;

	const height = $(window).height();
	const scroll = $(window).scrollTop();
	const targetPosition = $(".scrollWrapper").offset().top;
	
	const children = $(".scrollWrapper").children();
	
	if(scroll >= targetPosition - height) {
		
		$(children).each(function(){

			if(!$(this).hasClass("fadeIn")){

				$(this).css("animation-delay", delay + "s").addClass("fadeIn");
				delay += time;

			}
	
		});

	} else if(scroll < targetPosition - height){
		$(children).removeAttr("style").removeClass("fadeIn");
		delay = time;
	}

});














