class constraint {
    constructor(bodyA,pointB){
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        length: 10,
        stiffness: 0.004
    }
    this.pointB = pointB;//
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
    }
    fly(){
     
        this.chain.bodyA = null;
    }
    attacher(bodyA){
        this.chain.bodyA = bodyA;
    }
    display(){
        if (this.chain.bodyA != null){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
        }
}    