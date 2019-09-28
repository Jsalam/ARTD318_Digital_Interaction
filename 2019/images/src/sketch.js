// variable for image
var firstImage;
// Varibale for font
var myFont;


// load images
function preload(){
  firstImage = loadImage("img/dante.png");
  myFont = loadFont("fonts/Impact.ttf");
}

function setup(){
  createCanvas(800,400);
}

function draw(){
  image(firstImage, 10, 200, 800, 100);
  textSize(40);
  text("this is Dante", 10, 180);
}
