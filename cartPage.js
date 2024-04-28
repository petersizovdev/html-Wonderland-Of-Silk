// combined.js

let cart = [];

function addToCart(item) {
  const existingItem = cart.find(
    (cartItem) => cartItem.name === item.name && cartItem.size === item.size
  );

  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    cart.push(item);
  }
}

function getCart() {
  return cart;
}

const addToCartButton = document.querySelector(".button__item");
const counterInput = document.querySelector(".input__item");

let quantity = parseInt(counterInput.value) || 1;

addToCartButton.addEventListener("click", () => {
  const itemImage = document.querySelector(".item__box img").src;
  const itemName = document.querySelector(".item__desc-top h1").innerText;
  const itemSize = document.querySelector(".size h3").innerText;
  const itemPrice = parseFloat(
    document
      .querySelector(".card__right-bottom h1")
      .innerText.replace(" р.", "")
  );

  const item = {
    image: itemImage,
    name: itemName,
    size: itemSize,
    price: itemPrice,
    quantity: quantity,
  };

  addToCart(item);

  window.location.href = "cart.html";
});

const cartContainer = document.querySelector(".cart__container");

function createCartCard(item) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardLeft = document.createElement("div");
  cardLeft.classList.add("card__left");
  cardLeft.innerHTML = `<img src="${item.image}" alt="${item.name}">`;
  card.appendChild(cardLeft);

  const cardRight = document.createElement("div");
  cardRight.classList.add("card__right");

  const cardRightTop = document.createElement("div");
  cardRightTop.classList.add("card__right-top");
  cardRightTop.innerHTML = `<h1>${item.name}</h1>`;
  cardRight.appendChild(cardRightTop);

  const cardRightBottom = document.createElement("div");
  cardRightBottom.classList.add("card__right-bottom");

  const sizeElement = document.createElement("div");
  sizeElement.classList.add("size");
  sizeElement.innerHTML = `<p>Размер:</p><h3>${item.size}</h3>`;
  cardRightBottom.appendChild(sizeElement);

  const priceElement = document.createElement("h1");
  priceElement.innerText = `${item.price} р.`;
  cardRightBottom.appendChild(priceElement);

  const counter = document.createElement("div");
  counter.classList.add("counter");

  const inputElement = document.createElement("input");
  inputElement.classList.add("input__item");
  inputElement.value = item.quantity;
  counter.appendChild(inputElement);

  cardRightBottom.appendChild(counter);

  cardRight.appendChild(cardRightBottom);

  card.appendChild(cardRight);

  return card;
}

function displayCart() {
  const cartItems = getCart();

  cartItems.forEach((item) => {
    const cardElement = createCartCard(item);
    cartContainer.appendChild(cardElement);
  });
}

if (window.location.pathname === "/cart.html") {
  displayCart();
}
