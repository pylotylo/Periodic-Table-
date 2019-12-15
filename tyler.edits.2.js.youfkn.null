const elements = [
    {
        name: "Hydrogen",
        symbol: "H",
        atomic: "1",
        mass: "1.008",
        x: 0,
        y: 0
    },
    {
        name: "Lithium",
        symbol: "Li",
        atomic: "3",
        mass: "6.941",
        x: 0,
        y: 1
    }
]

function setup() {
  createCanvas(1200, 800);
  background(60);
}

const elementSize = (1200/22);

function drawElements() {
 
  stroke(255);
  strokeWeight(1);
  
  for (let i = 0; i < elements.length; i++) {
      let currElement = elements[i];
      let x = (2 + currElement.x) * elementSize;
      let y = (2 + currElement.y) * elementSize;
      let symbol = currElement.symbol;
      let atomic = currElement.atomic;
      let mass = currElement.mass;
  //trying to make it so that if you hover over the element, it expands
    //try removing the slashes from lines 47 and 48 and see what happens
    //I tried to pull some othe calls that we used in the ring drawing sketch 
    //we wrote over at your place, the context here is a little different so 
    //I'd imagine this will require a little different solution
    
    //current issue: lines 46-49
  if (x < mouseX < elementSize, y < mouseY < elementSize) {
      //currElement.x++;
      //currElement.y++;
  }
    //
      fill(60);
      square(x, y, elementSize);
    //
      noFill();
      triangle(x, y, x, y + 25, x + 23, y);
    //
      textAlign(CENTER);
      fill(255);
      textSize(16);
      text(symbol, x + elementSize / 2 , y + elementSize / 2);
      
    //
      textAlign(CENTER);
      fill(255);
      textSize(9);      
      text(atomic, x + elementSize / 9.5 , y + elementSize / 5);
    //
      textAlign(CENTER);
      fill(255);
      textSize(9);
      text(mass, x + elementSize / 2 , y + elementSize / 1.25);
    }
}

function draw() {
  drawElements();
}
