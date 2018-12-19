//BlackJack
//by Benedict
/* STEPS
*   Create variables to hold cards
*   Write function createDeck() to create deck for the cards
*   Create an object within the function to create the object to hold the cards
*   Let function return the deck, which is an array
*   Write function getCardString() to return the name of the cards
*   Write function getNextCard() to shuffle card and return a new card
*/

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = [ 'Ace', 'King', 'Queen', 'Jack', 'Ten',
            'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four',
            'Three', 'Two' ];

let textArea = document.getElementById('text-area');
let newGameBtn = document.getElementById('new-game-button');
let hitBtn = document.getElementById('hit-button');
let stayBtn = document.getElementById('stay-button');

hitBtn.style.display = 'none';
stayBtn.style.display = 'none';
newGameBtn.addEventListener('click', () => {
    textArea.innerText = 'Started...';
    newGameBtn.style.display = 'none';
    stayBtn.style.display = 'inline';
    hitBtn.style.display = 'inline';
});

function createDeck() {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            };
            deck.push( card );
        }
    }
    return deck;
}

function getCardString(card) {
    return card.value + ' of ' + card.suit;
}

function getNextCard() {
    return deck.shift();
}
let deck = createDeck();



let playerCards = [getNextCard(), getNextCard()];

console.log("Welcome to BlackJack");

console.log("You are dealt: ");
console.log(" " , getCardString (playerCards[0])); 
console.log(" " , getCardString (playerCards[1]));
