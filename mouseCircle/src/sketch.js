
function setup(){
  createCanvas(700,400);
}

function draw(){
  background(150); // 0 black - 255 white
  ellipse(350,200,300,300);
  // estimate the disnce from the mouse to the center
  var proximity = dist(mouseX, mouseY, 350,200);
  fill(0,0,255,30);
  if (proximity < 150){
      textSize(20);
      text("over", mouseX, mouseY);
      fill(0,0,255,130);
  }


}
