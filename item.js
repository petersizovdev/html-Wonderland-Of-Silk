// item.js

import { addToCart } from './cart.js';

const addToCartButton = document.querySelector('.button__item');
const counterInput = document.querySelector('.input__item');

let quantity = parseInt(counterInput.value) || 1;

addToCartButton.addEventListener('click', () => {
  const itemImage = document.querySelector('.item__box img').src;
  const itemName = document.querySelector('.item__desc-top h1').innerText;
  const itemSize = document.querySelector('.size h3').innerText;
  const itemPrice = parseFloat(document.querySelector('.card__right-bottom h1').innerText.replace(' р.', ''));

  const item = {
    image: itemImage,
    name: itemName,
    size: itemSize,
    price: itemPrice,
    quantity: quantity
  };

  addToCart(item);

  window.location.href = 'cart.html';
});