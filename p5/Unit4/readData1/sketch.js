var cars = [];

function setup() {

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

  // load and parse a csv file and call "gotData" when you finish
  Papa.parse('assets/normal.csv', {download: true, header: true, skipEmptyLines: true, complete: gotData})


}





function gotData(r) {

  console.log(r.data);

// iterate through all the lines in the file and create a new Car for each!
  for (let i = 0; i < r.data.length; i++) {
    cars.push(new Car(r.data[i]));
  }


}


function draw() {
  background('blue');
  textSize(48) ;
  text("Your Favorite Dumplings!", width/2, 200) ;

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
  }

}

function mouseReleased() {
  cars = [] ;
  Papa.parse('assets/normal.csv', {download: true, header: true, skipEmptyLines: true, complete: gotData})

}

// my Car class
class Car {
  constructor(data) {
  this.pos = createVector(random(width), random(height));
  this.name = data["name"] ;
  this.dumpling = data["favorite dumpling"];
  this.vel = random(2, 4) ;
}

  display() {
    // put an ellipse here
    if (this.dumpling == "sweet") {
      fill("orange");
    } else {
      fill("brown") ;
    }

    ellipse(this.pos.x, this.pos.y, 90, 90);
    fill('white');
    textSize(16) ;
    text(this.name + "\n" + this.dumpling, this.pos.x, this.pos.y);

    // move it
    this.pos.x += this.vel ;
    if (this.pos.x > width) this.pos.x = 0 ;
  }


}
