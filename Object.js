function Hammer(){
    hammer = createSprite(thor.x,thor.y,50,75);
    hammer.addImage("shoot",hammer_img);
    hammer.scale=0.16
    hammer.velocityX=20;
    hammer.lifetime=500;
    hammerGroup.add(hammer);
}