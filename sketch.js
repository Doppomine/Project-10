var sea,seaImg
var ship,shipImg
function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}


function setup(){
  createCanvas(800,600);
  sea = createSprite(400,300);
  sea.addImage("sea",seaImg);
  sea.scale = 0.5
  sea.velocityX = -3;

  ship = createSprite(400,300)
  ship.addAnimation("ship",shipImg);
  ship.scale = 0.5;
}

function draw() {
  background("blue");
  drawSprites ();
  
 if(sea.x < 0){
   sea.x = sea.width/4;
 }

}
 