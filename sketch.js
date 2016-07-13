var sliderDiv;
var sliderDiv2;

var sliderRad = 300;
function onload(){
  

}

function setup() {
  var canvas = createCanvas(480,320);
  canvas.position(windowWidth/2-240, windowHeight/2-160);
  sliderDiv = createDiv("");
  sliderDiv.id("slider");
  sliderDiv.position(windowWidth/2 - sliderRad-30, windowHeight/2-sliderRad-30);
  background("#333333");

    slider = $('#slider').CircularSlider({
    "min": 0,
    "max": 360,
    "radius": sliderRad,

  });


}

function draw() {
  background(25);
var value = slider.getValue();
rectMode(CENTER);
  rect(width/2, height/2, value, value);

}
