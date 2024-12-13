let scene ="opening";

let player_x = 80;
let player_y = 300;
let player_w = 30;
let player_h = 20;
let player_angle = 0;
let player_dangle = 0;
let wall_size = 80;

let knowledge;
let catcher;
let score = 0;
let blockList = [];
let items= [];
let item2 = [];

class Block{
  constructor(){
    this.x = 0;
    this.y = 0;
    this._x = 0;
    this._y = 0;
    this.status = 1;
    this.index = 0;
    this.img = null;
  }
}

// 99 = road, 0 = wall, 1 = goal
let slotList = [
  99, 99,   0,  0,  0,  0,    0, 99, 
  99, 1,  0,  99,  99,  99,    0,  99,  
  99, 99,  99,  99, 99,  99,  0,  99,  
  99,  0,  0, 99,  99,  0,   0,  99, 
  99,  99, 0,  0,  0,  0,    99, 99, 
];
let clear_flag = 0;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  knowledge = new Knowledge();
  catcher = new Catcher();
  
  blockList = createBlockList();
  console.log(blockList);
}

function draw() {
  switch(scene){
    case "opening": opening(); break;
    case "explain1": explain1(); break;
    case "explain2": explain2(); break;
    case "Stage1": Stage1(); break;
    case "gameover_1": gameover_1();break;
    case "gameclear_1": gameclear_1(); break;
    case "stage2_catch": stage2_catch(); break;
    case "gameover_2": gameover_2();break;
    case "gameclear_2": gameclear_2(); break;
    case "stage3_rubber": stage3_rubber(); break;
    case "gameover_3": gameover_3(); break;
    case "ending": ending(); break;
  }
  
}

function opening(){
  background("rgb(255,114,138)");
  textSize(50);
  fill(255);
  text("Rabbit Adventure", 300,200);
  textSize(40);
  if(frameCount % 30 <20){
  text("Press Enter key to start", 300,300);
  }
}

function explain1(){
  background("rgb(255,114,138)");
  fill(255);
  textSize(38);
  text(" You are a rabbit, \n dreaming to study abroad. ", 300,120)
  text("But your mother is against you.", 300,240)
  textSize(30);
   text("Press Enter to proceed", 300,310)
}

function explain2(){
  background("rgb(255,114,138)");
  fill(255);
  textSize(38);
  text("To persuade mother, \n you must face her \n without hitting any walls.", 300,100)
  
  textSize(50);
  if(frameCount % 30 <20){
  text("Use the ← → keys \n to move forward.", 300,265)
  }
  textSize(30);
   text("Press Enter to start", 300,376)
}


function Stage1(){
  background("#FFC107")
  // set up walls
    for(let i=0; i<40; i++){
    let block_x =i % 8 * wall_size;
    let block_y =int(i /8) * wall_size;
    fill(255);
    // aesthetics of goal
    if(slotList[i] ==1){
       fill("rgb(248,39,76)");
       }
    // aesthetics of wall
    if(slotList[i] == 99){
       fill("rgb(83,83,83)")
       }
   
      // detect touch to wall
    if(dist(block_x + 40, block_y + 40, player_x + player_w/2, player_y + player_h/2)< 35){
       if (slotList[i] == 99){
         player_x = -999;
         player_y = -999;
         scene = "gameover_1";
       }
      if (slotList[i] == 1){
        player_x = -999;
         player_y = -999;
        scene = "gameclear_1";
          }
       }
    rect(block_x, block_y, wall_size, wall_size)
  }
     
  // setup player
  player_angle = player_angle + player_dangle;
  
  player_x = player_x + cos(radians(player_angle));
  player_y = player_y + sin(radians(player_angle));
  
  push();
  translate(player_x + player_w/2, player_y + player_h/2);
  rotate(radians(player_angle));
  
  // player aesthetics
  fill("pink");
  noStroke();
  ellipse(-player_w/2, -player_h/2, player_w,player_h);
  ellipse(-player_w/4, -player_h, player_w/4, player_h);
  ellipse(-player_w*3/4, -player_h, player_w/4, player_h);
  fill("black");
  circle(-player_w/4, -player_h/2, 4);
  circle(-0.2, -player_h*3/4, 2);
  pop();
  
  // rabbit mother 
  push();
  noStroke();
  fill("pink")
  ellipse(120,135,60,40);
  ellipse(135,105, 20,40);
  ellipse(105,105,20,40);
  pop();
  
  fill(255);
  textSize(50);
  text("FEAR", 320,300);
  
  textSize(28);
  text ("HESITANCE", 80,370);
  
  textSize(20);
  text("MONEY", 520, 370);
  
  textSize(60);
  text("M", 580, 60);
  text("O", 580, 140);
  text("N", 580, 220);
  text("E", 580, 300);
  text("Y", 580, 380);
  
  textSize(30);
  text("CRITICISM", 80, 50);
  
  textSize(60);
  text("PEER PRESSURE", 240,220);
  
  textSize(30);
  text("INCONFIDENCE", 360, 130);
  
}



