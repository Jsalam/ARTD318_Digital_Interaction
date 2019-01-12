

let x;
let y;

function setup(){
	createCanvas (500,500);
	x = 0;
	y = 0;
}

function draw(){
//	background(250);
	beginShape();
	vertex (x,y);
	vertex (mouseX, mouseY);
	// vertex (mouseX + 100, mouseY);
	// vertex (mouseX + 100, mouseY + 100);
	// vertex (mouseX, mouseY + 100);
	// vertex (mouseX, mouseY);
	endShape();

	beginShape();
	//vertex (x,y);
	vertex (width - mouseX, mouseY);
	vertex (width - mouseX - 100, mouseY);
	vertex (width - mouseX - 100, mouseY + 100);
	vertex (width - mouseX, mouseY + 100);
	vertex (width - mouseX, mouseY);
	endShape();
	x = mouseX;
	y = mouseY;
	// text("x: "+ (width - mouseX) + " y: "+mouseY, 10,10);
}
