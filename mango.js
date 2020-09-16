class mango {
    constructor(x, y, r) {
        this.r = r;
        var option = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, this.r / 2, option);
        World.add(world, this.body);
        this.image = loadImage("mango.png");
        this.vanishing = 225;
    }
    display(width, height) {
        this.width = width;
        this.height = height;
        var pos = this.body.position;
        if (this.body.speed < 2) {
            push();
            translate(pos.x, pos.y);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
        }
        else {
            push();
            translate(pos.x, pos.y);
            this.vanishing = this.vanishing - 10;
            tint(225, this.vanishing);
            image(this.image, 0, 0, this.width, this.height);
            pop();
            World.remove(world, this.body);
        }
    }
}