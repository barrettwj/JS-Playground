var r = 40;
var speed = 5.5;
var c;

function setup() {
  createCanvas(600, 600);
  c = color(0, 255, 0, 120);
}

function draw() {
  background(160);
  stroke(200);
  fill(c);
  ellipse((-r + ((frameCount * speed) % (width + (r * 2)))), (height / 2), (r * 2), (r * 2));
}