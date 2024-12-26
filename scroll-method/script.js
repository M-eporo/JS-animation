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
/*
layerY
layerX
**マウスイベント
**マウスの位置
clientY
clientX

**パディングを含む要素の内側の寸法@px
clientHeight
clientWidth

**パディングトップから、ボーダートップ
**ボーダーの幅
clientTop
clientLeft

**マウスイベント
offsetY
offsetX
offsetHeight
offsetWidth

**
offsetTop
offsetLeft
pageY
pageX
pageYOffset
pageXOffset
screenY
screenX
scrollY
scrollX
scrollTop
scrollLeft
scrollWidth
scrollHeight
*/