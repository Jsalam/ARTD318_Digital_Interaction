var instance = function (p5js) {

var button;

	p5js.setup = function(){
		p5js.createCanvas(500,90);
		button = new rectButton('RECT BUTTON')
	}


	p5js.draw = function(){
		p5js.background (240);
		button.show(20,20, 300, 50, p5js);
	}
}
var myP5 = new p5(instance, 'rectButton');