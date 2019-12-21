function setup() {
  createCanvas(600, 400);
  background(60);
}

var z = 100
var d = 200
var x = 100



function draw() {
  background(60);
  fill(60);
  stroke(255);
  strokeWeight(2);
  square(x, x, z);
  
  if (mouseX > 100 && mouseX < 200 &&
    mouseY > 100 && mouseY < 200) {
    z++;
    if(z > 200) 
      z = 200;
  } else {
  z = 100;
  }  
  
  if (z > 199) {
      d++;
      background(60);
      fill(100);
      stroke(255);
      strokeWeight(2);
      square(x, x, d)
      } else{
        y = 200;
    }
}
