
var orgX;
var orgY;
var w;
var h;

function setup(){
	createCanvas(400,400);

}

function draw(){
	background(240);
	orgX = 10;
	orgY = 10;
	w= 300;
	h = 150;
	drawRectangle();

}


function drawRectangle(){

  	// Evaluate mouse Over
  	var overX = mouseX > orgX && mouseX < orgX + w;
  	var overY = mouseY > orgY && mouseY < orgY + h;

	// Determine if the mouse is over the rectangle
  	if ( overX && overY ){
  		// Over color
		fill(250,0,0,100);
	} else {
		// NO over color
		fill(250,0,0,10);
	}
	// Draw rectangle
  	rect (orgX, orgY,w,h);
}













