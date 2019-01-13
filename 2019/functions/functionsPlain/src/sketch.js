

function setup(){
	createCanvas(400,500);

}

function draw(){
	// Set the background
	background(240);
	// Draw the menu
	menu();
}

function menu(){
	drawRectangle(40,10);
	drawRectangle(40,100);
	drawRectangle(40,190);
	drawRectangle(40,280);
	drawRectangle(40,370);
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
			// Set to orange
			fill(250,150,0,100);
			// Change width
			w = 150;
			// control X position with mouse
			orgX = mouseX;
		} else {
			// Set to red
			fill(250,0,0,100);
		}
	} else {
		// No over color
		fill(250,0,0,10);
	}
	// Draw rectangle
	rect (orgX, orgY,w,h);
}
