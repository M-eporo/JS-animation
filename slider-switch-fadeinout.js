const slider = document.getElementById("slider");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const fadeout = slider.animate(
  [
    {opacity: 1},
    {opacity: 0},
  ],
  {
    duration: 600,
  }
)
fadeout.cancel();
const fadein = slider.animate(
[
  {opacity: 0},
  {opacity: 1},
],
{
  duration: 600,
}
);
fadein.cancel();

prev.addEventListener("click", () => {
  fadeout.play();
  fadeout.onfinish = showPrevImg;
});

next.addEventListener("click", () => {
  fadeout.play();
  fadeout.onfinish = showNextImg;
});

function showNextImg(){
  slider.appendChild(slider.children[0]);
  fadein.play();
}
function showPrevImg(){
  slider.insertBefore(slider.children[slider.children.length - 1 ], slider.children[0]);
  fadein.play();
}