var mySound;
var soundPlaying = false;


function preload(){
		// set the global sound formats
	soundFormats('wav');
	// load either beatbox.mp3, or .ogg, depending on browser
	mySound = loadSound('sounds/distant-explosion.wav');
}

// Only once
function setup(){
	createCanvas(700,600);
}

//loop
function draw(){
	background(200);
	// circle center
	var c1x = 350;
	var c1y = 300;
	var diam = 300;
	// detect mouse proximity and store that value in the variable
	var proximityC1 = dist(mouseX, mouseY, c1x, c1y);
	// store the boolean value (true or false)
	var overC1 = proximityC1 < diam/2;
	// If mouse is on top
	if (overC1 == true){
		// set fill to red
		fill(255,0,0, 100);
		// play sound
		if (!mySound.isPlaying()){
			mySound.play();
		}
	} else {
		// remove fill
		noFill();

	}
	// set stroke color to white
	stroke(255,0,0);
	//stroke thickness
	strokeWeight(4);
	// draw ellipse
	ellipse(c1x,c1y,diam);
}
