
function setup() {
    createCanvas(windowWidth, windowHeight)
    rectMode(CENTER).noFill().frameRate(30);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(200)

    stroke(0)
    strokeWeight(4)

    fill(255)
    ellipse(windowWidth/2, windowHeight/2, 80, 80)
}