
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var chain1, chain2, chain3, chain4, chain5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(460, 175, 375, 20);

	bob1 = new Bob(330, 400);
	bob2 = new Bob(380, 400);
	bob3 = new Bob(430, 400);
	bob4 = new Bob(480, 400);
	bob5 = new Bob(530, 400);

	chain1 = new Chain(bob1.body, {x : 330, y : 175})
	chain2 = new Chain(bob2.body, {x : 380, y : 175})
	chain3 = new Chain(bob3.body, {x : 430, y : 175})
	chain4 = new Chain(bob4.body, {x : 480, y : 175})
	chain5 = new Chain(bob5.body, {x : 530, y : 175})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:180, y:-100})


	}
}