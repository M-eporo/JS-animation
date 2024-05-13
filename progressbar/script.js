const target = document.querySelectorAll(".box");
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

var bar = new ProgressBar.Line(splash_text,{
  strokeWidth: 0,
  duration: 1000,
  trailWidth: 0,
  text: {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '0',
      transform: 'translate(-50%, -50%)',
      'font-size': '2rem',
      color: '#000'
    },
    autoStyleContainer: false
  },
  step: function(state, bar){
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(1.0, function() {
  $("#splash").delay(500).fadeOut(800);
});
