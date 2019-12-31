//RAD = radius h =height w = width

var x = 200;
var y = 200;
var head_rad = 50;
var body_h = 150;



function preload() {
//Literally not needed I don't know why I created this.
}


function setup() {
    createCanvas(400,800);
}


function draw() {
    background("white");
    fill("black");
    //Body
    rect(x,y,50,body_h);
    fill("white");
    text("MP-115",x+5,y+20)
    fill("black");
    //head
    ellipse(x+25,y-40,head_rad,head_rad);
    fill("white");
    rect(x+35,y-50,10,5);
    rect(x+10,y-50,10,5);
    fill("black");
    //neck
    line(x+25,y,x+25,y-13);
    //left leg
    line(x,y+150,x-15,y+175);
    //right leg
    line(x+50,y+150,x+65,y+175);
    //feet
    rect(x-40,y+175,25,15);
    rect(x+65,y+175,25,15);
    //hands
    if (mouseIsPressed) {
        line(x+50,y,x+75,y+55);
        text("Hands DOWN!",150,100);
        line(x,y,x-25,y+55);
    }
    else {
        line(x+50,y,x+75,y-55);
        text("Hands UP!",150,100);
        line(x,y,x-25,y-55);
    }

    
    x = World.mouseX
    drawSprites();
}