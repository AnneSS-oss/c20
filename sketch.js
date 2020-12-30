var movingdirect;
var fixeddirect;

function setup() {
  createCanvas(800,400);
  movingdirect = createSprite(400, 200, 50, 50);
  movingdirect.shapeColor = "red";
  fixeddirect = createSprite(400,300,50,50);
  fixeddirect.shapeColor = "red";
}

function draw() {
  background(255,255,255);  

  movingdirect.x = mouseX
  movingdirect.y = mouseY

  if (movingdirect.x-fixeddirect.x<movingdirect.width/2+fixeddirect.width/2 && 
    fixeddirect.x-movingdirect.x<fixeddirect.width/2+movingdirect.width/2 && 
    movingdirect.y-fixeddirect.y<movingdirect.height/2+fixeddirect.height/2 &&
    fixeddirect.y-movingdirect.y<fixeddirect.height/2+movingdirect.height/2
    ) {
      movingdirect.shapeColor = "purple";
      fixeddirect.shapeColor = "purple";
    }
    else {
      movingdirect.shapeColor = "red";
      fixeddirect.shapeColor = "red";
    }

  drawSprites();
}