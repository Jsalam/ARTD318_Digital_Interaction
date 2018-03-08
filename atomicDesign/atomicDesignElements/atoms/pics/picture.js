var picture = function(text){

	var myLabel = new label(text);

	this.show = function (iX, iY, w, p5js){
		p5js.stroke(125,125,255,180);
		p5js.fill(125,125,255,80);
		p5js.rect (iX, iY, w, (w/3)*2);
		p5js.line (iX, iY, iX + w, iY + (w/3)*2)
		p5js.line (iX, iY + (w/3)*2, iX + w, iY)
		myLabel.show (iX+72, iY + 200, 37,p5js); // lX, lY, fontSize, p5js
	}
}