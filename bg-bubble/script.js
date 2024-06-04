window.addEventListener("DOMContentLoaded", () => {
  const mv = document.querySelector(".mv");
  const maxSize = 500;
  const minSize = 300;
  function createCircle(){
    const circle = document.createElement("span");
    circle.className = "circle";
    const size = Math.random() * (maxSize - minSize) + minSize;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = Math.random() * 100 + "%";
    circle.style.boxShadow = "0 0 25px 25px rgba(250,250,250, 0.2)";
    mv.appendChild(circle);
    let p1 = Math.random() * 100 -50;
    let p2 = Math.random() * 100 -50;
    let p3 = Math.random() * 100 -50;
    const circleAnime = circle.animate(
      [
        { bottom: "-50%", opacity: 0.5, transform: `translateX(${p1}%)`},
        { bottom: "50%", opacity: 0.5, transform: `translateX(${p2}%)` },
        { bottom: "130%", opacity: 0.5, transform: `translateX(${p3}%)`},
      ],
      {
        duration: Math.random() * 15000 + 5000,
      }
    );
    circleAnime.onfinish = event => {
      circle.remove();
    };
  }
  setInterval(createCircle, 600);
});