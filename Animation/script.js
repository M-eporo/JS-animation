
const box = document.querySelector("#box1");
box.addEventListener("click", () => {
	box.classList.toggle("fadeIn");
});

const box2 = document.querySelector("#box2");
box2.addEventListener("click", () => {
	box2.classList.toggle("fadeLeft");
});

const box3 = document.querySelector("#box3");
box3.addEventListener("click", () => {
	box3.classList.toggle("fadeRight");
});

const box4 = document.querySelector("#box4");
box4.addEventListener("click", () => {
	box4.classList.toggle("fadeDown");
});

const box5 = document.querySelector("#box5");
box5.addEventListener("click", () => {
	box5.classList.toggle("fadeUp");
});


console.log(`.scroll OFFSET TOP: ${$(".scroll").offset().top}`);
console.log(`scroll SCROLLTOP: ${$(".scroll").scrollTop()}`);
console.log(`WINDOW SCROLLTOP: ${$(window).scrollTop()}`);
console.log(`WINDOW HEIGHT : ${$(window).height()}`);
console.log(`DOCUMENT HEIGHT ${$(document).height()}`);


$(window).on("scroll",function(){
	$(".scroll").each(function(index, element){
		let scroll = $(window).scrollTop();
		let elemPos = $(element).offset().top;
		let height = $(window).height();
		if(scroll >= elemPos - height){
			$(element).addClass("fadeFromLeft");
			if(index > 0 ){
				$(element).addClass("fadeFromLeft" + index);
			}
		} else {
			$(element).removeClass("fadeFromLeft");
		}
	});
});



$(".assigning").on( {
	mouseenter: function(e) {
		console.log(e.target);
		console.log(e.currentTarget);
		$(this).children(".assigned").addClass("translateX");
		
	},
	mouseleave: function(e) {
		$(this).children(".assigned").removeClass("translateX");
	}
});


$(window).on("scroll", function() {
	$(".bgextend").each(function(index, element) {
		let elemPos = $(this).offset().top - 30;
		let scroll = $(window).scrollTop();
		let height = $(window).height();
		let num = index;
		if(scroll >= elemPos - height) {
			$(this).addClass("bgLRextend");
		} else {
			$(this).removeClass("bgLRextend");
		}
	});
});

function delayScrollAnime(){

	let time = 0.4;
	let delay = time;

	$(".delayScroll").each(function() {

		let parent = this;
		let children = $(this).children();

		let scroll = $(window).scrollTop();
		let elemPos = $(this).offset().top;
		let height = $(window).height();
		
		if(scroll >= elemPos - height && !$(this).hasClass("play")){

			$(children).each(funtion() {

				if(!$(this).hasClass("fadeUp")){

					$(parent).addClass("play");
					$(this).css("animation-delay", delay + "s").addClass("fadeUp");
					delay += time;

					let index = $(children).index(this);

					if($(children).length - 1 === index) {
						$(parent).removeClass("play");
					}
				}
			});
		} else {

			$(children).removeClass("fadeUp");
			delay = time;

		}
	});
}
