
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const constraint = Matter.constraint;

var engine , world

var holder,ball,ground
var stand ,stand
var ball 
var slingShot
var polygon_img

function preload() {

}


function setup() {
 engine = new Engine.create()
 world = engine.world
 
 
 
 
 
 
 
 
  createCanvas(windowWidth, windowHeight);

ground = new Ground()
stand1 = new Stand ()
stand2 = new Stand ()

block1 = new Block(200,275,30,40)
block2 = new Block(310,275,30,40)
block3 = new Block(340,275,30,40)
block4 = new Block(370,275,30,40)
block5 = new Block(400,275,30,40)
block6 = new Block(430,275,30,40)
block7 = new Block(460,275,30,40)
block8 = new Block(490,275,30,40)
// two
block9 = new Block(310,235,30,40)
block10 = new Block(340,235,30,40)
block11 = new Block(370,235,30,40)
block12 = new Block(400,235,30,40)
block13 = new Block(430,235,30,40)
block14 = new Block(460,235,30,40)
 // three
 block15 = new Block(340,195,30,40)
 block16 = new Block(370,195,30,40)
 block17 = new Block(400,195,30,40)
 block18 = new Block(430,195,30,40)
// four
block19 = new Block(370,155,30,40)
block20 = new Block(400,155,30,40)
 // five
 block21 = new Block(385,115,30,40)






// set two
// one
block1 = new Block(640,175,30,40)
block2 = new Block(670,175,30,40)
block3 = new Block(700,175,30,40)
block4 = new Block(730,175,30,40)
block5  = new Block(760,175,30,40)
//two 
block6 = new Block(670,135,30,40)
block7 = new Block(700,135,30,40)
block8 = new Block(730,135,30,40)
// three
block9 = new Block(760,95,30,40)

ball = Bodies.circle(50,260,20)
World.add(world,ball)

slingShot = new SlingShot(this.ball,{x:200,y:200})

}


function draw() {
  background("white");  
   Engine.update(engine)
  
  strokeweight(2)
  stroke(15)

  stand1.display()
  stand2.display()
  
  stroke(15)
  fill("black")
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
stroke(15)
fill("orange")

block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
stroke(15)
fill("violet")
block15.display()
block16.display()
block17.display()
block18.display()

stroke(15)
fill("green")
block19.display()
block20.display()
stroke(15)
fill("blue")
block21.display()
 
stroke(15)
fill("red")
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
stroke(15)
fill("yellow")

block6.display()
block7.display()
block8.display()
stroke(15)
fill("pink")
block9.display()

Text("drag the line and release to hit boxes ",600,250)

ellipse(ball.position.x,ball.position.y,20)
  slingShot.display()



drawSprites();


}

function mouseDragged() {
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased (){
  slingShot.fly()
}

async function GetTime(){
  var response = await fetch("http://worldclockapi.com/api/json/est/now")
  var json = await response.json();
  console.log(json);
  var dt = json.currentDateTime;
  console.log(dt);
  var hour = dt.slice(11,13)
  console.log(hour);
  
  if(hour<06&&hour>19){
  bg = "sprites/bg.png"
  
  }
  
  else{
  bg="sprites/bg2.jpg"
  
  }
  
  backgroundImg= loadImage(bg)
  
  
  }