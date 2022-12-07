var bg;
var yPos = -900;

function preload() {
  bg = loadImage("https://i.imgur.com/Bo4laIV.png");
}

function setup() {
  createCanvas(900, 700);
  noSmooth();
  frameRate(60);
  textAlign(LEFT);
}

function draw() {
  background(220);
  image(bg, 0, 0, width, height);
  textSize(56);
  yPos += 1;
  if (yPos > height + 50) {
    yPos = -900;
  }
  fill(0, 255, 0);
  
  for (var i = 0; i < 1000; i += 100) {
    text(random(0,1), random(0, width), yPos + i);
  }
}