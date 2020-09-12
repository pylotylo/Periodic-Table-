function drawElement(x, y, atomic, symbol, mass, _fill) {

    let CESes = elementSize / 3.5;
    let ESces = elementSize / 6.05;

    stroke(255);
    strokeWeight(1);

    //draw box around element
    fill('#' + _fill);
    square(x, y, elementSize);
    //draw a corner square
    noFill();
    rect(x, y, (elementSize / 3), (elementSize / 4), 0, 0, (elementSize / 15), 0);
    //draw element symbol text
    textAlign(CENTER);
    fill(255);
    textSize(CESes);
    text(symbol ? symbol : "",
        x + elementSize / 2,
        y + elementSize / 2);
    //draw atomic number
    textAlign(CENTER);
    fill(255);
    textSize(ESces);
    text(atomic ? atomic : "",
        x + elementSize / 6,
        y + elementSize / 5);
    //draw atomic mass
    textAlign(CENTER);
    fill(255);
    textSize(ESces);
    text(mass ? mass : "",
        x + elementSize / 2,
        y + elementSize / 1.25);
}

function drawPopup(name) {
    fill('rgba(50,50,50, 0.9)');
    rect(0, 0, window.innerWidth, window.innerHeight);
    stroke(255);
    fill(75);
    rect(3 * elementSize, 2 * elementSize,
        15 * elementSize, 8 * elementSize);
    noStroke();
    fill(255);
    textSize(20);
    text("Element:" + " " + name,
        6 * elementSize,
        3 * elementSize);
    stroke(255);
    fill(255, 0, 0);
    square(17.5 * elementSize,
        2 * elementSize, elementSize / 2);
    noStroke();
    fill(255);
    textSize(15);
    textAlign(CENTER);
    text("x", 17.75 * elementSize, 2.33 * elementSize);
}

function drawDisplay() {
    stroke(255);
    fill(45);
    rect(21 * elementSize,
        2 * elementSize,
        3 * elementSize,
        4 * elementSize);
    noStroke();
    fill(255);
    textSize(elementSize / 3.5);
    text("Future Menu",
        22 * elementSize,
        2.5 * elementSize);
    stroke(255);
    fill(45);
    rect(21 * elementSize,
        7 * elementSize,
        3 * elementSize,
        5 * elementSize);
}

function drawSidebar(symbol, name, number, mass) {
    textAlign(LEFT);
    stroke(255);
    fill(45);
    rect(21 * elementSize,
        7 * elementSize,
        3 * elementSize,
        5 * elementSize);
    noStroke();
    fill(255);
    textSize(45);
    text(symbol,
        21.25 * elementSize,
        8 * elementSize);
    stroke(255);
    line(21.1 * elementSize, 8.25 * elementSize, 23.9 * elementSize, 8.25 * elementSize);
    fill(255);
    textSize(13);
    text("Element:" + " " + name,
        21.1 * elementSize,
        9 * elementSize);


    text("Atomic Number:" + " " + number,
        21.1 * elementSize,
        10 * elementSize);

    text("Atomic Mass:" + " " + mass,
        21.1 * elementSize,
        11 * elementSize);
}