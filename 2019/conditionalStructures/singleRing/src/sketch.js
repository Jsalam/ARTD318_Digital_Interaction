
// Only once
function setup(){
	createCanvas(700,600);
}

//loop
function draw(){
	background(200);
	// circle center
	var c1x = 200;
	var c1y = 200;
	var diam = 300;
	// detect mouse proximity and store that value in the variable
	var proximityC1 = dist(mouseX, mouseY, c1x, c1y);

	strokeWeight(1);

	// store the boolean value (true or false)
	var overC1 = proximityC1 < diam/2;

	// If mouse is on top
	if (overC1 == true){
		// set stroke color to white
		stroke(255,0,0);
		//stroke thickness
		strokeWeight(4);
		// set fill to red
		fill(255,0,0, 100);
		// draw ellipse
		ellipse(c1x,c1y,diam);
	} else {
		// set stroke color to white
		stroke(255,0,0);
		// stroke thickness
		strokeWeight(4);
		// remove fill
		noFill();
		// draw ellipse
		ellipse(c1x,c1y,diam);
	}

// ***** SECOND CIRCLE ******
	// circle center
	var c2x = 400;
	var c2y = 200;
	var diam2 = 300;
	// detect mouse proximity and store that value in the variable
	var proximityC2 = dist(mouseX, mouseY, c2x, c2y);

	strokeWeight(1);

	// store the boolean value (true or false)
	var overC2 = proximityC2 < diam/2;

	// If mouse is on top
	if (overC2 == true){
		// set stroke color to white
		stroke(0,255,0);
		//stroke thickness
		strokeWeight(4);
		// set fill to red
		fill(0,255,0, 100);
		// draw ellipse
		ellipse(c2x,c2y,diam2);
	} else {
		// set stroke color to white
		stroke(0,255,0);
		// stroke thickness
		strokeWeight(4);
		// remove fill
		noFill();
		// draw ellipse
		ellipse(c2x,c2y,diam2);
	}


	// ***** Third CIRCLE ******
		// circle center
		var c3x = 300;
		var c3y = 400;
		var diam3 = 300;
		// detect mouse proximity and store that value in the variable
		var proximityC3 = dist(mouseX, mouseY, c3x, c3y);

		strokeWeight(1);

		// store the boolean value (true or false)
		var overC3 = proximityC3 < diam/2;

		// If mouse is on top
		if (overC3 == true){
			// set stroke color to white
			stroke(0,0,255);
			//stroke thickness
			strokeWeight(4);
			// set fill to red
			fill(0,0,255, 100);
			// draw ellipse
			ellipse(c3x,c3y,diam3);
		} else {
			// set stroke color to white
			stroke(0,0,255);
			// stroke thickness
			strokeWeight(4);
			// remove fill
			noFill();
			// draw ellipse
			ellipse(c3x,c3y,diam3);
		}

		if(overC1 == true && overC2 == true && overC3 == true){
			// all black
			fill(0);
			ellipse(c1x,c1y,diam);
			ellipse(c2x,c2y,diam);
			ellipse(c3x,c3y,diam);
		}
}
