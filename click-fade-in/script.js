const target = document.querySelectorAll(".box");
target.forEach((element, index, arry) => {
	element.addEventListener("click", function(e){
		switch(element.dataset.event){
		case "Left":
			element.classList.add("fadeLeft");
			break;
		case "Right":
			element.classList.add("fadeRight");
			break;
		case "Down":
			element.classList.add("fadeDown");
			break;
		case "Up":
			element.classList.add("fadeUp");
			break;
		default:
			element.classList.add("fadeIn");
		}
	});
});
