function boxedTitle(text, alignment){
	var myText = text;
	var myAlignment = alignment;

	this.show= function (orgX, orgY, w, h, p5js){
		p5js.noFill();
		p5js.stroke(100, 125, 200, 120);
		p5js.rect(orgX, orgY, w, h);
		p5js.fill(100, 125, 200);
		if (myAlignment != undefined){
			p5js.textAlign(myAlignment);
			if (myAlignment == p5js.LEFT){
				orgX = orgX - w/2 + 74;
			}
		} else {
			p5js.textAlign(p5js.CENTER);
		}
		p5js.textSize(20);
		p5js.text(myText, orgX + w/2, orgY + h*2/3);
		p5js.textAlign(p5js.LEFT);
	}

}