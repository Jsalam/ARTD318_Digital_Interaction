/*
p5js is an instance of p5js
*/

function circleButton(icon){

	this.myIcon = icon;


	this.show = function (orgX, orgY, diameter, p5js){

		this.proximity = p5js.dist(p5js.mouseX, p5js.mouseY, orgX, orgY);

		// Check X boundaries
		if ( this.proximity < diameter/2){
			p5js.fill(100, 125, 200, 220);
		} else {
			p5js.fill(100, 125, 200);
		}

		p5js.noStroke();
		p5js.ellipse(orgX, orgY,diameter, diameter);

		if (this.myIcon != undefined){
			p5js.fill(170, 195, 255);
			p5js.textAlign(p5js.CENTER);
			p5js.textSize(40);
			p5js.text(this.myIcon, orgX , orgY+10);
			p5js.textAlign(p5js.LEFT);
		}
	}
}
