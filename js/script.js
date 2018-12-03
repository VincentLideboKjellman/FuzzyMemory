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
];


// Över-sepcifika quotes är för min egna skull



//duplicerar arrayen (behöver 2 kort av varje)
let gameGrid = cardsArray.concat(cardsArray);

//shufflar arrayen
gameGrid.sort(() => 0.5 - Math.random());



//sparar allt med id 'game' i variabeln game
const game = document.getElementById('game');

//sparar funktionen att skapa ett section element i grid variablen
const grid = document.createElement('section');


//sectionen får klassen grid på sig
grid.setAttribute('class', 'grid');

//lägger till det sparade i grid till det id:t som är sparat i game till html
game.appendChild(grid);


gameGrid.forEach(item => {
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


//variabel för att hålla antal tryck på korten
let count = 0;

let firstGuess = '';
let secondGuess = '';
//lägger till en click event listerner
grid.addEventListener('click', function (event){
  //Event targetet är det som skall bli klickat på
  let clicked = event.target;

  //bara divar i sectionen kan bli klickbart
  if (clicked.nodeName === 'SECTION') {
    return;
  }

  //om count är mindre än 2 så kan den ökas
  if (count < 2) {
    count++;
    if (count === 1) {
      //får värdet av name datasettet (namnen från arryen) som den har
      firstGuess = clicked.dataset.name;

      //lägger till klassen selected
      clicked.classList.add('selected');
    }else{
      secondGuess = clicked.dataset.name;
      clicked.classList.add('selected');
    }
    // om båda gissningarna inte är tomma och om de har samma dataset namn (matchar)
    // run:a match funktionen
    if (firstGuess !== '' && secondGuess !== '') {
      if (firstGuess === secondGuess) {
        match();
      }
    }
  }
});

//metoden Lägger till klassen match på allt som har fått klassen selected
// queryselectorAll samlar all selected i en array, sen loopar man igenom
//dem och lägger till match klassen.
const match = () => {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
}
