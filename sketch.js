var garden, gardenImg;
var tomCat, jerryMouse;
var catImg1, catImg2, catImg3;
var mouseImg1, mouseImg2, mouseImg3;

function preload() {
    //load the images here
    catImg1 = loadImage("tomOne.png");
    catImg2 = loadAnimation("tomTwo.png","tomThree.png");
    catImg3 = loadAnimation("tomFour.png");

    mouseImg1 = loadImage("jerryOne.png");
    mouseImg2 = loadAnimation("jerryTwo.png","jerryThree.png");
    mouseImg3 = loadAnimation("jerryFour.png");

    gardenImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400,1000,800);
    garden.addImage(gardenImg);

    tomCat = createSprite(870,600,10,10);
    tomCat.addImage(catImg1);
    tomCat.scale = 0.1;
    tomCat.debug=true;
    tomCat.setCollider("circle",0,0,200);

    jerryMouse = createSprite(200,600,10,10);
    jerryMouse.addImage(mouseImg1);
    jerryMouse.scale = 0.1;
    jerryMouse.debug=true;
    jerryMouse.setCollider("circle",0,0,200);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   //if(tomCat.x - jerryMouse.x < (tomCat.width + jerryMouse.width)/2){ 
    if(tomCat.x - jerryMouse.x < (tomCat.width/2 + jerryMouse.width/2)){
        tomCat.velocityX = 0;
        tomCat.addAnimation("catStop",catImg3);
        tomCat.changeAnimation("catStop");
        
        jerryMouse.addAnimation("mouseStop",mouseImg3);
        jerryMouse.changeAnimation("mouseStop");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === LEFT_ARROW){
       tomCat.velocityX = -5;
       tomCat.addAnimation("catRunning",catImg2);
       tomCat.changeAnimation("catRunning");

       jerryMouse.addAnimation("mouseTeasing",mouseImg2);
       jerryMouse.changeAnimation("mouseTeasing");
   }

}
