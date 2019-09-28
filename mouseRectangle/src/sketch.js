
function setup(){
  createCanvas(700,400);
}

function draw(){
  background(150); // 0 black - 255 white
  rect(100,100, 500, 200);
  textSize(20);

  // fill white
  fill(255);

  // evaluates if the mouse is over the rect
  if(mouseX > 100 && mouseX < (100+500)){
    if(mouseY > 100 && mouseY < (100+200)){
      fill(248,0,255);
      text("mouse_over", mouseX + 10, mouseY);
      fill(0,0,255);
    }
  }



  // if the mouse is on top the rect is blue, else white
}
