document.getElementById("registrationForm").addEventListener("submit", event => {
    event.preventDefault();

    let isValid = true;

    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(ele => ele.style.display = "none");

    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    const nameRegex = /^[a-zA-Z]{3,30}$/;
    if (!nameRegex.test(name.value)) {
        nameError.textContent = "Vardas turi būti nuo 3 iki 30 simbolių ir sudarytas tik iš raidžių.";
        nameError.style.display = "block";
        isValid = false;
    }

    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = "Įveskite galiojantį el. pašto adresą.";
        emailError.style.display = "block";
        isValid = false;
    }

    const age = document.getElementById("age");
    const ageError = document.getElementById("ageError");
    const ageValue = new Date(age.value);
    const ageNow = new Date();
    const ageDiff = ageNow.getFullYear() - ageValue.getFullYear();
    if (ageDiff < 18 || ageDiff > 120) {
        ageError.textContent = "Amžius turi būti nuo 18 iki 120 metų.";
        ageError.style.display = "block";
        isValid = false;
    }

    const phone = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");
    const phoneRegex = /^\+?\d{1,3}[\s]?\(?\d{1,3}\)?[\s]?\d{1,4}[\s]?\d{1,4}[\s]?\d{1,4}$/;
    if (!phoneRegex.test(phone.value)) {
        phoneError.textContent = "Įveskite galiojantį telefono numerį.";
        phoneError.style.display = "block";
        isValid = false;
    }

    const password = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password.value)) {
        passwordError.textContent = "Slaptažodis turi būti bent 8 simboliai, įskaitant vieną didžiąją raidę, mažąją raidę, skaičių ir specialųjį simbolį.";
        passwordError.style.display = "block";
        isValid = false;
    }

    const confirmPassword = document.getElementById("confirm-password");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Slaptažodžiai nesutampa.";
        confirmPasswordError.style.display = "block";
        isValid = false;
    }

    if (isValid) {

        document.getElementById("successMessage").textContent = "Registracija sėkminga!";
        const successContainer = document.getElementById("successContainer");
        successContainer.classList.add("show");


        document.getElementById("registrationForm").reset();
    }
});

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = "block";
}