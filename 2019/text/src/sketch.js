// declare global variables
let impact;
let scale = 10;
// boolean variable used to control the growing direction
let growing = true;

// Load fonts and store them in variables
function preload() {
  impact = loadFont('fonts/Georgia.ttf');
}

// setup the canvas
function setup() {
  createCanvas(900, 500);
	// configure alignment of text
	textAlign(CENTER, CENTER);
}

// draw elements on canvas
function draw() {
  background(255,50);
	// control the growing direction
	if (growing){
		// scale increases
		scale = scale + 1;
	} else {
		// scale decreases
		scale = scale - 1;
	}
	// growth boundaries
	// start shrinking if the scale is greater than 200
	if (scale > 200){
		growing = false;
	}
	// start growing if the scale is less than 0
	if (scale < 0){
		growing = true;
	}
	// Se the font
  textFont(impact);
	// set the scale
	textSize(scale);
	// set the color
	fill(40,40,35);
	// print the text on screen
	text('This is my story', mouseX, mouseY);
}
