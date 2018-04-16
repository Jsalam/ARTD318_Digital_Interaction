var instance = function (p5) {

var millisecond;
var timeStart;
var myShapes;
var started = false;
var finished = false;
var sequence;

// GUI
var editingButton;
var startButton;

	p5.setup = function(){
		p5.createCanvas(960,500);

		makeGUI();
		timeStart = 0;
		myShapes = [];
		sequence = 1;

		for (var i=0; i< 5; i++){
			myShapes.push(new myShape(p5, 'rect', 50, 50, 50, i + 1));
		}
		// Initiate GUI

		for (var i=0; i< myShapes.length; i++){
			myShapes[i].makeGUI();		
		}

		for (var i=0; i< myShapes.length; i++){
			myShapes[i].shapeButton.mouseReleased(switchShape);
			myShapes[i].posXSlider.mouseMoved(posXSlider);	
			myShapes[i].posYSlider.mouseMoved(posYSlider);	
			myShapes[i].sizeSlider.mouseMoved(sizeSlider);		
		}
		

		
		editingButton.mouseReleased(switcheditingButtons);
		startButton.mouseReleased(reset);

		p5.rectMode(p5.CENTER);
		p5.textAlign(p5.CENTER,p5.CENTER);

	}

	p5.draw = function(){
		p5.background(240);

		// Start counter
		if (started && !finished){
			millisecond = (p5.millis() - timeStart)/1000;
		}
		// display time
		if (started){
			p5.text ('elapsed time: ' + p5.nf(millisecond, 2, 2), 80,20);
			//text ('sequence: ' + sequence, 80, 40);
		}

		// Show buttons
		for (var i=0; i< myShapes.length; i++){
			myShapes[i].show();		
		}

		// Detect clicks
		for (var i=0; i< myShapes.length ; i++){
			if (myShapes[i].detectClick(sequence)){
				sequence = myShapes[i].seq + 1;
			}
			if (sequence > 1){
				started = true;
				if (timeStart == undefined)
					timeStart = p5.millis();
			}

		}

		// verify completion
		for (var i=1; i< myShapes.length; i++){
			if ( myShapes[0].wasClicked != false){
				if (myShapes[i].wasClicked != myShapes[i-1].wasClicked){
					finished = false;
					break;
				}else{
					finished = true;
				}
			}
		}

	}

	var makeGUI = function(){
		editingButton = p5.createButton("Switch editing mode");
		startButton = p5.createButton("Reset timer and sequence");
	}

	var switcheditingButtons = function (){
		for (var i=0; i< myShapes.length; i++){
			myShapes[i].switchEditing();
			if (!myShapes[i].editing){
				myShapes[i].shapeButton.hide();
				myShapes[i].posXSlider.hide();
				myShapes[i].posYSlider.hide();
				myShapes[i].sizeSlider.hide();
			}	else{
				myShapes[i].shapeButton.show();
				myShapes[i].posXSlider.show();
				myShapes[i].posYSlider.show();
				myShapes[i].sizeSlider.show();
			}	
		}
		reset();
	}

	var reset = function(){
		timeStart = undefined;
		millisecond = 0;
		sequence = 1;
		started = false;

		for (var i=0; i< myShapes.length ; i++){
			myShapes[i].wasClicked = false;
		}
	}

	var switchShape = function(){	
		switch((event.target).id){
			case '1':
			myShapes[0].switchShape();
			break;
			case '2':
			myShapes[1].switchShape();
			break;
			case '3':
			myShapes[2].switchShape();
			break;
			case '4':
			myShapes[3].switchShape();
			break;
			case '5':
			myShapes[4].switchShape();
			break;

		}
	}

	var posXSlider = function(){
		switch((event.target).id){
			case '1':
			myShapes[0].setX(+event.target.value);
			break;
			case '2':
			myShapes[1].setX(+event.target.value);
			break;
			case '3':
			myShapes[2].setX(+event.target.value);
			break;
			case '4':
			myShapes[3].setX(+event.target.value);
			break;
			case '5':
			myShapes[4].setX(+event.target.value);
			break;

		}
	}

	var posYSlider = function(){	
		switch((event.target).id){
			case '1':
			myShapes[0].setY(+event.target.value);
			break;
			case '2':
			myShapes[1].setY(+event.target.value);
			break;
			case '3':
			myShapes[2].setY(+event.target.value);
			break;
			case '4':
			myShapes[3].setY(+event.target.value);
			break;
			case '5':
			myShapes[4].setY(+event.target.value);
			break;

		}
	}

	var sizeSlider = function(){	
		switch((event.target).id){
			case '1':
			myShapes[0].setSize(+event.target.value);
			break;
			case '2':
			myShapes[1].setSize(+event.target.value);
			break;
			case '3':
			myShapes[2].setSize(+event.target.value);
			break;
			case '4':
			myShapes[3].setSize(+event.target.value);
			break;
			case '5':
			myShapes[4].setSize(+event.target.value);
			break;

		}
	}

}
var myP5 = new p5(instance, 'sketchInstance');