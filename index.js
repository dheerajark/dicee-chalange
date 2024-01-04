var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1)

document.querySelector("img").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


var refresh = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    refresh.innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    refresh.innerHTML = "Player 2 wins!";
} else if (randomNumber1 === randomNumber2) {
    refresh.innerHTML = "Draw"
} else {
    refresh.innerHTML = "Refresh Me"
}