const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var bg,bgImg,bgMusic;
var player;
var invGround;

function preload(){
    bgMusic = loadSound("bg-music.mp3")
}

function setup(){
    createCanvas(1200,500)

    engine = Engine.create();
    world = engine.world;

    bg = new Bg(0,0,1200,500)

    player = new Player(600,250,100,100)

    invGround = createSprite(600,450,1250,20)

    bgMusic.loop();

    Engine.run(engine)

}

function draw(){
    Engine.update(engine)

    bg.display()
    player.display()
    drawSprites()

    invGround.visible = false

    if(keyDown("LEFT_ARROW")){
       Matter.Body.setPosition(player.body,{x:player.body.position.x-5,y:player.body.position.y})
      
    }

    if(keyDown("RIGHT_ARROW")){
        Matter.Body.setPosition(player.body,{x:player.body.position.x+5,y:player.body.position.y})
        
    }

    camera.position.x = player.body.position.x;
    camera.position.y = height/2
    
}