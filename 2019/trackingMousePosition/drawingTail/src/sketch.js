let pos = [];
let colorV;

function setup(){
	createCanvas (500,500);
	pos.push({x:width/2, y:height/2});
	colorV = color(0,125,125);
}

function draw(){
	background(250);

	noFill();

	stroke(colorV);

	beginShape();
	for(let p of pos){
		vertex(p.x, p.y);
	}
	endShape();

	pos.push({x:mouseX, y:mouseY});

	if (pos.length > 50){
		pos.shift();
	}
}
