function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("rgb(92,90,90)");
   noStroke();
  
  // background
 push();
  blendMode(DIFFERENCE);
  fill("rgb(187,49,49)")
  quad(0,210, 200,200,190,400,0,400);
  
  fill("rgb(224,219,190) ");
  quad(0,200, 180,240,200,400,0,400);
  pop();
  
    //yellow light
  push();
  fill('yellow');
  triangle(200,200,150,399,0,250)
  triangle(0,250,150,399,0,399);
 pop();
  

  //draw body of the flashlight.
  push();
  fill('rgb(211,206,206)')
  translate(503,100);
  rotate(QUARTER_PI*3) ;
  rect(100,100,240,90,20);
  pop();
  
  
  push();
  // style and draw the line to show grip
  stroke("rgb(119,115,115)");
  strokeWeight(10);
  
   push();
  translate(255,40);
  strokeCap(PROJECT);
  line(30,20,85,75);
  pop();
  
   push();
  translate(225,70);
  strokeCap(PROJECT);
  line(30,20,85,75);
  pop();
  
  push();
  translate(195,100);
  strokeCap(PROJECT);
  line(30,20,85,75);
  pop();
  

  push();
  translate(165,130);
  strokeCap(PROJECT);
  line(30,20,85,75);
  pop();
  
  push();
  translate(135,160);
  strokeCap(PROJECT);
  line(30,20,85,75);
  pop();
  
  
  push();
  //draw circle shape of the light
  noStroke();
  fill('rgb(211,206,206)')
  translate(200,0);
  rotate(QUARTER_PI);
  quad(95,180,185,180,240,280,40,280);
  pop();  
  


pop();
  
    // Wind Up
  /// bottom
  push();
  fill(0);
  translate(425,50);
  rotate(QUARTER_PI*3);
  rect(180,100,30,76);
  pop();
  
  /// handle
  push();
  fill(0);
  translate(200,0)
  rotate(QUARTER_PI);
  rect(18,80,20,80)
  pop();
  
 
  
  /// mini handle
  push();
  fill(0);
  translate(320,50);
  rotate(QUARTER_PI*3);
  rect(180,100,30,30);
  pop();
  
  //flash
  /// black ellipse
  push();
  rotate(QUARTER_PI);
  ellipseMode(RADIUS);
  fill(0);
  ellipse(280,145,100,40);
  
  /// white ellipse
  ellipseMode(CENTER);
  fill(1000);
  ellipse(280,145,170,70);
  pop();
  
    
//mouse coordinate tracker 
  push()
    fill('red')
    text("("+mouseX+","+mouseY+")", mouseX, mouseY);
  pop()
  
}