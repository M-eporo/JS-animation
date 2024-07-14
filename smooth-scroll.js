const topBtn = document.getElementById("top-btn");
const target = document.getElementById("header");
const main = document.getElementById("fixed-btn");
topBtn.addEventListener("click", (e) => {
  e.preventDefault();
  /*
  target.scrollIntoView({
    behavior: "smooth",
  })*/
  window.scroll({
    top: 1,
    left: 1,
    behavior: "smooth"
  });
});