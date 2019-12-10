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
];

function setup() {
  createCanvas(1200, 800);
  // Uncomment this for full screen (will work best when viewing index.html, kinda
  // fucky on the p5 editor website)
  //createCanvas(windowWidth, windowHeight);
  background(60);
}

const elementSize = 1200 / 22;

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

    // Remember that x and y describe the TOP LEFT corner of each element!

    if (
      mouseX > x &&
      mouseX < x + elementSize && // is mouseX between the borders of this square?
      mouseY > y &&
      mouseY < y + elementSize
    ) {
      // is mouseY between the borders of this square?
      // mouse is over the element!
      // lets set the fill for a hovered element
      fill(120);
    } else {
      // mouse is not over this element... set fill as regular background color
      fill(60);
    }

    // Draw the element square
    square(x, y, elementSize);

    // Draw the corner triangle
    noFill();
    triangle(x, y, x, y + 25, x + 23, y);

    // Draw the symbol text
    textAlign(CENTER);
    fill(255);
    textSize(16);
    text(symbol, x + elementSize / 2, y + elementSize / 2);

    // Draw the atomic number text
    textAlign(CENTER);
    fill(255);
    textSize(9);
    text(atomic, x + elementSize / 9.5, y + elementSize / 5);

    // Draw the mass text
    textAlign(CENTER);
    fill(255);
    textSize(9);
    text(mass, x + elementSize / 2, y + elementSize / 1.25);
  }
}

function draw() {
  drawElements();
}
