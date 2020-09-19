function preload(){
  bg=loadImage("bg.png");
}
function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
}

function draw() {

  background(bg);

  fill(255);
  textSize(24);
  textStyle("bold");
  text("*Hi I Am Your Virtual Clock*", 50,400); 
  

translate(200,200)
rotate (-90);

   hr = hour();
   mn = minute();
   sc = second();
  
  strokeWeight(8);
  stroke("red");
  noFill();
  end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke("green");
  end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke("blue");
   end3 = map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,end3);

  push();
  rotate(end);
  stroke("red");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(end2);
  stroke("green");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke("blue");
  line(0,0,50,0);
  pop();
  
  stroke("Black");
  point (0,0);

  


  }
  
  