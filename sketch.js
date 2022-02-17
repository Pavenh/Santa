 var backgroundImg, santa, santaImg, boy

function preload(){
backgroundImg = loadImage("snow2.jpg")
santaImg = loadImage("SantaR.png")





}








function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  santa = createSprite(700, 200, 190, 170)
santa.addImage(santaImg)
santa.scale = 0.5
santa.velocityX = -4





}

function draw() {
 
 
 
 
  background(backgroundImg);  
  drawSprites();






}