function gameover_1(){
//aesthetics of game over
background(0);
    textSize (50);
    fill("red");
    text("Game Over \nPress enter to replay", 300,200);
}

function gameclear_1(){
//aesthetics of game clear
  background("pink")
  textSize (45);
    fill("blue");
    text("Game clear! \nPress enter to next stage", 300,200)
}


function preload(){
items.push(loadImage("/assets/bear.png"));
  items.push(loadImage("/assets/brush.png"));
  items.push(loadImage("/assets/coding.png"));
  items.push(loadImage("/assets/connection.png"));
  items.push(loadImage("/assets/figma.png"));
  items.push(loadImage("/assets/frask.png"));
  items.push(loadImage("/assets/illustrator.png"));
  
  // stage3
  for (let i = 0; i < 9; i++) {
    item2[i] = loadImage(`assets/image${i}.png`); 
  }

}


function stage2_catch(){
  background(220);
  knowledge.display();
  knowledge.update();
  
  catcher.display();
  catcher.move(mouseX);
  
  if(knowledge.isCaught(catcher.x, catcher.width)){
    score += 1;
    knowledge.reset();
  }
  
  if (score >8){
    scene ="gameclear_2";
  }
  if (knowledge.y > height-5){
    scene ="gameover_2";
  }
  
  fill(0);
  textSize(30);
  text(`Score: ${score}`,70,50);
  
  textSize(50);
  text(`Collect 9 items \n Move mouse < >`, 300,200)

}


class Knowledge{
  constructor(){
    this.reset();
  }
  
  display(){
    image(this.img,this.x,this.y,this.size, this.size)
  }
  
  update(){
    this.y += this.speed;
    
    if(this.y > height){
       this.reset();
       }
  }
    
    reset(){
      this.x = random(width);
      this.y = 0;
      this.size = 50;
      this.speed = random (2,5);
      this.img = items[floor(random(items.length))]
    }
    
    isCaught(catcherX, catcherWidth){
      let distance = dist(this.x, this.y, catcherX, height-20);
      return distance < this.size + catcherWidth /2;
    }
}

class Catcher {
  constructor(){
    this.width = 50;
    this.x = width /2;
  }
  
  display(){
    fill(0);
    rect(this.x, height-40, this.width, 20);
    push();
    noStroke();
    fill("pink")
    ellipse(this.x+this.width/2, height-40, this.width*2/3, 25);
    ellipse(this.x+this.width*3/4, height-60, this.width/4, 30);
    ellipse(this.x+this.width/4, height-60, this.width/4, 30);
    pop();
  }
  
  move(positionX){
    this.x = positionX - this.width/2
  }

}
function gameover_2(){
//aesthetics of game over
background(0);
    textSize (50);
    fill("red");
    text("Game Over \nPress enter to replay", 300,200);
}

function gameclear_2(){
//aesthetics of game clear
  background("pink")
  textSize (45);
    fill("blue");
    text("Game clear! \nPress enter to next stage", 300,200)
}

let player3_x =100;
let player3_y = 100;
let center_x = 200;
let center_y = 200;
let dx = 0;
let dy = 0;
let drag = 0;

let ball_x = 200;
let ball_y = 400;
let ball_dx = 0;
let ball_dy = 0;

