var gridList = function (w,h){

	var buttonsGL = new Array();
	var count = 1;
	for (var j = 0 ; j < h; j++){
		var row = new Array(); 
		for (var i = 0 ; i < w; i++){	
			row [i] = new circleButton(count);
			count ++;
		}
		buttonsGL[j] = row;
	}

	this.showArray = function (p5js){
		for (var j = 0 ; j < buttonsGL.length; j++){
			for (var i= 0 ; i < buttonsGL[i].length; i++){	
				buttonsGL[j][i].show(100 + i* 82, 60 + j*82, 80, p5js);
			}
		}
	}
}