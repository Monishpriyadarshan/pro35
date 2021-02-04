var ballon,balon;
var backgroundImg,
var database;
var height;
var form;
var game;
var player;

function preload(){
  balon = loadAnimation("ballon-02.png,ballon-03.png,ballon-03.png");
  backgroundImg = loadImage("ballon-01.png")
}

function setup(){
    database = firebase.database()
    createCanvas(500,500);
    game = new Game();
    game.getstate();
    game.start();
}

function draw(){
    background(backgroundImg);
    ballon.addAnimation("balon");

    if(KeyDown(LEFT_ARROW)){
      ballon.x = ballon.x-10 
    }

    if(KeyDown(RIGHT_ARROW)){
        ballon.x = ballon.x+10 
      }

      if(KeyDown(UP_ARROW)){
        ballon.y = ballon.y-10 
      }

      if(KeyDown(DOWN_ARROW)){
        ballon.x = ballon.x-10 
      }
    drawSprites();
}

function changePosition(x,y){
    ballon.x = ballon.x + x;
    ballon.y = ballon.y + y;
}

function readheight(data){
height = data.val();
ballon.x = position.x;
ballon.y = position.y;
}

function writePosition(x,y){
    database.ref('ballon/position').set({
        'x':position.x + x,
        'y':position.y + y
    })
}
