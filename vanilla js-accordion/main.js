const headings = document.querySelectorAll(".heading");
headings.forEach((heading,i) => {
  heading.addEventListener("click", e => {
    const content = heading.nextElementSibling;
    document.querySelectorAll(".drawer").forEach((d) => {
      if(d !== content){
        d.classList.remove("open");
      }
    });
    content.classList.toggle("open");
  });
});