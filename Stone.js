class Stone{
     constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution: 0,
            density: 1,
            friction: 1.2,
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.image = loadImage("plucking mangoes/stone.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,50,50);
    }
}