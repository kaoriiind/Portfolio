let cols; let rows;
let spacing = 20;
let size = [];
let scl = 0.1;

let days = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday", "Sunday"]
let chat = [9,2,4,5,19,9,4]

let index = 0;

function setup() {
  createCanvas(600, 600);
 
  cols = width/spacing;
  rows = height/spacing;
  
    }

function mousePressed()
  {
    if(index>=chat.length-1)
      {
        index =0;
      }
    else
      {
        index++
      }
    
    scl =1/chat[index]/2
  }

function draw() {
  background(0);
  for (let i=0; i<cols; i++){
    size [i]= [];
     for (let j=0; j<rows; j++)
     {
    size[i][j] = (dist(mouseX, mouseY, 
                       spacing/2 +i*spacing,
                       spacing/2+j*spacing))*scl;
               }
  }
  for (let i=0; i<cols; i++){
    for (let j=0; j<rows; j++){
      noStroke();
      fill(220)
      ellipse(spacing/2 + i*spacing, spacing/2 + j*spacing, size[i][j], size[i][j]);
    }
  }
  
  fill(225)
  textSize (100);
  text(chat[index] + "people" ,100,300)
  fill("pink")
  textSize (70)
   text ("I chatted with",50,200)
  text(days[index], 300,400)
  
  
  

  
    
  

  
}