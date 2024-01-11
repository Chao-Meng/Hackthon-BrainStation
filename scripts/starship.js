import createEl, { StarWarsApi } from "./script.js";
// const names = [
//   "Luke_skywalker",
//   "C-3PO",
//   "R2-D2",
//   "Darth Vade",
//   "Leia Organa",
//   "Owen Lars",
//   "Beru Whitesun Lars",
//   "r5-d4",
//   "Obi-Wan Kenobi",
// ];
const links = [
  "../assets/images/Death Star.png",
  "../assets/images/EF76 Nebulon-B escort frigate.png",
  "../assets/images/Imperial shuttle.png",
  "../assets/images/Rebel transport.png",
  "../assets/images/Sentinel-class landing craft.png",
  "../assets/images/Star Destroyer.png",
  "../assets/images/TIE Advanced x1.png",
  "../assets/images/X-wing.png",
  "../assets/images/Y-wing.png",
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
api.getStarships().then((response) => {
  response.results.forEach((people, index) => {
    if (people.name !== "CR90 corvette") {
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
