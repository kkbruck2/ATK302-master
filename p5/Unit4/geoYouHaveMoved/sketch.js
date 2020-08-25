var num;
var distance;

var locationData;

function preload() {
  locationData = getCurrentPosition();
}

function setup() {
  num = 0;
  intervalCurrentPosition(positionPing, 5000);
  createCanvas(displayWidth, displayHeight);
}

function draw() {


}

function positionPing(position) {
  textSize(24);
  num++;
  background(255);
  text("lat: " + position.latitude, 10, 40);
  text("long: " + position.longitude, 10, 90);
  text("number of updates " + num, 10, 140);

  distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi');
  text("You have moved " + distance, 10, 190);



}
