"use strict";

const cardsArray = [{
    'name': 'shell',
    'img': 'img/blueshell.png',
  },
  {
    'name': 'star',
    'img': 'img/star.png',
  },
  {
    'name': 'bobomb',
    'img': 'img/bobomb.png',
  },
  {
    'name': 'mario',
    'img': 'img/mario.png',
  },
  {
    'name': 'luigi',
    'img': 'img/luigi.png',
  },
  {
    'name': 'peach',
    'img': 'img/peach.png',
  },
  {
    'name': '1up',
    'img': 'img/1up.png',
  },
  {
    'name': 'mushroom',
    'img': 'img/mushroom.png',
  },
  {
    'name': 'thwomp',
    'img': 'img/thwomp.png',
  },
  {
    'name': 'bulletbill',
    'img': 'img/bulletbill.png',
  },
  // {
  //   'name': 'coin',
  //   'img': 'img/coin.png',
  // },
  // {
  //   'name': 'goomba',
  //   'img': 'img/goomba.png',
  // },
];

// save the element (the div with id game) and create a new section with a new class called grid and
//append it to the dom inside our game div

// Över-sepcifika quotes är för min egna skull

//sparar allt med id 'game' i variabeln game
const game = document.getElementById('game');

//sparar funktionen att skapa ett section element i grid variablen
const grid = document.createElement("section");
//sectionen får klassen grid på sig
grid.setAttribute('class', 'grid');

//lägger till det sparade i grid till det id:t som är sparat i game till html
game.appendChild(grid);


cardsArray.forEach(item =>{
  //Gör en function innanför foreachen??

  //sparar värdet att skapa en div i card
  const card = document.createElement('div');

  //lägger till en card class på card div:en
  card.classList.add('card');

  //data-name attributet får namnet av saken i arrayen?? (läggs till på div:en?)
  card.dataset.name = item.name;

  //lägger till en style på div:en som är backgroundimage, värdet på url:en är img från item som kommer från arryen
  card.style.backgroundImage = `url(${item.img})`;

  //card div:en läggs nu in under grid sektionen
  grid.appendChild(card);

});
