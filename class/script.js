//複数の要素に対応させる

const target = Array.from(document.querySelectorAll("#js-color"));

class CreateAnimation{
  animes = [];
  index = 0;
  requestId = [];
  cbSingle = () => {
    this.animes[0].play();
  };
　cbMulti = () => {
    for(const anime of this.animes){
      anime.play();
    }
  }; 

  constructor(obj){
    for(let i = 0; i < obj.targets.length; i++){
      this.animes.push(obj.targets[i].animate(obj.keyframes, obj.options));
      this.animes[i].cancel();
      this.index++;
    }
  }
  
  start(){
    if(this.index === 1){
      this.requestId.push(window.requestAnimationFrame(this.cbSingle));
    }else{
      for(let i = 0; i < this.index; i++){
        this.requestId.push(window.requestAnimationFrame(this.cbMulti));
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