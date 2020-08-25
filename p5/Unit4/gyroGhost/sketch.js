// Coded by Andy Bibler, Fall 2019 
var fence;
var locationData;
var num;
var distance;
var places = [];
var cpa;
var cob;
var cook;
var edwards;
var fell;
var felmley;
var oldUnion;
var williams;
var alpha, beta, gamma; // orientation data
var pstate1 = false;
var pstate2 = false;
var ghost = false;
var stories = [];
var alphaGhost, betaGhost;
var ghostNum;
var myState = 0;
var randomStory;
var song;
var context

function preload() {
  locationData = getCurrentPosition();
  cpa = loadImage('assets/C4PA.png');
  cob = loadImage('assets/COB.png');
  cook = loadImage('assets/Cook_Hall.png');
  edwards = loadImage('assets/Edwards.png');
  fell = loadImage('assets/Fell_Hall.png');
  felmley = loadImage('assets/Felmley_Hall.png');
  oldUnion = loadImage('assets/Old_Union.png');
  williams = loadImage('assets/Williams_Hall.png');
  song = loadSound('assets/3.mp3');


  song.loop();
  song.stop();




  // TURN "reggieImg;" into "reggieImg = [];" to create an array of different images
  //reggieImg = loadImage('assets/reggiePlaceholder.jpeg'); //these will change to images of pics in front of the buildings for welcome week
  //reggieImg[2] = loadImage('assets/reggiePlaceholder.jpeg');
}

