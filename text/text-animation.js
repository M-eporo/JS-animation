const keyframes = [
  {opacity: 1, transform: "translateY(0)"}
];
const effects = {
  duration: 500,
  fill: "forwards",
};

class TextSplitAnimation {
  textArray = [];
  targetSpans = [];
  animations = [];
  
  constructor(targetSelector, keyframes, effects, type = "words", delay = 50, groupDelay = 500) {
    if(!targetSelector || !keyframes || !effects ) {
      throw new Error("Not enough arguments for Animation.");
    }
    this.targets = [...document.querySelectorAll(targetSelector)];
    this.keyframes = keyframes;
    this.effects = effects;
    this.type = type;
    this.delay = delay;
    this.groupDelay = groupDelay;
    this.splitText();
  }

  splitText = () => {
    this.targets.forEach((target, targetIndex) => {
      const text = this.type === "chars"
        ? target.innerText.split("")
        : target.innerText.split(" ");
      this.textArray.push(text);
      target.innerText = "";
      const spans = [];
      
      text.forEach((char, charIndex) => {
        const span = document.createElement("span");
        span.innerText = char;
        target.append(span);

        const anime = span.animate(this.keyframes, { ...this.effects, delay: 0});
        anime.cancel();
        this.animations.push(anime);
        spans.push(span);
      });
      this.targetSpans.push(spans);
    });
  }

  start = () => {
    this.targetSpans.forEach((spans, targetIndex) => {
      spans.forEach((span, i) => {
        span.animate(this.keyframes, { ...this.effects, delay: targetIndex * this.groupDelay + i * this.delay});
      });
    });
  }
}