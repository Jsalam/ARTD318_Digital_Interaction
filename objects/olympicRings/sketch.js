
var oRings;

// Only once
function setup(){
	createCanvas(400,400);
	oRings = new olympicRings();
	oRings.setup();
}

//loop
function draw(){
	background(200);
	oRings.show();
}



function olympicRings(){
	var redCircle = new interactiveCircle(150,130,150, 'red');
	var greenCircle = new interactiveCircle(250,130,150, 'green');
	var blueCircle = new interactiveCircle(width/2,230,150, 'blue');

	this.setup = function(){
		redCircle.setup();
		greenCircle.setup();
		blueCircle.setup();
	}

	this.show = function(){
		redCircle.detectProximity();
		greenCircle.detectProximity();
		blueCircle.detectProximity();
		
		blueCircle.setColor();
		greenCircle.setColor();
		redCircle.setColor();

		if (redCircle.over && greenCircle.over && blueCircle.over){
			redCircle.setBlack();
			greenCircle.setBlack();
			blueCircle.setBlack();
		}

		redCircle.show();
		greenCircle.show();
		blueCircle.show();
	}
}


function interactiveCircle(xA, yA, diameterA, col){

	this.over;
	this.mycolor;
	this.colorName;

	this.setup = function(){
		over = false;
		this.colorName = col;
	}

	this.detectProximity = function (){
		this.proximity= dist(xA, yA, mouseX, mouseY);
		this.over = (this.proximity < diameterA/2);
	}

	this.setColor = function (){
		if (this.over){
			// red
			if (this.colorName == 'red'){
				this.mycolor= color(255,0,0, 100);
			}
			if (this.colorName == 'green'){
				this.mycolor= color(0,255,0, 100);
			}
			if (this.colorName == 'blue'){
				this.mycolor= color(0,0,255, 100);
			}
		}else{
			if (this.colorName == 'red'){
				this.mycolor= color(255,0,0,50);
			}
			if (this.colorName == 'green'){
				this.mycolor= color(0,255,0,50);
			}
			if (this.colorName == 'blue'){
				this.mycolor= color(0,0,255,50);
			}
		}
	}

	this.show = function (){
		fill(this.mycolor);
		ellipse(xA,yA,diameterA,diameterA);
	}

	this.setBlack = function (){
		this.mycolor= color(0, 100);
	} 
}