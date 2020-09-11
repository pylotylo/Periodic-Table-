new p5();

let cond = false;

function mouseClicked() {
    //console.log(mouseX, mouseY);
    let info = false;
    for (let i = 0; i < elements.length; i++) {
        let currElement = elements[i];
        let x = (2 + currElement.x) * elementSize;
        let y = (2 + currElement.y) * elementSize;
        if (mouseX > x &&
            mouseX < x + elementSize &&
            mouseY > y &&
            mouseY < y + elementSize &&
            info == false) {
            name = currElement.name;
            info = true;
            fill('rgba(50,50,50, 0.9)');
            rect(0, 0, window.innerWidth, window.innerHeight);
            stroke(255);
            fill(75);
            rect(3 * elementSize, 3 * elementSize,
                15 * elementSize, 8 * elementSize);
            noStroke();
            fill(255);
            textSize(20);
            text("Element:" + " " + name,
                6 * elementSize,
                4 * elementSize);
            stroke(255);
            fill(255, 0, 0);
            square(17.5 * elementSize,
                3 * elementSize, elementSize / 2);
            noStroke();
            fill(255);
            textSize(15);
            textAlign(CENTER);
            text("x", 17.75 * elementSize, 3.4 * elementSize);
            cond = true;
        } else if (mouseX > 17.5 * elementSize &&
            mouseX < 18 * elementSize &&
            mouseY > 3 * elementSize &&
            mouseY < 3.5 * elementSize &&
            info == true) {
            draw(
                background(60),
                drawTable());
            cond = false;
        }
        console.log(cond);
    }
}

function mouseMoved() {
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
            _fill = 'B5B5B5'
        }
        if (cond == false) {
            drawElement(x, y, atomic, symbol, mass, _fill);
        }
    }
}