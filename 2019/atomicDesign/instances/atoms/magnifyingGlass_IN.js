var instance = function (p5) {

var mGlass;

	p5.setup = function(){
		p5.createCanvas(500,90);
		mGlass = new magnifyingGlass();
	}


	p5.draw = function(){
		p5.background (240);
		mGlass.show(400,45, 40, p5);
	}
}
var myP5 = new p5(instance, 'magnifyinGlass');