/* eslint-disable */
import { Button } from "bootstrap";
import "./style.css";

const cardNumbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "A",
  "Q",
  "J",
  "K"
];

const cardsSuit = ["♦", "♥", "♠", "♣"];

window.onload = () => {
  const cardRandom = document.getElementById("card");

  let randomCardSuit = cardsSuit[Math.floor(Math.random() * 4)];
  let randomCardNumbers = cardNumbers[Math.floor(Math.random() * 12)];
  const cardBody = document.createElement("div");
  if (randomCardSuit === "♦" || randomCardSuit === "♥") {
    cardBody.innerHTML = `
    <div class="suitUp red"><i class="suitUpImg">${randomCardSuit}</i></div>
      <div class="cardNumber">
        <p class="number red">${randomCardNumbers}</p>
      </div>
    <div class="suitDown red"><i class="suitDownImg">${randomCardSuit}</i></div>
  `;
  } else {
    cardBody.innerHTML = `
    <div class="suitUp"><i class="suitUpImg">${randomCardSuit}</i></div>
      <div class="cardNumber">
        <p class="number">${randomCardNumbers}</p>
      </div>
    <div class="suitDown"><i class="suitDownImg">${randomCardSuit}</i></div>
  `;
  }
  const cardButton = document.createElement("button");
  cardButton.innerHTML = "Change";
  cardButton.classList.add(
    "btn",
    "btn-danger",
    "d-flex",
    "position-absolute",
    "top-100",
    "start-0"
  );
  cardButton.addEventListener("click", () => {
    location.reload();
  });
  cardRandom.appendChild(cardBody);
  card.appendChild(cardButton);
};
