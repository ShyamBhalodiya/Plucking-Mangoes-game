class ground{
    constructor(){
        var option = {
            isStatic:true
        }
        this.body = Bodies.rectangle(width/2,780,width,30,option);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,width,30);
        pop();
    }
}