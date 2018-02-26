
var orgX, orgY, w, h;

var red, green, blue;

function setup(){
	createCanvas (500,500);
	orgX = 100;
	orgY = 60;
	w = 30;
	h = 30;
	red = 0;
	green = 0;
	blue = 0;

}

function draw(){
	background(240);

	// reset colors

	green = 0;
	red = mouseX;

// set origin
orgX = 100;

	// Repetitive structure 2
	// Shifting columns
	var counterX = 0;

	while (counterX < 10){
		orgX = orgX + 35;
		counterX = counterX + 1;

		orgY = 60;

		green = green + 15;

		// Repetitive structure 1
		// Drwaing columns
		var counterY = 0 ;

		while(counterY < 10){
			drawBox();
			orgY = orgY + 35
			counterY = counterY + 1;
		}

	}
}



function drawBox(){

	var withinX = mouseX > orgX && mouseX < orgX + w;
	var withinY = mouseY > orgY && mouseY < orgY + h;

	// Check X boundaries

	if ( withinX && withinY ){

		fill(red, green, blue, 80);
		var myColors = red + "," + green + ","+ blue;
		fill(0, 100);
		text(myColors, 140, 50);

	} else {

		fill(red, green, blue);
	}

	rect(orgX, orgY, w, h);

}