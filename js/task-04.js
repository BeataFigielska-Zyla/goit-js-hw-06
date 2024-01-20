// Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i nadaj jej początkową wartość wartość 0.
// Dodaj click listeners do przycisków, i przy ich pomocy zwiększaj i zmniejszaj wartość licznika.
// Aktualizuj interfejs (widok HTML) nową wartością zmiennej counterValue po każdej jej zmianie.

let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById('value');



valueSpan.textContent = counterValue;

decrementButton.addEventListener('click', function decrementClick() {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});

incrementButton.addEventListener('click', function incrementClick() {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});