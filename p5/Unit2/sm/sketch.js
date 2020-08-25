let state = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch(state) {
    case 0:
    text("welcome!!!", 100, 100 ) ;
    break ;

    case 1:
    // game!!!
    break ;

    case 2:
    break ;

    case 3:
    break ;

  }

}


function mouseReleased() {

  state = state + 1 ;
  if (state > 2) {
    state = 0 ;
  }

}
