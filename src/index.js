const button = document.querySelector('button');
const card = document.querySelector('.card');
const cardNumber = document.querySelector('.card-number');

const randomNumberGenerator = () => {
    let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let randomNumber = Math.floor(Math.random() * numbers.length);

    return numbers[randomNumber];
};

const randomSuitGenerator = () => {
    let suits = ['spades', 'clubs', 'diamonds', 'hearts'];
    let randomSuit = Math.floor(Math.random() * suits.length);
    console.log(suits[randomSuit]);
    return suits[randomSuit];
};

window.onload = () => {
    card.classList.remove('card-front');
    card.classList.add('card-reverse');
    cardNumber.innerHTML = '';
};

const getRandomCard = () => {
    button.addEventListener('click', () => {
        card.classList.remove('card-reverse');
        card.classList.add('card-front', randomSuitGenerator());
        cardNumber.innerHTML = randomNumberGenerator();
        setTimeout(() => {
            card.classList.remove('card-front');
            card.classList.add('card-reverse');
            cardNumber.innerHTML = '';
        }, 3000);
    });
};
