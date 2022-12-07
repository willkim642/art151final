var brain;

function preload() {
  brain = loadImage("https://i.imgur.com/b9gKpPa.gif");
}

function setup() {
  createCanvas(900, 700);
  noSmooth();
  frameRate(12);
}

function draw() {
  background(0);
  image(brain, random(-10,10), random(-5, 5), width, height);
}