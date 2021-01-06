var canvas;
var music;
var bl1,bl2,bl3,bl4;
var box;
var surface;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 bl1 = createSprite(50,590,160,10);
 bl1.shapeColor = "blue";

 bl2 = createSprite(250,590,170,10);
 bl2.shapeColor = "green";

 bl3 = createSprite(450,590,170,10);
 bl3.shapeColor = "red";

 bl4 = createSprite(650,590,170,10);
 bl4.shapeColor = "rgb(64,224,208)";


    //create box sprite and give velocity
box =  createSprite(random(50,650),10,20,20);
box.shapeColor = "white";
box.velocityY = 6;

surface = createSprite(300,595,900,10);
surface.visible = false

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  box.bounceOff(surface);
  
    //add condition to check if box touching surface and make it box
    if(box.isTouching(bl1)){
        box.shapeColor = "blue";
        box.collide(bl1);
        music.play();
    }
    if(box.isTouching(bl2)){
        box.shapeColor = "green";
        box.collide(bl2);
        music.play();
    }
    if(box.isTouching(bl3)){
        box.shapeColor = "red";
        box.collide(bl3);
        music.play();
    }
    if(box.isTouching(bl4)){
        box.shapeColor = "rgb(64,224,208)";
        box.collide(bl4);
        music.play();
    }
    drawSprites();
}
