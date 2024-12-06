class Fish {
  
  constructor(xPos,yPos, s=30, spd=1){
  this.x = xPos;
  this.y = yPos;
  this.size = s;
  this.speed = spd;
  }
  
   show_fish1(){
    noStroke();
    fill("green")
    ellipse(this.x, this.y, 50,30);
    triangle(this.x,this.y, this.x-35, this.y-15, this.x-35, this.y+15);
     fill("white")
     circle(this.x+10, this.y-5,5);
    }
  
  show_fish2(){
    noStroke();
    fill("red")
    circle(this.x, this.y, this.size);
    triangle(this.x,this.y, this.x-this.size, this.y-15, this.x-this.size, this.y+15);
     fill("white")
     circle(this.x+10, this.y-5,this.size/10);
  }
  
  move_fish(){
    if(this.x<width){
    this.x+=this.speed
    }
    else{
      this.x = 0;
    } 
  }
  
  size_fish(){
    if(this.size<100){
      this.size ++
    }
      else{
        this.size = 10;
      }
  }
}

let fish1 =[];
let fish2=[];

function setup() {
  createCanvas(400, 400);
  
  for (let i = 0; i<10; i++){
    fish1 [i] = new Fish (300, 30*i, 30,i); 
  }
  
  for (let j = 0; j<10; j++){
    fish2 [j] = new Fish (300, 50*j, 30, j);
  }
  
}

function draw() {
  background("blue");
  
    for (let i = 0; i<10; i++){
    fish1 [i].show_fish1();
      fish1[i].move_fish();
  }
  
   for (let i = 0; i<10; i++){
    fish2 [i].show_fish2();
      fish2[i].size_fish();
     fish2[i].move_fish();
  }
  
}