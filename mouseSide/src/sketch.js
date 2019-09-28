
function setup(){
  createCanvas(700,400);
}

function draw(){
  background(150); // 0 black - 255 white
  line(width/2, 0, width/2, height);

  textSize(20);
  text(mouseX, 10,20);

  if(mouseX > width/2){
    text("right",mouseX + 10, mouseY);
  } else{
    text("left", mouseX + 10, mouseY);
  }

  // top / bottom

  line(0, height/2, width, height/2);


}
