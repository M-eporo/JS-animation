const keyframes = [
  {opacity: 1, transform: "translateY(0)"}
];
const effects = {
  duration: 500,
  fill: "forwards",
};

class TextSplitAnimatation {
  textArray = [];
  targetSpans = [];
  animations = [];
  anime;
  constructor(targetSelector, keyframes, effects, type = "words", delay = 50) {
    if(!targetSelector || !keyframes || !effects ) {
      throw new Error("Not enough arguments for Animation.");
    }
    this.targets = [...document.querySelectorAll(targetSelector)];
    this.keyframes = keyframes;
    this.effects = effects;
    this.type = type;
    this.delay = delay;
    this.splitText();
  }

  splitText = () => {
    this.targets.forEach((target, i) => {
      switch(this.type) {
      case "chars":
        this.textArray.push(target.innerText.split(""));
        break;
      default:
        this.textArray.push(target.innerText.split(" "));
      }
      target.innerText = "";

      this.textArray.forEach((text, i) => {
        text.forEach((char, j) => {
          const newSpan = document.createElement("span");
          newSpan.innerText = char;
          target.append(newSpan);
          this.anime = newSpan.animate(this.keyframes, { ...this.effects, delay: i * this.delay})
          this.anime.cancel();
          this.animations.push(this.anime);
        });
      });
      this.targetSpans.push(target.querySelectorAll("span"));
      this.textArray.shift();
    });
  }

  start = () => {
    this.targetSpans.forEach((spans, i) => {
      spans.forEach((span, i) => {
        span.animate(this.keyframes, { ...this.effects, delay: i * this.delay});
      });
      
    });
  }
}

const anime = new TextSplitAnimatation(".text", keyframes, effects, "chars");
console.log(anime.targetSpans);
anime.start();