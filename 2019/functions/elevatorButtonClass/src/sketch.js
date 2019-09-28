//Elevator
let elevator;

// buttons
let button1;
let button2;
let button3;


// images
let iPhoneX;

let dante;
let danteOver;
let danteSliding;

let dante2;
let dante2Over;
let dante2Sliding;

let imageReleased ;
let imageOver;
let imagePressed;

// touchDetection
var isTouchDevice;

// Here we import all the images and sounds into the project
function preload(){
	// Load images
	iPhoneX = loadImage("img/iPhoneX_mockup.png");

	dante = loadImage("img/dante.png");
	danteOver = loadImage("img/danteOver.png");
	danteSliding = loadImage("img/danteSliding.png");
	// second button
	dante2 = loadImage("img/dante2.png");
	dante2Over = loadImage("img/dante2Over.png");
	dante2Sliding = loadImage("img/dante2Sliding.png");

	imageReleased = loadImage("img/dante2.png");
	imageOver = loadImage("img/dante2Over.png");
	imagePressed = loadImage("img/dante2Sliding.png");

}

// Here we setup the canvas
function setup(){
	// Create a canvas
	let canvas = createCanvas(900,1200);
	// Anchor canvas to specific location on HTML file
	canvas.parent("#sketch_Location"); // This video explains this part: https://www.youtube.com/watch?v=eoXLD0Aw1YI
	// detect if The device is a touch screen
	isTouchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
	// instantiate Elevator
	elevator = new Elevator(this,600,20, 2);
	// instantiate buttons
	button1 = new Button(this,40, 120, 470, 180, dante, danteOver, danteSliding);
	button2 = new Button(this,40, 320, 470, 180, dante2, dante2Over, dante2Sliding);
	button3 = new Button(this,100, 520, 470, 180, imageReleased, imageOver,imagePressed);
}

// Here we draw all the elements on the canvas
function draw(){
	// Set the background
	background(255);

	if (elevator.getYCoord() > 100){
	fill(255, 0, 0,100 ); //(elevator.getYCoord()/height)*255);
}

	rect(0,0,width,height);
	text(elevator.getYCoord(), 700, 100);

	button1.show(elevator.getYCoord());
	button2.show(elevator.getYCoord());
	button3.show(elevator.getYCoord());

	// Elevator
	elevator.descend();

	// iPhone Skin
	if (!isTouchDevice){
		image(iPhoneX, 0, 0, 552, 1200)
	}
}

function touchStarted(){
	elevator.updateTouch();
	button1.updateTouch();
	button2.updateTouch();
	button3.updateTouch();

}
