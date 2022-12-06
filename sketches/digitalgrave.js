var yPos = 0;
var body;
let particle = [];

function preload() {
  body = loadImage("https://i.imgur.com/b1brwdt.png");
}

function setup() {
  createCanvas(900, 700);
  frameRate(60);
  noSmooth();
  for (let i = 0; i < 100; i++) {
    particle[i] = new dataFloat();
  }
}

function draw() {
  background(0);
  yPos -= 1;
  if (yPos < -900) {
    yPos = 700;
  }
  image(body, 0, yPos, width, height);
  //rect();
  for (let i = 0; i < 100; i++) {
      particle[i].show();
      particle[i].update();
    }
}

function imgFloat(img) {
  var midPoint;
  
}

function dataFloat() {
  noStroke();
  this.x = random(0, width);
  this.y = random(0, height);
  
  this.show = function() {
    fill(0, 255, 0, random(100, 150));
    rect(this.x, this.y, random(2, 5));
  }
  
  this.update = function() {
    this.gravity = random(0.5, 1.5);
    this.y = this.y - this.gravity;
    
    if (this.y <= 0) {
      this.y = height;
    }
  }
}