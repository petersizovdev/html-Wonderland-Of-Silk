const minusButtons = document.querySelectorAll('.minus-button');
const plusButtons = document.querySelectorAll('.plus-button');
const inputFields = document.querySelectorAll('.input__item');
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

minusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const inputField = inputFields[index];
    const currentValue = parseInt(inputField.value);
    if (currentValue > 1) {
      inputField.value = currentValue - 1;
    }
    updateAddToCartButton(inputFields[index]);
  });
});

plusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const inputField = inputFields[index];
    const currentValue = parseInt(inputField.value);
    if (currentValue < 10) {
      inputField.value = currentValue + 1;
    }
    updateAddToCartButton(inputFields[index]);
  });
});

function updateAddToCartButton(inputField) {
  const addToCartButton = inputField.closest('.item__desc-bottom-right').querySelector('.add-to-cart-button');
  if (parseInt(inputField.value) > 0) {
    addToCartButton.removeAttribute('disabled');
  } else {
    addToCartButton.setAttribute('disabled', '');
  }
}