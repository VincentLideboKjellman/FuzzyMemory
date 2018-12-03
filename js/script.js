"use strict";

const cardsArray = [{
    'name': '3ds',
    'img': 'img/3ds.png',
  },
  {
    'name': 'css',
    'img': 'img/css.png',
  },
  {
    'name': 'figma',
    'img': 'img/figma.png',
  },
  {
    'name': 'html',
    'img': 'img/html.png',
  },
  {
    'name': 'illustrator',
    'img': 'img/illustrator.png',
  },
  {
    'name': 'js',
    'img': 'img/js.png',
  },
  {
    'name': 'php',
    'img': 'img/php.png',
  },
  {
    'name': 'sketch',
    'img': 'img/sketch.png',
  },
  {
    'name': 'slack',
    'img': 'img/slack.png',
  },
  {
    'name': 'sqlite',
    'img': 'img/sqlite.png',
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
const grid = document.createElement('section');
//sectionen får klassen grid på sig
grid.setAttribute('class', 'grid');

//lägger till det sparade i grid till det id:t som är sparat i game till html
game.appendChild(grid);


cardsArray.forEach(item => {
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
