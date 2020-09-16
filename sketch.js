
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Detector = Matter.Detector;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  Ground = new ground(); 
  Tree = new tree(1250,400,500,800);
	Boy = new boy(300,620,300,600);
	Stone = new stone(200,573);
  Chain = new chain(Stone.body,{x:208 ,y:482});
  mango1 = new mango(1291,75,50);
  mango2 = new mango(1344,146,30);
  mango3 = new mango(1180,190,65);
  mango4 = new mango(1431,292,40);
  mango5 = new mango(1153,343,45);
  mango6 = new mango(1270,200,40);
  mango7 = new mango(1342,217,35);
  mango8 = new mango(1079,263,45);
  
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  Ground.display();
  Tree.display();
  Boy.display();
  Stone.display();
  Chain.display();
  mango1.display(100,100);
  mango2.display(60,60);
  mango3.display(110,110);
  mango4.display(80,80);
  mango5.display(90,90);
  mango6.display(60,60);
  mango7.display(70,70);
  mango8.display(90,90);

  collisondetection(mango1,Stone);
  collisondetection(mango2,Stone);
  collisondetection(mango3,Stone);
  collisondetection(mango4,Stone);
  collisondetection(mango5,Stone);
  collisondetection(mango6,Stone);
  collisondetection(mango7,Stone);
  collisondetection(mango8,Stone);

  drawSprites();
  textSize(24);
  text("Tap space to get a second chance",100,50);

}
function mouseDragged(){
  Body.setPosition(Stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  Chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Body.setPosition(Stone.body,{x:200 ,y:473 });
    Chain.attach(Stone.body);
  }
}
function collisondetection(bodya,bodyb){
  var positiona = bodya.body.position;
  var positionb = bodyb.body.position;

  distance = dist(positiona.x,positiona.y,positionb.x,positionb.y);
  if(distance <= bodya.r+bodyb.r){
    Body.setStatic(bodya.body,false);
  }

}