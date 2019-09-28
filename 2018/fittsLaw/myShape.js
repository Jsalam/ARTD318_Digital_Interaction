function myShape(p5, kind, posX, posY, width, seq){
	this.kind = kind;
	this.posX = posX;
	this.posY = posY;
	this.module = 10;
	this.width =  2;
	this.seq = seq;
	this.wasClicked = false;
	// edition mode
	this.editing = true;
	// GUI
	this.shapeButton
	this.posXSlider
	this.posYSlider
	this.sizeSlider


	this.makeGUI = function(){
		myGUIs = [];
		this.shapeButton = p5.createButton('Switch Shape of ' + this.seq);
		this.posXSlider = p5.createSlider(0, p5.width, 50);
		this.posYSlider = p5.createSlider(0, p5.height, 50);
		this.sizeSlider = p5.createSlider(1, 10, 2, 1);
		this.shapeButton.id(seq);
		this.posXSlider.id(seq);
		this.posYSlider.id(seq);
		this.sizeSlider.id(seq);
		myGUIs.push(this.shapeButton);
		myGUIs.push(this.posXSlider);
		myGUIs.push(this.posYSlider);
		myGUIs.push(this.sizeSlider);
		return(myGUIs);
	}

	this.show = function(){

		p5.fill(250, 100);

		if (this.wasClicked){
			p5.fill(200, 100);
		}

		if (this.editing){
			p5.stroke(0,120);
			p5.line(this.posX, this.posY - ((this.width * this.module)/2), this.posX, this.posY +((this.width * this.module)/2));
			p5.line(this.posX - ((this.width * this.module)/2), this.posY, this.posX +((this.width * this.module)/2), this.posY);
		} else{
			p5.stroke(0,50);
		}

		if (this.kind == 'rect'){

			// show rectangle
			p5.rect(this.posX, this.posY, this.width * this.module, this.width * this.module);
			
		}else if (this.kind == 'ellipse'){

			// show ellipse
			p5.ellipse(this.posX, this.posY, this.width * this.module);

		}


		// label
		p5.noStroke();
		if (this.editing){
			p5.fill(150,0,0);
			p5.text(this.seq + ' x:' + this.posX +',y:' +this.posY + ',z:'+this.width, this.posX, this.posY);
		} else{
			p5.fill(50);
			p5.text(this.seq, this.posX, this.posY);
		}
	}

	// This function detects when the user clicks on top of this shape
	this.detectClick = function (index){

					this.half = ((this.width * this.module)/2);
					this.left = this.posX - this.half;
					this.right = this.posX + this.half;

					this.top = this.posY - this.half;
					this.bottom = this.posY + this.half;

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
					if (p5.dist(p5.mouseX, p5.mouseY, this.posX, this.posY) < (this.width * this.module)/2){
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
	}
}