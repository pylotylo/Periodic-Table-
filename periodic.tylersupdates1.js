// peep this
//added atomic numbers

const elements = [
    {
        name: "Hydrogen",
        symbol: "H",
        atomic: "1",
        x: 0,
        y: 0
    },
    {
        name: "Lithium",
        symbol: "Li",
        atomic: "3",
        x: 0,
        y: 1
    }
]


function setup() {
  createCanvas(600, 400);
  background(60);
}

const elementSize = (600/22);

function drawElements() {
  stroke(255);
  strokeWeight(1);

  for (let i = 0; i < elements.length; i++) {
      let currElement = elements[i];
      let x = (2 + currElement.x) * elementSize;
      let y = (2 + currElement.y) * elementSize;
      let symbol = currElement.symbol;
      let atomic = currElement.atomic;

      fill(60);
      square(x, y, elementSize);
      textAlign(CENTER);
      fill(255);
      textSize(9);
      text(symbol, x + elementSize / 2 , y + elementSize / 1.75);
    // added this bad boy right below here
      textAlign(CENTER);
      fill(255);
      textSize(5);
      text(atomic, x + elementSize / 5 , y + elementSize / 3);
    //
      fill(60);
    }
}

function draw() {
  drawElements();
}


// also whenever you got a minute,
//if you could help me figure 
//out how to view the sketch in full screen.
//thatd be 

// sick

//I tried adding a fullscreen call from reference but
//no dice
//too much of a newb still using editor.p5js.org 
//cant seem to find a full screen option
//to view sketch while its running
//crucify me for this
//.please
