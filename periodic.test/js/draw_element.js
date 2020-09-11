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