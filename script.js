"use strict";

let score = 20;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

const showMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (scoreShow) {
  document.querySelector(".score").textContent = scoreShow;
};

document.querySelector(".check").addEventListener("click", function () {
  const result = Number(document.querySelector(".input-box").value);

  if (!result) {
    showMessage("Enter a Number!!!");
  } else if (result === randomNumber) {
    showMessage("You Win!");
    document.querySelector(".container").style.backgroundColor = "#004D00";
    document.querySelector(".answer").textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (result !== randomNumber) {
    if (score > 1) {
      result > randomNumber
        ? showMessage("Too High!!!")
        : showMessage("Too Low!!!");
      score--;
      displayScore(score);
    } else {
      displayScore(0);
      showMessage("GAME OVER!!!");
      document.querySelector(".container").style.backgroundColor = "#900406";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  showMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".container").style.backgroundColor = "#222";
  Number((document.querySelector(".input-box").value = ""));
  document.querySelector(".answer").textContent = "?";
});
