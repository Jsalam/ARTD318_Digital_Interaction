
// initiate p5 library
function setup(){
	var myCanvas = createCanvas(400,100);
	myCanvas.parent("p5Canvas")
}

// draw elements on screen
function draw(){
	text("my new rectangle", mouseX, mouseY);
	rect(40,10,300,80);
}
