var car , wall , speed , weight;


function setup() {
  createCanvas(1500,400);

  speed = random(55,90)
  weight = random(400,1500)

  car = createSprite(50,200,50,50)

  car.velocityX  = speed;

  wall = createSprite(1200 , 200 , 60 , height/2)

}

function draw() {
  background(0);
  
  if(wall.x - car.x < wall.width/2 + car.width/2)
  {
    car.velocityX = 0;
    var d = 0.5 * weight * speed * speed / 22509;
    if(d>180)
    {
      car.shapeColor = "green";
    }
    if(d < 180 && d > 100)
    {
      car.shapeColor = "yellow";
    }
    if(d < 100)
    {
      car.shapeColor = "red";
    }
   }
  
  drawSprites();
}