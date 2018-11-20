// Turning Card:

const memoryCards = document.querySelectorAll('.memoryCard');

function turnCard(){
  this.classList.toggle('turn');
}

memoryCards.forEach(memoryCard => memoryCard.addEventListener('click', turnCard));




// Lägg till array och fixa i html istället för hårdkodning

//array logic
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
