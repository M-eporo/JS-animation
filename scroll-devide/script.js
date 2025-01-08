//offsetY, clientY, pageY, screenY, deltaY

const sec = document.getElementById("section");
const aside = document.getElementById("aside");
const con = document.querySelector(".container");
const header = document.querySelector(".header");
const pCon = document.querySelector(".paraContainer");
con.addEventListener("wheel", e => {
  /*if(con.scrollTop >= 0) {
    return;
  }*/
  console.log(con.getBoundingClientRect().bottom);
  const maxScroll = pCon.scrollHeight;
  let scroll;
  console.log(maxScroll);
  if(con.getBoundingClientRect().top) {
    console.log(e.deltaY);
    scroll += e.deltaY;
    if(scroll > maxScroll){
      return;
    }
    e.preventDefault();
    pCon.scrollTop += e.deltaY
    
  }
  
  
  
  
});

