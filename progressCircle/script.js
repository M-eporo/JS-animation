const target = document.querySelectorAll(".box");
console.log(target);

target.forEach((element, index, arry) => {

	element.addEventListener("click", function(e){

		switch(element.dataset.event){
		case "Left":
			element.classList.toggle("fadeLeft");
			break;
		case "Right":
			element.classList.toggle("fadeRight");
			break;
		case "Down":
			element.classList.toggle("fadeDown");
			break;
		case "Up":
			element.classList.toggle("fadeUp");
			break;
		default:
			element.classList.toggle("fadeIn");
		}
		
	});
});


var circle = new ProgressBar.Circle("#splash_text",{

	strokeWidth: 5.0,
	duration: 1000,
	trailColor: "#fff",
	trailWidth: 3.0,
	easing: "easeOut",
	fill: '#999',
	text: {
		style: {
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '0',
			transform: 'translate(-50%, -50%)',
			'font-size': '1.8rem',
			color: '#fff'
		},
		autoStyleContainer: false
	},
	
	
	step: function(state, circle, attachment){
		circle.setText(Math.round(circle.value() * 100) + ' %');
		circle.path.setAttribute("stroke", state.color);
	}
});
var opts = {
	from: { color: '#ff0'},
   	to: { color: '#f00'}
};

var opts2 = {
	from: { color: '#f00'},
   	to: { color: '#ff0'}
};

circle.animate(0.5, opts, function() {
	console.log(circle);
	circle.animate(1.0, opts2, function() {
	$("#splash").delay(500);
});
});