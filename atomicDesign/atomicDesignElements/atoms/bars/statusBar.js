/*
pd : height in dp iunits
p5js: p5js instance
*/
function statusBar (dp){

	this.dp = dp;

	this.show = function (posX, posY, w, p5js){
		p5js.fill(0,150,150,100);
		p5js.noStroke();
		p5js.rect(posX, posY, w, this.dp*4);
		p5js.textSize(16);
		p5js.text("12:00", posX + w - 70, posY + 22)
	}
}
