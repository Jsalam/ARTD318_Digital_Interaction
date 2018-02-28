
var orgX;
var orgY;
var w;
var h;
var red, green, blue;

function setup(){
	createCanvas(500,500);
	w = 20;
	h = 20;
	// colors
	red = 0;
	green = 0;
	blue = 0;
}

function draw(){
	background(230);

	// Reset origin of columns
	orgY = 10;

	// Resetting color values
	red = 0;
	green = 0;
	blue = 150;

	// Reset counter of repetitive structure
	var counterY = 0

	while(counterY < 16){
		
		// Reset origin of rows
		orgX = 10;

		// Reset counter of repetitive structure
		var counterX = 0 ;

		while(counterX < 16){
			// Draw rectangle with current coordinates orgX, orgY
			drawRectangle();
			// Increase X coordinate for each rectangle
			orgX = orgX + 30;
			// Increase counterY
			counterX = counterX + 1;
		}

		// Increase Y coordinate for each rectangle
		orgY = orgY + 30;
		// Increase counterY
		counterY = counterY + 1;
		// Modify colors
		red = red + 5;
		green = green + 25;
	}
}


function drawRectangle(){

  	// Evaluate mouse Over
  	var overX = mouseX > orgX && mouseX < orgX + w;
  	var overY = mouseY > orgY && mouseY < orgY + h;

	// Determine if the mouse is over the rectangle
  	if ( overX && overY ){
		var colorValues = red + "," + green + "," + blue;
  		fill(80);
  		text(colorValues, mouseX-25, mouseY);
  		// Over color
		fill(250,0,0,100);
	} else {
		// NO over color
		fill(red, green, blue);
	}
	// Draw rectangle
  	rect (orgX, orgY,w,h);
}













