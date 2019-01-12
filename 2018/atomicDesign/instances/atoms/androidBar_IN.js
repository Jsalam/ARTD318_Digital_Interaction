var instance = function (p5) {

var android;

	p5.setup = function(){
		p5.createCanvas(500,90);
		android = new androidBar(8);
	}


	p5.draw = function(){
		p5.background (240);
		android.show(20,30, 375, p5);
	}
}
var myP5 = new p5(instance, 'androidBar');