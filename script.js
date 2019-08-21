const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;// to create phy eng
var ground;
var ball;

function setup()
{
var canvas= createCanvas(400,400);
engine=Engine.create();
world=engine.world;

var ground_options={

  isStatic:true
}

ground=Bodies.rectangle(200,390,200,50,ground_options);
World.add(world,ground);


var ball_options={
  restitution: 6.0
}

ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ball);
console.log(ground);
/*console.log(object.type);
console.log(object.position.x);
console.log(object.position.y);*/
}

function draw(){

background(0);
Engine.update(engine);

rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,10);
ellipse(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
drawSprites();
}
