

function setup(){
	createCanvas(400,400);

}

function draw(){
	background(240);
	//face(100,100,mouseX);
	//face(mouseX,300,mouseX);
crowd();
}


function crowd(){

	var counter = 0;
	while (counter < 20){
		//face(random(width), random(height), 30);
		face(50, 0 + counter*30, 30);
		counter = counter+1;
	}

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

