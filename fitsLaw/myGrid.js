function myGrid(p5){

	this.showHrz = function(val){
		var moduleW = p5.width / val;
		for (var i=0; i <= val; i++){
			p5.stroke(255,0,0,20);
			p5.line(0, i*moduleW, p5.width, i*moduleW);
		}
	}

	this.showVrt = function(val){

	var moduleW = p5.width / val;
		for (var i=0; i <= val; i++){
			p5.stroke(255,0,0,20);
			p5.line(i*moduleW, 0, i*moduleW, p5.height);
		}
	}

	this.show = function(val){
		this.showVrt(val);
		this.showHrz(val);
	}
}