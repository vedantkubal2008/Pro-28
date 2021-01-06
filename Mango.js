class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution : 0,
            friction:1
        }
        this.body = Bodies.circle(x,y,r,options)
        this.r = r;
        World.add(world,this.body);
        this.image = loadImage("plucking mangoes/mango.png");
    }
    display(){
        var pos = this.body.position
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
    }

}