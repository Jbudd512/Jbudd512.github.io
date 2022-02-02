var treasureLocation = Math.floor(Math.random() * 9);
var chickLocation = Math.floor(Math.random() * 9);
var counter = 3;

while (treasureLocation == chickLocation) {
  treasureLocation = Math.floor(Math.random() * 9);
  chickLocation = Math.floor(Math.random() * 9);
}

const treasure = (location) => {
  if (location == treasureLocation) {
    document.getElementById("table").innerHTML =
      "<br>" +
      "You win!!!" +
      "<br>" +
      "<br>" +
      '<img src="https://www.vhv.rs/dpng/d/138-1382962_easter-bunny-hare-chocolate-bunny-rabbit-chocolate-bunny.png" height= "300px" alt="chocolate bunny"/>';
  } else if (location == chickLocation) {
    document.getElementById("table").innerHTML =
      "<br>" +
      "You lose!!!" +
      "<br>" +
      "<br>" +
      '<img src="https://w7.pngwing.com/pngs/647/588/png-transparent-cute-little-yellow-chicken-yellow-chick-cartoon.png" height= "300px" alt="baby chick"/>';
  } else if (counter == 0) {
    document.getElementById("table").innerHTML =
      "<br>" + "You ran out of turns! Try again!";
  } else {
    document.getElementById(location).innerHTML =
      '<img src="https://cdn.pixabay.com/photo/2014/04/02/11/02/egg-305311_960_720.png" height= "100px" alt="egg splat/>';
    counter--;
  }
};
