var capture;

function setup() {
  createCanvas(1280, 720);
  capture = createCapture(VIDEO);
  capture.size(1280, 720);
  capture.hide();
}

function draw() {
  image(capture, 0, 0);
}
