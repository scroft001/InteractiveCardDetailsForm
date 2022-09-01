//onchange of input value change card appearance

//get card references
let cardHolderNumber = document.querySelector('.cardHolderNumber');
let cardHolderName = document.querySelector('.cardHolderName');
let expirationDate = document.querySelector('.expirationDate');
let cvc = document.querySelector('.cvc');

//get input value
let cardName = document.querySelector('#name');
let cardNumber = document.querySelector('#number');

cardNameUpdate = () => {
    cardHolderName.innerHTML = cardName.value
};

cardNumberUpdate = () => {
    cardHolderNumber.innerHTML = cardNumber.value
};