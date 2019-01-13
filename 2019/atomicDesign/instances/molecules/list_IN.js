
var instance = function (p5js){

var myList;

	p5js.setup = function(){
		p5js.createCanvas (400,250);
		myList = new list(3, p5js, "LIST NAME");
	}

	p5js.draw = function(){
		p5js.background(240);
		myList.show(40, 25 , 300, 40, p5js)
	}
}

var myP5 = new p5(instance, 'buttonList');