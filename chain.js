class Chain{
    constructor(bodyA, pointB){
        var options ={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.9,
            length : 300,

        }

        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);

    }

    fly(){
        this.chain.bodyA = null;

    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("red");
        line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
}