
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function preload()
{
	
}

function setup() {
	canvas=createCanvas(windowWidth/2,windowHeight/2.5);
	engine=Engine.create();
	world=engine.world;
	// let canvasmouse=mouse.create(canvas.elt);
	// canvasmouse.pixelRatio=pixelDensity();
	// let options={
	// 	mouse:canvasmouse
	// };
	// mConstraint=MouseConstraint.create(engine,options);
	// World.add(world,mConstraint);

	bob1=new Pendulum(canvas.width/2-100,canvas.height/2,"white");
	bob2=new Pendulum(bob1.x+60,canvas.height/2,"white");
	bob3=new Pendulum(bob2.x+60,canvas.height/2,"white");
	bob4=new Pendulum(bob3.x+60,canvas.height/2,"white");
	bob5=new Pendulum(bob4.x+60,canvas.height/2,"white");
	
	s1=new Sling(bob1.body,{x:bob1.x,y:bob1.y-150});
	s2=new Sling(bob2.body,{x:bob2.x,y:bob2.y-150});
	s3=new Sling(bob3.body,{x:bob3.x,y:bob3.y-150});
	s4=new Sling(bob4.body,{x:bob4.x,y:bob4.y-150});
	s5=new Sling(bob5.body,{x:bob5.x,y:bob5.y-150});
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}



