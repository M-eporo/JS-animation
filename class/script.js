//複数の要素に対応させる

const target = Array.from(document.querySelectorAll("#js-color"));

class CreateAnimation{
  animes = [];
  index = 0;
  requestId = [];
  cbSingle = () => {
    animes[index].play();
  };
　cbMulti = () => {
    for(const anime of this.animes){
      anime.play();
    }
  }; 
  constructor(obj){
    while(this.index < obj.targets.length){
      this.animes.push(obj.targets[this.index].animate(obj.keyframes, obj.options));
      this.animes[this.index].cancel();
      this.index++;
    }
  }
  
  start(){
    if(this.index === 1){
      this.requestId.push(window.requestAnimationFrame(this.cbSingle));
    }else{
      for(let i = 1; i <= this.index; i++){
        this.requestId.push(window.requestAnimationFrame(this.cbMulti))
      }
    }
  }
  
  update(){
    
  }

  stop(){
    
  }
}
const i = new CreateAnimation({
  targets: target,
  keyframes: [
    {color: "black"},
    {color: "red"},
  ],
  options: {
    duration: 1000,
    direction: "alternate",
    iterations: Infinity
  },
});
i.start();