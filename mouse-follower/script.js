let timer;
const follower = document.querySelector(".mouse-follower");
let isFollowerVisible = true;
let followerX = 0;
let followerY = 0;
const delay = 0.1;

const buttons = document.querySelectorAll("a");
buttons.forEach(button => {
  button.addEventListener("mouseenter", e => {
    follower.classList.remove("sizeDown");
    follower.classList.add("sizeUp");
  });
});
buttons.forEach(button => {
  button.addEventListener("mouseleave", e => {
    follower.classList.remove("sizeUp");
    follower.classList.add("sizeDown");
    
  });
});

document.addEventListener("mousemove", e => {
  if(!isFollowerVisible){
    follower.classList.remove("display-none");
    isFollowerVisible = true;
  }
  
  clearTimeout(timer);
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const deltaX = mouseX - followerX;
  const deltaY = mouseY - followerY;
  followerX += deltaX * delay;
  followerY += deltaY * delay;
  follower.style.left = `${followerX}px`;
  follower.style.top = `${followerY}px`;

  timer = setTimeout(() => {
    follower.classList.add("display-none");
    isFollowerVisible = false;
  },1000);
});

document.addEventListener("mouseleave", e => {
  follower.classList.add("display-none");
  isFollowerVisible = false;
});
document.addEventListener("mouseenter", e => {
  if(!isFollowerVisible){
    follower.classList.remove("display-none");
    isFollowerVisible = true;
  }
});
