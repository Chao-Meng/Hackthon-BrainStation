export default function createEl(element, className) {
  let elementName = document.createElement(element);
  elementName.classList.add(className);
  return elementName;
}
let nav = document.querySelector(".nav");
let ul = createEl("ul", "nav__list");
nav.appendChild(ul);

const items = ["Home", "Role Library", "Starship Library", "Game"];
const links = [
  "../index.html",
  "../pages/role.html",
  "../pages/starship.html",
  "../pages/game.html",
];
items.forEach((itemText, index) => {
  const li = createEl("li", "nav__item");
  const a = createEl("a", "nav__link");
  a.textContent = itemText;
  a.href = links[index] ? links[index] : "#";
  console.log(a.href);
  ul.appendChild(li);
  li.appendChild(a);
});
let heroCard = document.querySelector(".hero__card");
console.log(heroCard);
// let heroImage = createEl("img", "hero__img");
// console.log(heroImage);
// heroCard.appendChild(heroImage);
