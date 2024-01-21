// Napisz skrypt zarządzania formularzem logowania.

// Funkcjonalność przesyłania formularza form.login-form powinno zostać obsłużona przy użycie wydarzenia submit

// Podczas przesyłania formularza strona nie powinna się odświeżać.

// Jeśli w formularzu są nieuzupełnione pola, wyświetl alert z upomnieniem o tym, że wszystkie pola powinny zostać wypełnione.

// Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, pobierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości, a wartość pola - wartością właściwości. Aby otrzymać dostęp do elementów formularza użyj właściwości elements.

// Wypisz obiekt z wartościami formularza w konsoli i wyczyść wartości pól input metodą reset.

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function formSubmit(event) {
    event.preventDefault(); 

    const email = this.elements.email.value.trim();
    const password = this.elements.password.value.trim();

    if (!email || !password) {
        alert("All fields should be completed!");
    } else {
        const formData = {
            email: email,
            password: password,
        };
        console.log(formData);
        this.reset();
    }
});
