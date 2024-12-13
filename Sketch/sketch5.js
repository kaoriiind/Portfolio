let r; 

function setup() {
  createCanvas(400, 400);
  r = 30;
  frameRate(12);  
  angleMode(DEGREES);
}

function draw() 
{
  background(0);

  strokeWeight(2)
  for(let i = 0; i<= width; i+= 2*r)
  {
   
    
    for(let j =0; j<=height; j+= 2*r)
    {
      
      let e = random (50,70);
      let a,b;
      

      
     
      a =  random(r, r+3*r/2); 
      b = random (r, r/2);
      
     // stroke("grey")
     //  circle (i,j-10,e);
      
      for (let w =0; w<=3*width; w += 2*r)
        {
         noFill()
          stroke("pink")           
          arc(w,w,2*w,2*w,150,270);
         
          
           if(mouseIsPressed){
             
     stroke("rgb(250,250,161)")
          arc(w/10, w/10, 2*w,2*w,-60,150)
    
  }
        }
      
         noStroke()
      fill(map(j, 0, width, 100, 255),map(j, 0, width, 0, 200),map(i, 0, width, 0, 255) );
      ellipse(i, j, a,b);
      
    }
  }
  
 
  
  
  
  //eyes
  // fill("white")
  // for (let s = 1/5*r; s<= width; s+=2*r)
  //   {
  //     for (let t = 7/5*r; t<= width; t+=2*r){
  //     for (let p = r; p <=height; p+=2*r)
  //       {
  //     circle(s,p,10);
  //         circle(t, p,10)
      //   }
      // }
    // }
}