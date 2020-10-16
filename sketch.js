
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var ground

var survivalTime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600)

 monkey = createSprite(60,400);
  monkey.addAnimation("Monkey running",monkey_running)
    monkey.scale = 0.22;
monkey.debug=false

  ground = createSprite(300,470,900,10)
    ground.x = ground.width /2;

FoodGroup = new Group();
  obstacleGroup= new Group();
}


 
function draw() {
 
background(200)
   stroke("white");
  textSize(20);
  fill("white");
  text("Score"+score,500,50) 
  
  stroke("black")
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50 )
  
  console.log(survivalTime)
  
  if(keyDown("space")&& monkey.y >= 395) {
        monkey.velocityY = -18.5;
    
    }
    
    //add gravity
   monkey.velocityY = monkey.velocityY + 0.8
        

  monkey.collide(ground)
  
  ground.velcityX=-40
   
 fruit();
  obstacles();
drawSprites();

}

function fruit(){
 
  if (frameCount % 80 === 0) {
  banana=createSprite(600,300,40,40)
  banana.addImage("banana",bananaImage)
  banana.scale=0.15
  banana.y = Math.round(random(120,250));
    banana.velocityX=-7
     //assign lifetime to the variable
    banana.lifetime = 200
    
    FoodGroup.add(banana);
}

}



function obstacles() {
if (frameCount % 300 === 0) {
   obstacle = createSprite(600,420,50,50)
   obstacle.addImage(obstacleImage) 
    obstacle.scale=0.33
  obstacle.velocityX=-9
  obstacle.lifetime=150
  
}
  



}


