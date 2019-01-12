function iPhoneX (p5js) { 

	this.screenHeight,
	this.screenHeight,
	this.pWidth,
	this.pHeight,
	this.externalArc,
	this.internalArc,
	this.thickness,
	this.posX,
	this.posY,
	this.screenX,
	this.screenY,

	this.setup = function(posX, posY){
		this.posX = posX;
		this.posY = posY;
		this.screenX = this.posX + 24;
		this.screenY = this.posY + 24;
		this.screenWidth = 375;
		this.screenHeight = 812;
		this.pWidth = this.screenWidth + 48;
		this.pHeight = this.screenHeight + 48;
		this.externalArc = 65;
		this.thickness = 25;
		this.internalArc = this.externalArc - this.thickness;
	};

	this.show = function(posX, posY){


		// Change position and screen origin only if parameters are not undefined
		if (posX != undefined && posY != undefined){
			this.posX = posX;
			this.posY = posY;
			this.screenX = this.posX + 24;
			this.screenY = this.posY + 24;
		}

		// Style
		p5js.stroke(255,0,0);
		p5js.strokeWeight(2);
		p5js.noFill();

		// External silhouette
		//Upper left corner
		p5js.arc(this.posX + this.externalArc, this.posY + this.externalArc, this.externalArc*2, this.externalArc*2, p5js.PI, p5js.PI + p5js.HALF_PI);
		// Upper right corner
		p5js.arc(this.posX+ this.pWidth  - this.externalArc , this.posY + this.externalArc,  this.externalArc*2, this.externalArc*2, p5js.PI + p5js.HALF_PI, 0);
		// Lower left corner
		p5js.arc(this.posX + this.externalArc, this.posY + this.pHeight - this.externalArc, this.externalArc*2, this.externalArc*2, p5js.HALF_PI, p5js.PI);
		// Lower right corner
		p5js.arc(this.posX+ this.pWidth  - this.externalArc,this.posY + this.pHeight - this.externalArc, this.externalArc*2, this.externalArc*2, 0, p5js.HALF_PI);

		// Top
		p5js.line(this.posX + this.externalArc, this.posY , this.posX+ this.pWidth  - this.externalArc, this.posY);
		// Right
		p5js.line(this.posX + this.pWidth, this.posY + this.externalArc, this.posX + this.pWidth, this.posY +  this.pHeight - this.externalArc);
		// Bottom
		p5js.line(this.posX + this.pWidth - this.externalArc, this.posY + this.pHeight, this.posX + this.externalArc , this.posY + this.pHeight );
		// Left
		p5js.line(this.posX, this.posY +  this.pHeight - this.externalArc, this.posX, this.posY + this.externalArc);

		// Internal silhouette
		//Upper left corner
		p5js.arc(this.posX + this.thickness + this.internalArc, this.posY + this.thickness + this.internalArc, this.internalArc*2, this.internalArc*2, p5js.PI, p5js.PI + p5js.HALF_PI);
		// Upper right corner
		p5js.arc(this.posX - this.thickness + this.pWidth  - this.internalArc , this.posY + this.thickness + this.internalArc,  this.internalArc*2, this.internalArc*2, p5js.PI + p5js.HALF_PI, 0);
		// Lower left corner
		p5js.arc(this.posX + this.thickness + this.internalArc, this.posY + this.pHeight - this.thickness- this.internalArc, this.internalArc*2, this.internalArc*2, p5js.HALF_PI, p5js.PI);
		// Lower right corner
		p5js.arc(this.posX - this.thickness + this.pWidth  - this.internalArc,this.posY + this.pHeight -this.thickness - this.internalArc, this.internalArc*2, this.internalArc*2, 0, p5js.HALF_PI);

		// Top
		//line(this.posX + this.externalArc, this.posY + this.thickness , this.posX+ this.pWidth  - this.externalArc, this.posY + this.thickness);
		p5js.line(this.posX + this.externalArc, this.posY + this.thickness , this.posX + 102, this.posY + this.thickness );
		p5js.arc(this.posX + 102, this.posY + this.thickness + 5, 10, 10, p5js.PI + p5js.HALF_PI, 0 );
		p5js.line(this.posX + 107, this.posY + this.thickness + 5, this.posX + 107, this.posY + this.thickness + 11  );
		p5js.arc(this.posX + 124, this.posY + 37, 34, 34, p5js.HALF_PI, p5js.PI  );
		p5js.line(this.posX + 124, this.posY + 37 + 17, this.posX + 124 + 176, this.posY + 37 + 17)
		p5js.arc(this.posX + 300, this.posY + 37, 34, 34, 0, p5js.HALF_PI  );
		p5js.line(this.posX + 317 , this.posY + 37, this.posX + 317, this.posY + this.thickness + 5);
		p5js.arc(this.posX + 322 , this.posY + this.thickness + 5, 10, 10,  p5js.PI, p5js.PI + p5js.HALF_PI );
		p5js.line(this.posX + 322, this.posY + this.thickness, this.posX+ this.pWidth  - this.externalArc, this.posY + this.thickness );

		// Right
		p5js.line(this.posX + this.pWidth - this.thickness, this.posY + this.externalArc, this.posX + this.pWidth - this.thickness, this.posY +  this.pHeight - this.externalArc);
		// Bottom
		p5js.line(this.posX + this.pWidth - this.externalArc, this.posY + this.pHeight - this.thickness, this.posX + this.externalArc , this.posY + this.pHeight - this.thickness );
		// Left
		p5js.line(this.posX + this.thickness, this.posY +  this.pHeight - this.externalArc, this.posX + this.thickness, this.posY + this.externalArc);

		// Camera
		p5js.ellipse(this.posX + 258, this.posY + 35, 10,10);

		// Speaker
		p5js.strokeWeight(4);
		p5js.line(this.posX + 192, this.posY + 35, this.posX + 233, this.posY + 35)

		p5js.strokeWeight(1);

		// outline guide
		p5js.stroke(0,155,255);
		p5js.rect(this.posX + 24, this.posY + 24,this.screenWidth,this.screenHeight);
		p5js.text(0+ ","+ 0,  this.posX + 24, this.posY + 24);
		p5js.text(this.screenWidth +","+ this.screenHeight,  this.posX + 25 + this.screenWidth, this.posY + 24 + this.screenHeight);
	}
}


