//updateメソッド作成
//Error処理

const target = Array.from(document.querySelectorAll("#js-color"));

class CreateAnimation{
  animes = [];
  index = 0;
  requestIds = [];
  cbSingle = () => {
    this.animes[0].play();
  };
　cbMulti = (anime) => {
    anime.play();
  }; 

  constructor(obj){
    for(let i = 0; i < obj.targets.length; i++){
      this.animes.push(obj.targets[i].animate(obj.keyframes, obj.options));
      this.animes[i].cancel();
      this.index++;
      this.animes[i].requestIds = this.index;
    }
  }
  
  start(){
    if(this.index === 1){
      this.requestIds.push(window.requestAnimationFrame(this.cbSingle));
    }else{
      for(let i = 0; i < this.index; i++){
        this.requestIds.push(window.requestAnimationFrame(() => this.cbMulti(this.animes[i])));
      }
    }
    return {
      animes: this.animes,
      requestIds: this.requestIds,
    };
  }

  stop(animes){
    for(const anime of animes ){
      window.cancelAnimationFrame(anime.requestIds);
    }
  }

  stopPartly(...ids){
    ids.forEach((id,index) => {
      window.cancelAnimationFrame(id);
    });
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

const {animes, requestIds} = i.start();
//playState = idle になる
//window.cancelAnimationFrame(requestIds);
console.log(animes)
console.log(requestIds);
//i.stop(animes);

//i.stopPartly(3);
