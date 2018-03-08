
var instance = function (p5js){

	var grid;

	p5js.setup = function(){
		p5js.createCanvas (400,370);
		grid = new gridList(3,4);
	}

	p5js.draw = function(){
		p5js.background(240);
		grid.showArray(p5js);
	}
}

var myP5 = new p5(instance, 'c6');