var instance = function (p5) {

var title;

	p5.setup = function(){
		p5.createCanvas(500,90);
		title = new boxedTitle('TITLE BOX', p5.CENTER);
	}


	p5.draw = function(){
		p5.background (240);
		title.show(20,20, 300, 50, p5);
	}
}
var myP5 = new p5(instance, 'titleInstance');