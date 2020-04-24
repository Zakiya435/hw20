var wall,car1;
var deformation = 0;
function setup() 
{
  createCanvas(1600,400);
  wall = createSprite(1500,200,60,400);
  wall.shapeColor(80,80,80);
  var speed1 = randomNumber(30,95);
  var weight1 = randomNumber(400,1500);
  car1 = new Car(speed1,weight1);
  
}

function draw() 
{
  background(0,0,0);
  car1.display();
  if(keyDown("space"))
  {
    car.velocityX = speed1;
  }
  if((car.x - wall.x < car.width/2 + wall.width/2)&&
  (wall.x - car.x < wall.width/2 + car.width/2))
   {
   car.velocityX = 0;
   deformation = (0.5 * weight1 * speed1 * speed1)/22500;
   if(deformation<100)
   {
     car1.shapeColor(0,255,0);
   }
   else if((deformation>100)&&(deformation<=180))
   {
     car1.shapeColor(230,230,0);
   }
   else if(deformation>180)
   {
     car1.shapeColor(255,0,0);
   }
   }
  
    drawSprites();
}