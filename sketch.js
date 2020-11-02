var player,player_running;
var back,backImage;
var obstacle_img,Obstaclegroup,obstacles;
var ground;
var bananaimg,bananagroup,banana;
var score;
function preload() {
player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
                             
  backImage=loadImage("jungle.png");

 bananaimg=loadImage("banana.png");

  obstacle_img=loadImage("stone.png");

  

  

  

}


function setup() {
  createCanvas(1000, 2000);
  player =createSprite(80,180,20,50);
  player.addAnimation("running",player_running);
  player.scale = 0.5;

        back= createSprite(0,0,20,30);
    back.addImage("jungle",backImage);
    back.scale=2;
    back.velocityX=-2;
    back.x=back.width/2;

   score=0;

 ground = createSprite(400,300,800,10);
  ground.visible = false;
  ground.velocityX=-4;
  ground.x=ground.width/2;


  Obstaclesgroup=new Group();
  bananagroup=new Group();

  

}

function draw() {
  //background(180);

  stroke("white");
  textSize=20;
  fill("white");
   text("Score: "+ score, 500,50);

  if (back.x < 0){
    back.x = back.width/2;
  }

  player.collide(ground);

  spawnfood();
  Obstacles();

  

  switch (score){
      case 10: player.scale=0.12;
            break;
      case 20: player.scale=0.14;
      break;
      case 30: player.scale=0.16;
      break;
      case 40: player.scale=0.18;
      break;
      

      default:break;

  }

drawSprites();
}


  function spawnfood() {
    if (frameCount%80===0) {
    var banana=createSprite(400,200,20,10);
    banana.addImage("food",bananaimg);
    bananagroup.add(banana);
      banana.scale=0.037;
      banana.lifetime=200;
      banana.x=back.x;
      if (player.isTouching(bananagroup)){
          bananagroup.destroyEach();
      score=score+1;
    }
    
      
      

    }

  }
  function Obstacles(){

   var  Obstacles=createSprite(60,180,20,50);
  Obstacles.addAnimation("obstacle",obstacle_img);
    Obstacles.scale=0.2;
    Obstaclesgroup.add(Obstacles);
    if (Obstaclesgroup.isTouching(player)){
      player.scale=0.2;
    }
    
  }

  


