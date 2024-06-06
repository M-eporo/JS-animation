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

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
document.body.append(svg);
const circle3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
svg.appendChild(circle3);
const svgAttr = {
  width: 200,
  height: 200,
  viewBox: "0 0 200 200",
};
const circleAttr = {
  cx: 100,
  cy: 100,
  r: 50,
  fill: "lightgreen"
};

function settingAttr(target, obj){
  for(const element in obj){
    target.setAttribute(element , obj[element]);
  }
}
settingAttr(svg, svgAttr);
settingAttr(circle3, circleAttr);

circle3.animate([
  { r: 10 },
  { r: 100 },
  { r: 50 },
],{
    iterations: Infinity,
    duration: 2000,
    directions: "alternate",
  }
);

const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
document.body.append(svg2);
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
svg2.appendChild(path);
const svgPathAttr = {
  d: "M 20 20 h 60 a 10 10 0 0 1 10 10 v 60 a 10 10 0 0 1 -10 10 h -60 a 10 10 0 0 1 -10 -10 v -60 a 10 10 0 0 1 10 -10",
  stroke: "#333",
  fill: "#777"
};
settingAttr(path, svgPathAttr);
settingAttr(svg2, svgAttr);