import createEl, { StarWarsApi } from "./script.js";
const names = [
  "Luke_skywalker",
  "C-3PO",
  "R2-D2",
  "Darth Vade",
  "Leia Organa",
  "Owen Lars",
  "Beru Whitesun Lars",
  "r5-d4",
  "Obi-Wan Kenobi",
];
const links = [
  "../assets/images/luke_skywalker.png",
  "../assets/images/C-3PO.png",
  "../assets/images/R2-D2.png",
  "../assets/images/Darth Vade.png",
  "../assets/images/Leia Organa.png",
  "../assets/images/Owen Lars.png",
  "../assets/images/Beru Whitesun Lars.png",
  "../assets/images/R5-D4.png",
  ,
  "../assets/images/Obi-Wan Kenobi.png",
];

let album = document.querySelector(".album");
let albumTitle = createEl("p", "album__title");
albumTitle.textContent = "Roles Library";
console.log(albumTitle);
album.appendChild(albumTitle);
let albumContainer = createEl("div", "album__container");
album.appendChild(albumContainer);

const api = new StarWarsApi();
let currentCard = null;
api.getPeoples().then((response) => {
  response.results.forEach((people, index) => {
    if (people.name !== "Biggs Darklighter") {
      let containerSmall = createEl("div", "album__container--small");
      albumContainer.appendChild(containerSmall);
      let albumItem = createEl("img", "album__item");
      albumItem.textContent = people.name;
      albumItem.src = links[index];
      containerSmall.appendChild(albumItem);
      albumItem.addEventListener("click", (event) => {
        event.stopPropagation();
        if (currentCard) {
          currentCard.remove();
        }
        let albumCard = createEl("div", "album__card");
        containerSmall.appendChild(albumCard);
        currentCard = albumCard;
        let albumName = createEl("p", "album__name");
        albumName.textContent = `Name: ${people.name}`;
        albumCard.append(albumName);
        let albumGender = createEl("p", "album__gender");
        albumGender.textContent = `Gender: ${people.gender}`;
        albumCard.append(albumGender);
        let albumHeight = createEl("p", "album__height");
        albumHeight.textContent = `Height: ${people.height}`;
        albumCard.append(albumHeight);
        let albumEyeColor = createEl("p", "album__eyeColor");
        albumEyeColor.textContent = `Eye Color: ${people.eye_color}`;
        albumCard.append(albumEyeColor);
        let albumBirth = createEl("p", "album__birth");
        albumBirth.textContent = `Birth Year: ${people.birth_year}`;
        albumCard.append(albumBirth);
      });
    }
  });
});
document.addEventListener("click", (event) => {
  if (currentCard) {
    currentCard.remove();
    currentCard = null;
  }
});
