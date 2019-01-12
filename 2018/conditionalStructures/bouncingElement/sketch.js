var myValue ;

// behaviours
var down;

// Only once
function setup(){
	createCanvas(400,400);
	myValue = 300;
	down = false;
}

//loop
function draw(){
		background(200);

	// top boundary
	if (myValue < 0){
		down = true;
	}

    // down boundary
	if (myValue > height){
		down = false;
	}

	// go down
	if (down == true){

		myValue = myValue + 4;
	} else {

		myValue = myValue - 4;
	}

	console.log (down);
	rect(width/2, myValue, 20, 20);
}