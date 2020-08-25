var myCar; // Declare object
var myCars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke() ;

  // Spawn an object
  // for (let i = 0; i < 100; i++) {
  //   myCars.push(new Car());
  // }
}

function draw() {
  background(100);
  myCars.push(new Car());

  // do some actions on the object
  for (let i = 0; i < myCars.length; i++) {
    myCars[i].move();
    myCars[i].display();
  }

}



// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(width / 2, height - 50);
    this.velocity = createVector(random(-1, 1), random(-5, -1));
    this.alp = random(200, 255) ;
  }

  // methods
  move() {
    this.pos.add(this.velocity);
    this.alp-=(random(5)) ;
  }

  display() {
    fill(255, this.alp) ;
    ellipse(this.pos.x, this.pos.y, 20);
  }

}
