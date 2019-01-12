var instance = function (p5) {

var millisecond;
var timeStart;
var myShapes;
var started = false;
var finished = false;
var sequence;
var mouseBusy = false;

var grid;

// GUI
var editingButton;
var startButton;
var gridModule;

	p5.setup = function(){
		makeGUI();
		p5.createCanvas(960,500);

		timeStart = 0;
		myShapes = [];
		sequence = 1;

		for (var i=0; i< 5; i++){
			myShapes.push(new myShape2(p5, 'rect', 50, 50, gridModule.value(), i + 1));
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

		p5.rectMode(p5.CENTER);
		p5.textAlign(p5.CENTER,p5.CENTER);

		grid = new myGrid(p5);

	}

	p5.draw = function(){
		p5.background(240);

		p5.textAlign(p5.LEFT,p5.CENTER);

		if (myShapes[0].editing){
			grid.show(gridModule.value());
			p5.text('Columns: ' + gridModule.value(), 40,10);
			var nfColWidth = p5.nf((p5.width / gridModule.value()),2,1);
			p5.text('Column size: ' + nfColWidth, 120,10);
		}
		p5.textAlign(p5.CENTER,p5.CENTER);

		// Start counter
		if (started && !finished){
			millisecond = (p5.millis() - timeStart)/1000;
		}
		// display time
		if (started){
			p5.text ('Elapsed time: ' + p5.nf(millisecond, 2, 2), 80,20);
			//text ('sequence: ' + sequence, 80, 40);
		}

		// Show buttons
		for (var i=0; i< myShapes.length; i++){
			myShapes[i].show();		
		}

		// Detect clicks
		if (!mouseBusy){
			for (var i=0; i< myShapes.length ; i++){
				if (myShapes[i].detectClick(sequence)){
					sequence = myShapes[i].seq + 1;
				}
				if (sequence > 1){
					started = true;
					if (timeStart == undefined)
						timeStart = p5.millis();
				}
				//myShapes[i].detectClick(sequence);
			}
		}

		if (p5.mouseIsPressed){
			mouseBusy = true;
		} else {
			mouseBusy = false;
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
		startButton = p5.createButton("Reset timer");
		gridModule = p5.createSlider(2,42,2, 2);


		editingButton.mouseReleased(switcheditingButtons);
		startButton.mouseReleased(reset);
		gridModule.mouseMoved(updateModule);
	}

	var switcheditingButtons = function (){
		for (var i=0; i< myShapes.length; i++){
			myShapes[i].switchEditing();
			if (!myShapes[i].editing){
				myShapes[i].shapeButton.hide();
				myShapes[i].posXSlider.hide();
				myShapes[i].posYSlider.hide();
				myShapes[i].sizeSlider.hide();
				gridModule.hide();
			}	else{
				myShapes[i].shapeButton.show();
				myShapes[i].posXSlider.show();
				myShapes[i].posYSlider.show();
				myShapes[i].sizeSlider.show();
				gridModule.show();
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
		myShapes[(event.target).id - 1].switchShape();
	}

	var posXSlider = function(){
			myShapes[(event.target).id - 1].setX(+event.target.value);
	}

	var posYSlider = function(){	
			myShapes[(event.target).id - 1].setY(+event.target.value);
	}

	var sizeSlider = function(){
			myShapes[(event.target).id - 1].setSize(+event.target.value);	
	}

	var updateModule = function(){
		for (var i=0; i< myShapes.length; i++){
			myShapes[i].updateModule(p5.width / gridModule.value());
			myShapes[i].updateSizeSlider(gridModule.value());
		}
	}	
}
var myP5 = new p5(instance, 'sketchInstance');