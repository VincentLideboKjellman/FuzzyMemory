// Turning Card:

const memoryCards = document.querySelectorAll('.memoryCard');

function turnCard(){
  this.classList.toggle('turn');
}

memoryCards.forEach(memoryCard => memoryCard.addEventListener('click', turnCard));
