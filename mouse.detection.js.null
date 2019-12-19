/* 
getting closer on the mouse detection piece.
ive got this written in a separate file with 
less going on. this is on the right track but still
not quite the result im looking for. My main issue
with this is that as you continue to move the mouse 
within the defined area, the value of z, and in turn
the size of the square continues to increase without 
bounds. 

I tried to set a maximum for the z value // *here* -line 50-
using another "if" condition. No dice, returns several errors.

I'd like it to be so that if the cursor enters the given field 
and then stops, the value of z increases to a predetermined maximum size automatically instead of having to continue to move the
mouse until the square reaches the desired size. if that makes sense

this may be something that would need to be formatted in HTML or c++.
im not familiar enough with what gets used for what yet to say
for sure.

within the context of the periodic table program, this would likely
call a separate js file with a list of more details concerning
the given element. which is what leads me to believe that this
piece of the puzzle may not be done in js

that said i would think that the graphic im describing 
could be performed using js in a simpler context so if you got any ideas on this let me know
*/
function setup() {
  createCanvas(600, 400);
  background(60);
}

var z = 100

function draw() {
  background(60);
  fill(60);
  stroke(255);
  strokeWeight(2);
  square(100, 100, z);
}

function mouseMoved() {
  if (mouseX > 100 && mouseX < 200 &&
     mouseY > 100 && mouseY < 200) {
      z++;
    //z = z + 100;
    // *here*
  } else {
    z = 100;
  }
}

/* 
activate line 49 instead of line 48 and see what happens too.
still no max value for z and the toggle gets significantly
choppier :(
*/
    
