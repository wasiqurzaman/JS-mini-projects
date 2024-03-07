'use strict';

const inputNum = document.querySelector(".input");
const btnSubmit = document.querySelector(".btn-submit");
const btnStartGame = document.querySelector(".btn-start");
const displayMessage = document.querySelector(".display-message");
const displayGuess = document.querySelector(".display-guess");
const form = document.querySelector(".form");

function guessGame() {
  function genRandomNumber() {
    return Math.floor(Math.random() * 101);
  }

  let number = genRandomNumber();
  let guessList = [];
  let displayGuessText = "Your guesses: "
  let gameOver = false;

  function updateUI(message, value) {
    let text = guessList.length === 0 ? `${value}` : `, ${value}`;
    displayGuessText = displayGuessText + text;
    guessList.push(+inputNum.value);
    inputNum.value = "";
    displayMessage.textContent = message;
    displayGuess.textContent = displayGuessText;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = +inputNum.value;
    if (value > 100 || value < 0) return;
    if (inputNum.value === "") return;
    if (number === value) {
      updateUI("You got it! Congrats", value);
      btnStartGame.removeAttribute("disabled");
      btnSubmit.setAttribute("disabled", "");
      inputNum.setAttribute("disabled", "");
      gameOver = true;
    } else if (number < value) {
      updateUI("Too high!", value);
    } else if (number > value) {
      updateUI("Too low!", value);
    }
  });

  form.addEventListener("reset", function (e) {
    e.preventDefault();
    number = genRandomNumber();
    guessList = [];
    gameOver = false;
    displayGuessText = "Your guesses: ";
    inputNum.value = "";
    displayMessage.textContent = "";
    displayGuess.textContent = "";
    btnStartGame.setAttribute("disabled", "");
    btnSubmit.removeAttribute("disabled");
    inputNum.removeAttribute("disabled");
  });
}

guessGame()




