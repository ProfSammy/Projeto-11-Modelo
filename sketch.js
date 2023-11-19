var sea, seaImg;

function preload(){
  seaImg = loadImage('sea.png')
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200, 200);
  sea.addImage(seaImg);
  sea.scale = 0.3;
  
}

function draw() {
  background("blue");
  
  
  drawSprites();
}
