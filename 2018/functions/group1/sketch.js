

function setup(){
	createCanvas(400,400);

}

function draw(){
	background(240);
	menu();

}

function menu(){

	drawRectangle(10,10);
	drawRectangle(10,100);
	drawRectangle(10,190);
	drawRectangle(10,280);

}


function drawRectangle(orgX, orgY){
	w = 300;
	h = 80;

  	// Evaluate mouse Over
  	var overX = mouseX > orgX && mouseX < orgX + w;
  	var overY = mouseY > orgY && mouseY < orgY + h;

	// Determine if the mouse is over the rectangle
  	if ( overX && overY ){
  		// Over color
				
		if (mouseIsPressed){
			fill(250,150,0,100);
			w = 150;
			orgX = mouseX;

		} else {
			fill(250,0,0,100);
		}

	} else {
		// NO over color
		fill(250,0,0,10);
	}
	// Draw rectangle
  	rect (orgX, orgY,w,h);
}