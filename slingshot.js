class Slingshot {

    constructor(body1,point){
        var options={
            bodyA:body1,
            pointB:point,
            length:30,
            stiffness:0.1,
        }
        
        this.Slingshot=Matter.Constraint.create(options);
        World.add(world,this.Slingshot);
       // this.bodyA=body1;
       // this.pointB=point;
        //console.log(this.Slingshot)
        
    }
    
      fly(){
         this.Slingshot.bodyA=null;
      }
      attach(body){

        this.Slingshot.bodyA=body;
     }
    display(){
    
      if (this.Slingshot.bodyA){
      var pointA=this.Slingshot.bodyA.position;
      var pointB=this.Slingshot.pointB;
      strokeWeight(3);
       line(pointA.x,pointA.y,pointB.x, pointB.y);
      }
    }
    
    }