var car,wall
var weight,speed

function setup() {
  createCanvas(400,400);
  wall = createSprite(1500, 200, 60, height/2);
  car = createSprite(50,200,50,50);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  
  background(255,255,255);  
  
  wall.shapecolour(80,80,80);

  car.velocityX=speed;
  car = weight;

  if (wall.x-car.x < (car.width+wall.width/2)){
  car.velocityX=0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if (deformation>180){
  car.shapeColor=color(255,0,0);
  }
  if (deformation>100 && deformation<180){
  car.shapeColor=color(230,230,0);
  }
  if (deformation>180){
  car.shapeColor=color(0,255,0);
  }
  }

  drawSprites();
  }