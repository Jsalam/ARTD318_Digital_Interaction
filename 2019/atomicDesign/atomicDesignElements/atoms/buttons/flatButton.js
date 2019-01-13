/*
p5js is an instance of p5js
*/
function flatButton( orgX, orgY, w,h, myText, p5js){

	var withinX = p5js.mouseX > orgX && p5js.mouseX < orgX + w;
	var withinY = p5js.mouseY > orgY && p5js.mouseY < orgY + h;

	p5js.noFill();

	// Check X boundaries

	if ( withinX && withinY ){
		p5js.stroke(100, 125, 200, 120);
	} else {
		p5js.stroke(100, 125, 200);
	}
    p5js.textAlign(p5js.CENTER);
	p5js.rect(orgX, orgY, w, h);
	p5js.fill(100, 125, 200);
	p5js.text(myText, orgX + w/2, orgY + h/2);
	p5js.textAlign(p5js.LEFT);
}