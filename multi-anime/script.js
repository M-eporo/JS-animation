const targets = Array.from(document.querySelectorAll("#target div"));
let timings = {
  easing: "ease-in-out",
  iterations: Infinity,
  direction: "alternate",
  fill: "both",
};
let animation1, animation2, animation3;
const animations = [];

targets.forEach((elem, i) => {
  timings.delay = i * 98;
  timings.duration = 2500;

  animation1 = elem.animate(
    [
      {transform: "translateY(0) scaleX(0.8)"},
      {transform: "translateY(290px) scale(1)"}
    ],
    timings,);
  animation1.cancel();
  animations.push(animation1);

  timings.duration = 2000;
  animation2 = elem.animate(
    [
      {opacity: 1},
      {opacity: 0},
    ],timings);
  animation2.cancel();
  animations.push(animation2);

  timings.duration = 3000;
  animation3 = elem.animate(
    [
      {backgroundColor: "#fff"},
      {backgroundColor: "#f32f03"},
    ], timings);
  animation3.cancel();
  animations.push(animation3);
});

document.getElementById("play").addEventListener("click", () => {
  animations.forEach(anime => {
    anime.play();
  });
});
document.getElementById("pause").addEventListener("click", () => {
  animations.forEach(anime => {
    anime.pause();
  });
});
document.getElementById("cancel").addEventListener("click", () => {
  animations.forEach(anime => {
    anime.cancel();
  });
});
