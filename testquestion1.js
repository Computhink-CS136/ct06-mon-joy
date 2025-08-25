function setup() {
    createCanvas(600, 400);
    background(0)
}
function draw() {
    background(0);
    fill("black");
    stroke("red");
    strokeWeight(10);
    circle(100, 200, 100);
    triangle(220, 250, 340, 250, 280, 150);
    rect(450, 150, 100, 100);
}