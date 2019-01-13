let jungle;
let ocean;
let glaciar;
let volcano;
let desert;

function setup(){
	createCanvas(400,500);
	jungle = loadImage("img/jungle.png")
	ocean = loadImage("img/ocean.png")
	glaciar = loadImage("img/glacial.png")
	volcano = loadImage("img/fire.png")
	desert = loadImage("img/desert.png")

}

function draw(){
	// Set the background
	background(240);
	// Draw the menu
	menu();
}

function menu(){
	drawRectangle(40,10, jungle);
	drawRectangle(40,100, ocean);
	drawRectangle(40,190, glaciar);
	drawRectangle(40,280, desert);
	drawRectangle(40,370, volcano);
}


function drawRectangle(orgX, orgY, img){
	w = 300;
	h = 80;

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
		image(img,orgX, orgY);
	}
	// Draw rectangle
	noStroke();
	rect (orgX, orgY,w,h);
}
