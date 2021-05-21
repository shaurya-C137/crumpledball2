var ground,paper1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(400,600,800,20,{isStatic:true})
    World.add(world,ground)
	paper1 = new Paper(100,450)
	
	dustbin1 = new Dustbin(600,500,220,220)
	//dustbin2 = new Dustbin(500,530,15,100)
	//dustbin3 = new Dustbin(700,530,15,100)

}


function draw() {
	Engine.run(engine);
	rectMode(CENTER);
  background("lightblue");
  

paper1.display()
rect(ground.position.x,ground.position.y,800,20)
dustbin1.display()
//dustbin2.display()
//dustbin3.display()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
     
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:95,y:-150})
	
}


}
