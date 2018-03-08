/*
p5js is an instance of p5js
*/

function magnifyingGlass(){

	this.start = -1;

	this.show = function (orgX, orgY, size, p5js){

		this.proximity = p5js.dist(p5js.mouseX, p5js.mouseY, orgX + (size/2), orgY + (size/2));

		// Check X boundaries
		if ( this.proximity < size){
			p5js.noFill();
			p5js.strokeWeight(1);
			p5js.stroke(180);
			p5js.rect(orgX - (size*9), orgY + size *2/3 , size * 8, this.start);
			p5js.fill(240);
			if (this.start > -(size+5) ){
				this.start -= 6;
			}
		
		} else {
			p5js.rect(orgX - (size*9), orgY + size *2/3 , size * 8, this.start);
			this.start = -1;
			p5js.fill(255);
		}

		p5js.strokeWeight(3);
		p5js.stroke(180);
		p5js.line(orgX,orgY,orgX+(size*2/3), orgY+(size*2/3));
		p5js.ellipse(orgX, orgY,size*2/3, size*2/3);
		p5js.strokeWeight(1);
	}
}
