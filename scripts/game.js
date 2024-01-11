import createEl, { StarWarsApi } from "./script.js";
let game = document.querySelector(".game");
let planet = createEl("img", "game__planet");
planet.src = "../assets/images/planet.png";
game.appendChild(planet);

const answers = [Luke, Yoda, Vader, Han];

// document.querySelectorAll(".answer").forEach((button) => {
//   button.addEventListener("click", function () {
//     const character = this.getAttribute("data-character");
//     answers[character]++;
//   });
// });

// document.getElementById("submit-quiz").addEventListener("click", () => {
//   const mostSimilarCharacter = Object.keys(answers).reduce((a, b) =>
//     answers[a] > answers[b] ? a : b
//   );
//   document.getElementById(
//     "result"
//   ).innerText = `你与 ${mostSimilarCharacter} 最相似。`;
// });
