
  // put preload code here
  //by writing let values, we specify which values is our mean. 
//in this case I write each value's color code whcih means display it with this colors before 
//changing color's of rectangles by pressing the mouse.
let value1 = 255;
let value2 = 255;
let value3 = "blue";
let value4 = "red"
let value5 = 255;
let value6 = 255;
let value7 = "yellow"



function setup() {
  createCanvas(600, 620);
  rectMode(CORNER);

   // put setup code here
}

function draw() {
  // put drawing code here
  push();
  background(255);
  
  
     stroke(0);  
     strokeWeight(20);
     //the color of rectangle which is located in the left corner of canvas has 
     //already specifed before function setup. 
     fill(value1);
     rect(0, 0, 110, 190); 
     stroke(0);  
     strokeWeight(20);
     fill(value2);
     rect(0, 200, 110, 190); 
     stroke(0);  
     strokeWeight(20);
     fill(value3);
     rect(0, 400, 110, 190); 
     stroke(0);  
     strokeWeight(20);
     fill(value4);
     rect(120, 1, 460, 390); 
     stroke(0);  
     strokeWeight(20);
     fill(value5);
     rect(120, 400, 360, 190); 
     stroke(0);  
     strokeWeight(20);
     fill(value6);
     rect(495, 400, 85, 95); 
     stroke(0);  
     strokeWeight(20);
     fill(value7);
     rect(495, 495, 85, 95); 








//in this part each values' color randomly change by pressing the mouse. 

 if (mouseIsPressed) {
  value1 = color(random(255), random(265), random(255));
  value2 = color(random(255), random(255), random(255));
  value3 = color(random("blue"), random(265), random(255)); 
  value4 = color(random("red"), random(0), random(255));
  value5 = color(random(255), random(285), random(240));
  value6 = color(random(0), random(285), random(274));
  value7 = color(random(255), random(245), random(236));



 }
}

