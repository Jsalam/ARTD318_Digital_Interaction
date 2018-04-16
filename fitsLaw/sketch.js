
var millisecond;
var timeStart;
var myShapes;
var started = false;
var finished = false;
var sequence;

// GUI
var editingButton;
var startButton;

function setup(){
	createCanvas(960,600);
	timeStart = 0;
	myShapes = [];
	sequence = 1;

	for (var i=0; i< 5; i++){
		myShapes.push(new myShape(this, 'rect', 50, 50, 50, i + 1));
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
	

	makeGUI();
	editingButton.mouseReleased(switcheditingButtons);
	startButton.mouseReleased(reset);

	rectMode(CENTER);
	textAlign(CENTER,CENTER);

}

function draw(){
	background(220);

	// Start counter
	if (started && !finished){
		millisecond = (millis() - timeStart)/1000;
	}
	// display time
	if (started){
		text ('elapsed time: ' + nf(millisecond, 2, 2), 80,20);
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
				timeStart = millis();
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
	editingButton = createButton("Switch editing mode");
	startButton = createButton("Reset timer and sequence");
}

var switcheditingButtons = function (){
	for (var i=0; i< myShapes.length; i++){
		myShapes[i].switchEditing();		
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
