const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Napisz skrypt, który dla każdego elementu tablicy ingredients:
// Utworzy oddzielny element < li >.Obowiązkowo użyj metody document.createElement().
// Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
// Doda do elementu klasę item.
// Następnie jedna operacja umieści wszystkie < li > na liście ul#ingredients.


    const ingredientsList = document.getElementById('ingredients');

    
    ingredients.forEach(ingredient => {
     
      const listItem = document.createElement('li');

     
      listItem.textContent = ingredient;

      
      listItem.classList.add('item');

      
      ingredientsList.appendChild(listItem);
    });