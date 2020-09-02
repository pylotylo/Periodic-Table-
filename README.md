# Periodic-Table-

PRZESZTON:
ok so im running this on local server, using 'python -m SimpleHTTPServer'
command in terminal, if you got a different way of doing this thats all good.
J letting you know whats up on my end.

I've updated framework.js, still stuck on the scope issue with the elements object.
Got it so that the global array 'stuff' is appended with the element objects from the 
json file. After the setup function runs, 'stuff' contains one item:
the array of element objects. So an array within an array. I tried to define
a new variable with just the array of element objects (should be stuff[0] if 
I'm understanding this). But the console in chrome shows this as undefined???

Getting tired of looking at code for today, pls help troubleshoot when you have a chance
... pls



Most Recent Updates! (as of 02/27/2020)
here is a (nearly) functioning table framework, with the working mouse detection feature!

I still need to adjust the scaling of the text 
to change along with the size of the user 
window. Hopefully this will be fairly 
easy to achieve.

Once this is complete, I'll start working on 
popup modules for each element, which 
additional information regarding the 
properties of each element that are useful
in chemistry bookwork and lab work!

I've also tried to convert the list of 
element constants in both a separate JS file
as well a a JSON file, but have had some 
issues loading those in the framework.js
file. I'll return to that issue at somepoint
if need be, but for now things are moving in
the right direction
