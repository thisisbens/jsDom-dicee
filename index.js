//get randomNumber1
var randomNumber1 = Math.floor (Math.random() * 6) + 1;
console.log(randomNumber1);
//change dice1 to match randomNumber1
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

//get randomNumber2
var randomNumber2 = Math.floor (Math.random() * 6) + 1;
console.log(randomNumber2);
//change dice2 to match randomNumber2
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

//change h1 text
//if player1 wins = if randomNumber1 > randomNumber 2
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "Player 1 wins!"
}
//if player2 wins = if randomNumber1 < randomNumber 2
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 wins!"
}
//else draw = roll again!
else {
  document.querySelector("h1").textContent = "Draw! Roll again..."
}
