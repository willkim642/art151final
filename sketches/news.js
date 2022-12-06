var xPos;
var animatedBG;
var lowerThirds = ["Breaking News! Social media Cyber publically releases new platform",
                   "New app CyberVerse has 3.7 billion users after two month beta rollout",
                   "CYBR shares up 36% after announcement of their new digital platform",
                   "Scientists cast doubt on Cybers claims of 'true digital consciousness'",
                   "President Craig Pelton first US government official on the CyberVerse",
                   "Musician Crypto Red to perform first 'Cyber Concert' in CyberVerse",
                   "Parent Groups raise concerns about effects of CyberVerse on children",
                   "Retailers struggle to meet consumer demand for Cyber 'Portal' headsets",
                   "Cyber CEO Evan Block: 'The virtual revolution will change the world.'",
                   "Controversy after Pope says 'Heaven ain't got **** on the CyberVerse'",
                   "Investor Robert Evans: 'Evan Block is the Steve Jobs of our time.'"
                  ];
var arrayCount;

function preload() {
  animatedBG = loadImage("https://i.imgur.com/N5hQEbK.gif");
}

function setup() {
  createCanvas(900, 700);
  noStroke();
  xPos = width;
  frameRate(60);
  noSmooth();
  arrayCount = 0;
}

function draw() {
  background(255);
  image(animatedBG, 0, 0, width, height);
  fill(255,0,0);
  
  rect(xPos, 580, 1560, 90);
  fill(255);
  textSize(54);
  textFont('Times New Roman')
  text(lowerThirds[arrayCount], xPos + 10, 640);
  xPos -= 6;
  if(xPos < -1560) {
    xPos = width + 40;
    arrayCount++;
    if (arrayCount >= 11) {
      arrayCount = 0;
    }
  }
}