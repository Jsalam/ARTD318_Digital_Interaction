function boxedTitle(text, alignment){
	this.myText = text;


	this.show= function (orgX, orgY, w, h, p5js){
		p5js.noFill();
		p5js.stroke(100, 125, 200, 120);
		p5js.rect(orgX, orgY, w, h);
		p5js.fill(100, 125, 200);
		if (alignment != undefined){
			p5js.textAlign(alignment);
		}
		p5js.textSize(20);
		p5js.text(this.myText, orgX + w/2, orgY + h*2/3);
		p5js.textAlign(p5js.LEFT);
	}

}