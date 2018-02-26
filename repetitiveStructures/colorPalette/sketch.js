
var orgX;
var orgY;
var w;
var h;
var grey;
var transparency;
var red, green, blue;

function setup(){
	createCanvas(400,400);
	orgX = 100;
	orgY = 100;
	w = 20;
	h = 20;
	// colors
	grey = 0;
	transparency = 255;
	red = 0;
	green = 0;
	blue = 0;
}

function draw(){
	background(230);
		// Defining origin
		orgX = 50;
		orgY = 50;

		var counterY = 0

		grey = 0;
		red = 0;
		green = 0;
		blue = 150;

		while(counterY < 10){	
			counterY = counterY + 1;
			counterX = 0 ;
			orgX = 50;

			while(counterX < 10){

				counterX = counterX + 1;
				drawRectangle();

				// increase X
				orgX = orgX + 30;
			}

			grey = grey + 25;
			red = red + 5;
			green = green + 25;

			// increase Y
			orgY = orgY + 30;
		}
	}

	function drawRectangle(){

  	// Evaluate mouse Over
  	var overX = mouseX > orgX && mouseX < orgX + w;
  	var overY = mouseY > orgY && mouseY < orgY + h;

  	if ( overX && overY ){
		// Over color
		fill(250,0,0);

		var colorValues = red + "," + green + "," + blue;

		text(colorValues, mouseX, mouseY);

	} else {
		// NO over color
		//fill(grey,transparency);
		fill(red, green, blue);
	}

  	// Draw rectangle
  	rect (orgX, orgY,w,h);

  }













