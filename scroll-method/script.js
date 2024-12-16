const link = document.querySelectorAll("button");
link.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    const target = document.querySelector(e.target.dataset.link);
    const pos = target.getBoundingClientRect().top;
    //window.scrollTo({top: pos, behavior: "smooth"});
    //window.scrollBy({top: target.getBoundingClientRect().top, behavior: "smooth"});
    //target.scrollIntoView({behavior: "smooth", block: "start"});
  });
});



