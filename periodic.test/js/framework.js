let json;
let elements = [];
let elementSize = window.innerWidth / 25;

function preload() {
    json = loadJSON('elements.json');
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
    drawDisplay();
}