import createEl, { StarWarsApi } from "./script.js";
let game = document.querySelector(".game");
let planet = createEl("img", "game__planet");
planet.src = "../assets/images/planet.png";
game.prepend(planet);

const answers = ["Luke", "Yoda", "Vader", "Han"];
let buttonText = document.querySelector(".answer");

// document.querySelectorAll(".answer").forEach((button) => {
// smallDivs.forEach((div) => {
//   div.addEventListener("click", function () {
//     smallDivs.forEach((innerDiv) => {
//       innerDiv.classList.remove("card__container--backgroundColor");
//     });
//     div.classList.add("card__container--backgroundColor");
//   });
// });
//let answer = document.querySelectorAll(".answer");
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const answer = document.getElementById("answer").value;
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "";
  answer.toLowerCase();
  //   const heading = document.createElement("h2");
  //   heading.textContent = "Submitted Data:";
  //   resultDiv.appendChild(heading);

  const nameParagraph = document.createElement("p");
  nameParagraph.textContent = `${name}`;

  const strongName = document.createElement("strong");

  const answerParagraph = document.createElement("p");
  answerParagraph.textContent = `${answer}`;
  //   switch (answerParagraph.textContent) {
  //     case "Travel":
  //       answerParagraph.textContent = `${name}, you are similar with luke!!!`;
  //       break;
  //     case "Study":
  //       answerParagraph.textContent = `${name}, you are similar with Yoda!!!`;
  //       break;
  //     case "Lead":
  //       answerParagraph.textContent = `${name}, you are similar with Vader!!!`;
  //       break;
  //     default:
  //       answerParagraph.textContent = `${name}, you are similar with Yoda!!!`;
  //       break;
  //   }
  if (answerParagraph.textContent === "Travel") {
    answerParagraph.textContent = `${name}, you are similar with luke!!!`;
    console.log("You are similar with luke");
  } else if (answerParagraph.textContent === "Study") {
    answerParagraph.textContent = `${name}, you are similar with Yoda!!!`;
  } else if (answerParagraph.textContent === "Lead") {
    answerParagraph.textContent = `${name}, you are similar with Vader!!!`;
  } else {
    answerParagraph.textContent = `${name}, you are similar with Han!!!`;
  }
  const strongAnswer = document.createElement("strong");
  strongAnswer.textContent = "Answer: ";
  answerParagraph.prepend(strongAnswer);
  resultDiv.appendChild(answerParagraph);

  // reset the form
  document.getElementById("myForm").reset();
});
