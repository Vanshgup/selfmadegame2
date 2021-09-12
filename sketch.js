var bg,bgImg;
var player, shooterImg, shooter_shooting,zombie,zombie_Img,zombie2_img,zombie3_img,zombie2,zombie3;
var bulletGroup,bullet_Img,bullet;


function preload(){
  
  shooterImg = loadImage("shooter_2.png")
  shooter_shooting = loadImage("shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

  zombie_Img=loadImage("zombie.png");
  zombie2_img=loadImage("zombie2.png");
  zombie3_img=loadImage("zombie 3.png");

  bullet_Img=loadImage("bullet.png");
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   zombie=createSprite(displayWidth-100,displayHeight-250)
   zombie.addImage(zombie_Img)
   zombie.scale=0.2
   zombie.velocityX=-4.5


   zombie2=createSprite(displayWidth-150,displayHeight-450)
   zombie2.addImage(zombie2_img)
   zombie2.scale=0.4
   zombie2.velocityX=-3.5

   zombie3=createSprite(displayWidth-250,displayHeight-350)
   zombie3.addImage(zombie3_img)
   zombie3.scale=0.8
   zombie3.velocityX=-2

 
   

}

function draw() {
  background(0); 






  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 createBullet();
  player.addImage(shooter_shooting);
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}
function createBullet(){
var bullet=createSprite(player.x,player.y,10,5);
bullet.addImage(bullet_Img);
velocityX=2;
bullet.lifetime=150;
bullet.scale=0.1;
//bulletGroup.add(bullet);
}
