let cars = [];  // an array for the objects

function setup() {
  createCanvas(500, 500);

// spawn the objects
  for (let i = 0; i < 40; i++) {
    cars.push(new Car());
  }

}

function draw() {
  background('white');

  // iterate through the objects
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].update();


  }

}

// this is the Car Class!
class Car {
  constructor() {
    // attributes
    this.pos = createVector(width / 2, height / 2);  // where it starts
    this.vel = createVector(random(-3, 3), random(-3, 3));  // direction
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(255);
    this.size = random(24, 120) ;
  }

  // methods

  display() {  // this displays the object
    fill(this.r, this.g, this.b, this.a) ;
//    ellipse(this.pos.x, this.pos.y, 30, 30);
  textSize(this.size) ;
   text("FESTIVAL", this.pos.x, this.pos.y);
   // image(img1, this.pos.x, this.pos.y, 100, 100) ;
  }

  update() {  // this moves the object
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0 ;
    if (this.pos.x < 0) this.pos.x = width ;
    if (this.pos.y > height) this.pos.y = 0 ;
    if (this.pos.y < 0) this.pos.y = height ;
  }

}
