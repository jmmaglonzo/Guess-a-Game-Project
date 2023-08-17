"use strict";

const playAgainBtn = document.getElementById("again");
const checkBtn = document.getElementById("check-btn");
const closeModal = document.querySelector(".close");

const answerBox = document.getElementById("box");
const container = document.querySelector(".container");
const inputBox = document.getElementById("input-box");
const guessText = document.querySelector(".guess-text");
const scoreText = document.querySelector("#score");
const textHighscore = document.querySelector("#highscore");

const showModal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// !FUNCTIONS
const openCloseModal = function () {
  showModal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

const gameLogic = function () {
  let answer = Number(document.getElementById("input-box").value);
  if (!answer) {
    alert("ENTER A NUMBER");
  } else if (answer === randomNumber) {
    guessText.textContent = "You win";
    container.style.backgroundColor = "#04a92d";
    answerBox.style.width = "30rem";
    answerBox.textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
      textHighscore.textContent = highscore;
    }
  } else if (answer !== randomNumber) {
    guessText.textContent =
      answer > randomNumber ? "Too High!!!" : "Too Low!!!";
    if (score > 1) {
      score--;
      scoreText.textContent = score;
    } else {
      openCloseModal();
      scoreText.textContent = 0;
      container.style.backgroundColor = "#D7263D";
    }
  }
};

const gameReset = function () {
  guessText.textContent = "Start guessing...";
  inputBox.value = "";
  container.style.backgroundColor = "#02182B";
  answerBox.style.width = "15rem";
  answerBox.textContent = "?";
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreText.textContent = 20;
};

// !BUTTONS EVENT
checkBtn.addEventListener("click", gameLogic);
closeModal.addEventListener("click", openCloseModal);
playAgainBtn.addEventListener("click", gameReset);
overlay.addEventListener("click", openCloseModal);
