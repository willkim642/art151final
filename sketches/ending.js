var end;
var xPos = -400;

function preload() {
  end = loadImage("https://i.imgur.com/IkDoeZ2.png");
}

function setup() {
  createCanvas(900, 700);
  noSmooth();
  textAlign(CENTER);
}

function draw() {
  background(250);
  image(end, 0, 0, width, height);
  fill(0);
  xPos += 3;
  textFont('Helvetica');
  textSize(85);
  text('The Next Step in Virtual Revolution The Next Step in Virtual Revolution The Next Step in Virtual Revolution', xPos, 120)
  if(xPos > width + 400) {
    xPos = -160;
  }
  text('$699.99', 730, 670)
}