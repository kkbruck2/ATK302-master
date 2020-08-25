var cars = [];
var frogPos;
var myState = -1;
var timer = 0;
var yoda, yodaRight, yodaLeft;
var bird;
var birds = [];
let song1, song2, song3;
let maxBirds = 10 ;

function preload() {
  song1 = loadSound("assets/donkey.mp3");
  song2 = loadSound("assets/skate.mp3");
  song3 = loadSound("assets/thrill.mp3");
  song1.loop();
  song2.loop();
  song3.loop();
  song1.pause();
  song2.pause();
  song3.pause();
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  birds[0] = loadImage("assets/bird1.png");
  birds[1] = loadImage("assets/bird2.png");
  birds[2] = loadImage("assets/bird3.png");
  yodaRight = loadImage("assets/yodaRight.gif");
  yodaLeft = loadImage("assets/yodaLeft.gif");
  yoda = yodaRight;



  bird = loadImage("assets/bird1.png");

  // spawn cars!!!
  for (var i = 0; i < maxBirds; i++) {
    cars.push(new Car());
  }



  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {

  switch (myState) {

    case -1:
      song1.play();
      myState = 0;
      break;

    case 0: // splash screen
      // welcome to my game, click to start
      background('red');
      fill('white');
      text("welcome to my game! click!", 100, 100);
      text("YAY", 100, 200);
      break;

    case 1: // the game state

      game();
      timer++;
      if (timer > 1000) {
        myState = 3; // going to the lose state
        stopTheSongs();
        song3.play();
        timer = 0;
      }
      break;

    case 2: // the win state
      background('green');
      fill('white');
      text("YOU WON!!!", 100, 100);
      break;

    case 3: // the lose state
      background('blue');
      fill('white');
      text("You LOST!", 100, 100);
      break;
  }
}

function stopTheSongs() {
  song1.pause();
  song2.pause();
  song3.pause();
}

function mouseReleased() {
  switch (myState) {
    case 0: // click to go to the game state
      stopTheSongs();
      song2.play();
      myState = 1;
      break;

    case 2: // the win state!
      stopTheSongs();
      resetTheGame();
      myState = -1;
      break;

    case 3: // the lose myState
      stopTheSongs();
      resetTheGame();
      myState = -1;
      break;

  }
}

// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = floor(random(birds.length));
  this.timer = 0;
  this.maxTimer = random(10, 30); // use this for timer code


  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    //    rect(this.pos.x, this.pos.y, 100, 50);
    //    ellipse(this.pos.x - 45, this.pos.y + 25, 50, 50);
    //    ellipse(this.pos.x + 45, this.pos.y + 25, 50, 50);
    //  image(bird, this.pos.x, this.pos.y, 100, 100);
    image(birds[this.birdNum], this.pos.x, this.pos.y, 100, 100);

    this.timer = this.timer + 1;

    if (this.timer > this.maxTimer) {

      this.birdNum = this.birdNum + 1;
      if (this.birdNum > birds.length - 1) this.birdNum = 0;
      this.timer = 0;
    }



  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}


function keyPressed() {
  if (keyCode === LEFT_ARROW) yoda = yodaLeft;
  if (keyCode === RIGHT_ARROW) yoda = yodaRight;

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function resetTheGame() {
  cars = [];
  // spawn cars!!!
  for (var i = 0; i < maxBirds; i++) {
    cars.push(new Car());
  }
  timer = 0;

}


function game() {
  background(100);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    // make sure car isn't really close to frog!!!!
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1); // take the car out!!
      // if the car's type is a killer type, myState = 3

    }
  }

  if (cars.length == 0) {
    myState = 2; // the win state!!!
    stopTheSongs();
    song3.play();
  }

  // draw the frog
  fill('green');
  //  ellipse(frogPos.x, frogPos.y, 60, 60);
  image(yoda, frogPos.x, frogPos.y, 80, 80);
  checkForKeys();
}
