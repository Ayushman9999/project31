class Particle{
    constructor(x,y,r){
    

          var options = {
            restitutions:0.4

        }
        this.r=r;
        this.body = Bodies.circle(x,y,this.r,options);
        this.color = coior(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
        
    }

diaplay(){

    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x,pos.y);
    rotate (angle);
    //imageMode(CENTER);
    noStroke ();
    fill ("white");
    ellipseMode (RADIUS);
    ellipse(0,0,this.r,this.r);
    pop ();

   }


}



