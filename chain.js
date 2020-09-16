class chain {
    constructor(bodyA, pointB) {
        this.bodyA = bodyA;
        this.pointB = pointB;
        var option = {
            bodyA: this.bodyA,
            pointB: this.pointB,
            length: 50,
            stiffness: 0.005
        };
        this.chain = Constraint.create(option);
        World.add(world, this.chain);
    }
    display() {
        if (this.chain.bodyA) {
            var bodya = this.chain.bodyA.position;
            var pointb = this.chain.pointB;
            push();
            strokeWeight(3);
            line(bodya.x, bodya.y, pointb.x, pointb.y);
            pop();
        }
    }
    fly() {
        this.chain.bodyA = null;
    }
    attach(Body) {
        this.chain.bodyA = Body;
    }
}