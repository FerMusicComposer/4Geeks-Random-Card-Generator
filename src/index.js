const button = document.querySelector('button');
const card = document.querySelector('.card');
const cardNumber = document.querySelector('#cardNumber');
const suits = ['spades', 'clubs', 'diamonds', 'hearts'];
const cardNumberBlack = 'card-number';
const cardNumberRed = 'card-number-red';

const randomNumberGenerator = () => {
    let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let randomNumber = Math.floor(Math.random() * numbers.length);

    return numbers[randomNumber];
};

const randomSuitGenerator = suits => {
    let randomSuit = Math.floor(Math.random() * suits.length);
    console.log(suits[randomSuit]);

    return suits[randomSuit];
};

const resetSuitAndNumberClasses = () => {
    for (let index = 0; index < suits.length; index++) {
        if (card.classList.contains(suits[index])) {
            card.classList.remove(suits[index]);
            cardNumber.classList.remove(cardNumberBlack, cardNumberRed);
        }
    }
};

window.onload = () => {
    card.classList.remove('card-front');
    card.classList.add('card-reverse');
    cardNumber.innerHTML = '';
};

const getRandomCard = () => {
    button.addEventListener('click', () => {
        //Cleans the previously selected suit and number classes
        resetSuitAndNumberClasses();
        card.classList.remove('card-reverse');
        card.classList.add('card-front', randomSuitGenerator(suits));

        //Displays the number as red or black depending on the suit
        if (card.classList.contains('hearts') || card.classList.contains('diamonds')) {
            cardNumber.classList.add(cardNumberRed);
        } else {
            cardNumber.classList.add(cardNumberBlack);
        }

        cardNumber.innerHTML = randomNumberGenerator();

        //"Flips" the card back to reverse
        setTimeout(() => {
            resetSuitAndNumberClasses();
            card.classList.remove('card-front');
            card.classList.add('card-reverse');
            cardNumber.innerHTML = '';
        }, 1000);
    });
};
