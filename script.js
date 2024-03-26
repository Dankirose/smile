import { data } from "./data.js";
const input = document.querySelector(".find");
const cards = document.querySelector(".cards");

//создаем функцию отрисовку
function addCard(findTitle) {
  cards.innerHTML = ""; //отрисовать пустой html
  findTitle.forEach((e) => {
    //метод применить калбэк функцию
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `<p class="card__symbol">${e.symbol}</p>
    <h3>${e.title}</h3>
    <p class="card__desc">
    ${[...new Set(e.keywords.split(" "))].join(" ")} 
    </p>`;

    cards.append(card);
  });
}
addCard(data);

input.addEventListener("input", inputHandler);

function inputHandler(evt) {
  let value = evt.target.value;
  const findTitle = data.filter((el) =>
    el.title.trim().toLowerCase().includes(value.trim().toLowerCase())
  );
  addCard(findTitle);
}