function setup() {
  //fence = new geoFenceCircle(40.506229, -88.990537, 0.02); //sets geofence location to cva room 17
  createCanvas(displayWidth, displayHeight);
  num = 0;
  // intervalCurrentPosition(positionPing(locationData), 1000);
  // places.push(new Place(40.50622797365503, -88.99051350503431, "CVA 17", .02, reggieImg)); // new Place object, for CVA room 17
  // places.push(new Place(40.50715473783438, -88.99173550368103, "COB", .02, reggieImg)); // new Place object, for COB.... JUST SWITCHED TO NEW COORDINATES
  //
  // places.push(new Place(40.50863221414712, -88.99077591254148, "Old Union", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  // places.push(new Place(40.50840289459472, -88.9909118880512, "Williams Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  // places.push(new Place(40.50844449497366, -88.9911676488728, "Cent 4 Perf Arts", .02), reggieImg); // new Place object, for ISU bridge over College Ave
  // places.push(new Place(40.50864821960959, -88.99120123764614, "Fell Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  // places.push(new Place(40.50917235949953, -88.99177097641105, "Cook Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  // places.push(new Place(40.50947612369081, -88.99174125561485, "Edwards Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  // places.push(new Place(40.51014656358694, -88.9912748009074, "Felmley Hall", .02, reggieImg)); // new Place object, for ISU bridge over College Ave

//EDWARDS
  stories.push(new Story("Welcome to Edwards Hall! This beautiful building located on \nthe Northwest side of the campus is home to the School of \nNursing and the Charles L. Capen Auditorium. The auditorium \nwas named after Capen, who was a prominent lawyer \nwithin the Bloomington/Normal area. However, while this \nman was well respected, he has a dark past. Legend has \nit that Capen did not die peacefully with his wife and kids \nat his side, but rather a more sinister way. Capen was\n accused of stealing money from his children. While he was a \nvery successful man, he wasn’t perfect. His kids \ndidn’t take too kindly to this. His children murdered \nhim in his home in Bloomington. After his death, the \nauditorium was named after him and his contributions. \nHis children, still furious with his actions, decided to \npunish the university for naming the auditorium after \ntheir father. They dug up his body and stowed it away \nsomewhere within the building (the location is still unknown). \nPeople report hearing strange sounds throughout the \nbuilding and strange single room power outages.",  edwards))

//COOK
  stories.push(new Story("Cook hall is a one-of-a-kind building located on the west \nside of campus and houses the school of music. The \nbuilding used to be the former gymnasium in the school. \nHowever, students have been reporting strange occurrences \nin the building for years. Some rooms dipping in \ntemperature drastically in a short period of time, \nstrange noises, rooms being rearranged in mere seconds \nwhile students and staff leave the room. Something \nstrange is going on. Well, according to ISU lore, \na construction worker who was on the project when the \nbuilding was being created was accidentally buried \nbeneath the building’s foundation causing him to suffocate \nto death. His body has never been recovered and supposedly \nhaunts the building even to this day.", cook))

//FELL
  stories.push(new Story("Fell Hall. The  structure that houses the academic and \nadministrative space on campus. The building, while \nbeautiful, has a sinister past behind it. Fell used to \nbe a dormitory building on campus. Back in 1903, \nJonathan Davis, an Elementary Education student at \nthe school, mysteriously disappeared one day. His body \nwas found in the basement of the building three weeks \nlater. The autopsy ruled natural causes as the cause \nof death, but rumors started spreading that Davis \nwas murdered with ricin and stowed away in the \nbuilding. While this is not what the official ruling of \ndeath, legend has it that he still haunts the building and \nother nearby parts of campus as well.", fell))

//WILLIAMS
  stories.push(new Story("Legend has it the spirit of the old librarian, Ange Milner, \nroams the old bookstacks of Williams Hall. The \nbookstacks, which are now mostly empty aside from the \nbuildup of dust over the years and old book pages \nfound laying around, used to house old books. The books \nhave since been relocated to a warehouse off-campus.", williams))

//OLD UNION
  stories.push(new Story("The Old Union Building is home to the School of \nInformation Technology, the Web and Interactive \nCommunications office, and WGLT Radio.The Old Union \nBuilding opened in 1956 and was the original student \nunion on campus. It has also been called the Educational \nMedia Building and Media Services.President Strand named \nthis building Old Union in the 1990s. But we call that \nconnecting to spirit world. Which the old technology \nbuilt to connecting you to see the world \nthat does not exist in reality.", oldUnion))

//FELMLEY
  stories.push(new Story("Felmley Hall of Science contains offices from the \nSchool of Biological Sciences, the Illinois State \nPlanetarium, the Department of Health Sciences, and the \nDepartment of Geography, Geology, and the Environment. \nFelmley Hall of Science is named after David Felmley, \npresident of Illinois State Normal University from \n1900-1930. David Felmley was an advocate for the needs \nof students and faculty for three decades and worked to \nexpand areas of curriculum. Felmley Hall opened in 1930. \nIn 1962, the University received a grant from the National \nScience Foundation to assist with a $1.8 million annex. \nThe science department has a secret hall room for all \nthe dangerous chemical using stuff. Long times ago, our \nlead student was doing a dangerous lab overnight which \nturned out the chemical changed. Then he turned himself \ninto monster science beast. You will not want to become \nlike that and have to close yourself into a cage, never being \nout again.", felmley))

//CPA
  stories.push(new Story("The construction of the Center for Performing Arts cost $19.8 \nmillion and was completed and dedicated in the Fall of 2002. \nAn 800-seat concert hall and a 450-seat theatre are the \nbuilding's main features. As you could see, the most part \nof the building is built by large pieces of glasses. At \nnight, you can see all the ghost around by this area \nwhich could stop by. You don’t want to look at the glass \nby the dark outside unless you wants to “talk” \nwith your neighbor ghost.", cpa))

//STATE FARM
  stories.push(new Story("The 118,000-square foot State Farm Hall of Business \nbuilding, designed in the Georgian style of architecture, \nopened in January 2005. The facility blends the small \ncollege campus environment with a corporate presence \nand state-of-the art technologies. The COUNTRY Insurance \nand Financial Services Atrium, the central core of the \nbuilding, was designed to reflect the modern, strategic focus \nof Corporate America. Those entering the building are greeted by a \nsix-story, 1,000-plus square foot open area. A glass wall on \nfive levels offers a picturesque view of the courtyard. \nThe Atrium also serves as the crossroads between the \nbuilding's classroom wing on the building's west side \nand the faculty/administrative wing on the first, \nsecond, and third levels on the building's east side. \nThe building's four stories wrap around a courtyard in \na 21st century version of the Oxford College model. \nThree arched openings from the Quad lead directly \ninto the courtyard, a scenic location for informal \nstudy sessions, conversation, and meetings. University \nStreet, on the south end of the quad. Business hall \nis the most beautiful building here at ISU. But its \nnot only because the cost outside, but always it’s the \nghost bank inside. Once the night has come, the whole \nbuilding turned into a bank for the ghost storge their \ndaily use and supplies.", cob))

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;
  alphaGhost = random(330);
  betaGhost = random(150);
  randomStory = round(random(stories.length) - 0.5);

}

