let x,y, yy, yyy;
let radf;
let w,h;

function setup() {
  createCanvas(600, 600);
angleMode(DEGREES);
 
  y = 120;
  radf = 100
 
 
}

function draw() {

   // background
  
  if (mouseX<200)
    {
      background("rgb(204,202,202)")
    }
  else if (mouseX <400)
    {
      background("rgb(125,224,233)")
    }
  else if (mouseX < 550)
    {
      background("rgb(252,252,156)")
    }
  else{
    background("pink")
  }

  
  //face
   x = map(mouseX,0,600,100,200);
  circle(x, y, radf);
  
  //body
   w = mouseX/5+70;
   yy = y + 70
  rect(x-radf/2, yy, w, 200,30)
  
 
  yyy = yy + 210

  // left leg
  push();
  translate (100,-20);
  rotate(15);
  rect (x - radf/2, yyy, w/4, 240,30);
  pop();
  
  // right leg
  let xx = map(mouseX, 0, 600,100,300)
  push();
  rotate(-5);
  rect (xx, yyy+50, 60,mouseX/10+150,30);
  pop();
  // right thigh
  rect(x-radf/2+w/2, yyy,w/2+10,40,30);
  
  //left arm
  let xxx = map (x,100,200, 0,40);
  rect(xxx,yy, w/2,40,30);
  
  // right arm
  let a = map (x, 100, 200,150,300);
  rect(a, yy, w,40,30);
  
  push();
  noStroke()
  fill("yellow")
       blendMode(DARKEST);
     
      circle(300,300,w);
      pop();
  
   if (mouseX>550)
    {
    
      push();
      noStroke();
      fill("orange")
       blendMode(DARKEST);
      let s = second();
      let ss = map(s,0,59,1,2);
      circle(300,300,ss*200);
      pop();
        textSize(ss*20)
      text ("Feel your breath",200,300)
    
    }
  else{
  textSize(30);
  text("Yoga - Stretch your arms!",100,50)
  }
 
}