var balls = [];

var ballCount = 100

var colour = 1

var bgRed = 0
var bgGreen = 100
var bgBlue = 200

function setup() {
  createCanvas(400, 400)

  for (var i = 0; i < ballCount; i = i + 1) {
    createBall();
  }

  console.log(balls)
}

function draw() {
  background(red,green,blue)
  bgRed ++
  bgGreen++
  bgBlue++

  backColour()

  for (var i = 0; i < balls.length; i = i + 1) {
    var ball = balls[i]
    ball.xs += ball.speedX
    ball.ys += ball.speedY

    if (ball.xs < 0 || ball.xs > width) {
      ball.speedX = ball.speedX * -1
    }
    if (ball.ys < 0 || ball.ys > height) {
      ball.speedY = ball.speedY * -1
    }
    changeColour()
    ellipse(ball.xs - 5, ball.ys - 5, 20, 20)
  }
}

function mousePressed(){
  colour ++
}

function changeColour(){
  if (colour == 1){
    fill(255,0,0)
  }
  else if (colour == 2){
    fill(0,255,0)
  }
  else if (colour == 3){
    fill(0,0,255)
  }
  if (colour > 3){
    colour = 1
  }
}

function backColour(){
  if (bgRed > 255){
    bgRed = 0
  }
  if (bgGreen > 255){
    bgGreen = 0
  }
  if (bgBlue > 255){
    bgBlue = 0
  }
}

function createBall(){
  var ball = {}
  ball.xs = Math.random() * width
  ball.ys = Math.random() * height
  ball.speedX = Math.random() * 3
  ball.speedY = Math.random() * 3
  balls.push(ball);
}
