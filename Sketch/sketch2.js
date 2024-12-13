let w, h;
let r,g,b;
let t,s;

  r = 155;
  g = 103;
  b = 55;

 
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  t = random(1,1.1);

  h = mouseX/1.2*t;
  w = mouseY/1.2*t;
  
  //ear
  fill (r,g,b);
    
  ellipse (mouseX+w/3.5, mouseY-h/3.5,w/2.5,h/2);
  ellipse (mouseX-w/3.5, mouseY-h/3.5,w/2.5,h/2);
  


  push();
  fill('yellow')
  arc (mouseX-w/3.5, mouseY-h/3.5, w/2.5, h/2, radians(115),radians (210));
  arc (mouseX+w/3.5, mouseY-h/3.5, w/2.5, h/2, radians(-30),radians (65));
  pop();

      //face
  ellipse(mouseX, mouseY, w,h);
  
  // eye
  fill("black")
  ellipse(mouseX-w/5, mouseY+h/7, w/8*t, h/10*t);
  ellipse(mouseX+w/5, mouseY+h/7, w/8*t, h/10*t);
  
  //mouth
  fill("white")
  ellipse(mouseX, mouseY+h/4, w/3, h/4);
  
  fill("black")
  ellipse(mouseX, mouseY+h/4, w/13, h/13);
  line(mouseX, mouseY+h/4, mouseX+w/11, mouseY+h/3);
   line(mouseX, mouseY+h/4, mouseX-w/11, mouseY+h/3);
  
}

function mouseClicked(){
  
  r = random(0,255);
  g = random(0,255);
  b = random (0,255);
}

function mousePressed(){
  
  r = random(0,255);
  g = random(0,255);
  b = random (0,255);
  
}