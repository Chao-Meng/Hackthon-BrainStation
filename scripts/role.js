import createEl from "./script.js";
// let nav = document.querySelector(".nav");
// let ul = createEl("ul", "nav__list");

// console.log(createEl("ul", "nav__list"));
// nav.appendChild(ul);

// const items = ["Home", "Role Library", "Starship Library", "Game"];
// const links = [
//   "../index.html",
//   "../pages/role.html",
//   "../pages/starship.html",
//   "../pages/game.html",
// ];
// items.forEach((itemText, index) => {
//   const li = createEl("li", "nav__item");
//   const a = createEl("a", "nav__link");
//   a.textContent = itemText;
//   a.href = links[index] ? links[index] : "#";
//   console.log(a.href);
//   ul.appendChild(li);
//   li.appendChild(a);
// });

//let img = createEl("img", "ablum__item");
const names = [
  "Anakin Skywalker",
  "Beru Whitesun Lars",
  "C-3PO",
  "Darth Vade",
  "huke_skywalker",
  "Leia Organa",
  "Obi-Wan Kenobi",
  "Owen Lars",
  "R2-D2",
];
const links = [
  "../assets/images/Anakin Skywalker.png",
  "../assets/images/Beru Whitesun Lars.png",
  "../assets/images/C-3PO.png",
  "../assets/images/Darth Vade.png",
  "../assets/images/huke_skywalker.png",
  "../assets/images/Leia Organa.png",
  "../assets/images/Obi-Wan Kenobi.png",
  "../assets/images/Owen Lars.png",
  "../assets/images/R2-D2.png",
];
let album = document.querySelector(".album");
let albumTitle = createEl("p", "album__title");
albumTitle.textContent = "Roles Library";
console.log(albumTitle);
album.appendChild(albumTitle);
let albumContainer = createEl("div", "album__container");
album.appendChild(albumContainer);

names.forEach((itemName, index) => {
  let albumItem = createEl("img", "album__item");
  albumItem.textContent = itemName;
  albumItem.src = links[index];
  albumContainer.appendChild(ablumItem);
});
