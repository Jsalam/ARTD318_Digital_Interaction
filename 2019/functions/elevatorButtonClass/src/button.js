class Button{
  constructor(p5, orgX, orgY, bWidth, bHeight, image, imgOver, imgSliding){
    this.p5 = p5;
    this.orgX = orgX;
    this.orgY = orgY;
    this.sliderX = orgX;
    this.bWidth = bWidth;
    this.sliderWidth = bWidth;
    this.bHeight = bHeight;
    this.image = image;
    this.imgOver = imgOver;
    this.imgSliding = imgSliding;
    this.selected = false;
  }

  /**
  * Evaluate mouse Over
  */
  isMouseOver(){
    let overX = this.p5.mouseX > this.orgX && this.p5.mouseX < this.orgX + this.bWidth;
    let overY = this.p5.mouseY > this.orgY && this.p5.mouseY < this.orgY + this.bHeight;
    return(overX && overY);
  }

  /**
  * display buttons on canvas
  */
  show(elevator){
    if (elevator >= this.orgY + this.bHeight){
      this.selected = false;
      this.sliderWidth = this.orgX;
    }
    // **** When the mouse is NOT over the button
    if (this.isMouseOver() == false){
      if (this.selected){
        this.pressed();
      }else{
        this.released();
      }
      // ***** When the mouse IS over or the screen touched
    }else {
      // If the mouse is not clicked
      if (this.p5.mouseIsPressed == false){
        if (this.selected){
          this.pressed();
        }else{
          this.over();
        }
        // If the mouse is clicked
      } else{
        this.calcSliderWidth();
        this.pressed();
      }
    }
  }

  /**
  * Button status when released
  */
  released(){
    // If the button has an image
    if (this.image){
      // Draw cover image
      image(this.image, this.orgX, this.orgY);

    } else {
      // Remove any over color
      fill(180);
      // Draw rectangle
      rect (this.orgX, this.orgY, this.bWidth, this.bHeight, 20);
    }
  }

  /**
  *Button status when pressed
  */
  pressed(){
    if (this.imgSliding){
      image(this.imgSliding, this.orgX, this.orgY, this.bWidth, this.bHeight);
    } else {
      // Se no fill color
      fill(220);
      // Draw bottom rectangle
      rect (this.orgX, this.orgY, this.bWidth, this.bHeight, 20);
    }

    // Set fill to orange
    fill(250,150,0,200);
    noStroke();
    // Draw sliding rectangle
    rect(this.sliderX, this.orgY, this.sliderWidth, this.bHeight, 20);
    stroke(0);
  }

/**
* Calculates the width of the sliding button 
*/
  calcSliderWidth(){
    this.sliderX = this.p5.mouseX;
    this.sliderWidth = (this.orgX - this.p5.mouseX)+ this.bWidth;
  }

  /**
  * Button status when over
  */
  over(){
    // If the device does NOT have a touchscreen
    if (isTouchDevice == false) {
      // If the button has an image
      if (this.imgOver){
        image(this.imgOver, this.orgX, this.orgY, this.bWidth, this.bHeight);
      } else {
        // Set fill to red
        fill(220);
        // Draw bottom rectangle
        rect (this.orgX, this.orgY, this.bWidth, this.bHeight, 20);
      }
      // **** If the device is has a touchscreen
    } else {
      // If the button has an image
      if (this.image){
        image(this.image, this.orgX, this.orgY, this.bWidth, this.bHeight);
      }else{
        // No over color
        fill(180);
        // Bottom rectangle
        rect (this.orgX, this.orgY, this.bWidth, this.bHeight, 20);
      }
    }
  }

  /**
  * Listen to touchEvents
  */
  updateTouch(){
    if (this.isMouseOver()){
      this.selected = !this.selected;
    }
  }
}
