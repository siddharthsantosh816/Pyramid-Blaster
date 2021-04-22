class Box{

  constructor(x,y,width,height){
     
    var options={
        restitution:0.3,
        isStatic:false,
        friction:0.9,
        density:0.4,
        life:true
    }

    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
  }
   
 display(){
      var pos=this.body.position;
      if(this.body.speed < 3){
        push();
       // translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
      } else { 
        World.remove(world,this.body);
        this.body.life=false;
      }
 }
}
