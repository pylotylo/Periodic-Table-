let json;
let elements = [];
let elementSize = window.innerWidth / 22;

function preload() {
    let url = 'elements.json';
    json = loadJSON(url);
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(60);
    for (var key in json) {
        append(elements, json[key]);
    }
}

function drawTable() {

    for (let i = 0; i < elements.length; i++) {
        let currElement = elements[i];
        let x = (2 + currElement.x) * elementSize;
        let y = (2 + currElement.y) * elementSize;
        let symbol = currElement.symbol;
        let atomic = currElement.atomic;
        let mass = currElement.mass;
        let _fill = currElement.fill;

        drawElement(x, y, atomic, symbol, mass, _fill);
    }
}

function drawElement(x, y, atomic, symbol, mass, _fill) {

    let CESes = elementSize / 3.5;
    let ESces = elementSize / 6.05;

    stroke(255);
    strokeWeight(1);

    //draw box around element
    fill('#' + _fill);
    square(x, y, elementSize);
    // change color and stroke weight BACK for non-hovered elements
    stroke(255, 255, 255);
    strokeWeight(1);
    //draw a corner squar instead of a corner triangle
    noFill();
    rect(x, y, (elementSize / 3), (elementSize / 4), 0, 0, (elementSize / 15), 0);
    //draw element symbol text
    textAlign(CENTER);
    fill(255);
    textSize(CESes);
    text(symbol,
        x + elementSize / 2,
        y + elementSize / 2);
    //draw atomic number
    textAlign(CENTER);
    fill(255);
    textSize(ESces);
    text(atomic,
        x + elementSize / 6,
        y + elementSize / 5);
    //draw atomic mass
    textAlign(CENTER);
    fill(255);
    textSize(ESces);
    text(mass,
        x + elementSize / 2,
        y + elementSize / 1.25);

}

function draw() {
    drawTable();
}

function mouseHover() {
    for (let i = 0; i < elements.length; i++) {
        let currElement = elements[i];
        let x = (2 + currElement.x) * elementSize;
        let y = (2 + currElement.y) * elementSize;
        let symbol = currElement.symbol;
        let atomic = currElement.atomic;
        let mass = currElement.mass;
        let _fill = currElement.fill;
        if (mouseX > x &&
            mouseX < x + elementSize &&
            mouseY > y &&
            mouseY < y + elementSize) {
            validate = true;
        } else {
            validate = false;
        }
        while (validate = true) {
            _fill = 30;
            drawElement(x, y, atomic, symbol, mass, _fill);
        }
    }
}