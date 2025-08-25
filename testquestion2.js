

function setup() {
    createCanvas(600, 600);
    background(220)
}
function draw() {
    background(220);
let xpos = 50
let ypos = 50
let color = 1
for(let i = 0; i < 11; i++){
    fill(color)
    color = color + 25
    circle(xpos, ypos, 50);
    xpos = xpos + 50;
    ypos = ypos + 50;
}
}