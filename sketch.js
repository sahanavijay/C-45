//Create variable for ground,lander,landerimage & bgimage
var ground, lander;
var landerimage,bgimage;
//Initialize variables for vx,vy & g
var vx=0;
var vy=0;
var g=0.05;

function preload()
{
  //Load landerimg & bgimg
 landerimage = loadImage("normal.png");
 bgimage = loadImage("bg.png");
}

function setup() 
{
  //Write instruction to create canvas
  createCanvas(1000,700)

  //create sprite for the lander
  lander = createSprite(100,50,30,30);
  //Add image for the lander
  lander.addImage(landerimage);
  lander.scale=0.1;
  
}

function draw() 
{
  background(51);
  //add background image
  image(bgimage,0,0,0,0);

  //write text instruction to display vertical velocity
  fill("white");
  text("Vertical Velocity : "+round(vy),800,50);

  //write code to add gravity to the lander
  vy +=g;
  lander.position.y+=vy
 

  //write code to display the sprites
  drawSprites();
}


