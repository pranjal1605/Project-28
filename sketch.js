
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,stone,ground;
var boy;
var mango1,mango2,mango3,mango4,mango5;
var slingshot;

function preload()
{
}

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(335,500,20,20);
	tree = new Tree(1000,450,300,300);
	ground = new Ground(700,600,1500,10);
	boy = new Boy(400,540,200,200);
	mango1 = new Mango(1000,400,20,20);
	slingshot = new SlingShot(stone.body,{x:-60,y:-50})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  tree.display();
  mango1.display();
  ground.display();
  stone.display();
  boy.display();
  slingshot.display();
//   detectCollosion(stone,mango1);
//   detectCollosion(stone,mango2);
//   detectCollosion(stone,mango3);
//   detectCollosion(stone,mango4);
//   detectCollosion(stone,mango5);
}
// function mouseDragged(){
//     Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
// }


// function mouseReleased(){
//     slingshot.fly();
// }
// function detectCollosion(lstone,lmango){
//     mangoBodyPosition=lmango.body.Position
// 	stoneBodyPosition=lstone.body.position

// 	var distance = (stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
// 	if (distance<=lmango.r+lstone.r){
// 		Matter.Body.setStatic(lmango.body,false);
// 	}
// }



