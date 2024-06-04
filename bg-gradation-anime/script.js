const mv = document.querySelector(".mv");


const keyframeEffect = new KeyframeEffect(
  mv,
  [
    {backgroundPosition: "0%"},
    {backgroundPosition: "100%"},
  ],
  {
    duration: 5000,
    ease: "ease-in-out",
    iterations: Infinity,
  }
);
const bgMove = new Animation(keyframeEffect, document.timeline);
bgMove.cancel();
bgMove.play();
