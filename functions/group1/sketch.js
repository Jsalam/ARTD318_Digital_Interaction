


function setup(){
	createCanvas(400,400);

}

function draw(){
	background(240);

	drawRectangle(10,10);

	drawRectangle(20,120);

}


function drawRectangle(orgX, orgY){
	w = 300;
	h = 150;

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













