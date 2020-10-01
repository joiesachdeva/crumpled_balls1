class PaperClass{
   constructor(x,y) {
       var options={
         isStatic:false,
         restitution:0.3,
         friction:0.5,
         density:1.2
       }
      
       this.body = Bodies.circle(x, y, 20, options);
       this.radius=20;
      }
     
     

    
display(){
  var pos =this.body.position;
 
  push();
  translate(pos.x, pos.y);
  fill("white");
  ellipseMode(RADIUS);
  ellipse(this.body.position.x, this.body.position.y,20);
  pop();
  
}
};
