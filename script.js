"use strict";

let score = 20;
let highscore = 0;
let randomNumber = Math.trunc(Math.random() * 20) + 1;

const message = document.querySelector(".message");
const scoreMessage = document.querySelector(".score");
const again = document.querySelector(".again");
const check = document.querySelector(".check");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const answer = document.querySelector(".answer");
const container = document.querySelector(".container");
const close = document.querySelector(".close");

const restart = function () {
  message.textContent = "Start guessing...";
  score = 20;
  scoreMessage.textContent = score;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".input-box").value = "";
  container.style.backgroundColor = "#222";
  answer.textContent = "?";
  answer.style.width = "15rem";
};

const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

check.addEventListener("click", function () {
  const result = Number(document.querySelector(".input-box").value);
  console.log(result);

  if (!result) {
    message.textContent = "Enter a Number!";
  } else if (result === randomNumber) {
    message.textContent = "You Win!!!";
    container.style.backgroundColor = "green";
    answer.style.width = "30rem";
    answer.textContent = randomNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (result !== randomNumber) {
    message.textContent = result > randomNumber ? "Too High!!!" : "Too Low!!!";
    if (score > 1) {
      score--;
      scoreMessage.textContent = score;
    } else {
      scoreMessage.textContent = 0;
      message.textContent = "GAME OVER!!!";
      showModal();
      container.style.backgroundColor = "#D2042D";
    }
  }
});

again.addEventListener("click", restart);

close.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
