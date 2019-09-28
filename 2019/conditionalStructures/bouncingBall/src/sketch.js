
var newYpos = 100;
var falling = true;
var diam = 10;

function setup(){
	createCanvas(600,600);
}

function draw(){
	background(255);
	bBall(mouseX);
}
function bBall(newXpos){
	// increment
	if (falling == true){
		newYpos = newYpos + 10;
	} else {
		// decreasing
		newYpos = newYpos - 10;
	}
	// switch direction
	if (newYpos > 600){
		falling = false;
		diam = diam + 50;
	}

	if (newYpos < 0){
		falling = true;
		diam = diam + 50;
	}

	ellipse(newXpos, newYpos, diam);

}
