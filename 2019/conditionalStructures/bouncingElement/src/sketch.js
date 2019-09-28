var myValueX ;
var myValueY ;

// behaviours
var down;

// Only once
function setup(){
	createCanvas(400,400);
	myValueY = 300;
	myValueX = 10;
	down = false;
}

//loop
function draw(){
		background(200,50);

	// top boundary
	if (myValueY < 0){
		down = true;
		myValueX += 4;
	}

    // down boundary
	if (myValueY > height){
		down = false;
		myValueX += 4;
	}

	// go down
	if (down == true){

		myValueY = myValueY + 4;
	} else {
	// go up
		myValueY = myValueY - 4;
	}

	rect(myValueX, myValueY, 20, 20);
}
