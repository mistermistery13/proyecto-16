var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var select_balloon=1
var puntos =0;
var Garrow,Gglobos,Gglobos_red,Gglobos_blue,Gglobos_green,Gglobos_pink;
var gameState = "jugando";
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  Gglobos = createGroup();
  Gglobos_red = createGroup ();
  Gglobos_blue = createGroup ();
  Gglobos_green = createGroup ();
  Gglobos_pink = createGroup ();
  Garrow = createGroup ();
  //crear fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //crear arco para disparar las flechas
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;  
}

function draw() {
 background("white");;
if (gameState === "jugando"){
  // mover el suelo
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover arco
  bow.y = World.mouseY
  
   //liberar las flechas al presionar la barra espaciadora 
  if (keyDown("space")) {
    createArrow();
  }
   
  select_balloon = Math.round(random(1,4));
  
   if (World.frameCount % 100 == 0) {



             switch(select_balloon ){
             case 1: redBalloon();
             break;
             case 2:blueBalloon();
             break;
             case 3:pinkBalloon();
             break;
             case 4:greenBalloon();
             break;
             default:break;
             }
            }
            if (puntos == 10){
              gameState = 0;
            }
            if (Gglobos_red.isTouching (Garrow)){
            Gglobos_red.destroyEach();
            puntos = puntos + 1;
            }
            if (Gglobos_blue.isTouching (Garrow)){
              Gglobos_blue.destroyEach();
              puntos = puntos + 1;
              }
            if (Gglobos_green.isTouching (Garrow)){
            Gglobos_green.destroyEach();
            puntos = puntos + 1;
            }
            if (Gglobos_pink.isTouching (Garrow)){
              Gglobos_pink.destroyEach();
              puntos = puntos + 1;
              }
          }
          if (puntos === 10){
            gameState = "final";
          }
if (gameState === "final"){
  bow.destroy();
  scene.velocityX = 0;
}
  drawSprites();
  text ("PUNTOS = " + puntos,300,50)
}


//Crear flechas para el arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  Garrow.add (arrow);
  arrow.scale = 0.3;
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  Gglobos_red.add (red);
  Gglobos.add (red);
  red.scale = 0.1;
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  Gglobos_blue.add (blue);
  Gglobos.add (blue);
  blue.scale = 0.1;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  Gglobos_green.add (green);
  Gglobos.add (green);
  green.scale = 0.1;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  Gglobos_pink.add (pink);
  Gglobos.add (pink);
  pink.scale = 1
}
