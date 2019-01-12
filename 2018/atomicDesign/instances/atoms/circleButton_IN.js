var instance = function (p5) {

var button;

	p5.setup = function(){
		p5.createCanvas(500,90);
		button = new circleButton('+');
	}


	p5.draw = function(){
		p5.background (240);
		button.show(70,45, 60, p5);
	}
}
var myP5 = new p5(instance, 'circularButton');