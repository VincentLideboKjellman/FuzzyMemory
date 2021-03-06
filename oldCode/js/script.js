// Turning Card:
const memoryCards = document.querySelectorAll('.memoryCard');

let hasTurnedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function turnCard(){
  this.classList.add('turn');

  if (lockBoard) return;

  if (!hasTurnedCard) {
    hasTurnedCard = true;
    firstCard = this;
    return;
     }

     secondCard = this;
     hasFlippedCard = false;

     checkForMatch();
  }

 function checkForMatch() {
   if (firstCard.dataset.framework === secondCard.dataset.framework) {
     disableCards();
     return;
   }

   unflipCards();
 }

 function disableCards() {
   firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);
 }

 function unflipCards() {
   lockBoard = true;

   setTimeout(() => {
     firstCard.classList.remove('flip');
     secondCard.classList.remove('flip');

     lockBoard = false;
   }, 1500);
 }

memoryCards.forEach(memoryCard => memoryCard.addEventListener('click', turnCard));






// Lägg till array och fixa i html istället för hårdkodning
// let hardGame = cards.concat(cards);
// hardGame.sort(() => 0.5 - Math.random());
//
//
// hardGame.forEach(value =>{
//  const card = document.createElement(‘div’);
//
//  card.classList.add(‘img’);
//  card.dataset.name = value.name;
//  card.style.backgroundImage = `url(${value.img})`;
//  cardbox.appendChild(card);
// });
