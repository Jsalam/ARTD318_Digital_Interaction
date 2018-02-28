

function setup(){
	createCanvas(400,400);

}

function draw(){
	background(240);
	face(100,100,mouseX);
	face(mouseX,300,mouseX);
}



function face(orgX, orgY, diam){
	// var orgX = 200;
	// var orgY = 200;
	// var diam = 140;

	// Face outline
	ellipse(orgX, orgY, diam, diam);

	// left eye
	ellipse(orgX - diam/4, orgY - diam/4, diam/10);

	// right eye
	ellipse(orgX + diam/4, orgY - diam/4, diam/10);
}

