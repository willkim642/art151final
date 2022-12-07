var bg;

let ashes = [];

function preload() {
  bg = loadImage("https://i.imgur.com/hnVuuT2.png");
}

function setup() {
  createCanvas(900, 700);
  noSmooth();
  for (let i = 0; i < 100; i++) {
    ashes[i] = new Ash();
  }
}

function draw() {
  background(220);
  image(bg, 0, 0, width, height);
  
  for (let i = 0; i < 100; i++) {
      ashes[i].show();
      ashes[i].update();
    }
}

function Ash() {
  noStroke();
  this.x = random(0, width);
  this.y = random(0, height);
  
  this.show = function() {
    fill(20, 20, 20, random(100, 150));
    circle(this.x, this.y, random(2, 10));
    fill(255, 255, 20, random(100, 150));
    circle(this.x, this.y, random(2, 10));
  }
  
  this.update = function() {
    this.gravity = random(0.5, 1.5);
    this.y = this.y - this.gravity;
    
    if (this.y < 0) {
      this.y = height + 80;
    }
  }
}