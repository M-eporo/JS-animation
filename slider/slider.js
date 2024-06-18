const slider = document.getElementById("slider");

function next() {
  slider.appendChild(slider.children[0]);
}
function prev() {
  slider.insertBefore(slider.children[slider.children.length - 1 ], slider.children[0]);
}

const keyframe = [
  { transform: "translateX(0px)" },
  { transform: "translateX(-100%)" }
];
let options = {
  duration: 600,
};
function slide() {
  const slideImg = slider.animate(keyframe, options);
  slideImg.onfinish = imgPositionInit;
}
function imgPositionInit(){
  slider.appendChild(slider.children[0]);
}
let interval = setInterval(slide, 2000);