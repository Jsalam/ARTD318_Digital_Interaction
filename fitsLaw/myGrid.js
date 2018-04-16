function myGrid(p5){

	this.showHrz = function(val){

		for (var i=0; i < p5.height; i+= val){
			p5.stroke(255,0,0,20);
			p5.line(0,i,p5.width,i);
		}
	}

	this.showVrt = function(val){

		for (var i=0; i < p5.width; i+= val){
			p5.stroke(255,0,0,20);
			p5.line(i,0,i,p5.height);
		}
	}

	this.show = function(val){
		if (val < 5){
			val = 5;
		}
		this.showVrt(val);
		this.showHrz(val);
	}
}