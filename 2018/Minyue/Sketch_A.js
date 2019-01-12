var myIcon;

function setup(){

var cnv = createCanvas(800, 800);
  	var x = (windowWidth - width) / 2;
  	var y = (windowHeight - height) / 2;
  	cnv.position(x, y);
	myIcon = new Icon(10,10,400,400);
	myIcon.init();
}

function draw(){
	//background(255, 100);
	clear();
	myIcon.show();

}

function Icon(xPos, yPos, wIcon, hIcon){
	this.x = xPos;
	this.y = yPos;
	this.w = wIcon;
	this.h = hIcon;

	// Bar elements
	this.myTopBars = [];
	this.barWidth = 60;
	this.barHeight = 200;
	this.gap = 10;


	this.init = function(){

		for ( var i=0 ; i < 6; i++){
			this.xPosition = this.x + (i * (this.barWidth + this.gap));
			this.yPosition = this.y;
			this.myTopBars[i] = new Bar( this.xPosition, this.yPosition, this.barWidth, this.barHeight);
			this.myTopBars[i].setFactor((i/10)+0.3);
		}
	}

	this.show = function(){
		for ( var i=0 ; i < 6; i++){
			this.myTopBars[i].show(this.isMouseOver());
		}
	}

	this.isMouseOver = function(){
		if (mouseX > this.x && mouseX < (this.x+this.w) && mouseY > this.y && mouseY < this.y+this.h){
			return true;

		} else {
			
			return false;
		}
	}
}

function Bar(xPos, yPos, wBar, hBar){
	this.x = xPos;
	this.y = yPos;
	this.w = wBar;
	this.hTop = hBar;
	this.hBot = -hBar;
	this.iFactorT = 1;
	this.iFactorB = 1;
	this.speed = 0.02;

	this.tFactorT;
	this.tFactorB;



	this.setFactor = function(factor){
		this.tFactorT = factor;
		this.tFactorB = 1 - factor;
	}
	
	this.show = function( onTop ){


		if (onTop == true){

			if (this.iFactorT > this.tFactorT){
				this.iFactorT = this.iFactorT - this.speed;
			}

			if (this.iFactorB > this.tFactorB){
				this.iFactorB = this.iFactorB - this.speed;
			}

			fill(130);

		} else{
			
			this.iFactorT = 1;
			this.iFactorB = 1;

			fill(100);

		}
		
		// TOP
		noStroke();

		rect(this.x,this.y,this.w,this.hTop * this.iFactorT);

		// BOTTOM
		rect(this.x,this.y + 2*this.hTop, this.w, this.hBot * this.iFactorB);
	}
}