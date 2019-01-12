
var columnOrigX;
var columnOrigY;
var cellWidth;
var cellHeight;
var redV, greenV, blueV;

function setup(){
	createCanvas(500,500);
	cellWidth = 20;
	cellHeight = 20;
	// colors
	redV = 0;
	greenV = 0;
	blueV = 0;
}

function draw(){
	background(230);
	// Resetting color values
	redV = 0;
	blueV = 255;
	// Reset origin of columns
	columnOrigY = 10;
	// Reset counter of repetitive structure
	var row = 0
	// Loop over roows
	while(row < 16){
		// Reset origin of rows
		columnOrigX = 10;
		// Reset counter of repetitive structure
		var column = 0 ;
		// reset column color
		greenV = 0;
		// Loop over columns
		while(column < 16){
			// Set fill color
			fill(redV, greenV, blueV);
			// remove the stroke
			noStroke();
		  // Draw rectangle with current coordinates columnOrigX, columnOrigY
	  	rect(columnOrigX, columnOrigY,cellWidth,cellHeight);
			// detect mouse over
			onMouseOver();
			// modify color for each column
			greenV = greenV + 17;
			// modify color for each cell
			blueV = blueV - 1;
			// Increase X coordinate for each cell
			columnOrigX = columnOrigX + 30;
			// Increase row
			column = column + 1;
		}
		// Increase Y coordinate for each cell
		columnOrigY = columnOrigY + 30;
		// Increase row
		row = row + 1;
		// Modify colors for each row
		redV = redV + 17;
	}
}


function onMouseOver(){
  	// Evaluate mouse Over
  	var overX = mouseX > columnOrigX && mouseX < columnOrigX + cellWidth;
  	var overY = mouseY > columnOrigY && mouseY < columnOrigY + cellHeight;

	// Determine if the mouse is over the rectangle
  	if ( overX && overY ){
			fill(0);
	  	text(('r '+redV + ", g " + greenV + ", b " + blueV), mouseX-45, mouseY - 15);
		}
	noFill();
	rect (columnOrigX, columnOrigY,cellWidth,cellHeight);
}
