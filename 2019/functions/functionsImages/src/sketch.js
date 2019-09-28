// images
let jungle;
let ocean;
let glaciar;
let volcano;
let desert;

// sounds
let sJungle;
let sOcean;
let sGlaciar;
let sVolcano;
let sDesert;

// Here we import all the images and sounds into the project
function setup(){
	let canvas = createCanvas(400,500);
	canvas.parent("#sketch_Location"); // This video explains this part: https://www.youtube.com/watch?v=eoXLD0Aw1YI
	jungle = loadImage("img/jungle.png")
	ocean = loadImage("img/ocean.png")
	glaciar = loadImage("img/glacial.png")
	volcano = loadImage("img/fire.png")
	desert = loadImage("img/desert.png")
}

// Here we draw all the elements on the canvas
function draw(){
	// Set the background
	background(240);
	// Draw the menu
	menu();
}

// This is a global function that agregates all the buttons
function menu(){
	button(40,10, 300, 80, jungle);
	button(40,100, 300, 80, ocean);
	button(40,190, 300, 80, glaciar);
	button(40,280, 300, 80, desert);
	button(40,370, 300, 80, volcano);
}

// This is the function for interactive buttons
function button(orgX, orgY, bWidth, bHeight, img){
	w = bWidth;
	h = bHeight;

	// Evaluate mouse Over
	var overX = mouseX > orgX && mouseX < orgX + w;
	var overY = mouseY > orgY && mouseY < orgY + h;

	// Determine if the mouse is over the rectangle
	if ( overX && overY ){
		// Over color
		if (mouseIsPressed){
			// Set to orange
			fill(250,150,0,100);
			// Change width
			w = 150;
			// control X position with mouse
			orgX = mouseX;
		} else {
			// Set to red
			fill(250,0,0,100);
		}
	} else {
		// No over color
		noFill();
		image(img, orgX, orgY, bWidth, bHeight);
	}
	// Draw rectangle
	//noStroke();
	rect (orgX, orgY,w,h,20);
}
