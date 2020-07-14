var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var line1,line2,line3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	 line1=new Line(380,660,200,20);
	 line2=new Line(290,580,20,150);
	 line3=new Line(470,580,20,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  line1.display()
  line2.display();
  line3.display();
  keyPressed()
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

    Body.setStatic(packageBody,false) 
    
  }
}



