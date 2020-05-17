const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var sun,sun_img;
var mercury,mercury_img,venus,venus_img,earth,earth_img;
var angle=0;
var anglespeed=0.2;
var rect1,rect2;
function preload(){
sun_img=loadImage("sun.png");
mercury_img=loadImage("mercury.png");
venus_img=loadImage("venus-png-3.png");
earth_img=loadImage("earth.png");
}

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
    world = engine.world;
  var options={
    isStatic:true
  }
  sun = createSprite(-150,-400,50,50,options); 
  sun.addImage("sun",sun_img);
  sun.setCollider("circle",0,0,100)
  sun.debug=true;
  

  mercury = createSprite(200, -100);
  mercury.addImage("mercury",mercury_img);
  mercury.setCollider("circle",0,0,170)
  mercury.debug=true;
  mercury.scale=0.2;
 
  venus= createSprite(100, 200);
  venus.addImage("venus",venus_img);
  venus.setCollider("circle",0,0,300)
  venus.debug=true;
  venus.scale=0.2;

  earth= createSprite(200, 200 );
  earth.addImage("earth",earth_img);
  earth.setCollider("circle",0,0,350)
  earth.debug=true;
  earth.scale=0.15;
  //rect2=rect(100,100,50,50);
  //rect2.shapeColor="green";
  //rect1=rect(400,400,50,50);
  //rect1.shapeColor="green";
}

function draw() {
  background(0);
  Engine.update(engine);
    //rect2.x=World.mouseX;
    //rect2.y=World.mouseY;
    //if(isTouching(rect2,rect1)){
      //rect2.shapeColor="red";
    //rect1.shapeColor="red";
    
    //}
    //else{
     // rect2.shapeColor="green";
    //rect1.shapeColor="green";
    //}

    //angleMode(DEGREES);
    translate(width / 2, height / 2);
    rotate(angle);

   /* if (collide(sun,mercury)) {
        destroy(mercury);
    }
  */





    angle = angle + anglespeed;
    if (frameCount % 1 === 0 && frameCount<600) {
        sun.scale = sun.scale + 0.01;
    }
    console.log(mercury.visible);
    if (sun.collide(mercury)) {
      mercury.destroy();
  }
  if (sun.collide(earth)) {
    earth.destroy();
}
if (sun.collide(venus)) {
  venus.destroy();
}
    drawSprites();
    console.log(frameCount);

}
function destroy(body){
  body.visible=false;
}
/*function isTouching(object1,object2){
  if(object1.x-object2.x < object1.width/2 + object2.width/2 &&
    object2.x-object1.x<object1.width/2+object2.width/2 &&
    object1.y-object2.y < object1.height/2 + object2.height/2 && 
    object2.y-object1.y>object1.height/2+object2.height/2){
    return true;
  }
  else{
    return false;
  }
}*/
function isTouching(object1,object2){
 
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.height/2 + object1.height/2 
    && object2.y - object1.y < object2.height/2 + object1.height/2
    ) {
  return true;
  object2.visible=false;
}

 else{
     return false;
     object2.visible=true;
 }

}