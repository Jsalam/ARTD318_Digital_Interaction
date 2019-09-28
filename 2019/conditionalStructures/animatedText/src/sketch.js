// declare the variables for your fonts
var impact;
var courier;
// declare the variables for your images
var myImage;

// load your assets
function preload(){
	// fonts
	impact = loadFont("fonts/Impact.ttf");
	courier = loadFont("fonts/Courier_New_Bold.ttf");
	// images
	myImage = loadImage("images/a_sunset.jpeg");
}

// setup the canvas
function setup(){
	createCanvas(600, 600);
}

// draw the elements on canvas
function draw(){
	background(240);
	// image attributes
	imageMode(CENTER);
	image(myImage, 300, 300, mouseX*2, mouseX*2);
	// text attributes
	textAlign(CENTER,CENTER);
	textSize(mouseX);

	// first text
	fill(0, 100);
	textFont(impact);
	text("Awesome", 300, 300);

	// second text
	textFont(courier);
	text("guys", 300, 350);
}
