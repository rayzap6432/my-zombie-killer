var bg,bgimg
var player,playerimg
var z2,z2img
function preload(){
bgimg=loadImage("f/bg.jpeg")
shooterimg=loadImage("f/shooter_2.png")
shottingimg=loadImage("f/shooter_3.png")
zombieimg=loadImage("f/zombie.png")


}


function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(displayWidth/2-20, displayHeight/2-40, 20, 20);
  bg.addImage(bgimg)
  bg.scale=1.1

  player=createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(shooterimg)
  player.scale=0.3
  player.setCollider("rectangle",0,0,300,300)

  zombie=createSprite(850,550)
  zombie.addImage(zombieimg)
  zombie.scale=0.2
}

function draw() {
  background(0,0,0); 
  
  if(keyDown("UP_ARROW")){
    player.y=player.y-30
  }

  if(keyDown("DOWN_ARROW")){
    player.y=player.y+30
  }

  if(keyWentDown("SPACE")){
    player.addImage(shottingimg)
  }
  else if(keyWentUp("SPACE")){
    player.addImage(shooterimg)
  }
  drawSprites();
}