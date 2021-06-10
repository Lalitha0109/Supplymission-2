class box{
    constructor(x,y,w,h){
        this.body=Matter.Bodies.rectangle(x,y,w,h,{friction:0.3});
        Matter.World.add(world,this.body);
        this.width=w;
        this.height=h;
        
        
    }
    display(){
        push ();
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        fill("red");
        rect(0,0,this.width,this.height);
        
        pop();

       
    }
}