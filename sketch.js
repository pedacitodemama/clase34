const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
 
    
}

function draw(){
  
    background('skyblue');
    Engine.update(engine);
   
   
 
}

