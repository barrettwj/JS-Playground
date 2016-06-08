var mouse_locs;
var retrieved_mouse_locs;
var max_length = 200;

function setup() {
  createCanvas(600, 600);
  mouse_locs = new Array();
  retrieved_mouse_locs = new Array();
}

function draw() {
  background(0);
  retrieved_mouse_locs = loadStrings('mouse_coords.txt');
  //println(retrieved_mouse_locs.length);
  noStroke();
  fill(0, 255, 0, 200);
  for (var i = 0; i < retrieved_mouse_locs.length; i++) {
    var sa = split(retrieved_mouse_locs[i], ",");
    ellipse(float(sa[0]), float(sa[1]), 20, 20);
  }
}

function mouseDragged() {
  if (mouse_locs.length >= max_length) {
    mouse_locs.shift();
  }
  var st = str(mouseX) + "," + str(mouseY);
  append(mouse_locs, st);
  return false;
}

function mouseReleased() {
  saveStrings(mouse_locs, 'https://github.com/barrettwj/JS-Playground/blob/gh-pages/shared-canvas/mouse_coords.txt');
  //println("Saved!");
  return false;
}
