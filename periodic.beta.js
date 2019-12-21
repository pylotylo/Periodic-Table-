const elementSize = 1200 / 22;

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
    let currElement = elements[i];
    let x = (2 + currElement.x) * elementSize;
    let y = (2 + currElement.y) * elementSize;
    let symbol = currElement.symbol;
    let atomic = currElement.atomic;
    let mass = currElement.mass;
    let size = currElement.size;
    let CESes = size / elementSize;
    let ESces = 1 / CESes;
      
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
             y + (currElement.size / 2.1818),
             x + (currElement.size / 2.1818), 
             y);
    //draw element symbol text
    textAlign(CENTER);
    fill(255);
    textSize(16 * CESes);
    text(symbol,
      x + size / 2,
      y + size / 2);
    //draw atomic number
    textAlign(CENTER);
    fill(255);
    textSize(9 * CESes);
    text(atomic,
      x + size / 9.5,
      y + size / 5);
    //draw atomic mass
    textAlign(CENTER);
    fill(255);
    textSize(9 * CESes);
    text(mass,
      x + size / 2,
      y + size / 1.25);
  }

}

function draw() {
  drawElements();
}
