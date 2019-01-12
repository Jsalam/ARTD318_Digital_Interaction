/*
p5js is an instance of p5js
*/

function drawerButton(){

	this.show = function (orgX, orgY, p5js){
		var dp = 10;
		var w = 35;
		var h = dp * 3;

		this.withinX = p5js.mouseX > orgX && p5js.mouseX < orgX + w ;
		this.withinY = p5js.mouseY > orgY && p5js.mouseY < orgY + h;

		// Check X boundaries

		if ( this.withinX && this.withinY ){
			p5js.stroke(100, 125, 200, 120);
		} else {
			p5js.stroke(100, 125, 200);
		}

		p5js.strokeWeight(3);

		for (var i=0; i < 3; i++){
			p5js.line (orgX, orgY + (i*dp), orgX + w, orgY + (i*dp));
		}
		
		p5js.strokeWeight(1);
		p5js.stroke(100, 125, 200);
	}
}