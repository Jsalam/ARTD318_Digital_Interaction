// Variable to store the image
var myImage;

// retriving your assets
function preload(){
  myImage = loadImage("img/dante.png");
}

// Setup canvas
function setup(){
  createCanvas(800, 400);
}

// Drawing elements on canvas
function draw(){
  image(myImage, 10, 200, 100);
}