let score_b = 0;
let timer = 0;
let status = 1;
let currentIndex = 0;

  
function stage3_rubber(){
  background("rgb(223,198,41)");
  
  
  //timer
  timer +=1;
  timer = max(timer,0);
  let limit = 100000;
  let per = (limit -timer) / limit;
  per = constrain (per,0,1);
  if (per == 0){
    scene ="gameover_3";
  }
  fill(255);
  rect(0,0, width,20);
  fill("blue");
  rect (0,0, width*per, 20);
  
  //score
  textSize(100);
  noStroke();
  text(score_b, 100,280);
  
 textSize(40);
  text ("Click!", 100,80);
  text("Drag!", 100,150);
  text("Release!", 100, 350);
  
  
  // player movement
  if(drag ==0){
  dx = 0.9*dx +(center_x - player3_x) * 0.1
  dy = 0.9*dy +(center_y - player3_y) * 0.1
  player3_x = player3_x +dx
  player3_y = player3_y +dy
  }
  
  if(drag ==1){
     player3_x = 30;
    player3_y = mouseY;
    dx = 0;
    dy = 0;
     }
  
  // player strings
  stroke(255);
  line(center_x, center_y+100, player3_x, player3_y)
    line(center_x, center_y-100, player3_x, player3_y)
  
  //player aesthetics
  push();
  noStroke();
  fill("pink");
  ellipse(player3_x, player3_y-15, 50,50)
  ellipse(player3_x, player3_y-60, 20,50)
  fill (30);
  ellipse (player3_x+7, player3_y-20, 10,10);
 pop();
  
  //ball movement
   ball_dy += 1;
  ball_x += ball_dx;
  ball_y += ball_dy;
  if(ball_y > 400){
    ball_x = 200;
    ball_y = 400;
    ball_dx = 0;
    ball_dy = -25; 
  }
  if(dist(player3_x, player3_y, ball_x, ball_y) < (30 + 20) / 2){
    if(abs(ball_dx) == 0){
      ball_dx = dx;
      ball_dy = dy;
    }
}
  
  //aesthetics of ball
  fill(255);
  ellipse(ball_x, ball_y, 20, 20);

  
  
  // blocks animation
  for(let i=0; i<blockList.length; i++){
    let block = blockList[i];
    block.x += (block._x - block.x) *0.1;
    block.y += (block._y - block.y) * 0.1;
  
   
    // if the block is white and hasn't been hit & hitted, turn the color grey and inactivate
    if(block.status == 1){
      if(dist(block.x, block.y, block._x, block._y) <40){
        if(dist(ball_x, ball_y, block.x, block.y) < 35){
            block.status = 99;
            score_b += 1;
          }
        }
      }
    
    // draw blocks
    fill(255);
    if(block.status == 99){
      fill(255,100);
    }
    
    rect(block.x, block.y, 70, 50);
    
    // draw block image
    if(block.img){
      image(block.img, block.x, block.y,70,50);
    }
    
    
//     // block label
//     textSize(24);
//     fill(30);
//     text(block.label, block.x+35, block.y + 30);
    
  }
  if(isClear() == 1){
   scene ="ending" ;
}

}
  

function mousePressed(){
  drag =1
}
function mouseReleased(){
  drag =0
}

function createBlockList(){
  for(let i=0; i<9; i++){
    let block = new Block();
    block._x = i % 3 * 100 + 300;
    block._y = int(i / 3) * 100 + 50;
    block.x = block._x + 1000;
    block.y = block._y;
    block.img = item2[i];
    block.status =1;
    blockList.push(block);
  }
  return blockList;
}

function isClear(){
  for(let i=0; i<blockList.length; i++){
    let block = blockList[i];
    if(block.status == 1){
      return 0;
    }
  }
  return 1;

}


function gameover_3(){
//aesthetics of game over
background(0);
    textSize (50);
    fill("red");
    text("Game Over \nPress enter to replay", 300,200);
}

function ending(){
  background("rgb(255,255,107)")
  textSize(50);
    fill("rgb(252,77,108)")
  text("Conglatulations! \n Game clear!",300,130)
  textSize(20)
  text("♡ Press enter to replay ♡", 300, 230)
  

  noStroke();
  ellipse(200,330,100,70);
  ellipse(220,280,30,60);
  ellipse(180,280,30,60);
  
  fill("pink")
  noStroke();
  ellipse(400,330,100,70);
  ellipse(420,280,30,60);
  ellipse(380,280,30,60);
  
  fill("rgb(167,248,255)")
  circle(290,320,30);
  circle(320,320,30);
  triangle(273,322, 338,322,304,358)
  textSize(10)
  fill("black")

}

function keyPressed(){
  if(keyCode == LEFT_ARROW){
    player_dangle = -1;
  }
   if(keyCode == RIGHT_ARROW){
    player_dangle = 1;
  }   
}

function keyTyped(){
  if(keyCode == 13);
  switch (scene){
    case "opening":
      scene ="explain1";
      break;
      
       case "explain1":
      scene ="explain2";
      break;
      
      case "explain2":
      scene = "Stage1";
      break;
      
      case "gameover_1":
      scene = "Stage1";
      player_x = 80;
      player_y = 300;
      player_angle = 0;
      player_dangle = 0;
      break;
    
      case "gameclear_1":
      scene = "stage2_catch";
      break;
      
      case "gameover_2":
      scene = "stage2_catch";
      score =0;
      knowledge.y =0;
      
      break;
      
      case "gameclear_2":
      scene = "stage3_rubber";
      break;
      
      case "gameover_3":
      scene = "stage3_rubber";
      break;
      
      case "gameclear_3":
      scene = "ending";
      break;
      
        case "ending":
      scene = "opening";
      break;
      
  }
}
