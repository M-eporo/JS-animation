const str = document.querySelector(".text");
const strArray = str.innerText.split("");
console.log(splitString(".text"));



//const paragraph = document.querySelector(".text");
str.innerText = "";

strArray.forEach((char) => {
  const newSpan = document.createElement("span");
  newSpan.style.opacity = 0;
  newSpan.style.transform = "translateY(50%)";
  newSpan.innerText = char;
  str.append(newSpan);
});
const spans = [...str.querySelectorAll("span")];

spans.forEach((span, i) => {
  span.animate(
    [
     { opacity: 1, transform: "translateY(0)" },
    ],
    {
      duration: 500,
      fill: "forwards",
      delay: i * 50,
    }
  );
});

function splitString(targetSelector, type = "") {
  const target = document.querySelector(targetSelector);
  const textArray = [];
  switch(type) {
    case "chars":
      textArray.push(target.innerText.split(""));
      break;
    case "words":
      textArray.push(target.innerText.split(" "));
      break;
    default:
      textArray.push(target.innerText);
  }
  target.innerText = "";
  return textArray;
}

function textAnimation(targetSelector, textArray, keyframes, effects) {
  const target = document.querySelector(targetSelector);
  textArray.forEach((text) => {
    const newSpan = document.createElement("span");
    newSpan.innerText = text;
    target.append(newSpan);
  });
  const targetSpans = [...target.querySelectorAll("span")];
  targetSpans.forEach((span, i) => {
    span.animate(keyframes, effects);
  });
}