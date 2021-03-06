function myShape2(p5, kind, posX, posY, width, seq){
	this.kind = kind;
	this.posX = 2;
	this.posY = 2;
	this.module = p5.width / width;
	this.width =  width;
	this.seq = seq;
	this.wasClicked = false;
	// edition mode
	this.editing = true;
	// GUI
	this.shapeButton
	this.posXSlider
	this.posYSlider
	this.sizeSlider
	// Adaptive
	this.uPosX ;
	this.uPosY;
	this.uHalfW;


	this.makeGUI = function(){
		myGUIs = [];
		this.shapeButton = p5.createButton('Switch Shape of ' + this.seq);
		this.posXSlider = p5.createSlider(0, this.module, 2, 1);
		this.posYSlider = p5.createSlider(0, this.module, 2, 1);
		this.sizeSlider = p5.createSlider(1, 10, 2, 1);
		this.shapeButton.id(seq);
		this.posXSlider.id(seq);
		this.posYSlider.id(seq);
		this.sizeSlider.id(seq);
		myGUIs.push(this.shapeButton);
		myGUIs.push(this.posXSlider);
		myGUIs.push(this.posYSlider);
		myGUIs.push(this.sizeSlider);
		myGUIs.push(p5.createP(''));

		return(myGUIs);
	}

	this.show = function(){

		this.uPosX = this.posX * this.module;
		this.uPosY = this.posY * this.module;
		this.uHalfW = (this.width * this.module)/2;

		p5.fill(250, 100);

		if (this.wasClicked){
			p5.fill(200, 100);
		}

		if (this.editing){
			p5.stroke(0,120);
			p5.line(this.uPosX, this.uPosY - this.uHalfW, this.uPosX, this.uPosY + this.uHalfW);
			p5.line(this.uPosX - this.uHalfW, this.uPosY, this.uPosX + this.uHalfW, this.uPosY);
		} else{
			p5.stroke(0,50);
		}

		if (this.kind == 'rect'){

		 	// show rectangle
		 	p5.rect(this.uPosX, this.uPosY, this.width * this.module, this.width * this.module);

		}else if (this.kind == 'ellipse'){

		 	// show ellipse
			p5.ellipse(this.uPosX, this.uPosY, this.width * this.module);

		}


		// label
		p5.noStroke();
		if (this.editing){
			p5.fill(150,0,0);
			p5.text('shape: ' +this.seq + ', size:'+ p5.nf(this.width,2,1), this.uPosX, this.uPosY);
		} else{
			p5.fill(50);
			p5.text(this.seq, this.uPosX, this.uPosY);
		}
	}

	// This function detects when the user clicks on top of this shape
	this.detectClick = function (index){

					this.left = this.uPosX - this.uHalfW;
					this.right = this.uPosX + this.uHalfW;

					this.top = this.uPosY - this.uHalfW;
					this.bottom = this.uPosY + this.uHalfW;

		if (!this.editing){
			if (index == this.seq){
				if (this.kind == 'rect'){

					// evaluate proximity
					// p5.fill(0,255,125,100);
					// p5.rectMode(p5.CORNER);
					// p5.rect(this.left,this.top,this.width, this.width);
					// p5.rectMode(p5.CENTER);

					if (p5.mouseX > this.left && p5.mouseX < this.right && p5.mouseY > this.top && p5.mouseY < this.bottom){
						//p5.ellipse(p5.mouseX, p5.mouseY, 10, 10);
						if (p5.mouseIsPressed){
							this.wasClicked = true;
						}
					}

				}else if (this.kind == 'ellipse'){

					// evaluate proximity
					if (p5.dist(p5.mouseX, p5.mouseY, this.uPosX, this.uPosY) < this.uHalfW){
						if (p5.mouseIsPressed){
							this.wasClicked = true;
						}
					}
				}
			}
		}
		return this.wasClicked;
	}

	// This function switches the shape of this element
	this.switchShape = function (){

		if (this.editing){

			if (this.kind == 'rect'){

				this.kind = 'ellipse';

			} else if (this.kind = 'ellipse') {

				this.kind = 'rect';
			}
		}
	}

	// This changes the size
	this.setSize = function (valS){
		if (this.editing)
			this.width = valS;
	}

	// This changes the X position of the shape
	this.setX = function(valX){
		if (this.editing)
			this.posX = valX;
	}

	// This changes the Y position of the shape
	this.setY = function(valY){
		if (this.editing)
			this.posY = valY;
	}

	// This enables or disables the editing mode
	this.switchEditing = function(){
		this.editing = !this.editing;

	}

	this.updateModule = function(val){
		if (this.editing)
			this.module = val;
	}

	this.updateSizeSlider = function(val){
	 	this.sizeSlider.elt.max = val;
	 		 	this.posXSlider.elt.max = val;
	 		 		 	this.posYSlider.elt.max = val;
	}

	this.updatePosXSlider = function(val){
	 	this.posXSlider.elt.max = val;
	}

	this.updatePosYSlider = function(val){
	 	this.posYSlider.elt.max = val;
	}
}
