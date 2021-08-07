const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var plataform;
var constrainedLog;
var slingshot;

function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    constrainedLog = new Log(230,180,80,PI/2);

    plataform = new Ground(150,305,300,170);
    ground = new Ground(600,height,1200,20);
//nivel 1
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810,350);
    log1 = new Log(830,260,300, PI/2);
//nivel 2
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    log3 =  new Log(810,180,300, PI/2);
//nivel 3
box5 = new Box(700,170,70,70);
box6 = new Box(920,170,70,70);
log4 =  new Log(810,110,300, PI/2);
//nivel 4
//box7 = new Box(700,100,70,70);
//box8 = new Box(920,100,70,70);
//log5 =  new Log(810,40,300, PI/2);
    //box5 = new Box(810,160,70,70);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    pig3 = new Pig(150, 220);
    pig4= new Pig(200, 220);
    pig5= new Pig(250, 220);
    pig6= new Pig(300, 220);
    pig7= new Pig(350, 220);
     pig8= new Pig(400, 240);
    pig9= new Pig(450, 220);
    pig10= new Pig(500, 220);
    pig11= new Pig(550, 320);
    pig12= new Pig(600, 220);
    pig13= new Pig(650, 220);
    pig14= new Pig(1100, 220);
    pig15= new Pig(1000, 220);

    bird = new Bird(200,50);

    slingshot = new Slingshot(bird.body,{x:200,y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    plataform.display();
    //nivel 1
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
//nivel dosssssssssssss
    box3.display();
    box4.display();
    pig3.display();
    log3.display();
//nivel tres
box5.display();
box6.display();
log4.display();
//nivel 4
//box7.display();
//box8.display();
//log5.display();
//pigs
    pig4.display();
    pig5.display();
    pig6.display();
    pig7.display();
    pig8.display();
    pig9.display();
    pig10.display();
    pig11.display();
    pig12.display();
    pig13.display();
    pig14.display();
    pig15.display();
    //constrainedLog.display();
    bird.display();
    slingshot.display();
}

function mouseDragged(){

    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});

}

function mouseReleassed(){

    slingshot.fly();

}