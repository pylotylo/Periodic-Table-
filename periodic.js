// Here's my idea for how to simplify this code:
// Define all of the elements at the top here
// You could even do this is another file called elements.json
// or something like that

const elements = [
    {
        name: "Hydrogen",
        symbol: "H",
        x: 0,
        y: 0
    },
    {
        name: "Lithium",
        symbol: "Li",
        x: 0,
        y: 1
    }
]


function setup() {
  createCanvas(600, 400);
  background(60);
}

// this.x = (600/22);
// 'this' is a keyword aceesing fields of a class, usually used like this:
// class Car
//      constructor() {
//          this.color = "Blue;
//      }
//
//  Here, you should use a global constant like this:
const elementSize = (600/22);


// This function looks at the list of elements defined above and draws each
// one in the correct spot
function drawElements() {
  // Set the fill and stroke colors...
  stroke(255);
  strokeWeight(1);

  // Loop through our elements list and for each one of them,
  // we draw a square using the x and y defined on each element,
  // and the symbol defined on each element.

  // Now, you can add elements to the list above and as long as
  // you set their x and y correctly, they will be drawn in the 
  // right spot automatically! No more hardcoded calls to square() (:
  for (let i = 0; i < elements.length; i++) {
      let currElement = elements[i];
      let x = (2 + currElement.x) * elementSize;
      let y = (2 + currElement.y) * elementSize;
      let symbol = currElement.symbol;

      fill(60);
      square(x, y, elementSize);
      textAlign(CENTER);
      fill(255);
      textSize(10);
      text(symbol, x + elementSize / 2 , y + elementSize / 2);
      fill(60);
    }
}

function draw() {
  drawElements();
}
  

