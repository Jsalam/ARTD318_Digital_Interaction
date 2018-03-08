var instance = function (p5) {

var status;

	p5.setup = function(){
		p5.createCanvas(500,90);
		status = new statusBar(8);
	}


	p5.draw = function(){
		p5.background (240);
		status.show(20,30, 300, p5);
	}
}
var myP5 = new p5(instance, 'statusBar');