class stone {
    constructor(x, y) {
        this.r = 30
        var option = {
            isStatic: false,
            friction: 1,
            density: 1.2,
            restitution: 0
        };
        this.body = Bodies.circle(x, y, this.r, option);
        World.add(world, this.body);
        this.image = loadImage("stone.png");
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0,100,100);
        pop();
    }
}