function draw() {

  // for (var i = 0, i < places.length, i++) {
  //   print(places[i].fence.insideFence);
  // }

  // DECORATIONS
  // Just a bunch of text commands to display data coming in from addEventListeners

  // fill('red');
  // rect(0, 0, 300, 200);



  switch (myState) {
    case 0:
    background('white');
    textAlign(LEFT);
    textSize(20);
    fill('black');
    text("orientation data:", 25, 25);
    textSize(15);
    text("alpha: " + alpha, 25, 50);
    text("beta: " + beta, 25, 70);
    text("gamma: " + gamma, 25, 90);
    textSize(20);
    text("acceleration data:", 25, 125);
    textSize(15);
    text("permissionState =" + pstate1 + ", " + pstate2, 25, 145) ;

    text("Ghost is around " + alphaGhost + " alpha, " + betaGhost + " beta", 25, 200)

    if((alpha > alphaGhost) && (alpha < alphaGhost + 30) && (beta > betaGhost) && (beta < betaGhost + 30) ) {
      myState = 1;
      text("ghost!!!!!!!!!", 25, 175);



    }
    else {
      text("no ghost", 25, 175);
      // console.log("no ghost");
    }

      break;

    case 1:
      //play music
      song.play();

      myState = 2;
      break;

    case 2:
      background('red');
      textSize(12);
      text(stories[randomStory].story, 25, 20);
      image(stories[randomStory].picture, 20, 350, 200, 200)
      break;
  }



  // if((alpha > alphaGhost) && (alpha < alphaGhost + 30) && (beta > betaGhost) && (beta < betaGhost + 30) ) {
  //   text("ghost!!!!!!!!!", 25, 175);
  //   console.log("ghost");
  //   text()
  //   ghost = true;
  //
  // }
  // else {
  //   text("no ghost", 25, 175);
  //   // console.log("no ghost");
  //   ghost = false;
  //   text(stories[round(random(stories.length))].story)
  // }


}

// function positionPing(position) {
//   textSize(24);
//   num++;
//   background(255);
//   text("lat: " + position.latitude.toFixed(8), 10, 340);
//   text("long: " + position.longitude.toFixed(8), 10, 390);
//   text("number of updates: " + num, 10, 440);
//   distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi');
//
//   for (var i = 0; i < places.length; i++) {
//     if (places[i].fence.insideFence == true && ghost == true){
//       places[i].display();
//       break; //should break out of the for loop?
//       //text(places[i].desc + ' check1 ' + places[i].fence.insideFence, 10, 240 + (i * 28));
//     }
//   }
//
// }

// function Place(lat, long, desc, radius, reggieImg) {
//   this.lat = lat;
//   this.long = long;
//   this.fence = false;
//   this.desc = desc;
//   this.radius = radius;
//   this.fence = new geoFenceCircle(this.lat, this.long, this.radius); //sets geofence location to coordinates
//
//
//
//   this.display = function() {
//
//
//     image(reggieImg, 10, 10);
//     textSize(20);
//     text("You are totally at " + this.desc, 10, 240);
//
//
//
//
//   }
// }

window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});

function Story(words, pic) {
  this.story = words;
  this.picture = pic;
}

// function mouseReleased() {
//   myState = 1;
// }
