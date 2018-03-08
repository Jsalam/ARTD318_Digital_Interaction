/*
p5js is an instance of p5js
*/

function rectButton(caption){

	this.myLabel;
	
	if (caption != undefined){
		this.myLabel = new label(caption);

	}

	this.show = function (orgX, orgY, w, h, p5js){

		this.withinX = p5js.mouseX > orgX && p5js.mouseX < orgX + w ;
		this.withinY = p5js.mouseY > orgY && p5js.mouseY < orgY + h;

		// Check X boundaries

		if ( this.withinX && this.withinY ){
			p5js.fill(50, 75, 150, 220);
		} else {
			p5js.fill(100, 125, 200,100);
		}

		p5js.noStroke();
		p5js.rect(orgX, orgY, w, h);

		if (this.myLabel != undefined) {
			p5js.fill(50, 75, 150);
			p5js.textAlign(p5js.CENTER);
			this.myLabel.show(orgX + w/2, orgY + h*2/3, 20, p5js);
			p5js.textAlign(p5js.LEFT);
		}

	}
}
