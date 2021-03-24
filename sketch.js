
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var backgroundImg;

function preload() {
  getBgimg();
}

function setup() {
  canvas = createCanvas(1400,800);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(700,800,1400,60);
 ground3 = new Ground(590,570,300,20);
 ground2 = new Ground(900,270,300,20);

 bird = new Hexagon(200,400,30);
 slingshot = new SlingShot(bird.body,{x:200, y:400});

 box20=new Box(510,515);

 box21=new Box(550,515);
 
 
 box22=new Box(590,515);
 
 
 box23=new Box(640,515);
 
 
 box24=new Box(680,515);
 
 
 box25=new Box(540,460);
 
 
 box26=new Box(580,460);
 

 box27=new Box(620,460);
 

 box28=new Box(660,460);
 

 box30=new Box(595,400);
 

 box1=new Box(810,215);
 
 
 box2=new Box(850,215);
 
 
 box3=new Box(890,215);
 
 
 box4=new Box(940,215);
 
 
 box5=new Box(980,215);
 
 
 box6=new Box(840,160);
 
 
 box7=new Box(880,160);
 

 box8=new Box(920,160);
 

 box9=new Box(960,160);
 

 box10=new Box(895,100);
 
}

function draw() {
  if(backgroundImg)

  background(backgroundImg);
  Engine.update(engine);

  ground.display();
  ground2.display();
  ground3.display();

  box1.display();
  box1.score();
  
  box2.display();
  box2.score();

  box3.display();
  box3.score();
  
  box4.display();
  box4.score();
  
  box5.display();
  box5.score();

  box6.display();
  box6.score();
 
  box7.display();
  box7.score();

  box8.display();
  box8.score();

  box9.display();
  box9.score();

  box10.display();
  box10.score();

  box20.display();
  box20.score();

  box21.display();
  box21.score();
  
  box22.display();
  box22.score();
  
  box23.display();
  box23.score();
  
  box24.display();
  box24.score();
  
  box25.display();
  box25.score();
  
  box26.display();
  box26.score();
  
  box27.display();
  box27.score();
  
  box28.display();
  box28.score();
  
  box30.display();
  box30.score();

  slingshot.display();
  bird.display();

  textSize(40);
  fill("black");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",50,60);

  textSize(30);
  fill("black");
  text("Press SPACE for a second chance!",850,730);

}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(bird.body, {x:200, y:400})
		slingshot.attach(bird.body);
	}
}

async function getBgimg() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var responseJson = await response.json();
  var dateTime = responseJson.datetime;
  var hour = dateTime.slice(11,13);
  if(hour>=06 && hour<=19) {
    bg = "bgM.jpeg";
  }
  else{
    bg = "bgN.jpeg";
  }
  backgroundImg = loadImage(bg);
}
