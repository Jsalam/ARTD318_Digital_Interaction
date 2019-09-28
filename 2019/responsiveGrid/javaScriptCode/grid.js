var grid = function(p5,n){

	let canvas;
	let containerCols = 6;
	let canvasW;
	let canvasH = 200;
	let node;
	let gridX = 5;
	let gridY = 5;
	let pixels = [];
	let pixelW;
	let pixelH;

	p5.setup= function(){
		canvasW = Math.round(window.innerWidth/containerCols);
		canvas = p5.createCanvas(canvasW,canvasH);
		node = p5._userNode.id;
		setupPixels();
	}

	p5.draw = function(){
		p5.background(245);
		let columnsS = document.getElementById('columns');
		let rowsS= document.getElementById('rows')
		if (columnsS.value != gridX || rowsS.value != gridY){
			gridX = columnsS.value;
			gridY = rowsS.value;
			setupPixels();
			document.getElementById('colsValue').innerHTML = columnsS.value;
			document.getElementById('rowsValue').innerHTML = rowsS.value;
		}
		drawGrid();
	}

	p5.windowResized = function(){
		if (window.innerWidth < 768){
			containerCols = 1;
		} else if (window.innerWidth < 992){
			containerCols = 6;
		} else{
			containerCols = 6;
		}
		canvasW = window.innerWidth/containerCols;
		pixelW = canvasW/gridX;
		pixelH = canvasH/gridY;
		p5.resizeCanvas(canvasW, canvasH);
		for (let pxl of pixels) {
			pxl.setWH(pixelW, pixelH);
		}
	}

	p5.mouseClicked = function(event){
		for (let pxl of pixels) {
			pxl.clicked(p5, event);
		}
	}

	function setupPixels(){
		pixelW = canvasW/gridX;
		pixelH = canvasH/gridY;
		pixels = [];
		for (var i = 0; i < gridX; i++) {
			for (var j = 0; j < gridY; j++) {
				let tmp = new Pixel(i, j, pixelW, pixelH);
				pixels.push(tmp);
			}
		}
	}

	function drawGrid (){
		for (let pxl of pixels) {
		//	pxl.setWH(p5.height/gridX, p5.width/gridY);
			pxl.show(p5);
		}
		p5.fill(0,80);
		p5.text(node,10,20);
	}
}
