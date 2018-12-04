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

//Creates the board
const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);
let count = 0;
let delay = 1200;
let firstGuess = '';
let secondGuess = '';
let previousTarget = null;

//Restarts the game
let restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', ()=>{
restartGame();
});

const removeCards = () =>{
  grid.innerHTML = "";
}

let gameGrid = cardsArray.concat(cardsArray);


function shuffleReset() {
  return 0.5 - Math.random();
  }
gameGrid.sort(shuffleReset);



//Adds values to cards
function makeCards () {
  gameGrid.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = item.name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${item.img})`;

  grid.appendChild(card);
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


//Makes the game work with the game features (Clicking and matching)
grid.addEventListener('click', function (event){
  let clicked = event.target;

  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected')) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    }else{
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess !== '' && secondGuess !== '') {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
      } else{
          setTimeout(resetGuesses, delay);
      }
    }
    previousTarget = clicked;
  }
});

const match = () => {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
}

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  })
};
