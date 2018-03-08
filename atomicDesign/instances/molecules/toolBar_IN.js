/*
dp: hieght in dp units
p5js is an instance of p5js
*/

var instance = function (p5js){

	var myToolBar;

	p5js.setup = function(){
		p5js.createCanvas (500,90);
		myToolBar = new toolBar("INBOX", p5js);
	}

	p5js.draw = function(){
		p5js.background (240);

		myToolBar.show(20,20, p5js);
	}
}

var myP5 = new p5(instance, 'toolBar');