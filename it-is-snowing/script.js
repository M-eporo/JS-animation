window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".snow-container");
  const createSnow = () => {
    const snowElm = document.createElement("span");
    snowElm .className = "snow";

    const minSize = 5;
    const maxSize = 10;
    const size = Math.random() * (maxSize - minSize) + minSize;

    snowElm.style.width = `${size}px`;
    snowElm.style.height = `${size}px`;
    snowElm.style.left = Math.random() * 100 + "%";
    container.appendChild(snowElm);

    setTimeout( () => {
      snowElm.remove();
    }, 10000);
  };
  setInterval(createSnow, 100);
});
