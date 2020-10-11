
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  obstacleGroup = new Group();
}


function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  obstacleGroup = new Group();
  foodGroup = new Group();
}


function draw() {
  background("white");
  monkey.collide(ground);
  if(ground.x>200){
    ground.x = ground.width/2;
  }
  
  if(keyWentDown("space")){
    monkey.velocityY = monkey.velocityY-15;
  }
  monkey.velocityY = monkey.velocityY + 0.6;
  obstacles();
  food();
  drawSprites(); 
  
}

function obstacles(){
  if(frameCount % 120===0){
    obstacle = createSprite(500,320);
    obstacle.addImage (obstacleImage);
    obstacle.scale = 0.18;
    obstacle.velocityX = -4;
    obstacle.debug = true;
    obstacle.setCollider("circle",2,2);
    obstacleGroup.add(obstacle);
  }
}

function food(){
  if(frameCount % 120 ===0){
    banana = createSprite(500, 200);
    banana.addImage(bananaImage);
    banana.scale = 0.13;
    banana.velocityX = -4;
    foodGroup.add(banana);
  }
}






