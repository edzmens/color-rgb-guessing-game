var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("answer");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var newGame = document.querySelector("button");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var mode = squares.length;




mainLoop();

function mainLoop() {
  for (var i = 0; i < squares.length; i++) {
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {

      var clickedColor = this.style.backgroundColor;
      if (pickedColor === clickedColor) {
        messageDisplay.textContent = "Correct!";
        colorChanger(clickedColor);
        newGame.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
}
newGame.addEventListener("click", playAgain);

easy.addEventListener("click", function() {
  easy.classList.add("selected");
  hard.classList.remove("selected");

  for (var i = 3; i < 6; i++) {
    squares[i].classList.remove("square");
  }
  mode = document.querySelectorAll(".square").length;
  playAgain();
});

hard.addEventListener("click", function() {
  hard.classList.add("selected");
  easy.classList.remove("selected");
  for (var i = 3; i < 6; i++) {
    squares[i].classList.add("square");
  }
  mode = document.querySelectorAll(".square").length;
  playAgain();
});

function playAgain() {
  colors = generateRandomColors(mode);
  pickedColor = pickColor();
  messageDisplay.textContent = "";
  newGame.textContent = "New Colors";
  mainLoop();
}

function colorChanger(colorPicked) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colorPicked;
  }
  h1.style.backgroundColor = colorPicked;
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
