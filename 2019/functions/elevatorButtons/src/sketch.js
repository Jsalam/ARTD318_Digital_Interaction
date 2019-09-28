// images
let dante;
let danteOver;
let danteSliding;

// touchDetection
let touchDevice;

// Here we import all the images and sounds into the project
function preload(){
	// Load images
	dante = loadImage("img/dante.png");
	danteOver = loadImage("img/danteOver.png");
	danteSliding = loadImage("img/danteSliding.png");
}


// Here we setup the canvas
function setup(){
	// Create a canvas
	let canvas = createCanvas(550,1200);
	// Anchor canvas to specific location on HTML file
	canvas.parent("#sketch_Location"); // This video explains this part: https://www.youtube.com/watch?v=eoXLD0Aw1YI
	// detect if The device is a touch screen
	touchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
}

// Here we draw all the elements on the canvas
function draw(){
	// Set the background
	background(240);
	// Draw the menu
	button(40,120, 470, 180, dante, danteOver, danteSliding);
	button(40,320, 470, 180 );
	button(40,520, 470, 180);
	button(40,720, 470, 180);
	button(40,920, 470, 180);
}


// This is the function for interactive buttons
function button(orgX, orgY, bWidth, bHeight, img, imgOver, imgSliding){

	var selected = false;

	// Evaluate mouse Over
	var overX = mouseX > orgX && mouseX < orgX + bWidth;
	var overY = mouseY > orgY && mouseY < orgY + bHeight;

	// **** Determine if the mouse is over the button
	if (overX && overY){
		// **** When the mouse is NOT pressed or the screen is not touched
		if (mouseIsPressed == false){
			// If the device does NOT have a touchscreen
			if (touchDevice == false) {
				// If the button has an image
				if (imgOver){
					image(imgOver, orgX, orgY, bWidth, bHeight);
				} else {
					// Set fill to red
					fill(250,0,0,100);
					// Draw bottom rectangle
					rect (orgX, orgY, bWidth, bHeight, 20);
				}
				// **** If the device is has a touchscreen
			} else {
				// If the button has an image
				if (img){
					image(img, orgX, orgY, bWidth, bHeight);
				}
				// No over color
				noFill();
				// Bottom rectangle
				rect (orgX, orgY, bWidth, bHeight, 20);
			}
			// ***** When the mouse IS pressed or the screen touched
		} else{

			if (imgSliding){

				image(imgSliding, orgX, orgY, bWidth, bHeight);
			} else {
				// Se no fill color
				noFill();
				// Draw bottom rectangle
				rect (orgX, orgY, bWidth, bHeight, 20);
			}

			// Set fill to orange
			fill(250,150,0,200);
			noStroke();
			// Draw sliding rectangle
			rect(mouseX, orgY, ((orgX - mouseX) + bWidth), bHeight, 20);
			stroke(0);
		}
		//**** When the mouse is not over
	}else {
		// If the button has an image
		if (img){
			// Draw cover image
			image(img, orgX, orgY);

		} else {
			// Remove any over color
			noFill();
			// Draw rectangle
			rect (orgX, orgY, bWidth, bHeight, 20);
		}
	}
}
