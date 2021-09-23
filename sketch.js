var bgImg;
var tree, ladder1, ladder2, trap, b1, b2, b3, b4
var enemy

function preload(){
    bgImg = loadImage("whjrbg.jpg");
    enemy = loadImage("enemy.png");
     
}

function setup(){
    createCanvas(displayWidth, displayHeight-133);
    tree = createSprite(1000,460,10,20);
    tree.visible = false;
     
    b1 = createSprite(255,141,160,50);
    b1.visible = false;

    b2 = createSprite(545,200,160,50);
    b2.visible = false;

    b3 = createSprite(840,140,160,50);
    b3.visible = false;

    b4 = createSprite(525,370,110,50);
    b4.visible = false;

    ladder1 = createSprite(332,380,55,150);
    ladder1.visible = false;

    ladder2 = createSprite(810,380,55,150);
    ladder2.visible = false;

}   

function draw(){
    background(bgImg);
    fill("black");
    text(mouseX+","+mouseY,mouseX, mouseY);
    drawSprites();
}