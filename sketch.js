function setup() {
  createCanvas(800,400);
  fixedR=createSprite(400, 200, 50, 50);
  movingR=createSprite(200,100,50,50);

}

function draw() {
background(255,255,255);  

movingR.x=mouseX;
movingR.y=mouseY;

if(fixedR.width/2+movingR.width/2>fixedR.x-movingR.x
  && fixedR.width/2+movingR.width/2>movingR.x-fixedR.x
  && fixedR.height/2+movingR.height/2>fixedR.y-movingR.y
  && fixedR.height/2+movingR.height/2>movingR.y-fixedR.y){
fixedR.shapeColor="red"
movingR.shapeColor="red"
}
else{
fixedR.shapeColor="green"
movingR.shapeColor="green"
}
  drawSprites();
}