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


// NOTE:  Över-sepcifika quotes är för min egna skull



let restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', ()=>{
restartGame();
});

const removeCards = () =>{
  grid.innerHTML = "";
}

//duplicerar arrayen (behöver 2 kort av varje)
let gameGrid = cardsArray.concat(cardsArray);

function shuffleReset() {
  return 0.5 - Math.random();
  }

//shufflar arrayen
gameGrid.sort(shuffleReset);
// shuffleReset();
//sparar allt med id 'game' i variabeln game
const game = document.getElementById('game');

//sparar funktionen att skapa ett section element i grid variablen
const grid = document.createElement('section');


//sectionen får klassen grid på sig
grid.setAttribute('class', 'grid');

//lägger till det sparade i grid till det id:t som är sparat i game till html
game.appendChild(grid);


function makeCards () {
  gameGrid.forEach(item => {
  //sparar värdet att skapa en div i card
  const card = document.createElement('div');
  //lägger till en card class på card div:en
  card.classList.add('card');
  //data-name attributet får namnet av saken i arrayen?? (läggs till på div:en?)
  card.dataset.name = item.name;

  //sparar att skapa en div i front variablen och lägger till front klassen.
  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  //lägger till en style på div:en som är backgroundimage, värdet på url:en är img från item som kommer från arryen
  back.style.backgroundImage = `url(${item.img})`;

  //card div:en läggs nu in under grid sektionen
  grid.appendChild(card);
  // och back och front div:arna under card div:en
  card.appendChild(front);
  card.appendChild(back);
});

}
makeCards(gameGrid);

const restartGame = () => {
  removeCards();
  gameGrid.sort(shuffleReset);
  makeCards();
};

//variabel för att hålla antal tryck på korten
let count = 0;

let delay = 1200;
let firstGuess = '';
let secondGuess = '';
let previousTarget = null;
//lägger till en click event listerner
grid.addEventListener('click', function (event){
  //Event targetet är det som skall bli klickat på
  let clicked = event.target;

  //bara divar i sectionen kan bli klickbart
  // clicked === previousTarget gör så man inte kan trycka på samma ikon 2 gånger för att matcha
  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected')) {
    return;
  }

  //om count är mindre än 2 så kan den ökas
  if (count < 2) {
    count++;
    if (count === 1) {
      //får värdet av name datasettet (namnen från arryen) som den har
      //(parentNode för att dartasettet är på den yttre div:en men vi trycker på den indre diven front och back)
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      //lägger till klassen selected
      clicked.parentNode.classList.add('selected');
    }else{
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    // om båda gissningarna inte är tomma och om de har samma dataset namn (matchar)
    // run:a match funktionen
    // och om det är en match kör reserGuesses funktionen som tar bort selected
    // även om det inte är en match (i else)
    //setTimeout metoden gör saker efter en specifik tid, tidens värde ligger i delay variabeln
    // (metoderna i setTimeout är callbacks, alltså funktioner använda som argument,
    //det är därför det inte har parantes längre)
    if (firstGuess !== '' && secondGuess !== '') {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
      } else{
          setTimeout(resetGuesses, delay);
      }
    }
    // sätter varibalen till klickad
    previousTarget = clicked;
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

//sätter tillbaka alla guess värden och tar bort selected klassen från divs
const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  })
};
