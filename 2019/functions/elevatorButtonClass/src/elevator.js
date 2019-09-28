class Elevator{
  constructor(p5, x, y, speed){
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.currentY = y;
    this.release = new Button(p5,x,y-20,200,40);
    this.font = loadFont("fonts/Georgia.ttf");
    textSize(20);
    textFont(this.font);
  }

  levels(){
    fill(180);
    noStroke();
    text("Limbo", this.x + 50, 280);
    text("Lust", this.x + 50, 480);
     text("Gluttony", this.x + 50, 680);
     text("Greed", this.x + 50, 880);
     text("Wrath", this.x + 50, 1080);
    // text("Heresy", this.x + 50, 780);
    // text("Violence", this.x + 50, 880);
    // text("Fraud", this.x + 50, 980);
    // text("Treachery", this.x + 50, 1080);
  }

  /**
  * Activates descending motion
  */
  descend(){
    stroke(0);
    line(this.x,this.currentY,this.x + 200, this.currentY);

    this.release.show();

    if (this.currentY < (this.p5.height - 50) && this.release.selected){
      this.currentY = this.currentY + this.speed;
    }

    this.levels();
  }

  /**
  * Return the Y coordinate of this elevator
  */
  getYCoord(){
    return this.currentY;
  }

  /**
  * Listen to touchEvents
  */
  updateTouch(){
    if (this.release.isMouseOver()){
      this.release.selected = !this.release.selected;
    }
  }

}
