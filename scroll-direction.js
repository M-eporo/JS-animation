let prePosi = 0;
window.addEventListener('scroll', isUpOrDown);

function isUpOrDown(){
  if(prePosi < window.scrollY) {
    console.log('down');
  } else if (prePosi > window.scrollY) {
    console.log('up');
  }
  prePosi = window.scrollY;
}