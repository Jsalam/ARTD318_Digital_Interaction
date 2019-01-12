
var xR, yR; // variables of red circle
var xG, yG; // variables of green circle
var xB, yB; // variables of blue circle
var diam;  // diameter


// Only once
function setup(){
	createCanvas(400,400);
	// Initialize values for red circle 
	xR = 150;
	yR = 150;

	// Initialize values for green circle 
	xG = 250;
	yG = 150;

	// Initialize values for blue circle 
	xB = width/2;
	yB = 250;

	diam = 200; // diameter

}

//loop
function draw(){
	background(200);
	
	// detect proximity for all circles
	var proxR = dist(xR,yR,mouseX,mouseY);
	var overR = proxR < diam/2; //this is a boolean expression

	var proxG = dist(xG,yG,mouseX,mouseY);
	var overG = proxG < diam/2; //this is a boolean expression

	var proxB = dist(xB,yB,mouseX,mouseY);
	var overB = proxB < diam/2; //this is a boolean expression

	if (overR && overB && overG){ // if over all of the three circles
		fill (0,100); // set fill to black

		// draw all the circles
		ellipse(xR, yR, diam, diam);
		ellipse(xG, yG, diam, diam);
		ellipse(xB, yB, diam, diam);

	}else{

		if (overR) {
		fill(255,0,0,155); //saturated red 
		} else {
			fill(255,0,0,55); //pale red
		}

		ellipse(xR, yR, diam, diam); // draw red circle


		if (overG) {
			fill(0,255,0,155); //saturated red 
		} else {
			fill(0,255,0,55); //pale red
		}

		ellipse(xG, yG, diam, diam); // draw green circle

		if (overB) {
			fill(0,0,255,155); //saturated red 
		} else {
			fill(0,0,255,55); //pale red
		}

		ellipse(xB, yB, diam, diam); // draw blue circle
	}
}
