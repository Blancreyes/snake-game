/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

const playBoard = document.querySelector(".playboard");

let foodX = 13,
  foodY = 10;

const foodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

const initGame = () => {
  let htmlMarkup = `<div class="food" style="grid-area:${foodY}/${foodX}"></div>`;
  playBoard.innerHTML = htmlMarkup;
};

initGame();
