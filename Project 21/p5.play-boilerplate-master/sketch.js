var wall,thichness;
var bullet,speed,weight;

function setup() {
  createCanvas(1370,500);
  thichness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,250,60,30);
  bullet.shapeColor = "white";
  wall = createSprite(1150,250,thichness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);  
  
  bullet.velocityX = speed;
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thichness * thichness * thichness);
    
    if(damage > 10){
      wall.shapeColor = color(255,0,0);
      textSize(30);
      fill("white");
      textFont("Time New Roman");
      text("The Material used to make the wall is rejected",350,250);
      textSize(20);
      fill("white");
      textFont("Time New Roman");
      text("                           32",1180,400);
      text("                         223",1180,430);
      text("                             40",1180,460);
      text("                12.43",1180,490);
    }

    if(damage < 10){
      wall.shapeColor = color(0,255,0);
      textSize(30);
      fill("white");
      textFont("Time New Roman");
      text("The Material used to make the wall is accepted",350,250);
      textSize(20);
      fill("white");
      textFont("Time New Roman");
      text("                           32",1180,400);
      text("                         223",1180,430);
      text("                             70",1180,460);
      text("                3.68",1180,490);
    }
  }

  textSize(38);
  fill("white");
  textFont("Time New Roman");
  text("Wall Test",550,70);
  textSize(20);
  text("Bullet Weight = ",1180,400);
  text("Bullet Speed = ",1180,430);
  text("Wall Thickness = ",1180,460);
  text("Damge = ",1180,490);

  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
} 