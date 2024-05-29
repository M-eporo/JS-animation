//element.clientHeight: 要素の高さ。paddingのみ含む
//element.offsetHeight: 要素の高さ。padding + border
//element.scrollHeight: あふれて画面上に表示されない部分を含めた、要素の内容の高さの寸法
//window.innerHeight: ウィンドウの高さ。アドレスバー、ブックマークバー除く。横スクロールバーは含む
//window.outerHeight: ウィンドウの高さ。アドレスバー、ブックマークバー、横スクロールバー含む
//window.scrollY, scrollX: スクロール量（px）。pageYOffsetはこれのエイリアス。
//element.getBoundingClientRect: オブジェクト
// .x / .left, .y / .top, .right, .bottom: padding,borderまでの距離
// .width, .height: padding, border含む
/*
console.log(`x: ${ellipse.getBoundingClientRect().x}`);
console.log(`y: ${ellipse.getBoundingClientRect().y}`);
console.log(`left: ${ellipse.getBoundingClientRect().left}`);
console.log(`top: ${ellipse.getBoundingClientRect().top}`);
console.log(`right: ${ellipse.getBoundingClientRect().right}`);
console.log(`bottom: ${ellipse.getBoundingClientRect().bottom}`);
console.log(`width: ${ellipse.getBoundingClientRect().width}`);
console.log(`height: ${ellipse.getBoundingClientRect().height}`);
*/
const width = window.innerWidth;
const height = window.innerHeight;

const svgArea = document.createElementNS("http://www.w3.org/2000/svg", "svg");
document.body.append(svgArea);
const svgAttr = {
  width: 300,
  height: 300,
  viewBox: "0 0 300 300"
};

const ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
svgArea.append(ellipse);
const ellipseAttr = {
  cx: 150,
  cy: 150,
  rx: 100,
  ry: 100,
  fill: "lightgreen",
  stroke: "#cd7649",
  "stroke-width": 3,
  "stroke-dasharray": "15 3",
};

ellipse.animate(
  [
    {
      rx: 130,
      ry: 60,
      transform: "skew(5deg,5deg)",
      
    },
    {
      rx: 70,
      ry: 120,
      transform: "skew(-5deg,-5deg)",
    }
  ],
  {
    iterations: Infinity,
    duration: 5000,
    direction: "alternate",
  }
);

settingAttr(svgArea, svgAttr);
settingAttr(ellipse, ellipseAttr);
ellipse.style.filter = "blur(5px)";
ellipse.style.transformOrigin = "center";

function getRandomPosition(){
  let rndX = Math.floor(Math.random() * (width - svgArea.getBoundingClientRect().x));
  let rndY = Math.floor(Math.random() * (height - svgArea.getBoundingClientRect().y));
  return {x: rndX, y: rndY};
}
function moveElement(){
  let {x, y} = getRandomPosition();
  svgArea.animate(
    [
      {
        transform: `translate(${x}px, ${y}px)`,
      }
    ],
    {
      iterations: Infinity,
      duration: 5000,
      direction: "alternate",
    }
  );
  
  setInterval(moveElement, 3000);
}
moveElement();

function settingAttr(element, option) {
  for(const key in option) {
    element.setAttribute(key, option[key]);
  }
}