const circle = document.getElementById("circle");
const circle2 = document.getElementById("circle2");
const radius = document.getElementById("radius");

function animateCircle(){
  let duration = 2000;
  let maxRx = 60;
  let maxRy = 60;
  let minRx = 10;
  let minRy = 10;
  let color = circle.getAttribute("fill") === "#000" ? "#333" : "#000";

  //element.animate([{keyframes}], options);
  circle.animate([
    {rx: minRx, ry: minRy, fill: circle.getAttribute("fill")},
    {rx: maxRx, ry: maxRy, fill: color, offset: 0.5},
    {rx: minRx, ry: minRy, fill: circle.getAttribute("fill")},
  ],
  {
    duration: duration,
    fill: "forwards",
    direction: "alternate",
    iterations: "Infinity",
    //delay: ms,
    //easing: see also easing-function,
    //endDelay: ms,
    //iterationStart: i.e.0.5 or 2.0,
    //pseudoElement:
  });

/*
  element.animate({
    opacity: [0, 1],	//from, to
    color: ["#fff", "#000"],	//from, to
  }, 2000,);

  element.animate({
    opacity: [0, 1], //offset:0, 1,
    color: ["red", "green", "blue"]	//offset[0, 0.5, 1]
  }, 2000);
*/
  radius.animate(
      {
        borderRadius: [
          "50% 50% 50% 70%/50% 50% 70% 60%",
          "80% 30% 50% 50%/50%",
          "40% 40% 50% 40%/30% 50% 40% 80%" ],
      },
      {      
        iterations: Infinity,
        direction: "alternate",
        duration: 7000
       }
  );
}
animateCircle();

