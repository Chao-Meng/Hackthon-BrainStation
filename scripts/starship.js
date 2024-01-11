import createEl, { StarWarsApi } from "./script.js";

const links = [
  "../assets/images/CR90 corvette.png",
  "../assets/images/Star Destroyer.png",
  "../assets/images/Sentinel-class landing craft.png",
  "../assets/images/Death Star.png",
  "../assets/images/EF76 Nebulon-B escort frigate.png",
  "../assets/images/Millennium Falcon.png",
  "../assets/images/Y-wing.png",
  "../assets/images/X-wing.png",
  "../assets/images/TIE Advanced x1.png",
  "../assets/images/Executor.png",
  "../assets/images/Rebel transport.png",
];

let album = document.querySelector(".album");
let albumTitle = createEl("p", "album__title");
albumTitle.textContent = "Starships Library";
console.log(albumTitle);
album.appendChild(albumTitle);
let albumContainer = createEl("div", "album__container");
album.appendChild(albumContainer);

const api = new StarWarsApi();
let currentCard = null;
api.getStarships().then((response) => {
  response.results.forEach((starship, index) => {
    if (starship.name !== "Rebel transport") {
      let containerSmall = createEl("div", "album__container--small");
      albumContainer.appendChild(containerSmall);
      let albumItem = createEl("img", "album__item");
      albumItem.textContent = starship.name;
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
        albumName.textContent = `Name: ${starship.name}`;
        albumCard.append(albumName);
        let albumModel = createEl("p", "album__model");
        albumModel.textContent = `Model: ${starship.model}`;
        albumCard.append(albumModel);
        let albumCapacity = createEl("p", "album__capacity");
        albumCapacity.textContent = `Capacity: ${starship.cargo_capacity}`;
        albumCard.append(albumCapacity);
        let albumLength = createEl("p", "album__passengers");
        albumLength.textContent = `Length: ${starship.length}`;
        albumCard.append(albumLength);
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
