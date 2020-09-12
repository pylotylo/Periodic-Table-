new p5();

let cond = false;
let info = false;

function mouseClicked() {
    //console.log(mouseX, mouseY);
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
            drawPopup(name);
            cond = true;
        } else if (mouseX > 17.5 * elementSize &&
            mouseX < 18 * elementSize &&
            mouseY > 2 * elementSize &&
            mouseY < 2.5 * elementSize &&
            info == true) {
            draw(
                background(60),
                drawTable());
            info = false;
            cond = false;
        }
        console.log(cond);
    }
}

function mouseMoved() {
    for (let i = 0; i < elements.length; i++) {
        let update = false;
        let currElement = elements[i];
        let x = (2 + currElement.x) * elementSize;
        let y = (2 + currElement.y) * elementSize;
        let symbol = currElement.symbol;
        let atomic = currElement.atomic;
        let mass = currElement.mass;
        let name = currElement.name;
        let _fill = currElement.fill;
        if (mouseX > x &&
            mouseX < x + elementSize &&
            mouseY > y &&
            mouseY < y + elementSize) {
            _fill = 'B5B5B5';
            update = true;
        }
        if (cond == false) {
            drawElement(x, y, atomic, symbol, mass, _fill);
        }
        if (update == true && cond == false) {
            drawSidebar(symbol, name, atomic, mass);
        }
    }
}