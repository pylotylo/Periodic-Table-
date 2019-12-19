var elementSize = 1200 / 22;

const elements = [{
    name: "Hydrogen",
    symbol: "H",
    atomic: "1",
    mass: "1.008",
    x: 0,
    y: 0,
    size: elementSize
  },
  {
    name: "Lithium",
    symbol: "Li",
    atomic: "3",
    mass: "6.941",
    x: 0,
    y: 1,
    size: elementSize
  }
]

function setup() {
  createCanvas(1200, 800);
  background(60);
}

const maxES = 2 * elementSize; //max element size

function drawElements() {

  background(60);
  stroke(255);
  strokeWeight(1);

  for (let i = 0; i < elements.length; i++) {
    //let currElementSize = elements[i] * elementSize;
    let currElement = elements[i];
    let size = currElement.size;
    let rES = currElement.size / elementSize; 
    //let dydES = ;
    //let triPt = currElement.size / 5
    let x = (2 + currElement.x) * elementSize;
    let y = (2 + currElement.y) * elementSize;
    let symbol = currElement.symbol;
    let atomic = currElement.atomic;
    let mass = currElement.mass;
   
      if (mouseX > x && 
          mouseX < 2 * x &&
          mouseY > y  && 
          mouseY < 2 * y) {
          currElement.size++;
        
        //if(currElement.size > maxES) { break; }

      } else {
          currElement.size = elementSize;
      }
  
    
    //draw box around element
    fill(60);
    square(x, y, size);
    //draw corner triangle
    noFill();
    triangle(x, 
             y,
             x,
             y * rES + 25,
             x * rES + 23, 
             y);
    //draw element symbol text
    textAlign(CENTER);
    fill(255);
    textSize(16 * rES);
    text(symbol,
      x + size / 2,
      y + size / 2);
    //draw atomic number
    textAlign(CENTER);
    fill(255);
    textSize(9 * rES);
    text(atomic,
      x + size / 9.5,
      y + size / 5);
    //draw atomic mass
    textAlign(CENTER);
    fill(255);
    textSize(9 * rES);
    text(mass,
      x + size / 2,
      y + size / 1.25);
  }

}

function draw() {
  drawElements();
  /*
  if (mouseX > (2 + currElement.x) * size && 
      mouseX < (2 + currElement.x) * maxES &&
      mouseY > (2 + currElement.y) * size && 
      mouseY < (2 + currElement.y) * maxES) {
      size++;
      } else {
          size = elementSize;
      }
    */
}
