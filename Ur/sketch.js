
function setup() {
   createCanvas(800, 800);
   angleMode(DEGREES);
   
 }

 function draw() {
   background(255, 0, 0);
   translate(400, 400);
   rotate(-90);
     
   let sc = second();
   let mn = minute();
   let hr = hour();
     
                   
     if (sc < 10) {
     sc = "0" + sc;
     }  
     
       if (mn < 10) {
     mn = "0" + mn;
     }  
     
       if (hr < 10) {
     hr = "0" + hr;
     }  
    
   strokeWeight(15); 
   stroke(0);
   fill(255);  
   ellipse(0, 0, 600, 600);
     
  
     
   strokeWeight(8);
   stroke(255);
   
   stroke(255);
   let hourAngle = map(hr % 12, 0, 12, 0, 360);
   //arc(0, 0, 260, 260, 0, hourAngle);  
     
   stroke(255);
   let minuteAngle = map(mn, 0, 60, 0, 360);
   //arc(0, 0, 280, 280, 0, minuteAngle);  
     
   let secondAngle = map(sc, 0, 60, 0, 360);
   //arc(0, 0, 300, 300, 0, secondAngle);

     
   push();  
   rotate(secondAngle);
   strokeWeight(4);  
   stroke(255, 0, 0);  
   line(0, 0, width/3.5, 0);
   pop(); 
     
   push();
   rotate(minuteAngle);
   strokeWeight(8);  
   stroke(51);
   line(0, 0, width/4, 0);
   pop();
     
   push();
   rotate(hourAngle);
   strokeWeight(8);
   stroke(51);
   line(0, 0, width/5.5, 0);
   pop();
  
     
   strokeWeight(4);  
   stroke(255);
   point(0, 0);

     
 //5 min marks 
    stroke(51);{   
    arc(0, 0, 530, 530, 29, 31, CHORD);
    arc(0, 0, 530, 530, 59, 61, CHORD);
   // arc(0, 0, 550, 550, 88, 92, CHORD);
    arc(0, 0, 530, 530, 119, 121, CHORD);
    arc(0, 0, 530, 530, 149, 151, CHORD);
   // arc(0, 0, 550, 550, 178, 182, CHORD);
    arc(0, 0, 530, 530, 209, 211, CHORD);
    arc(0, 0, 530, 530, 239, 241, CHORD);
   // arc(0, 0, 550, 550, 268, 272, CHORD);
    arc(0, 0, 530, 530, 299, 301, CHORD);
    arc(0, 0, 530, 530, 329, 331, CHORD);
   // arc(0, 0, 550, 550, 358, 362, CHORD);
    }
     
     
     
     
   //text  
   rotate(90);
   noStroke();
   textStyle(BOLD);
   textSize(40);  
   textFont('Georgia');
   fill(51);
   text('3', 250, 15);
   text('6', -10, 270);
   text('9', -265, 15);
   text('12', -20, -245);

//digital clock
   textSize(18);
   textFont('Helvetica');
   fill(255); 
   stroke(51);
   text(hr +' ' + ':'+' ' + mn +' ' + ':'+' ' + sc, -45, 350);
     
     
     

 }

