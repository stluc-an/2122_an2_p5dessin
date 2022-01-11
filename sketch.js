function setup() {
  // put setup code here
    createCanvas(400,400);
    colorMode(HSB);
    strokeWeight(5);
    noStroke();
}

function draw() {
    fill(0,0,255,0.04);
    rect(0,0,width,height);
    
    fill(0,0,0);
    ellipse(30*sin(frameCount/10.0)+mouseX,30*cos(frameCount/10.0)+mouseY,20,20);
}