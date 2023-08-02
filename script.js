"use strict";

let score = 20;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const result = Number(document.querySelector(".input-box").value);

  if (!result) {
    document.querySelector(".message").textContent = "Enter a number!";
  } else if (result === randomNumber) {
    document.querySelector(".message").textContent = "You Win!";
  } else if (result > randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "GAME OVER!!!";
    }
  } else if (result < randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!!!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "GAME OVER!!!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  Number((document.querySelector(".input-box").value = ""));
  document.querySelector(".score").textContent = score;
});
