var BgC 
var IndC 
var BgcC
var SecC

var BgCbutton
var IndCbutton
var BgcCbutton   
var Secbutton
 
var IndColors 
var IndColor
var SecColors
var SecColor
var BgColors
var BgColor

function setup() {
   
   createCanvas(1920, 700);
   angleMode(DEGREES);
    
   BgC = color(0);
   IndC = color(230);
   BgcC = color(0);
   SecC = color(255, 0, 0)  
    
   BgCbutton = createButton('Skift baggrunds farve') 
   BgCbutton.mousePressed(changeBgColor); 
    
   IndCbutton = createButton('Skift index farve') 
   IndCbutton.mousePressed(changeIndColor); 
    
   BgcCbutton = createButton('Skift ur-baggrunds farve') 
   BgcCbutton.mousePressed(changeBgcColor);  
    
   Secbutton = createButton('Sekundviser fra/til')
   Secbutton.mousePressed(changeSecColor);
 }


    
function changeBgColor() {
   BgC = color(BgColor)       
}

function changeIndColor() {
   IndC = color(IndColor)       
}

function changeBgcColor() {
   BgcC = color(BgColor)       
}

function changeSecColor(){
   SecC = color(SecColor)
}


 function draw() {
     
   IndColors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"]; 
   IndColor = random(IndColors); // select random color 
   
   changeSecColor 
   
   SecColors = [BgcC, "Crimson"]; 
   SecColor = random(SecColors); // select random color of the two 
     
   BgColors = ["black", "grey"]; 
   BgColor = random(BgColors); // select random color of the two   
     
   translate(windowWidth/2, windowHeight/2);
   rotate(-90);
      
   let sc = second();
   let mn = minute();
   let hr = hour(); 
     
     //colours  
    
     
     
   background(BgC);
     
   //clock num fix
     if (sc < 10) {
     sc = "0" + sc;
     }  
     
       if (mn < 10) {
     mn = "0" + mn;
     }  
     
       if (hr < 10) {
     hr = "0" + hr;
     }  
    
   //clock ellipse
   strokeWeight((windowWidth+windowHeight)/100); 
   stroke(IndC);
   fill(BgcC);  
   ellipse(0, 0, (windowWidth+windowHeight)/3, (windowWidth+windowHeight)/3);
     
   
   //mapping
   let hourAngle = map(hr % 12, 0, 12, 0, 360);
   //arc(0, 0, 260, 260, 0, hourAngle);  
     
 
   let minuteAngle = map(mn, 0, 60, 0, 360);
   //arc(0, 0, 280, 280, 0, minuteAngle);  
     
   let secondAngle = map(sc, 0, 60, 0, 360);
   //arc(0, 0, 300, 300, 0, secondAngle);

   //pushing  
   push();  
   rotate(secondAngle);
   strokeWeight((windowWidth+windowHeight)/(175*2));  
   stroke(SecC);  
   line(0, 0, (windowWidth+windowHeight)/9, 0);
   pop(); 
     
   push();
   rotate(minuteAngle);
   strokeWeight((windowWidth+windowHeight)/(175));  
   stroke(IndC);
   line(0, 0, (windowWidth+windowHeight)/11, 0);
   pop();
     
   push();
   rotate(hourAngle);
   strokeWeight((windowWidth+windowHeight)/(175));
   stroke(IndC);
   line(0, 0, (windowWidth+windowHeight)/16, 0);
   pop();
  
   //mid point  
   strokeWeight((windowWidth+windowHeight)/(175*3.5));  
   stroke(BgcC);
   point(0, 0);

     
 //5 min marks 
    stroke(IndC);{   
    arc(0, 0, (windowWidth+windowHeight)/3.6, (windowWidth+windowHeight)/3.6, 29, 31, CHORD);
    arc(0, 0, (windowWidth+windowHeight)/3.6, (windowWidth+windowHeight)/3.6, 59, 61, CHORD);
   // arc(0, 0, 550, 550, 88, 92, CHORD);
    arc(0, 0, (windowWidth+windowHeight)/3.6, (windowWidth+windowHeight)/3.6, 119, 121, CHORD);
    arc(0, 0, (windowWidth+windowHeight)/3.6, (windowWidth+windowHeight)/3.6, 149, 151, CHORD);
   // arc(0, 0, 550, 550, 178, 182, CHORD);
    arc(0, 0, (windowWidth+windowHeight)/3.6, (windowWidth+windowHeight)/3.6, 209, 211, CHORD);
    arc(0, 0, (windowWidth+windowHeight)/3.6, (windowWidth+windowHeight)/3.6, 239, 241, CHORD);
   // arc(0, 0, 550, 550, 268, 272, CHORD);
    arc(0, 0, (windowWidth+windowHeight)/3.6, (windowWidth+windowHeight)/3.6, 299, 301, CHORD);
    arc(0, 0, (windowWidth+windowHeight)/3.6, (windowWidth+windowHeight)/3.6, 329, 331, CHORD);
   // arc(0, 0, 550, 550, 358, 362, CHORD);
    }
     
     
   //text  
   rotate(90);
   noStroke();
   textStyle(BOLD);
   textSize(((windowWidth+windowHeight)/2) / 15);  
   textFont('Georgia');
   fill(IndC);
   textAlign(CENTER);
   text('3', (windowWidth+windowHeight)/7.5, 0);
   text('6', 0, (windowWidth+windowHeight)/7.5, 0);
   text('9', -(windowWidth+windowHeight)/7.5, 0);
   text('12', 0, -(windowWidth+windowHeight)/7.5, 0);

//digital clock
   textSize((windowWidth+windowHeight)/80);
   textFont('Helvetica');
   fill(IndC); 
   text(hr +' ' + ':'+' ' + mn +' ' + ':'+' ' + sc, 0, (windowWidth+windowHeight)/5);
     

 }



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
