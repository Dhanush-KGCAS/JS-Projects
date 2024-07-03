// Player1 Code
function diceGame(){

var randNum1 = Math.floor(Math.random() * 6) + 1; 
var randDiceImg = "dice" + randNum1 + ".png";
var randImgSrc = "images/" + randDiceImg; 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randImgSrc);

// Player2 Code
var randNum2 = Math.floor(Math.random() * 6) + 1;
var randImgSrc2 = "images/dice" + randNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randImgSrc2);

//If player 1 wins
if (randNum1 > randNum2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randNum2 > randNum1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

}

let btn = document.querySelector('.toggle-btn')

btn.addEventListener('click', ()=>{
  return diceGame();
})