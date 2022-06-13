//Create namespace for Engine
const Engine = Matter.Engine;
//Create namespace for World
const World = Matter.World;
//Create namespace for Bodies
const Bodies = Matter.Bodies;
//Create namespace for Body
const Body = Matter.Body;

var world, engine;

var b1;
var rotator;
var angle = 60;

function setup() {
  createCanvas(400,400);
  
  //create the engine
  engine = Engine.create();
  //Add world to the engine
  world = engine.world;

   var ball_options = {
    restitution: 0.8,
    frictionAir:0.01,
  }
   
  var ground_options = {
     isStatic: true
  };

  b1 = createImg("up.png");
  b1.position(360,20);
  b1.size(30,30);
  b1.mouseClicked(thrust);

  rotator = Bodies.rectangle(100, 200, 10, 10, ground_options);
  World.add(world,rotator);
  
  //create a ground
  ground = Bodies.rectangle(0, 400, 1000, 100, ground_options);
  //add to world
  World.add(world,ground);

  ball = Bodies.circle(100,20,20,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  fill("green");
  Matter.Body.rotate(rotator, angle);
  push();
  translate(rotator.position.x,rotator.position.y);
  rotate(angle);
  rect(0, 0, 100,20);
  pop();
  angle = angle + 0.1;

  fill("red");
  ellipse(ball.position.x,ball.position.y,20);

  //write a rectangle function to display ground.
  fill("blue");
  rect(ground.position.x,ground.position.y, 1000, 100);
}

function thrust()
{
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0,y:-0.04})
}

