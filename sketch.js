const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
 ground = new Ground()
    box1 = new Box(200,300,50,50);
    box2 = new Box(230,80,40,40);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.Display();
    box1.display();
    box2.display();
}