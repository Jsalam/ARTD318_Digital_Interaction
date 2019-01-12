function label (string){
	this.myText = string;

	this.show= function (lX, lY, fontSize, p5js){
		p5js.textSize(fontSize);
		p5js.text(this.myText, lX, lY);
		p5js.textSize(12);
	}
}