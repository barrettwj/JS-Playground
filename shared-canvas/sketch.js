var mouse_locs;
var max_length = 200;

function setup() {
  createCanvas(600, 600);
  mouse_locs = [];
}

function draw() {
  background(0);
  noStroke();
  fill(0, 255, 0, 200);
  for (var i = 0; i < mouse_locs.length; i++) {
    ellipse(mouse_locs[i].x, mouse_locs[i].y, 20, 20);
  }
}

function mouseDragged() {
  if (mouse_locs.length >= max_length) {
    mouse_locs.shift();
  }
  mouse_locs.push(createVector(mouseX, mouseY));
  return false;
}
