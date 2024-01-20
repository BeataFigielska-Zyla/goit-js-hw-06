// Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) sprawdza czy wartość wprowadzona przez użytkownika spełnia warunek walidacji (ma odpowiednią długość)

// Informacja o liczbie symboli, która powinna znajdować się w polu input, zawarta się w jego atrybucie data-length.

// Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielony, a jeśli liczba jest nieprawidłowa - czerwony.

// Aby dodać style, używaj klas CSS valid i invalid, które już dodaliśmy do plików źródłowych zadania.

const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function () {
    const enteredLength = this.value.length;
    const requiredLength = parseInt(this.getAttribute("data-length"));
    if (enteredLength === requiredLength) {
        this.classList.remove("invalid");
        this.classList.add("valid");
    } else {
        this.classList.remove("valid");
        this.classList.add("invalid");
    }
});