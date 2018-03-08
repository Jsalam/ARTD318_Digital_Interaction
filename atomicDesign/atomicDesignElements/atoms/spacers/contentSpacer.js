/*
dp is the hieght in dp units
p5js is an instance of p5js
*/
function contentSpacer (dp){

	this.height = dp;

	this.show = function(posX, posY, w, p5js){
	  p5js.fill(252,50,150);
	  p5js.noStroke();
	  p5js.rect(posX, posY, w, this.height);
	}
}



