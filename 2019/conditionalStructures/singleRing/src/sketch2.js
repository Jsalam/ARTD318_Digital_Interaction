

// setup the conmditions of teh canvas abd other global variables
function setup(){
   createCanvas(800, 600);
}


function draw(){
  background(100);
  var onTopRed = false;
  var onTopBlue = false;

  // red
  var cXr = 300;
  var cYr = 300;
  var diam = 300;

  var d = dist(mouseX, mouseY, cXr, cYr);
  if (d < diam/2){
    onTopRed = true;
    fill(255,0,0,100);
  } else {
    onTopRed = false;
    fill(255);
  }

  ellipse(cXr,cYr,diam);


  // green
  var cX = 500;
  var cY = 300;
  var diam = 300;

  var d = dist(mouseX, mouseY, cX, cY);
  if (d < diam/2){
    onTopBlue = true;
    fill(0,255,0, 100);
  } else {
    onTopBlue = false;
    fill(255);
  }

  ellipse(cX,cY,diam);

  // evalute all of them

  if (onTopRed & onTopBlue){
    fill (0,100);
    ellipse(cXr,cYr,diam);
    ellipse(cX,cY,diam);
  }

}
