var a, b, x, y, t, sigma, i;

function setup() {
createCanvas(400, 400);
a = 4;
b = 3;
x = 0;
y = 0;
t = 0;
sigma = 0; 
}

function drawCurve(t) {
x = 100 * sin(a * (t + sigma));
y = 100 * sin(b * t );
vertex(x, y);
}

function draw() {
background(220);
sigma = map(mouseX, 0, width, 0, PI);
//sigma += 0.01;//mouseX;

translate(200, 200);
stroke(2,0,sigma*100)
noFill();
beginShape();
for(i=0;i<1000;i++){
  drawCurve(t);
   t += 0.01
}
endShape();
}