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

var elementSize = 1200/22;
const maxES = 2 * (1200/22); //max element size

function drawElements() {
  
  background(60);
  stroke(255);
  strokeWeight(1);
  
  for (let i = 0; i < elements.length; i++) {
      let currElementSize = elementSize;
      let currElement = elements[i];
      let x = (2 + currElement.x) * elementSize;
      let y = (2 + currElement.y) * elementSize;
      let symbol = currElement.symbol;
      let atomic = currElement.atomic;
      let mass = currElement.mass;

  if (mouseX > (2 + currElement.x) * currElementSize && 
      mouseX < (2 + currElement.x) * maxES &&
      mouseY > (2 + currElement.y) * currElementSize && 
      mouseY < (2 + currElement.y) * maxES) {
      currElementSize++;
  } else {
      currElementSize = elementSize;
  }

//***** I think all previously called Element sizes in the
//      lines 64-96 need to be replaced with currElementSize
//      in order for this to work. I'm gonna try it out tmrw
    
//   Also, I need to write a python bot that will interpret keywords
//   in notes like this referring to specific, simple types of edits,
//   like "replace" and the like, and then make them for me >:)
//   
//   oh wait, i think i have something like that already >>;D
//   
//   *is this a* debugger???

    //draw box around element
      fill(60);
      square(x, y, elementSize);
    //draw corner triangle
      noFill();
    //issue
      triangle(x, y, x, y + 25, x + 23, y); 
      
    //x and y need to be in relation to elementSize
    
    //draw element symbol text
      textAlign(CENTER);
      fill(255);
    
    //issue
      textSize(16);
    
    //text size needs to be in relation to element size
    
    /*  \|/ applies to all textSizes in this block
    
      text(symbol, x + elementSize / 2 , y + elementSize / 2);
      
    //draw atomic number
      textAlign(CENTER);
      fill(255);
      textSize(9);      
      text(atomic, x + elementSize / 9.5 , y + elementSize / 5);
    //draw atomic mass
      textAlign(CENTER);
      fill(255);
      textSize(9);
      text(mass, x + elementSize / 2 , y + elementSize / 1.25);
      
      */
    }

}

function draw() {
  drawElements();
}
 

