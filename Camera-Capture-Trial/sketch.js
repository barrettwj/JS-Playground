var capture;

function setup() {
  createCanvas(480, 120);
  var constraints = {
    video: {
      mandatory: {
        minWidth: 1280,
        minHeight: 720
      },
      optional: [
        { maxFrameRate: 10 }
      ]
    },
    audio: true
  };
  createCapture(constraints, function(stream) {
    //console.log(stream);
  });
}

/*function setup() {
  createCanvas(1280, 720);
  capture = createCapture(VIDEO);
  capture.size(1280, 720);
  capture.hide();
}*/

function draw() {
  image(capture, 0, 0);
}
