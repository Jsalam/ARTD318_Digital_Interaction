
let sfCompact;
let sfCompactUL;
let calibri;

function preload(){
	sfCompact = loadFont("./fonts/SFCompactDisplay-Thin.otf");
	sfCompactUL = loadFont("./fonts/SFCompactDisplay-Ultralight.otf");
	calibri = loadFont("../fonts/CalibriItalics.ttf");
}

// initiate p5 library
function setup(){
	var myCanvas = createCanvas(600,400);
	myCanvas.parent("p5Canvas")
}

// draw elements on screen
function draw(){
	background(255);
	textFont(sfCompact, 20);
	rect(40, 10, mouseX, mouseY);
	text("my new rectangle", mouseX, mouseY);
	textFont(calibri, mouseX);
	rect(40, 340, mouseY, -mouseX);
	text("other rectangle", 40, 340);

}
