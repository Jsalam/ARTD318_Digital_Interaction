

function setup(){
	createCanvas(400,400);

}

function draw(){
	background(240);
	//face(100,100,mouseX);
	//face(mouseX,300,mouseX);
    crowd2();
}


function crowd(){

	var counter = 0;
	while (counter < 20){
		//face(random(width), random(height), 30);
		face(50, 50 + counter*30, 30);
		counter = counter+1;
	}

}


function crowd2(){
	face(50, 50 + 30, 30);
	face(50, 50 + 60, 30);
	face(50, 50 + 90, 30);
	face(50, 50 + 120, 30);
	face(50, 50 + 150, 30);
}

function face(orgX, orgY, diam){
	// var orgX = 200;
	// var orgY = 200;
	// var diam = 140;

	var proximity = dist( mouseX, mouseY,orgX, orgY);

	if (proximity <= diam/2){
		fill(250,125,0,100)
	} else{
		fill(250, 100);
	}

	// Face outline
	ellipse(orgX, orgY, diam, diam);

	// left eye
	ellipse(orgX - diam/4, orgY - diam/4, diam/10);

	// right eye
	ellipse(orgX + diam/4, orgY - diam/4, diam/10);


}

