let x,y
let a,b

function setup() {
  createCanvas(400, 600);
  angleMode(DEGREES);
   background("rgb(196,193,196)");
}


// function mousePressed(){
//   drawCat(mouseX, mouseY)
// }

function draw() {
  
  
  
  // lower body
fill("white")
  stroke(10)
  quad (105,451,279,451,320,610,72,610)
  quad(101,425,302,457,332,577,64,542)
  quad(130,370,307,415,328,505,72,466)
  quad(120,340,285,340,316,420,83,420)

  
    //upper body
  noStroke()
  fill("rgb(175,255,237)")
  rect(100,200,200,150,30);
  
  
  push()
  translate(130,90);
  rotate(60);
  //upper arm
   fill("pink")
  rect(120,130,20,50)
  pop()
  
    push()
  fill("pink")
  translate(0,150)
  rotate(40)
  rect(300,-120,70,20)
  pop()

    push()
  translate(130,90);
  rotate(60);
 
  
  // sleeves
    fill("rgb(175,255,237)")
  rect(100,90,50,50)
  
  translate(300,-60)
  rotate(-20)
  rect(-90,-60,50,50)
  pop()
  
  push()
  translate(0,0);
  rotate(-60)
  rect(200,500,50,50);
  pop()
 
  
  // lower arm
   fill("pink")
  push()
  translate(-250,190)
  rotate(-60)
  rect(50,300,20,70)
  pop()
  
  push()
translate(130,5)
  rotate(-20)
  rect(50,350,70,20)
  pop()
  
  circle(95,322,39)
  circle(304,322,39)
  
  
  // face
  noStroke();
  fill("pink");
  ellipse(200,150,200,120) ;
  ellipse(150,80,50,100);
  triangle(250,44,275,130,228,101);
  fill("purple")
  ellipse(150,70,25,50);
  triangle(250,64,261,100,235,100);
  fill("white");
  ellipse(160,150,25,35);
  ellipse(240,150,25,35);
  fill("black");
  ellipse(160,160,23,25);
   ellipse(240,160,23,25);
  fill("yellow");
  circle(200,180,20);
  fill("black");
  line(180,180,210,180);
  fill("#EF8EF2");
  ellipse(120,170,40,20)
  ellipse(280,170,40,20)

  x=204
  y=287
  
  noStroke();
  fill("yellow");
  triangle(x+32,y-44,x+31,y-10,x+14,y-29);
  triangle(x-29,y-44,x-31,y-10,x-11,y-29);
  circle(x,y,70);
  fill("blue");
  arc(x,y,80,80,0,180);
  fill("rgb(141,106,106)");
  arc(x,y+8,40,40,0,180);
  fill("black");
  circle(x+13,y-15,8);
  circle(x-14,y-15,8);
  fill("rgb(231,129,147)");
  triangle(x-7,y-9,x+8,y-9,x+1,y-2);
  stroke("black");
  line(x+26,y-8,x+37,y-12);
  line(x+26,y-6,x+37,y-7);
  line(x-39,y-12,x-22,y-8);
  line(x-38,y-7,x-25,y-6);


}

  //cat
function mousePressed(){
  drawCat(mouseX, mouseY);
  
}

function keyPressed(){
  
  background ("grey")
}

function drawCat(x,y){
   noStroke();
  fill("yellow");
  triangle(x+32,y-44,x+31,y-10,x+14,y-29);
  triangle(x-29,y-44,x-31,y-10,x-11,y-29);
  circle(x,y,70);
  fill("blue");
  arc(x,y,80,80,0,180);
  fill("rgb(141,106,106)");
  arc(x,y+8,40,40,0,180);
  fill("black");
  circle(x+13,y-15,8);
  circle(x-14,y-15,8);
  fill("rgb(231,129,147)");
  triangle(x-7,y-9,x+8,y-9,x+1,y-2);
  stroke("black");
  line(x+26,y-8,x+37,y-12);
  line(x+26,y-6,x+37,y-7);
  line(x-39,y-12,x-22,y-8);
  line(x-38,y-7,x-25,y-6);
  

}
