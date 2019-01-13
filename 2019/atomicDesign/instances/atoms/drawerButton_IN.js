var instance = function (p5js) {

var button;

	p5js.setup = function(){
		p5js.createCanvas(500,90);
		button = new drawerButton()
	}


	p5js.draw = function(){
		p5js.background (240);
		button.show(50,35, p5js);
	}
}
var myP5 = new p5(instance, 'drawerButton');