var fixedRect, movingRect;

var Gobj1,Gobj2,Gobj3,Gobj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  Gobj1 = createSprite(100,100,50,50);
  Gobj1.shapeColor= "green";

  Gobj2 = createSprite(300,100,50,50);
  Gobj2.shapeColor= "green";
  Gobj2.velocityY=2;
  

  Gobj3 = createSprite(500,100,50,50);
  Gobj3.shapeColor= "green";

  Gobj4 = createSprite(700,100,50,50);
  Gobj4.shapeColor= "green";


 // movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if (isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor= "blue";
  }

  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor= "green";
  }

  bounceOff(movingRect,Gobj2);
 
drawSprites();
}


