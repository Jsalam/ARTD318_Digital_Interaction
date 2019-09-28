class Pixel{
  constructor(i,j,w,h){
    this.i = i;
    this.j = j;
    this.w = w;
    this.h = h;
    this.isSelected = false;
  }
  setWH(w,h){
    this.w = w;
    this.h = h;
  }

  clicked(p5, event){
    if (this.isOver(p5)){
      this.isSelected = !this.isSelected;
    }
  }

  show(p5){
    p5.stroke(0,10);
    if (this.isOver(p5)){
      if (this.isSelected){
        p5.fill(90,80);
      }else{
        p5.fill(190,40);
      }

    }else{
      if(this.isSelected){
        p5.fill(90,120);
      }else{
        p5.fill(190,80);
      }
    }
    p5.rect(this.i* this.w, this.j* this.h, this.w, this.h);
    p5.textSize(10);
    p5.noStroke();
    p5.fill(0,30);
    p5.text(this.i +','+ this.j, this.i*this.w + 10, this.j*this.h +  this.h - 5);
    if (this.i == 0){
      p5.stroke(0,200);
      p5.line(this.i* this.w, this.j* this.h, this.i* this.w, this.j* this.h + this.h);
    }
  }

  isOver(p5){
    if(p5.mouseX > this.i* this.w && p5.mouseX < this.i* this.w + this.w &&  p5.mouseY > this.j* this.h  && p5.mouseY < this.j* this.h + this.h){
      return true;
    }
    return false;
  }
}
