// Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementy li.item.

const categoriesAll = document.getElementById("categories");

const categories = categoriesAll.querySelectorAll("li.item");
console.log("Number of categories:", categories.length);

// Dla każdego elementu li.item na liście ul#categories, znajdzie i wypisze w konsoli tekst nagłówka elementu (tag <h2>) i liczbę elementów w danej kategorii (wszystkich w jej obrębie <li>).

categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const elements = category.querySelectorAll('li');
    console.log("Category:", categoryName);
    console.log("Elements:", elements.length)
});