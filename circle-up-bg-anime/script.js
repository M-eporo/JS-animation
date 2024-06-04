const mv = document.querySelector(".mv");
const maxSize = 100;
const minSize = 30;

function createCircle(){
  const circle = document.createElement("span");
  circle.className = "circle";
  const size = Math.random() * (maxSize - minSize) + minSize;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = Math.random() * 100 + "%";
  circle.style.boxShadow = "0 0 4px 4px rgba(#fff, 0.2)";
  mv.append(circle);
  let p1 = Math.random() * 100 + "%";
  let p2 = Math.random() * 100 + "%";
  let p3 = Math.random() * 100 + "%";
  circle.animate(
    [
      { bottom: "0%", opacity: 0.3, transform: `translateX(${p1})`},
      { bottom: "50%", opacity: 1, transform: `translateX(${p2})` },
      { bottom: "100%", opacity: 0, transform: `translateX(${p3})`},
    ],
    {
      duration: Math.random() * 15000 + 5000,
      
    }
  );
  
  setTimeout(() => {
    circle.remove();
  }, 20000);

}

setInterval(createCircle, 600);