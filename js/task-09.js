function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Napisz skrypt, który zmienia kolor tła elementu <body> (poprzez style inline) po kliknięciu na button.change-color i wyświetla wartość koloru w span.color.

// Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.



const widget = document.querySelector('.widget');
 
const colorSpan = widget.querySelector('.color');
    
const changeColorButton = widget.querySelector('.change-color');
    

changeColorButton.addEventListener('click', function () {
    
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;

  colorSpan.textContent = randomColor;
  
    });