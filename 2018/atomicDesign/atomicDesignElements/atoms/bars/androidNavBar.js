/*
pd : height in dp iunits
p5js: p5js instance
*/
function androidBar (){

	this.dp = 48;

	this.show = function (posX, posY, w, p5js){
		p5js.fill(0,150);

		p5js.rect(posX, posY, w, this.dp);
				p5js.stroke(250);
		p5js.strokeWeight(3)
		var trn = 25;
		p5js.noFill();
		p5js.strokeCap(p5js.ROUND);
		p5js.triangle(posX + 90, posY + 10, posX+ 90, posY+ 10 + trn, posX+ 90 - trn, posY+ 10 + trn/2);
		p5js.ellipse(posX + w/2, posY + this.dp/2, trn, trn);
		p5js.rect(posX + w - (80+trn), posY + 12, trn, trn);
		p5js.noStroke();
	}
}
