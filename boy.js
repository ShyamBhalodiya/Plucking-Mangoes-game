class boy{
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;
        var option = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,this.width/3.5,this.height/3.5,option);
        World.add(world,this.body);
        this.image = loadImage("boy.png");
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}