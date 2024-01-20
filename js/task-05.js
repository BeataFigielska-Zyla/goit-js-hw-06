// Napisz skrypt, który przy wpisywaniu tekstu w polu input input#name-input (zdarzenie input) wstawia jego aktualną wartość do span#name-output. Jeśli pole input jest puste, w spanie powinien wyświetlić się tekst "Anonymous".

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function () {
    
    if (nameInput.value.trim() === "") {
        nameOutput.textContent = "Anonymous";
    }
    
    else {
        nameOutput.textContent = nameInput.value
    }
});