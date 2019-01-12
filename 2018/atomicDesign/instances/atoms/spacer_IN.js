var instance = function (p5) {

var spacer;

	p5.setup = function(){
		p5.createCanvas(500,90);
		spacer = new contentSpacer(8);
	}


	p5.draw = function(){
		p5.background (240);
		spacer.show(20,40, 300, p5);
	}
}
var myP5 = new p5(instance, 'contentSpacer');