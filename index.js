
var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomImage1Source = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomImage1Source);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImage2Source = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImage2Source);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "player 1 Wins!";
}else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "player 2 Wins!";
}else {
  document.querySelector("h1").innerHTML = "Draw!";
}
