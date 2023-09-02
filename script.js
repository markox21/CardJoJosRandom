//contenedor cartas, cambios
function clearAll() {
  const cardContainer = document.querySelector(".cards-content");

  cardContainer.innerHTML = "";
}

function showCard() {
  // funcion al presionar boton
  const randomCard = getRandomData("cards");
  const container = document.querySelector(".cards-content");
  const newImg = document.createElement("img");
  newImg.setAttribute("src", randomCard);
  const cardBack = document.getElementById("tapeImagen");
  cardBack.style.display = "none";

  clearAll();

  container.appendChild(newImg);
}

// para que se genere una carta random
function getRandomData(type) {
  return data[type][rn(data[type].length)];
}

//cartas
const cards = [
  "img/TheMagician.jpg",
  "img/JoJo_Tarot_21.jpg",
  "img/JoJo_Tarot_20_-_Judgement.jpg",
  "img/JoJo_Tarot_19_-_The_Sun.jpg",
  "img/JoJo_Tarot_18_-_The_Moon.jpg",
  "JoJo_Tarot_17_-_The_Star.jpg",
  "JoJo_Tarot_16_-_The_Tower.jpg",
  "JoJo_Tarot_15_-_The_Devil.jpg",
  "JoJo_Tarot_14_-_Temperance.jpg",
  "JoJo_Tarot_13_-_Death.jpg",
  "JoJo_Tarot_12_-_The_Hanged_Man.jpg",
  "JoJo_Tarot_11_-_Justice.jpg",
  "JoJo_Tarot_10_-_Wheel_of_Fortune.jpg",
  "JoJo_Tarot_09_-_The_Hermit.jpg",
  "JoJo_Tarot_08_-_Strength.jpg",
  "JoJo_Tarot_07_-_The_Chariot.jpg",
  "JoJo_Tarot_06_-_The_Lover.jpg",
  "JoJo_Tarot_05_-_The_High_Erophant.jpg",
  "JoJo_Tarot_04_-_The_Emperor.jpg",
  "JoJo_Tarot_03_-_The_Empress.jpg",
  "JoJo_Tarot_02_-_The_High_Priestess.jpg",
  "JoJo_Tarot_00_-_The_Fool.jpg",
];

//funciones de ayuda
function rn(len) {
  return Math.floor(Math.random() * len);
}

const data = {
  cards,
};
