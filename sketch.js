var angle = 0;
var centerX;
var centerY;
var radius = 50;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    centerX = width / 2;
    centerY = height / 2;
}

function draw() {
    background(0);
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 40, 40);
    fill(0, 255, 0);
    ellipse(radius * cos(angle) + centerX, radius * sin(angle) + centerY, 40, 40);
    angle++;
}