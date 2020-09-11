let json;
let elements = [];
let elementSize = window.innerWidth / 25;

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
    // disable noLoop to activate mouse hover functionality
    noLoop();
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

function draw() {
    drawTable();
    stroke(255);
    fill(45);
    rect(21 * elementSize,
        2 * elementSize,
        3 * elementSize,
        5 * elementSize);
    noStroke();
    fill(255);
    textSize(elementSize / 3.5);
    text("Future Menu",
        22 * elementSize,
        2.5 * elementSize);
}