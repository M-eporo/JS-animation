//updateメソッド作成
//Error処理

const target = Array.from(document.querySelectorAll("#js-color"));

class CreateAnimation{
  animes = [];
  //index = 0;
  reqIds = [];
  /*cbSingle = () => {
    this.animes[0].play();
  };*/
　cb = (anime) => {
    anime.play();
  }; 

  constructor(obj){
    if(!obj.targets || obj.targets.length === 0){
      throw new Error("No targets provided for animation");
    }
    obj.targets.forEach(target, index) => {
      const anime = target.animate(obj.keyframes, obj.options);
      anime.cancel();
      anime.reqId = ++index;
      this.animes.push(anime);
    });
    /*for(let i = 0; i < obj.targets.length; i++){
      this.animes.push(obj.targets[i].animate(obj.keyframes, obj.options));
      this.animes[i].cancel();
      this.index++;
      this.animes[i].requestIds = this.index;
    }*/
  }
  
  start(){
    this.animes.forEach((anime, index) => {
      this.reqIds.push(window.requestAnimationFrame(() => this.cb(anime)));
    });
    /*
    if(this.index === 1){
      this.reqIds.push(window.requestAnimationFrame(this.cbSingle));
    }else{
      for(let i = 0; i < this.index; i++){
        this.reqIds.push(window.requestAnimationFrame(() => this.cbMulti(this.animes[i])));
      }
    }*/
    return {
      animes: this.animes,
      reqIds: this.reqIds,
    };
  }

  stop(){
    this.reqIds.forEach(id => {
      window.cancelAnimationFrame(id));
    });
    /*
    for(const anime of animes ){
      window.cancelAnimationFrame(anime.requestIds);
    }*/
  }

  stopPartly(...ids){
    ids.forEach(id => {
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
//i.stop();

//i.stopPartly(3);
