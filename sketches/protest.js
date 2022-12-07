var bg;
var xPos;
let people = [];

function preload() {
  bg = loadImage("https://i.imgur.com/IT4d0kz.png");
}

function setup() {
  createCanvas(900, 700);
  noSmooth();
  noStroke();
  frameRate(60);
  for (let i = 0; i < 250; i++) {
    people[i] = new Person();
  }
}

function draw() {
  background(220);
  image(bg, random(0,5), random(0, 2), width + 5, height + 5);
  
  for (let i = 0; i < 250; i++) {
      people[i].show();
      people[i].update();
    }
  
}

function Person() {
  this.x = random(0, -width);
  this.y = random(0, height / 2);
  var yPos = random(625, 700);
  
  this.show = function() {
    
    fill(255, 0, 0);
    rect(this.x, yPos, random(20,25), random(30, 35));
  }
  
  this.update = function() {
    this.gravity = random(0.6, 0.8);
    this.x = this.x + this.gravity;
    
    if (this.x > width) {
      this.x = random(0, -width / 2);
    }
  }
}