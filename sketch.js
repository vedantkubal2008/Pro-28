
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var boyimg


function preload()
{
	boyimg= loadImage("plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(1100,390,400,500);
	ground = new Ground(675,630,1350,20)
	stone = new Stone(140,430,50);
	mango1 = new Mango(1100,250,100);
	mango2 = new Mango(1000,300,100);
	mango3 = new Mango(1150,350,100);
	mango4 = new Mango(1175,275,100);
	mango5 = new Mango(1250,350,100);
	mango6 = new Mango(1040,200,100);
	mango7 = new Mango(1050,350,100);
	mango8 = new Mango(1150,200,100);
	constrain = new constraint(stone.body,{x:140,y:430})
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  image(boyimg,100,320,200,400);
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  constrain.display();

  fill(0);
  textSize(20);
  text("Press Space to get a second Chance to Play !!",40,40);
  
 
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);

 

  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
	constrain.fly();
  }
  
  function keyPressed(){
	if(keyCode===32){
	  Matter.Body.setPosition(stone.body,{x:140,y:315});
	  constrain.attacher(stone.body);
	}
  }
  function detectCollision(body1,body2){
    body1pos = body1.body.position;
    body2pos = body2.body.position;
  
    var distance = dist(body1pos.x,body1pos.y,body2pos.x,body2pos.y)
    if(distance <=body2.r + body1.r){
      Matter.Body.setStatic(body2.body,false);
    }
  }

